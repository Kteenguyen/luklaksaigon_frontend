"use client";
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogData } from '../data/mockData';

export default function Journal() {
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselRef.current) {
      setCarouselWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  if (!blogData || blogData.length === 0) return null;

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
          {blogData.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="min-w-[300px] md:min-w-[450px] flex flex-col group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm mb-6">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src={post.coverImg?.src || post.coverImg}
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
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
