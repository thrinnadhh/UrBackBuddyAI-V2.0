import { ReactNode } from "react";
import { Sidebar } from "../components/Sidebar";

interface RootLayoutProps {
    children: ReactNode;
    activeTab: string;
    setActiveTab: (tab: any) => void;
}

export function RootLayout({ children, activeTab, setActiveTab }: RootLayoutProps) {
    return (
        <div className="flex h-screen bg-background text-foreground selection:bg-white/10 overflow-hidden">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-1 overflow-y-auto relative">
                {/* Subtle background noise texture would be here in a real dashboard */}
                <div className="h-full flex flex-col">
                    {children}
                </div>
            </main>
        </div>
    );
}
