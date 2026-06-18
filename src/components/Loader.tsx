import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SPLASH_TEXTS } from '../data';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [splash, setSplash] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Select dynamic splash text
    const randomIndex = Math.floor(Math.random() * SPLASH_TEXTS.length);
    setSplash(SPLASH_TEXTS[randomIndex]);

    // Fast, responsive loading ticker
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDone(true);
          setTimeout(() => {
            onComplete();
          }, 400); // Small delay for smooth exit
          return 100;
        }
        // Random incremental hops
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return Math.min(next, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 bg-[#02050d] z-50 flex flex-col items-center justify-center font-sans select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Neon Grid Overlay Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

          <div className="relative text-center max-w-sm px-6">
            {/* Ambient Logo glow */}
            <div className="absolute -inset-10 bg-blue-500/10 rounded-full blur-3xl opacity-60 animate-pulse" />

            {/* Main Animated Moniker */}
            <motion.h1
              id="loader-title"
              className="text-5xl md:text-6xl font-bold tracking-[0.25em] text-white font-display uppercase font-extrabold relative z-10"
              initial={{ letterSpacing: '0.4em', opacity: 0 }}
              animate={{ letterSpacing: '0.25em', opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              TALHA
              <span className="text-cyan-400 absolute">.</span>
            </motion.h1>

            {/* Glowing horizontal line */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto mt-4 mb-2 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.5)]" />

            {/* Interactive Progress % */}
            <div className="font-mono text-xs text-slate-400 font-medium tracking-widest mt-2">
              SYSTEM_BOOTING: <span id="boot-percentage" className="font-semibold text-cyan-400">{progress}%</span>
            </div>

            {/* Progress Bar Track */}
            <div className="w-48 h-[3px] bg-slate-900 border border-slate-800/80 rounded-full overflow-hidden mx-auto mt-4">
              <motion.div
                id="boot-progress-bar"
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 shadow-[0_0_4px_rgba(6,182,212,0.3)]"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            {/* Bouncy Minecraft-inspired yellow splash text! */}
            <AnimatePresence>
              {progress > 5 && (
                <motion.div
                  id="loader-splash-text"
                  className="font-pixel text-xl md:text-2xl text-yellow-400 text-shadow-md origin-center select-none tracking-wide absolute left-0 right-0 top-full mt-8"
                  initial={{ scale: 0.7, rotate: -2, opacity: 0 }}
                  animate={{ 
                    scale: [0.95, 1.05, 0.95],
                    rotate: [-3, -4, -3],
                    opacity: 1 
                  }}
                  transition={{
                    scale: { repeat: Infinity, duration: 0.6, ease: 'easeInOut' },
                    rotate: { duration: 0.1 },
                    opacity: { duration: 0.3 }
                  }}
                  style={{ textShadow: '2px 2px 0px #000' }}
                >
                  {splash}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
