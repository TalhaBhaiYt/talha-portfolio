import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, Calendar, Star, ExternalLink, Github, Terminal } from 'lucide-react';
import { ThemeMode, Project } from '../types';
import { PROJECTS } from '../data';

interface ProjectsProps {
  themeMode: ThemeMode;
}

export default function Projects({ themeMode }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'minecraft' | 'python' | 'web'>('all');

  const filteredProjects = PROJECTS.filter(
    (p) => activeTab === 'all' || p.category === activeTab
  );

  return (
    <section
      id="projects"
      className="relative py-28 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-14 space-y-3">
          <div className="flex items-center space-x-2 text-blue-500 font-mono text-sm">
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span className={`${themeMode === 'creative' ? 'font-pixel text-xl text-yellow-400' : ''}`}>03 // CREATIONS_SHOWCASE</span>
          </div>
          <h2
            id="projects-title"
            className={`text-3xl md:text-5xl font-extrabold tracking-tight text-white ${
              themeMode === 'creative' ? 'font-pixel text-yellow-400' : 'font-display'
            }`}
          >
            Award-Winning Interactive Systems
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded" />
        </div>

        {/* Project Sorting Tabs */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {(['all', 'minecraft', 'python', 'web'] as const).map((tab) => (
            <button
              key={tab}
              id={`tab-project-${tab}`}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all select-none ${
                themeMode === 'creative'
                  ? `minecraft-button px-4 py-2 text-base ${activeTab === tab ? 'bg-yellow-400 text-black border-yellow-300 shadow-[inset_-2px_-2px_0_#9a3412]' : ''}`
                  : `rounded-md ${
                      activeTab === tab
                        ? 'bg-blue-600/10 border border-blue-500/30 text-blue-400 font-bold'
                        : 'bg-white/[0.01] border border-white/5 text-slate-400 hover:text-white hover:bg-white/5'
                    }`
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              id={`project-card-${proj.id}`}
              className={`group relative text-left select-none overflow-hidden h-full flex flex-col justify-between ${
                themeMode === 'creative'
                  ? 'minecraft-card border-4 border-black p-5'
                  : 'rounded-2xl bg-white/[0.015] border border-white/5 p-6 hover:shadow-3xl hover:-translate-y-1 hover:border-white/10 transition-all duration-300'
              }`}
            >
              {/* Vercel Glow Mesh for modern look */}
              {themeMode === 'developer' && (
                <div className="absolute inset-0 bg-radial-gradient(ellipse at top, rgba(59, 130, 246, 0.08) 0%, transparent 60%) opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              )}

              {/* Header Box */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Category badging */}
                  <div
                    className={`px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest ${
                      themeMode === 'creative'
                        ? 'font-pixel text-yellow-400 border border-yellow-400/30 bg-[#2d2d2d]'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/15'
                    }`}
                  >
                    {proj.category}
                  </div>
                  
                  {/* Star indicators */}
                  {proj.stars && (
                    <div className="flex items-center gap-1 text-yellow-500 text-xs">
                      <Star className="w-3.5 h-3.5 fill-yellow-500" />
                      <span className="font-mono font-semibold">{proj.stars}</span>
                    </div>
                  )}
                </div>

                <h3
                  className={`text-xl md:text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors ${
                    themeMode === 'creative' ? 'font-pixel text-yellow-400' : 'font-display'
                  }`}
                >
                  {proj.title}
                </h3>
                
                <p
                  className={`text-slate-400 text-sm leading-relaxed mb-6 ${
                    themeMode === 'creative' ? 'font-pixel text-lg leading-6' : 'font-sans'
                  }`}
                >
                  {proj.description}
                </p>

                {/* Badges container */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {proj.tech.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] px-2 py-0.5 font-mono ${
                        themeMode === 'creative'
                          ? 'font-pixel text-cyan-400 border border-[#333] bg-[#111]'
                          : 'bg-white/5 text-slate-300 rounded border border-white/5'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer action links tray */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5 relative z-10 select-none">
                {proj.githubUrl && (
                  <a
                    id={`project-git-${proj.id}`}
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Simulated Action: GitHub Code repository accessed: ${proj.githubUrl}`);
                    }}
                    className={`flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-wider ${
                      themeMode === 'creative' ? 'font-pixel text-lg text-yellow-400 hover:text-white' : ''
                    }`}
                  >
                    <Github className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Explore Code</span>
                  </a>
                )}
                {proj.demoUrl && (
                  <a
                    id={`project-demo-${proj.id}`}
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      alert(`Simulated Action: Custom systems simulation launched: ${proj.demoUrl}`);
                    }}
                    className={`flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors uppercase tracking-wider ${
                      themeMode === 'creative' ? 'font-pixel text-lg text-[#55ff55] hover:text-white' : ''
                    }`}
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Run Simulation</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
