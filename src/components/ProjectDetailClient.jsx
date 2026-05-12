"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Contact from "./Contact";

export default function ProjectDetailClient({ project, nextProject }) {
  return (
    <main className="bg-background min-h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.coverImg.src || project.coverImg} 
            alt={project.title} 
            className="w-full h-full object-cover filter brightness-[0.6] grayscale-[20%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        
        <div className="relative z-20 h-full flex flex-col justify-end pb-24 px-8 md:px-16 max-w-[100rem] mx-auto w-full">
          <Link href="/du-an" className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors uppercase tracking-widest text-xs font-medium mb-12 w-max">
            <ArrowLeft className="w-4 h-4" /> Quay lại Thư viện
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-[8rem] font-serif font-light text-white mb-12 tracking-tight"
          >
            <span dangerouslySetInnerHTML={{ __html: project.title }} />
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/20 pt-8"
          >
            <div>
              <span className="block text-white/50 text-[10px] uppercase tracking-widest mb-2">Hạng mục</span>
              <span className="text-white font-light text-lg">{project.category}</span>
            </div>
            <div>
              <span className="block text-white/50 text-[10px] uppercase tracking-widest mb-2">Vị trí</span>
              <span className="text-white font-light text-lg">{project.location}</span>
            </div>
            <div>
              <span className="block text-white/50 text-[10px] uppercase tracking-widest mb-2">Quy mô</span>
              <span className="text-white font-light text-lg">{project.area}</span>
            </div>
            <div>
              <span className="block text-white/50 text-[10px] uppercase tracking-widest mb-2">Hoàn thành</span>
              <span className="text-white font-light text-lg">{project.year}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Concept & Overview */}
      <section className="py-24 md:py-32 px-8 md:px-16 max-w-[100rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-4">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-secondary mb-6">Ý tưởng <br/><span className="text-primary italic">Thiết kế</span></h2>
          <span className="text-primary text-sm uppercase tracking-widest border border-primary/20 px-4 py-2 rounded-sm inline-block">
            {project.style} Style
          </span>
        </div>
        <div className="lg:col-span-8">
          <p className="text-secondary/70 font-light text-xl md:text-3xl leading-relaxed font-serif">
            "{project.overview}"
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 md:px-8 pb-32 max-w-[100rem] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {project.images.slice(0, 4).map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`relative overflow-hidden bg-secondary/5 rounded-sm ${
                index === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/5]'
              }`}
            >
              <img 
                src={img.src || img} 
                alt={`${project.title} - ${index}`} 
                className="w-full h-full object-cover filter grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next Project Nav */}
      <Link href={`/du-an/${nextProject.slug}`} className="group block w-full bg-secondary text-center py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={nextProject.coverImg.src || nextProject.coverImg} 
            alt={nextProject.title} 
            className="w-full h-full object-cover filter grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-[0.5] transition-all duration-1000"
          />
        </div>
        <div className="relative z-10">
          <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] block mb-6 transition-colors group-hover:text-white">Dự án tiếp theo</span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-white group-hover:text-primary transition-colors">
            <span dangerouslySetInnerHTML={{ __html: nextProject.title }} />
          </h2>
        </div>
      </Link>

      <div className="relative z-40 bg-background">
        <Contact />
      </div>
    </main>
  );
}
