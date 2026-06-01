"use client";
import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import HomeContactForm from "./HomeContactForm";
import Footer from "./Footer";
import Image from 'next/image';
import Link from 'next/link';
import { stripHtml } from '../utils/helpers';
import { projectsData } from "../data/mockData";

export default function StyleTemplate({
  title,
  subtitle,
  heroImg,
  philosophyTitle,
  philosophyText,
  philosophyImg,
  traits,
  gallery,
  styleKeyword,
  accentColor = "text-primary",
  accentBg = "bg-primary/5"
}) {
  const [hoveredProject, setHoveredProject] = useState(null);
  const scrollRef = useRef(null);

  const totalSlides = 1 + (traits ? traits.length : 0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(totalSlides - 1) * 100}vw`]);

  const styleProjects = projectsData.filter(p =>
    styleKeyword && p.style && p.style.toLowerCase().includes(styleKeyword.toLowerCase())
  ).slice(0, 4);

  return (
    <main className="bg-background min-h-screen flex flex-col font-sans selection:bg-primary/20 text-white">

      {/* 1. HERO BANNER */}
      <section className="relative w-full h-screen flex flex-col justify-end pb-32 px-6 md:px-16 overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={heroImg}
            alt={stripHtml(title)}
            title={stripHtml(title)}
            fill
            className="object-cover filter brightness-[0.7] scale-[1.02]"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-[100rem] mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`${accentColor} text-xs md:text-sm tracking-[0.4em] uppercase mb-8 block font-medium`}
          >
            Kiến trúc phong cách
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-[9rem] font-serif font-light text-white uppercase leading-[1.18] tracking-tight pb-2"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/80 font-light text-lg md:text-xl mt-8 max-w-2xl leading-relaxed italic"
          >
            "{subtitle}"
          </motion.p>
        </div>
      </section>

      {/* 2. CINEMATIC FULL-SCREEN SCROLL (Sáng sủa, chữ thanh lịch) */}
      <section ref={scrollRef} className="relative bg-black" style={{ height: `${totalSlides * 100}vh` }}>
        <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-black">
          <motion.div style={{ x, width: `${totalSlides * 100}vw` }} className="flex h-full">

            {/* SLIDE 1: PHILOSOPHY */}
            <div className="w-screen h-screen flex-shrink-0 relative flex items-end pb-24 md:pb-32 px-8 md:px-24">
              {/* Ảnh sáng sủa, không phủ đen kịt */}
              <Image src={philosophyImg} fill className="object-cover" alt={`Triết lý thiết kế phong cách kiến trúc ${stripHtml(title)} của Luklak`} title={`Triết lý thiết kế phong cách ${stripHtml(title)}`} unoptimized />

              {/* Soft gradient chỉ ở phần chữ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-32 items-end">
                <div className="w-full md:w-1/2">
                  <span className={`${accentColor} text-xs tracking-[0.3em] uppercase mb-6 block drop-shadow-md`}>Triết lý thiết kế</span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-8 text-white drop-shadow-lg leading-tight">
                    {philosophyTitle}
                  </h2>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-6 text-white/90 drop-shadow-md max-h-[60vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary/20 hover:scrollbar-thumb-primary/40">
                  {philosophyText && philosophyText.map((p, i) => (
                    <p key={i} className={`text-base md:text-lg font-light leading-relaxed ${i === 0 ? 'italic text-xl md:text-2xl mb-4' : ''}`}>
                      {i === 0 ? `"${p}"` : p}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* SLIDE 2..N: TRAITS */}
            {traits && traits.map((trait, idx) => {
              const bgImg = gallery && gallery.length > 0 ? gallery[idx % gallery.length] : philosophyImg;

              // Bố cục bất đối xứng để tránh giống PowerPoint
              const isLeft = idx % 2 === 0;

              return (
                <div key={idx} className="w-screen h-screen flex-shrink-0 relative flex items-center px-8 md:px-32">
                  <Image src={bgImg} fill className="object-cover" alt={stripHtml(trait.title)} title={stripHtml(trait.title)} unoptimized />

                  {/* Gradient hỗ trợ đọc chữ, thay đổi theo trái/phải */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${isLeft ? 'from-black/80 via-black/30' : 'from-transparent via-black/30 to-black/80'} to-transparent pointer-events-none`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  <div className={`relative z-10 w-full max-w-2xl ${isLeft ? 'ml-0' : 'ml-auto mr-0 md:mr-16'}`}>
                    <span className={`${accentColor} text-sm tracking-[0.4em] mb-4 block drop-shadow-md font-medium`}>
                      0{idx + 1}
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-8 text-white uppercase tracking-tight drop-shadow-lg">
                      {trait.title}
                    </h3>
                    <div className="w-12 h-[1px] bg-white/50 mb-8 drop-shadow-sm"></div>
                    <p className="text-base md:text-lg font-light leading-relaxed text-white/90 drop-shadow-md">
                      {trait.desc}
                    </p>
                  </div>
                </div>
              )
            })}

          </motion.div>
        </div>
      </section>

      {/* 3. PROJECTS: HOVER REVEAL */}
      {styleProjects && styleProjects.length > 0 && (
        <section className="py-24 md:py-32 bg-black relative overflow-hidden group/section">

          <AnimatePresence>
            {hoveredProject && (
              <motion.div
                key={hoveredProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 z-0 pointer-events-none"
              >
                <Image
                  src={hoveredProject.coverImg}
                  alt={stripHtml(hoveredProject.title)}
                  title={stripHtml(hoveredProject.title)}
                  fill
                  className="object-cover filter brightness-[0.6]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-16 flex flex-col items-center">
            <span className={`text-[10px] md:text-xs tracking-[0.4em] uppercase mb-20 block transition-colors duration-500 ${hoveredProject ? 'text-white/80' : accentColor}`}>
              Dự án tiêu biểu
            </span>

            <div className="flex flex-col w-full border-t border-white/10">
              {styleProjects.map((project, i) => (
                <Link
                  href={`/du-an/${project.slug}`}
                  key={project.id}
                  onMouseEnter={() => setHoveredProject(project)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="relative py-8 md:py-12 border-b border-white/10 w-full group transition-colors duration-500"
                >
                  <div className={`flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-500 ${hoveredProject ? (hoveredProject.id === project.id ? 'text-white' : 'text-white/30') : 'text-white/90'}`}>
                    <span className="text-xs md:text-sm tracking-[0.2em] uppercase opacity-60 hidden md:block w-1/5 text-left">
                      {project.category === 'Building' ? 'Tòa nhà' : project.category}
                    </span>

                    <h3 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light uppercase tracking-tight text-center flex-1 group-hover:scale-[1.03] transition-transform duration-500">
                      {project.title}
                    </h3>

                    <span className="text-xs md:text-sm tracking-[0.2em] uppercase opacity-60 hidden md:block w-1/5 text-right">
                      {project.year || "2024"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-24">
              <Link href="/du-an" className={`text-xs uppercase tracking-[0.3em] transition-all border-b pb-2 inline-block ${hoveredProject ? 'text-white border-white/50 hover:border-white' : 'text-white/50 border-white/20 hover:text-white hover:border-white/50'}`}>
                Khám phá tất cả dự án
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 4. Contact CTA */}
      <div className="relative z-40 bg-secondary text-primary">
        <HomeContactForm />
        <Footer />
      </div>
    </main>
  );
}
