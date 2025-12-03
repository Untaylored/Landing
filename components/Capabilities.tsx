import React from 'react';
import { 
  Network, 
  Search, 
  Target, 
  Zap, 
  FileText, 
  Image as ImageIcon, 
  Link as LinkIcon, 
  Mail, 
  Globe, 
  Layers, 
  ArrowUpRight
} from 'lucide-react';

const Capabilities: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0F1115] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4 md:mb-6">
            Everything else you need <br />
            <span className="text-brand-orange italic">to dominate.</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            We packed an entire SEO agency into a single dashboard. 
            No plugins. No headaches. Just growth.
          </p>
        </div>

        {/* Bento Grid - Mobile: Horizontal Scroll Snap | Desktop: Grid */}
        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory space-x-4 pb-8 md:pb-0 md:space-x-0 md:grid md:grid-cols-3 md:gap-4 md:auto-rows-[minmax(180px,auto)] no-scrollbar">
          
          {/* 1. Auto-Connect Integrations (Large) */}
          <div className="snap-center shrink-0 w-[85vw] md:w-auto md:col-span-2 md:row-span-2 group relative rounded-3xl p-6 md:p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden flex flex-col justify-between">
             <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                    <Network size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">Auto-Connect Integrations</h3>
                <p className="text-gray-400 text-sm md:text-base max-w-sm">Instantly connects with your website, Search Console, and image tools. No developer required.</p>
             </div>
             
             {/* Visual */}
             <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-50 md:opacity-100 mask-linear-gradient">
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Central Node */}
                    <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-brand-orange rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(242,85,51,0.4)]">
                        <span className="font-serif font-bold text-xl md:text-2xl">F</span>
                    </div>
                    {/* Orbiting Nodes */}
                    <div className="absolute w-32 h-32 md:w-48 md:h-48 border border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#21759B] rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-bold shadow-lg">WP</div>
                         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-[#95BF47] rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-bold shadow-lg">Shop</div>
                    </div>
                </div>
             </div>
          </div>

          {/* 2. Auto Keyword Finder */}
          <div className="snap-center shrink-0 w-[70vw] md:w-auto group relative rounded-3xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden">
             <div className="absolute top-4 right-4 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight size={20} />
             </div>
             <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4 text-green-400">
                <Search size={20} />
             </div>
             <h3 className="text-lg md:text-xl font-bold mb-2">Auto Keyword Finder</h3>
             <p className="text-sm text-gray-400">Finds your top keyword opportunities daily.</p>
             
             <div className="mt-6 space-y-2 opacity-50 group-hover:opacity-80 transition-opacity">
                <div className="flex items-center justify-between text-[10px] bg-white/5 p-2 rounded">
                    <span>best crm for startups</span>
                    <span className="text-green-400">High Vol</span>
                </div>
             </div>
          </div>

          {/* 3. One-Click Setup */}
          <div className="snap-center shrink-0 w-[70vw] md:w-auto group relative rounded-3xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden">
             <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 text-purple-400">
                <Zap size={20} />
             </div>
             <h3 className="text-lg md:text-xl font-bold mb-2">One-Click Setup</h3>
             <p className="text-sm text-gray-400">Fonzy analyzes your site and niche automatically.</p>
          </div>

          {/* 4. Buyer-Aware Content (Wide) */}
          <div className="snap-center shrink-0 w-[85vw] md:w-auto md:col-span-2 group relative rounded-3xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-center gap-6">
             <div className="flex-1">
                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
                    <Target size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">Buyer-Aware Content</h3>
                <p className="text-sm text-gray-400">Every article maps to buyer intent and links directly to your conversion pages.</p>
             </div>
             <div className="w-full md:w-1/3 h-24 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl flex items-center justify-center relative">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                    <div className="h-0.5 w-6 md:w-8 bg-gray-700"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <div className="h-0.5 w-6 md:w-8 bg-gray-700"></div>
                    <div className="w-4 h-4 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(242,85,51,0.5)]"></div>
                 </div>
                 <div className="absolute bottom-2 text-[10px] text-gray-500 font-mono uppercase">Funnel Mapping</div>
             </div>
          </div>

          {/* 5. Brand Authority (Tall) */}
          <div className="snap-center shrink-0 w-[70vw] md:w-auto md:row-span-2 group relative rounded-3xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden">
             <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4 text-pink-400">
                <Layers size={20} />
             </div>
             <h3 className="text-xl font-bold mb-2">Brand Authority</h3>
             <p className="text-sm text-gray-400 mb-6">Covers every angle of your niche with complete topic clusters.</p>
             
             <div className="relative h-48 w-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                        <div className="w-3 h-3 bg-white rounded-full absolute top-0 left-0 z-10"></div>
                        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                             <div key={i} className="absolute top-1.5 left-1.5 h-0.5 bg-gray-700 w-16 origin-left group-hover:w-20 transition-all duration-500" style={{ transform: `rotate(${deg}deg)` }}>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-500 rounded-full"></div>
                             </div>
                        ))}
                    </div>
                </div>
             </div>
          </div>

          {/* 6-9. Small Cards */}
          {[
              { title: 'Auto Image System', icon: ImageIcon, color: 'text-indigo-400', bg: 'bg-indigo-500/20' },
              { title: 'Research Briefs', icon: FileText, color: 'text-yellow-400', bg: 'bg-yellow-500/20' },
              { title: 'Link Optimizer', icon: LinkIcon, color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
              { title: 'Auto Reporting', icon: Mail, color: 'text-teal-400', bg: 'bg-teal-500/20' },
          ].map((item, i) => (
            <div key={i} className="snap-center shrink-0 w-[60vw] md:w-auto group relative rounded-3xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center mb-4 ${item.color}`}>
                    <item.icon size={20} />
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
            </div>
          ))}

          {/* 10. Supports 150+ Languages (Wide) */}
          <div className="snap-center shrink-0 w-[85vw] md:w-auto md:col-span-2 group relative rounded-3xl p-6 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 overflow-hidden flex items-center justify-between">
             <div className="max-w-[60%]">
                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center mb-4 text-red-400">
                    <Globe size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2">150+ Languages</h3>
                <p className="text-sm text-gray-400">Reach any audience instantly.</p>
             </div>
             <div className="text-right opacity-30 font-serif font-bold text-xl md:text-2xl space-y-1">
                 <div>Hello</div>
                 <div>Hola</div>
                 <div>Bonjour</div>
             </div>
          </div>
        </div>
        
        {/* Mobile Swipe Hint */}
        <div className="md:hidden flex justify-center mt-4">
             <span className="text-xs text-gray-500 font-medium tracking-wide">Swipe to explore →</span>
        </div>

      </div>
    </section>
  );
};

export default Capabilities;