# 🌟 Susie CMY - 个人网站

一个现代化的个人作品集网站，采用 Next.js 15 和 TypeScript 构建，具有丰富的动画效果和响应式设计。

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ 项目特色

- 🎨 **现代化设计** - 采用最新的设计趋势和用户体验最佳实践
- 📱 **响应式布局** - 完美适配桌面端和移动端
- 🎭 **丰富动画** - 集成多种动画效果，提升用户体验
- 🌙 **主题切换** - 支持明暗主题切换
- ⚡ **性能优化** - 使用 Next.js 15 的 Turbopack 进行快速开发
- 🎯 **SEO 友好** - 内置 SEO 优化和结构化数据

## 🚀 技术栈

### 核心框架
- **Next.js 15** - React 全栈框架
- **React 19** - 用户界面库
- **TypeScript** - 类型安全的 JavaScript

### 样式与动画
- **Tailwind CSS 4** - 实用优先的 CSS 框架
- **DaisyUI** - Tailwind CSS 组件库
- **Anime.js** - 轻量级 JavaScript 动画库

### 开发工具
- **ESLint** - 代码质量检查
- **pnpm** - 快速、节省磁盘空间的包管理器
- **Zustand** - 轻量级状态管理

## 📁 项目结构

```
susie-cmy/
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router 页面
│   │   ├── 📄 layout.tsx         # 根布局组件
│   │   ├── 📄 page.tsx           # 首页
│   │   ├── 📁 about/             # 关于页面
│   │   ├── 📁 blog/              # 博客页面
│   │   ├── 📁 contact/           # 联系页面
│   │   ├── 📁 home/              # 主页
│   │   ├── 📁 projects/          # 项目展示页面
│   │   └── 📄 globals.css        # 全局样式
│   ├── 📁 components/            # 可复用组件
│   │   ├── 📁 Animation/         # 动画组件库
│   │   │   ├── 📁 web/          # 桌面端动画
│   │   │   └── 📁 h5/           # 移动端动画
│   │   ├── 📁 Header/            # 导航头部
│   │   ├── 📁 UserInfo/          # 用户信息展示
│   │   ├── 📁 UserTimeline/      # 时间线组件
│   │   ├── 📄 ThemeProvider.tsx  # 主题管理
│   │   └── 📄 StructuredData.tsx # SEO 结构化数据
│   ├── 📁 hooks/                 # 自定义 React Hooks
│   └── 📁 store/                 # 状态管理
├── 📁 public/                    # 静态资源
│   ├── 📄 cmy.jpg               # 个人头像
│   └── 📄 *.mp4                 # 视频资源
└── 📄 配置文件...
```

## 🎯 功能特性

### 🎨 动画组件
- **UserColorful** - 彩色用户界面动画
- **UserParallax** - 视差滚动效果
- **UserTimeline** - 时间线动画
- **UserNotFound** - 404 页面动画

### 📱 多端适配
- **Web 端** - 桌面端优化体验
- **H5 端** - 移动端专用动画和交互

### 🌙 主题系统
- 明暗主题切换
- 主题持久化存储
- 平滑过渡动画

## 🛠️ 快速开始

### 环境要求
- Node.js 18+ 
- pnpm 8+

### 安装依赖
```bash
# 使用 pnpm 安装依赖
pnpm install
```

### 开发模式
```bash
# 启动开发服务器
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本
```bash
# 构建生产版本
pnpm build

# 启动生产服务器
pnpm start
```

## 📜 可用脚本

```bash
# 开发相关
pnpm dev              # 启动开发服务器 (使用 Turbopack)
pnpm build            # 构建生产版本
pnpm start            # 启动生产服务器
pnpm lint             # 代码检查

# 构建优化
pnpm build:clean      # 清理后构建
pnpm build:fresh      # 完全清理后构建
pnpm build:prod       # 生产环境构建

# 清理相关
pnpm clean            # 清理构建缓存
pnpm clean:all        # 清理所有缓存和依赖

# 分析工具
pnpm analyze          # 分析构建包大小
pnpm analyze:server   # 分析服务端包
pnpm analyze:browser  # 分析客户端包
```

## 🎨 自定义配置

### 主题配置
在 `src/components/ThemeProvider.tsx` 中自定义主题设置。

### 动画配置
在 `src/components/Animation/` 目录下添加新的动画组件。

### SEO 配置
在 `src/components/StructuredData.tsx` 中配置结构化数据。

## 📦 部署

### Vercel 部署 (推荐)
```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 其他平台
项目支持部署到任何支持 Next.js 的平台：
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- 项目链接: [https://github.com/your-username/susie-cmy](https://github.com/your-username/susie-cmy)
- 问题反馈: [Issues](https://github.com/your-username/susie-cmy/issues)

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！
