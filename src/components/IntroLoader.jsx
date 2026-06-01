"use client";
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader({ onComplete }) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Disable scroll while loading
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
      if (window.__lenis) {
        window.__lenis.stop();
      }
    }

    let completionTimer;
    const timer = setTimeout(() => {
      setIsFinished(true);
      // Re-enable scroll
      document.body.style.overflow = '';
      if (window.__lenis) {
        window.__lenis.start();
      }
      completionTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1200);
    }, 2800); // Intro lasts 2.8s

    return () => {
      clearTimeout(timer);
      if (completionTimer) clearTimeout(completionTimer);
      document.body.style.overflow = '';
      if (window.__lenis) {
        window.__lenis.start();
      }
    };
  }, [onComplete]);

  const words = "LUKLAK SAIGON".split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const wordVariants = {
    hidden: { y: 60, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-secondary flex flex-col items-center justify-center text-white"
        >
          {/* Logo or minimalist mark */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="w-[60px] h-[1px] bg-primary mb-2" />
          </motion.div>

          {/* Staggered brand name text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex gap-x-6 text-4xl md:text-6xl font-serif tracking-[0.2em] font-light text-surface uppercase"
          >
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.1em' }}
            animate={{ opacity: 0.5, letterSpacing: '0.3em' }}
            transition={{ duration: 1.8, delay: 0.8, ease: "easeOut" }}
            className="text-[10px] md:text-xs uppercase text-white/70 mt-6 tracking-[0.3em] font-light"
          >
            Design &amp; Build Studio
          </motion.span>

          {/* Luxury bottom indicator line */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[120px] h-[1px] bg-white/10 overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
              className="w-full h-full bg-primary"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
