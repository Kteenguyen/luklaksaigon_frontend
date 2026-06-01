"use client";
import { motion } from 'framer-motion';

export default function HomeCTA() {
  return (
    <section className="relative w-full bg-secondary py-32 px-8 md:px-16 overflow-hidden flex flex-col justify-center items-center text-center border-t border-white/5" data-theme="dark">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary-deep to-secondary pointer-events-none opacity-80" />
      
      {/* Decorative Light Leak */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.span 
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          whileInView={{ opacity: 0.6, letterSpacing: '0.3em' }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[10px] md:text-xs uppercase text-primary tracking-[0.3em] mb-6 block font-light"
        >
          Khởi đầu hành trình kiến tạo
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-8"
        >
          Bắt đầu dự án <br/> của bạn.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white/60 font-light text-base md:text-lg max-w-2xl leading-relaxed mb-12"
        >
          Khách hàng được sở hữu thiết kế tùy chỉnh khác biệt và trải nghiệm dịch vụ trọn gói, từ ý tưởng đến hoàn thiện.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a 
            href="/lien-he" 
            className="inline-block border border-white text-white hover:bg-white hover:text-secondary px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 shadow-lg hover:shadow-white/25"
          >
            Đăng ký tư vấn ngay
          </a>
        </motion.div>
      </div>
    </section>
  );
}
