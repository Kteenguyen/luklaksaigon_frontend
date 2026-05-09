import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import p1 from '../../Dự án/Dự án thực tế/KC Villa/z7450164007725_487732fcdca5ccf6a4189f90c0c957fa.jpg';
import p2 from '../../Dự án/Dự án thực tế/KC Villa/z7450164022155_66f13bcfae7d52a8681c0232feeb187f.jpg';
import p3 from '../../Dự án/Dự án thực tế/KC Villa/z7450164022156_566f910387ff97df3b8de8afff823dab.jpg';
import p4 from '../../Dự án/Dự án thực tế/KC Villa/z7450164022157_9985b14bc96b0721c6f25d1c6bf3e6a0.jpg';
import p5 from '../../Dự án/Dự án thực tế/KC Villa/z7450164022158_478bff7e126689859a32fa842add2090.jpg';
import p6 from '../../Dự án/Dự án thực tế/KC Villa/z7450164022159_6f0a4c16bb9d235da2b9575e1cc7db4a.jpg';

const projects = [
  {
    id: 1,
    title: 'KC VILLA',
    category: 'CôNG TRÌNH THỰC TẾA',
    image: p1,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 2,
    title: 'KC VILLA — PHÒNG KHÁCH',
    category: 'NỘI THẤT',
    image: p2,
    aspectRatio: 'aspect-square',
  },
  {
    id: 3,
    title: 'KC VILLA — PHÒNG BẾP',
    category: 'NỘI THẤT',
    image: p3,
    aspectRatio: 'aspect-[4/5]',
  },
  {
    id: 4,
    title: 'KC VILLA — NGỦ CẢNH',
    category: 'KIẾN TRÚC',
    image: p4,
    aspectRatio: 'aspect-[3/4]',
  },
  {
    id: 5,
    title: 'KC VILLA — PHÒNG NGỦ',
    category: 'NỘI THẤT',
    image: p5,
    aspectRatio: 'aspect-video',
  },
  {
    id: 6,
    title: 'KC VILLA — NHÀ TắM',
    category: 'NỘI THẤT',
    image: p6,
    aspectRatio: 'aspect-[4/5]',
  }
];

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden cursor-pointer group break-inside-avoid rounded-sm w-full"
    >
      <div className={`w-full ${project.aspectRatio}`}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
        />
      </div>

      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 ease-in-out z-10" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-6 text-center pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          {project.category}
        </span>
        <h3 className="text-2xl font-serif tracking-wide opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-150">
          {project.title}
        </h3>
        <div className="mt-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
          <ArrowRight strokeWidth={1} size={20} />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectGallery() {
  return (
    <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-background text-secondary">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="mb-20 text-center flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-6">Khám Phá</span>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide text-secondary mb-6">
            Bộ sưu tập thiết kế
          </h2>
          <div className="w-12 h-[1px] bg-primary/30"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
