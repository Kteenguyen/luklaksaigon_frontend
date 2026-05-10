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

  // Framer Motion: track scroll progress over the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Fade out main image opacity when we reach the last 20% of the section
  const mainImageOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#091D1E]" 
      // Ensure section is tall enough to allow scrolling over the sticky elements
      style={{ minHeight: '300vh' }}
    >
      
      {/* ── Sticky Main Media (Background) ── */}
      <div className="sticky top-0 h-screen w-full z-0 overflow-hidden pointer-events-none">
        <motion.img 
          style={{ opacity: mainImageOpacity }}
          src={project.mainImage.src} 
          alt={project.mainImage.alt} 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 z-10" />
      </div>

      {/* ── Sticky Content Wrapper (Foreground text) ── */}
      {/* We offset it by -100vh so it completely overlaps the Sticky Main Media */}
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-start md:items-end justify-between px-8 md:px-16 pb-12 md:pb-16 z-20 pointer-events-none -mt-[100vh]">
        
        {/* Left Side: Title and Button */}
        <div className="flex flex-col items-start mt-auto">
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

        {/* Right Side: Details text */}
        <div className="flex flex-wrap gap-4 md:gap-8 text-[9px] md:text-[11px] text-white/70 uppercase tracking-[0.2em] mt-8 md:mt-0 pb-2">
          <span>{project.studio}</span>
          <span className="hidden md:inline">{project.type}</span>
          <span className="hidden md:inline">{project.location}</span>
          <span>{project.year}</span>
        </div>

      </div>

      {/* ── Scrolling Slides ── */}
      {/* These will scroll naturally over the sticky background. 
          mt-[100vh] ensures they start appearing after the user has scrolled exactly 1 screen. */}
      <div className="relative z-10 w-full px-4 md:px-16 mt-[100vh] pb-[20vh] pointer-events-none">
        <div className="flex flex-col items-center gap-16 md:gap-24 w-full max-w-5xl mx-auto pointer-events-auto">
          {project.slides.map((slide, i) => (
            <div key={i} className="w-full">
              <figure className="relative w-full aspect-[4/3] md:aspect-video overflow-hidden">
                <img 
                  src={slide.src} 
                  alt={slide.alt} 
                  className="w-full h-full object-cover rounded-sm shadow-2xl" 
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
