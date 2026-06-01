"use client";
import { motion } from 'framer-motion';

const ECOSYSTEM_PARTNERS = [
  'AN CƯỜNG', 'HÄFELE', 'BLUM', 'TOTO', 'KOHLER', 'DULUX',
  'LUKLAK LIGHTING', 'LUKLAK CERAMIC', 'LUKLAK DECOR', 'EUROTILE', 'VICOSTONE'
];

// Stylized vector SVG representations of partner brand logos
const PARTNER_LOGOS = {
  'AN CƯỜNG': (
    <svg viewBox="0 0 150 32" className="h-6 md:h-8 text-white/40 hover:text-primary hover:scale-[1.04] transition-all duration-300 select-none" fill="currentColor">
      <path d="M10 6c-2.5 0-4.5 2-4.5 4.5 0 3.4 4.5 6.8 4.5 6.8s4.5-3.4 4.5-6.8C14.5 8 12.5 6 10 6zm0 6.4c-1 0-1.9-.8-1.9-1.9 0-1 .8-1.9 1.9-1.9s1.9.8 1.9 1.9c0 1.1-.9 1.9-1.9 1.9z" className="text-primary fill-primary" />
      <text x="22" y="19" fontSize="13" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="850" letterSpacing="0.08em">AN CUONG</text>
    </svg>
  ),
  'HÄFELE': (
    <svg viewBox="0 0 100 32" className="h-6 md:h-8 text-white/40 hover:text-primary hover:scale-[1.04] transition-all duration-300 select-none" fill="currentColor">
      <text x="0" y="21" fontSize="17" fontFamily="Impact, Charcoal, sans-serif" fontWeight="bold" letterSpacing="0.04em">HÄFELE</text>
    </svg>
  ),
  'BLUM': (
    <svg viewBox="0 0 80 32" className="h-6 md:h-8 text-white/40 hover:text-primary hover:scale-[1.04] transition-all duration-300 select-none" fill="currentColor">
      <text x="0" y="21" fontSize="21" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" letterSpacing="-0.04em" transform="skewX(-8)">blum</text>
    </svg>
  ),
  'TOTO': (
    <svg viewBox="0 0 80 32" className="h-6 md:h-8 text-white/40 hover:text-primary hover:scale-[1.04] transition-all duration-300 select-none" fill="currentColor">
      <text x="0" y="21" fontSize="19" fontFamily="Arial, Helvetica, sans-serif" fontWeight="900" letterSpacing="0.04em">TOTO</text>
    </svg>
  ),
  'KOHLER': (
    <svg viewBox="0 0 110 32" className="h-6 md:h-8 text-white/40 hover:text-primary hover:scale-[1.04] transition-all duration-300 select-none" fill="currentColor">
      <text x="0" y="19" fontSize="13" fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="0.22em">KOHLER</text>
    </svg>
  ),
  'DULUX': (
    <svg viewBox="0 0 85 32" className="h-6 md:h-8 text-white/40 hover:text-primary hover:scale-[1.04] transition-all duration-300 select-none" fill="currentColor">
      <path d="M5 21 Q 15 17, 25 23 T 45 21 T 65 19 T 80 21" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.3" />
      <text x="5" y="20" fontSize="17" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="bold" letterSpacing="0.05em">Dulux</text>
    </svg>
  ),
  'LUKLAK LIGHTING': (
    <svg viewBox="0 0 180 32" className="h-6 md:h-8 text-white/40 hover:text-primary hover:scale-[1.04] transition-all duration-300 select-none" fill="currentColor">
      <text x="0" y="19" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" letterSpacing="0.15em">LUKLAK</text>
      <text x="72" y="19" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300" letterSpacing="0.2em" className="text-primary fill-primary">LIGHTING</text>
    </svg>
  ),
  'LUKLAK CERAMIC': (
    <svg viewBox="0 0 180 32" className="h-6 md:h-8 text-white/40 hover:text-primary hover:scale-[1.04] transition-all duration-300 select-none" fill="currentColor">
      <text x="0" y="19" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" letterSpacing="0.15em">LUKLAK</text>
      <text x="72" y="19" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300" letterSpacing="0.2em" className="text-primary fill-primary">CERAMIC</text>
    </svg>
  ),
  'LUKLAK DECOR': (
    <svg viewBox="0 0 160 32" className="h-6 md:h-8 text-white/40 hover:text-primary hover:scale-[1.04] transition-all duration-300 select-none" fill="currentColor">
      <text x="0" y="19" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" letterSpacing="0.15em">LUKLAK</text>
      <text x="72" y="19" fontSize="10" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="300" letterSpacing="0.2em" className="text-primary fill-primary">DECOR</text>
    </svg>
  ),
  'EUROTILE': (
    <svg viewBox="0 0 120 32" className="h-6 md:h-8 text-white/40 hover:text-primary hover:scale-[1.04] transition-all duration-300 select-none" fill="currentColor">
      <rect x="2" y="8" width="8" height="8" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(45 6 12)" />
      <text x="22" y="19" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" letterSpacing="0.15em">EUROTILE</text>
    </svg>
  ),
  'VICOSTONE': (
    <svg viewBox="0 0 130 32" className="h-6 md:h-8 text-white/40 hover:text-primary hover:scale-[1.04] transition-all duration-300 select-none" fill="currentColor">
      <polygon points="8,4 14,8 14,16 8,20 2,16 2,8" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <text x="22" y="19" fontSize="12" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" letterSpacing="0.08em">VICOSTONE</text>
    </svg>
  )
};

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

      {/* Infinite logo marquee scroller */}
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
            // Stop animation on hover to allow users to inspect brand logos easily
          }}
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center"
        >
          {marqueeList.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 md:gap-12 flex-shrink-0"
            >
              {/* Partner Vector Logo */}
              <div className="h-8 md:h-10 flex items-center justify-center">
                {PARTNER_LOGOS[partner] || (
                  <span className="text-2xl md:text-4xl font-sans tracking-[0.3em] font-light text-white/40">
                    {partner}
                  </span>
                )}
              </div>

              {/* Separator icon (Elegant Diamond) */}
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary/40 rotate-45 flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
