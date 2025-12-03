import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Comparison from './components/Comparison';
import Features from './components/Features';
import Capabilities from './components/Capabilities';
import Results from './components/Results';
import Process from './components/Process';
import Pricing from './components/Pricing';
import ROI from './components/ROI';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AmbientBackground from './components/ui/AmbientBackground';

function App() {
  return (
    <div className="min-h-screen text-brand-black font-sans selection:bg-brand-orange/20 selection:text-brand-orange relative">
      <AmbientBackground />
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <SocialProof />
        <Process />
        <Comparison />
        <Features />
        <Capabilities />
        <ROI />
        <Results />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;