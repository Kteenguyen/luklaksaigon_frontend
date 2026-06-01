"use client";
import { useState, useEffect } from 'react';
import IntroLoader from './IntroLoader';

export default function ClientLayoutWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // If intro was already shown in this browser session, we can skip it,
    // or we can play it every load. Let's play it on first load per session.
    const hasLoaded = sessionStorage.getItem('luklak-intro-loaded');
    if (hasLoaded) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem('luklak-intro-loaded', 'true');
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <IntroLoader onComplete={handleIntroComplete} />}
      {children}
    </>
  );
}
