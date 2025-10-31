/*
 * @Date: 2025-07-07 10:29:58
 * @LastEditors: cmy && 1732728869@qq.com
 * @LastEditTime: 2025-07-24 09:52:50
 * @FilePath: \susie-cmy\src\app\page.tsx
 * @Description: 强者都是孤独的
 */
import { Metadata } from 'next'
// import UserInfoPage from "@/components/UserInfo";
import UserTimeline from "@/components/Animation/web/UserTimeline"
import UserParallax from "@/components/Animation/web/UserParallax"

export const metadata: Metadata = {
  title: 'chenmuyu - 前端开发工程师 | iaxixi.com',
  description: 'chenmuyu，Web前端开发工程师，专注于现代前端技术开发，提供专业的前端解决方案',
  keywords: [
    'chenmuyu', 'iaxixi', '前端开发工程师', 
    'React开发', 'Next.js', 'JavaScript', 'TypeScript', 'Web开发',
    'Vue', 'Pinia', '前端开发工程师', '程序员'
  ],
  authors: [{ name: 'chenmuyu', url: 'https://www.iaxixi.com' }],
  creator: 'chenmuyu',
  publisher: 'chenmuyu',
  openGraph: {
    type: 'profile',
    locale: 'zh_CN',
    url: 'https://www.iaxixi.com',
    title: 'chenmuyu - 前端开发工程师',
    description: 'Web前端开发工程师，专注现代前端技术',
    siteName: 'iaxixi - chenmuyu',
    images: [
      {
        url: '/cmy.jpg',
        width: 1200,
        height: 630,
        alt: 'chenmuyu - 前端开发工程师',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'chenmuyu - 前端开发工程师',
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
      {/* <UserInfoPage /> */}
      <UserTimeline />
      <UserParallax />
    </div>
  );
}