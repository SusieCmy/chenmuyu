/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-12-04
 * @Description: AI 对话页面 - DeepSeek 集成 - 响应式版本 - 性能优化
 */
"use client";
import React, { useState, useRef, useEffect, memo } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Bot, User, Send, Trash2, Sparkles, Loader2, Zap, Code, BookOpen, Rocket } from "lucide-react";
import type { Message } from "@/types/chat";

// 消息项组件 - 使用 memo 优化性能，防止不必要的重新渲染
const MessageItem = memo(({ message }: { message: Message }) => {
  return (
    <div
      className={`flex gap-2 sm:gap-3 md:gap-4 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* 头像 - 响应式大小 */}
      <div className="flex-shrink-0 mt-1">
        <div
          className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${message.role === "user"
            ? "bg-primary"
            : "bg-secondary"
            }`}
        >
          {message.role === "user" ? (
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary-content" strokeWidth={2.5} />
          ) : (
            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-content" strokeWidth={2.5} />
          )}
        </div>
      </div>

      {/* 消息内容 - 响应式 */}
      <div className={`flex-1 max-w-full sm:max-w-3xl ${message.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
        <div className={`flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}>
          <span className="text-xs sm:text-sm font-semibold text-base-content">
            {message.role === "user" ? "你" : "AI"}
          </span>
          <span className="text-[10px] sm:text-xs text-base-content/50">
            {new Date(message.timestamp).toLocaleTimeString("zh-CN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
        <div
          className={`px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 rounded-xl sm:rounded-2xl ${message.role === "user"
            ? "bg-primary text-primary-content rounded-tr-sm"
            : "bg-base-200 text-base-content rounded-tl-sm"
            }`}
        >
          {message.role === "assistant" ? (
            <div className="prose prose-xs sm:prose-sm dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        className="rounded-lg sm:rounded-xl !my-2 sm:!my-3 text-xs sm:text-sm"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className="px-1 sm:px-1.5 py-0.5 rounded bg-base-300 text-primary text-[0.85em] sm:text-[0.9em]" {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="whitespace-pre-wrap text-xs sm:text-sm leading-relaxed">
              {message.content}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // 自定义比较函数：只有当消息内容真正改变时才重新渲染
  return prevProps.message.id === nextProps.message.id &&
    prevProps.message.content === nextProps.message.content;
});

MessageItem.displayName = 'MessageItem';

export default function DialoguePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // 自动滚动到底部
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // 发送消息
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat/deepseek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`API 错误: ${response.status}`);
      }

      // 处理流式响应
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) {
        throw new Error("无法获取响应流");
      }

      let assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "",
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter((line) => line.trim() !== "");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") continue;

            try {
              const json = JSON.parse(data);
              const content = json.choices?.[0]?.delta?.content;

              if (content) {
                assistantMessage.content += content;
                setMessages((prev) => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = {
                    ...assistantMessage,
                  };
                  return newMessages;
                });
              }
            } catch (e) {
              console.error("解析 SSE 数据错误:", e);
            }
          }
        }
      }
    } catch (error: any) {
      console.error("发送消息错误:", error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        role: "assistant",
        content: `❌ 错误: ${error.message || "发送失败，请重试"}`,
        timestamp: Date.now(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // 回车发送
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // 清空对话
  const handleClear = () => {
    setMessages([]);
    inputRef.current?.focus();
  };

  return (
    <div className="h-screen flex flex-col bg-base-100">
      {/* 顶部导航栏 - 响应式 */}
      <div className="flex-none border-b border-base-300 bg-base-100">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary-content" strokeWidth={2} />
            </div>
            <div>
              <h1 className="text-base sm:text-lg md:text-xl font-bold text-base-content">
                AI 助手
              </h1>
              <p className="text-[10px] sm:text-xs text-base-content/60">DeepSeek AI</p>
            </div>
          </div>
          {messages.length > 0 && (
            <button
              onClick={handleClear}
              className="cmy-btn cmy-btn-ghost cmy-btn-sm gap-1 sm:gap-2 text-xs sm:text-sm"
            >
              <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">清空</span>
            </button>
          )}
        </div>
      </div>

      {/* 聊天区域 - 只有这里滚动，响应式 */}
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] sm:min-h-[500px] text-center px-4">
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative bg-base-100 p-4 sm:p-6 rounded-3xl shadow-xl border border-base-200">
                  <div className="bg-primary/10 p-3 sm:p-4 rounded-2xl">
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-base-content">
                开始新对话
              </h2>
              <p className="text-sm sm:text-base text-base-content/60 mb-8 max-w-md mx-auto">
                探索 AI 的无限可能，从以下话题开始，或输入您感兴趣的任何内容
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
                {[
                  { icon: Zap, text: "解释量子计算原理", color: "text-yellow-500" },
                  { icon: Code, text: "写一个 React Hook", color: "text-blue-500" },
                  { icon: BookOpen, text: "TypeScript 学习建议", color: "text-green-500" },
                  { icon: Rocket, text: "网站性能优化技巧", color: "text-purple-500" },
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInput(item.text)}
                    className="group flex items-center gap-3 p-4 rounded-xl bg-base-100 border border-base-200 hover:border-primary/50 hover:shadow-md transition-all duration-200 text-left"
                  >
                    <div className={`p-2 rounded-lg bg-base-200 group-hover:bg-primary/10 transition-colors ${item.color}`}>
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-base-content group-hover:text-primary transition-colors">
                      {item.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {messages.map((message) => (
                <MessageItem key={message.id} message={message} />
              ))}

              {/* 加载动画 - 响应式 */}
              {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                <div className="flex gap-2 sm:gap-3 md:gap-4 animate-slide-in-up">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center bg-secondary">
                      <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-content" strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="flex-1 max-w-full sm:max-w-3xl">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                      <span className="text-xs sm:text-sm font-semibold text-base-content">AI</span>
                    </div>
                    <div className="px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 rounded-xl sm:rounded-2xl rounded-tl-sm bg-base-200">
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 text-primary animate-spin" />
                        <span className="text-xs sm:text-sm text-base-content/60">思考中...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>

      {/* 输入框区域 - 响应式 */}
      <div className="flex-none border-t border-base-300 bg-base-100 safe-bottom">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
          <div className="flex gap-2 sm:gap-3 bg-base-200 rounded-xl p-2 sm:p-3 border-2 border-base-300 focus-within:border-primary transition-colors duration-200">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="输入消息..."
              className="flex-1 resize-none bg-transparent border-0 outline-none focus:outline-none text-xs sm:text-sm md:text-base min-h-[2.5rem] sm:min-h-[3rem] max-h-32 px-2 py-2 text-base-content placeholder:text-base-content/50"
              rows={1}
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="cmy-btn cmy-btn-primary self-end px-3 sm:px-4 h-10 sm:h-12 min-h-[2.5rem] sm:min-h-[3rem]"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              ) : (
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}