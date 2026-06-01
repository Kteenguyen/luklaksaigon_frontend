"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { constructionProjectsData } from '../data/mockData';

const tabs = ['Đang thi công', 'Đã hoàn thiện'];

export default function ConstructionProjects() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [direction, setDirection] = useState(1);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    setDirection(tabs.indexOf(newTab) > tabs.indexOf(activeTab) ? 1 : -1);
    setActiveTab(newTab);
    setVisibleCount(4);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    })
  };

  const filteredData = constructionProjectsData.filter(p => p.status === activeTab);
  const visibleProjects = filteredData.slice(0, visibleCount);

  return (
    <section className="w-full bg-secondary text-surface py-24 md:py-32 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">

        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 border-b border-white/10 pb-8">
          <div>
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4 inline-block">Realities</span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white">Dự án <span className="text-primary italic">Thực tế</span></h2>
          </div>

          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`text-sm tracking-widest uppercase transition-all duration-300 relative pb-2 ${activeTab === tab ? 'text-primary' : 'text-white/40 hover:text-white'
                  }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeConstructionTab"
                    className="absolute bottom-0 left-0 w-full h-px bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Swipeable Grid */}
        <div className="relative w-full">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeTab}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
            >
              {visibleProjects.map((project, i) => (
                <Link href={`/thi-cong/${project.slug}`} key={project.id} className="group cursor-pointer flex flex-col h-full">
                  <div className="relative w-full aspect-[4/3] overflow-hidden mb-6">
                    <img
                      src={project.coverImg.src || project.coverImg}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                    {/* View Details Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/90 text-secondary text-xs uppercase tracking-widest px-6 py-3 rounded-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        Chi tiết thi công
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-white/50 font-light text-sm">{project.location}</p>
                    </div>
                    <span className="text-primary text-xs uppercase tracking-widest border border-primary/30 px-3 py-1 rounded-sm">
                      {project.timeline}
                    </span>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {filteredData.length > visibleCount && (
          <div className="flex justify-center mt-16 relative z-20">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="text-xs uppercase tracking-[0.2em] transition-all border-b pb-1 inline-block text-white/50 border-white/20 hover:text-white hover:border-white/50"
            >
              Xem thêm dự án
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
