"use client";
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import imgHien from "../assets/hr/Khúc Văn Hiển_Giám đốc Luklak Sài Gòn.webp";
import imgToan from "../assets/hr/NGuyễn Thế Toàn_Chủ trì dự án.png";
import imgPhuc from "../assets/hr/Hoàng Phúc_xxx.png";
import imgHung from "../assets/hr/Hưng lê__.png";

const leaders = [
  {
    id: 1,
    name: "Khúc Văn Hiển",
    role: "Giám đốc Luklak Sài Gòn",
    location: "LUKLAK | SAIGON",
    image: imgHien,
  },
  {
    id: 2,
    name: "Nguyễn Thế Toàn",
    role: "Chủ trì thiết kế",
    location: "LUKLAK | SAIGON",
    image: imgToan,
  },
  {
    id: 3,
    name: "Hoàng Phúc",
    role: "Kiến trúc sư dự án",
    location: "LUKLAK | SAIGON",
    image: imgPhuc,
  },
  {
    id: 4,
    name: "Hưng Lê",
    role: "Kỹ sư trưởng thi công",
    location: "LUKLAK | SAIGON",
    image: imgHung,
  },
  {
    id: 5,
    name: "Khúc Văn Hiển",
    role: "Partner & Co-Founder",
    location: "LUKLAK | SAIGON",
    image: imgHien,
  },
  {
    id: 6,
    name: "Nguyễn Thế Toàn",
    role: "Giám đốc sáng tạo",
    location: "LUKLAK | SAIGON",
    image: imgToan,
  },
];

export default function LeadershipPreview() {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visibleRatio, setVisibleRatio] = useState(0.25);
  const [isDragging, setIsDragging] = useState(false);

  const isDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(0);
      setVisibleRatio(1);
      return;
    }
    setScrollProgress(container.scrollLeft / maxScroll);
    setVisibleRatio(container.clientWidth / container.scrollWidth);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      // Initial check after render
      const timer = setTimeout(handleScroll, 150);
      window.addEventListener('resize', handleScroll);
      return () => {
        container.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.6;
    const target = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    container.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  };

  const handleMouseDown = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDown.current = true;
    setIsDragging(true);
    startX.current = e.pageX - container.offsetLeft;
    startScrollLeft.current = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    isDown.current = false;
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag sensitivity
    container.scrollLeft = startScrollLeft.current - walk;
  };

  return (
    <section className="w-full bg-[#FAF7F2] text-secondary py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-secondary/5" data-theme="light">
      {/* Scope a style block to hide scrollbars cleanly cross-browser */}
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 items-stretch">
        
        {/* Left Column: Heading and Custom Navigation Controls */}
        <div className="w-full md:w-[260px] lg:w-[320px] flex-shrink-0 flex flex-col justify-between py-2">
          <div>
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4 block font-medium">
              Ban Điều Hành
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-serif font-light text-secondary uppercase leading-[1.1] tracking-tight">
              Leadership<br />team
            </h2>
          </div>

          {/* Nav arrows positioned at bottom of left column on desktop, side-by-side on mobile */}
          <div className="flex gap-3 mt-8 md:mt-auto">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 cursor-pointer"
              aria-label="Scroll left"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-secondary/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300 cursor-pointer"
              aria-label="Scroll right"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column: Horizontal scroll container and scroll indicator */}
        <div className="flex-grow overflow-hidden flex flex-col justify-between">
          
          {/* Scrollable grid of leaders */}
          <div 
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className={`flex gap-6 overflow-x-auto no-scrollbar pb-4 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            {leaders.map((leader, index) => (
              <div 
                key={`${leader.id}-${index}`}
                className="w-[240px] md:w-[280px] lg:w-[320px] flex-shrink-0 group cursor-pointer"
              >
                <figure className="relative aspect-[3/4] overflow-hidden bg-secondary/5 rounded-sm">
                  <img
                    src={leader.image.src || leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[800ms] ease-out transform group-hover:scale-[1.02]"
                  />
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </figure>
                
                {/* Meta details */}
                <div className="mt-4">
                  <span className="text-[9px] md:text-[10px] tracking-[0.2em] text-secondary/40 uppercase block font-medium">
                    {leader.location}
                  </span>
                  <h3 className="text-base md:text-lg font-serif text-secondary mt-1 font-light block leading-tight group-hover:text-primary transition-colors duration-300">
                    {leader.name}
                  </h3>
                  <p className="text-xs md:text-sm text-secondary/50 font-light mt-0.5 block">
                    {leader.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Premium Scroll Progress Ticker */}
          <div className="relative w-full h-[1px] bg-secondary/10 mt-6 md:mt-10 overflow-hidden">
            <div 
              className="absolute top-0 h-full bg-secondary/60 transition-all duration-75"
              style={{ 
                width: `${visibleRatio * 100}%`,
                left: `${scrollProgress * (1 - visibleRatio) * 100}%`
              }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
