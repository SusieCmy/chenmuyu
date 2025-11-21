/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-11-20 18:54:54
 * @LastEditors: Susie 1732728869@qq.com
 * @LastEditTime: 2025-11-20 20:06:12
 * @FilePath: \susie-cmy\src\app\dialogue\page.tsx
 * @Description: 强者都是孤独的
 * 
 * Copyright (c) 2025 by 1732728869@qq.com, All Rights Reserved. 
 */
"use client";
import React, { useState } from "react";

export default function DialogueProxyPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<string>("");
    const [userId, setUserId] = useState<string>("");

    const callLocalApi = async () => {
        setLoading(true);
        setError(null);
        setResult("");
        try {
            const res = await fetch("/api/juejin/query_list", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ cursor: "0", sort_type: 2, ...(userId ? { user_id: userId } : {}) }),
            });

            const ct = res.headers.get("content-type") || "text/plain";
            const text = await res.text();
            console.log(text);

            setResult(ct.includes("application/json") ? JSON.stringify(JSON.parse(text), null, 2) : text);
            if (!res.ok) {
                setError(`HTTP ${res.status}`);
            }
        } catch (e: any) {
            setError(e?.message || "请求失败");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-screen-md mx-auto p-6 space-y-4">
            <h1 className="text-2xl font-bold">通过本地 API 调用掘金接口</h1>
            <p className="text-sm text-gray-500">页面调用 /api/juejin/query_list，由服务端请求真实掘金接口并返回结果，避免浏览器 CORS 限制。</p>

            <div className="flex gap-2 items-center">
                <input
                    className="input input-bordered flex-1"
                    placeholder="可选：输入掘金 user_id（用于按用户文章列表）"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <button className="btn btn-primary" onClick={callLocalApi} disabled={loading}>
                    {loading ? "请求中..." : "调用本地 API"}
                </button>
            </div>

            {error && <div className="alert alert-error">{error}</div>}

            <pre className="bg-base-200 p-4 rounded overflow-auto text-sm" style={{ maxHeight: 400 }}>
                {result}
            </pre>
        </div>
    );
}