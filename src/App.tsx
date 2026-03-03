import { useState } from "react";
import { RootLayout } from "./layouts/RootLayout";
import { AmbientFeedback, PostureStatus } from "./components/AmbientFeedback";
import { AddOnManager } from "./screens/AddOnManager";
import { LicenseVerification } from "./screens/LicenseVerification";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState<'feedback' | 'addons' | 'license'>('feedback');
  const [testStatus, setTestStatus] = useState<PostureStatus>('good');

  return (
    <RootLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Simplified Header for sub-pages */}
        <header className="px-8 py-4 border-b border-border flex items-center justify-between bg-black/20 backdrop-blur-sm sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase text-muted tracking-widest">Session ID</span>
            <span className="text-[10px] font-mono text-white tracking-widest opacity-40">TR-X-9942</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-accent-green" />
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="w-1 h-1 rounded-full bg-white/20" />
            </div>
            <span className="text-[10px] font-bold text-white uppercase tracking-tighter">System Nominal</span>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {activeTab === 'feedback' && (
            <div className="flex flex-col items-center">
              <AmbientFeedback status={testStatus} />

              {/* Simulator Controls (For Demo) */}
              <div className="mt-8 mb-16 flex gap-2 p-1.5 tech-panel bg-surface/50 mx-auto">
                {(['good', 'warning', 'poor', 'off'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => setTestStatus(s)}
                    className={`px-4 py-2 rounded-sharp text-[10px] font-black uppercase tracking-widest transition-all ${testStatus === s ? 'bg-white text-black' : 'text-muted-foreground hover:text-white'
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'addons' && <AddOnManager />}
          {activeTab === 'license' && <LicenseVerification />}
        </div>
      </div>
    </RootLayout>
  );
}

export default App;
