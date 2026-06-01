"use client";
import { useRef, useEffect } from 'react';

const videoBanner = '/video/banner.mp4';

export default function Hero() {
  const videoRef = useRef(null);

  // Sync video playback rate
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85; // Slightly slower for cinematic feel
    }
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-secondary" data-theme="dark">
      {/* ── Background Video Layer ── */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          src={videoBanner}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Subtle top gradient to ensure header menu visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-10" />
      </div>
    </section>
  );
}
