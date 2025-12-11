/*
 * @Date: 2025-12-11
 * @LastEditors: Claude Code
 * @Description: AI 工作流编辑器 - ReactFlow
 */
'use client'

import { useState, useCallback, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Save, FileText } from "lucide-react";
import Link from 'next/link'
import {
    ReactFlow,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    Background,
    Controls,
    MiniMap,
    Panel,
    BackgroundVariant
} from '@xyflow/react';
import type {
    Node,
    Edge,
    NodeChange,
    EdgeChange,
    Connection,
} from '@xyflow/react';
import { workflowStorage } from '@/lib/workflowStorage';
import type { UserWorkflow } from '@/types/workflow';

const initialNodes: Node[] = [
    { id: '1', position: { x: 250, y: 100 }, data: { label: '开始' } },
];

export default function WorkflowEditor() {
    const params = useParams();
    const router = useRouter();
    const workflowId = params.workflowId as string;
    const isNew = workflowId === 'new';

    const [workflow, setWorkflow] = useState<UserWorkflow | null>(null);
    const [name, setName] = useState('未命名工作流');
    const [description, setDescription] = useState('');
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [showNameDialog, setShowNameDialog] = useState(false);

    // 加载工作流
    useEffect(() => {
        if (!isNew) {
            const loaded = workflowStorage.getById(workflowId);
            if (loaded) {
                setWorkflow(loaded);
                setName(loaded.name);
                setDescription(loaded.description);
                setNodes(loaded.nodes || initialNodes);
                setEdges(loaded.edges || []);
            } else {
                router.push('/aigc');
            }
        } else {
            // 新建时显示命名对话框
            setShowNameDialog(true);
        }
    }, [workflowId, isNew, router]);

    const onNodesChange = useCallback(
        (changes: NodeChange[]) =>
            setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );

    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) =>
            setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );

    const onConnect = useCallback(
        (params: Connection) =>
            setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    // 保存工作流
    const handleSave = () => {
        const id = isNew ? `workflow-${Date.now()}` : workflowId;
        const now = Date.now();

        const workflowData: UserWorkflow = {
            id,
            name,
            description,
            nodes,
            edges,
            createdAt: workflow?.createdAt || now,
            updatedAt: now
        };

        workflowStorage.save(workflowData);

        if (isNew) {
            router.push(`/aigc/${id}`);
        } else {
            alert('保存成功！');
        }
    };

    // 命名对话框
    const handleCreateWorkflow = () => {
        if (!name.trim()) {
            alert('请输入工作流名称');
            return;
        }
        setShowNameDialog(false);
    };

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                colorMode="light"
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background variant={BackgroundVariant.Dots} />
                <Controls />
                <MiniMap />

                {/* 顶部工具栏 */}
                <Panel position="top-left">
                    <div className="flex items-center gap-3 bg-base-100 rounded-lg shadow-lg p-3 border border-base-300">
                        <Link
                            href="/aigc"
                            className="p-2 hover:bg-base-200 rounded-lg transition-colors"
                            title="返回工作流列表"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="border-l border-base-300 pl-3">
                            <h1 className="font-semibold text-base-content text-sm">{name}</h1>
                            <p className="text-xs text-base-content/60">{description || '暂无描述'}</p>
                        </div>
                    </div>
                </Panel>

                {/* 右上角操作按钮 */}
                <Panel position="top-right">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setShowNameDialog(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-base-100 border border-base-300 hover:bg-base-200 rounded-lg transition-colors"
                        >
                            <FileText className="w-4 h-4" />
                            <span className="text-sm">编辑信息</span>
                        </button>
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-content hover:bg-primary/90 rounded-lg transition-colors"
                        >
                            <Save className="w-4 h-4" />
                            <span className="text-sm">保存</span>
                        </button>
                    </div>
                </Panel>
            </ReactFlow>

            {/* 命名对话框 */}
            {showNameDialog && (
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
                                    onChange={(e) => setName(e.target.value)}
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
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="请输入工作流描述"
                                />
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            {!isNew && (
                                <button
                                    onClick={() => setShowNameDialog(false)}
                                    className="flex-1 px-4 py-2 border border-base-300 hover:bg-base-200 rounded-lg transition-colors"
                                >
                                    取消
                                </button>
                            )}
                            <button
                                onClick={handleCreateWorkflow}
                                className="flex-1 px-4 py-2 bg-primary text-primary-content hover:bg-primary/90 rounded-lg transition-colors"
                            >
                                {isNew ? '创建' : '保存'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
