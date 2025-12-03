import React, { useState } from 'react';
import { DollarSign, Clock, Zap } from 'lucide-react';

const ROI: React.FC = () => {
  // State for interactive calculator
  const [articlesPerMonth, setArticlesPerMonth] = useState(15);
  const [writerCost, setWriterCost] = useState(250); // Cost per article

  // Constants
  const FONZY_COST = 99; // Flat monthly fee
  const AGENCY_MGMT_FEE = 500; // Flat monthly management fee/tools
  
  // Calculations
  const traditionalCost = (articlesPerMonth * writerCost) + AGENCY_MGMT_FEE;
  const fonzyCost = FONZY_COST; // Flat rate regardless of volume (in this simplified view)
  const monthlySavings = traditionalCost - fonzyCost;
  const yearlySavings = monthlySavings * 12;
  const timeSaved = articlesPerMonth * 3; // Approx 3 hours per article manually

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Scale your content without scaling costs</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Traditional agencies bill by word count. Fonzy delivers revenue-focused traffic at a flat rate.
            </p>
        </div>

        <div className="bg-brand-linen rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Inputs */}
                <div className="space-y-10">
                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-lg font-bold text-brand-black">Articles per month</label>
                            <span className="text-2xl font-serif font-bold text-brand-orange">{articlesPerMonth}</span>
                        </div>
                        <input 
                            type="range" 
                            min="1" 
                            max="60" 
                            value={articlesPerMonth} 
                            onChange={(e) => setArticlesPerMonth(parseInt(e.target.value))}
                            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-orange hover:accent-orange-600 transition-all"
                        />
                        <div className="flex justify-between text-xs text-gray-400 mt-2">
                            <span>1 article</span>
                            <span>60 articles</span>
                        </div>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-lg font-bold text-brand-black">Current cost per article</label>
                            <span className="text-2xl font-serif font-bold text-gray-600">${writerCost}</span>
                        </div>
                        <input 
                            type="range" 
                            min="50" 
                            max="500" 
                            step="10"
                            value={writerCost} 
                            onChange={(e) => setWriterCost(parseInt(e.target.value))}
                            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-600 hover:accent-gray-800 transition-all"
                        />
                         <div className="flex justify-between text-xs text-gray-400 mt-2">
                            <span>Cheap ($50)</span>
                            <span>Premium ($500)</span>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-200/50">
                        <h4 className="font-serif font-bold text-gray-900 mb-4">Cost Breakdown</h4>
                        <div className="space-y-3">
                             <div className="flex justify-between text-gray-600">
                                <span>Freelance/Agency Cost</span>
                                <span>${(articlesPerMonth * writerCost).toLocaleString()}</span>
                             </div>
                             <div className="flex justify-between text-gray-600">
                                <span>Tools & Management</span>
                                <span>${AGENCY_MGMT_FEE}</span>
                             </div>
                             <div className="flex justify-between font-bold text-lg text-gray-900 pt-2 border-t border-gray-200">
                                <span>Traditional Total</span>
                                <span>${traditionalCost.toLocaleString()}/mo</span>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Results Card */}
                <div className="bg-brand-black rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden group">
                    {/* Background Effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-orange/30 transition-colors duration-500"></div>
                    
                    <div>
                        <div className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-2">You could save</div>
                        <div className="text-5xl md:text-7xl font-serif font-bold text-brand-orange mb-2">
                            ${yearlySavings.toLocaleString()}
                        </div>
                        <div className="text-gray-400">per year using Fonzy</div>
                    </div>

                    <div className="space-y-6 mt-12 relative z-10">
                        <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                                <DollarSign size={20} />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">${monthlySavings.toLocaleString()}</div>
                                <div className="text-xs text-gray-400">Monthly Savings</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/5">
                            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                                <Clock size={20} />
                            </div>
                            <div>
                                <div className="text-2xl font-bold">{timeSaved} hours</div>
                                <div className="text-xs text-gray-400">Time Saved / Month</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                         <div className="flex justify-between items-center">
                            <div>
                                <span className="text-gray-400 text-sm">Fonzy Cost</span>
                            </div>
                            <div className="text-3xl font-bold text-white">${FONZY_COST}<span className="text-sm font-normal text-gray-500">/mo</span></div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ROI;