/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-08-18 20:45:19
 * @LastEditors: Susie 1732728869@qq.com
 * @LastEditTime: 2025-08-19 22:16:42
 * @FilePath: \susie-cmy\src\app\blog\page.tsx
 * @Description: 强者都是孤独的
 * 
 * Copyright (c) 2025 by 1732728869@qq.com, All Rights Reserved. 
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'
import UserTextClone from '@/components/Animation/web/UserTextClone';

export const metadata: Metadata = {
  title: '技术博客',
  description: '分享前端开发经验、技术心得和学习笔记',
  keywords: ['技术博客', '前端开发', 'React', 'Next.js', 'JavaScript', 'TypeScript'],
  openGraph: {
    title: '技术博客 | 陈慕宇 - iaxixi.com',
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
          <h1 className="text-2xl font-bold mb-4">
            <UserTextClone propsText="技术博客"></UserTextClone>
          </h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-blue-600"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-3 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium  rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm ">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>约 {post.readingTime} 分钟阅读</span>
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
