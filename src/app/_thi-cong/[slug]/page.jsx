"use client";
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Contact from "../../../components/Contact";
import { constructionProjectsData } from "../../../data/mockData";

export default function ConstructionDetail() {
  const { slug } = useParams();
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

      {/* Construction Gallery Grid */}
      <section className="py-24 px-4 md:px-8 max-w-[100rem] mx-auto w-full">
        <div className="flex justify-between items-end mb-16 px-4 md:px-8">
          <h2 className="text-3xl font-serif font-light text-white">Hình ảnh <span className="text-primary italic">Công trường</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {project.gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`relative overflow-hidden bg-background/5 rounded-sm ${index === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/5]'
                }`}
            >
              <img
                src={img.src || img}
                alt={`${project.title} thi công - ${index}`}
                className="w-full h-full object-cover filter grayscale-[50%] hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
              <div className="absolute bottom-6 right-6 text-white/40 text-[10px] uppercase tracking-widest mix-blend-difference">
                LUKLAK SAIGON
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
        <Contact />
      </div>
    </main>
  );
}
