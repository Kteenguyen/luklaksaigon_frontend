"use client";
import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { stripHtml } from '../utils/helpers';
import { useSearchParams } from 'next/navigation';
import { projectsData } from '../data/mockData';

const categories = ['Tất cả', 'Villa', 'Nhà phố', 'Căn hộ', 'Building', 'Công trình dịch vụ'];

function ProjectFilter({ activeTab, setActiveTab }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    const categoryQuery = searchParams.get('category');
    if (categoryQuery && categories.includes(categoryQuery)) {
      setActiveTab(categoryQuery);
    }
  }, [searchParams, setActiveTab]);

  return null;
}

export default function DesignProjects({ hideViewAll = false }) {
  const [activeTab, setActiveTab] = useState('Tất cả');
  const [visibleCount, setVisibleCount] = useState(9);

  // Filter out any "Công trình thực tế" if 'Tất cả' is selected, matching standard Portfolio
  const filteredProjects = activeTab === 'Tất cả'
    ? projectsData.filter(p => p.category !== 'Công trình thực tế')
    : projectsData.filter(p => p.category === activeTab);

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  const handleTabChange = (cat) => {
    setActiveTab(cat);
    setVisibleCount(9);
  };

  return (
    <section className="w-full bg-cream text-secondary py-24 md:py-32" data-theme="light">
      <Suspense fallback={null}>
        <ProjectFilter activeTab={activeTab} setActiveTab={setActiveTab} />
      </Suspense>
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">

        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary border-b border-secondary/20 pb-2">
              Dự án Thiết kế
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-light mt-8">
              Bộ Sưu Tập
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-4 md:gap-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => handleTabChange(cat)}
                className={`relative text-xs md:text-sm uppercase tracking-widest pb-2 transition-colors duration-300 ${activeTab === cat ? 'text-secondary font-medium' : 'text-secondary/40 hover:text-secondary/70'
                  }`}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3 Equal Columns Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className="group relative overflow-hidden cursor-pointer aspect-[2/1]"
              >
                <Link href={`/du-an/${project.slug}`} className="block w-full h-full relative">
                  {/* Photo container */}
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={project.coverImg.src || project.coverImg}
                      alt={stripHtml(project.title)}
                      title={stripHtml(project.title)}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                  </motion.div>

                  {/* Elegant Gradient Overlay - Always slightly visible for readability, darkens on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/40 transition-all duration-500" />

                  {/* Information Overlay - Always visible, slides up slightly on hover */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transition-transform duration-500 group-hover:-translate-y-2">
                    <span className="text-primary text-[10px] uppercase tracking-widest mb-2 block font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl md:text-2xl font-serif font-light leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-[10px] md:text-xs mt-2 font-light">
                      {project.location} &bull; {project.area}
                    </p>
                  </div>
                </Link>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Action Buttons */}
        <div className="mt-16 md:mt-24 flex flex-col sm:flex-row justify-center gap-6 items-center">
          {filteredProjects.length > visibleCount && (
            <button
              onClick={handleLoadMore}
              className="group relative inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase py-4 px-10 border border-secondary/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-secondary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 text-secondary transition-colors duration-500">Xem Thêm</span>
              <span className="relative z-10 text-secondary transition-colors duration-500">&darr;</span>
            </button>
          )}

          {!hideViewAll && (
            <Link href="/du-an"
              className="group relative inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase py-4 px-10 border border-secondary overflow-hidden bg-secondary text-surface"
            >
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Xem Tất Cả Dự Án</span>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-black">&rarr;</span>
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}
