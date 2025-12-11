/*
 * @Date: 2025-12-11
 * @Description: AIGC 工作流管理页面
 */
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Plus, FileText, Clock, Trash2 } from 'lucide-react'
import { workflowStorage } from '@/lib/workflowStorage'
import type { UserWorkflow } from '@/types/workflow'

export default function AIGCPage() {
  const [workflows, setWorkflows] = useState<UserWorkflow[]>([])

  // 加载工作流列表
  useEffect(() => {
    setWorkflows(workflowStorage.getAll())
  }, [])

  // 删除工作流
  const handleDelete = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (confirm('确定要删除这个工作流吗？')) {
      workflowStorage.delete(id)
      setWorkflows(workflowStorage.getAll())
    }
  }

  // 格式化时间
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="min-h-screen bg-base-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* 页面头部 */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-base-content">
              我的工作流
            </h1>
            <p className="text-base text-base-content/60">
              创建和管理你的 AI 工作流
            </p>
          </div>

          {/* 创建按钮 */}
          <Link
            href="/aigc/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-content rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>创建工作流</span>
          </Link>
        </div>

        {/* 工作流列表 */}
        {workflows.length === 0 ? (
          // 空状态
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-base-200 rounded-full mb-4">
              <FileText className="w-8 h-8 text-base-content/40" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-base-content">
              还没有工作流
            </h3>
            <p className="text-base-content/60 mb-6">
              点击上方按钮创建你的第一个工作流
            </p>
            <Link
              href="/aigc/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-content rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>创建工作流</span>
            </Link>
          </div>
        ) : (
          // 工作流卡片网格
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflows.map((workflow) => (
              <Link
                key={workflow.id}
                href={`/aigc/${workflow.id}`}
                className="group block"
              >
                <div className="h-full p-6 rounded-xl border border-base-300 bg-base-100 hover:border-primary/50 hover:shadow-lg transition-all duration-200">
                  {/* 卡片头部 */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-base-content mb-1 truncate group-hover:text-primary transition-colors">
                        {workflow.name}
                      </h3>
                      <p className="text-sm text-base-content/60 line-clamp-2">
                        {workflow.description || '暂无描述'}
                      </p>
                    </div>

                    {/* 删除按钮 */}
                    <button
                      onClick={(e) => handleDelete(workflow.id, e)}
                      className="p-2 hover:bg-error/10 hover:text-error rounded-lg transition-colors ml-2"
                      title="删除工作流"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 统计信息 */}
                  <div className="flex items-center gap-4 text-xs text-base-content/50">
                    <div className="flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5" />
                      <span>{workflow.nodes?.length || 0} 节点</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{formatDate(workflow.updatedAt)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
