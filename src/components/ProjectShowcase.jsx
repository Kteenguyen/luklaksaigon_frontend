import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../Dự án/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img2 from '../../Dự án/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import img3 from '../../Dự án/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';

const projects = [
  {
    id: 1,
    title: 'KC Villa',
    category: 'Biệt thự',
    location: 'Da Nang',
    client: 'Luk Lak Da Nang',
    year: '2023',
    image: img1,
  },
  {
    id: 2,
    title: 'KC Villa — Phòng khách',
    category: 'Biệt thự',
    location: 'Da Nang',
    client: 'Luk Lak Da Nang',
    year: '2023',
    image: img2,
  },
  {
    id: 3,
    title: 'KC Villa — Ngoại thất',
    category: 'Biệt thự',
    location: 'Da Nang',
    client: 'Luk Lak Da Nang',
    year: '2023',
    image: img3,
  }
];

export default function ProjectShowcase() {
  // Using native CSS sticky, we don't strictly need JS to track current project
  // unless we want the text to change. The prompt specifies a global text overlay.
  // So we will use a static "LUK LAK DESIGN & BUILD" title as the global text.
  
  return (
    <section className="relative w-full bg-secondary">
      
      {/* Layer A: The Fixed/Sticky Global Text Overlay (Z-Index: 50) */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <div className="sticky top-0 h-screen flex flex-col md:flex-row items-start md:items-end justify-between px-8 md:px-16 pb-12 md:pb-16 w-full">
          
          {/* Left Side */}
          <div className="flex flex-col items-start mt-auto">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-wide font-light leading-none drop-shadow-lg">
              Luk Lak <br/> Design & Build.
            </h1>
            <button className="pointer-events-auto mt-6 md:mt-8 px-6 py-2 md:py-3 border border-white/50 rounded-full text-white text-[10px] md:text-sm tracking-widest hover:bg-white hover:text-secondary transition-colors duration-300">
              VIEW PROJECTS
            </button>
          </div>

          {/* Right Side */}
          <div className="flex flex-wrap gap-4 md:gap-8 text-[9px] md:text-[11px] text-white/70 uppercase tracking-[0.2em] mt-8 md:mt-0 pb-2">
            <span>LUK LAK DA NANG</span>
            <span className="hidden md:inline">ARCHITECTURE</span>
            <span className="hidden md:inline">INTERIOR</span>
            <span>2024</span>
          </div>
          
        </div>
      </div>

      {/* Layer B: The Sticky Image Track (Z-Index: 10) */}
      <div className="relative z-10 w-full">
        {projects.map((project, index) => (
          <div key={project.id} className="sticky top-0 w-full h-screen overflow-hidden">
            {/* Image */}
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover z-0" 
            />
            {/* Dark Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 z-10" />
            
            {/* Optional: We can still show the specific project title subtly in the center or top if needed, 
                but the prompt asks for decoupled text at the bottom. */}
          </div>
        ))}
      </div>
      
    </section>
  );
}
