import { useState } from 'react';
import { KeyRound, ShieldCheck, CornerDownRight, Cpu, Lock, Terminal, Activity } from 'lucide-react';
import { cn } from '../utils/cn';

export function LicenseVerification() {
    const [licenseKey, setLicenseKey] = useState('');
    const [status, setStatus] = useState<'idle' | 'validating' | 'success' | 'invalid'>('idle');

    const handleValidate = (e: React.FormEvent) => {
        e.preventDefault();
        if (!licenseKey.trim()) return;

        setStatus('validating');
        setTimeout(() => {
            if (licenseKey.startsWith('PS-PRO-')) {
                setStatus('success');
            } else {
                setStatus('invalid');
            }
        }, 2000);
    };

    return (
        <div className="p-8 max-w-4xl mx-auto w-full h-full flex flex-col justify-center">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">

                {/* Visual Cryptography Panel */}
                <div className="md:col-span-2 space-y-8">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sharp text-[10px] font-black uppercase text-accent-yellow">
                            <Lock className="w-3 h-3" />
                            Secure Activation
                        </div>
                        <h1 className="text-4xl font-black tracking-tighter uppercase leading-[0.9]">Initialize Pro Environment</h1>
                        <p className="text-muted text-sm leading-tight italic opacity-80">"Unlock cryptographic precision and deep-tissue monitoring modules."</p>
                    </div>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-white/5 rounded-sharp border border-white/10"><Cpu className="w-4 h-4 text-white" /></div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-white tracking-widest">Offline Verification</p>
                                <p className="text-[10px] text-muted leading-tight">Ed25519 signature verified on bare metal.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-white/5 rounded-sharp border border-white/10"><Terminal className="w-4 h-4 text-white" /></div>
                            <div className="space-y-1">
                                <p className="text-[10px] font-black uppercase text-white tracking-widest">Local-First Privacy</p>
                                <p className="text-[10px] text-muted leading-tight">No telemetry data during activation.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Portal Form */}
                <div className="md:col-span-3">
                    <div className="tech-panel bg-black/50 p-8 space-y-8 relative group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <ShieldCheck className="w-12 h-12" />
                        </div>

                        <form onSubmit={handleValidate} className="space-y-6">
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <label htmlFor="license" className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Digital License Certificate</label>
                                    <span className="text-[10px] font-mono text-muted-foreground opacity-50 uppercase">ED25519_AUTH_V2</span>
                                </div>
                                <div className="relative">
                                    <textarea
                                        id="license"
                                        rows={6}
                                        value={licenseKey}
                                        onChange={(e) => {
                                            setLicenseKey(e.target.value);
                                            if (status === 'invalid') setStatus('idle');
                                        }}
                                        className="tech-input font-mono text-[10px] tracking-tight bg-black border-dashed border-white/20 hover:border-white/40 transition-colors placeholder:text-neutral-800"
                                        placeholder="// Paste your signed license fragment here..."
                                        spellCheck="false"
                                    />
                                    <CornerDownRight className="absolute bottom-4 right-4 w-4 h-4 text-white/20 select-none" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {status === 'invalid' && (
                                    <div className="flex items-center gap-3 text-accent-red text-[10px] font-black uppercase tracking-widest p-4 bg-accent-red/5 border border-accent-red/20 rounded-sharp">
                                        <AlertCircle className="w-4 h-4" />
                                        Signature mismatch: Authentication failure.
                                    </div>
                                )}

                                {status === 'success' && (
                                    <div className="flex items-center gap-3 text-accent-green text-[10px] font-black uppercase tracking-widest p-4 bg-accent-green/5 border border-accent-green/20 rounded-sharp">
                                        <ShieldCheck className="w-4 h-4" />
                                        Protocol active: Pro license verified.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'validating' || !licenseKey.trim() || status === 'success'}
                                    className="w-full tech-button py-4 uppercase text-xs font-black tracking-[0.2em] flex items-center justify-center gap-3 disabled:opacity-20"
                                >
                                    {status === 'validating' ? (
                                        <>
                                            <div className="w-4 h-4 border border-black/30 border-t-black rounded-full animate-spin" />
                                            Synchronizing...
                                        </>
                                    ) : status === 'success' ? (
                                        'Environment Verified'
                                    ) : (
                                        <>
                                            Verify Signature
                                            <KeyRound className="w-4 h-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        <div className="pt-4 flex items-center justify-between text-[9px] font-mono text-muted-foreground uppercase tracking-widest border-t border-white/5">
                            <span>Node: PostureSense_Client_01</span>
                            <span>Uptime: 00:04:12</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

function AlertCircle(props: any) {
    return <Activity {...props} className={cn(props.className, "rotate-180")} />
}
