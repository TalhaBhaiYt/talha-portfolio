import React from 'react';
import { motion } from 'motion/react';
import { Gamepad2, FileCode, Sparkles, MoveRight, Layers, Compass, Code2 } from 'lucide-react';
import { ThemeMode } from '../types';

interface AboutProps {
  themeMode: ThemeMode;
}

export default function About({ themeMode }: AboutProps) {
  
  const cards = [
    {
      title: 'Minecraft Systems',
      desc: 'Forging custom Datapacks alongside mechanical resource packs. I create RPG magic systems, custom items with cooldown loops, and optimize block ticking latency.',
      icon: Gamepad2,
      color: 'from-blue-500/20 to-cyan-500/10',
      badge: 'Java Edition',
      borderColor: 'border-blue-500/30'
    },
    {
      title: 'Python Applications',
      desc: 'Developing lightweight OS automation scripts, desktop helpers, multi-threaded algorithms, and fun desktop companions with Win32 GUI APIs.',
      icon: FileCode,
      color: 'from-purple-500/20 to-pink-500/10',
      badge: 'Core Developer',
      borderColor: 'border-purple-500/30'
    },
    {
      title: 'AI Implementations',
      desc: 'Deploying custom LLM integration workflows. I write prompt matrices, format code-generation datasets, and orchestrate automated system routines.',
      icon: Sparkles,
      color: 'from-cyan-500/20 to-teal-500/10',
      badge: 'Prompt Master',
      borderColor: 'border-cyan-500/30'
    },
    {
      title: 'Creative Systems Engineering',
      desc: 'Designing voxel models, custom GUI schemes, and interactive web views. Bridging raw console efficiency with accessible layout visualizers.',
      icon: Layers,
      color: 'from-yellow-500/20 to-amber-500/10',
      badge: 'Architect',
      borderColor: 'border-yellow-500/30'
    }
  ];

  return (
    <section
      id="about"
      className="relative py-28 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-blue-500 font-mono text-sm">
            <Compass className="w-4 h-4 text-cyan-400 rotate-45" />
            <span className={`${themeMode === 'creative' ? 'font-pixel text-xl text-yellow-400' : ''}`}>01 // WHO_IS_TALHA</span>
          </div>
          <h2
            id="about-title"
            className={`text-3xl md:text-5xl font-extrabold tracking-tight text-white ${
              themeMode === 'creative' ? 'font-pixel text-yellow-400' : 'font-display'
            }`}
          >
            Creative Software, Immersive Voxel Logic.
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Biography */}
          <div className="lg:col-span-5 space-y-6">
            <p
              id="about-bio-1"
              className={`text-slate-300 leading-relaxed ${
                themeMode === 'creative' ? 'font-pixel text-2xl leading-8' : 'font-sans text-base'
              }`}
            >
              I am a passionate young developer operating from Pakistan. I specialize in merging raw computational optimization with custom artistic systems. My design philosophy is built on speed, precision, and immersive interactions.
            </p>
            <p
              id="about-bio-2"
              className={`text-slate-400 leading-relaxed ${
                themeMode === 'creative' ? 'font-pixel text-2xl leading-8 animate-pulse' : 'font-sans text-base'
              }`}
            >
              Whether it is scripting complex Minecraft datapacks using raw command blocks and JSON layouts, or developing Python desktop companions that read host layouts and respond dynamically, I thrive on engineering unique digital tools from absolute scratch.
            </p>

            <p
              id="about-bio-3"
              className={`text-slate-400 leading-relaxed ${
                themeMode === 'creative' ? 'font-pixel text-2xl leading-8' : 'font-sans text-base'
              }`}
            >
              When I am not debugging loops or packaging custom resource packs, I explore agentic automation, AI context schemas, and build polished responsive user interfaces. 
            </p>

            {/* Quick Profile Specs Card */}
            <div
              id="bio-specifications"
              className={`${
                themeMode === 'creative'
                  ? 'minecraft-card p-4 text-left font-pixel text-xl'
                  : 'p-5 bg-white/[0.01] border border-white/5 rounded-2xl text-left'
              }`}
            >
              <div className="text-slate-500 text-xs font-mono mb-3 uppercase tracking-wider">SYSTEM_SPECS</div>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-blue-500 font-bold">📍</span>
                  <span><strong>Locality:</strong> Pakistan</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-500 font-bold">🎯</span>
                  <span><strong>Primary Target:</strong> Minecraft Datapacks & Python automation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-cyan-500 font-bold">⚡</span>
                  <span><strong>Skillset Priority:</strong> Maximum Performance & Creative Design</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Interactive Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  id={`about-card-${idx}`}
                  className={`group p-6 text-left relative transition-all duration-300 transform select-none ${
                    themeMode === 'creative'
                      ? 'minecraft-card hover:bg-slate-900 border-2 border-black hover:-translate-y-1'
                      : 'rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:-translate-y-1 hover:shadow-2xl'
                  }`}
                >
                  {/* Glowing background gradient in developer mode */}
                  {themeMode === 'developer' && (
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  )}

                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                      {/* Top Bar with Icon and Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`p-2 rounded-lg ${
                            themeMode === 'creative'
                              ? 'border-2 border-black bg-[#4a4a4a] text-yellow-400 shadow-[inset_1px_1px_0_#999]'
                              : 'bg-white/5 text-blue-400 group-hover:bg-blue-600/10 group-hover:text-blue-300 transition-colors'
                          }`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span
                          className={`text-[10px] uppercase tracking-wider font-mono px-2 py-0.5 rounded ${
                            themeMode === 'creative'
                              ? 'font-pixel text-[#55ff55]'
                              : 'bg-white/5 border border-white/10 text-slate-400'
                          }`}
                        >
                          {card.badge}
                        </span>
                      </div>

                      {/* Title & Desc */}
                      <h3
                        className={`text-lg font-bold mb-2 text-white ${
                          themeMode === 'creative' ? 'font-pixel text-2xl text-yellow-400' : 'font-display'
                        }`}
                      >
                        {card.title}
                      </h3>
                      <p
                        className={`text-slate-400 leading-relaxed text-sm ${
                          themeMode === 'creative' ? 'font-pixel text-lg leading-6' : 'font-sans'
                        }`}
                      >
                        {card.desc}
                      </p>
                    </div>

                    {/* Footer decoration */}
                    {themeMode === 'developer' && (
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity pt-4">
                        <span>See projects</span>
                        <Code2 className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
