import { useState } from 'react';
import { Bell, Activity, Target, ArrowRight, Zap, Shield, Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';

interface AddOn {
    id: string;
    name: string;
    description: string;
    icon: React.ReactNode;
    enabled: boolean;
    tier: 'Core' | 'Elite' | 'Experimental';
    color: string;
}

export function AddOnManager() {
    const [addOns, setAddOns] = useState<AddOn[]>([
        {
            id: 'reminders',
            name: 'Smart Reminders',
            description: 'Dynamic nudge intervals calculated by bio-rhythms.',
            icon: <Bell className="w-5 h-5" />,
            enabled: true,
            tier: 'Core',
            color: 'text-accent-yellow'
        },
        {
            id: 'coach',
            name: 'Stretch Coach',
            description: 'Micro-stretching routines triggered by slumping patterns.',
            icon: <Activity className="w-5 h-5" />,
            enabled: false,
            tier: 'Elite',
            color: 'text-accent-green'
        },
        {
            id: 'neuro',
            name: 'Neuro-Focus',
            description: 'Mutes invasive notifications during deep spinal alignment.',
            icon: <Target className="w-5 h-5" />,
            enabled: false,
            tier: 'Elite',
            color: 'text-accent-red'
        },
        {
            id: 'adaptive',
            name: 'Adaptive Engine',
            description: 'Auto-adjusts monitoring burst frequency based on fatigue.',
            icon: <Zap className="w-5 h-5 text-white" />,
            enabled: true,
            tier: 'Core',
            color: 'text-white'
        }
    ]);

    const toggleAddOn = (id: string) => {
        setAddOns(addons => addons.map(a => a.id === id ? { ...a, enabled: !a.enabled } : a));
    };

    return (
        <div className="p-8 max-w-6xl mx-auto w-full space-y-12">
            <div className="flex items-end justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black tracking-tighter uppercase leading-none">Feature Marketplace</h1>
                    <p className="text-muted text-sm font-medium tracking-wide">Enhance your biomechanical monitoring suite</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-sharp bg-white/10 border border-white/20 flex items-center justify-center"><Shield className="w-3 h-3" /></div>
                        <div className="w-6 h-6 rounded-sharp bg-white/10 border border-white/20 flex items-center justify-center"><Sparkles className="w-3 h-3 text-accent-yellow" /></div>
                    </div>
                    <span className="text-[10px] font-black uppercase text-white tracking-widest bg-white/5 px-2 py-1 border border-white/10 rounded-sharp">Verified Suite</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-sharp overflow-hidden">
                {addOns.map((addon) => (
                    <div
                        key={addon.id}
                        className="group relative bg-surface p-8 transition-all hover:bg-neutral-900 flex flex-col justify-between h-64"
                    >
                        <div className="space-y-4">
                            <div className="flex items-start justify-between">
                                <div className={cn("p-4 rounded-sharp border border-white/5 bg-black", addon.color)}>
                                    {addon.icon}
                                </div>
                                <span className="text-[10px] font-bold tracking-widest text-muted uppercase border border-white/5 px-2 py-0.5 rounded-sharp">
                                    {addon.tier}
                                </span>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-primary transition-colors">{addon.name}</h3>
                                <p className="text-sm text-muted-foreground leading-snug mt-1 max-w-[240px]">
                                    {addon.description}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-6">
                            <button
                                onClick={() => toggleAddOn(addon.id)}
                                className={cn(
                                    "flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all",
                                    addon.enabled ? "text-white" : "text-muted-foreground hover:text-white"
                                )}
                            >
                                {addon.enabled ? 'Active Engine' : 'Initialize Module'}
                                <ArrowRight className={cn("w-3 h-3 transition-transform", addon.enabled && "rotate-[-45deg]")} />
                            </button>

                            {/* Technical Indicator */}
                            <div className={cn(
                                "w-2 h-2 rounded-full",
                                addon.enabled ? "bg-accent-green shadow-[0_0_8px_#D9F99D]" : "bg-white/10"
                            )} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="tech-panel p-6 bg-transparent border-dashed border-white/20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sharp bg-white/5 flex items-center justify-center border border-white/10">
                        <Sparkles className="w-5 h-5 text-accent-yellow" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-white uppercase tracking-tight">Experimental Modules</p>
                        <p className="text-xs text-muted">Join the beta program for bleeding-edge posture research.</p>
                    </div>
                </div>
                <button className="tech-button-muted uppercase text-[10px] tracking-widest font-black">Request Access</button>
            </div>
        </div>
    );
}
