import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Terminal, Sparkles, Atom, ChevronRight, BarChart2 } from 'lucide-react';
import { ThemeMode, Skill } from '../types';
import { SKILLS } from '../data';

interface SkillsProps {
  themeMode: ThemeMode;
}

export default function Skills({ themeMode }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Minecraft' | 'Python' | 'AI Tools' | 'Web'>('All');

  const categories: Array<'All' | 'Minecraft' | 'Python' | 'AI Tools' | 'Web'> = [
    'All',
    'Minecraft',
    'Python',
    'AI Tools',
    'Web'
  ];

  const filteredSkills = SKILLS.filter(
    (skill) => selectedCategory === 'All' || skill.category === selectedCategory
  );

  return (
    <section
      id="skills"
      className="relative py-28 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-blue-500 font-mono text-sm">
            <BarChart2 className="w-4 h-4 text-cyan-400" />
            <span className={`${themeMode === 'creative' ? 'font-pixel text-xl text-yellow-400' : ''}`}>02 // TECHNICAL_SKILLS</span>
          </div>
          <h2
            id="skills-title"
            className={`text-3xl md:text-5xl font-extrabold tracking-tight text-white ${
              themeMode === 'creative' ? 'font-pixel text-yellow-400' : 'font-display'
            }`}
          >
            Skill Inventory & Core Intelligence
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded" />
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skill-cat-btn-${cat.toLowerCase().replace(' ', '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-sm font-medium transition-all select-none ${
                themeMode === 'creative'
                  ? `minecraft-button px-5 py-2.5 text-lg ${
                      selectedCategory === cat
                        ? 'bg-yellow-400 text-black border-yellow-300 shadow-[inset_-3px_-3px_0_#b45309]'
                        : ''
                    }`
                  : `rounded-lg border ${
                      selectedCategory === cat
                        ? 'bg-blue-600 border-blue-500 text-white shadow-[0_2px_12px_rgba(59,130,246,0.35)] font-semibold'
                        : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                    }`
              }`}
            >
              {cat === 'All' && '📦 '}
              {cat === 'Minecraft' && '🎮 '}
              {cat === 'Python' && '💻 '}
              {cat === 'AI Tools' && '⚡ '}
              {cat === 'Web' && '🌐 '}
              {cat}
            </button>
          ))}
        </div>

        {/* Dual Mode Skill Deck Layout */}
        <div className="relative">
          {themeMode === 'creative' ? (
            /* Minecraft Vibe XP Slots & Chest Interface */
            <div
              id="minecraft-chest-dashboard"
              className="minecraft-border p-6 md:p-8 rounded-none max-w-4xl mx-auto text-left relative overflow-hidden"
            >
              <div className="absolute top-2 right-4 text-slate-500 font-pixel text-lg">
                CHEST_INVENTORY
              </div>
              <div className="font-pixel text-2xl text-slate-300 mb-6 flex items-center gap-2 pb-2 border-b-2 border-[#1a1a1a]">
                <span>💎 Hotbar Inventory Slots (Level Multipliers)</span>
              </div>

              {/* Grid Layout of active items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredSkills.map((skill, index) => (
                  <div
                    key={index}
                    id={`mine-slot-${index}`}
                    className="minecraft-card p-4 border-2 border-dashed border-[#444] bg-[#1a1a1a] flex flex-col justify-between hover:border-yellow-400 transition-colors group relative"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* Interactive Pixel Box */}
                        <div className="w-10 h-10 border-2 border-[#555] bg-[#333] shrink-0 flex items-center justify-center font-pixel text-yellow-400 text-2xl group-hover:bg-[#444]">
                          {skill.category === 'Minecraft' && '⚔️'}
                          {skill.category === 'Python' && '🐍'}
                          {skill.category === 'AI Tools' && '🔮'}
                          {skill.category === 'Web' && '🖼️'}
                          {skill.category === 'Other' && '⚙️'}
                        </div>
                        <div>
                          <div className="font-pixel text-xl text-yellow-400 tracking-wide group-hover:text-yellow-300">
                            {skill.name}
                          </div>
                          <div className="font-pixel text-md text-[#55ff55]">
                            {skill.category.toUpperCase()}
                          </div>
                        </div>
                      </div>
                      <div className="font-pixel text-xl text-cyan-400 bg-cyan-950/20 py-0.5 px-2 border border-cyan-800/20">
                        XP: {skill.level}
                      </div>
                    </div>

                    {/* XP Progress Bar indicator */}
                    <div className="mt-4">
                      <div className="flex justify-between font-pixel text-sm text-slate-400 mb-1">
                        <span>XP PROGRESS</span>
                        <span>{skill.level}/100</span>
                      </div>
                      <div className="h-4 bg-black border border-[#444] p-0.5 relative">
                        <div
                          className="h-full bg-gradient-to-r from-[#55ff55] to-[#22c55e] border-r border-white/20"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Developer Mode - Elegant Analytical Grid */
            <div
              id="developer-analytical-dashboard"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
            >
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  id={`skill-card-${index}`}
                  className="group relative p-5 bg-white/[0.015] border border-white/5 rounded-2xl flex flex-col justify-between hover:-translate-y-1 hover:bg-white/[0.03] transition-all duration-300 shadow-md"
                >
                  {/* Subtle hover gradient orb */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 w-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {skill.category === 'Minecraft' && <Layers className="w-4 h-4" />}
                        {skill.category === 'Python' && <Terminal className="w-4 h-4" />}
                        {skill.category === 'AI Tools' && <Sparkles className="w-4 h-4" />}
                        {skill.category === 'Web' && <Atom className="w-4 h-4" />}
                        {skill.category === 'Other' && <ChevronRight className="w-4 h-4" />}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>

                    {/* Skill Moniker */}
                    <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors font-sans mb-3">
                      {skill.name}
                    </h3>

                    {/* Value Dial */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-500">OPERATIONAL_BOUNDS</span>
                        <span className="text-blue-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-950/80 rounded-full overflow-hidden border border-white/5">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                          initial={{ width: '0%' }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
