/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-08-18 20:45:19
 * @LastEditors: Susie 1732728869@qq.com
 * @LastEditTime: 2025-08-20 20:22:42
 * @FilePath: \susie-cmy\src\app\blog\page.tsx
 * @Description: 强者都是孤独的
 * 
 * Copyright (c) 2025 by 1732728869@qq.com, All Rights Reserved. 
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import UserTextClone from '@/components/Animation/web/UserTextClone';
import { getTagStyle } from '@/lib/tagStyles'

export const metadata: Metadata = {
  title: '技术博客',
  description: '分享前端开发经验、技术心得和学习笔记',
  keywords: ['技术博客', '前端开发', 'React', 'Next.js', 'JavaScript', 'TypeScript'],
  openGraph: {
    title: '技术博客 | chenmuyu - iaxixi.com',
    description: '分享前端开发经验、技术心得和学习笔记',
    type: 'website',
    images: ['/cmy.jpg'],
  },
  alternates: {
    canonical: 'https://www.iaxixi.com/blog',
  },
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] p-6">
      <main className="mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-4 cursor-target w-24">
            <UserTextClone propsText="技术博客"></UserTextClone>
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group relative bg-base-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-base-300 overflow-hidden hover:border-primary/30"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="p-6 flex flex-col h-full">
                  {/* 标题和描述区域 */}
                  <div className="flex-1 mb-6">
                    <h2 className="text-xl font-bold mb-3 text-base-content group-hover:text-primary transition-colors duration-300 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-base-content/70 text-sm leading-relaxed line-clamp-3">
                      {post.description}
                    </p>
                  </div>

                  {/* 标签区域 */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs font-semibold rounded-full transition-transform duration-200 hover:scale-105 cursor-target ${getTagStyle(tag)}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 底部信息区域 */}
                  <div className="flex items-center justify-between pt-4 border-t border-base-300">
                    <time
                      dateTime={post.date}
                      className="text-xs text-base-content/60 font-medium"
                    >
                      {new Date(post.date).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <div className="flex items-center gap-1 text-xs text-base-content/60">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{post.readingTime} 分钟</span>
                    </div>
                  </div>

                  {/* 悬停箭头指示器 */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              暂无博客文章，敬请期待！
            </p>
          </div>
        )}
      </main>
    </div>
  )
}
