import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// Mock Data
import img1 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img2 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import img3 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';
import img4 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg';

const categories = ['Tất cả', 'Biệt thự', 'Căn hộ', 'Nhà phố', 'Thương mại'];

const projectsData = [
  { id: 1, title: 'The Landmark', category: 'Căn hộ', img: img1, span: 'col-span-12 md:col-span-8 row-span-2' },
  { id: 2, title: 'Ocean Villa', category: 'Biệt thự', img: img2, span: 'col-span-12 md:col-span-4 row-span-1' },
  { id: 3, title: 'Minimalist Townhouse', category: 'Nhà phố', img: img3, span: 'col-span-12 md:col-span-4 row-span-1' },
  { id: 4, title: 'Zen Cafe', category: 'Thương mại', img: img4, span: 'col-span-12 md:col-span-6 row-span-1' },
  { id: 5, title: 'Sky Penthouse', category: 'Căn hộ', img: img1, span: 'col-span-12 md:col-span-6 row-span-1' },
];

export default function DesignProjects() {
  const [activeTab, setActiveTab] = useState('Tất cả');

  const filteredProjects = activeTab === 'Tất cả'
    ? projectsData
    : projectsData.filter(p => p.category === activeTab);

  return (
    <section className="w-full bg-background text-secondary py-24 md:py-32">
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
                onClick={() => setActiveTab(cat)}
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

        {/* Masonry Grid with Magic Layout Sort */}
        <motion.div layout className="grid grid-cols-12 gap-4 md:gap-8 auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout // Kích hoạt di chuyển mượt mà khi đổi vị trí
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className={`group relative overflow-hidden rounded-sm cursor-pointer ${project.span}`}
              >
                {/* Ảnh có hiệu ứng zoom khi hover */}
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay thông tin */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-surface/70 text-[10px] uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-surface text-2xl font-serif font-light">
                    {project.title}
                  </h3>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Nút Xem Tất Cả */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase py-4 px-10 border border-secondary/30 overflow-hidden"
          >
            <div className="absolute inset-0 bg-secondary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <span className="relative z-10 text-secondary group-hover:text-surface transition-colors duration-500">Xem Tất Cả Dự Án</span>
            <span className="relative z-10 text-secondary group-hover:text-surface transition-colors duration-500">&rarr;</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
