import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
import img1 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img2 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import img3 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';

const tabs = ['Đang thi công', 'Đã hoàn thiện'];

const constructionData = {
  'Đang thi công': [
    { id: 'c1', title: 'The Landmark - Thô', location: 'Q.1, TP.HCM', img: img1 },
    { id: 'c2', title: 'Ocean Villa - Cất nóc', location: 'Đà Nẵng', img: img2 },
  ],
  'Đã hoàn thiện': [
    { id: 'c3', title: 'KC Villa - Hoàn thiện', location: 'Đồng Nai', img: img3 },
    { id: 'c4', title: 'Zen Cafe - Bàn giao', location: 'Q.2, TP.HCM', img: img1 },
  ]
};

export default function ConstructionProjects() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [direction, setDirection] = useState(1);

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;
    setDirection(tabs.indexOf(newTab) > tabs.indexOf(activeTab) ? 1 : -1);
    setActiveTab(newTab);
  };

  // Variants cho hiệu ứng vuốt (Swipe/Slide) cực mạnh
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    })
  };

  return (
    <section className="w-full bg-secondary text-surface py-24 md:py-32 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 border-b border-white/10 pb-8">
          <div>
            <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 border-b border-white/20 pb-2">
              Dự án Thực tế
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-light mt-8">
              Thi Công
            </h2>
          </div>

          {/* Large Interactive Tabs */}
          <div className="flex gap-8 md:gap-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className="relative group"
              >
                <h3 className={`text-2xl md:text-4xl font-serif font-light transition-colors duration-500 ${
                  activeTab === tab ? 'text-white' : 'text-white/30 group-hover:text-white/70'
                }`}>
                  {tab}
                </h3>
                {activeTab === tab && (
                  <motion.div
                    layoutId="constructionTab"
                    className="absolute -bottom-8 left-0 right-0 h-[2px] bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Swipeable Grid */}
        <div className="relative min-h-[60vh] md:min-h-[80vh]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeTab}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0 w-full flex flex-col md:flex-row gap-8"
            >
              {constructionData[activeTab].map((project, index) => (
                <div key={project.id} className="w-full md:w-1/2 h-full group relative overflow-hidden rounded-sm cursor-pointer">
                  
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-[40vh] md:h-full object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-4 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 40 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-[1px] bg-white"
                      />
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/70">
                        {project.location}
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-serif font-light text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </h3>
                  </div>

                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
