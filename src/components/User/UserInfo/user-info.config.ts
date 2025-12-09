/*
 * @Date: 2025-12-09
 * @Description: 个人信息配置文件 - 方便自定义修改
 */

import {
  Github,
  Mail,
  Code2,
  Award,
  BookOpen,
  Coffee,
  Star,
  Users,
  TrendingUp,
  Zap
} from 'lucide-react'

// 可选图标（根据需要取消注释）
// import { Linkedin, Twitter } from 'lucide-react'

// ==================== 个人基本信息 ====================
export const personalInfo = {
  name: '陈慕宇',
  nameEn: 'Chen Muyu',
  title: '前端开发工程师',
  avatar: '/QQ.png',
  location: '中国',
  experience: '2020 至今',
  email: '1732728869@qq.com',
  bio: '欢迎来到陈慕宇的个人网站！我是一名前端开发工程师，专注于现代前端技术。这个网站会记录本人平时使用 / 学习的技术栈以及一些个人的见解。希望你能喜欢这里的内容！'
}

// ==================== 个人标签 ====================
export const personalTags = [
  { label: 'Web Developer', icon: 'Sparkles', color: 'primary' },
  { label: 'Full Stack', icon: 'Code2', color: 'secondary' },
  { label: 'Open Source', icon: 'Heart', color: 'accent' },
]

// ==================== 统计数据 ====================
export const statistics = [
  {
    icon: Code2,
    label: '项目经验',
    value: '3+年',
    color: 'text-blue-500'
  },
  {
    icon: BookOpen,
    label: '技术文章',
    value: '50+篇',
    color: 'text-green-500'
  },
  {
    icon: Award,
    label: '开源贡献',
    value: '20+次',
    color: 'text-purple-500'
  },
  {
    icon: Coffee,
    label: '代码行数',
    value: '100k+',
    color: 'text-orange-500'
  },
]

// 可选的其他统计项
export const alternativeStats = [
  { icon: Star, label: 'GitHub Stars', value: '500+', color: 'text-yellow-500' },
  { icon: Users, label: '粉丝数量', value: '1k+', color: 'text-pink-500' },
  { icon: TrendingUp, label: '月访问量', value: '10k+', color: 'text-indigo-500' },
  { icon: Zap, label: '解决问题', value: '200+', color: 'text-cyan-500' },
]

// ==================== 社交链接 ====================
export const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    color: 'hover:text-gray-900 dark:hover:text-white'
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:1732728869@qq.com',
    color: 'hover:text-red-500'
  },
  // 可选：取消注释以添加更多社交链接
  // {
  //   icon: Linkedin,
  //   label: 'LinkedIn',
  //   href: 'https://linkedin.com/in/yourusername',
  //   color: 'hover:text-blue-600'
  // },
  // {
  //   icon: Twitter,
  //   label: 'Twitter',
  //   href: 'https://twitter.com/yourusername',
  //   color: 'hover:text-sky-500'
  // },
]

// ==================== 技术栈 ====================
export const techStack = {
  frontend: ['JavaScript', 'TypeScript', 'React', 'Vue', 'Next.js'],
  styling: ['Tailwind CSS', 'CSS3', 'SCSS', 'DaisyUI'],
  tools: ['Git', 'Vite', 'Webpack', 'npm', 'pnpm'],
  others: ['Node.js', 'GSAP', 'Anime.js', 'Zustand']
}

// 技术栈分类标签映射
export const techStackLabels = {
  frontend: '前端框架',
  styling: '样式方案',
  tools: '开发工具',
  backend: '后端技术',
  database: '数据库',
  others: '其他技能'
}

// ==================== 正在学习的技术 ====================
export const learningTech = ['Rust', 'Go', 'Docker', 'Kubernetes']

// 可选：添加更多学习中的技术
export const moreLearningTech = [
  'WebAssembly',
  'GraphQL',
  'Prisma',
  'tRPC',
  'Bun'
]

// ==================== 快速链接 ====================
export const quickLinks = [
  {
    href: '/blog',
    label: '技术博客',
    icon: BookOpen,
    color: 'text-primary',
    hoverBg: 'hover:bg-primary/10'
  },
  {
    href: '/projects',
    label: '项目经历',
    icon: Code2,
    color: 'text-secondary',
    hoverBg: 'hover:bg-secondary/10'
  },
]

// ==================== 动画配置 ====================
export const animationConfig = {
  cards: {
    delay: 100,      // 卡片入场延迟（毫秒）
    duration: 800,   // 动画持续时间
    ease: 'outExpo'  // 缓动函数
  },
  stats: {
    delay: 400,      // 统计卡片延迟
    duration: 600,
    ease: 'outBack'
  },
  typing: {
    speed: 50,       // 打字速度
    pause: 1500,     // 暂停时间
    cursor: '|'      // 光标字符
  }
}

// ==================== 主题颜色配置 ====================
export const themeColors = {
  gradient: 'from-primary via-secondary to-accent',
  cardBg: 'from-primary/5 via-secondary/5 to-accent/5',
  hoverShadow: 'hover:shadow-primary/10'
}

// ==================== 使用示例 ====================
/*
// 在组件中导入并使用：
import { personalInfo, statistics, techStack } from './user-info.config'

// 使用个人信息
<h1>{personalInfo.name}</h1>
<p>{personalInfo.title}</p>

// 使用统计数据
{statistics.map(stat => (
  <div key={stat.label}>
    <stat.icon />
    <span>{stat.value}</span>
    <span>{stat.label}</span>
  </div>
))}

// 自定义统计数据 - 替换默认的
export const myCustomStats = [
  { icon: Star, label: '自定义', value: '999+', color: 'text-yellow-500' }
]
*/
