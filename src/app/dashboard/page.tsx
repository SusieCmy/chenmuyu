import React from 'react';

export const metadata = {
    title: '仪表板',
    description: '默认仪表板页面',
};

export default function DashboardPage() {
    return (
        <main
            style={{
                padding: 24,
                fontFamily:
                    'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
                color: '#111',
            }}
        >
            <header
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 24,
                }}
            >
                <div>
                    <h1 style={{ margin: 0 }}>仪表板</h1>
                    <p style={{ margin: 0, color: '#666' }}>默认页面 — 欢迎</p>
                </div>
            </header>

            <section
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                    gap: 16,
                    marginBottom: 24,
                }}
            >
                {[
                    { label: '活跃用户', value: 1240 },
                    { label: '今日会话', value: 312 },
                    { label: '错误率', value: '0.8%' },
                ].map((stat) => (
                    <div
                        key={stat.label}
                        style={{
                            padding: 16,
                            border: '1px solid #eaeaea',
                            borderRadius: 8,
                            background: '#fafafa',
                        }}
                    >
                        <div style={{ fontSize: 20, fontWeight: 700 }}>{stat.value}</div>
                        <div style={{ color: '#666' }}>{stat.label}</div>
                    </div>
                ))}
            </section>

            <section
                style={{
                    padding: 16,
                    border: '1px dashed #eaeaea',
                    borderRadius: 8,
                }}
            >
                <h2 style={{ marginTop: 0 }}>快速概览</h2>
                <p style={{ color: '#444' }}>
                    这是一个默认的仪表板页面。将来可以在这里添加图表、表格和更多组件。
                </p>
                <div
                    style={{
                        height: 160,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#aaa',
                        borderRadius: 6,
                        background: '#fff',
                        border: '1px solid #f0f0f0',
                    }}
                >
                    图表占位
                </div>
            </section>
        </main>
    );
}