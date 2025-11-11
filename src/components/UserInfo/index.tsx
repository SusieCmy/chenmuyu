/*
 * @Date: 2025-07-09 11:22:00
 * @LastEditors: cmy && 1732728869@qq.com
 * @LastEditTime: 2025-11-11 10:55:10
 * @FilePath: \chenmuyu\src\components\UserInfo\index.tsx
 * @Description: 强者都是孤独的
 */
'use client'
import Image from 'next/image'
import TextType from '@/components/TextType'
import UserTextClone from '@/components/Animation/web/UserTextClone';
import { getTagStyle } from '@/lib/tagStyles'
import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google'

const UserInfoPage = () => {
  return (
    <div className='grid grid-cols-[auto_1fr_auto] gap-6 mt-4 items-start max-md:grid-cols-2'>
      <div>
        <Image
          src="/QQ.png"
          alt="chenmuyu"
          priority
          width={180}
          height={180}
          className="rounded-xl mb-6 border-4 shadow-lg"
        />
      </div>
      <div className='min-w-0 max-md:hidden'>
        <h1 className="text-2xl font-bold mb-4 cursor-target w-24" onClick={() => sendGAEvent('event', 'add', { value: 'xyz' })}>
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
      <div className='w-64'>
        <h1 className="text-2xl font-bold mb-4 cursor-target w-32" onClick={() => sendGTMEvent({ event: 'cmyClicked', value: 'xyz' })}>
          <UserTextClone propsText="个人技术栈"></UserTextClone>
        </h1>
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {['javascript', 'typescript', 'vue', 'vite', 'git'].map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-transform duration-200 hover:scale-105 cursor-target ${getTagStyle(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default UserInfoPage;

