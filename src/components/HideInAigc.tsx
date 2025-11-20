/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-11-19 21:36:57
 * @LastEditors: Susie 1732728869@qq.com
 * @LastEditTime: 2025-11-19 21:37:15
 * @FilePath: \susie-cmy\src\components\HideInAigc.tsx
 * @Description: 强者都是孤独的
 * 
 * Copyright (c) 2025 by 1732728869@qq.com, All Rights Reserved. 
 */
"use client";

import React from "react";
import { usePathname } from "next/navigation";

/**
 * 在 /aigc 路由下隐藏其 children；其他路径正常渲染。
 * 用于在不改动 Header 本身的情况下，选择性隐藏 Header。
 */
export default function HideInAigc({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/aigc")) return null;
  if (pathname?.startsWith("/dashboard")) return null;
  return children;
}