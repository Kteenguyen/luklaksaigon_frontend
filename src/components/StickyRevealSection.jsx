"use client";
﻿import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import s1 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg';
import s2 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164022321_03054fbc155e2451385f87aba8e4e079.jpg';
import s3 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164022324_62d51436e112decb402e58b78e9fee45.jpg';

function FadeDownImage({ src, alt }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: -60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full overflow-hidden rounded-sm bg-surface aspect-[4/5] relative"
    >
      <motion.img
        style={{ y, scale: 1.2 }}
        src={src.src || src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover origin-center"
      />
    </motion.div>
  );
}

export default function StickyRevealSection() {
  const images = [
    { id: 1, src: s1, alt: 'KC Villa - Nội thất' },
    { id: 2, src: s2, alt: 'KC Villa - Phòng khách' },
    { id: 3, src: s3, alt: 'KC Villa - Chi tiết trang trí' }
  ];

  return (
    <section className="relative flex flex-col md:flex-row w-full items-start py-24 bg-background text-secondary">
      {/* Left Column (Sticky Text) */}
      <div className="w-full md:w-5/12 sticky top-32 flex flex-col justify-start px-8 md:px-16 z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-tight mb-8">
          The Art of <br/> Refinement.
        </h2>
        <p className="text-lg md:text-xl font-light text-text-main max-w-md leading-relaxed">
          Rooted in the timeless principles of modern wabi-sabi, our design ethos celebrates the intrinsic beauty of raw, natural materials. We craft spaces that offer a serene retreat from the fast-paced modern world.
        </p>
      </div>

      {/* Right Column (Scrolling Images) */}
      <div className="w-full md:w-7/12 flex flex-col gap-24 mt-24 md:mt-0 px-8 z-0">
        {images.map((img) => (
          <FadeDownImage key={img.id} src={img.src} alt={img.alt} />
        ))}
      </div>
    </section>
  );
}
