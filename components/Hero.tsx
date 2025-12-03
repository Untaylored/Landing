import React, { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import BrowserFrame from './ui/BrowserFrame';
import { Play, Calendar, FileText, Search, Settings, ChevronDown, LayoutGrid, TrendingUp, MoreHorizontal, CheckCircle2, Sparkles, Loader2, BrainCircuit } from 'lucide-react';
import { generateContentPlan } from '../services/geminiService';

const INITIAL_CALENDAR_DATA = [
  { day: "1", week: "Mon", title: "AI writing assistants", status: "queued" },
  { day: "2", week: "Tue", title: "customer acquisition strategies", status: "queued" },
  { day: "3", week: "Wed", title: "B2B go to market plan", status: "queued" },
  { day: "4", week: "Thu", title: "marketing analytics tools", status: "queued" },
  { day: "5", week: "Fri", title: "organic traffic growth", status: "queued" },
  { day: "6", week: "Sat", title: "AI for business automation", status: "queued" },
  { day: "7", week: "Sun", title: "competitive keyword analysis", status: "queued" },
  { day: "8", week: "Mon", title: "content ranking strategy", status: "queued" },
  { day: "9", week: "Tue", title: "SaaS marketing tactics", status: "queued" },
  { day: "10", week: "Wed", title: "SEO optimization guide", status: "queued" },
  { day: "11", week: "Thu", title: "AI marketing solutions", status: "queued" },
  { day: "12", week: "Fri", title: "business development strategies", status: "queued" },
  { day: "13", week: "Sat", title: "local SEO ranking tips", status: "queued" },
  { day: "14", week: "Sun", title: "product launch marketing", status: "queued" },
  { day: "15", week: "Mon", title: "AI-driven content strategy", status: "queued" },
  { day: "16", week: "Tue", title: "enterprise SEO platform", status: "queued" },
  { day: "17", week: "Wed", title: "market positioning strategy", status: "queued" },
  { day: "18", week: "Thu", title: "ranking algorithm updates", status: "queued" },
  { day: "19", week: "Fri", title: "AI copywriting tools", status: "queued" },
  { day: "20", week: "Sat", title: "lead generation tactics", status: "queued" },
  { day: "21", week: "Sun", title: "backlink building basics", status: "queued" },
  { day: "22", week: "Mon", title: "seo fundamentals guide", status: "queued" },
  { day: "23", week: "Tue", title: "small business marketing", status: "queued" },
  { day: "24", week: "Wed", title: "customer retention techniques", status: "queued" },
  { day: "25", week: "Thu", title: "digital marketing trends", status: "queued" },
  { day: "26", week: "Fri", title: "conversion rate optimization", status: "queued" },
  { day: "27", week: "Sat", title: "email marketing automation", status: "queued" },
  { day: "28", week: "Sun", title: "social proof strategies", status: "queued" },
];

const Hero: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [articlesGenerated, setArticlesGenerated] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Interactive State
  const [niche, setNiche] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [calendarItems, setCalendarItems] = useState(INITIAL_CALENDAR_DATA);
  const [isAnimating, setIsAnimating] = useState(true);
  const [hasUserGenerated, setHasUserGenerated] = useState(false);

  // Animation Loop
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isAnimating) {
      if (showSuccess) {
        if (hasUserGenerated) {
           // If user generated, wait a bit then hide success but keep content (stop animating)
           timeout = setTimeout(() => {
              setShowSuccess(false);
              setIsAnimating(false);
           }, 3000);
        } else {
           // Demo loop: pause then reset
           timeout = setTimeout(() => {
              setShowSuccess(false);
              setVisibleCount(0);
              setArticlesGenerated(0);
           }, 4000); 
        }
      } else {
        if (visibleCount < calendarItems.length) {
          timeout = setTimeout(() => {
            setVisibleCount((prev) => prev + 1);
            setArticlesGenerated((prev) => Math.min(prev + 1, 30));
          }, hasUserGenerated ? 30 : 50); // Faster animation for user results
        } else {
          setShowSuccess(true);
          setArticlesGenerated(30);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [visibleCount, showSuccess, isAnimating, calendarItems.length, hasUserGenerated]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche.trim()) return;

    setIsAnimating(false);
    setIsGenerating(true);
    setShowSuccess(false);
    setVisibleCount(0);
    setArticlesGenerated(0);
    setHasUserGenerated(true);

    try {
      const titles = await generateContentPlan(niche);
      
      if (titles && titles.length > 0) {
        // Map new titles to existing structure
        const newItems = calendarItems.map((item, index) => ({
          ...item,
          title: titles[index] || item.title // Fallback if fewer titles returned
        }));
        setCalendarItems(newItems);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsGenerating(false);
      setIsAnimating(true);
    }
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background provided by Global AmbientBackground component */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge - Matching SocialProof style */}
        <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100 mb-6 md:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-medium text-green-700 font-mono">
                Now live: Fonzy Search Autopilot
            </span>
        </div>

        {/* Headline - Adjusted for Mobile */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-brand-black mb-6 md:mb-8 leading-[1.15] md:leading-[1.1] tracking-tight">
          Get found in <br className="hidden md:block"/>
          Google and AI <br className="hidden md:block"/>
          <span className="italic text-brand-orange">on autopilot.</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base md:text-xl text-brand-gray mb-8 md:mb-10 leading-relaxed px-2">
          Fonzy plans, writes, and publishes SEO content for you every day so you get steady organic traffic without hiring writers.
        </p>

        {/* Interactive Demo Input - Optimized for touch */}
        <div className="w-full max-w-xl mx-auto mb-12 md:mb-16 relative z-20 px-2 sm:px-0">
            <form onSubmit={handleGenerate} className="bg-white p-1.5 md:p-2 rounded-full shadow-lg border border-gray-200 flex items-center focus-within:ring-2 focus-within:ring-brand-orange/50 transition-all transform hover:-translate-y-1 hover:shadow-xl">
                <div className="pl-4 md:pl-6 text-gray-400">
                    <Search size={20} />
                </div>
                <input 
                    type="text" 
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    placeholder="Enter your niche (e.g. CRM)" 
                    className="flex-1 px-3 md:px-4 py-3 bg-transparent outline-none text-gray-800 placeholder:text-gray-400 font-medium text-sm md:text-base w-full min-w-0"
                    disabled={isGenerating}
                />
                <Button 
                    type="submit" 
                    size="md" 
                    className="shrink-0 rounded-full py-2.5 px-4 md:px-6 md:py-3 text-sm md:text-base"
                    disabled={isGenerating || !niche.trim()}
                >
                    {isGenerating ? (
                        <>
                            <BrainCircuit size={18} className="animate-pulse mr-2" />
                            <span className="hidden sm:inline">Reasoning...</span>
                            <span className="sm:hidden">...</span>
                        </>
                    ) : (
                        <>
                            <Sparkles size={18} className="mr-2 fill-white/20" />
                            <span className="hidden sm:inline">Generate Plan</span>
                            <span className="sm:hidden">Generate</span>
                        </>
                    )}
                </Button>
            </form>
            <p className="text-[10px] md:text-xs text-gray-400 font-medium mt-3">
                Try it now. Enter your business type to see a live content strategy.
            </p>
        </div>

        {/* Hero Visual - High Fidelity App Mockup (Calendar View) */}
        <div className="relative w-full max-w-6xl mx-auto perspective-1000">
          <BrowserFrame className="relative z-10 transform transition-transform duration-700 shadow-2xl bg-white border-gray-200" title={niche ? `${niche} - Content Plan` : "Fonzy Dashboard"}>
             <div className="bg-white min-h-[400px] md:min-h-[600px] flex text-left font-sans antialiased">
                
                {/* Sidebar */}
                <div className="w-64 border-r border-gray-100 hidden md:flex flex-col bg-gray-50/30">
                    <div className="p-4 mb-2">
                        <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
                            <div className="w-6 h-6 rounded bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white text-xs font-bold">U</div>
                            <span className="text-sm font-semibold text-gray-900">Untaylored</span>
                            <ChevronDown size={14} className="text-gray-400 ml-auto" />
                        </div>
                    </div>

                    <div className="flex-1 px-3 space-y-6 overflow-y-auto">
                        <div>
                            <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-2">Platform</div>
                            <div className="space-y-0.5">
                                <div className="flex items-center gap-2 px-2 py-2 rounded-md bg-gray-100 text-gray-900 font-medium text-sm cursor-pointer">
                                    <Calendar size={18} className="text-gray-500" />
                                    Calendar
                                </div>
                                <div className="flex items-center gap-2 px-2 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm cursor-pointer transition-colors">
                                    <FileText size={18} className="text-gray-400" />
                                    Articles
                                </div>
                                <div className="flex items-center gap-2 px-2 py-2 rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900 text-sm cursor-pointer transition-colors">
                                    <Search size={18} className="text-gray-400" />
                                    Keywords
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Footer */}
                    <div className="p-4 border-t border-gray-100">
                         <div className="flex items-center gap-2 px-2 py-1.5">
                            <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Roald" alt="User" />
                            </div>
                            <span className="text-sm font-medium text-gray-700">Roald at Untaylored</span>
                         </div>
                    </div>
                </div>
                
                {/* Main Content - Calendar View */}
                <div className="flex-1 flex flex-col min-w-0 bg-white relative">
                    {/* Main Header */}
                    <div className="h-14 md:h-16 border-b border-gray-100 flex items-center justify-between px-4 md:px-8 bg-white sticky top-0 z-10">
                        <div>
                             <h2 className="text-lg md:text-xl font-semibold text-gray-900">Calendar</h2>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-3 py-1.5 text-xs md:text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm hover:bg-gray-800 transition-colors">
                                {isGenerating ? 'Thinking...' : 'Autofill Calendar'}
                            </button>
                        </div>
                    </div>

                    {/* Content Scroll Area */}
                    <div className="flex-1 overflow-auto p-3 md:p-8 bg-white relative">
                         <div className="mb-4 md:mb-6 flex items-baseline justify-between">
                            <div>
                                <h3 className="text-base md:text-lg font-semibold text-gray-900">December 2025</h3>
                                <p className="text-xs md:text-sm text-gray-500">{visibleCount} / 28 articles scheduled</p>
                            </div>
                         </div>

                         {/* Calendar Grid - Responsive */}
                         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-3">
                            {calendarItems.map((item, i) => {
                                const isFilled = i < visibleCount;
                                return (
                                    <div 
                                        key={i} 
                                        className={`min-h-[80px] md:min-h-[120px] p-2 md:p-2.5 rounded-lg border flex flex-col justify-between transition-all duration-300 ${
                                            isFilled 
                                            ? 'border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-md hover:border-gray-200 cursor-default animate-in fade-in zoom-in-95 group'
                                            : 'border-dashed border-gray-100 bg-transparent'
                                        }`}
                                    >
                                        <div className="flex justify-between items-start mb-1 md:mb-2">
                                            <div className="flex items-baseline gap-1">
                                                <span className={`text-[10px] md:text-xs font-semibold ${isFilled ? 'text-gray-900' : 'text-gray-300'}`}>{item.day}</span>
                                                <span className={`text-[8px] md:text-[9px] uppercase ${isFilled ? 'text-gray-400' : 'text-gray-300'}`}>{item.week}</span>
                                            </div>
                                            {isFilled && (
                                                <MoreHorizontal size={12} className="text-gray-300 hidden md:block opacity-0 group-hover:opacity-100 cursor-pointer hover:text-gray-600 transition-opacity" />
                                            )}
                                        </div>
                                        
                                        {isFilled && (
                                            <>
                                                <div className="flex-1">
                                                    <p className="text-[9px] md:text-[10px] font-medium text-gray-700 leading-snug line-clamp-3">
                                                        {item.title}
                                                    </p>
                                                </div>

                                                <div className="mt-1 md:mt-2">
                                                    <span className="inline-flex items-center px-1 md:px-1.5 py-0.5 rounded text-[7px] md:text-[8px] font-medium bg-gray-200/50 text-gray-500 border border-gray-200">
                                                        {item.status}
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                         </div>

                        {/* Success Overlay */}
                        <div 
                          className={`absolute inset-0 z-20 bg-white/60 backdrop-blur-[2px] flex items-center justify-center transition-all duration-500 ${
                            showSuccess ? 'opacity-100' : 'opacity-0 pointer-events-none'
                          }`}
                        >
                            <div className={`bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-green-100 flex flex-col items-center transform transition-all duration-500 ${showSuccess ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'}`}>
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600 animate-in zoom-in spin-in-12 duration-500">
                                   <CheckCircle2 size={24} className="md:w-8 md:h-8" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Content Plan Ready</h3>
                                <p className="text-sm md:text-base text-gray-500 font-medium">Month scheduled in seconds</p>
                            </div>
                        </div>

                    </div>
                </div>
             </div>
          </BrowserFrame>
          
          {/* Floating Data Points - Hidden on Mobile to reduce clutter */}
          <div className="absolute -left-8 lg:-left-20 top-64 bg-white p-3 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 hidden lg:flex items-center gap-3 animate-bounce [animation-duration:6s] [animation-delay:1s] z-30">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                <FileText className="text-brand-orange" size={20} />
            </div>
            <div>
                <div className="text-[10px] font-medium text-gray-500 uppercase tracking-wide">Articles Generated</div>
                <div className="text-lg font-bold text-gray-900 transition-all duration-100 min-w-[30px]">{articlesGenerated}</div>
            </div>
          </div>
          
          <div className="absolute -right-4 md:-right-12 bottom-20 bg-white p-4 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 hidden lg:flex items-center gap-4 animate-bounce [animation-duration:4s] z-30">
            <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                <TrendingUp className="text-green-600" size={24} />
            </div>
            <div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">Traffic Growth</div>
                <div className="text-xl font-bold text-gray-900">+124% <span className="text-sm font-normal text-gray-400">vs last mo</span></div>
            </div>
          </div>

        </div>

        {/* Trust Stats - Optimized Grid for Mobile */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center border-t border-brand-gray/10 pt-8 md:pt-10 w-full max-w-5xl">
            <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-brand-black">10k+</div>
                <div className="text-xs md:text-sm text-brand-gray mt-1">Articles Generated</div>
            </div>
            <div>
                 <div className="text-2xl md:text-3xl font-serif font-bold text-brand-black">150+</div>
                 <div className="text-xs md:text-sm text-brand-gray mt-1">Languages</div>
            </div>
            <div>
                 <div className="text-2xl md:text-3xl font-serif font-bold text-brand-black">3 min</div>
                 <div className="text-xs md:text-sm text-brand-gray mt-1">Setup Time</div>
            </div>
             <div>
                 <div className="text-2xl md:text-3xl font-serif font-bold text-brand-black">$99</div>
                 <div className="text-xs md:text-sm text-brand-gray mt-1">Starts at</div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;