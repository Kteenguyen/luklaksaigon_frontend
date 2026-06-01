"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ZoomIn } from 'lucide-react';
import { stripHtml } from '../utils/helpers';
import HomeContactForm from "./HomeContactForm";
import Footer from "./Footer";
import { projectsData } from '../data/mockData';

export default function ProjectDetailClient({ project, nextProject }) {
  const [selectedImg, setSelectedImg] = useState(null);

  const openLightbox = (index) => {
    setSelectedImg(index);
  };

  const closeLightbox = () => {
    setSelectedImg(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImg((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Find related projects of the same category, excluding the current one
  const relatedProjects = projectsData
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  // If there are less than 3 related projects in the same category, fill with others
  if (relatedProjects.length < 3) {
    const excludedIds = [project.id, ...relatedProjects.map(r => r.id)];
    const fillProjects = projectsData
      .filter(p => !excludedIds.includes(p.id))
      .slice(0, 3 - relatedProjects.length);
    relatedProjects.push(...fillProjects);
  }

  const getLayoutClasses = (index) => {
    const rem = index % 4;
    if (rem === 0) {
      // Landscape, spans 2 columns
      return "col-span-1 md:col-span-2 aspect-[3/2] w-full";
    } else if (rem === 1) {
      // Portrait, spans 1 column
      return "col-span-1 aspect-[4/5] w-full";
    } else if (rem === 2) {
      // Portrait, spans 1 column
      return "col-span-1 aspect-[4/5] w-full";
    } else {
      // Landscape, spans 2 columns
      return "col-span-1 md:col-span-2 aspect-[3/2] w-full";
    }
  };


  return (
    <main className="bg-background min-h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Section 1: Hero & Project Title */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.coverImg.src || project.coverImg} 
            alt={stripHtml(project.title)} 
            title={stripHtml(project.title)} 
            className="w-full h-full object-cover filter brightness-[0.55]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20 z-10"></div>
        
        <div className="relative z-20 w-full max-w-[100rem] mx-auto px-8 md:px-16 pb-16">
          <Link href="/du-an" className="flex items-center gap-2 text-white/70 hover:text-primary transition-colors uppercase tracking-widest text-xs font-semibold mb-8 w-max">
            <ArrowLeft className="w-4 h-4" /> Quay lại Thư viện
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white tracking-tight leading-tight"
          >
            <span dangerouslySetInnerHTML={{ __html: project.title }} />
          </motion.h1>
        </div>
      </section>

      {/* Section 2: Project Info & Description */}
      <section className="py-20 md:py-24 bg-linen px-8 md:px-16 border-b border-secondary/10">
        <div className="max-w-[100rem] mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            {/* Left Label */}
            <div className="lg:col-span-3">
              <span className="text-primary text-xs uppercase tracking-widest font-semibold block mt-1">
                / THÔNG TIN DỰ ÁN
              </span>
            </div>
            
            {/* Right Content Area */}
            <div className="lg:col-span-9 flex flex-col gap-12">
              
              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 border-b border-secondary/10 pb-12">
                <div>
                  <span className="block text-secondary/40 text-[11px] uppercase tracking-wider mb-2 font-semibold">Địa điểm</span>
                  <span className="text-secondary font-light text-base md:text-lg">{project.location}</span>
                </div>
                <div>
                  <span className="block text-secondary/40 text-[11px] uppercase tracking-wider mb-2 font-semibold">Diện tích</span>
                  <span className="text-secondary font-light text-base md:text-lg">{project.area}</span>
                </div>
                <div>
                  <span className="block text-secondary/40 text-[11px] uppercase tracking-wider mb-2 font-semibold">Quy mô</span>
                  <span className="text-secondary font-light text-base md:text-lg">{project.category === 'Building' ? 'Tòa nhà' : project.category}</span>
                </div>
                <div>
                  <span className="block text-secondary/40 text-[11px] uppercase tracking-wider mb-2 font-semibold">Tư vấn Thiết kế</span>
                  <span className="text-secondary font-light text-base md:text-lg">Luklak Architects</span>
                </div>
                <div>
                  <span className="block text-secondary/40 text-[11px] uppercase tracking-wider mb-2 font-semibold">Tư vấn Thi công</span>
                  <span className="text-secondary font-light text-base md:text-lg">Luklak Architects</span>
                </div>
              </div>
              
              {/* Description paragraph */}
              <div className="max-w-4xl">
                <p className="text-secondary/80 font-light text-lg md:text-xl leading-relaxed text-justify md:text-left">
                  {project.overview}
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Project Image Gallery (Wow Staggered Layout) */}
      <section className="py-12 md:py-16 max-w-[80rem] mx-auto w-full px-6 md:px-12 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
          {project.images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden bg-neutral-100 flex justify-center items-center cursor-zoom-in rounded-sm shadow-sm ${getLayoutClasses(index)}`}
            >
              <img 
                src={img.src || img} 
                alt={`${stripHtml(project.title)} - ${index + 1}`} 
                title={`${stripHtml(project.title)} - ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              
              {/* Premium Luxury Overlay */}
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/20 transition-colors duration-500 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="bg-background/90 text-secondary backdrop-blur-sm p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                >
                  <ZoomIn size={20} strokeWidth={1.5} className="text-primary" />
                </motion.div>
              </div>

              {/* Number and logo tag */}
              <div className="absolute bottom-4 left-4 text-white/50 text-[9px] uppercase tracking-widest font-mono mix-blend-difference">
                {String(index + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 4: Related Projects */}
      <section className="bg-background py-24 md:py-32 px-8 md:px-16 border-t border-secondary/10">
        <div className="max-w-[100rem] mx-auto w-full">
          <div className="flex justify-between items-end mb-16 border-b border-secondary/10 pb-6">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-secondary">
              Dự án <span className="text-primary italic">Liên quan</span>
            </h2>
            <Link href="/du-an" className="text-primary uppercase text-xs tracking-widest font-semibold hover:text-secondary transition-colors hidden md:block">
              Xem tất cả
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {relatedProjects.map((item, index) => (
              <Link 
                href={`/du-an/${item.slug}`} 
                key={index} 
                className="group cursor-pointer flex flex-col h-full bg-background transition-all duration-500"
              >
                <div className="w-full aspect-[3/2] overflow-hidden mb-6 bg-secondary/5">
                  <img 
                    src={item.coverImg.src || item.coverImg} 
                    alt={stripHtml(item.title)} 
                    title={stripHtml(item.title)} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out" 
                  />
                </div>
                <div className="flex items-center gap-3 mb-3 text-[10px] uppercase tracking-widest font-semibold">
                  <span className="text-primary">{item.category === 'Building' ? 'Tòa nhà' : item.category}</span>
                  <span className="text-secondary/30">•</span>
                  <span className="text-secondary/60">{item.location}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-light text-secondary group-hover:text-primary transition-colors line-clamp-1">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Footer */}
      <HomeContactForm />
      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out select-none pointer-events-auto"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-sticky-header p-3 text-white/60 hover:text-white transition-colors hover:bg-white/10 rounded-full cursor-pointer pointer-events-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18M6 6l12 12"/></svg>
            </button>

            {/* Left Button */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-sticky-header p-4 text-white/60 hover:text-white transition-colors hover:bg-white/10 rounded-full cursor-pointer pointer-events-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="relative max-w-full max-h-full flex items-center justify-center pointer-events-none"
            >
              <img
                src={project.images[selectedImg].src || project.images[selectedImg]}
                alt={`${stripHtml(project.title)} - Fullscreen`}
                className="max-w-[90vw] max-h-[80vh] object-contain rounded-sm pointer-events-auto shadow-2xl"
              />
            </motion.div>

            {/* Right Button */}
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-sticky-header p-4 text-white/60 hover:text-white transition-colors hover:bg-white/10 rounded-full cursor-pointer pointer-events-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
            </button>

            {/* Image Counter & Title */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/60 text-xs tracking-widest uppercase">
              <p className="font-serif font-light text-sm text-white/80 mb-1" dangerouslySetInnerHTML={{ __html: project.title }} />
              <span>{selectedImg + 1} / {project.images.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
