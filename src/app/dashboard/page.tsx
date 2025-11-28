"use client";
import UserTextClone from '@/components/Animation/web/UserTextClone';
import AreaChartExample from '@/components/ReCharts/AreaChartExample';
import BarChartExample from '@/components/ReCharts/BarChartExample';
import RadarChartExample from '@/components/ReCharts/RadarChartExample';
import ScreenAdapter from '@/components/Utils/ScreenAdapter';

export default function DashboardPage() {
    return (
        <main className="h-screen w-screen overflow-hidden flex flex-col bg-gray-900 text-white">
            <ScreenAdapter />
            <section className="flex-1 grid grid-cols-12 gap-4 p-4">
                {/* Left Column (3 charts) */}
                <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-full">
                    <div className="flex-1 min-h-0 border border-gray-700 rounded-lg p-2 bg-gray-800/50">
                        <AreaChartExample />
                    </div>
                    <div className="flex-1 min-h-0 border border-gray-700 rounded-lg p-2 bg-gray-800/50">
                        <BarChartExample />
                    </div>
                    <div className="flex-1 min-h-0 border border-gray-700 rounded-lg p-2 bg-gray-800/50">
                        <RadarChartExample />
                    </div>
                </div>

                {/* Middle Column (1 top, 2 bottom) */}
                <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 h-full">
                    {/* Top: Main Chart */}
                    <div className="flex-1 min-h-0 border border-gray-700 rounded-lg p-2 bg-gray-800/50">
                        <AreaChartExample />
                    </div>
                    {/* Bottom: 2 Charts */}
                    <div className="flex-1 min-h-0 grid grid-cols-2 gap-4">
                        <div className="h-full min-h-0 border border-gray-700 rounded-lg p-2 bg-gray-800/50">
                            <BarChartExample />
                        </div>
                        <div className="h-full min-h-0 border border-gray-700 rounded-lg p-2 bg-gray-800/50">
                            <RadarChartExample />
                        </div>
                    </div>
                </div>

                {/* Right Column (3 charts) */}
                <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-full">
                    <div className="flex-1 min-h-0 border border-gray-700 rounded-lg p-2 bg-gray-800/50">
                        <RadarChartExample />
                    </div>
                    <div className="flex-1 min-h-0 border border-gray-700 rounded-lg p-2 bg-gray-800/50">
                        <BarChartExample />
                    </div>
                    <div className="flex-1 min-h-0 border border-gray-700 rounded-lg p-2 bg-gray-800/50">
                        <AreaChartExample />
                    </div>
                </div>
            </section>
        </main >
    );
}

