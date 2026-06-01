"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import HomeContactForm from "../../components/HomeContactForm";
import Footer from "../../components/Footer";
import { hoatDongData } from "../../data/mockData";

export default function HoatDongPage() {
  const [activeTab, setActiveTab] = useState('TẤT CẢ');
  const tabs = ['TẤT CẢ', 'TIN TỨC', 'HOẠT ĐỘNG LUKLAK', 'BEHIND THE SPACE'];

  const filteredData = activeTab === 'TẤT CẢ' 
    ? hoatDongData 
    : hoatDongData.filter(item => item.category === activeTab);

  return (
    <main className="bg-[#FBFAF5] min-h-screen text-secondary flex flex-col justify-between" data-theme="light">
      
      {/* Header Space */}
      <div className="w-full pt-40 pb-8 bg-[#FBFAF5] px-8 md:px-16 text-center">
        <div className="flex justify-center mb-8">
          <div className="border-t border-b border-secondary/20 py-3 px-8 text-xs tracking-[0.2em] font-medium text-secondary uppercase">
            TIN TỨC & HOẠT ĐỘNG
          </div>
        </div>
        <p className="text-secondary/70 font-light max-w-2xl mx-auto text-lg mb-12">
          Cập nhật những hoạt động mới nhất, các câu chuyện kiến trúc đằng sau mỗi không gian thiết kế của Luklak.
        </p>

        {/* Navigation / Filtering Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-secondary/10 pb-6 max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs md:text-sm tracking-widest font-medium uppercase transition-colors duration-300 relative pb-2 ${
                activeTab === tab ? 'text-primary' : 'text-secondary/60 hover:text-secondary'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Cards */}
      <section className="w-full max-w-[120rem] mx-auto px-8 md:px-16 py-12 mb-24 flex-grow">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredData.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <Link href={`/hoat-dong/${item.slug}`} className="flex flex-col h-full">
                  <div className="flex-grow flex flex-col mb-4">
                    {/* 1. Category tag in orange */}
                    <span className="text-primary uppercase tracking-widest text-xs font-semibold">
                      {item.category}
                    </span>

                    {/* 2. Title directly below the tag */}
                    <h3 className="text-xl md:text-2xl font-serif italic text-secondary leading-snug font-light mt-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {item.title}
                    </h3>
                  </div>

                  {/* 3. Image rendered below the title */}
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-sm bg-secondary/5 mt-auto">
                    <img
                      src={item.coverImg.src || item.coverImg}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <div className="relative z-40 bg-secondary">
        <HomeContactForm />
        <Footer />
      </div>
    </main>
  );
}
