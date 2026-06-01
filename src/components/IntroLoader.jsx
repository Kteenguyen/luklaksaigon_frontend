"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import monogramSrc from '../assets/logo/PNG/Logo_Light_3 copy.png';
import logoSrc from '../assets/logo/PNG/Logo_Light_1 copy.png';

export default function IntroLoader({ onComplete }) {
  const [phase, setPhase] = useState(1);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Disable scroll while loading
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      if (window.__lenis) {
        window.__lenis.stop();
      }
    }

    // Phase 1 (Monogram) runs for 1.8s, then transition to Phase 2
    const phase2Timer = setTimeout(() => {
      setPhase(2);
    }, 1800);

    let completionTimer;
    // Total display duration: 3.6s (1.8s for Phase 1 + 1.8s for Phase 2)
    const timer = setTimeout(() => {
      setIsFinished(true);
      // Re-enable scroll
      document.body.style.overflow = '';
      if (window.__lenis) {
        window.__lenis.start();
      }
      completionTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1400); // Give exit animation 1.4s to slide open fully
    }, 3600);

    return () => {
      clearTimeout(phase2Timer);
      clearTimeout(timer);
      if (completionTimer) clearTimeout(completionTimer);
      document.body.style.overflow = '';
      if (window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [onComplete]);

  // Framer Motion spring and transition settings for the luxury feel
  const transitionProps = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

  // Subtitle letter stagger animation settings
  const subtitleText = "DESIGN & BUILD STUDIO";
  
  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-loader overflow-hidden flex items-center justify-center pointer-events-none"
        >
          {/* ── LEFT DOOR PANEL ── */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ 
              x: '-100%',
              transition: transitionProps
            }}
            className="absolute left-0 top-0 w-1/2 h-full bg-secondary border-r border-white/5 pointer-events-auto"
          />

          {/* ── RIGHT DOOR PANEL ── */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ 
              x: '100%',
              transition: transitionProps
            }}
            className="absolute right-0 top-0 w-1/2 h-full bg-secondary border-l border-white/5 pointer-events-auto"
          />

          {/* ── CENTER CONTENT OVERLAY ── */}
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.05,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
            className="relative z-10 flex flex-col items-center justify-center text-center px-4"
          >
            <AnimatePresence mode="wait">
              {phase === 1 ? (
                <motion.div
                  key="phase1"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-40 h-40 flex items-center justify-center"
                >
                  {/* Radial Golden Background Glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: [0, 0.25, 0.15], scale: [0.8, 1.2, 1.0] }}
                    transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-primary/30 to-transparent blur-2xl"
                  />

                  {/* Monogram Symbol */}
                  <motion.img
                    src={monogramSrc.src || monogramSrc}
                    alt="Biểu tượng Monogram chữ L cách điệu của Luklak"
                    title="Biểu tượng Monogram Luklak"
                    initial={{ opacity: 0, scale: 0.6, filter: 'blur(5px)' }}
                    animate={{ 
                      opacity: [0, 1, 1],
                      scale: [0.6, 1.0, 1.0],
                      filter: ['blur(5px)', 'blur(0px)', 'blur(0px)'],
                    }}
                    transition={{ 
                      times: [0, 0.2, 1],
                      duration: 1.8, 
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="w-16 h-16 object-contain z-10"
                  />

                  {/* Gold Outline Drawing Circle */}
                  <svg className="absolute w-36 h-36 z-0" viewBox="0 0 100 100">
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#C95928"
                      strokeWidth="0.75"
                      fill="transparent"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: 1
                      }}
                      transition={{ 
                        duration: 1.8, 
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    />
                  </svg>
                </motion.div>
              ) : (
                <motion.div
                  key="phase2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1.0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center w-80"
                >
                  {/* Full Brand Logo Container */}
                  <div className="relative overflow-hidden w-64 h-16 flex items-center justify-center mb-4">
                    <img
                      src={logoSrc.src || logoSrc}
                      alt="Logo chính thức Luklak Saigon Kiến trúc & Xây dựng"
                      title="Logo thương hiệu Luklak Saigon"
                      className="h-10 w-auto object-contain"
                    />

                    {/* Golden Shine Sweep Effect overlay */}
                    <motion.div
                      initial={{ x: '-150%' }}
                      animate={{ x: '150%' }}
                      transition={{ 
                        duration: 1.5,
                        delay: 0.2,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/35 to-transparent skew-x-20 pointer-events-none"
                    />
                  </div>

                  {/* Subtitle Slogan Reveal */}
                  <div className="flex justify-center items-center gap-1 overflow-hidden h-6 mt-1">
                    {subtitleText.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.03,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="text-[9px] md:text-[10px] text-primary/75 tracking-[0.2em] font-light font-sans inline-block"
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
