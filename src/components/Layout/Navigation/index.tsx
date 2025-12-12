/*
 * @Date: 2025-12-09
 * @Description: 导航菜单组件 - 支持响应式和主题切换
 */

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { animate, utils } from "animejs"
import {
  Home,
  User,
  BookOpen,
  Briefcase,
  Mail,
  Sparkles,
  MessageCircle,
  BarChart3,
  Menu,
  X,
  Sun,
  Moon
} from "lucide-react"
import useThemeStore from "@/store/useThemeStore"
import type { MenuItem } from "@/types/navigation"

// 菜单配置
const menuItems: MenuItem[] = [
  {
    path: "/",
    label: "首页",
    icon: Home,
    description: "个人介绍"
  },
  {
    path: "/blog",
    label: "博客",
    icon: BookOpen,
    description: "技术文章"
  },
  {
    path: "/aigc",
    label: "AIGC",
    icon: Sparkles,
    description: "AI 内容"
  },
  {
    path: "/dialogue",
    label: "AI对话",
    icon: MessageCircle,
    description: "AI 对话"
  },
  {
    path: "/dashboard",
    label: "数据大屏",
    icon: BarChart3,
    description: "数据看板"
  },
  {
    path: "/projects",
    label: "项目",
    icon: Briefcase,
    description: "项目经历"
  },
  {
    path: "/about",
    label: "关于",
    icon: User,
    description: "关于我"
  },
  {
    path: "/contact",
    label: "联系",
    icon: Mail,
    description: "联系方式"
  }
]

export default function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { setThemeType, themeType } = useThemeStore()

  // 检查路由是否激活
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/" || pathname === "/home"
    }
    return pathname.startsWith(path)
  }

  // 主题切换
  const handleThemeToggle = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light')
  }

  // 移动菜单切换
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // 关闭移动菜单
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // 菜单项入场动画
  useEffect(() => {
    const menuItemElements = utils.$('.nav-menu-item')
    if (menuItemElements && menuItemElements.length > 0) {
      animate(menuItemElements, {
        opacity: [0, 1],
        translateY: [-20, 0],
        delay: (_, i) => i * 50,
        duration: 600,
        ease: 'outExpo'
      })
    }
  }, [])

  // 移动菜单动画
  useEffect(() => {
    if (isMobileMenuOpen) {
      const mobileItems = utils.$('.mobile-nav-item')
      if (mobileItems && mobileItems.length > 0) {
        animate(mobileItems, {
          opacity: [0, 1],
          translateX: [-30, 0],
          delay: (_, i) => i * 60,
          duration: 500,
          ease: 'outQuad'
        })
      }
    }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* 桌面端导航 */}
      <nav className="hidden md:flex items-center gap-2 lg:gap-3">
        {menuItems.map((item) => {
          const Icon = item.icon
          const active = isActive(item.path)

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`
                nav-menu-item
                group relative flex items-center gap-2 px-3 py-2 rounded-lg
                transition-all duration-300 cursor-target
                ${active
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'hover:bg-base-200 text-base-content/70 hover:text-base-content'
                }
              `}
              title={item.description}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>

              {/* 激活指示器 */}
              {active && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          )
        })}

        {/* 主题切换按钮 */}
        <button
          onClick={handleThemeToggle}
          className="nav-menu-item ml-2 p-2 rounded-lg hover:bg-base-200 transition-all duration-300 cursor-target"
          title={`切换到${themeType === 'light' ? '深色' : '浅色'}模式`}
        >
          {themeType === 'light' ? (
            <Moon className="w-4 h-4 text-base-content/70 hover:text-base-content" />
          ) : (
            <Sun className="w-4 h-4 text-base-content/70 hover:text-base-content" />
          )}
        </button>
      </nav>

      {/* 移动端菜单按钮 */}
      <div className="flex md:hidden items-center gap-2">
        {/* 主题切换 */}
        <button
          onClick={handleThemeToggle}
          className="p-2 rounded-lg hover:bg-base-200 transition-all duration-300"
          title={`切换到${themeType === 'light' ? '深色' : '浅色'}模式`}
        >
          {themeType === 'light' ? (
            <Moon className="w-5 h-5" />
          ) : (
            <Sun className="w-5 h-5" />
          )}
        </button>

        {/* 汉堡菜单 */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg hover:bg-base-200 transition-all duration-300"
          aria-label="切换菜单"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* 移动端下拉菜单 */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 md:hidden bg-base-100 border-2 border-base-300 rounded-2xl shadow-xl overflow-hidden backdrop-blur-md">
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.path)

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={closeMobileMenu}
                  className={`
                    mobile-nav-item
                    flex items-center gap-3 px-4 py-3 rounded-xl
                    transition-all duration-300
                    ${active
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'hover:bg-base-200 text-base-content/70 hover:text-base-content'
                    }
                  `}
                  style={{ opacity: 0 }}
                >
                  <Icon className="w-5 h-5" />
                  <div className="flex-1">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs opacity-60">{item.description}</div>
                  </div>
                  {active && (
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </Link>
              )
            })}
          </nav>
        </div>
      )}

      {/* 移动端遮罩层 */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  )
}
