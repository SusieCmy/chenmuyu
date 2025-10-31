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
import TextType from '@/components/TextType'
import Image from 'next/image'
import UserTextClone from '@/components/Animation/web/UserTextClone';

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
      <div className='w-full flex mt-4'>
        <div className="w-1/3">
          <Image
            src="/QQ.png"
            alt="chenmuyu"
            width={180}
            height={180}
            className="rounded-xl mx-auto mb-6 border-4 shadow-lg"
          />
        </div>
        <div className="w-2/3">
          <h1 className="text-2xl font-bold mb-4 cursor-target w-24">
            <UserTextClone propsText="网站介绍"></UserTextClone>
          </h1>
          <TextType
            text={["欢迎来到陈慕宇的个人网站！我是一名前端开发工程师。专注于现代前端技术。这个网站会记录本人平时使用 / 学习的技术栈以及一些个人的见解。希望你能喜欢这里的内容！"]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
          />
        </div>

      </div>
      <UserTimeline />
      <UserParallax />
    </div>
  );
}