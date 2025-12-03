import React, { useState, useEffect } from 'react';

const SocialProof: React.FC = () => {
  const [count, setCount] = useState(1243);

  useEffect(() => {
    // Simulate live ticking
    const interval = setInterval(() => {
        if (Math.random() > 0.6) {
            setCount(prev => prev + 1);
        }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 border-y border-brand-gray/5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <p className="text-sm font-semibold text-brand-gray/60 uppercase tracking-widest">
            Trusted by growing teams & agencies
            </p>
            <div className="hidden md:block w-px h-4 bg-gray-200"></div>
            <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-green-700 font-mono">
                    {count.toLocaleString()} articles published today
                </span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;