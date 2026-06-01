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
      
      {/* 1. Banner dự án / Video dự án (Nếu có) */}
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
            className="text-6xl md:text-8xl lg:text-[8rem] font-serif font-light text-white mb-6 tracking-tight"
          >
            <span dangerouslySetInnerHTML={{ __html: project.title }} />
          </motion.h1>
        </div>
      </section>

      {/* 2. Thông tin công trình */}
      <section className="py-16 bg-background px-8 md:px-16 border-b border-secondary/10">
        <div className="max-w-[100rem] mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="block text-secondary/55 text-[10px] uppercase tracking-widest mb-2 font-medium">Hạng mục</span>
              <span className="text-secondary font-light text-lg md:text-xl">{project.category}</span>
            </div>
            <div>
              <span className="block text-secondary/55 text-[10px] uppercase tracking-widest mb-2 font-medium">Vị trí</span>
              <span className="text-secondary font-light text-lg md:text-xl">{project.location}</span>
            </div>
            <div>
              <span className="block text-secondary/55 text-[10px] uppercase tracking-widest mb-2 font-medium">Quy mô</span>
              <span className="text-secondary font-light text-lg md:text-xl">{project.area}</span>
            </div>
            <div>
              <span className="block text-secondary/55 text-[10px] uppercase tracking-widest mb-2 font-medium">Hoàn thành</span>
              <span className="text-secondary font-light text-lg md:text-xl">{project.year}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Album ảnh */}
      <section className="px-4 md:px-8 py-24 max-w-[100rem] mx-auto w-full bg-secondary/5">
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

      {/* 4. Mô tả dự án */}
      <section className="py-24 md:py-32 px-8 md:px-16 max-w-[100rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-secondary/10 bg-background">
        <div className="lg:col-span-4">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-secondary mb-6">Mô tả <br/><span className="text-primary italic">Chi tiết</span></h2>
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

      {/* 5. Dự án liên quan */}
      <section className="bg-secondary/5 py-24 md:py-32 px-8 md:px-16 border-t border-secondary/10">
        <div className="max-w-[100rem] mx-auto w-full">
          <div className="flex justify-between items-end mb-16 border-b border-secondary/10 pb-6">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-secondary">
              Dự án <span className="text-primary italic">Liên quan</span>
            </h2>
            <Link href="/du-an" className="text-primary uppercase text-xs tracking-widest font-medium hover:text-secondary transition-colors hidden md:block">
              Xem tất cả
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((item, index) => (
              <Link 
                href={`/du-an/${item.slug}`} 
                key={index} 
                className="group cursor-pointer flex flex-col h-full bg-background border border-secondary/5 p-4 rounded-sm hover:border-primary/50 transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-full aspect-[4/3] rounded-sm overflow-hidden mb-6">
                  <img 
                    src={item.coverImg.src || item.coverImg} 
                    alt={item.title} 
                    className="w-full h-full object-cover filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
                <div className="flex items-center gap-4 mb-4 text-[10px] uppercase tracking-widest text-secondary/50">
                  <span className="text-primary">{item.category}</span>
                  <span>|</span>
                  <span>{item.location}</span>
                </div>
                <h3 className="text-xl font-serif font-light text-secondary mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA liên hệ */}
      <HomeCTA />
      <Footer />

    </main>
  );
}
