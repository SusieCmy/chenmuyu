import Link from 'next/link'

export default function BlogPostPage() {
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
      </main>
    </div>
  )
}