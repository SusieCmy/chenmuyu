/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-12-05
 * @Description: 消息项组件
 */

import React, { memo } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Bot, User, Loader2, RotateCcw } from "lucide-react";
import type { Message } from "@/types/chat";

interface MessageItemProps {
    message: Message;
    onRegenerate?: () => void;
    isLoading?: boolean;
    isStreaming?: boolean;
}

export const MessageItem = memo(({ message, onRegenerate, isLoading, isStreaming }: MessageItemProps) => {
    const showLoading = message.role === "assistant" && !message.content && isLoading;

    return (
        <div className={`flex gap-2 sm:gap-3 md:gap-4 ${message.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
            {/* 头像 */}
            <div className="flex-shrink-0 mt-1">
                <div
                    className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center ${message.role === "user" ? "bg-primary" : "bg-secondary"
                        }`}
                >
                    {message.role === "user" ? (
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-primary-content" strokeWidth={2.5} />
                    ) : (
                        <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-content" strokeWidth={2.5} />
                    )}
                </div>
            </div>

            {/* 消息内容 */}
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
                    {showLoading ? (
                        <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 text-primary animate-spin" />
                            <span className="text-xs sm:text-sm text-base-content/60">思考中...</span>
                        </div>
                    ) : message.role === "assistant" && message.content ? (
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

                {/* AI 消息操作按钮 */}
                {message.role === "assistant" && onRegenerate && message.content && !isStreaming && (
                    <button
                        onClick={onRegenerate}
                        className="mt-2 text-xs text-base-content/50 hover:text-primary flex items-center gap-1 transition-colors"
                    >
                        <RotateCcw className="w-3 h-3" />
                        <span>重新生成</span>
                    </button>
                )}
            </div>
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.message.id === nextProps.message.id &&
        prevProps.message.content === nextProps.message.content &&
        prevProps.isLoading === nextProps.isLoading &&
        prevProps.isStreaming === nextProps.isStreaming;
});

MessageItem.displayName = 'MessageItem';
