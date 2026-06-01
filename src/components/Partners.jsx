"use client";
import { motion } from 'framer-motion';

const ECOSYSTEM_PARTNERS = [
  'AN CƯỜNG', 'HÄFELE', 'BLUM', 'TOTO', 'KOHLER', 'DULUX',
  'LUKLAK LIGHTING', 'LUKLAK CERAMIC', 'LUKLAK DECOR', 'EUROTILE', 'VICOSTONE'
];

export default function Partners() {
  // Triple the list to ensure there's enough content to scroll seamlessly without gaps
  const marqueeList = [...ECOSYSTEM_PARTNERS, ...ECOSYSTEM_PARTNERS, ...ECOSYSTEM_PARTNERS];

  return (
    <section className="w-full bg-secondary text-white py-24 md:py-32 overflow-hidden border-t border-white/5" data-theme="dark">
      
      {/* Title block */}
      <div className="max-w-[90rem] mx-auto px-8 md:px-24 mb-16 text-left">
        <span className="text-primary text-[10px] tracking-[0.4em] uppercase border-b border-white/20 pb-2 mb-6 inline-block font-medium">
          Đối tác &amp; Hệ sinh thái
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-white mt-4">
          Hợp tác cùng những thương hiệu <br /><span className="text-primary italic">Hàng đầu</span>
        </h2>
      </div>

      {/* Kat Studio: Infinite logo/text marquee ticker */}
      <div className="relative w-full overflow-hidden flex items-center bg-white/[0.01] py-8 md:py-12 border-y border-white/5">
        
        {/* Soft edge fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 35,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
        >
          {marqueeList.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 md:gap-12"
            >
              {/* Partner Text Logo */}
              <span className="text-2xl md:text-4xl font-sans tracking-[0.3em] font-light text-white/40 hover:text-primary hover:scale-102 transition-all duration-300 cursor-default select-none">
                {partner}
              </span>
              
              {/* Separator icon (Elegant Diamond) */}
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary/40 rotate-45 flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
