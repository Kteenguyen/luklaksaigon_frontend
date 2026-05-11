"use client";
﻿import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { useMotionValue } from 'framer-motion';

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,                              // slower = more cinematic
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // expo ease-out
      wheelMultiplier: 0.85,                      // slightly reduced for luxury feel
      touchMultiplier: 1.5,
      smoothTouch: false,
      infinite: false,
    });

    // Expose lenis globally so other components can use lenis.scrollTo()
    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return <>{children}</>;
}
