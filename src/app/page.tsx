/*
 * @Date: 2025-07-07 10:29:58
 * @LastEditors: cmy && 1732728869@qq.com
 * @LastEditTime: 2025-07-24 09:52:50
 * @FilePath: \susie-cmy\src\app\page.tsx
 * @Description: 强者都是孤独的
 */
import { Metadata } from 'next'
import UserInfoPage from "@/components/UserInfo";
import UserTimeline from "@/components/Animation/web/UserTimeline"
import UserParallax from "@/components/Animation/web/UserParallax"

export const metadata: Metadata = {
  title: '陈慕宇 - 前端开发工程师 | iaxixi.com',
  description: '陈慕宇，Web前端开发工程师，专注于React、Next.js、JavaScript等现代前端技术开发，提供专业的前端解决方案',
  keywords: [
    '陈慕宇', 'iaxixi', '前端开发工程师', 
    'React开发', 'Next.js', 'JavaScript', 'TypeScript', 'Web开发',
    '前端技术专家', '程序员'
  ],
  authors: [{ name: '陈慕宇', url: 'https://www.iaxixi.com' }],
  creator: '陈慕宇',
  publisher: '陈慕宇',
  openGraph: {
    type: 'profile',
    locale: 'zh_CN',
    url: 'https://www.iaxixi.com',
    title: '陈慕宇 - 前端开发工程师',
    description: 'Web前端开发工程师，专注现代前端技术',
    siteName: 'iaxixi - 陈慕宇',
    images: [
      {
        url: '/cmy.jpg',
        width: 1200,
        height: 630,
        alt: '陈慕宇 - 前端开发工程师',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '陈慕宇 - 前端开发工程师',
    description: 'Web前端开发工程师',
    images: ['/cmy.jpg'],
  },
  alternates: {
    canonical: 'https://www.iaxixi.com',
  },
}

export default function Index() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <UserInfoPage />
      <UserTimeline />
      <UserParallax />
    </div>
  );
}