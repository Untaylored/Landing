import React from 'react';

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const BrowserFrame: React.FC<BrowserFrameProps> = ({ children, className = '', title = 'Fonzy Dashboard' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden ${className}`}>
      {/* Browser Chrome */}
      <div className="bg-gray-50 border-b border-gray-100 px-4 py-3 flex items-center gap-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="flex-1 text-center">
            <div className="inline-flex items-center justify-center px-3 py-1 bg-white rounded-md border border-gray-200 text-[10px] text-gray-500 font-medium">
                {title}
            </div>
        </div>
        <div className="w-10"></div> {/* Spacer for alignment */}
      </div>
      {/* Content */}
      <div className="p-1">
        {children}
      </div>
    </div>
  );
};

export default BrowserFrame;