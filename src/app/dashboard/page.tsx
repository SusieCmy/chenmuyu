"use client";
import AreaChartExample from '@/components/ReCharts/AreaChartExample';
import UserTextClone from '@/components/Animation/web/UserTextClone';

export default function DashboardPage() {
    return (
        <main>
            <header className='text-center my-4'>
                <h1 className="text-3xl font-bold mb-4">
                    <UserTextClone propsText="可视化大屏"></UserTextClone>
                </h1>
            </header>
            <section>
                <AreaChartExample />
            </section>
        </main>
    );
}