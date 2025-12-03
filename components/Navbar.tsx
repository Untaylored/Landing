import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'h-16 md:h-20 bg-brand-linen/90 backdrop-blur-md border-b border-gray-200/50' 
          : 'h-20 md:h-24 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 relative z-50">
          <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">
            F
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl leading-none text-brand-black">Fonzy</span>
            <span className="text-[10px] uppercase tracking-wider text-brand-gray font-medium">Traffic Autopilot</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-brand-gray hover:text-brand-orange transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-brand-black hover:text-brand-orange transition-colors">
            Login
          </a>
          <Button variant="primary" size="sm">
            Join with Google
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden relative z-50">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-brand-black p-2 -mr-2 active:bg-gray-100 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-brand-linen/95 backdrop-blur-xl z-40 flex flex-col justify-center px-6 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-2xl font-serif font-medium text-brand-black py-2 active:text-brand-orange active:scale-95 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="w-12 h-px bg-gray-300 mx-auto my-4"></div>
          <a href="#" className="text-xl font-medium text-brand-gray py-2">Login</a>
          <Button 
            fullWidth 
            size="lg" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4"
          >
            Join with Google
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;