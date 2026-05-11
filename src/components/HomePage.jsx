"use client";
﻿import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from './RevealText';
import ParallaxImage from './ParallaxImage';

export default function HomePage() {
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start center", "end center"]
  });
  
  // Subtle color shift mapped to scroll
  const headingColor = useTransform(scrollYProgress, [0, 0.5], ["#9ca3af", "#000000"]);

  return (
    <div className="bg-[#fcfcfc] min-h-screen text-black">
      {/* HERO SECTION */}
      <section className="h-screen flex items-center justify-center px-8 relative">
        <RevealText className="flex flex-col text-center">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif uppercase tracking-tighter leading-none">
            Hirsch Bedner
          </h1>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif uppercase tracking-tighter leading-none">
            Associates
          </h1>
        </RevealText>
      </section>

      {/* ASYMMETRIC ABOUT SECTION */}
      <section ref={aboutRef} className="relative max-w-7xl mx-auto px-8 py-32 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <motion.h2 
            style={{ color: headingColor }}
            className="sticky top-40 text-4xl md:text-5xl font-serif transition-colors duration-200"
          >
            About Us
          </motion.h2>
        </div>
        <div className="md:w-2/3 flex flex-col gap-24">
          <RevealText className="flex flex-col gap-8 text-xl md:text-3xl font-light text-gray-800 leading-relaxed">
            <p>We are a global hospitality design firm.</p>
            <p>Our work spans continents and cultures, creating iconic destinations that stand the test of time. We believe that true luxury is subtle, felt in the tactile qualities of materials and the intentionality of lighting.</p>
          </RevealText>
          
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
            alt="Interior Office" 
            className="w-full aspect-[4/5] bg-gray-200"
          />
        </div>
      </section>

      {/* MASONRY PORTFOLIO GRID */}
      <section className="max-w-7xl mx-auto px-8 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        <div className="md:mt-32 flex flex-col gap-8">
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d8379?q=80&w=2000&auto=format&fit=crop" 
            alt="Hotel 1" 
            className="w-full aspect-[3/4] bg-gray-200"
          />
          <RevealText className="flex flex-col">
            <h3 className="text-2xl font-serif">The Ritz-Carlton</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Kyoto, Japan</p>
          </RevealText>
        </div>
        
        <div className="flex flex-col gap-8">
          <ParallaxImage 
            src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop" 
            alt="Hotel 2" 
            className="w-full aspect-square bg-gray-200"
          />
          <RevealText className="flex flex-col">
            <h3 className="text-2xl font-serif">Aman Residences</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Tokyo, Japan</p>
          </RevealText>
        </div>

        <div className="md:col-span-2 flex flex-col gap-8 md:mt-24">
           <ParallaxImage 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2500&auto=format&fit=crop" 
            alt="Hotel 3" 
            className="w-full aspect-video bg-gray-200"
          />
          <RevealText className="flex flex-col">
            <h3 className="text-2xl font-serif">Capella Resort</h3>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Bali, Indonesia</p>
          </RevealText>
        </div>
      </section>
    </div>
  );
}
