
import React, { useState, useEffect } from 'react';
import { Database, Scan, CheckCircle2, Zap, LayoutTemplate, Globe, ShoppingBag } from 'lucide-react';

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      id: 0,
      title: "Connect Your Site", 
      desc: "Link your CMS in 2 clicks. No code required.",
      icon: <Database size={20} />
    },
    { 
      id: 1,
      title: "AI Market Scan", 
      desc: "Fonzy analyzes your niche, competitors, and gaps.",
      icon: <Scan size={20} />
    },
    { 
      id: 2,
      title: "Approve Strategy", 
      desc: "Review the topic map. One click to authorize.",
      icon: <CheckCircle2 size={20} />
    },
    { 
      id: 3,
      title: "Launch Autopilot", 
      desc: "Fonzy writes and publishes daily. You grow.",
      icon: <Zap size={20} />
    }
  ];

  // Auto-cycle through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000); // 3 seconds per step
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">
              From signup to ranking <br/>
              <span className="italic text-brand-orange">in 3 minutes.</span>
            </h2>
            <p className="text-gray-500 text-lg">
              We've stripped away the complexity. No developers, no spreadsheets.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            
            {/* Left: The Steps */}
            <div className="space-y-4">
                {steps.map((step, index) => (
                    <div 
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border-2 ${
                            activeStep === index 
                            ? 'bg-orange-50/50 border-brand-orange shadow-lg scale-105' 
                            : 'bg-white border-transparent hover:bg-gray-50'
                        }`}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-full transition-colors duration-300 ${
                                activeStep === index ? 'bg-brand-orange text-white' : 'bg-gray-100 text-gray-400'
                            }`}>
                                {step.icon}
                            </div>
                            <div>
                                <h3 className={`text-xl font-bold mb-1 ${activeStep === index ? 'text-brand-black' : 'text-gray-400'}`}>
                                    {step.title}
                                </h3>
                                <p className={`text-sm ${activeStep === index ? 'text-gray-600' : 'text-gray-300'}`}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                        
                        {/* Progress Bar (Only visible when active) */}
                        {activeStep === index && (
                            <div className="absolute bottom-0 left-0 h-1 bg-brand-orange/20 w-full rounded-b-2xl overflow-hidden">
                                <div className="h-full bg-brand-orange animate-[loading_3s_linear]"></div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Right: The Dynamic Visual */}
            <div className="h-[400px] bg-brand-black rounded-3xl p-8 relative shadow-2xl overflow-hidden flex items-center justify-center">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy-dark.png')] opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-black/80"></div>

                {/* Visual State: Connect */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeStep === 0 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="relative">
                        <div className="w-24 h-24 bg-brand-orange rounded-2xl flex items-center justify-center z-20 relative shadow-[0_0_50px_rgba(242,85,51,0.5)]">
                            <div className="text-4xl font-serif font-bold text-white">F</div>
                        </div>
                        {/* Orbiting CMS Icons */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-brand-black p-2 rounded-full"><Globe size={16}/></div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                             <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-brand-black p-2 rounded-full"><ShoppingBag size={16}/></div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 border border-white/10 rounded-full animate-[spin_8s_linear_infinite]">
                             <div className="absolute top-1/2 -left-3 -translate-y-1/2 bg-white text-brand-black p-2 rounded-full"><LayoutTemplate size={16}/></div>
                        </div>
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm font-mono mt-8">Connecting CMS...</div>
                    </div>
                </div>

                {/* Visual State: Scan */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeStep === 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="relative w-64 h-48 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                        {/* Wireframe UI */}
                        <div className="p-3 border-b border-gray-700 flex gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                        <div className="p-4 space-y-2 opacity-50">
                            <div className="w-3/4 h-2 bg-gray-600 rounded"></div>
                            <div className="w-1/2 h-2 bg-gray-600 rounded"></div>
                            <div className="w-full h-16 bg-gray-700 rounded mt-4"></div>
                        </div>
                        {/* Radar Scan Line */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)] animate-[scan_2s_linear_infinite]"></div>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-green-400/80 text-sm font-mono">Scanning niche opportunities...</div>
                </div>

                {/* Visual State: Approve */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeStep === 2 ? 'opacity-100' : 'opacity-0'}`}>
                     <div className="text-center">
                        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 mx-auto animate-[bounce_1s_infinite]">
                            <CheckCircle2 size={40} className="text-white" />
                        </div>
                        <div className="bg-white/10 backdrop-blur px-6 py-3 rounded-xl border border-white/20">
                            <div className="text-white font-serif text-xl">Strategy Approved</div>
                        </div>
                     </div>
                </div>

                {/* Visual State: Launch */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${activeStep === 3 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="relative">
                        <div className="w-32 h-32 rounded-full border-4 border-brand-orange flex items-center justify-center animate-[pulse_2s_infinite]">
                             <Zap size={48} className="text-brand-orange fill-current" />
                        </div>
                        {/* Particles */}
                        <div className="absolute inset-0 rounded-full border border-white/20 animate-ping"></div>
                    </div>
                     <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-orange text-sm font-mono tracking-widest uppercase">System Active</div>
                </div>

            </div>
        </div>

        <style>{`
            @keyframes loading {
                0% { width: 0%; }
                100% { width: 100%; }
            }
            @keyframes scan {
                0% { top: 0%; opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
        `}</style>
      </div>
    </section>
  );
};

export default Process;
