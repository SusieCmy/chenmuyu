/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-12-05
 * @Description: 空状态组件
 */

import React from "react";
import { Sparkles } from "lucide-react";
import { QUICK_PROMPTS } from "../constants";

interface EmptyStateProps {
    onSelectPrompt: (text: string) => void;
}

export function EmptyState({ onSelectPrompt }: EmptyStateProps) {
    return (
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
                {QUICK_PROMPTS.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => onSelectPrompt(item.text)}
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
    );
}
