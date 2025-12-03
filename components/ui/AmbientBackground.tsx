import React from 'react';

const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-brand-linen">
       {/* Animated Blobs */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Top Left - Salmon - Main Hero Blob */}
          <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] md:w-[800px] md:h-[800px] rounded-full bg-brand-salmon/20 blur-[80px] md:blur-[120px] animate-blob mix-blend-multiply"></div>
          
          {/* Top Right - Orange - Main Hero Blob */}
          <div className="absolute top-[10%] right-[-20%] w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] rounded-full bg-brand-orange/15 blur-[80px] md:blur-[100px] animate-blob mix-blend-multiply" style={{ animationDelay: '2s' }}></div>
          
          {/* Bottom Left - Purple - Adds depth to lower sections */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] md:w-[600px] md:h-[600px] rounded-full bg-purple-200/30 blur-[80px] md:blur-[100px] animate-blob mix-blend-multiply" style={{ animationDelay: '4s' }}></div>

           {/* Center Floating Blob */}
           <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] md:w-[400px] md:h-[400px] rounded-full bg-yellow-100/40 blur-[60px] md:blur-[80px] animate-blob mix-blend-multiply" style={{ animationDelay: '3s' }}></div>
       </div>

       {/* Subtle Grain Texture Overlay for 'Paper' feel */}
       <div className="absolute inset-0 opacity-[0.25] mix-blend-soft-light" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};

export default AmbientBackground;