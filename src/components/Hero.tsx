import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ArrowRight, Download, Gamepad2, Sparkles, Terminal } from 'lucide-react';
import { ThemeMode } from '../types';
import { HERO_TITLES } from '../data';

interface HeroProps {
  themeMode: ThemeMode;
  onNavigateToProjects: () => void;
  onNavigateToContact: () => void;
  onOpenResume: () => void;
}

export default function Hero({ themeMode, onNavigateToProjects, onNavigateToContact, onOpenResume }: HeroProps) {
  const [titleIdx, setTitleIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = HERO_TITLES[titleIdx];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && typedText === currentWord) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setTitleIdx((prev) => (prev + 1) % HERO_TITLES.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentWord.substring(0, typedText.length - 1)
            : currentWord.substring(0, typedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, titleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden md:px-8 select-none z-10"
    >
      {/* Decorative Gradient Overlay in Developer Mode */}
      {themeMode === 'developer' && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
          <div className="absolute top-[10%] right-[5%] w-96 h-96 bg-blue-500 rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-purple-500 rounded-full blur-[150px]" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Copy Deck */}
        <div className="lg:col-span-7 text-left space-y-6 relative z-20">
          
          {/* Accent Badge */}
          {themeMode === 'creative' ? (
            <div className="inline-block px-3 py-1 bg-yellow-500/20 border-2 border-yellow-400/50 rounded-none font-pixel text-yellow-400 text-lg uppercase tracking-wider animate-bounce">
              ⚡ Creative Survival Mode
            </div>
          ) : (
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full font-sans text-xs font-semibold text-blue-400 tracking-wider">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>OPEN FOR COLLABORATION • PAKISTAN</span>
            </div>
          )}

          {/* Primary Moniker Callout */}
          <div className="space-y-3">
            <h1
              id="hero-greeting"
              className={`text-slate-400 font-medium ${
                themeMode === 'creative' ? 'font-pixel text-3xl' : 'font-sans text-lg tracking-widest uppercase'
              }`}
            >
              👋 Hello World, I am
            </h1>
            
            <h2
              id="hero-name"
              className={`text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r ${
                themeMode === 'creative'
                  ? 'font-pixel text-yellow-400 font-black drop-shadow-[4px_4px_0px_#111111]'
                  : 'font-display from-white via-slate-100 to-slate-400'
              }`}
              style={{
                backgroundClip: themeMode === 'creative' ? 'none' : 'text',
                color: themeMode === 'creative' ? '#facc15' : 'transparent',
              }}
            >
              TALHA
            </h2>
          </div>

          {/* Shifting subtitle with custom cursor */}
          <div className="h-10 sm:h-12 flex items-center">
            <span
              id="hero-typing-pre"
              className={`text-xl sm:text-2xl mr-2 text-slate-300 ${
                themeMode === 'creative' ? 'font-pixel text-3xl' : 'font-sans'
              }`}
            >
              Specializing in:{' '}
            </span>
            <span
              id="hero-typing"
              className={`text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${
                themeMode === 'creative'
                  ? 'font-pixel text-3xl from-cyan-400 to-emerald-400'
                  : 'font-mono from-blue-400 via-purple-300 to-cyan-400'
              }`}
              style={{
                backgroundClip: 'text',
              }}
            >
              {typedText}
            </span>
            {/* Blinking Cursor */}
            <motion.span
              className={`h-6 w-[3px] bg-cyan-400 ml-1 inline-block ${
                themeMode === 'creative' ? 'h-8 w-2 bg-yellow-400' : ''
              }`}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            />
          </div>

          {/* Detailed Paragraph summary */}
          <p
            id="hero-description"
            className={`text-slate-400 leading-relaxed max-w-xl ${
              themeMode === 'creative' ? 'font-pixel text-xl leading-8' : 'font-sans text-base sm:text-lg'
            }`}
          >
            I build highly optimized, custom Minecraft experiences (datapacks, client tweaks), lightweight automation applications using Python, and deploy modern AI interfaces. Crafting software with a commitment to mathematical optimization and visual polish.
          </p>

          {/* Action Callout buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {themeMode === 'creative' ? (
              <>
                <button
                  id="hero-projects-btn-mine"
                  onClick={onNavigateToProjects}
                  className="minecraft-button px-6 py-3 text-lg flex items-center gap-2 select-none"
                >
                  <Gamepad2 className="w-5 h-5" />
                  <span>Explore Datapacks</span>
                </button>
                <button
                  id="hero-contact-btn-mine"
                  onClick={onNavigateToContact}
                  className="minecraft-button px-6 py-3 text-lg flex items-center gap-2 bg-[#be185d] border-pink-500 shadow-[inset_-3px_-3px_0_#9d174d,inset_3px_3px_0_#ec4899] hover:bg-[#db2777]"
                >
                  <Sparkles className="w-5 h-5 animate-spin" />
                  <span>Hire Me</span>
                </button>
              </>
            ) : (
              <>
                <button
                  id="hero-projects-btn"
                  onClick={onNavigateToProjects}
                  className="group px-6 py-3.5 rounded-lg bg-blue-600 text-white font-medium text-sm flex items-center gap-2 shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all hover:scale-[1.02]"
                >
                  <span>View My Creations</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  id="hero-contact-btn"
                  onClick={onNavigateToContact}
                  className="px-6 py-3.5 rounded-lg bg-white/5 border border-white/10 text-slate-200 font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2"
                >
                  <Terminal className="w-4 h-4 text-purple-400" />
                  <span>Access Outbox Terminal</span>
                </button>
              </>
            )}

            {/* Resume button */}
            <a
              id="hero-resume"
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                onOpenResume();
              }}
              className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white transition-colors py-2 px-1 ${
                themeMode === 'creative' ? 'font-pixel text-lg text-yellow-400 hover:text-white' : ''
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Get Resume.PDF</span>
            </a>
          </div>

          {/* Quick Technical stats bar */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/5 max-w-md">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border border-dark-bg bg-blue-600/30 flex items-center justify-center text-xs text-blue-300 font-bold">MC</div>
              <div className="w-8 h-8 rounded-full border border-dark-bg bg-purple-600/30 flex items-center justify-center text-xs text-purple-300 font-bold">PY</div>
              <div className="w-8 h-8 rounded-full border border-dark-bg bg-cyan-600/30 flex items-center justify-center text-xs text-cyan-300 font-bold">AI</div>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Trusted by Minecraft realms, Python builders, and localized scripts.
            </div>
          </div>
        </div>

        {/* Right Side: Portrait Avatar Render */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end z-10 select-none">
          
          {/* Outer glowing frame */}
          <div
            id="avatar-frame-decoration"
            className={`relative rounded-3xl shrink-0 ${
              themeMode === 'creative'
                ? 'p-2 bg-[#2d2d2d] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.5)]'
                : 'p-3 bg-white/[0.02] border border-white/10 rounded-3xl shadow-2xl backdrop-blur-md animate-float'
            }`}
          >
            {/* Custom glowing rings behind avatar */}
            {themeMode === 'developer' && (
              <>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-3xl opacity-30 blur-xl animate-pulse" />
                {/* Tech grid overlay */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-dashed border-white/10 rounded-2xl pointer-events-none" />
                <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-cyan-400/80" />
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-purple-400/80" />
              </>
            )}

            {themeMode === 'creative' && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#181818] border-2 border-black font-pixel text-xs text-green-400">
                LVL: 99 DEVELOPER
              </div>
            )}

            {/* Image container */}
            <div
              className={`overflow-hidden flex items-center justify-center select-none ${
                themeMode === 'creative'
                  ? 'border-4 border-black w-72 h-72'
                  : 'rounded-2xl w-72 h-72 sm:w-80 sm:h-80 relative bg-dark-bg'
              }`}
            >
              {/* Fallback pattern in case image gets restricted */}
              <img
                id="developer-avatar-img"
                src="/talha-avatar.jpg"
                alt="Talha - High Tech Developer Avatar"
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* Developer stats cards overlays */}
              {themeMode === 'developer' && (
                <div className="absolute bottom-4 left-4 right-4 py-2 px-3 bg-[#030712]/90 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-between text-left">
                  <div>
                    <div className="text-[10px] text-slate-500 font-mono">LATEST_DEPLOY</div>
                    <div className="text-xs font-bold text-white tracking-wide">MYTHBOUND_M4.ZIP</div>
                  </div>
                  <div className="flex items-center gap-1 bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping inline-block" />
                    LIVE
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
