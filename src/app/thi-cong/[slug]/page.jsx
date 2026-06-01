"use client";
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ZoomIn } from 'lucide-react';
import HomeContactForm from "../../../components/HomeContactForm";
import Footer from "../../../components/Footer";
import { constructionProjectsData } from "../../../data/mockData";

export default function ConstructionDetail() {
  const { slug } = useParams();
  const [selectedImg, setSelectedImg] = useState(null);

  const openLightbox = (index) => {
    setSelectedImg(index);
  };

  const closeLightbox = () => {
    setSelectedImg(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImg((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImg((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const project = constructionProjectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-secondary">
        <h1 className="text-3xl font-serif">Không tìm thấy công trình</h1>
      </div>
    );
  }

  // Find next project
  const currentIndex = constructionProjectsData.findIndex(p => p.slug === slug);
  const nextProject = constructionProjectsData[(currentIndex + 1) % constructionProjectsData.length];

  return (
    <main className="bg-secondary min-h-screen flex flex-col justify-between overflow-hidden text-surface">

      {/* Hero Section */}
      <section className="relative w-full h-[80vh]">
        <div className="absolute inset-0 z-0">
          <img
            src={project.coverImg.src || project.coverImg}
            alt={project.title}
            className="w-full h-full object-cover filter brightness-[0.5] grayscale-[30%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent z-10"></div>

        <div className="relative z-20 h-full flex flex-col justify-end pb-16 px-8 md:px-16 max-w-[100rem] mx-auto w-full">
          <Link href="/thi-cong" className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors uppercase tracking-widest text-xs font-medium mb-12 w-max">
            <ArrowLeft className="w-4 h-4" /> Quay lại Thi công
          </Link>

          <span className="text-primary text-[10px] uppercase tracking-widest mb-4 inline-block">
            {project.status}
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-light text-white mb-8 tracking-tight"
          >
            {project.title}
          </motion.h1>

          <div className="flex items-center gap-6">
            <span className="text-white/60 uppercase tracking-widest text-xs border border-white/20 px-4 py-2 rounded-sm">{project.location}</span>
            <span className="text-white/60 uppercase tracking-widest text-xs border border-white/20 px-4 py-2 rounded-sm">Tiến độ: {project.timeline}</span>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="py-24 md:py-32 px-8 md:px-16 max-w-[100rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-b border-white/10">
        <div className="lg:col-span-4">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white mb-6">Chi tiết <br /><span className="text-primary italic">Kỹ thuật</span></h2>
        </div>
        <div className="lg:col-span-8 flex flex-col gap-12">
          <p className="text-white/70 font-light text-xl md:text-2xl leading-relaxed font-serif">
            {project.overview}
          </p>

          <div>
            <h3 className="text-white/40 uppercase tracking-widest text-[10px] mb-4">Vật liệu chủ đạo</h3>
            <div className="flex flex-wrap gap-4">
              {project.materials.map((mat, i) => (
                <span key={i} className="text-white text-sm font-light border-b border-white/20 pb-1">{mat}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Construction Gallery Grid (Wow Staggered Layout) */}
      <section className="py-24 px-8 md:px-16 max-w-[100rem] mx-auto w-full">
        <div className="flex justify-between items-end mb-20 px-4">
          <h2 className="text-4xl font-serif font-light text-white">Hình ảnh <span className="text-primary italic">Công trường</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-36 items-center">
          {project.gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden bg-background/5 rounded-sm flex justify-center items-center cursor-zoom-in shadow-lg ${
                index % 3 === 0 
                  ? "col-span-1 md:col-span-2 aspect-[16/10] md:aspect-[21/9] w-full"
                  : index % 3 === 1
                  ? "col-span-1 aspect-[3/4] w-full md:translate-y-8"
                  : "col-span-1 aspect-[3/4] w-full md:-translate-y-8"
              }`}
            >
              <img
                src={img.src || img}
                alt={`${project.title} thi công - ${index + 1}`}
                className="w-full h-full object-cover filter grayscale-[40%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[1200ms] ease-out"
              />
              
              {/* Premium Luxury Overlay */}
              <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/25 transition-colors duration-500 flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="bg-white/90 text-secondary backdrop-blur-sm p-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                >
                  <ZoomIn size={20} strokeWidth={1.5} className="text-primary" />
                </motion.div>
              </div>

              {/* Tag bottom-right */}
              <div className="absolute bottom-6 right-6 text-white/40 text-[9px] uppercase tracking-widest font-mono mix-blend-difference">
                {String(index + 1).padStart(2, '0')} / {String(project.gallery.length).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project Nav */}
      <Link href={`/thi-cong/${nextProject.slug}`} className="group block w-full bg-background text-center py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={nextProject.coverImg.src || nextProject.coverImg}
            alt={nextProject.title}
            className="w-full h-full object-cover filter grayscale brightness-[0.2] group-hover:grayscale-[50%] group-hover:scale-105 transition-all duration-1000"
          />
        </div>
        <div className="relative z-10">
          <span className="text-primary text-[10px] uppercase tracking-[0.3em] block mb-6 transition-colors group-hover:text-white">Công trình khác</span>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-white group-hover:text-primary transition-colors">
            {nextProject.title}
          </h2>
        </div>
      </Link>

      <div className="relative z-40 bg-background">
        <HomeContactForm />
        <Footer />
      </div>

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
                src={project.gallery[selectedImg].src || project.gallery[selectedImg]}
                alt={`${project.title} - Fullscreen`}
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
              <p className="font-serif font-light text-sm text-white/80 mb-1">{project.title}</p>
              <span>{selectedImg + 1} / {project.gallery.length}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
