"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { stripHtml } from '../utils/helpers';
import img1 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img2 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import img3 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';

const defaultProject = {
  title: 'Biệt thự KC Villa',
  slug: 'biet-thu-kc-villa',
  category: 'Villa',
  area: '450m2',
  location: 'Đồng Nai',
  year: '2023',
  coverImg: img1,
  images: [img2, img3]
};

export default function ProjectShowcase({ project = defaultProject, isFirst = false, isLast = false }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background parallax and fade
  const mainImageOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const mainImageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Content readability overlay
  const contentBgOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  // Slides parallax (each slide moves at a different speed for depth)
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const parallaxTransforms = [y1, y2];

  // Safeguard images array
  const slides = project.images ? project.images.slice(0, 2) : [img2, img3];
  const coverSrc = project.coverImg ? (project.coverImg.src || project.coverImg) : img1;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-secondary"
      style={{ minHeight: '260vh' }}
      data-theme="dark"
    >
      {/* Smooth entry mask from preceding light section */}
      {isFirst && (
        <div className="absolute top-0 left-0 w-full h-[35vh] bg-gradient-to-b from-[#FAF7F2] to-transparent z-40 pointer-events-none" />
      )}

      {/* Smooth exit mask to succeeding light section */}
      {isLast && (
        <div className="absolute bottom-0 left-0 w-full h-[35vh] bg-gradient-to-t from-[#FAF7F2] to-transparent z-40 pointer-events-none" />
      )}

      {/* ── Layer 1: Background Cover Image ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
        <motion.img
          style={{ opacity: mainImageOpacity, scale: mainImageScale }}
          src={coverSrc}
          alt={stripHtml(project.title)}
          title={stripHtml(project.title)}
          className="absolute inset-0 w-full h-full object-cover transform-gpu"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />
      </div>

      {/* ── Layer 2: Parallax Side Images (Staggered Layout) ── */}
      <div className="relative z-20 w-full px-4 md:px-8 lg:px-24 pb-[20vh] pointer-events-none">
        <div className="flex flex-col gap-32 md:gap-[30vh] w-full pointer-events-auto pt-[40vh]">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              style={{ y: parallaxTransforms[i] || 0 }}
              className={`w-full md:w-[60%] lg:w-[50%] ${i % 2 === 0 ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}
            >
              <figure className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden shadow-2xl p-3 bg-white border border-neutral-100 rounded-none">
                <img
                  src={slide.src || slide}
                  alt={`${stripHtml(project.title)} details`}
                  title={`${stripHtml(project.title)} details`}
                  className="w-full h-full object-cover filter brightness-[0.8] hover:brightness-100 transition-all duration-700"
                />
              </figure>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Layer 3: Fixed Typography Overlay (HBA & Parallax Metadata) ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-start md:items-end justify-between px-8 md:px-24 pb-12 md:pb-24">

          <motion.div
            style={{ opacity: contentBgOpacity }}
            className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black via-black/60 to-transparent z-0"
          />

          {/* Left Text Block */}
          <div className="relative z-10 flex flex-col items-start mt-auto w-full md:w-[60%] p-4">
            <span className="text-primary text-xs md:text-sm tracking-[0.4em] uppercase mb-6 block font-medium">
              Dự án tiêu biểu
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white uppercase tracking-wide font-light leading-tight drop-shadow-2xl"
              dangerouslySetInnerHTML={{ __html: project.title }}
            />

            <Link
              href={`/du-an/${project.slug}`}
              className="group pointer-events-auto mt-10 flex items-center gap-6 text-white/85 hover:text-white transition-colors duration-300"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Khám phá chi tiết</span>
              <span className="w-16 h-px bg-white/30 group-hover:bg-white group-hover:w-24 transition-all duration-500" />
            </Link>
          </div>

          {/* Right Metadata Block (Note: Tên dự án, Loại hình, Diện tích) */}
          <div className="relative z-10 flex flex-col md:text-right gap-6 text-[10px] md:text-xs text-white/60 uppercase tracking-[0.2em] mt-16 md:mt-0 pb-2">
            <div>
              <span className="block text-white/30 mb-1 text-[9px]">Dự án</span>
              <span className="text-white/90 font-medium">{project.title}</span>
            </div>
            <div>
              <span className="block text-white/30 mb-1 text-[9px]">Loại hình</span>
              <span className="text-white/90">{project.category}</span>
            </div>
            <div>
              <span className="block text-white/30 mb-1 text-[9px]">Diện tích</span>
              <span className="text-white/90 text-primary font-medium">{project.area}</span>
            </div>
            {project.location && (
              <div>
                <span className="block text-white/30 mb-1 text-[9px]">Vị trí</span>
                <span className="text-white/90">{project.location}</span>
              </div>
            )}
          </div>

        </div>
      </div>

    </section>
  );
}
