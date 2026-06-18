import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, FileText, Printer, Mail, Github, Download, Award, GraduationCap, Compass, Briefcase, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  themeMode: ThemeMode;
}

export default function ResumeModal({ isOpen, onClose, themeMode }: ResumeModalProps) {
  
  const handleDownloadPDF = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert("Please allow popups to print/download your resume as PDF.");
      return;
    }
    
    const resumeHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Talha_Resume</title>
        <style>
          body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            color: #111;
            line-height: 1.6;
            margin: 40px;
            font-size: 14px;
            background-color: #ffffff;
          }
          .title-area {
            text-align: center;
            margin-bottom: 20px;
          }
          h1 {
            font-size: 32px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin: 0 0 5px 0;
            font-weight: bold;
            color: #0f172a;
          }
          .subtitle {
            font-size: 13px;
            color: #475569;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
            font-weight: 600;
          }
          .contact-bar {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            font-size: 12px;
            color: #334155;
            padding: 10px 0;
            border-top: 1px solid #e2e8f0;
            border-bottom: 1px solid #e2e8f0;
            margin-bottom: 25px;
          }
          .contact-item {
            display: flex;
            align-items: center;
            gap: 4px;
          }
          h2 {
            font-size: 15px;
            text-transform: uppercase;
            border-bottom: 2px solid #0f172a;
            padding-bottom: 4px;
            margin-top: 25px;
            margin-bottom: 12px;
            color: #0f172a;
            letter-spacing: 0.75px;
            font-weight: bold;
          }
          p {
            margin: 0 0 10px 0;
            text-align: justify;
            color: #334155;
          }
          .section-block {
            margin-bottom: 15px;
          }
          .bullet-title {
            font-weight: bold;
            color: #0f172a;
          }
          .experience-header {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            color: #0f172a;
            margin-bottom: 5px;
          }
          .skills-grid {
            display: table;
            width: 100%;
            margin-bottom: 10px;
          }
          .skills-row {
            display: table-row;
          }
          .skills-label {
            display: table-cell;
            font-weight: bold;
            width: 180px;
            padding-bottom: 8px;
            color: #0f172a;
          }
          .skills-val {
            display: table-cell;
            padding-bottom: 8px;
            color: #334155;
          }
          @media print {
            body { margin: 15px; font-size: 13px; }
            h2 { margin-top: 18px; margin-bottom: 8px; }
            .contact-bar { margin-bottom: 18px; }
          }
        </style>
      </head>
      <body>
        <div class="title-area">
          <h1>TALHA</h1>
          <div class="subtitle">Junior Developer &bull; Minecraft Creator &bull; Python Programmer &bull; AI Enthusiast</div>
        </div>
        
        <div class="contact-bar">
          <div class="contact-item"><strong>Location:</strong> Pakistan</div>
          <div class="contact-item"><strong>GitHub:</strong> Available Upon Request</div>
          <div class="contact-item"><strong>Discord:</strong> Available Upon Request</div>
          <div class="contact-item"><strong>Email:</strong> Available Upon Request</div>
        </div>

        <h2>Profile</h2>
        <p>Passionate and self-driven young developer with experience in Minecraft datapack development, resource pack creation, Python programming, AI-assisted projects, and community management. Strong interest in game development, optimization systems, automation, and creative software projects.</p>

        <h2>Technical Skills</h2>
        <div class="skills-grid">
          <div class="skills-row">
            <div class="skills-label">Programming:</div>
            <div class="skills-val">Python, JSON, Basic Java, Web Development Fundamentals</div>
          </div>
          <div class="skills-row">
            <div class="skills-label">Minecraft Development:</div>
            <div class="skills-val">Datapacks, Resource Packs, Commands, Custom Game Mechanics, SMP Design, Performance Optimization Concepts</div>
          </div>
          <div class="skills-row">
            <div class="skills-label">Tools:</div>
            <div class="skills-val">GitHub, VS Code, Kiro, Discord, AI Development Tools</div>
          </div>
        </div>

        <h2>Featured Projects</h2>
        <div class="section-block">
          <span class="bullet-title">MythBound: Elemental Fate</span> &ndash; Custom Minecraft datapack and resource pack project featuring elemental abilities, progression systems, RPG mechanics, and immersive gameplay.
        </div>
        <div class="section-block">
          <span class="bullet-title">FPSX+</span> &ndash; Minecraft optimization mod concept focused on advanced rendering improvements and FPS enhancements.
        </div>
        <div class="section-block">
          <span class="bullet-title">Desktop Stickman Companion</span> &ndash; Python-based desktop companion inspired by animated stick figures.
        </div>
        <div class="section-block">
          <span class="bullet-title">Minecraft Resource Pack Creator</span> &ndash; Browser-based concept for creating and exporting Minecraft resource packs.
        </div>
        <div class="section-block">
          <span class="bullet-title">Discord Community Development</span> &ndash; Server systems, moderation setups, and community management projects.
        </div>

        <h2>Experience</h2>
        <div class="experience-header">
          <span>Independent Developer</span>
          <span>2024&ndash;Present</span>
        </div>
        <p>Designed Minecraft projects, built Python applications, explored AI-assisted development workflows, and managed online communities.</p>

        <h2>Achievements</h2>
        <p>Developed multiple Minecraft-related projects and concepts, created large-scale project documentation, and continuously expanded programming and development skills.</p>

        <h2>Education</h2>
        <p>Currently pursuing secondary education.</p>

        <h2>Goal</h2>
        <p>To continue developing technical skills, contribute to creative software and gaming projects, and gain experience in programming, game development, and emerging technologies.</p>

        <script>
          window.onload = function() {
            window.print();
            setTimeout(function() { window.close(); }, 500);
          };
        </script>
      </body>
      </html>
    `;
    
    printWindow.document.open();
    printWindow.document.write(resumeHTML);
    printWindow.document.close();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="resume-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md select-none overflow-y-auto"
        >
          {/* Backdrop trigger */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

          <motion.div
            id="resume-modal-card"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className={`w-full max-w-4xl relative z-10 overflow-hidden shadow-2xl flex flex-col ${
              themeMode === 'creative'
                ? 'bg-[#181818] border-4 border-black font-pixel text-slate-300 rounded-none'
                : 'bg-[#060914] border border-white/10 rounded-2xl text-slate-300 font-sans'
            }`}
            style={{ maxHeight: '90vh' }}
          >
            {/* Modal Header */}
            <div
              className={`p-4 md:p-6 flex items-center justify-between border-b ${
                themeMode === 'creative' ? 'border-black bg-[#2d2d2d]' : 'border-white/5 bg-[#090e1e]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`p-2 shrink-0 ${themeMode === 'creative' ? 'bg-yellow-400 text-black border border-black' : 'bg-blue-500/10 text-cyan-400 rounded-lg'}`}>
                  <FileText className="w-5 h-5" />
                </span>
                <div>
                  <h3 className={`font-bold ${themeMode === 'creative' ? 'text-xl text-yellow-400' : 'text-lg text-white'}`}>
                    Talha's Professional Resume
                  </h3>
                  <p className={`text-xs text-slate-500 ${themeMode === 'creative' ? 'font-pixel mt-1 text-slate-400' : ''}`}>
                    PORTABILITY_INTERFACE // RESUME_COMPILER_V2
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  id="print-resume-pdf-btn"
                  onClick={handleDownloadPDF}
                  className={`flex items-center gap-2 py-2 px-4 text-xs font-semibold uppercase cursor-pointer select-none transition-all ${
                    themeMode === 'creative'
                      ? 'minecraft-button text-base'
                      : 'rounded-lg bg-blue-600 text-white hover:bg-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]'
                  }`}
                >
                  <Printer className="w-4 h-4 shrink-0" />
                  <span>Download / Print PDF</span>
                </button>

                <button
                  id="close-resume-modal-btn"
                  onClick={onClose}
                  className={`p-2 transition-transform cursor-pointer ${
                    themeMode === 'creative'
                      ? 'minecraft-button p-2 text-red-500 font-bold text-center'
                      : 'rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:scale-110'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Container with the Beautiful Live CV Preview */}
            <div className="p-6 md:p-10 overflow-y-auto space-y-8 flex-1 text-left custom-scrollbar bg-[#02050b]">
              
              {/* Cover Top Sheet */}
              <div className="text-center space-y-3">
                <h2
                  className={`text-4xl md:text-5xl font-black tracking-tight ${
                    themeMode === 'creative' ? 'text-yellow-400' : 'text-white'
                  }`}
                >
                  TALHA
                </h2>
                <p className={`text-sm sm:text-base font-medium max-w-2xl mx-auto tracking-wide ${themeMode === 'creative' ? 'text-[#a855f7] text-lg' : 'text-blue-400'}`}>
                  Junior Developer &bull; Minecraft Creator &bull; Python Programmer &bull; AI Enthusiast
                </p>

                {/* Direct Metadata Row */}
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 pt-3 text-xs text-slate-400 font-mono">
                  <span>📍 Pakistan</span>
                  <span>📁 GitHub: Available Upon Request</span>
                  <span>💬 Discord: Available Upon Request</span>
                  <span>✉️ Email: Available Upon Request</span>
                </div>
              </div>

              {/* Grid block sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                
                {/* Profile section */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                    <Compass className="w-4 h-4 text-cyan-400" />
                    <h4 className={`font-bold ${themeMode === 'creative' ? 'text-lg text-yellow-400' : 'text-white tracking-widest uppercase text-xs'}`}>Profile</h4>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
                    Passionate and self-driven young developer with experience in Minecraft datapack development, resource pack creation, Python programming, AI-assisted projects, and community management. Strong interest in game development, optimization systems, automation, and creative software projects.
                  </p>
                </div>

                {/* Ultimate Goals */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <h4 className={`font-bold ${themeMode === 'creative' ? 'text-lg text-yellow-400' : 'text-white tracking-widest uppercase text-xs'}`}>Goal</h4>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-justify">
                    To continue developing technical skills, contribute to creative software and gaming projects, and gain experience in programming, game development, and emerging technologies.
                  </p>
                </div>
              </div>

              {/* Technical skills row */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                  <FileText className="w-4 h-4 text-purple-400" />
                  <h4 className={`font-bold ${themeMode === 'creative' ? 'text-lg text-yellow-400' : 'text-white tracking-widest uppercase text-xs'}`}>Technical Skills</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs text-slate-400">
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg space-y-1">
                    <span className="text-white font-bold block mb-1">Programming:</span>
                    <span>Python, JSON, Basic Java, Web Development Fundamentals</span>
                  </div>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg space-y-1">
                    <span className="text-white font-bold block mb-1">Minecraft Dev:</span>
                    <span>Datapacks, Resource Packs, Commands, Custom Game Mechanics, SMP Design, Performance Tuning</span>
                  </div>
                  <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg space-y-1">
                    <span className="text-white font-bold block mb-1">Tools & Platforms:</span>
                    <span>GitHub, VS Code, Kiro, Discord, AI Development Tools</span>
                  </div>
                </div>
              </div>

              {/* Experience & Education & Achievements Group */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Exp */}
                <div className="space-y-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-1.5 mb-1">
                    <Briefcase className="w-4 h-4 text-amber-500" />
                    <h4 className="font-bold text-white text-xs tracking-wider uppercase">Experience</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                      <span>Independent Developer</span>
                      <span className="text-slate-500 text-[10px] font-mono">2024-PRES</span>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed text-justify">
                      Designed Minecraft projects, built Python applications, explored AI-assisted development workflows, and managed online communities.
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-1.5 mb-1">
                    <Award className="w-4 h-4 text-yellow-500 animate-pulse" />
                    <h4 className="font-bold text-white text-xs tracking-wider uppercase">Achievements</h4>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed text-left">
                    Developed multiple Minecraft-related projects and concepts, created codebase documentation, and continuously expanded technical development matrices.
                  </p>
                </div>

                {/* Edu */}
                <div className="space-y-3 bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-1.5 mb-1">
                    <GraduationCap className="w-4 h-4 text-indigo-400" />
                    <h4 className="font-bold text-white text-xs tracking-wider uppercase">Education</h4>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed text-left">
                    Currently pursuing secondary educational certifications and specializing in practical computation fields.
                  </p>
                </div>
              </div>

              {/* Featured projects list */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  <h4 className={`font-bold ${themeMode === 'creative' ? 'text-lg text-yellow-400' : 'text-white tracking-widest uppercase text-xs'}`}>Featured Projects</h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-slate-400">
                  <div className="p-3 bg-white/[0.01] border border-white/5 hover:border-white/10 rounded-lg transition-colors">
                    <span className="text-white font-bold block mb-1">MythBound: Elemental Fate</span>
                    <span>Custom Minecraft datapack and resource pack project featuring elemental abilities, progression systems, RPG mechanics, and immersive gameplay.</span>
                  </div>

                  <div className="p-3 bg-white/[0.01] border border-white/5 hover:border-white/10 rounded-lg transition-colors">
                    <span className="text-white font-bold block mb-1">FPSX+</span>
                    <span>Minecraft optimization mod concept focused on advanced rendering improvements and FPS enhancements.</span>
                  </div>

                  <div className="p-3 bg-[#0a0f1d]/40 border border-blue-500/10 hover:border-blue-500/25 rounded-lg transition-colors col-span-1 md:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <span className="text-white font-bold block mb-1">Desktop Stickman Companion</span>
                        <span>Python-based desktop companion inspired by animated stick figures.</span>
                      </div>
                      <div>
                        <span className="text-white font-bold block mb-1">Minecraft Resource Pack Creator</span>
                        <span>Browser-based concept for creating and exporting Minecraft resource packs.</span>
                      </div>
                      <div>
                        <span className="text-white font-bold block mb-1">Discord Community Development</span>
                        <span>Server systems, moderation setups, and community management projects.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
