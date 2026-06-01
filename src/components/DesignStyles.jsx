"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Tạm thời lấy các ảnh từ KC Villa để demo, sau này thay bằng ảnh đúng phong cách
import imgJapandi from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import imgMidCentury from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';
import imgFarmhouse from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import imgWabiSabi from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg';
import imgModern from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';

const styles = [
  { id: 'japandi', title: 'Japandi', image: imgJapandi },
  { id: 'mid-century', title: 'Mid-century', image: imgMidCentury },
  { id: 'farmhouse', title: 'Farmhouse', image: imgFarmhouse },
  { id: 'wabi-sabi', title: 'Wabi-sabi', image: imgWabiSabi },
  { id: 'modern', title: 'Modern', image: imgModern },
];

export default function DesignStyles() {
  const [active, setActive] = useState(styles[0].id);

  return (
    <section id="design-styles" className="w-full bg-[#FAF7F2] text-secondary py-24 md:py-32" data-theme="light">

      <div className="px-8 md:px-16 mb-16">
        <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary border-b border-secondary/20 pb-2">
          Phong Cách Thiết Kế
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light mt-8">
          Định hình <br />Không gian
        </h2>
      </div>

      {/* Accordion Container */}
      <div className="w-full h-[60vh] md:h-[80vh] flex flex-col md:flex-row overflow-hidden border-y border-secondary/10">
        {styles.map((style) => {
          const isActive = active === style.id;

          return (
            <motion.div
              key={style.id}
              layout // Kích hoạt hiệu ứng biến đổi layout mượt mà
              onMouseEnter={() => setActive(style.id)}
              className="relative cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-secondary/10 last:border-0 flex items-end md:items-start"
              // Trên mobile: dãn chiều cao. Trên desktop: dãn chiều ngang.
              style={{
                flex: isActive ? 4 : 1, // Kích thước phình to khi active
                transition: "flex 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >

              {/* Ảnh nền */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 z-0"
                  >
                    <img
                      src={style.image.src || style.image}
                      alt={style.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Chữ đứng khi không active (Trên desktop) */}
              <div className={`hidden md:flex absolute inset-0 z-10 items-center justify-center transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-xl font-serif font-light uppercase tracking-widest text-secondary/60 -rotate-90 whitespace-nowrap">
                  {style.title}
                </span>
              </div>

              {/* Chữ khi active */}
              <div className={`relative z-20 p-6 md:p-12 w-full transition-opacity duration-500 delay-200 ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-0'}`}>
                {/* Trên mobile, luôn hiện chữ cho rõ */}
                <h3 className={`text-2xl md:text-5xl font-serif font-light text-surface ${!isActive && 'opacity-100 md:opacity-0'}`}>
                  {style.title}
                </h3>
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
