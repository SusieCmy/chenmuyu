/*
 * @Date: 2025-12-12
 * @Description: 工作流命名对话框组件
 */
'use client'

interface WorkflowNameDialogProps {
  isOpen: boolean
  isNew: boolean
  name: string
  description: string
  onNameChange: (name: string) => void
  onDescriptionChange: (description: string) => void
  onConfirm: () => void
  onCancel?: () => void
}

export default function WorkflowNameDialog({
  isOpen,
  isNew,
  name,
  description,
  onNameChange,
  onDescriptionChange,
  onConfirm,
  onCancel
}: WorkflowNameDialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-base-100 rounded-xl p-6 max-w-md w-full mx-4 shadow-xl">
        <h2 className="text-xl font-bold mb-4">
          {isNew ? '创建工作流' : '编辑工作流信息'}
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              工作流名称
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => onNameChange(e.target.value)}
              className="w-full px-3 py-2 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="请输入工作流名称"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              描述（可选）
            </label>
            <textarea
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="请输入工作流描述"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          {!isNew && onCancel && (
            <button
              onClick={onCancel}
              className="flex-1 px-4 py-2 border border-base-300 hover:bg-base-200 rounded-lg transition-colors"
            >
              取消
            </button>
          )}
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-primary text-primary-content hover:bg-primary/90 rounded-lg transition-colors"
          >
            {isNew ? '创建' : '保存'}
          </button>
        </div>
      </div>
    </div>
  )
}
