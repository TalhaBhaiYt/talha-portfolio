import React, { useEffect, useRef } from 'react';
import { ThemeMode } from '../types';

interface CanvasBackgroundProps {
  themeMode: ThemeMode;
}

export default function CanvasBackground({ themeMode }: CanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }> = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const density = themeMode === 'creative' ? 60 : 80;
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      const activeCount = Math.min(count, density);

      for (let i = 0; i < activeCount; i++) {
        // Creative mode uses more pixelated square drops; developer mode uses standard round particles
        const size = themeMode === 'creative' 
          ? Math.floor(Math.random() * 4) + 2 // Block squares
          : Math.random() * 2 + 1; // Round stars

        // Theme colors
        let color = 'rgba(59, 130, 246, 0.4)'; // blue
        const rand = Math.random();
        if (rand > 0.7) {
          color = 'rgba(168, 85, 247, 0.4)'; // purple
        } else if (rand > 0.4) {
          color = 'rgba(6, 182, 212, 0.4)'; // cyan
        }

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size,
          color,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = {
        x: null,
        y: null,
      };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Initial setup
    handleResize();

    const draw = () => {
      ctx.fillStyle = themeMode === 'creative' ? '#0f1115' : '#030712';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // In developer mode we draw subtle horizontal gridlines to emulate UI guides (Stripe aesthetics)
      if (themeMode === 'developer') {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.015)';
        ctx.lineWidth = 1;
        const gridGap = 40;
        for (let y = 0; y < canvas.height; y += gridGap) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();
        }
        for (let x = 0; x < canvas.width; x += gridGap) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
        }
      }

      // Draw and connect particles
      const mouse = mouseRef.current;
      const connectionDist = themeMode === 'creative' ? 90 : 120;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce borders
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        ctx.fillStyle = p.color;
        if (themeMode === 'creative') {
          // Pixel format: squares
          ctx.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size);
        } else {
          // Standard modern format: circles
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw line connections between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.12;
            ctx.strokeStyle = themeMode === 'creative'
              ? `rgba(6, 182, 212, ${alpha})`
              : `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = themeMode === 'creative' ? 2 : 0.8;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw lines from cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.22;
            ctx.strokeStyle = themeMode === 'creative' 
              ? `rgba(168, 85, 247, ${alpha})` // Purple laser in creative mode
              : `rgba(59, 130, 246, ${alpha})`; // Blue laser in developer mode
            ctx.lineWidth = themeMode === 'creative' ? 1.5 : 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
            
            // Soft drift towards mouse
            p.x -= dx * 0.01;
            p.y -= dy * 0.01;
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeMode]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* HTML Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full" />

      {/* Modern slow-moving ambient glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[120px] mix-blend-screen animate-pulse-glow" style={{ animationDelay: '0s' }} />
      <div className="absolute top-2/3 right-1/4 w-[35vw] h-[35vw] rounded-full bg-purple-600/10 blur-[130px] mix-blend-screen animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-1/3 w-[30vw] h-[30vw] rounded-full bg-cyan-500/8 blur-[100px] mix-blend-screen animate-pulse-glow" style={{ animationDelay: '4s' }} />
    </div>
  );
}
