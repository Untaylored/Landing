import React, { useState, useEffect } from 'react';
import BrowserFrame from './ui/BrowserFrame';
import { ChevronLeft, ChevronRight, TrendingUp, MousePointer2, Eye, BarChart2 } from 'lucide-react';

const CASES = [
  {
    id: 1,
    type: "Enterprise SaaS",
    title: "From invisible to market leader",
    desc: "This B2B platform replaced their agency with Fonzy. In 12 months, they captured 236k clicks by dominating 'best [category] software' terms.",
    metrics: { clicks: "236K", impressions: "16.9M", ctr: "1.4%", position: "32" },
    growth: "+2,400%",
    path: "M0,180 L20,175 L40,160 L60,165 L80,150 L100,155 L120,140 L140,145 L160,120 L180,130 L200,100 L220,110 L240,80 L260,90 L280,60 L300,70 L320,50 L340,60 L360,40 L380,45 L400,30 L420,35 L440,20 L460,25 L480,15 L500,20 L520,10 L540,15 L560,5",
    color: "#8B5CF6" // Purple
  },
  {
    id: 2,
    type: "Niche Affiliate",
    title: "Viral spike & consistent baseline",
    desc: "Targeted a trending topic with Fonzy's 'News Jacking' mode. The initial spike built authority that sustained long-term organic traffic.",
    metrics: { clicks: "28.8K", impressions: "2.28M", ctr: "1.3%", position: "40.9" },
    growth: "+450%",
    path: "M0,190 L30,190 L60,185 L90,60 L100,40 L110,70 L120,100 L150,110 L180,115 L210,105 L240,110 L270,100 L300,105 L330,95 L360,100 L390,90 L420,95 L450,85 L480,90 L510,80 L540,85 L560,75",
    color: "#3B82F6" // Blue
  },
  {
    id: 3,
    type: "Local Startup",
    title: "Steady, compound growth",
    desc: "A local service business publishing 1 article a day. Slow start, but compound growth kicked in at month 4, leading to 5k highly qualified leads.",
    metrics: { clicks: "5.02K", impressions: "153K", ctr: "3.3%", position: "21.4" },
    growth: "+110%",
    path: "M0,190 L40,185 L80,180 L120,178 L160,170 L200,165 L240,150 L280,140 L320,135 L360,120 L400,110 L440,90 L480,80 L520,60 L560,40",
    color: "#10B981" // Green
  },
  {
    id: 4,
    type: "E-Commerce",
    title: "Category domination",
    desc: "Scaled product description pages and blog content simultaneously. The result was a massive lift in impressions and 64k clicks.",
    metrics: { clicks: "64K", impressions: "4.71M", ctr: "1.4%", position: "23.6" },
    growth: "+880%",
    path: "M0,180 L30,178 L60,175 L90,170 L120,165 L150,168 L180,160 L210,155 L240,150 L270,140 L300,120 L330,110 L360,90 L390,70 L420,60 L450,120 L480,80 L510,50 L540,40 L560,30",
    color: "#F59E0B" // Amber
  },
  {
    id: 5,
    type: "Content Site",
    title: "High volume publishing",
    desc: "Used Fonzy's Bulk Mode to cover 300+ topic clusters. The site stabilized at 44.5k monthly clicks with zero manual writing.",
    metrics: { clicks: "44.5K", impressions: "1.15M", ctr: "3.9%", position: "22.4" },
    growth: "+320%",
    path: "M0,150 L30,145 L60,140 L90,145 L120,130 L150,135 L180,120 L210,125 L240,110 L270,115 L300,100 L330,105 L360,90 L390,95 L420,80 L450,85 L480,70 L510,75 L540,60 L560,65",
    color: "#EC4899" // Pink
  }
];

const Results: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveCase((prev) => (prev + 1) % CASES.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveCase((prev) => (prev - 1 + CASES.length) % CASES.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-cycle
  useEffect(() => {
    const interval = setInterval(() => {
        handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = CASES[activeCase];

  return (
    <section id="results" className="py-24 bg-brand-black text-brand-linen relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                    <TrendingUp size={12} className="text-green-400" />
                    Verified Data
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">
                  Results you can <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">verify.</span>
                </h2>
                <p className="text-lg text-gray-400">
                    Real Search Console data from founders who switched to autopilot.
                </p>
            </div>
            
            {/* Controls */}
            <div className="flex gap-4">
                <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: The Story */}
            <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
                <div key={current.id} className="animate-in slide-in-from-left-4 fade-in duration-500">
                    <div className="text-sm font-bold text-brand-orange uppercase tracking-widest mb-2">{current.type}</div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-4">{current.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg mb-8">
                        "{current.desc}"
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-bold text-white">{current.growth}</div>
                        <div className="text-sm text-gray-500 uppercase font-medium">Organic Traffic <br/> Growth</div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex gap-2 pt-8">
                    {CASES.map((_, idx) => (
                        <button 
                            key={idx}
                            onClick={() => setActiveCase(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === activeCase ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/40'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Right: The GSC Simulator */}
            <div className="lg:col-span-8 order-1 lg:order-2">
                <BrowserFrame className="shadow-2xl bg-white" title={`Search Console - ${current.type}`}>
                    <div className="bg-white p-6 min-h-[400px] flex flex-col">
                        
                        {/* GSC Toolbar */}
                        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm border-b border-gray-100 pb-4">
                            <div className="bg-gray-100 px-3 py-1.5 rounded text-gray-700 font-medium">Search type: Web</div>
                            <div className="bg-gray-100 px-3 py-1.5 rounded text-gray-700 font-medium">Date: Last 12 months</div>
                            <div className="ml-auto bg-blue-50 text-blue-600 px-3 py-1.5 rounded font-medium text-xs uppercase tracking-wide">
                                Verified Property
                            </div>
                        </div>

                        {/* GSC Scorecards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {/* Clicks */}
                            <div className="p-4 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                                <div className="flex items-center gap-2 mb-1 text-gray-500 text-xs font-medium uppercase">
                                    <div className="w-3 h-3 rounded bg-blue-500 flex items-center justify-center"><MousePointer2 size={8} className="text-white"/></div>
                                    Total clicks
                                </div>
                                <div className="text-2xl font-sans font-medium text-gray-900">
                                    {current.metrics.clicks}
                                </div>
                            </div>
                            
                            {/* Impressions */}
                            <div className="p-4 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-purple-600"></div>
                                <div className="flex items-center gap-2 mb-1 text-gray-500 text-xs font-medium uppercase">
                                     <div className="w-3 h-3 rounded bg-purple-600 flex items-center justify-center"><Eye size={8} className="text-white"/></div>
                                    Total impressions
                                </div>
                                <div className="text-2xl font-sans font-medium text-gray-900">
                                    {current.metrics.impressions}
                                </div>
                            </div>

                            {/* CTR */}
                            <div className="p-4 rounded-lg shadow-sm border border-gray-100 hidden md:block">
                                <div className="flex items-center gap-2 mb-1 text-gray-500 text-xs font-medium uppercase">
                                    <div className="w-3 h-3 rounded border border-gray-300"></div>
                                    Average CTR
                                </div>
                                <div className="text-2xl font-sans font-medium text-gray-900">
                                    {current.metrics.ctr}
                                </div>
                            </div>

                            {/* Position */}
                            <div className="p-4 rounded-lg shadow-sm border border-gray-100 hidden md:block">
                                <div className="flex items-center gap-2 mb-1 text-gray-500 text-xs font-medium uppercase">
                                    <div className="w-3 h-3 rounded border border-gray-300"></div>
                                    Avg. position
                                </div>
                                <div className="text-2xl font-sans font-medium text-gray-900">
                                    {current.metrics.position}
                                </div>
                            </div>
                        </div>

                        {/* The Graph */}
                        <div className="flex-1 relative w-full h-48 md:h-64">
                            <svg 
                                viewBox="0 0 560 200" 
                                className="w-full h-full overflow-visible" 
                                preserveAspectRatio="none"
                            >
                                {/* Grid Lines */}
                                {[0, 50, 100, 150, 200].map(y => (
                                    <line key={y} x1="0" y1={y} x2="560" y2={y} stroke="#f3f4f6" strokeWidth="1" />
                                ))}
                                
                                <defs>
                                    <linearGradient id={`gradient-${current.id}`} x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor={current.color} stopOpacity="0.2" />
                                        <stop offset="100%" stopColor={current.color} stopOpacity="0" />
                                    </linearGradient>
                                </defs>

                                {/* Area Fill */}
                                <path 
                                    d={`${current.path} V 200 H 0 Z`} 
                                    fill={`url(#gradient-${current.id})`}
                                    className="transition-all duration-1000 ease-in-out"
                                />

                                {/* Line Path */}
                                <path 
                                    d={current.path} 
                                    fill="none" 
                                    stroke={current.color} 
                                    strokeWidth="3" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    className="drop-shadow-md transition-all duration-1000 ease-in-out"
                                    // Key to re-trigger animation on change
                                    key={current.id}
                                >
                                    <animate 
                                        attributeName="stroke-dasharray" 
                                        from="0, 2000" 
                                        to="2000, 0" 
                                        dur="1.5s" 
                                        begin="0s" 
                                        fill="freeze" 
                                    />
                                </path>

                                {/* Impression Line (Ghost line for visual complexity) */}
                                <path 
                                    d={current.path.replace(/L(\d+),(\d+)/g, (match, x, y) => `L${x},${Math.max(10, parseInt(y) - 20)}`)} 
                                    fill="none" 
                                    stroke="#9333ea" // Purple for impressions
                                    strokeWidth="2" 
                                    strokeOpacity="0.3"
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    className="transition-all duration-1000 ease-in-out delay-100"
                                />
                            </svg>
                        </div>
                        
                        {/* Dates X-Axis */}
                        <div className="flex justify-between text-[10px] text-gray-400 font-medium uppercase mt-2">
                             <span>Jan 2024</span>
                             <span>Mar</span>
                             <span>Jun</span>
                             <span>Sep</span>
                             <span>Dec</span>
                             <span>Feb 2025</span>
                        </div>
                    </div>
                </BrowserFrame>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Results;