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

  // Fade out background image when scrolling
  const mainImageOpacity = useTransform(scrollYProgress, [0, 0.66], [1, 0]);

  // Fade in dark gradient overlay so text remains readable
  const contentBgOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-secondary"
      style={{ minHeight: '300vh' }}
    >

      {/* ── Layer 1: Ảnh Nền (Z-index 0) ── */}
      {/* Nằm dưới cùng. Chiếm 100vh không gian thực trong flow. */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
        <motion.img
          style={{ opacity: mainImageOpacity }}
          src={project.mainImage.src}
          alt={project.mainImage.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 z-10" />
      </div>

      {/* ── Layer 2: Slides Cuộn (Z-index 20) ── */}
      {/* Tự động bắt đầu từ vị trí 100vh (ngay dưới Ảnh Nền). Trượt đè lên Ảnh Nền. */}
      <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 pb-[20vh] pointer-events-none">
        <div className="flex flex-col gap-32 lg:gap-[25vh] w-full lg:w-[83.333333%] lg:ml-[8.333333%] pointer-events-auto pt-[20vh]">
          {project.slides.map((slide, i) => (
            <div key={i} className="w-full">
              <figure className="relative w-full aspect-video overflow-hidden shadow-2xl rounded-sm">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>

      {/* ── Layer 3: Cụm Nội Dung Chữ (Z-index 30) ── */}
      {/* Bao phủ toàn bộ section bằng absolute, sau đó dùng sticky bên trong để luôn giữ chữ ở trên màn hình. */}
      {/* Nằm trên cùng, không bao giờ bị Slides che khuất! */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-30">
        <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-start md:items-end justify-between px-8 md:px-16 pb-12 md:pb-16">

          {/* Lớp Gradient động lót dưới chữ */}
          <motion.div
            style={{ opacity: contentBgOpacity }}
            className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0"
          />

          {/* Trái: Tiêu đề và Nút */}
          <div className="relative z-10 flex flex-col items-start mt-auto">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white tracking-wide font-light leading-tight drop-shadow-lg"
              dangerouslySetInnerHTML={{ __html: project.title }}
            />
            <a
              href={project.href}
              className="pointer-events-auto mt-6 md:mt-8 px-6 py-2 md:py-3 border border-white/50 rounded-full text-white text-[10px] md:text-sm tracking-widest hover:bg-white hover:text-[#091D1E] transition-colors duration-300"
            >
              VIEW PROJECTS
            </a>
          </div>

          {/* Phải: Chữ chi tiết */}
          <div className="relative z-10 flex flex-wrap gap-4 md:gap-8 text-[9px] md:text-[11px] text-white/70 uppercase tracking-[0.2em] mt-8 md:mt-0 pb-2">
            <span>{project.studio}</span>
            <span className="hidden md:inline">{project.type}</span>
            <span className="hidden md:inline">{project.location}</span>
            <span>{project.year}</span>
          </div>

        </div>
      </div>

    </section>
  );
}
