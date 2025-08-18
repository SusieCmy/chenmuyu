import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllPosts, getPostBySlug } from '@/lib/blog'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: '文章未找到',
    }
  }

  return {
    title: `${post.title} | 陈慕宇 - iaxixi.com`,
    description: post.description,
    keywords: ['博客文章', '技术分享', ...post.tags],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
      images: ['/cmy.jpg'],
    },
    alternates: {
      canonical: `https://www.iaxixi.com/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] p-6">
      <main className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-6"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回博客列表
          </Link>
        </div>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <header className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <time dateTime={post.date}>
                发布于 {new Date(post.date).toLocaleDateString('zh-CN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>约 {post.readingTime} 分钟阅读</span>
            </div>
          </header>
          
          <div className="prose-content">
            <ReactMarkdown
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-lg"
                      {...props}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  )
                },
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-gray-100">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-medium mt-4 mb-2 text-gray-900 dark:text-gray-100">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-4 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300">
                    {children}
                  </ol>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-600 dark:text-gray-400">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <Link 
              href="/blog"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回博客列表
            </Link>
            
            <div className="text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                觉得文章有帮助？
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                欢迎分享给朋友 😊
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}