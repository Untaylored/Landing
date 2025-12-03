import React from 'react';
import { X, Check, Clock, Zap, AlertCircle, TrendingUp, Users, Bot } from 'lucide-react';
import BrowserFrame from './ui/BrowserFrame';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">The Content Grind <span className="text-gray-300">vs</span> The Growth Engine</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            You can spend hours managing people and tools, or you can spend 3 minutes setting up Fonzy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* The Old Way */}
          <div className="relative p-8 rounded-3xl bg-gray-50 border border-gray-200 overflow-hidden group">
            <div className="absolute top-0 right-0 p-32 bg-gray-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 opacity-60">
                <div className="p-2 bg-gray-200 rounded-lg">
                    <Clock size={24} className="text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-700">The Manual Way</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-gray-600">
                    <X size={20} className="text-red-400 mt-1 shrink-0" />
                    <span>Juggling Ahrefs, SEMrush, and SurferSEO ($300+/mo)</span>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                    <X size={20} className="text-red-400 mt-1 shrink-0" />
                    <span>Hiring and chasing freelance writers ($0.10/word)</span>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                    <X size={20} className="text-red-400 mt-1 shrink-0" />
                    <span>Manually formatting and uploading to CMS</span>
                </div>
                <div className="flex items-start gap-3 text-gray-600">
                    <X size={20} className="text-red-400 mt-1 shrink-0" />
                    <span>Inconsistent publishing schedule</span>
                </div>
              </div>

              {/* Visual Chaos */}
              <div className="relative h-48 mt-8 opacity-70 grayscale transition-all duration-500 group-hover:grayscale-0">
                 <div className="absolute top-0 left-0 bg-white p-3 rounded-lg shadow-sm border border-gray-200 rotate-[-6deg] z-10 w-48">
                    <div className="flex items-center gap-2 mb-2">
                        <Users size={16} className="text-blue-500"/>
                        <span className="text-xs font-bold">Writer #3</span>
                    </div>
                    <div className="h-1.5 w-3/4 bg-gray-200 rounded mb-1"></div>
                    <div className="text-[10px] text-red-400 font-medium">Missed deadline...</div>
                 </div>
                 
                 <div className="absolute top-8 right-0 bg-white p-3 rounded-lg shadow-sm border border-gray-200 rotate-[3deg] z-20 w-48">
                    <div className="flex items-center gap-2 mb-2">
                        <AlertCircle size={16} className="text-yellow-500"/>
                        <span className="text-xs font-bold">Invoice #204</span>
                    </div>
                    <div className="text-lg font-bold text-gray-900">$450.00</div>
                    <div className="text-[10px] text-gray-400">Due today</div>
                 </div>

                 <div className="absolute bottom-0 left-10 bg-white p-3 rounded-lg shadow-sm border border-gray-200 rotate-[-2deg] z-30 w-52">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold">Spreadsheet</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                         <div className="h-4 bg-red-100 rounded"></div>
                         <div className="h-4 bg-gray-100 rounded"></div>
                         <div className="h-4 bg-gray-100 rounded"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* The Fonzy Way */}
          <div className="relative p-8 rounded-3xl bg-orange-50/50 border-2 border-brand-orange overflow-hidden">
             <div className="absolute top-0 right-0 p-32 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             
             <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-brand-orange text-white rounded-lg shadow-lg shadow-brand-orange/30">
                    <Bot size={24} />
                </div>
                <h3 className="text-xl font-bold text-brand-black">Fonzy Autopilot</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-gray-800 font-medium">
                    <div className="p-0.5 bg-green-100 rounded-full text-green-600 mt-0.5">
                        <Check size={14} />
                    </div>
                    <span>All-in-one strategy, writing, and publishing</span>
                </div>
                <div className="flex items-start gap-3 text-gray-800 font-medium">
                    <div className="p-0.5 bg-green-100 rounded-full text-green-600 mt-0.5">
                        <Check size={14} />
                    </div>
                    <span>Daily articles published automatically</span>
                </div>
                <div className="flex items-start gap-3 text-gray-800 font-medium">
                    <div className="p-0.5 bg-green-100 rounded-full text-green-600 mt-0.5">
                        <Check size={14} />
                    </div>
                    <span>Direct CMS integration (No copy-pasting)</span>
                </div>
                <div className="flex items-start gap-3 text-gray-800 font-medium">
                    <div className="p-0.5 bg-green-100 rounded-full text-green-600 mt-0.5">
                        <Check size={14} />
                    </div>
                    <span>Costs less than one freelance article</span>
                </div>
              </div>

               {/* Visual Order */}
               <div className="relative h-48 mt-8">
                  <BrowserFrame className="absolute inset-x-0 -bottom-10 shadow-xl" title="Fonzy Dashboard">
                    <div className="bg-white p-4 h-full">
                         <div className="flex items-center justify-between mb-4">
                            <div>
                                <div className="text-[10px] text-gray-400 uppercase">Traffic</div>
                                <div className="text-lg font-bold text-gray-900">+24% <span className="text-green-500 text-xs">▲</span></div>
                            </div>
                            <div className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded uppercase">
                                Active
                            </div>
                         </div>
                         <div className="space-y-2">
                             <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-100">
                                 <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                                 <div className="h-2 w-2/3 bg-gray-200 rounded"></div>
                             </div>
                             <div className="flex items-center gap-2 p-2 bg-gray-50 rounded border border-gray-100">
                                 <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                                 <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                             </div>
                         </div>
                    </div>
                  </BrowserFrame>
                  
                  <div className="absolute -top-4 right-4 bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-100 flex items-center gap-2 animate-bounce [animation-duration:3s]">
                     <Zap size={14} className="text-brand-orange fill-current" />
                     <span className="text-xs font-bold">Article Published</span>
                  </div>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;