import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Users, GitCommit, Cpu, Award } from 'lucide-react';
import { ThemeMode, Stat } from '../types';
import { STATS } from '../data';

interface StatsProps {
  themeMode: ThemeMode;
}

export default function Stats({ themeMode }: StatsProps) {
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    // Dynamic counter animation
    const durations = STATS.map(() => 1500); // milliseconds
    const frames = 60;
    const intervals = STATS.map((stat, idx) => {
      const increment = stat.value / frames;
      let currentVal = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        currentVal += increment;
        if (step >= frames) {
          clearInterval(timer);
          setCounts((prev) => {
            const next = [...prev];
            next[idx] = stat.value;
            return next;
          });
        } else {
          setCounts((prev) => {
            const next = [...prev];
            next[idx] = Math.floor(currentVal);
            return next;
          });
        }
      }, durations[idx] / frames);

      return timer;
    });

    return () => {
      intervals.forEach((timer) => clearInterval(timer));
    };
  }, []);

  return (
    <section
      id="stats-section"
      className="relative py-20 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            return (
              <div
                key={idx}
                id={`stat-card-${idx}`}
                className={`group relative p-6 text-center select-none overflow-hidden transition-all duration-300 ${
                  themeMode === 'creative'
                    ? 'minecraft-card border-4 border-black hover:-translate-y-1'
                    : 'rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] hover:border-white/10 hover:-translate-y-1 hover:shadow-2xl'
                }`}
              >
                {/* Visual Glow behind statistics */}
                {themeMode === 'developer' && (
                  <div className="absolute -inset-10 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}

                {/* Stat value */}
                <div className="space-y-2">
                  <div className="flex justify-center mb-3">
                    <div
                      className={`p-2 rounded-lg ${
                        themeMode === 'creative'
                          ? 'border border-black bg-[#4a4a4a] text-yellow-500'
                          : 'bg-blue-500/10 text-cyan-400'
                      }`}
                    >
                      {stat.iconName === 'Users' && <Users className="w-5 h-5" />}
                      {stat.iconName === 'GitCommit' && <GitCommit className="w-5 h-5" />}
                      {stat.iconName === 'Cpu' && <Cpu className="w-5 h-5" />}
                      {stat.iconName === 'Award' && <Award className="w-5 h-5 animate-bounce" />}
                    </div>
                  </div>

                  <h3
                    id={`stat-numeric-${idx}`}
                    className={`text-3xl sm:text-4xl md:text-5xl font-black text-white ${
                      themeMode === 'creative'
                        ? 'font-pixel text-[#55ff55] drop-shadow-[2px_2px_0px_#000]'
                        : 'font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-400'
                    }`}
                    style={{
                      backgroundClip: themeMode === 'creative' ? 'none' : 'text',
                      color: themeMode === 'creative' ? '#55ff55' : 'transparent',
                    }}
                  >
                    {counts[idx]}
                    <span id={`stat-suffix-${idx}`} className="text-blue-500 font-bold ml-0.5">
                      {stat.suffix}
                    </span>
                  </h3>

                  <p
                    id={`stat-label-${idx}`}
                    className={`text-slate-400 uppercase tracking-wider text-xs ${
                      themeMode === 'creative' ? 'font-pixel text-lg text-slate-300 leading-tight mt-1' : 'font-mono'
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
