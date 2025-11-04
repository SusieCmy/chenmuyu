# 🌟 Chen Muyu - 个人网站

一个现代化的个人作品集网站，采用 Next.js 15 和 TypeScript 构建，展示个人技能、项目经验和技术博客。

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)  
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📋 目录

- [项目特色](#-项目特色)
- [技术栈](#-技术栈) 
- [快速开始](#️-快速开始)
- [项目结构](#-项目结构)
- [功能特性](#-功能特性)
- [部署](#-部署)
- [许可证](#-许可证)

## ✨ 项目特色

- 🎨 **现代化设计** - 简洁优雅的界面设计，良好的用户体验
- 📱 **响应式布局** - 完美适配桌面端、平板和移动端
- 🚀 **性能优化** - 使用 Next.js 15 和 Turbopack 实现极速开发体验
- 🎭 **动画效果** - 基于 Anime.js 的流畅动画和交互效果
- 🌙 **主题切换** - 支持明暗主题无缝切换
- 📝 **博客系统** - 支持 Markdown 文章展示和语法高亮
- 🎯 **SEO 优化** - 内置结构化数据和搜索引擎优化

## 🚀 技术栈

### 前端框架
- **Next.js 15.3.5** - React 全栈开发框架
- **React 19** - 用户界面构建库  
- **TypeScript 5** - 类型安全的 JavaScript 超集

### 样式与 UI
- **Tailwind CSS 4** - 原子化 CSS 框架
- **DaisyUI 5.0.46** - Tailwind 组件库
- **Anime.js 4.0.2** - 轻量级动画引擎

### 内容管理
- **React Markdown 10.1.0** - Markdown 渲染支持
- **React Syntax Highlighter 15.6.1** - 代码语法高亮
- **Gray Matter 4.0.3** - 前置数据解析

### 开发工具
- **ESLint 9** - 代码规范检查
- **Zustand 5.0.6** - 轻量状态管理
- **pnpm** - 高效包管理工具

## 📁 项目结构

```
chenmuyu/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # 根布局
│   │   ├── page.tsx             # 首页  
│   │   ├── about/               # 关于页面
│   │   ├── blog/                # 博客系统
│   │   ├── contact/             # 联系方式
│   │   └── projects/            # 项目展示
│   ├── components/              # 组件库
│   │   ├── Animation/           # 动画组件
│   │   ├── Header/              # 导航组件  
│   │   ├── UserInfo/            # 用户信息
│   │   └── ThemeProvider.tsx    # 主题管理
│   ├── hooks/                   # 自定义 Hooks
│   └── store/                   # 状态管理
├── public/                      # 静态资源
└── 配置文件
```

## 🎯 功能特性

### 🎨 动画系统
- **流畅过渡** - 页面切换和元素动画
- **视差滚动** - 沉浸式滚动体验
- **时间线展示** - 个人经历可视化
- **响应式动画** - 适配不同设备的动画效果

### 📝 内容管理
- **Markdown 博客** - 支持代码高亮的文章系统
- **项目展示** - 个人作品集展示
- **动态路由** - 基于文件系统的路由

### 🌙 用户体验
- **主题切换** - 明暗主题无缝切换
- **响应式设计** - 完美适配各种设备
- **性能优化** - 快速加载和流畅交互

