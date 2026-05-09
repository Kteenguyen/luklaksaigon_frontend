import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RevealText from './RevealText';
import ParallaxImage from './ParallaxImage';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const headingOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);
  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section id="about" ref={containerRef} className="relative flex items-start w-full min-h-[200vh] bg-background text-secondary border-t border-secondary/10">
      {/* Sticky Column */}
      <div className="sticky top-0 h-screen flex flex-col justify-center w-full md:w-1/2 p-12 md:p-24 z-0 bg-background">
        <motion.div style={{ opacity: headingOpacity, scale: headingScale }}>
          <span className="text-xs tracking-[0.3em] uppercase text-primary block mb-6">Về chúng tôi</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-tight text-secondary">
            Triết lý <br/> & Tầm nhìn
          </h2>
        </motion.div>
      </div>

      {/* Scrolling Column */}
      <div className="w-full md:w-1/2 flex flex-col justify-start relative z-10 p-12 md:p-24 pt-[50vh] md:pt-[100vh] gap-32 bg-background">
        <RevealText className="flex flex-col gap-12 text-xl md:text-2xl text-text-main font-light leading-relaxed">
          <p>
            Luk Lak Design & Build đồng nghĩa với việc kiến tạo những không gian sống độc bản.
            Là đơn vị thiết kế và thi công nội thất uy tín, chúng tôi mang đến những giải pháp 
            thẩm mỹ và công năng vượt trội cho biệt thự cao cấp, căn hộ hạng sang và không gian thương mại.
          </p>
          <p>
            Triết lý của chúng tôi là sự giao thoa giữa chuẩn mực kiến trúc và nét chấm phá 
            nghệ thuật cá nhân hóa. Chúng tôi tin rằng sự sang trọng thực sự nằm ở cảm giác 
            chân thực của vật liệu, sự tinh tế của ánh sáng và dòng chảy tự nhiên của không gian.
          </p>
        </RevealText>
        
        <div className="overflow-hidden">
          <ParallaxImage 
            src="/about.jpg" 
            alt="Design Studio"
            className="w-full aspect-[4/5] bg-surface"
          />
        </div>

        <div className="pt-8 border-t border-secondary/10">
           <a href="#services" className="group inline-flex items-center text-xs tracking-[0.2em] uppercase text-secondary hover:text-primary transition-colors duration-300">
             <span className="mr-6">Khám phá dịch vụ</span>
             <div className="w-16 h-[1px] bg-secondary group-hover:bg-primary transition-colors duration-300 relative"></div>
           </a>
        </div>
      </div>
    </section>
  );
}
