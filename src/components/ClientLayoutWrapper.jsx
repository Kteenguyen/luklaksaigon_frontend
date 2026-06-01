"use client";
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import IntroLoader from './IntroLoader';

export default function ClientLayoutWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(true);
  const pathname = usePathname();

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
