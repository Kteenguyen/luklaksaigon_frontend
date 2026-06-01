"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projectsData } from '../data/mockData';

const CATEGORIES = [
  'Tất cả',
  'Chung cư',
  'Nhà phố',
  'Biệt thự',
  'Công trình dịch vụ',
  'Công trình cảnh quan'
];

const mapCategory = (cat) => {
  if (cat === 'Villa') return 'Biệt thự';
  if (cat === 'Căn hộ') return 'Chung cư';
  if (cat === 'Building') return 'Công trình dịch vụ';
  return cat;
};

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  // Pre-process and map categories
  const mappedProjects = projectsData.map(project => ({
    ...project,
    mappedCategory: mapCategory(project.category)
  }));

  // Define valid categories to show on this page
  const validCategories = ['Chung cư', 'Nhà phố', 'Biệt thự', 'Công trình dịch vụ', 'Công trình cảnh quan'];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'Tất cả'
    ? mappedProjects.filter(p => validCategories.includes(p.mappedCategory))
    : mappedProjects.filter(p => p.mappedCategory === activeCategory);

  return (
    <section className="w-full bg-transparent pt-8 pb-32">
      <div className="max-w-[100rem] mx-auto px-8 md:px-16">

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-20 border-b border-secondary/10 pb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm md:text-base tracking-widest uppercase transition-all duration-300 relative pb-2 ${
                activeCategory === cat ? 'text-primary font-medium' : 'text-secondary/50 hover:text-secondary'
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
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                key={project.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-secondary/5 shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <Link href={`/du-an/${project.slug}`} className="block relative w-full h-full">
                  <div className="relative w-full overflow-hidden aspect-[4/3]">
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
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                    </motion.div>
                  </div>

                  {/* Overlay Reveal */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end p-6 md:p-8">
                    <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium mb-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                      {project.mappedCategory}
                    </span>
                    <h3 className="text-white text-xl md:text-2xl font-serif font-light mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-75">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-xs md:text-sm font-light transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
                      {project.location} &bull; {project.year}
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
