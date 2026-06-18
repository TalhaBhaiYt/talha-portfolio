import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeMode } from './types';

// Component Imports
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import CanvasBackground from './components/CanvasBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Stats from './components/Stats';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [themeMode, setThemeMode] = useState<ThemeMode>('developer');
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Custom cursor states
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorHovering, setCursorHovering] = useState(false);

  // Initialize and observe active navigation highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'journey', 'contact'];
      const scrollPos = window.scrollY + 120; // offset

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sect);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync cursor positioning
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleHoverStart = () => {
      setCursorHovering(true);
    };

    const handleHoverEnd = () => {
      setCursorHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Attach indicators on interactive buttons/links for dynamic cursor scaling
    const addListeners = () => {
      const interactives = document.querySelectorAll('button, a, input, textarea, [role="button"]');
      interactives.forEach((item) => {
        item.addEventListener('mouseenter', handleHoverStart);
        item.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    // Re-bind on state transitions
    const obs = new MutationObserver(addListeners);
    obs.observe(document.body, { childList: true, subtree: true });
    
    // Initial binding
    addListeners();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      obs.disconnect();
    };
  }, []);

  const handleNavigateToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleNavigateToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Custom Global Cursor Trailer */}
      {!isLoading && (
        <div
          id="custom-cursor-trailer"
          className="fixed pointer-events-none z-50 hidden md:block"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'width 0.15s ease-out, height 0.15s ease-out, background-color 0.2s',
          }}
        >
          {themeMode === 'creative' ? (
            /* Minecraft Vibe crosshair cursor */
            <div
              className="relative w-5 h-5 flex items-center justify-center"
              style={{ scale: cursorHovering ? '1.2' : '1' }}
            >
              {/* Retro digital crosshair drawn with nested simple div lines */}
              <div className="absolute w-[18px] h-1 bg-white border border-black" />
              <div className="absolute w-1 h-[18px] bg-white border border-black" />
              <div className="absolute w-1 h-1 bg-black" />
            </div>
          ) : (
            /* Modern sleek glowing radial cursor trail */
            <div
              className={`rounded-full border transition-all duration-300 ${
                cursorHovering
                  ? 'w-10 h-10 border-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                  : 'w-6 h-6 border-blue-500 bg-blue-500/5 shadow-[0_0_8px_rgba(59,130,246,0.3)]'
              }`}
            />
          )}
        </div>
      )}

      {/* Loader Pre-requisite Screen */}
      <Loader onComplete={() => setIsLoading(false)} />

      {/* Main Container Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.div
            id="portfolio-main-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`min-h-screen relative flex flex-col justify-between ${
              themeMode === 'creative' ? 'font-pixel cursor-crosshair' : 'font-sans'
            }`}
          >
            {/* Interactive Canvas Background */}
            <CanvasBackground themeMode={themeMode} />

            {/* Navigation Bar */}
            <Navbar
              themeMode={themeMode}
              onThemeToggle={(mode) => setThemeMode(mode)}
              activeSection={activeSection}
            />

            {/* Hero Splash Entrance */}
            <Hero
              themeMode={themeMode}
              onNavigateToProjects={handleNavigateToProjects}
              onNavigateToContact={handleNavigateToContact}
              onOpenResume={() => setIsResumeOpen(true)}
            />

            {/* Custom Interactive Resume Modal Overlay */}
            <ResumeModal
              isOpen={isResumeOpen}
              onClose={() => setIsResumeOpen(false)}
              themeMode={themeMode}
            />

            {/* Section: Who is Talha */}
            <About themeMode={themeMode} />

            {/* Section: Technical Skills and Inventory */}
            <Skills themeMode={themeMode} />

            {/* Section: Projects Showcase / Advanced spell matrices list */}
            <Projects themeMode={themeMode} />

            {/* Section: Journey Timeline progress steps */}
            <Journey themeMode={themeMode} />

            {/* Section: Real-time Counting Metrics */}
            <Stats themeMode={themeMode} />

            {/* Section: Commissions and Professional Solutions */}
            <Services themeMode={themeMode} />

            {/* Section: Transmit Messages Signal Terminal and submissions list */}
            <Contact themeMode={themeMode} />

            {/* Matching Footer credentials */}
            <Footer themeMode={themeMode} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
