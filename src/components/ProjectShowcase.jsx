"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img2 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import img3 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';

const defaultProject = {
  title: 'Luk Lak <br/> Design & Build.',
  href: '#',
  studio: 'LUK LAK DA NANG',
  type: 'ARCHITECTURE',
  location: 'INTERIOR',
  year: '2024',
  mainImage: {
    src: img1,
    alt: 'KC Villa',
  },
  slides: [
    {
      src: img2,
      alt: 'KC Villa — Phòng khách',
    },
    {
      src: img3,
      alt: 'KC Villa — Ngoại thất',
    },
  ],
};

export default function ProjectShowcase({ project = defaultProject }) {
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

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-secondary"
      style={{ minHeight: '300vh' }}
    >

      {/* ── Layer 1: Ảnh Nền (Z-index 0) ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
        <motion.img
          style={{ opacity: mainImageOpacity, scale: mainImageScale }}
          src={project.mainImage.src.src || project.mainImage.src}
          alt={project.mainImage.alt}
          className="absolute inset-0 w-full h-full object-cover transform-gpu"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10" />
      </div>

      {/* ── Layer 2: Slides Cuộn (Z-index 20) ── */}
      <div className="relative z-20 w-full px-4 md:px-8 lg:px-16 pb-[20vh] pointer-events-none">
        <div className="flex flex-col gap-32 md:gap-[30vh] w-full pointer-events-auto pt-[40vh]">
          {project.slides.map((slide, i) => (
            <motion.div
              key={i}
              style={{ y: parallaxTransforms[i] }}
              className={`w-full md:w-[75%] ${i % 2 === 0 ? 'ml-auto mr-0' : 'mr-auto ml-0'}`}
            >
              <figure className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden shadow-2xl">
                <img
                  src={slide.src.src || slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover filter brightness-[0.8] hover:brightness-100 hover:scale-105 transition-all duration-700"
                />
              </figure>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Layer 3: Cụm Nội Dung Chữ (Z-index 30) ── */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-start md:items-end justify-between px-8 md:px-16 pb-12 md:pb-20">

          <motion.div
            style={{ opacity: contentBgOpacity }}
            className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black via-black/60 to-transparent z-0"
          />

          <div className="relative z-10 flex flex-col items-start mt-auto w-full md:w-[70%] lg:w-[80%] p-4">
            <span className="text-[#D4AF37] text-xs md:text-sm tracking-[0.4em] uppercase mb-8 block font-medium">
              Featured Design
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white uppercase tracking-wide font-light leading-tight drop-shadow-2xl"
              dangerouslySetInnerHTML={{ __html: project.title }}
            />

            <a
              href={project.href}
              className="group pointer-events-auto mt-12 flex items-center gap-6 text-white/80 hover:text-white transition-colors duration-300"
            >
              <span className="text-xs uppercase tracking-[0.3em] font-medium">Khám phá dự án</span>
              <span className="w-16 h-px bg-white/30 group-hover:bg-white group-hover:w-24 transition-all duration-500" />
            </a>
          </div>

          <div className="relative z-10 flex flex-col md:text-right gap-6 text-[10px] md:text-xs text-white/60 uppercase tracking-[0.2em] mt-16 md:mt-0 pb-2">
            <div>
              <span className="block text-white/30 mb-1 text-[9px]">Studio</span>
              <span className="text-white/90">{project.studio}</span>
            </div>
            <div>
              <span className="block text-white/30 mb-1 text-[9px]">Type</span>
              <span className="text-white/90">{project.type}</span>
            </div>
            <div>
              <span className="block text-white/30 mb-1 text-[9px]">Location</span>
              <span className="text-white/90">{project.location}</span>
            </div>
            <div>
              <span className="block text-white/30 mb-1 text-[9px]">Year</span>
              <span className="text-white/90">{project.year}</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
