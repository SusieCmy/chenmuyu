'use client'

import { useState, useEffect } from 'react'

interface TocItem {
  id: string
  text: string
  level: number
}

export default function MobileTOC() {
  const [toc, setToc] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const headings = document.querySelectorAll('article h1, article h2, article h3')
    const tocItems: TocItem[] = []

    headings.forEach((heading, index) => {
      let id = heading.id
      if (!id) {
        id = `heading-${index}`
        heading.id = id
      }
      tocItems.push({
        id,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.charAt(1))
      })
    })

    setToc(tocItems)

    // 监听滚动以高亮当前标题
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-20% 0% -80% 0%'
      }
    )

    headings.forEach((heading) => observer.observe(heading))

    // 监听滚动显示/隐藏目录
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsVisible(scrollTop > 200)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      headings.forEach((heading) => observer.unobserve(heading))
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false) // 点击后收起目录
    }
  }

  if (!isVisible || toc.length === 0) return null

  return (
    <div className="fixed bottom-20 right-4 z-40 block xl:hidden">
      {/* 目录按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`btn btn-circle shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? 'btn-primary' : 'btn-neutral'
        }`}
        title="文章目录"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>

      {/* 目录面板 */}
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
            onClick={() => setIsOpen(false)}
          />
          {/* 目录内容 */}
          <div className="absolute bottom-16 right-0 bg-base-100 rounded-2xl shadow-xl border border-base-300 p-4 w-80 max-w-[90vw] max-h-[60vh] overflow-hidden animate-slide-in-up">
            <div className="mb-3">
              <h3 className="text-sm font-bold text-base-content flex items-center justify-between">
                文章目录
                <button
                  onClick={() => setIsOpen(false)}
                  className="btn btn-ghost btn-xs btn-circle"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </h3>
            </div>
            
            <nav className="space-y-1 max-h-96 overflow-y-auto scrollbar-thin">
              {toc.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToHeading(item.id)}
                  className={`block w-full text-left text-sm py-2 px-3 rounded-lg transition-all duration-200 hover:bg-base-200 ${
                    activeId === item.id
                      ? 'text-primary bg-primary/10 border-l-2 border-primary font-medium'
                      : 'text-base-content/70 hover:text-base-content'
                  } ${
                    item.level === 2 ? 'pl-5' : 
                    item.level === 3 ? 'pl-7' : 'pl-3'
                  }`}
                >
                  <span className="line-clamp-2 leading-relaxed">
                    {item.text}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </>
      )}
    </div>
  )
}