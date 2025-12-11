/*
 * @Date: 2025-12-11
 * @Description: AI 工作流卡片组件
 */
'use client'

import Link from 'next/link'
import { Workflow } from '@/config/workflows'
import { ArrowRight, Check } from 'lucide-react'

interface WorkflowCardProps {
  workflow: Workflow
  basePath?: string  // 可选的基础路径，默认为 /aigc
}

export const WorkflowCard = ({ workflow, basePath = '/aigc' }: WorkflowCardProps) => {
  const { id, name, description, icon: Icon, color, gradient, features, status } = workflow

  const isDisabled = status === 'coming-soon'
  const isBeta = status === 'beta'

  const cardContent = (
    <div
      className={`group relative h-full p-6 rounded-2xl border border-base-300 bg-gradient-to-br ${gradient}
        transition-all duration-300 overflow-hidden
        ${isDisabled
          ? 'opacity-60 cursor-not-allowed'
          : 'hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 cursor-pointer'
        }`}
    >
      {/* 背景装饰 */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

      {/* 状态标签 */}
      {(isBeta || isDisabled) && (
        <div className="absolute top-4 right-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
            isBeta
              ? 'bg-accent/20 text-accent border border-accent/30'
              : 'bg-base-300 text-base-content/50 border border-base-300'
          }`}>
            {isBeta ? 'Beta' : '敬请期待'}
          </span>
        </div>
      )}

      <div className="relative z-10">
        {/* 图标 */}
        <div className={`inline-flex p-3 rounded-xl bg-base-100 mb-4 ${isDisabled ? '' : 'group-hover:scale-110'} transition-transform`}>
          <Icon className={`w-8 h-8 ${color}`} />
        </div>

        {/* 标题和描述 */}
        <h3 className="text-xl font-bold mb-2 text-base-content">
          {name}
        </h3>
        <p className="text-sm text-base-content/60 mb-4 line-clamp-2">
          {description}
        </p>

        {/* 功能列表 */}
        <ul className="space-y-2 mb-4">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-xs text-base-content/70">
              <Check className="w-3 h-3 text-primary shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* 行动按钮 */}
        {!isDisabled && (
          <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
            <span>进入工作流</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  )

  if (isDisabled) {
    return <div className="h-full">{cardContent}</div>
  }

  return (
    <Link href={`${basePath}/${id}`} className="block h-full">
      {cardContent}
    </Link>
  )
}
