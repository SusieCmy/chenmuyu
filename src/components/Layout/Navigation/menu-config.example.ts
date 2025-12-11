/*
 * @Date: 2025-12-09
 * @Description: 菜单配置示例 - 演示如何自定义菜单项
 */

import {
  Home,
  User,
  BookOpen,
  Briefcase,
  Mail,
  Sparkles,
  MessageCircle,
  BarChart3,
  FileText,
  Github
} from "lucide-react"

// 可选图标（根据需要取消注释）
// import { Settings, ExternalLink } from "lucide-react"
import type { MenuItem } from "@/types/navigation"

/**
 * 基础菜单配置
 * 适合个人作品集网站
 */
export const basicMenuItems: MenuItem[] = [
  {
    path: "/",
    label: "首页",
    icon: Home,
    description: "回到首页"
  },
  {
    path: "/about",
    label: "关于",
    icon: User,
    description: "了解更多"
  },
  {
    path: "/blog",
    label: "博客",
    icon: BookOpen,
    description: "技术文章"
  },
  {
    path: "/projects",
    label: "项目",
    icon: Briefcase,
    description: "项目展示"
  },
  {
    path: "/contact",
    label: "联系",
    icon: Mail,
    description: "联系方式"
  },
]

/**
 * 完整菜单配置
 * 包含所有功能页面
 */
export const fullMenuItems: MenuItem[] = [
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
    description: "技术文章",
    badge: "New" // 可选：显示徽章
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
  },
  {
    path: "/aigc",
    label: "AIGC",
    icon: Sparkles,
    description: "AI 内容"
  },
  {
    path: "/dialogue",
    label: "对话",
    icon: MessageCircle,
    description: "AI 对话"
  },
  {
    path: "/dashboard",
    label: "数据",
    icon: BarChart3,
    description: "数据看板"
  },
]

/**
 * 带外部链接的菜单配置
 * 支持跳转到外部网站
 */
export const menuWithExternalLinks: MenuItem[] = [
  {
    path: "/",
    label: "首页",
    icon: Home,
    description: "回到首页"
  },
  {
    path: "/blog",
    label: "博客",
    icon: BookOpen,
    description: "技术文章"
  },
  {
    path: "https://github.com/yourusername",
    label: "GitHub",
    icon: Github,
    description: "查看源码",
    external: true // 标记为外部链接
  },
  {
    path: "/docs",
    label: "文档",
    icon: FileText,
    description: "项目文档"
  },
]

/**
 * 分组菜单配置
 * 使用分隔符区分不同类别
 */
export const groupedMenuItems = {
  main: [
    { path: "/", label: "首页", icon: Home, description: "首页" },
    { path: "/blog", label: "博客", icon: BookOpen, description: "博客" },
    { path: "/projects", label: "项目", icon: Briefcase, description: "项目" },
  ],
  ai: [
    { path: "/aigc", label: "AIGC", icon: Sparkles, description: "AI 内容" },
    { path: "/dialogue", label: "对话", icon: MessageCircle, description: "对话" },
  ],
  other: [
    { path: "/about", label: "关于", icon: User, description: "关于" },
    { path: "/contact", label: "联系", icon: Mail, description: "联系" },
  ],
}

/**
 * 使用示例
 */

// 1. 替换基础菜单
// 在 Navigation/index.tsx 中:
// const menuItems: MenuItem[] = basicMenuItems

// 2. 使用完整菜单（默认）
// const menuItems: MenuItem[] = fullMenuItems

// 3. 添加徽章
// {
//   path: "/blog",
//   label: "博客",
//   icon: BookOpen,
//   description: "技术文章",
//   badge: "3" // 显示未读数量
// }

// 4. 外部链接
// {
//   path: "https://github.com",
//   label: "GitHub",
//   icon: Github,
//   description: "源码",
//   external: true
// }

// 5. 动态菜单项（根据用户权限）
// const getDynamicMenu = (isAdmin: boolean): MenuItem[] => {
//   const items = [...basicMenuItems]
//   if (isAdmin) {
//     items.push({
//       path: "/admin",
//       label: "管理",
//       icon: Settings,
//       description: "管理后台"
//     })
//   }
//   return items
// }
