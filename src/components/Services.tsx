import React from 'react';
import { motion } from 'motion/react';
import { Gamepad, FileCode2, Sparkles, Workflow, Check, Eye } from 'lucide-react';
import { ThemeMode, Service } from '../types';
import { SERVICES } from '../data';

interface ServicesProps {
  themeMode: ThemeMode;
}

export default function Services({ themeMode }: ServicesProps) {
  return (
    <section
      id="services"
      className="relative py-28 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-blue-500 font-mono text-sm">
            <Eye className="w-4 h-4 text-cyan-400" />
            <span className={`${themeMode === 'creative' ? 'font-pixel text-xl text-yellow-400' : ''}`}>05 // COMMISSIONS_BOARD</span>
          </div>
          <h2
            id="services-title"
            className={`text-3xl md:text-5xl font-extrabold tracking-tight text-white ${
              themeMode === 'creative' ? 'font-pixel text-yellow-400' : 'font-display'
            }`}
          >
            Specialized Professional Services
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded" />
        </div>

        {/* Services Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((serv) => {
            return (
              <div
                key={serv.id}
                id={`service-card-${serv.id}`}
                className={`group p-6 text-left relative transition-all duration-300 transform select-none ${
                  themeMode === 'creative'
                    ? 'minecraft-card border-4 border-black hover:-translate-y-1'
                    : 'rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] hover:-translate-y-1 hover:shadow-xl hover:border-white/10'
                }`}
              >
                <div className="flex flex-col md:flex-row items-start gap-4 h-full justify-between">
                  {/* Left segment - Title and Icon */}
                  <div className="space-y-4 max-w-sm">
                    <div
                      className={`p-2.5 w-fit rounded-lg ${
                        themeMode === 'creative'
                          ? 'border border-black bg-[#4a4a4a] text-yellow-500'
                          : 'bg-blue-500/10 text-cyan-400'
                      }`}
                    >
                      {serv.iconName === 'Gamepad' && <Gamepad className="w-5 h-5" />}
                      {serv.iconName === 'FileCode2' && <FileCode2 className="w-5 h-5" />}
                      {serv.iconName === 'Sparkles' && <Sparkles className="w-5 h-5 animate-pulse" />}
                      {serv.iconName === 'Workflow' && <Workflow className="w-5 h-5" />}
                    </div>

                    <div>
                      <h3
                        className={`text-lg md:text-xl font-bold text-white mb-2 ${
                          themeMode === 'creative' ? 'font-pixel text-2xl text-yellow-400' : 'font-display'
                        }`}
                      >
                        {serv.title}
                      </h3>
                      <p
                        className={`text-slate-400 text-sm leading-relaxed ${
                          themeMode === 'creative' ? 'font-pixel text-lg leading-6' : 'font-sans'
                        }`}
                      >
                        {serv.description}
                      </p>
                    </div>
                  </div>

                  {/* Right segment - Feature Bulletins */}
                  <div
                    className={`w-full md:w-56 p-4 rounded-xl shrink-0 ${
                      themeMode === 'creative'
                        ? 'bg-black/30 border border-black rounded-none p-3 font-pixel text-lg'
                        : 'bg-[#030611]/80 border border-white/5 font-mono text-xs text-slate-300'
                    }`}
                  >
                    <div className="font-semibold text-slate-400 mb-3 uppercase tracking-wider text-[10px] pb-1 border-b border-white/5">
                      {themeMode === 'creative' ? '🛡️ Quest Objectives' : 'Scope list'}
                    </div>
                    <ul className="space-y-2">
                      {serv.features.map((feat, fidx) => (
                        <li key={fidx} id={`serv-${serv.id}-feat-${fidx}`} className="flex items-start gap-2">
                          <Check className="w-4.5 h-4.5 text-green-500 shrink-0 mt-0.5" />
                          <span className={themeMode === 'creative' ? 'text-slate-200 leading-tight' : 'leading-relaxed'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
