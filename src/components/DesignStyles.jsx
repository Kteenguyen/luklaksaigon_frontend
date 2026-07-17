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
  { 
    id: 'japandi', 
    title: 'Japandi', 
    image: imgJapandi,
    desc: 'Sự kết hợp tinh tế giữa nét ấm cúng của phong cách Bắc Âu (Scandinavian) và vẻ tối giản thanh tao từ Nhật Bản.',
    details: ['Tối giản', 'Vật liệu tự nhiên', 'Tông màu đất']
  },
  { 
    id: 'mid-century', 
    title: 'Mid-century', 
    image: imgMidCentury,
    desc: 'Cảm hứng từ những năm 1950 với các đường nét gãy gọn, phom dáng hình học phóng khoáng và sự hòa quyện tuyệt vời với thiên nhiên.',
    details: ['Công năng', 'Hình khối hình học', 'Màu sắc Retro']
  },
  { 
    id: 'farmhouse', 
    title: 'Farmhouse', 
    image: imgFarmhouse,
    desc: 'Không gian mộc mạc mang hơi thở điền viên thanh bình, kết hợp các chi tiết gỗ thô mộc, vải dệt tự nhiên và nét kiến trúc truyền thống.',
    details: ['Mộc mạc', 'Thanh bình', 'Ấm áp']
  },
  { 
    id: 'wabi-sabi', 
    title: 'Wabi-sabi', 
    image: imgWabiSabi,
    desc: 'Triết lý thẩm mỹ tìm kiếm vẻ đẹp trong những điều không hoàn hảo, đề cao sự vô thường, thô mộc và dòng chảy tự nhiên của thời gian.',
    details: ['Thô mộc', 'Bất đối xứng', 'Vô thường']
  },
  { 
    id: 'modern', 
    title: 'Modern', 
    image: imgModern,
    desc: 'Đột phá với ngôn ngữ thiết kế đương đại phẳng phiu, tối giản chi tiết thừa, tập trung vào đường thẳng và không gian mở ngập tràn ánh sáng.',
    details: ['Đương đại', 'Không gian mở', 'Tối giản chi tiết']
  },
];

export default function DesignStyles() {
  const [active, setActive] = useState(styles[0].id);
  const activeStyle = styles.find(s => s.id === active) || styles[0];

  return (
    <section id="design-styles" className="w-full bg-[#FAF7F2] text-secondary py-20 md:py-32" data-theme="light">

      <div className="px-8 md:px-16 mb-12 md:mb-16">
        <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary border-b border-secondary/20 pb-2">
          Phong Cách Thiết Kế
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light mt-8">
          Định hình <br />Không gian
        </h2>
      </div>

      {/* ── MOBILE VIEW: Vertical Editorial Feed (md:hidden) ── */}
      <div className="block md:hidden px-6 space-y-6">
        {styles.map((style) => (
          <div 
            key={style.id}
            className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-xl bg-[#0e0e0d] border border-secondary/5"
          >
            {/* Background Image */}
            <img
              src={style.image.src || style.image}
              alt={style.title}
              className="w-full h-full object-cover"
            />
            {/* Dark Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

            {/* Card Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 text-white">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                {style.details.map((detail, idx) => (
                  <span 
                    key={idx} 
                    className="text-[8px] uppercase tracking-widest bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/5 font-sans font-light"
                  >
                    {detail}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif font-light mb-2">
                {style.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] text-white/60 font-light leading-relaxed mb-4 font-sans max-w-xs">
                {style.desc}
              </p>

              {/* Link CTA */}
              <div>
                <a 
                  href="#projects" 
                  className="inline-flex items-center gap-1.5 text-[9px] tracking-[0.25em] uppercase font-medium text-primary hover:text-white transition-colors duration-300"
                >
                  XEM DỰ ÁN TIÊU BIỂU
                  <span className="text-xs">&rarr;</span>
                </a>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* ── DESKTOP VIEW: Custom Horizontal Accordion (hidden md:flex) ── */}
      <div className="hidden md:flex w-full h-[70vh] md:h-[80vh] overflow-hidden border-y border-secondary/10">
        {styles.map((style) => {
          const isActive = active === style.id;

          return (
            <motion.div
              key={style.id}
              layout // Kích hoạt hiệu ứng biến đổi layout mượt mà
              onMouseEnter={() => setActive(style.id)}
              className="relative cursor-pointer overflow-hidden border-r border-secondary/10 last:border-0 flex items-start"
              style={{
                flex: isActive ? 3 : 1, // Kích thước phình to khi active
                transition: "flex 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >

              {/* Ảnh nền */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
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
              <div className={`flex absolute inset-0 z-10 items-center justify-center transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                <span className="text-xl font-serif font-light uppercase tracking-widest text-secondary/60 -rotate-90 whitespace-nowrap">
                  {style.title}
                </span>
              </div>

              {/* Chữ khi active */}
              <div className={`relative z-20 p-12 w-full transition-opacity duration-500 delay-200 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-5xl font-serif font-light text-white">
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
