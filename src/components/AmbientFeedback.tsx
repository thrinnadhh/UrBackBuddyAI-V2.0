import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Zap, TrendingUp } from 'lucide-react';
import { cn } from '../utils/cn';

export type PostureStatus = 'good' | 'warning' | 'poor' | 'off';

interface AmbientFeedbackProps {
    status: PostureStatus;
}

const mockHistory = [
    { time: '09:00', score: 95 },
    { time: '10:00', score: 82 },
    { time: '11:00', score: 88 },
    { time: '12:00', score: 65 },
    { time: '13:00', score: 92 },
    { time: '14:00', score: 78 },
    { time: '15:00', score: 85 },
];

export function AmbientFeedback({ status }: AmbientFeedbackProps) {
    const getStatusConfig = () => {
        switch (status) {
            case 'good':
                return {
                    color: 'text-accent-green',
                    border: 'border-accent-green/30',
                    bg: 'bg-accent-green/5',
                    label: 'Optimal Alignment',
                    desc: 'Keep holding this position for maximum muscle health.'
                };
            case 'warning':
                return {
                    color: 'text-accent-yellow',
                    border: 'border-accent-yellow/30',
                    bg: 'bg-accent-yellow/5',
                    label: 'Slight Deviation',
                    desc: 'Your upper back is starting to round. Adjust slightly.'
                };
            case 'poor':
                return {
                    color: 'text-accent-red',
                    border: 'border-accent-red/30',
                    bg: 'bg-accent-red/5',
                    label: 'Critical Slump',
                    desc: 'Immediate correction required to avoid spinal strain.'
                };
            default:
                return {
                    color: 'text-muted',
                    border: 'border-border',
                    bg: 'bg-white/5',
                    label: 'Monitoring Off',
                    desc: 'Camera feed is inactive. Privacy mode activated.'
                };
        }
    };

    const config = getStatusConfig();

    return (
        <div className="p-8 max-w-6xl mx-auto w-full space-y-6">
            <div className="flex items-end justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tighter mb-1 uppercase">Live Monitoring</h1>
                    <p className="text-muted-foreground text-sm font-medium">Real-time biomechanical analysis engine</p>
                </div>
                <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-sharp text-[10px] uppercase font-bold tracking-widest text-muted">
                        <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", status !== 'off' ? "bg-accent-green" : "bg-muted")} />
                        Live Engine
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Status & Skeleton Visualization */}
                <div className="lg:col-span-2 tech-panel p-8 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    {/* Abstract Grid background */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                    <div className="relative z-10 flex-1 space-y-6">
                        <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-sharp border text-[10px] font-black uppercase tracking-tighter", config.bg, config.border, config.color)}>
                            <Activity className="w-3 h-3" />
                            {status}
                        </div>
                        <h2 className="text-5xl font-black tracking-tighter leading-none">{config.label}</h2>
                        <p className="text-muted text-lg max-w-sm leading-tight italic">"{config.desc}"</p>

                        <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-border">
                            <div className="space-y-1">
                                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Confidence</span>
                                <div className="text-xl font-mono text-white">98.4%</div>
                            </div>
                            <div className="space-y-1">
                                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">Framerate</span>
                                <div className="text-xl font-mono text-white">30 FPS</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 w-64 h-80 flex items-center justify-center">
                        {/* 2D SVG Skeletal Visualization */}
                        <svg viewBox="0 0 100 120" className="w-full h-full">
                            {/* Spine */}
                            <path
                                d={status === 'poor' ? "M50,20 Q65,60 50,100" : status === 'warning' ? "M50,20 Q55,60 50,100" : "M50,20 L50,100"}
                                fill="none"
                                stroke={status === 'poor' ? "#FDA4AF" : status === 'warning' ? "#FDE047" : "#D9F99D"}
                                strokeWidth="3"
                                strokeLinecap="round"
                                className="transition-all duration-700"
                            />
                            {/* Head */}
                            <circle
                                cx={status === 'poor' ? "53" : "50"}
                                cy="15"
                                r="8"
                                className={cn("fill-none stroke-current transition-all duration-700", config.color)}
                                strokeWidth="2"
                            />
                            {/* Shoulders */}
                            <line
                                x1="30" y1="35" x2="70" y2="35"
                                className={cn("stroke-current transition-all duration-700", config.color)}
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            {/* Tech Markers */}
                            <circle cx="50" cy="35" r="2" fill="white" className="animate-ping" />
                            <circle cx="50" cy="65" r="2" fill="white" />
                            <circle cx="50" cy="100" r="2" fill="white" />
                        </svg>
                        {/* Measuring Lines */}
                        <div className="absolute inset-0 border border-white/5 pointer-events-none rounded-sharp" />
                    </div>
                </div>

                {/* Sidebar Metrics */}
                <div className="space-y-6">
                    <div className="tech-panel p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <Zap className="w-4 h-4 text-accent-yellow" />
                            <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Energy Score</span>
                        </div>
                        <div className="text-4xl font-black tracking-tighter">84 <span className="text-sm text-muted font-normal tracking-normal">/ 100</span></div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full bg-accent-yellow w-[84%] transition-all duration-1000" />
                        </div>
                    </div>

                    <div className="tech-panel p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <TrendingUp className="w-4 h-4 text-accent-green" />
                            <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Streak</span>
                        </div>
                        <div className="text-4xl font-black tracking-tighter">12 <span className="text-sm text-muted font-normal tracking-normal">Days</span></div>
                        <p className="text-[10px] text-accent-green font-bold uppercase tracking-tight">+15% improvement vs last week</p>
                    </div>
                </div>
            </div>

            {/* History Chart */}
            <div className="tech-panel p-8">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-white" />
                        <h3 className="text-xl font-bold tracking-tighter uppercase whitespace-nowrap">Posture Precision History</h3>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-white/10 rounded-sharp text-[10px] font-bold uppercase tracking-widest">7 Days</button>
                        <button className="px-3 py-1 text-muted text-[10px] font-bold uppercase tracking-widest">30 Days</button>
                    </div>
                </div>
                <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={mockHistory}>
                            <defs>
                                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#ffffff" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis
                                dataKey="time"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: '#666', fontSize: 10, fontWeight: 'bold' }}
                                dy={10}
                            />
                            <YAxis
                                hide
                                domain={[0, 100]}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#111', borderColor: '#333', borderRadius: '2px', border: '1px solid rgba(255,255,255,0.1)' }}
                                itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="score"
                                stroke="#ffffff"
                                strokeWidth={2}
                                fillOpacity={1}
                                fill="url(#colorScore)"
                                animationDuration={2000}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
