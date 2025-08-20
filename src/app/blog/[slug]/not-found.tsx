import Link from 'next/link'

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center p-6">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-4xl font-bold text-base-content mb-4">
            文章未找到
          </h1>
          <p className="text-lg text-base-content/70 mb-8">
            抱歉，您访问的文章不存在或已被删除。
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/blog"
            className="btn btn-primary btn-wide"
          >
            返回博客列表
          </Link>
          <Link 
            href="/"
            className="btn btn-outline btn-wide"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  )
}