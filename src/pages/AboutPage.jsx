import React from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/hr/Khúc Văn Hiển_Giám đốc Luklak Sài Gòn.webp';
import img2 from '../assets/hr/NGuyễn Thế Toàn_Chủ trì dự án.png';

const ScrollReveal = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <section className="w-full min-h-screen px-8 md:px-16 py-32 bg-[#F9F8F5] text-[#2D2C2A]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 relative w-full items-start">
        
        {/* Left Column - The Sticky Anchor (Span 5) */}
        <div className="md:col-span-5 sticky top-32 flex flex-col justify-start">
          <h2 className="text-6xl md:text-[8vw] font-serif leading-[0.8] tracking-tighter uppercase">
            WHO WE ARE
          </h2>
        </div>

        {/* Right Column - The Scrolling Content (Span 7) */}
        <div className="md:col-span-7 flex flex-col gap-24 mt-24 md:mt-0">
          
          <ScrollReveal>
            <p className="text-lg md:text-2xl font-sans font-light leading-relaxed max-w-2xl">
              Luk Lak Design & Build đồng nghĩa với việc kiến tạo những không gian sống độc bản. 
              Là đơn vị thiết kế và thi công nội thất uy tín, chúng tôi mang đến những giải pháp thẩm mỹ 
              và công năng vượt trội cho biệt thự cao cấp, căn hộ hạng sang và không gian thương mại.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-hidden w-full h-[60vh] relative mt-16">
              <motion.img 
                src={img1} 
                alt="Khúc Văn Hiển - Giám đốc" 
                className="w-full h-full object-cover origin-center"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-lg md:text-2xl font-sans font-light leading-relaxed max-w-2xl">
              Triết lý của chúng tôi là sự giao thoa giữa chuẩn mực kiến trúc và nét chấm phá nghệ thuật cá nhân hóa. 
              Chúng tôi tin rằng sự sang trọng thực sự nằm ở cảm giác chân thực của vật liệu, sự tinh tế của ánh sáng 
              và dòng chảy tự nhiên của không gian.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-hidden w-full h-[60vh] relative mt-16 flex justify-end">
               <motion.img 
                src={img2} 
                alt="Nguyễn Thế Toàn - Chủ trì dự án" 
                className="w-full h-full object-cover origin-center md:w-[85%]"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
