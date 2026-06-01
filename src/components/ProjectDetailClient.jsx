"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import HomeCTA from "./HomeCTA";
import Footer from "./Footer";
import { projectsData } from '../data/mockData';

export default function ProjectDetailClient({ project, nextProject }) {
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

  return (
    <main className="bg-background min-h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Section 1: Hero & Project Title */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={project.coverImg.src || project.coverImg} 
            alt={project.title} 
            className="w-full h-full object-cover filter brightness-[0.55] grayscale-[10%]"
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
      <section className="py-20 md:py-24 bg-[#FAF9F6] px-8 md:px-16 border-b border-secondary/10">
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
                  <span className="text-secondary font-light text-base md:text-lg">{project.category}</span>
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

      {/* Section 3: Project Image Gallery (Height Constraint) */}
      <section className="py-16 md:py-24 max-w-[90rem] mx-auto w-full px-4 md:px-8 bg-background">
        <div className="flex flex-col gap-8 md:gap-12">
          {project.images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full max-h-[80vh] md:max-h-[85vh] overflow-hidden rounded-lg bg-neutral-100 flex justify-center items-center"
            >
              <img 
                src={img.src || img} 
                alt={`${project.title} - ${index + 1}`} 
                className="w-full h-full max-h-[80vh] md:max-h-[85vh] object-cover filter grayscale-[15%] hover:grayscale-0 hover:scale-[1.01] transition-all duration-[1000ms] ease-out rounded-lg"
              />
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
                <div className="w-full aspect-[3/2] rounded-lg overflow-hidden mb-6 bg-secondary/5">
                  <img 
                    src={item.coverImg.src || item.coverImg} 
                    alt={item.title} 
                    className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                  />
                </div>
                <div className="flex items-center gap-3 mb-3 text-[10px] uppercase tracking-widest font-semibold">
                  <span className="text-primary">{item.category}</span>
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
      <HomeCTA />
      <Footer />

    </main>
  );
}
