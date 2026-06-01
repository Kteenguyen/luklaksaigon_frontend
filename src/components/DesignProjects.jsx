"use client";
import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
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
  const router = useRouter();
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
    router.push(cat === 'Tất cả' ? '/du-an' : `/du-an?category=${cat}`, { scroll: false });
  };

  return (
    <section className="w-full bg-[#FAF7F2] text-secondary py-24 md:py-32" data-theme="light">
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
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className="group relative overflow-hidden rounded-sm cursor-pointer aspect-[4/5]"
              >
                <Link href={`/du-an/${project.slug}`} className="block w-full h-full relative">
                  {/* Photo container */}
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <img
                      src={project.coverImg.src || project.coverImg}
                      alt={project.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </motion.div>

                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Information Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-primary text-[10px] uppercase tracking-widest mb-3 block font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-white text-2xl md:text-3xl font-serif font-light">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs mt-2 font-light">
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
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-secondary">Xem Tất Cả Dự Án</span>
              <span className="relative z-10 transition-colors duration-500 group-hover:text-secondary">&rarr;</span>
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}
