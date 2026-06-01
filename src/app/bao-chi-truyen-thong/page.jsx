"use client";
import React from 'react';
import { motion } from 'framer-motion';
import HomeCTA from "../../components/HomeCTA";
import Footer from "../../components/Footer";
import { pressData } from "../../data/mockData";

export default function BaoChiTruyenThongPage() {
  return (
    <main className="bg-[#FBFAF5] min-h-screen text-secondary flex flex-col justify-between" data-theme="light">
      {/* Header Space */}
      <div className="w-full pt-40 pb-16 bg-[#FBFAF5] px-8 md:px-16 text-center">
        <div className="flex justify-center mb-16">
          <div className="border-t border-b border-secondary/20 py-3 px-8 text-xs tracking-[0.2em] font-medium text-secondary uppercase">
            BÁO CHÍ – TRUYỀN THÔNG
          </div>
        </div>
        <p className="text-secondary/70 font-light max-w-2xl mx-auto text-lg">
          Luklak Sài Gòn trên các mặt báo và kênh truyền thông uy tín, khẳng định vị thế và chất lượng thiết kế kiến trúc hàng đầu.
        </p>
      </div>

      {/* Grid Section */}
      <section className="w-full max-w-[120rem] mx-auto px-8 md:px-16 py-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {pressData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group"
            >
              {/* Image Container with aspect-[4/3] and hover effect */}
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative aspect-[4/3] w-full overflow-hidden mb-6 block rounded-sm bg-secondary/5"
              >
                <img
                  src={item.coverImg.src || item.coverImg}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </a>

              {/* Source Tag */}
              <span className="text-primary text-[10px] tracking-widest uppercase font-medium mb-2">
                {item.source}
              </span>

              {/* Title */}
              <h3 className="text-xl font-serif text-secondary leading-snug font-light mb-4 group-hover:text-primary transition-colors duration-300">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h3>

              {/* Link */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-medium text-secondary/60 group-hover:text-primary transition-colors duration-300 flex items-center mt-auto"
              >
                Xem chi tiết →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <div className="relative z-40 bg-secondary">
        <HomeCTA />
        <Footer />
      </div>
    </main>
  );
}
