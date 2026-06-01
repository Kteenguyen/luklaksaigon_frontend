"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg';
import img2 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';

// Component Text Scrubbing: Mờ -> Sáng khi cuộn chuột
function ScrubbingText({ text }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"] // Bắt đầu sáng khi vào khung hình, sáng hết khi tới giữa màn
  });

  const words = text.split(" ");
  return (
    <p ref={container} className="flex flex-wrap text-3xl md:text-5xl lg:text-6xl font-serif font-light leading-snug text-secondary tracking-wide">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        return (
          <motion.span key={i} style={{ opacity }} className="mr-[0.25em] mb-[0.1em]">
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#FAF7F2] text-secondary py-36 md:py-56 px-8 md:px-24 overflow-hidden" data-theme="light">
      
      <div className="max-w-[90rem] mx-auto">
        {/* HBA-style Mini Section Header */}
        <div className="mb-20 md:mb-32">
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary border-b border-secondary/15 pb-2 font-medium">
            Về chúng tôi &mdash; LUKLAK Sài Gòn
          </span>
        </div>

        {/* Text Scrubbing (Main Slogan Section with extreme serif beauty) */}
        <div className="w-full lg:w-11/12 mb-32">
          <ScrubbingText text="Luklak Architects Sài Gòn — Kiến tạo không gian sống nghệ thuật độc bản mang đậm dấu ấn cá nhân và giá trị trường tồn." />
        </div>

        {/* Grid Layout inspired by Hirsch Bedner Associates */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Asymmetric Overlapping Images */}
          <div className="w-full lg:col-span-5 flex flex-col gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/5] overflow-hidden rounded-sm bg-secondary/5 shadow-2xl p-2 md:p-3 bg-white"
            >
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src={img1.src || img1} 
                alt="Architecture details by Luklak" 
                className="w-full h-full object-cover filter grayscale-[10%]"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-4/5 ml-auto aspect-square overflow-hidden rounded-sm -mt-20 relative z-10 shadow-2xl p-2 md:p-3 bg-white"
            >
              <motion.img 
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src={img2.src || img2} 
                alt="Interior details by Luklak" 
                className="w-full h-full object-cover filter grayscale-[10%]"
              />
            </motion.div>
          </div>

          {/* Right Side: Philosophy & Values with generous whitespace */}
          <div className="w-full lg:col-span-7 flex flex-col gap-16 lg:pl-12 pt-6">
            <div className="flex flex-col gap-8">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-xl md:text-2xl font-serif font-light text-secondary/80 leading-relaxed italic"
              >
                “Không gian sống ảnh hưởng trực tiếp đến cảm xúc, thế giới tinh thần và chất lượng sống bền vững của mỗi người.”
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-base md:text-lg font-light text-secondary/60 leading-relaxed"
              >
                Thành lập vào năm 2025, Luklak Architects Sài Gòn tự hào là đơn vị thiết kế – thi công kiến trúc &amp; nội thất cao cấp mang đến các giải pháp độc bản. Bằng việc cân bằng hoàn hảo các yếu tố tự nhiên và nhân tạo, mỗi công trình là một tác phẩm được thổi hồn riêng biệt.
              </motion.p>
            </div>

            {/* Core Values grid with luxury layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-secondary/10 pt-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-4"
              >
                <h3 className="text-lg font-serif tracking-wider text-primary font-medium uppercase text-xs">Giá trị cốt lõi</h3>
                <p className="text-sm text-secondary/60 font-light leading-relaxed">
                  Thiết kế tùy biến chuyên sâu theo phong cách sống của gia chủ. Sử dụng vật liệu cao cấp chuẩn sinh thái và bền bỉ theo thời gian.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col gap-4"
              >
                <h3 className="text-lg font-serif tracking-wider text-primary font-medium uppercase text-xs">Giải pháp tối ưu</h3>
                <p className="text-sm text-secondary/60 font-light leading-relaxed">
                  Quy trình trọn gói khép kín từ bản vẽ thiết kế mỹ thuật đến sản xuất trực tiếp và giám sát thi công đạt độ thẩm mỹ chuẩn chỉ.
                </p>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
