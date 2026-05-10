import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'The Ocean Villa',
    category: 'Biệt thự',
    location: 'Ngu Hanh Son, Da Nang',
    style: 'Modern Wabi-Sabi',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    year: '2023'
  },
  {
    id: 2,
    title: 'Sunrise Penthouse',
    category: 'Căn hộ',
    location: 'Hai Chau, Da Nang',
    style: 'Minimalist Luxury',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?q=80&w=1000&auto=format&fit=crop',
    year: '2023'
  },
  {
    id: 3,
    title: 'Euro Village',
    category: 'Nhà phố',
    location: 'Son Tra, Da Nang',
    style: 'Contemporary Classic',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop',
    year: '2022'
  },
  {
    id: 4,
    title: 'Aura Boutique',
    category: 'Thương mại',
    location: 'Hoi An, Quang Nam',
    style: 'Indochine Fusion',
    image: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8c53?q=80&w=1000&auto=format&fit=crop',
    year: '2024'
  },
  {
    id: 5,
    title: 'Marina Retreat',
    category: 'Biệt thự',
    location: 'Thanh Khe, Da Nang',
    style: 'Tropical Modernism',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop',
    year: '2021'
  },
  {
    id: 6,
    title: 'Zen Workspace',
    category: 'Thương mại',
    location: 'Da Nang Center, Da Nang',
    style: 'Industrial Zen',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop',
    year: '2024'
  }
];

export default function Portfolio() {
  return (
    <div id="portfolio" className="w-full flex flex-col bg-secondary">
      {projects.map((project) => (
        <section key={project.id} className="relative w-full h-screen overflow-hidden flex items-end">
          
          {/* Background Image Layer */}
          <motion.img 
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover z-0"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

          {/* Content Layer */}
          <div className="relative z-20 w-full px-8 md:px-16 pb-12 md:pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            
            {/* Left Side (Project Title & CTA) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start"
            >
              <h2 className="text-5xl md:text-7xl font-serif text-white tracking-wide font-light leading-tight">
                {project.title}
              </h2>
              <button className="mt-8 px-8 py-3 border border-white/50 rounded-full text-white text-[10px] md:text-sm tracking-widest hover:bg-white hover:text-secondary transition-colors duration-300">
                VIEW PROJECT
              </button>
            </motion.div>

            {/* Right Side (Project Metadata) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-6 md:gap-8 text-[10px] md:text-[11px] text-white/70 uppercase tracking-[0.2em]"
            >
              <span>LUK LAK {project.location.split(',')[1]?.trim() || 'DA NANG'}</span>
              <span>{project.category}</span>
              <span>{project.location.split(',')[0]}</span>
              <span>{project.year}</span>
            </motion.div>
            
          </div>
        </section>
      ))}
    </div>
  );
}
