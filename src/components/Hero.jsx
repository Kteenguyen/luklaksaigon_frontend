"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import assets for slideshow
const videoBanner = '/video/banner.mp4';
import img1 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img2 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import img3 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';

const SLIDE_DURATION = 6000; // 6 seconds per slide

const SLIDES = [
  {
    type: 'video',
    src: videoBanner,
    subtitle: 'Luk Lak Design & Build',
    title: 'Kiến Tạo Không Gian Độc Bản',
    desc: 'Ý tưởng khởi nguyên đột phá hòa quyện tinh hoa thiết kế và tiêu chuẩn thi công khắt khe.'
  },
  {
    type: 'image',
    src: img1,
    subtitle: 'Featured Project — Villa',
    title: 'Biệt Thự Ánh Sáng KC Villa',
    desc: 'Bản giao hưởng tinh tế giữa những mảng tường thô ráp và kịch bản ánh sáng tràn ngập sức sống.'
  },
  {
    type: 'image',
    src: img2,
    subtitle: 'Interior Design — Apartment',
    title: 'The Landmark Apartment',
    desc: 'Ứng dụng triết lý Wabi-Sabi tinh tế, mang không gian tĩnh lặng, an yên giữa lòng Sài Gòn.'
  },
  {
    type: 'image',
    src: img3,
    subtitle: 'Modern Living — Townhouse',
    title: 'Sunrise Townhouse',
    desc: 'Giải pháp không gian lấy sáng thông minh bằng giếng trời liên thông tạo luồng khí đối lưu.'
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef([]);

  // Auto-play slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, []);

  // Sync video playback rates
  useEffect(() => {
    SLIDES.forEach((slide, idx) => {
      if (slide.type === 'video' && videoRefs.current[idx]) {
        videoRefs.current[idx].playbackRate = 0.85;
      }
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-secondary" data-theme="dark">
      {/* ── Slide Media Layer (Ken Burns Transition) ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {SLIDES.map((slide, idx) => {
            if (idx !== current) return null;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Ken Burns zooming wrapper */}
                <motion.div
                  initial={{ scale: 1.02, x: "-1%", y: "-1%" }}
                  animate={{ scale: 1.1, x: "1%", y: "1%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  className="w-full h-full"
                >
                  {slide.type === 'video' ? (
                    <video
                      ref={(el) => (videoRefs.current[idx] = el)}
                      src={slide.src.src || slide.src}
                      autoPlay loop muted playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={slide.src.src || slide.src}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>
                
                {/* Premium Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/85 z-10" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* ── Slideshow Text Content Overlay ── */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-8 md:px-24 max-w-5xl pointer-events-none text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-4 md:gap-6 pointer-events-auto"
          >
            {/* Subtitle tag */}
            <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-primary font-medium">
              {SLIDES[current].subtitle}
            </span>

            {/* Main Title (Large luxury serif font) */}
            <h1 className="text-4xl md:text-7xl font-serif text-white font-light tracking-tight leading-[1.15] drop-shadow-lg max-w-4xl">
              {SLIDES[current].title}
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base font-light text-white/70 max-w-xl leading-relaxed tracking-wide drop-shadow-md">
              {SLIDES[current].desc}
            </p>

            {/* Explore Project CTA Link */}
            <a
              href="/du-an"
              className="group pointer-events-auto mt-6 flex items-center gap-6 text-white/80 hover:text-white transition-colors duration-300"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Xem Bộ Sưu Tập</span>
              <span className="w-12 h-px bg-white/30 group-hover:bg-white group-hover:w-20 transition-all duration-500" />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Slide Pagination Progress Indicators (HBA inspired) ── */}
      <div className="absolute bottom-16 left-8 right-8 md:left-24 md:right-24 z-20 grid grid-cols-4 gap-4 md:gap-8">
        {SLIDES.map((slide, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className="flex flex-col text-left focus:outline-none group pb-2 border-t border-white/10 pt-4"
          >
            {/* Slide Index & Short Title */}
            <span className="text-[9px] tracking-widest text-white/30 group-hover:text-white/60 transition-colors uppercase font-medium">
              0{idx + 1}
            </span>
            <span className="text-[10px] md:text-xs tracking-wider text-white/50 group-hover:text-white transition-colors uppercase font-light hidden sm:block mt-1">
              {slide.title.split(" ").slice(0, 3).join(" ")}
            </span>

            {/* Filling Progress Line Indicator */}
            <div className="w-full h-[1.5px] bg-white/15 relative mt-3 overflow-hidden">
              {idx === current && (
                <motion.div
                  key={current}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  className="h-full bg-primary absolute left-0 top-0"
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
