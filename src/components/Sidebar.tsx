import { Activity, ShieldCheck, UserCog, LayoutDashboard, Settings, Bell } from 'lucide-react';
import { cn } from '../utils/cn';

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: any) => void;
}

const navItems = [
    { id: 'feedback', label: 'Monitor', icon: Activity },
    { id: 'addons', label: 'Marketplace', icon: UserCog },
    { id: 'license', label: 'License', icon: ShieldCheck },
];

const secondaryItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'notifications', label: 'Alerts', icon: Bell },
];

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
    return (
        <aside className="w-64 bg-sidebar border-r border-border h-screen flex flex-col p-4">
            <div className="flex items-center gap-3 px-3 py-6 mb-8">
                <div className="w-8 h-8 bg-white rounded-sharp flex items-center justify-center">
                    <LayoutDashboard className="w-5 h-5 text-black" />
                </div>
                <span className="font-bold tracking-tight text-white text-lg">PostureSense</span>
            </div>

            <nav className="flex-1 space-y-1">
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 mb-2">
                    Workspace
                </div>
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={cn(
                                "w-full transition-all duration-200",
                                isActive ? "sidebar-link-active" : "sidebar-link"
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {item.label}
                        </button>
                    );
                })}
            </nav>

            <div className="mt-auto space-y-1 pt-4 border-t border-border">
                {secondaryItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <button
                            key={item.id}
                            className="w-full sidebar-link"
                        >
                            <Icon className="w-4 h-4" />
                            {item.label}
                        </button>
                    );
                })}

                <div className="mt-4 px-3 py-3 bg-white/5 rounded-sharp border border-white/5 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10" />
                    <div className="flex flex-col">
                        <span className="text-xs font-medium text-white">Guest User</span>
                        <span className="text-[10px] text-muted-foreground">Pro Access Plan</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
