/*
 * @Date: 2025-12-09
 * @LastEditors: Claude Code
 * @Description: 现代化个人信息组件 - 优化版
 */
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { animate, utils } from 'animejs'
import {
  Github,
  Mail,
  MapPin,
  Calendar,
  Code2,
  Award,
  BookOpen,
  Briefcase,
  Sparkles,
  ExternalLink,
  Coffee,
  Heart
} from 'lucide-react'
import TextType from '@/components/UI/TextType'
import UserTextClone from '@/components/Animation/web/UserTextClone'
import { getTagStyle } from '@/lib/tagStyles'
import { sendGAEvent, sendGTMEvent } from '@next/third-parties/google'
import TargetCursor from "@/components/UI/TargetCursor"

// 技术栈配置
const techStack = {
  frontend: ['JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js'],
  styling: ['Tailwind CSS', 'CSS3', 'SCSS', 'DaisyUI'],
  tools: ['Git', 'Vite', 'Webpack', 'npm', 'pnpm'],
  others: ['Node.js', 'GSAP', 'Anime.js', 'Zustand']
}

// 统计数据
const stats = [
  { icon: Code2, label: '项目经验', value: '3+年', iconColor: 'text-blue-500' },
  { icon: BookOpen, label: '技术文章', value: '50+篇', iconColor: 'text-green-500' },
  { icon: Award, label: '开源贡献', value: '20+次', iconColor: 'text-purple-500' },
  { icon: Coffee, label: '代码行数', value: '100k+', iconColor: 'text-orange-500' },
]

// 社交链接
const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:1732728869@qq.com',
  },
]

const UserInfoPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // 入场动画
  useEffect(() => {
    const cards = utils.$('.info-card')
    if (cards && cards.length > 0) {
      animate(cards, {
        opacity: [0, 1],
        translateY: [40, 0],
        delay: (_, i) => i * 100,
        duration: 800,
        ease: 'outExpo'
      })
    }

    const statItems = utils.$('.stat-item')
    if (statItems && statItems.length > 0) {
      animate(statItems, {
        scale: [0.8, 1],
        opacity: [0, 1],
        delay: (_, i) => 400 + i * 80,
        duration: 600,
        ease: 'outBack'
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
      />

      {/* 主要信息区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">

        {/* 左侧：个人介绍卡片 */}
        <div className="lg:col-span-8">
          <div className="info-card bg-base-100 border border-base-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0">

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

              {/* 头像 */}
              <div className="relative shrink-0">
                <Image
                  src="/QQ.png"
                  alt="chenmuyu"
                  priority
                  width={140}
                  height={140}
                  className="rounded-2xl shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-3 border-base-100"></div>
              </div>

              {/* 个人信息 */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-2 text-base-content cursor-target"
                    onClick={() => sendGAEvent('event', 'add', { value: 'xyz' })}>
                  陈慕宇
                </h1>
                <p className="text-lg text-base-content/60 font-medium mb-4">
                  前端开发工程师
                </p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    Web Developer
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/10 text-secondary rounded-lg text-sm font-medium">
                    <Code2 className="w-3.5 h-3.5" />
                    Full Stack
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm font-medium">
                    <Heart className="w-3.5 h-3.5" />
                    Open Source
                  </span>
                </div>

                {/* 位置和时间 */}
                <div className="flex flex-wrap gap-4 text-sm text-base-content/60 mb-5 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    <span>中国</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>2020 至今</span>
                  </div>
                </div>

                {/* 社交链接 */}
                <div className="flex gap-2 justify-center md:justify-start">
                  {socialLinks.map((link) => {
                    const Icon = link.icon
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="p-2.5 bg-base-200 hover:bg-base-300 rounded-lg transition-colors cursor-target"
                        title={link.label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-5 h-5" />
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* 个人简介 */}
            <div className="mt-8 pt-8 border-t border-base-300">
              <h2 className="text-lg font-semibold mb-3 text-base-content">关于我</h2>
              <div className="text-base-content/70 leading-relaxed">
                <TextType
                  text={["欢迎来到陈慕宇的个人网站！我是一名前端开发工程师，专注于现代前端技术。这个网站会记录本人平时使用 / 学习的技术栈以及一些个人的见解。希望你能喜欢这里的内容！"]}
                  typingSpeed={50}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：统计数据卡片 */}
        <div className="lg:col-span-4">
          <div className="info-card bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0">

            <h2 className="text-xl font-semibold mb-6 cursor-target flex items-center gap-2"
                onClick={() => sendGTMEvent({ event: 'cmyClicked', value: 'xyz' })}>
              <UserTextClone propsText="数据统计"></UserTextClone>
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className={`stat-item bg-base-200/50 rounded-xl p-4 hover:bg-base-200 transition-colors cursor-target opacity-0`}
                  >
                    <Icon className={`w-5 h-5 mb-2 ${stat.iconColor}`} />
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-xs text-base-content/60">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* 快速链接 */}
            <div className="mt-6 pt-6 border-t border-base-300">
              <h3 className="text-sm font-semibold mb-3 text-base-content/70">快速访问</h3>
              <div className="space-y-2">
                <Link href="/blog" className="flex items-center justify-between p-3 bg-base-200/50 hover:bg-base-200 rounded-lg transition-colors cursor-target group/link">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">技术博客</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                </Link>

                <Link href="/projects" className="flex items-center justify-between p-3 bg-base-200/50 hover:bg-base-200 rounded-lg transition-colors cursor-target group/link">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium">项目经历</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 技术栈区域 */}
      <div className="info-card bg-base-100 border border-base-300 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 opacity-0">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <Code2 className="w-6 h-6 text-primary" />
          <UserTextClone propsText="技术���"></UserTextClone>
        </h2>

        <div className="space-y-6">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-base-content/60 uppercase mb-3 tracking-wide">
                {category === 'frontend' && '前端框架'}
                {category === 'styling' && '样式方案'}
                {category === 'tools' && '开发工具'}
                {category === 'others' && '其他技能'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => {
                  const tagLower = tech.toLowerCase().replace(/\s+/g, '-').replace('.', '')
                  return (
                    <span
                      key={tech}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 cursor-target shadow-sm ${getTagStyle(tagLower)}`}
                    >
                      {tech}
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* 学习中的技术 */}
        <div className="mt-8 pt-8 border-t border-base-300">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <h3 className="text-lg font-semibold">正在学习</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Rust', 'Go', 'Docker', 'Kubernetes'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium rounded-lg bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-colors cursor-target"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoPage
