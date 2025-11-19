/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-07-19 19:16:04
 * @LastEditors: Susie 1732728869@qq.com
 * @LastEditTime: 2025-11-19 21:00:23
 * @FilePath: \susie-cmy\next.config.ts
 * @Description: 强者都是孤独的
 *
 * Copyright (c) 2025 by 1732728869@qq.com, All Rights Reserved.
 */
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 静态导出配置
  output: 'export',

  // 图片优化配置（静态导出必需）
  images: {
    unoptimized: true,
  },

  // 实验性配置
  experimental: {
    // 静态生成优化
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,
  },

  // 构建ID配置（使用版本号以便更好地利用缓存）
  generateBuildId: async () => {
    return 'v0.1.0'
  },

  // 编译配置
  compiler: {
    // 移除 console.log（生产环境）
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig