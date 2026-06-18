import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Gamepad2, Terminal, Sparkles, Trophy } from 'lucide-react';
import { ThemeMode } from '../types';
import { TIMELINE } from '../data';

interface JourneyProps {
  themeMode: ThemeMode;
}

export default function Journey({ themeMode }: JourneyProps) {
  return (
    <section
      id="journey"
      className="relative py-28 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-18 space-y-3">
          <div className="flex items-center space-x-2 text-blue-500 font-mono text-sm">
            <Trophy className="w-4 h-4 text-cyan-400 rotate-12" />
            <span className={`${themeMode === 'creative' ? 'font-pixel text-xl text-yellow-400' : ''}`}>04 // JOURNEY_CHRONICLES</span>
          </div>
          <h2
            id="journey-title"
            className={`text-3xl md:text-5xl font-extrabold tracking-tight text-white ${
              themeMode === 'creative' ? 'font-pixel text-yellow-400' : 'font-display'
            }`}
          >
            Engineering Timeline & Progression Quest
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded" />
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative max-w-4xl mx-auto pl-4 sm:pl-10 text-left">
          {/* Central Connecting Vertical Line */}
          <div className="absolute left-4 sm:left-10 top-2 bottom-2 w-1 bg-gradient-to-b from-blue-600 via-purple-500 to-cyan-500 rounded-full" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {TIMELINE.map((step, idx) => (
              <div
                key={idx}
                id={`journey-node-${idx}`}
                className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-10 select-none group"
              >
                {/* Glowing Circle Node over Central Line */}
                <div
                  className={`absolute -left-1 sm:-left-7 top-1 w-6 h-6 rounded-full flex items-center justify-center border-2 transition-all duration-300 z-10 ${
                    themeMode === 'creative'
                      ? 'border-black bg-[#2d2d2d] rounded-none shadow-[2px_2px_0_#111] group-hover:bg-[#444]'
                      : 'border-blue-500 bg-dark-bg group-hover:scale-110 shadow-[0_0_12px_rgba(59,130,246,0.3)]'
                  }`}
                >
                  {themeMode === 'creative' ? (
                    <span className="text-yellow-400 font-pixel text-xs font-bold">{idx + 1}</span>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  )}
                </div>

                {/* Left Part: Year Stamp */}
                <div className="sm:w-24 pt-1 shrink-0 ml-6 sm:ml-0 z-20">
                  <span
                    className={`inline-block py-1 px-3 text-xs font-mono font-bold border rounded-md tracking-wider ${
                      themeMode === 'creative'
                        ? 'font-pixel text-2xl text-yellow-500 bg-[#1a1a1a] border-black rounded-none shadow-[2px_2px_0_#111]'
                        : 'bg-blue-600/10 border-blue-500/20 text-blue-400 ring-2 ring-blue-500/5 shadow-inner'
                    }`}
                  >
                    {step.year}
                  </span>
                </div>

                {/* Right Part: Description Card */}
                <div
                  className={`flex-1 p-5 transition-all w-full ${
                    themeMode === 'creative'
                      ? 'minecraft-card border-2 border-black ml-4 sm:ml-0 mt-2 sm:mt-0'
                      : 'rounded-2xl bg-white/[0.015] border border-white/5 hover:bg-white/[0.025] hover:border-white/10 ml-4 sm:ml-0 mt-2 sm:mt-0'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`p-1.5 rounded ${
                        themeMode === 'creative'
                          ? 'border border-black bg-[#4a4a4a] text-[#55ff55]'
                          : 'bg-white/5 text-purple-400'
                      }`}
                    >
                      {step.iconType === 'minecraft' && <Gamepad2 className="w-4 h-4" />}
                      {step.iconType === 'python' && <Terminal className="w-4 h-4" />}
                      {step.iconType === 'ai' && <Sparkles className="w-4 h-4" />}
                    </div>
                    <h3
                      className={`text-lg font-bold text-white tracking-wide ${
                        themeMode === 'creative' ? 'font-pixel text-xl text-yellow-400' : 'font-display'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>

                  <p
                    className={`text-slate-400 text-sm leading-relaxed mb-4 ${
                      themeMode === 'creative' ? 'font-pixel text-lg leading-6' : 'font-sans'
                    }`}
                  >
                    {step.description}
                  </p>

                  {/* Skills/Tools list */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {step.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`text-[10px] uppercase font-mono px-2 py-0.5 ${
                          themeMode === 'creative'
                            ? 'font-pixel text-cyan-400 bg-black border border-black'
                            : 'bg-white/5 border border-white/5 text-slate-400 rounded-md'
                        }`}
                      >
                        ⚡ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
