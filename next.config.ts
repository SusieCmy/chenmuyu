/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-07-19 19:16:04
 * @LastEditors: Susie 1732728869@qq.com
 * @LastEditTime: 2025-08-24 15:29:59
 * @FilePath: \susie-cmy\next.config.ts
 * @Description: 强者都是孤独的
 * 
 * Copyright (c) 2025 by 1732728869@qq.com, All Rights Reserved. 
 */
/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next'
const nextConfig: NextConfig = {
  // distDir: 'dist',
  output: 'export',
  generateEtags: false,
  experimental: {
    serverComponentsHmrCache: false, // defaults to true
    staticGenerationRetryCount: 1,
    staticGenerationMaxConcurrency: 8,
    staticGenerationMinPagesPerWorker: 25,
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  // 构建时清空缓存
  generateBuildId: async () => {
    // 使用时间戳作为构建ID，确保每次构建都是新的
    return `build-${Date.now()}`
  },
  // 编译配置
  compiler: {
    // 移除 console.log（生产环境）
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // 缓存配置
  onDemandEntries: {
    // 页面在内存中保留的时间（毫秒）
    maxInactiveAge: 25 * 1000,
    // 同时保留的页面数
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig