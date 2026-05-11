"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedDesignStack({ projects }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  if (!projects || projects.length === 0) return null;

  return (
    <section ref={containerRef} className="relative w-full bg-black">
      {/* Intro Header */}
      <div className="w-full text-center py-24 md:py-32 bg-secondary sticky top-0 z-0">
        <span className="text-primary text-xs md:text-sm tracking-[0.4em] uppercase mb-6 block font-medium">
          Design Excellence
        </span>
        <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-light text-white leading-tight uppercase">
          Dự án <span className="italic text-primary">Thiết kế</span>
        </h2>
      </div>

      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        const range = [i * (1 / projects.length), 1];

        return (
          <Card
            key={i}
            i={i}
            project={project}
            progress={scrollYProgress}
            range={range}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}

const Card = ({ project, i, progress, range, targetScale }) => {
  const containerRef = useRef(null);

  // Scale down and dim when the next cards overlap this one
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, range, [1, 0.3]);
  const y = useTransform(progress, range, [0, 50]); // Tùy chọn: đẩy nhẹ xuống để tăng độ sâu parallax

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center justify-center sticky top-0 overflow-hidden shadow-2xl">
      <motion.div
        style={{ scale, opacity, y }}
        className="relative w-full h-full origin-top flex flex-col justify-end"
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={project.coverImg || project.mainImage?.src}
            fill
            alt="Featured Design"
            className="object-cover filter brightness-[0.7]"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 w-full max-w-[100rem] mx-auto pb-16 md:pb-24 px-8 md:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-white/20 pb-10 mb-8">
            <div className="max-w-4xl">
              <span className="text-primary text-xs md:text-sm tracking-[0.4em] uppercase mb-6 block font-medium">
                0{i + 1} — {project.type || "Kiến trúc & Nội thất"}
              </span>
              <h3
                className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-light leading-[0.9] tracking-tighter uppercase text-white drop-shadow-2xl"
                dangerouslySetInnerHTML={{ __html: project.title }}
              />
            </div>

            <div className="flex flex-col gap-6 text-white/80 font-light text-xs tracking-widest uppercase md:text-right">
              <div>
                <span className="block text-white/40 mb-1 text-[10px]">Studio</span>
                {project.studio || "Luk Lak Sài Gòn"}
              </div>
              <div>
                <span className="block text-white/40 mb-1 text-[10px]">Location</span>
                {project.location}
              </div>
              <div>
                <span className="block text-white/40 mb-1 text-[10px]">Year</span>
                {project.year || "2024"}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <p className="text-white/70 font-light max-w-2xl text-sm md:text-base leading-relaxed">
              Một tác phẩm thiết kế mang đậm tính đương đại, chú trọng vào sự cân bằng giữa ánh sáng tự nhiên, tỉ lệ không gian và triết lý sống nguyên bản.
            </p>
            <Link href={project.href || "#"} className="border border-white/30 px-10 py-5 text-xs tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md bg-black/10 flex-shrink-0">
              Khám phá tác phẩm
            </Link>
          </div>
        </div>

      </motion.div>
    </div>
  )
}
