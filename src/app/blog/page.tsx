/*
 * @Date: 2025-07-31 17:30:50
 * @LastEditors: cmy && 1732728869@qq.com
 * @LastEditTime: 2025-07-31 17:37:41
 * @FilePath: \susie-cmy\src\app\blog\page.tsx
 * @Description: 强者都是孤独的
 */

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '博客',
  description: '我是陈慕宇，一名热爱技术的前端开发工程师，专注于现代Web开发技术',
  keywords: ['陈慕宇', '前端工程师', '个人简介', 'Web开发'],
  openGraph: {
    title: '博客 | 陈慕宇 - iaxixi.com',
    description: '了解陈慕宇的技术背景、工作经历和个人兴趣',
    type: 'profile',
    images: ['/cmy.jpg'],
  },
  alternates: {
    canonical: 'https://www.iaxixi.com/blog',
  },
}
export default function Blog() {

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="">
      </main>
    </div>
  );
}
