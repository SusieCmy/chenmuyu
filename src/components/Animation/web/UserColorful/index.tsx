/*
 * @Date: 2025-07-25 08:32:47
 * @LastEditors: cmy && 1732728869@qq.com
 * @LastEditTime: 2025-07-25 09:29:36
 * @FilePath: \susie-cmy\src\components\Animation\UserColorful\index.tsx
 * @Description: 强者都是孤独的
 */
import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 3,
  showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
    backgroundSize: "400% 100%",
    animation: `gradientMove ${animationSpeed}s ease-in-out infinite`,
  };

  return (
    <div
      className={`relative flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none"
          style={gradientStyle} // 移除冲突的 animate-gradient 类
        >
          <div
            className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      )}
      <div
        className="inline-block relative z-2 text-transparent bg-cover"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// 确保你的 tailwind.config.js 包含以下配置：
/*
module.exports = {
  theme: {
    extend: {
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        gradientMove: 'gradientMove 3s ease-in-out infinite'
      },
    },
  },
  plugins: [],
};
*/