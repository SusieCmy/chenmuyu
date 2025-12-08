/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-12-05
 * @Description: 对话页面头部组件
 */

import React from "react";
import { Sparkles, Trash2 } from "lucide-react";

interface ChatHeaderProps {
    hasMessages: boolean;
    onClear: () => void;
}

export function ChatHeader({ hasMessages, onClear }: ChatHeaderProps) {
    return (
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
                {hasMessages && (
                    <button
                        onClick={onClear}
                        className="cmy-btn cmy-btn-ghost cmy-btn-sm gap-1 sm:gap-2 text-xs sm:text-sm"
                    >
                        <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">清空</span>
                    </button>
                )}
            </div>
        </div>
    );
}
