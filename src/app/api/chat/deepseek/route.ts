import { NextRequest } from "next/server";
import type { DeepSeekChatRequest } from "@/types/chat";

export const dynamic = "force-dynamic";

const DEEPSEEK_API_URL = "https://api.deepseek.com/v1/chat/completions";
const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

export async function POST(req: NextRequest) {
  try {
    // 检查 API KEY
    if (!DEEPSEEK_API_KEY) {
      return new Response(
        JSON.stringify({ error: "DeepSeek API KEY 未配置" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 解析请求体
    const body = await req.json();
    const { messages, model = "deepseek-chat", temperature = 0.7, max_tokens = 2000 } = body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: "消息列表不能为空" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 构建 DeepSeek API 请求
    const deepseekRequest: DeepSeekChatRequest = {
      model,
      messages: messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })),
      stream: true, // 启用流式响应
      temperature,
      max_tokens,
    };

    // 调用 DeepSeek API
    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify(deepseekRequest),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("DeepSeek API 错误:", errorText);
      return new Response(
        JSON.stringify({ error: `DeepSeek API 错误: ${response.status}` }),
        {
          status: response.status,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // 返回流式响应
    return new Response(response.body, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });

  } catch (error: any) {
    console.error("API Route 错误:", error);
    return new Response(
      JSON.stringify({ error: error?.message || "服务器内部错误" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
