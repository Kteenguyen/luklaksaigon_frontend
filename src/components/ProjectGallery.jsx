"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projectsData, constructionProjectsData } from '../data/mockData';

const CATEGORIES = [
  'Tất cả',
  'Villa',
  'Nhà phố',
  'Building',
  'Căn hộ',
  'Công trình dịch vụ',
  'Công trình cảnh quan',
  'Công trình thực tế'
];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (activeCategory === 'Tất cả') {
      // Hiển thị tất cả dự án thiết kế (loại trừ Công trình thực tế để đảm bảo tính phân tách)
      setFilteredProjects(projectsData.filter(p => p.category !== 'Công trình thực tế'));
    } else {
      setFilteredProjects(projectsData.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section className="w-full bg-background pt-8 pb-32">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16">

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-20 border-b border-secondary/10 pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm md:text-base tracking-widest uppercase transition-all duration-300 relative pb-2 ${activeCategory === cat ? 'text-primary' : 'text-secondary/50 hover:text-secondary'
                }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 w-full h-px bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={project.id}
                className="relative group cursor-pointer overflow-hidden rounded-sm bg-secondary/5"
              >
                <Link href={`/du-an/${project.slug}`} className="block relative w-full h-full">
                  <div className="relative w-full overflow-hidden aspect-[4/5]">
                    <motion.div
                      variants={{
                        hidden: { clipPath: "inset(100% 0 0 0)" },
                        visible: {
                          clipPath: "inset(0% 0 0 0)",
                          transition: { duration: 1.2, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }
                        }
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      className="w-full h-full"
                    >
                      <img
                        src={project.coverImg.src || project.coverImg}
                        alt={project.title}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                    </motion.div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <span className="text-primary text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.category}
                    </span>
                    <h3 className="text-white text-2xl md:text-3xl font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-2 font-light transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.location} • {project.year}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
