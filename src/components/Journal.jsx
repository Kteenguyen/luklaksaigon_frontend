"use client";
﻿import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Mock Data
import img1 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img2 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import img3 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';
import img4 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg';

const posts = [
  { id: 1, title: 'Xu hướng thiết kế Japandi lên ngôi 2025', date: '20 Thg 5, 2025', category: 'Xu hướng', img: img1 },
  { id: 2, title: 'Bí quyết tối ưu ánh sáng tự nhiên cho nhà phố', date: '15 Thg 5, 2025', category: 'Kiến thức', img: img2 },
  { id: 3, title: 'Cách chọn vật liệu Wabi-sabi chuẩn gu', date: '10 Thg 5, 2025', category: 'Vật liệu', img: img3 },
  { id: 4, title: 'Biệt thự thông minh và những giải pháp IoT', date: '05 Thg 5, 2025', category: 'Công nghệ', img: img4 },
  { id: 5, title: 'Nghệ thuật sắp đặt ánh sáng trong phòng ngủ', date: '01 Thg 5, 2025', category: 'Kiến thức', img: img1 },
];

export default function Journal() {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="w-full bg-background text-secondary py-24 md:py-32 overflow-hidden">
      <div className="pl-8 md:pl-16 mb-16 md:mb-24 flex justify-between items-end pr-8 md:pr-16">
        <div>
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary border-b border-secondary/20 pb-2">
            Tạp chí
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light mt-8">
            Tin Tức & <br />Cảm Hứng
          </h2>
        </div>

        <div className="hidden md:block text-xs uppercase tracking-widest text-secondary/50">
          (Kéo để xem thêm &rarr;)
        </div>
      </div>

      {/* Draggable Carousel */}
      <motion.div ref={carouselRef} className="cursor-grab active:cursor-grabbing overflow-hidden pl-8 md:pl-16">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -carouselWidth - 100 }}
          className="flex gap-8"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="min-w-[300px] md:min-w-[450px] flex flex-col group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={post.img.src || post.img}
                  alt={post.title}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </div>

              <div className="flex items-center gap-4 text-[10px] md:text-xs uppercase tracking-widest text-secondary/50 mb-4">
                <span>{post.category}</span>
                <span className="w-1 h-1 bg-secondary/30 rounded-full" />
                <span>{post.date}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-light text-secondary group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
