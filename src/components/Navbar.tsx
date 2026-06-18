import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Code, Swords, Gamepad2, Award } from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  themeMode: ThemeMode;
  onThemeToggle: (mode: ThemeMode) => void;
  activeSection: string;
}

export default function Navbar({ themeMode, onThemeToggle, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubToggle = (nextMode: ThemeMode) => {
    onThemeToggle(nextMode);
    setShowToast(true);
    const soundTimeout = setTimeout(() => {
      setShowToast(false);
    }, 4500);
    return () => clearTimeout(soundTimeout);
  };

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky Top Header */}
      <header
        id="app-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? themeMode === 'creative'
              ? 'bg-[#181818] border-b-4 border-[#333333] py-2'
              : 'bg-dark-bg/85 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(3,7,18,0.4)]'
            : themeMode === 'creative'
            ? 'bg-transparent py-4'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Moniker */}
          <button
            id="nav-logo"
            onClick={() => handleScrollTo('home')}
            className="flex items-center space-x-2.5 text-left group"
          >
            {themeMode === 'creative' ? (
              <div className="flex items-center space-x-1 font-pixel text-xl tracking-wider select-none">
                <span className="text-yellow-400 bg-yellow-400/20 px-2 py-0.5 border border-yellow-400/30">TALHA</span>
                <span className="text-red-500 animate-pulse">■</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2 font-display text-lg tracking-widest font-bold select-none text-white">
                <Code className="w-5 h-5 text-blue-500 group-hover:rotate-12 transition-transform duration-300" />
                <span>
                  TALHA<span className="text-blue-500 font-extrabold">.DEV</span>
                </span>
              </div>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleScrollTo(item.id)}
                  className={`px-3.5 py-1.5 transition-all text-sm font-medium relative rounded-md select-none ${
                    themeMode === 'creative'
                      ? `font-pixel text-lg ${
                          isActive
                            ? 'text-yellow-400 font-bold border-b-2 border-yellow-400'
                            : 'text-slate-300 hover:text-white'
                        }`
                      : `font-sans ${
                          isActive
                            ? 'text-white font-semibold'
                            : 'text-slate-400 hover:text-slate-200'
                        }`
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && themeMode === 'developer' && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-md -z-0"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mode Switcher Action & Mobile Burg */}
          <div className="flex items-center space-x-3">
            {/* Theme Mode Toggle Pill */}
            <div
              id="theme-switcher-wrapper"
              className={`p-1 flex items-center rounded-lg ${
                themeMode === 'creative'
                  ? 'border-2 border-black bg-[#2d2d2d] shadow-inner'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <button
                id="switcher-btn-dev"
                onClick={() => handleSubToggle('developer')}
                title="Switch to Modern Developer Theme"
                className={`flex items-center space-x-1.5 px-2.5 py-1 rounded text-xs gap-1 font-medium select-none transition-all ${
                  themeMode === 'developer'
                    ? 'bg-blue-600 font-semibold text-white shadow-[0_2px_10px_rgba(59,130,246,0.3)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <Code className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Stripe Mode</span>
              </button>
              <button
                id="switcher-btn-creative"
                onClick={() => handleSubToggle('creative')}
                title="Switch to Minecraft Creative Theme"
                className={`flex items-center space-x-1.5 px-2.5 py-1 rounded text-xs gap-1 font-medium select-none transition-all ${
                  themeMode === 'creative'
                    ? 'bg-yellow-500 font-bold text-black border border-yellow-300 shadow-[0_0_8px_rgba(234,179,8,0.4)] font-pixel text-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                <Gamepad2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline font-pixel text-sm">Creative Mode</span>
              </button>
            </div>

            {/* Mobile Hamburger toggle */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                themeMode === 'creative'
                  ? 'border-2 border-black bg-[#4a4a4a] hover:bg-[#5a5a5a] text-yellow-400'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav-panel"
              className={`md:hidden absolute top-full left-0 right-0 border-t z-30 overflow-hidden shadow-2xl ${
                themeMode === 'creative'
                  ? 'bg-[#1c1c1c] border-b-4 border-[#333333] border-t-2 border-t-[#000]'
                  : 'bg-[#060b18]/95 backdrop-blur-xl border-white/5 border-b'
              }`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="px-5 py-6 space-y-2 flex flex-col justify-start">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-item-${item.id}`}
                      onClick={() => handleScrollTo(item.id)}
                      className={`text-left w-full py-2.5 px-4 rounded-md font-medium text-sm transition-all flex items-center justify-between ${
                        themeMode === 'creative'
                          ? `font-pixel text-xl ${
                              isActive
                                ? 'bg-yellow-400/10 text-yellow-400 border-l-4 border-yellow-400'
                                : 'text-slate-300 hover:bg-slate-800'
                            }`
                          : `font-sans ${
                              isActive
                                ? 'bg-blue-600/10 text-blue-400 border-l-2 border-blue-500'
                                : 'text-slate-400 hover:bg-white/5 hover:text-white'
                            }`
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Achievement Unlocked Popup Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            id="achievement-toast-container"
            className="fixed bottom-6 right-6 z-50 pointer-events-auto shadow-2xl"
            initial={{ transform: 'translateY(100px) scale(0.85)', opacity: 0 }}
            animate={{ transform: 'translateY(0px) scale(1)', opacity: 1 }}
            exit={{ transform: 'translateY(40px) scale(0.9)', opacity: 0 }}
            transition={{ type: 'spring', damping: 20, stiffness: 180 }}
          >
            {themeMode === 'creative' ? (
              <div className="w-80 p-1.5 bg-[#2c2c2c] border-[3px] border-[#000000] rounded-none shadow-[inset_-3px_-3px_0_#1a1a1a,inset_3px_3px_0_#8b8b8b] relative flex items-start gap-3 select-none">
                <div className="bg-[#5c5c5c] p-2 border-2 border-black shrink-0 relative shadow-[inset_1px_1px_0_#999,inset_-1px_-1px_0_#333]">
                  <Award className="w-6 h-6 text-yellow-400 animate-bounce" />
                </div>
                <div className="flex-1 font-pixel tracking-wide min-w-0 pr-2">
                  <div className="text-[#55ff55] uppercase text-sm tracking-widest flex items-center justify-between">
                    <span>Advancement Met!</span>
                  </div>
                  <div className="text-white text-base font-bold truncate">Entered Creative Mode 📦</div>
                  <div className="text-yellow-400 text-xs mt-0.5" style={{ textShadow: '1px 1px 0px #111' }}>
                    Welcome to Pixel Space!
                  </div>
                </div>
                <button
                  onClick={() => setShowToast(false)}
                  className="absolute top-1 right-2 font-pixel text-[#aaa] hover:text-white text-sm"
                >
                  [x]
                </button>
              </div>
            ) : (
              <div className="w-80 p-4 bg-[#0a1120]/95 backdrop-blur-md border border-blue-500/30 rounded-xl relative flex items-start gap-4 select-none">
                <div className="bg-blue-600/10 p-2.5 rounded-lg border border-blue-500/20 shrink-0 text-blue-400 animate-pulse">
                  <Code className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0 pr-3 font-sans">
                  <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Advancement Unlocked</div>
                  <div className="text-sm font-semibold text-white truncate mt-0.5">Developer Environment Active</div>
                  <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Glossy glassmorphism & responsive high-contrast grid layouts mapped.
                  </div>
                </div>
                <button
                  onClick={() => setShowToast(false)}
                  className="absolute top-2.5 right-3 text-slate-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
