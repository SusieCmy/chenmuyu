/*
 * @Date: 2025-12-11
 * @Description: AI 工作流配置
 */

import { LucideIcon } from 'lucide-react'
import { MessageSquare, Image, Code, Sparkles, FileText, Brain } from 'lucide-react'

export interface Workflow {
  id: string
  name: string
  description: string
  icon: LucideIcon
  color: string
  gradient: string
  features: string[]
  status: 'active' | 'beta' | 'coming-soon'
}

export const workflows: Workflow[] = [
  {
    id: 'chat',
    name: 'AI 对话助手',
    description: '智能对话，回答问题，提供建议和帮助',
    icon: MessageSquare,
    color: 'text-blue-500',
    gradient: 'from-blue-500/10 to-cyan-500/10',
    features: ['多轮对话', '上下文理解', '流式响应', '代码高亮'],
    status: 'active'
  },
  {
    id: 'image-gen',
    name: '图像生成',
    description: '使用 AI 生成创意图片和艺术作品',
    icon: Image,
    color: 'text-purple-500',
    gradient: 'from-purple-500/10 to-pink-500/10',
    features: ['文生图', '多种风格', '高清输出', '批量生成'],
    status: 'coming-soon'
  },
  {
    id: 'code-assistant',
    name: '代码助手',
    description: '智能代码生成、审查和优化建议',
    icon: Code,
    color: 'text-green-500',
    gradient: 'from-green-500/10 to-emerald-500/10',
    features: ['代码生成', '代码审查', '错误修复', '性能优化'],
    status: 'coming-soon'
  },
  {
    id: 'writing',
    name: '写作助手',
    description: '辅助创作文章、文案和各类文档',
    icon: FileText,
    color: 'text-orange-500',
    gradient: 'from-orange-500/10 to-yellow-500/10',
    features: ['文章润色', '创意写作', '格式转换', '多语言支持'],
    status: 'beta'
  },
  {
    id: 'workflow',
    name: '智能工作流',
    description: '自动化任务处理和数据分析',
    icon: Brain,
    color: 'text-indigo-500',
    gradient: 'from-indigo-500/10 to-violet-500/10',
    features: ['自动化流程', '数据处理', '任务编排', '结果导出'],
    status: 'coming-soon'
  },
  {
    id: 'creative',
    name: '创意工坊',
    description: '激发灵感，创意生成和头脑风暴',
    icon: Sparkles,
    color: 'text-pink-500',
    gradient: 'from-pink-500/10 to-rose-500/10',
    features: ['创意生成', '头脑风暴', '思维导图', '方案建议'],
    status: 'coming-soon'
  }
]

export const getWorkflowById = (id: string): Workflow | undefined => {
  return workflows.find(w => w.id === id)
}
