"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { stripHtml } from '../utils/helpers';

export default function FeaturedHorizontalScroll({ projects, title = "Dự án Nổi bật", subtitle = "Realities" }) {
  const scrollRef = useRef(null);

  // Tổng số slide = 1 slide giới thiệu + N slide dự án
  const totalSlides = 1 + (projects ? projects.length : 0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(totalSlides - 1) * 100}vw`]);

  if (!projects || projects.length === 0) return null;

  return (
    <section ref={scrollRef} className="relative bg-secondary text-white" style={{ height: `${totalSlides * 100}vh` }} data-theme="dark">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-secondary">
        <motion.div style={{ x, width: `${totalSlides * 100}vw` }} className="flex h-full">

          {/* INTRO SLIDE */}
          <div className="w-screen h-screen flex-shrink-0 relative flex items-center justify-center px-8">
            <div className="absolute inset-0">
              <Image src={projects[0].coverImg || projects[0].mainImage?.src} fill className="object-cover filter brightness-[0.3] scale-105" alt="Cận cảnh thực tế các công trình kiến trúc cao cấp do Luklak thực hiện" title="Các dự án tiêu biểu của Luklak" unoptimized />
            </div>
            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <span className="text-primary text-xs md:text-sm tracking-[0.4em] uppercase mb-8 block font-medium">
                {subtitle}
              </span>
              <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-serif font-light leading-[1.18] tracking-tight uppercase mb-8">
                {title}
              </h2>
              <p className="mt-8 text-white/70 font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Những công trình thực tế mang đậm dấu ấn kiến trúc và kỹ thuật thi công vượt trội của Luklak Architects.
              </p>
              <div className="mt-20 text-white/30 text-xs tracking-[0.4em] uppercase animate-pulse">
                Scroll to explore
                <span className="inline-block ml-4 animate-[bounceX_2s_infinite]">→</span>
              </div>
            </div>
          </div>

          {/* PROJECT SLIDES */}
          {projects.map((project, idx) => {
            const isLeft = idx % 2 !== 0; // Đảo layout trái/phải để tránh nhàm chán

            return (
              <div key={idx} className="w-screen h-screen flex-shrink-0 relative flex items-center px-8 md:px-24">
                <Image src={project.coverImg || project.mainImage?.src} fill className="object-cover filter brightness-[0.8]" alt={stripHtml(project.title)} title={stripHtml(project.title)} unoptimized />

                {/* Gradient tạo tương phản cho chữ */}
                <div className={`absolute inset-0 bg-gradient-to-r ${isLeft ? 'from-secondary/80 via-secondary/40' : 'from-transparent via-secondary/40 to-secondary/80'} to-transparent pointer-events-none`} />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent pointer-events-none" />

                <div className={`relative z-10 w-full max-w-5xl flex flex-col ${isLeft ? 'ml-0 items-start text-left' : 'ml-auto mr-0 md:mr-16 items-end text-right'}`}>
                  <span className="text-primary text-sm tracking-[0.4em] mb-6 block drop-shadow-md font-medium uppercase">
                    0{idx + 1} — {project.status || project.category || project.type}
                  </span>
                  <h3
                    className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-8 text-white uppercase tracking-tight drop-shadow-lg leading-[1.1] whitespace-nowrap"
                    dangerouslySetInnerHTML={{ __html: project.title }}
                  />

                  <p className={`text-base md:text-lg font-light leading-relaxed text-white/90 drop-shadow-md mb-12 max-w-xl ${isLeft ? 'text-left' : 'text-right'}`}>
                    {project.overview || "Giai đoạn thi công hoàn thiện với độ chính xác cao, đảm bảo chất lượng và tiến độ cam kết."}
                  </p>

                  <div className={`flex gap-12 text-white/80 font-light text-xs tracking-widest uppercase mb-12 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                    <div className={isLeft ? 'text-left' : 'text-right'}>
                      <span className="block text-white/40 mb-2 text-[10px]">Location</span>
                      {project.location}
                    </div>
                    <div className={isLeft ? 'text-left' : 'text-right'}>
                      <span className="block text-white/40 mb-2 text-[10px]">Timeline</span>
                      {project.timeline || project.year || '2024'}
                    </div>
                  </div>

                  <Link href={`/thi-cong/${project.slug}`} className="inline-block border border-white/30 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors duration-500 backdrop-blur-sm bg-black/20">
                    Chi tiết dự án
                  </Link>
                </div>
              </div>
            )
          })}

        </motion.div>
      </div>
    </section>
  );
}
