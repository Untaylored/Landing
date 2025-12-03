import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl mb-4">
              F
            </div>
            <p className="text-gray-500 text-sm mb-6">
              Daily SEO content that runs itself. Get found in Google and AI answers on autopilot.
            </p>
            <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"></div>
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"></div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-orange">Features</a></li>
              <li><a href="#" className="hover:text-brand-orange">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-orange">Results</a></li>
              <li><a href="#" className="hover:text-brand-orange">Showcase</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-orange">About</a></li>
              <li><a href="#" className="hover:text-brand-orange">Blog</a></li>
              <li><a href="#" className="hover:text-brand-orange">Careers</a></li>
              <li><a href="#" className="hover:text-brand-orange">Contact</a></li>
            </ul>
          </div>

           <div>
            <h4 className="font-serif font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-brand-orange">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-orange">Data Processing</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div>&copy; {new Date().getFullYear()} Fonzy AI Inc. All rights reserved.</div>
          <div className="mt-2 md:mt-0 flex gap-4">
            <span>Made with ♥️ for SEO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;