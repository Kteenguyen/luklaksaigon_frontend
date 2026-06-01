"use client";
import { motion } from 'framer-motion';

const PARTNERS = [
  { name: 'AN CƯỜNG', detail: 'Vật liệu gỗ công nghiệp cao cấp đạt chuẩn E1' },
  { name: 'HÄFELE', detail: 'Giải pháp phụ kiện bếp & nhà thông minh Đức' },
  { name: 'BLUM', detail: 'Hệ thống bản lề và tay nâng cao cấp của Áo' },
  { name: 'TOTO', detail: 'Thiết bị vệ sinh & công nghệ phòng tắm Nhật Bản' },
  { name: 'KOHLER', detail: 'Sản phẩm phòng tắm & bếp thiết kế Mỹ lịch lãm' },
  { name: 'DULUX', detail: 'Hệ sơn sinh thái bảo vệ sức khoẻ gia đình' }
];

export default function Partners() {
  const doubledPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="w-full bg-secondary text-white py-24 md:py-32 overflow-hidden border-t border-white/5" data-theme="dark">
      <div className="max-w-7xl mx-auto px-8 md:px-16 mb-16">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-white/20 pb-2 mb-6 inline-block font-light">
          Đối Tác Chiến Lược
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-light text-white mt-4">
          Đồng hành cùng những thương hiệu <br /><span className="text-primary italic">Hàng đầu</span>
        </h2>
      </div>

      {/* Infinite Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center bg-white/[0.01] py-12 border-y border-white/5">
        {/* Soft edge blur overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
          className="flex whitespace-nowrap"
        >
          {doubledPartners.map((partner, idx) => (
            <div
              key={idx}
              className="inline-flex flex-col justify-between min-w-[320px] p-8 border border-white/10 rounded-sm bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/50 transition-all duration-300 mx-6 cursor-default group"
            >
              <div>
                <h3 className="text-2xl font-sans tracking-[0.2em] font-medium text-white/80 group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </h3>
                <div className="w-8 h-[1px] bg-primary/40 group-hover:w-16 transition-all duration-500 mt-3 mb-4" />
              </div>
              <p className="text-xs text-white/50 font-light leading-relaxed tracking-wider whitespace-normal max-w-[260px]">
                {partner.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
