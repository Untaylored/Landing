import React, { useState, useEffect, useRef } from 'react';
import { BrainCircuit, Cpu, TrendingUp, Check, Zap, Layers, FileText, BarChart3, Search, Calendar, RefreshCw, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const steps = sectionRef.current.querySelectorAll('.feature-step');
      const triggerPoint = window.innerHeight * 0.5;

      steps.forEach((step, index) => {
        const rect = step.getBoundingClientRect();
        if (rect.top < triggerPoint && rect.bottom > triggerPoint) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      id: 0,
      title: "AI Strategist",
      subtitle: "Phase 1: Analysis",
      description: "Fonzy scans your market, competitors, and current content gaps. It builds a complete topical map designed to capture buyer intent, not just traffic.",
      icon: <BrainCircuit className="w-6 h-6" />,
      points: ["Competitor Gap Analysis", "Keyword Clustering", "Topical Authority Mapping"]
    },
    {
      id: 1,
      title: "Your 30-Day Plan",
      subtitle: "Phase 2: Strategy",
      description: "Fonzy architects a complete month of high-intent content instantly. You get 30 strategic titles mapped to buyer intent—review, tweak, and approve the entire roadmap in one click.",
      icon: <Calendar className="w-6 h-6" />,
      points: ["Instant Content Roadmap", "Buyer Intent Matching", "One-Click Approval"]
    },
    {
      id: 2,
      title: "Auto-Production",
      subtitle: "Phase 3: Execution",
      description: "From brief to published article in seconds. Our agentic workflow handles research, writing, image generation, formatting, and internal linking.",
      icon: <Cpu className="w-6 h-6" />,
      points: ["2,000+ Word Deep Dives", "Auto-Generated Imagery", "Human-Like Tone Matching"]
    },
    {
      id: 3,
      title: "Optimization on Autopilot",
      subtitle: "Phase 4: Optimization",
      description: "Content shouldn't rot. Fonzy monitors your rankings 24/7, automatically refreshing decaying articles and updating internal links to keep your traffic climbing without you lifting a finger.",
      icon: <TrendingUp className="w-6 h-6" />,
      points: ["24/7 Rank Monitoring", "Auto-Refresh Content", "Dynamic Interlinking"]
    }
  ];

  // Helper to render visuals. Used in both Mobile (Inline) and Desktop (Sticky) views
  const renderVisual = (stepIndex: number, isActive: boolean) => {
      return (
        <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#0F1115] rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden ring-4 ring-gray-200/50">
            {/* Glass Header */}
            <div className="absolute top-0 left-0 right-0 h-14 bg-white/5 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 z-20">
                <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                </div>
                <div className="flex items-center gap-3">
                <div className="px-2 py-0.5 rounded bg-white/10 border border-white/5 text-[10px] text-gray-400 font-mono">
                    FONZY_CORE v2.1
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-widest transition-all duration-300">
                        {stepIndex === 0 ? 'STRATEGY_NODE' : 
                        stepIndex === 1 ? 'PLANNER_HUB' :
                        stepIndex === 2 ? 'PROD_ENGINE' : 'AUTOPILOT_DASH'}
                    </span>
                </div>
                </div>
            </div>

            {/* VISUALIZATION CONTAINER */}
            <div className="relative w-full h-full flex items-center justify-center bg-[#0F1115] overflow-hidden">
                
                {/* 0. STRATEGY VISUALIZATION */}
                {stepIndex === 0 && (
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-90 blur-sm'
                    }`}>
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-[80%] h-[80%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
                        <div className="absolute w-[60%] h-[60%] border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>
                        <div className="absolute z-20 flex flex-col items-center">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-brand-orange to-red-600 rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(242,85,51,0.5)] animate-pulse border-4 border-[#0F1115]">
                                <BrainCircuit size={32} className="text-white" />
                            </div>
                        </div>
                        {[
                            { top: '25%', left: '25%', label: 'Gap', icon: Search, delay: '0s' },
                            { top: '30%', left: '75%', label: 'Intent', icon: Layers, delay: '1s' },
                            { top: '70%', left: '30%', label: 'Opp', icon: Zap, delay: '0.5s' },
                            { top: '65%', left: '70%', label: 'KWs', icon: FileText, delay: '1.5s' },
                        ].map((node, i) => (
                            <div key={i} className="absolute flex flex-col items-center gap-2 animate-float" style={{ top: node.top, left: node.left, animationDelay: node.delay }}>
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#1A1D24] rounded-xl border border-white/10 flex items-center justify-center shadow-lg relative group">
                                    <node.icon size={16} className="text-white/70" />
                                </div>
                                <div className="px-2 py-1 rounded bg-black/50 backdrop-blur border border-white/10 text-[9px] text-white/80 font-mono">
                                    {node.label}
                                </div>
                            </div>
                        ))}
                    </div>
                    </div>
                )}

                {/* 1. PLAN BLUEPRINT VISUALIZATION */}
                {stepIndex === 1 && (
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-20'
                    }`}>
                    <div className="w-[85%] max-w-[380px] bg-white rounded-xl shadow-2xl overflow-hidden relative border border-gray-200">
                        <div className="p-4 border-b border-gray-100 bg-gray-50 flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-gray-500"/>
                                <span className="font-semibold text-gray-700 text-sm">December Strategy</span>
                            </div>
                        </div>
                        <div className="p-2 space-y-2">
                            {[
                            { title: "Top 10 CRM Tools", tag: "Guide" },
                            { title: "Scale Sales Outreach", tag: "How-to" },
                            { title: "Lead Gen Strategies", tag: "List" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                                    <div className="w-5 h-5 rounded-full border-2 border-green-500 bg-green-50 flex items-center justify-center text-green-600">
                                        <Check size={12} strokeWidth={3} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-semibold text-gray-800">{item.title}</div>
                                        <div className="text-[10px] text-gray-400 mt-0.5">{item.tag} • 1200w</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-gray-50 border-t border-gray-100">
                            <button className="w-full py-2 bg-brand-orange text-white rounded-lg text-sm font-semibold shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2">
                                <CheckCircle2 size={16} />
                                Approve 30-Day Plan
                            </button>
                        </div>
                    </div>
                    </div>
                )}


                {/* 2. PRODUCTION VISUALIZATION */}
                {stepIndex === 2 && (
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
                    }`}>
                    <div className="w-[85%] max-w-[420px] bg-white rounded-xl shadow-2xl overflow-hidden relative transform rotate-1 border border-gray-200">
                        <div className="h-32 md:h-40 bg-gray-50 relative overflow-hidden group border-b border-gray-100">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-0">
                                <div className="text-center">
                                <div className="w-10 h-10 bg-white rounded-full mx-auto mb-2 flex items-center justify-center shadow-sm animate-spin border border-gray-100">
                                    <RefreshCw size={16} className="text-gray-400" />
                                </div>
                                <span className="text-[10px] uppercase tracking-wide font-medium">Synthesizing...</span>
                                </div>
                            </div>
                            {/* Sliding Image */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-[2s] ease-out translate-y-full z-10" style={{ transform: isActive ? 'translateY(0)' : 'translateY(100%)' }}></div>
                        </div>
                        
                        <div className="p-4 md:p-6 space-y-4 bg-white min-h-[200px]">
                            <div className="space-y-2 mb-4">
                                <div className="h-6 w-3/4 bg-gray-900 rounded-md animate-pulse"></div>
                                <div className="h-3 w-1/2 bg-gray-200 rounded-md"></div>
                            </div>
                            <div className="space-y-2.5">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="h-2 bg-gray-100 rounded-sm w-full overflow-hidden relative">
                                        <div className="absolute inset-0 bg-gray-300 animate-[typing_1s_ease-out_forwards] origin-left" style={{ animationDelay: `${i * 0.15}s` }}></div>
                                    </div>
                                ))}
                            </div>
                            <div className="absolute bottom-4 right-4 bg-brand-black text-white px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 text-xs font-mono">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                Writing...
                            </div>
                        </div>
                    </div>
                    </div>
                )}


                {/* 3. OPTIMIZATION VISUALIZATION */}
                {stepIndex === 3 && (
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isActive ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-105 rotate-3'
                    }`}>
                    <div className="w-[90%] max-w-[450px] bg-[#151921] border border-white/10 rounded-2xl p-4 md:p-6 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-[50px]"></div>

                        <div className="flex justify-between items-center mb-6 relative z-10">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                                    <TrendingUp size={16} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-sm">Autopilot</h4>
                                </div>
                            </div>
                            <div className="px-2 py-1 bg-green-500/20 text-green-400 text-[10px] font-mono font-bold uppercase rounded border border-green-500/30 animate-pulse">
                                ● Live
                            </div>
                        </div>

                        {/* Big Graph */}
                        <div className="relative h-32 md:h-48 w-full mb-6 group">
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                                <path 
                                d="M0,100 C50,90 100,80 150,60 S250,40 300,30 S400,10 450,5" 
                                fill="none" 
                                stroke="#27C93F" 
                                strokeWidth="3" 
                                className="drop-shadow-[0_0_10px_rgba(39,201,63,0.5)]"
                                />
                                <circle cx="450" cy="5" r="4" fill="#27C93F" className="animate-ping" />
                            </svg>

                            <div className="absolute top-0 right-0 bg-[#222] border border-white/10 px-3 py-2 rounded-lg shadow-lg flex flex-col items-end">
                                <span className="text-[10px] text-gray-400 uppercase">Growth</span>
                                <span className="text-lg font-bold text-white">+248%</span>
                            </div>
                        </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
      )
  }

  return (
    <section ref={sectionRef} id="features" className="relative bg-brand-linen/30 py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20 lg:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-wider mb-4 md:mb-6 border border-brand-orange/20">
             <Zap size={12} className="fill-brand-orange" />
             Under the hood
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-serif mb-4 md:mb-6 text-brand-black">
            The Content <span className="text-brand-orange italic">Engine</span>
          </h2>
          <p className="text-base md:text-lg text-brand-gray px-4">
            See how Fonzy turns raw data into ranking articles without human intervention.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Left Column: Scrollable Narrative */}
          <div className="w-full lg:w-5/12 pb-[5vh] lg:pb-[10vh]">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-step min-h-0 lg:min-h-[80vh] flex flex-col justify-center transition-all duration-500 mb-16 lg:mb-0 ${activeStep === index ? 'opacity-100' : 'lg:opacity-30 lg:blur-[1px]'}`}
              >
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg ${
                    activeStep === index ? 'bg-brand-orange text-white scale-110' : 'bg-white text-gray-300 scale-100'
                  }`}>
                    {feature.icon}
                  </div>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-gray">{feature.subtitle}</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-black mb-4 md:mb-6 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-base md:text-lg text-brand-gray leading-relaxed mb-6 md:mb-8 max-w-md">
                  {feature.description}
                </p>

                {/* MOBILE VISUALIZATION: Rendered inline between text steps */}
                <div className="block lg:hidden my-8 transform scale-100">
                    {renderVisual(index, true)}
                </div>

                <ul className="space-y-3 md:space-y-4">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] transition-colors duration-500 ${
                        activeStep === index ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-300'
                      }`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={`font-medium text-base md:text-lg transition-colors duration-500 ${
                        activeStep === index ? 'text-brand-black' : 'text-gray-400'
                      }`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Visualization (Desktop Only) */}
          <div className="hidden lg:block w-full lg:w-7/12 relative">
             <div className="sticky top-[15vh] h-[70vh] w-full flex items-center">
               {/* Use the shared render helper, but render ALL of them stacked absolutely, visibility controlled by activeStep */}
               <div className="relative w-full aspect-[4/3]">
                    {features.map((_, idx) => (
                        <div key={idx} className={`absolute inset-0 transition-opacity duration-500 ${activeStep === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                             {renderVisual(idx, activeStep === idx)}
                        </div>
                    ))}
                    
                    {/* Progress Dots Footer */}
                    <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2">
                          {[0, 1, 2, 3].map(step => (
                             <div key={step} className={`h-1.5 rounded-full transition-all duration-500 ${activeStep === step ? 'w-8 bg-brand-orange' : 'w-2 bg-gray-300'}`}></div>
                          ))}
                    </div>
               </div>
            </div>
          </div>
        </div>

        <style>{`
        @keyframes typing {
           from { transform: scaleX(0); }
           to { transform: scaleX(1); }
        }
        @keyframes float {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-10px); }
        }
        .animate-float {
            animation: float 4s ease-in-out infinite;
        }
      `}</style>
      </div>
    </section>
  );
};

export default Features;