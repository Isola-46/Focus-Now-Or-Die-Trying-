import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-white tracking-widest text-lg mb-1">A. T. ISOLA</p>
          <p className="text-neutral-600 text-sm">© {new Date().getFullYear()} — All Rights Reserved</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="text-neutral-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;