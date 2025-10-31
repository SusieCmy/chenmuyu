/*
 * @Author: Susie 1732728869@qq.com
 * @Date: 2025-08-18 20:46:03
 * @LastEditors: Susie 1732728869@qq.com
 * @LastEditTime: 2025-08-20 21:03:56
 * @FilePath: \susie-cmy\src\app\blog\[slug]\page.tsx
 * @Description: 强者都是孤独的
 * 
 * Copyright (c) 2025 by 1732728869@qq.com, All Rights Reserved. 
 */
import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { getTagStyle } from '@/lib/tagStyles'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ReadingProgress from '@/components/ReadingProgress'
import MobileTOC from '@/components/MobileTOC'
import ScrollToTop from '@/components/ScrollToTop'
import type { Components } from 'react-markdown'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: '文章未找到',
      description: '抱歉，您访问的文章不存在。'
    }
  }

  return {
    title: `${post.title} | chenmuyu的技术博客`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: 'chenmuyu', url: 'https://www.iaxixi.com' }],
    openGraph: {
      title: `${post.title} | chenmuyu的技术博客`,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['chenmuyu'],
      tags: post.tags,
      images: ['/cmy.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | chenmuyu的技术博客`,
      description: post.description,
      images: ['/cmy.jpg'],
    },
    alternates: {
      canonical: `https://www.iaxixi.com/blog/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // 结构化数据
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": "https://www.iaxixi.com/cmy.jpg",
    "author": {
      "@type": "Person",
      "name": "chenmuyu",
      "url": "https://www.iaxixi.com"
    },
    "publisher": {
      "@type": "Person",
      "name": "chenmuyu",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.iaxixi.com/cmy.jpg"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.iaxixi.com/blog/${slug}`
    },
    "keywords": post.tags.join(", "),
    "wordCount": post.content.split(' ').length,
    "timeRequired": `PT${post.readingTime}M`
  }

  return (
    <div className="min-h-screen bg-base-100">
      <ReadingProgress />
      <MobileTOC />
      <ScrollToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="mx-auto px-6 py-8">
        <nav className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-primary-focus transition-colors duration-200 group"
          >
            <svg className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回博客列表
          </Link>
        </nav>

        {/* 文章头部 */}
        <header className="mb-12">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-base-content mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-base-content/70 leading-relaxed">
              {post.description}
            </p>
          </div>

          {/* 文章元数据 */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-base-content/60 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>约 {post.readingTime} 分钟阅读</span>
            </div>
          </div>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 text-sm font-semibold rounded-full transition-transform duration-200 hover:scale-105 ${getTagStyle(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* 文章内容 */}
        <article className="prose prose-lg max-w-none prose-headings:text-base-content prose-p:text-base-content prose-strong:text-base-content prose-code:text-base-content prose-pre:bg-base-200 prose-blockquote:text-base-content prose-blockquote:border-primary">
          <ReactMarkdown
            components={{
              code: ({ className, children, ...props }) => {
                const match = /language-(\w+)/.exec(className || '')
                return match ? (
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    className="rounded-lg"
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className="bg-base-200 px-1.5 py-0.5 rounded text-sm" {...props}>
                    {children}
                  </code>
                )
              },
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-12 mb-6 text-base-content border-b border-base-300 pb-4">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mt-10 mb-4 text-base-content">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold mt-8 mb-3 text-base-content">
                  {children}
                </h3>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-primary pl-6 py-2 bg-base-200/50 rounded-r-lg my-6">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-primary hover:text-primary-focus underline transition-colors">
                  {children}
                </a>
              ),
            } satisfies Components}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  )
}