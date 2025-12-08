/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-12-05
 * @Description: 消息输入框组件
 */

import React, { forwardRef } from "react";
import { Send, Loader2 } from "lucide-react";

interface MessageInputProps {
    value: string;
    onChange: (value: string) => void;
    onSend: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    disabled: boolean;
    isLoading: boolean;
}

export const MessageInput = forwardRef<HTMLTextAreaElement, MessageInputProps>(
    ({ value, onChange, onSend, onKeyDown, disabled, isLoading }, ref) => {
        return (
            <div className="flex-none border-t border-base-300 bg-base-100 safe-bottom">
                <div className="max-w-4xl mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                    <div className="flex gap-2 sm:gap-3 bg-base-200 rounded-xl p-2 sm:p-3 border-2 border-base-300 focus-within:border-primary transition-colors duration-200">
                        <textarea
                            ref={ref}
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            onKeyDown={onKeyDown}
                            placeholder="输入消息..."
                            className="flex-1 resize-none bg-transparent border-0 outline-none focus:outline-none text-xs sm:text-sm md:text-base min-h-[2.5rem] sm:min-h-[3rem] max-h-32 px-2 py-2 text-base-content placeholder:text-base-content/50"
                            rows={1}
                            disabled={disabled}
                        />
                        <button
                            onClick={onSend}
                            disabled={!value.trim() || isLoading}
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
        );
    }
);

MessageInput.displayName = 'MessageInput';
