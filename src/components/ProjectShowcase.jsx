import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from '../../Dự án/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img2 from '../../Dự án/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import img3 from '../../Dự án/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';

const project = {
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

export default function ProjectShowcase() {
  const containerRef = useRef(null);

  // Framer Motion: Theo dõi tiến trình cuộn trên toàn bộ section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mờ dần ảnh nền chính khi cuộn, mô phỏng công thức của HBA (1 - 1.5 * progress)
  // Có nghĩa là ảnh sẽ mờ hoàn toàn (opacity = 0) khi thanh cuộn đạt mức 66%
  const mainImageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Hiện dần lớp gradient đen đè lên slides để chữ luôn dễ đọc khi cuộn
  // Mô phỏng công thức của HBA (1.25 * progress)
  const contentBgOpacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#091D1E]"
      // Đảm bảo chiều cao đủ lớn để cuộn các phần tử được ghim (sticky)
      style={{ minHeight: '300vh' }}
    >

      {/* ── Ảnh Nền Ghim Cố Định (Sticky Main Media) ── */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden pointer-events-none">
        <motion.img
          style={{ opacity: mainImageOpacity }}
          src={project.mainImage.src}
          alt={project.mainImage.alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Lớp gradient tĩnh hỗ trợ đọc chữ trên ảnh nền sáng */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 z-10" />
      </div>

      {/* ── Cụm Nội Dung Ghim Cố Định (Chữ ở tiền cảnh) ── */}
      {/* Âm margin -100vh để kéo toàn bộ cụm chữ đè hoàn toàn lên Ảnh Nền */}
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-start md:items-end justify-between px-8 md:px-16 pb-12 md:pb-16 z-30 pointer-events-none -mt-[100vh]">

        {/* Lớp Gradient động đổ bóng lên các slides trượt ngang qua */}
        <motion.div
          style={{ opacity: contentBgOpacity }}
          className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0"
        />

        {/* Trái: Tiêu đề và Nút */}
        <div className="relative z-10 flex flex-col items-start mt-auto">
          <h2
            className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-wide font-light leading-none drop-shadow-lg"
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

      {/* ── Slides Cuộn ── */}
      {/* Các slide này sẽ cuộn một cách tự nhiên đè lên phần nền và đổ bóng. 
          mt-[100vh] đảm bảo slide bắt đầu xuất hiện sau khi người dùng đã cuộn qua đúng 1 màn hình đầu tiên. */}
      <div className="relative z-20 w-full px-4 md:px-8 lg:px-12 mt-[100vh] pb-[20vh] pointer-events-none">
        <div className="flex flex-col gap-32 lg:gap-[25vh] w-full lg:w-[83.333333%] lg:ml-[8.333333%] pointer-events-auto">
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

    </section>
  );
}
