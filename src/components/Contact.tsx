import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, MessageSquare, Send, Check, Terminal, Database, Trash2, HelpCircle } from 'lucide-react';
import { ThemeMode, FormSubmission } from '../types';

interface ContactProps {
  themeMode: ThemeMode;
}

export default function Contact({ themeMode }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form selections and outbound submissions state
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);

  useEffect(() => {
    // Read local cache of previous form sends
    const cached = localStorage.getItem('talha_portfolio_messages');
    if (cached) {
      try {
        setSubmissions(JSON.parse(cached));
      } catch (e) {
        setSubmissions([]);
      }
    }
  }, []);

  const handleClearInbox = () => {
    localStorage.removeItem('talha_portfolio_messages');
    setSubmissions([]);
  };

  const calculateAIDraftReply = (msg: string, author: string) => {
    const textLower = msg.toLowerCase();
    let reply = `Hello ${author || 'Developer'}! Thanks for reaching out to me. Your transmission has been queued in my offline local server buffer. `;

    if (textLower.includes('minecraft') || textLower.includes('datapack') || textLower.includes('server')) {
      reply += "I notice your message mentions Minecraft. I would love to assist you with custom mechanics, spell layouts, or command optimization. In the meantime, sleep through the night, and don't dig straight down! Let's talk command matrices soon.";
    } else if (textLower.includes('python') || textLower.includes('app') || textLower.includes('scripts')) {
      reply += "Python is my sweet spot! Let's build some highly optimized automation libraries, desktop overlays, or background schedulers. I will review your concept notes and compute the optimal framework layout.";
    } else if (textLower.includes('hire') || textLower.includes('job') || textLower.includes('work')) {
      reply += "I am always open to creative work and commissions. I am computing availability schedules right now and will get back to your mail coordinates. Let's design some epic software together!";
    } else {
      reply += "I've logged your message under standard operations logs. I will inspect this request personally via terminal very soon. Have an amazing, syntax-error-free coding session!";
    }

    return reply;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Simulation constraint: Please fill in all variables fields!');
      return;
    }

    setIsSending(true);

    // Simulate 1.2s ping delay
    setTimeout(() => {
      const newSubmission: FormSubmission = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        email,
        message,
        timestamp: new Date().toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' }),
        aiSuggestedReply: calculateAIDraftReply(message, name)
      };

      const updated = [newSubmission, ...submissions];
      setSubmissions(updated);
      localStorage.setItem('talha_portfolio_messages', JSON.stringify(updated));

      setIsSending(false);
      setIsSuccess(true);

      // Reset fields
      setName('');
      setEmail('');
      setMessage('');

      // Auto clear green check after 4s
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-28 border-t border-white/5 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-16 space-y-3">
          <div className="flex items-center space-x-2 text-blue-500 font-mono text-sm">
            <Mail className="w-4 h-4 text-cyan-400" />
            <span className={`${themeMode === 'creative' ? 'font-pixel text-xl text-yellow-400' : ''}`}>06 // TRANSMIT_MESSAGES</span>
          </div>
          <h2
            id="contact-title"
            className={`text-3xl md:text-5xl font-extrabold tracking-tight text-white ${
              themeMode === 'creative' ? 'font-pixel text-yellow-400' : 'font-display'
            }`}
          >
            Initiate Contact Interface
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form and Social links */}
          <div className="lg:col-span-6 space-y-8">
            {/* Quick Handles Deck */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Mail Handle */}
              <div
                id="contact-handle-email"
                className={`p-4 text-left cursor-pointer transition-all ${
                  themeMode === 'creative' ? 'minecraft-card border border-black' : 'bg-white/[0.015] border border-white/5 hover:border-white/10 rounded-xl'
                }`}
                onClick={() => {
                  navigator.clipboard.writeText('talhabhaiyt0981@gmail.com');
                  alert('Coordinates copied to clipboard: talhabhaiyt0981@gmail.com');
                }}
              >
                <div className="flex items-center gap-2 text-blue-400 mb-2 font-mono text-xs">
                  <Mail className="w-4 h-4" />
                  <span className={themeMode === 'creative' ? 'font-pixel text-md' : 'font-semibold'}>EMAIL</span>
                </div>
                <div className={`text-slate-200 text-xs truncate ${themeMode === 'creative' ? 'font-pixel text-lg' : ''}`}>
                  talhabhaiyt0981@gmail.com
                </div>
              </div>

              {/* Discord Handle */}
              <div
                id="contact-handle-discord"
                className={`p-4 text-left cursor-pointer transition-all ${
                  themeMode === 'creative' ? 'minecraft-card border border-black' : 'bg-white/[0.015] border border-white/5 hover:border-white/10 rounded-xl'
                }`}
                onClick={() => {
                  navigator.clipboard.writeText('Talha#0001');
                  alert('Discord coordinate clipboard logs saved: Talha#0001');
                }}
              >
                <div className="flex items-center gap-2 text-purple-400 mb-2 font-mono text-xs">
                  <MessageSquare className="w-4 h-4" />
                  <span className={themeMode === 'creative' ? 'font-pixel text-md' : 'font-semibold'}>DISCORD</span>
                </div>
                <div className={`text-slate-200 text-xs truncate ${themeMode === 'creative' ? 'font-pixel text-lg' : ''}`}>
                  Click to copy ID
                </div>
              </div>

              {/* GitHub Handle */}
              <div
                id="contact-handle-github"
                className={`p-4 text-left cursor-pointer transition-all ${
                  themeMode === 'creative' ? 'minecraft-card border border-black' : 'bg-white/[0.015] border border-white/5 hover:border-white/10 rounded-xl'
                }`}
                onClick={() => {
                  alert('Interactive: GitHub developer platform logs selected.');
                }}
              >
                <div className="flex items-center gap-2 text-cyan-400 mb-2 font-mono text-xs">
                  <Github className="w-4 h-4" />
                  <span className={themeMode === 'creative' ? 'font-pixel text-md' : 'font-semibold'}>GITHUB</span>
                </div>
                <div className={`text-slate-200 text-xs truncate ${themeMode === 'creative' ? 'font-pixel text-lg' : ''}`}>
                  Talha-Developer
                </div>
              </div>
            </div>

            {/* Input Form Fields */}
            <form
              id="portfolio-contact-form"
              onSubmit={handleSubmit}
              className={`p-6 text-left space-y-4 relative overflow-hidden ${
                themeMode === 'creative'
                  ? 'minecraft-border rounded-none'
                  : 'rounded-2xl bg-white/[0.01] border border-white/5'
              }`}
            >
              <div className="text-xs text-slate-500 font-mono mb-2 uppercase tracking-wider">
                {themeMode === 'creative' ? '📦 SURVIVAL_TICKET_FORM' : 'TRANSMIT_CLIENT_DRAFT'}
              </div>

              {/* Name */}
              <div className="space-y-1">
                <label className={`block text-xs font-semibold text-slate-400 uppercase ${themeMode === 'creative' ? 'font-pixel text-lg text-slate-300' : ''}`}>
                  Authorized Name
                </label>
                <input
                  id="form-input-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Steve / Alex"
                  required
                  className={`w-full text-sm font-medium px-4 py-3 bg-black/40 text-white placeholder-slate-600 focus:outline-none transition-all ${
                    themeMode === 'creative'
                      ? 'font-pixel text-xl border-2 border-[#555] bg-[#111] focus:border-yellow-400'
                      : 'rounded-lg border border-white/5 focus:border-blue-500/50'
                  }`}
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className={`block text-xs font-semibold text-slate-400 uppercase ${themeMode === 'creative' ? 'font-pixel text-lg text-slate-300' : ''}`}>
                  Email Coordinate
                </label>
                <input
                  id="form-input-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="visitor@domain.com"
                  required
                  className={`w-full text-sm font-medium px-4 py-3 bg-black/40 text-white placeholder-slate-600 focus:outline-none transition-all ${
                    themeMode === 'creative'
                      ? 'font-pixel text-xl border-2 border-[#555] bg-[#111] focus:border-yellow-400'
                      : 'rounded-lg border border-white/5 focus:border-blue-500/50'
                  }`}
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className={`block text-xs font-semibold text-slate-400 uppercase ${themeMode === 'creative' ? 'font-pixel text-lg text-slate-300' : ''}`}>
                  Core Communication Message
                </label>
                <textarea
                  id="form-input-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your datapack or Python automate scripts layout..."
                  rows={4}
                  required
                  className={`w-full text-sm font-medium px-4 py-3 bg-black/40 text-white placeholder-slate-600 focus:outline-none transition-all resize-none ${
                    themeMode === 'creative'
                      ? 'font-pixel text-xl border-2 border-[#555] bg-[#111] focus:border-yellow-400'
                      : 'rounded-lg border border-white/5 focus:border-blue-500/50'
                  }`}
                />
              </div>

              {/* Submit Buttons */}
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSending}
                className={`py-3 px-6 w-full font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer select-none border border-transparent transition-all ${
                  themeMode === 'creative'
                    ? 'minecraft-button text-xl'
                    : 'rounded-lg bg-blue-600 text-white hover:bg-blue-500 hover:scale-[1.01] shadow-[0_2px_12px_rgba(59,130,246,0.3)]'
                }`}
              >
                {isSending ? (
                  <>
                    <Database className="w-4 h-4 animate-spin" />
                    <span>Transmitting Signal...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-[#55ff55]" />
                    <span>Transmission Completed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Secure Signal</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Simulated Queue & Outbox Terminal */}
          <div className="lg:col-span-6 flex flex-col h-full justify-between max-h-[580px] gap-4">
            
            <div
              id="simulated-terminal-wrapper"
              className="flex-1 bg-slate-950/90 border border-white/5 rounded-2xl p-5 flex flex-col justify-start text-left overflow-y-auto w-full select-all"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4 shrink-0">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <div className="font-mono text-xs">
                    <div className="text-white font-bold leading-tight">TALHA_TELEMETRY_OUTBOX</div>
                    <div className="text-slate-500 text-[10px]">LOCAL_DB_BUFFER</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 select-none">
                  {submissions.length > 0 && (
                    <button
                      id="clear-inbox-btn"
                      onClick={handleClearInbox}
                      title="Clear telemetry logs"
                      className="p-1 text-slate-500 hover:text-red-400 hover:bg-white/5 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                </div>
              </div>

              {/* Loop Messages */}
              {submissions.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-6 space-y-3 shrink-0">
                  <div className="p-3 bg-white/5 rounded-full border border-white/5 text-slate-400 dark:text-slate-600">
                    <HelpCircle className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="font-mono text-xs text-slate-400 max-w-xs leading-relaxed">
                    Terminal buffer is currently empty. Fire a test signal in the contact form to see real-time packet transmissions & AI response logs!
                  </div>
                </div>
              ) : (
                <div className="space-y-6 flex-1 pr-1 overflow-y-auto max-h-[440px]">
                  {submissions.map((sub, index) => (
                    <div
                      key={sub.id}
                      id={`telemetry-packet-${sub.id}`}
                      className="p-4 bg-black/40 border-l-4 border-l-cyan-400 border border-white/5 rounded-r-xl space-y-3 relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>PACKET_ID_{sub.id.toUpperCase()}</span>
                        <span>{sub.timestamp}</span>
                      </div>

                      <div className="font-sans text-xs">
                        <div className="text-slate-300">
                          <span className="text-blue-400 font-mono font-bold mr-1">FROM_LABEL:</span>
                          <span className="font-semibold text-white">{sub.name}</span>{' '}
                          <span className="text-slate-500 font-mono">({sub.email})</span>
                        </div>
                        <div className="text-slate-400 mt-2 italic pl-2 border-l border-white/10 leading-relaxed break-words">
                          "{sub.message}"
                        </div>
                      </div>

                      {/* AI Response Block */}
                      {sub.aiSuggestedReply && (
                        <div className="p-3 bg-blue-950/20 border border-blue-500/10 rounded-lg text-xs space-y-1 leading-relaxed">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wide">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            AI Draft Auto-Response:
                          </div>
                          <p className="text-slate-300 font-sans italic text-left">
                            {sub.aiSuggestedReply}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Offline notification card */}
            <div className={`p-4 text-left flex items-start gap-3 shrink-0 ${
              themeMode === 'creative'
                ? 'bg-black/40 border border-[#333]'
                : 'bg-white/[0.015] border border-white/5 rounded-xl'
            }`}>
              <div className="p-1 bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded">
                <Database className="w-4 h-4 animate-pulse" />
              </div>
              <div className="font-sans text-xs flex-1">
                <div className="text-slate-200 font-semibold mb-0.5">Persistence Engine active</div>
                <p className="text-slate-500 leading-relaxed">
                  Your signals sync safely to local browser storage context, preventing message loss during code reload sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
