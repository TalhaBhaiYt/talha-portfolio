import React from 'react';
import { ArrowUp, Github, Mail, ShieldCheck, Heart } from 'lucide-react';
import { ThemeMode } from '../types';

interface FooterProps {
  themeMode: ThemeMode;
}

export default function Footer({ themeMode }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="app-footer"
      className={`border-t relative z-10 py-12 select-none overflow-hidden ${
        themeMode === 'creative'
          ? 'bg-[#141414] border-t-4 border-[#333]'
          : 'bg-[#030611] border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Moniker info */}
        <div className="text-center md:text-left space-y-2">
          {themeMode === 'creative' ? (
            <h3 className="font-pixel text-yellow-400 text-2xl font-bold tracking-wider">TALHA</h3>
          ) : (
            <h3 className="font-display text-white text-lg font-bold tracking-widest">
              TALHA<span className="text-blue-500">.DEV</span>
            </h3>
          )}
          <p
            className={`text-slate-500 text-xs tracking-wide max-w-sm leading-relaxed ${
              themeMode === 'creative' ? 'font-pixel text-lg leading-6' : 'font-sans'
            }`}
          >
            Minecraft Developer • Python Programmer • AI Enthusiast
          </p>
        </div>

        {/* Back to top & credits */}
        <div className="flex flex-col items-center gap-4">
          {/* Back to Top */}
          <button
            id="back-to-top-btn"
            onClick={handleScrollToTop}
            title="Return to topmost coordinate"
            className={`p-2.5 transition-all select-none cursor-pointer flex items-center justify-center ${
              themeMode === 'creative'
                ? 'minecraft-button shadow-inner border border-black rounded-none p-2'
                : 'rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            <ArrowUp className="w-4 h-4 shrink-0" />
            {themeMode === 'creative' && <span className="ml-1 font-pixel text-base">SCROLL_UP</span>}
          </button>

          {/* Core Copy */}
          <div className="flex items-center gap-1.5 text-xs text-slate-600 font-mono">
            <span>© 2026 Talha. Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 animate-pulse fill-red-500" />
            <span>in Pakistan</span>
          </div>
        </div>

        {/* Direct Handles Tray */}
        <div className="flex items-center gap-4 select-none">
          {/* GitHub Icon */}
          <button
            onClick={() => alert('Coordinates: Github platform console loaded.')}
            title="Explore Github Workspace"
            className="text-slate-500 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5 shrink-0" />
          </button>

          {/* Email Icon */}
          <button
            onClick={() => {
              navigator.clipboard.writeText('talhabhaiyt0981@gmail.com');
              alert('Copied email coordinate to clipboard: talhabhaiyt0981@gmail.com');
            }}
            title="Copy Developer Email Address"
            className="text-slate-500 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5 shrink-0" />
          </button>

          {/* Encryption indicator */}
          <div className="flex items-center gap-1 text-[10px] font-mono text-slate-600 bg-white/[0.01] border border-white/5 py-1 px-2.5 rounded-full select-all">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
            <span>SSL_SECURE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
