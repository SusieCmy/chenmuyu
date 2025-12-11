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
  { icon: Code2, label: '项目经验', value: '5+年', iconColor: 'text-blue-500' },
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

    // 技术栈分类卡片动画
    const techCategories = utils.$('.tech-category')
    if (techCategories && techCategories.length > 0) {
      animate(techCategories, {
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.95, 1],
        delay: (_, i) => 600 + i * 80,
        duration: 600,
        ease: 'outExpo'
      })
    }

    // 技术标签动画
    const techTags = utils.$('.tech-tag')
    if (techTags && techTags.length > 0) {
      animate(techTags, {
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: (_, i) => 800 + i * 20,
        duration: 400,
        ease: 'outBack'
      })
    }

    // 学习中的技术动画
    const learningSection = utils.$('.learning-section')
    if (learningSection && learningSection.length > 0) {
      animate(learningSection, {
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 1000,
        duration: 600,
        ease: 'outExpo'
      })
    }

    const learningTags = utils.$('.learning-tag')
    if (learningTags && learningTags.length > 0) {
      animate(learningTags, {
        opacity: [0, 1],
        scale: [0.9, 1],
        delay: (_, i) => 1200 + i * 100,
        duration: 500,
        ease: 'outBack'
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
      />

      {/* 主要信息区域 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

        {/* 左侧：个人介绍卡片 */}
        <div className="lg:col-span-2">
          <div className="info-card bg-base-100 border border-base-300 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 h-full">

            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center md:items-start">

              {/* 头像 */}
              <div className="relative shrink-0 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/QQ.png"
                  alt="陈慕宇"
                  priority
                  width={140}
                  height={140}
                  className="rounded-2xl shadow-md relative z-10 ring-2 ring-base-300 group-hover:ring-primary/50 transition-all duration-300"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-3 border-base-100 z-20 animate-pulse"></div>
              </div>

              {/* 个人信息 */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-base-content cursor-target hover:text-primary transition-colors"
                    onClick={() => sendGAEvent('event', 'add', { value: 'xyz' })}>
                  陈慕宇
                </h1>
                <p className="text-base sm:text-lg text-base-content/70 font-medium mb-4">
                  前端开发工程师
                </p>

                {/* 标签 */}
                <div className="flex flex-wrap gap-2 mb-5 justify-center md:justify-start">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors cursor-target">
                    <Sparkles className="w-3.5 h-3.5" />
                    Web Developer
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/10 text-secondary rounded-lg text-sm font-medium hover:bg-secondary/20 transition-colors cursor-target">
                    <Code2 className="w-3.5 h-3.5" />
                    Full Stack
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent rounded-lg text-sm font-medium hover:bg-accent/20 transition-colors cursor-target">
                    <Heart className="w-3.5 h-3.5" />
                    Open Source
                  </span>
                </div>

                {/* 位置和时间 */}
                <div className="flex flex-wrap gap-4 text-sm text-base-content/60 mb-5 justify-center md:justify-start">
                  <div className="flex items-center gap-1.5 hover:text-base-content transition-colors">
                    <MapPin className="w-4 h-4" />
                    <span>长沙</span>
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-base-content transition-colors">
                    <Calendar className="w-4 h-4" />
                    <span>2019 至今</span>
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
                        className="p-2.5 bg-base-200 hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-200 cursor-target transform hover:scale-110"
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
            <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-base-300">
              <h2 className="text-lg font-semibold mb-3 text-base-content flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                关于我
              </h2>
              <div className="text-base-content/70 leading-relaxed text-sm sm:text-base">
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
        <div className="lg:col-span-1">
          <div className="info-card bg-base-100 border border-base-300 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 h-full flex flex-col">

            <h2 className="text-xl font-semibold mb-6 cursor-target flex items-center gap-2"
                onClick={() => sendGTMEvent({ event: 'cmyClicked', value: 'xyz' })}>
              <Award className="w-5 h-5 text-primary" />
              <UserTextClone propsText="数据统计"></UserTextClone>
            </h2>

            <div className="grid grid-cols-2 gap-3 flex-1">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="stat-item bg-gradient-to-br from-base-200/50 to-base-200/30 rounded-xl p-4 hover:from-base-200 hover:to-base-200/70 transition-all duration-200 cursor-target opacity-0 group"
                  >
                    <Icon className={`w-5 h-5 mb-2 ${stat.iconColor} group-hover:scale-110 transition-transform`} />
                    <div className="text-xl sm:text-2xl font-bold mb-1 text-base-content">{stat.value}</div>
                    <div className="text-xs text-base-content/60">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* 快速链接 */}
            <div className="mt-6 pt-6 border-t border-base-300">
              <h3 className="text-sm font-semibold mb-3 text-base-content/70 flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                快速访问
              </h3>
              <div className="space-y-2">
                <Link href="/blog" className="flex items-center justify-between p-3 bg-base-200/50 hover:bg-primary/10 rounded-lg transition-all duration-200 cursor-target group/link border border-transparent hover:border-primary/20">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">技术博客</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity text-primary" />
                </Link>

                <Link href="/projects" className="flex items-center justify-between p-3 bg-base-200/50 hover:bg-secondary/10 rounded-lg transition-all duration-200 cursor-target group/link border border-transparent hover:border-secondary/20">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium">项目经历</span>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity text-secondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 技术栈区域 */}
      <div className="info-card bg-base-100 border border-base-300 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -z-10"></div>

        <div className="relative">
          <h2 className="text-xl font-semibold mb-6 cursor-target flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            <UserTextClone propsText="技术广度"></UserTextClone>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(techStack).map(([category, techs]) => {
              const categoryConfig = {
                frontend: {
                  icon: Code2,
                  label: '前端框架',
                  color: 'primary',
                  bgGradient: 'from-blue-500/10 to-cyan-500/10'
                },
                styling: {
                  icon: Sparkles,
                  label: '样式方案',
                  color: 'secondary',
                  bgGradient: 'from-purple-500/10 to-pink-500/10'
                },
                tools: {
                  icon: Briefcase,
                  label: '开发工具',
                  color: 'accent',
                  bgGradient: 'from-orange-500/10 to-yellow-500/10'
                },
                others: {
                  icon: Award,
                  label: '其他技能',
                  color: 'text-purple-500',
                  bgGradient: 'from-indigo-500/10 to-violet-500/10'
                }
              }

              const config = categoryConfig[category as keyof typeof categoryConfig]
              const Icon = config.icon

              return (
                <div
                  key={category}
                  className={`tech-category group p-5 rounded-xl border border-base-300 bg-gradient-to-br ${config.bgGradient} hover:border-${config.color}/30 transition-all duration-300 hover:shadow-lg opacity-0`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`p-2 bg-base-100 rounded-lg group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-4 h-4 text-${config.color}`} />
                    </div>
                    <h3 className="text-sm font-bold text-base-content/80 tracking-wide">
                      {config.label}
                    </h3>
                    <div className="ml-auto">
                      <span className="text-xs font-semibold text-base-content/40 bg-base-200 px-2 py-1 rounded-full">
                        {techs.length}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => {
                      const tagLower = tech.toLowerCase().replace(/\s+/g, '-').replace('.', '')
                      return (
                        <span
                          key={tech}
                          className={`tech-tag px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-md cursor-target hover:-translate-y-0.5 opacity-0 ${getTagStyle(tagLower)}`}
                        >
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* 学习中的技术 */}
          <div className="learning-section mt-8 p-5 rounded-xl border-2 border-dashed border-accent/30 bg-accent/5 hover:bg-accent/10 transition-all duration-300 opacity-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative">
                <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                <div className="absolute inset-0 blur-sm">
                  <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-accent flex items-center gap-2">
                正在学习
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-ping"></span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Rust', 'Go', 'Docker', 'Kubernetes'].map((tech) => (
                <span
                  key={tech}
                  className="learning-tag group/tech px-4 py-2 text-sm font-medium rounded-lg bg-base-100 text-accent border-2 border-accent/40 hover:border-accent hover:bg-accent hover:text-accent-content hover:scale-105 transition-all duration-200 cursor-target relative overflow-hidden opacity-0"
                >
                  <span className="relative z-10">{tech}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-500"></div>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoPage
