import React from 'react';
import { CheckCircle2, Star, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Glow - Local emphasis */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section (Split Layout) */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
          <div className="max-w-2xl">
            <h6 className="text-sm font-bold tracking-widest text-brand-gray uppercase mb-4">Pricing</h6>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-brand-black leading-[1.1]">
              Simple Pricing, <br/>
              <span className="text-brand-orange">Massive ROI</span>
            </h2>
          </div>
          
          <div className="max-w-md lg:text-right">
            <p className="text-lg text-brand-gray mb-6 leading-relaxed">
              Fonzy automates your entire SEO lifecycle—from strategy to rankings to organic growth.
            </p>
            
            <div className="flex flex-col lg:items-end gap-2">
               <div className="flex items-center gap-1">
                 {[1,2,3,4,5].map(i => (
                   <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                 ))}
               </div>
               <div className="flex items-center gap-3">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-linen bg-gray-200 overflow-hidden">
                            <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" />
                        </div>
                    ))}
                 </div>
                 <span className="text-sm font-medium text-brand-black">+1k Articles Generated</span>
               </div>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl border border-gray-100 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Column: Price & CTA */}
            <div className="lg:w-1/3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100 pb-12 lg:pb-0 lg:pr-12">
               <div>
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-2xl font-serif font-bold text-brand-black">All in One</h3>
                    <span className="px-3 py-1 bg-gray-100 text-xs font-semibold uppercase tracking-wide text-gray-600 rounded-md">
                        For Founders & Entrepreneurs
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-7xl lg:text-8xl font-serif font-bold text-brand-black tracking-tight">$99</span>
                    <span className="text-xl text-gray-400 font-medium line-through decoration-gray-300 decoration-2">$200/monthly</span>
                  </div>
               </div>

               <div className="mt-10">
                  <Button fullWidth size="lg" className="h-16 text-lg group shadow-brand-orange/30 shadow-lg">
                     Start your 3-day trial
                     <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-6 font-medium">
                    Cancel anytime. No questions asked!
                  </p>
               </div>
            </div>

            {/* Right Column: Features */}
            <div className="lg:w-2/3">
                <h4 className="text-lg font-serif font-bold text-brand-black mb-8">What's included:</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {[
                        { text: "30 High-Ranking Articles written & published for you monthly" },
                        { text: "Autonomous Strategy & Keyword Research done for you" },
                        { text: "1-Click CMS Integration (WordPress, Shopify, Webflow & more)" },
                        { text: "Smart Internal Linking Architecture built automatically" },
                        { text: "Unlimited Team Members & Workspaces" },
                        { text: "Custom AI Images & Alt Tags generated in any style" },
                        { text: "Auto-Embed YouTube Videos for higher engagement" },
                        { text: "Global Reach: Content in 150+ Languages" },
                        { text: "Unlimited Rewrites & Optimization requests" },
                        { text: "Priority Support & Custom Feature access" },
                    ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <div className="mt-1 shrink-0">
                                <CheckCircle2 className="text-brand-orange fill-orange-50" size={20} />
                            </div>
                            <span className="text-gray-600 leading-snug">
                                {feature.text.split(' ').map((word, idx) => {
                                    // Bolding logic: Highlight the first few words or key metrics
                                    const isKeyPhrase = 
                                        (i === 0 && idx < 3) || // 30 High-Ranking Articles
                                        (i === 1 && idx < 2) || // Autonomous Strategy
                                        (i === 2 && idx < 3) || // 1-Click CMS Integration
                                        (i === 3 && idx < 3) || // Smart Internal Linking
                                        (i === 4 && idx < 3) || // Unlimited Team Members
                                        (i === 5 && idx < 3) || // Custom AI Images
                                        (i === 6 && idx < 3) || // Auto-Embed YouTube Videos
                                        (i === 7 && idx < 2) || // Global Reach
                                        (i === 8 && idx < 2) || // Unlimited Rewrites
                                        (i === 9 && idx < 2);   // Priority Support
                                        
                                    return (
                                        <span key={idx} className={isKeyPhrase ? "font-bold text-gray-900" : ""}>
                                            {word}{' '}
                                        </span>
                                    );
                                })}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;