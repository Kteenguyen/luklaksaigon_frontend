"use client";
﻿import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="relative w-full bg-secondary text-white overflow-hidden h-screen" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} data-theme="dark">
      
      {/* Cấu trúc Sticky Footer (Curtain Reveal) */}
      <div className="fixed bottom-0 w-full h-screen flex flex-col justify-between pt-32 pb-8 px-8 md:px-16 pointer-events-none">
        
        {/* Nội dung Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full pointer-events-auto">
          
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-8">
              Bắt đầu dự án <br/> của bạn.
            </h2>
            <p className="text-white/60 font-light mb-12">
              Khách hàng được sở hữu thiết kế tùy chỉnh khác biệt và trải nghiệm dịch vụ trọn gói, từ ý tưởng đến hoàn thiện.
            </p>
            <a 
              href="tel:0932478858" 
              className="inline-block border border-white/30 rounded-full px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-[#050f10] transition-colors duration-300"
            >
              Liên hệ ngay
            </a>
          </div>

          <div className="flex flex-col gap-12 mt-16 md:mt-0">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4 block">Văn phòng</span>
              <p className="font-light text-white/80 leading-relaxed max-w-sm">
                43R/10 - Hồ Văn Huê<br/>
                Phường Đức Nhuận<br/>
                TP Hồ Chí Minh, Vietnam
              </p>
            </div>
            
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4 block">Liên lạc</span>
              <p className="font-light text-white/80">093 247 88 58</p>
              <p className="font-light text-white/80 mt-2">info@luklak.vn</p>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/40 mt-16 pointer-events-auto border-t border-white/10 pt-8 z-10 relative">
          <span>&copy; {new Date().getFullYear()} Luklak Architects. All rights reserved.</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Infinite Text Marquee (LUK LAK DESIGN & BUILD) */}
      <div className="absolute bottom-16 md:bottom-24 left-0 w-full overflow-hidden pointer-events-none opacity-5">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <span className="text-[150px] md:text-[250px] font-serif font-bold tracking-tighter uppercase leading-none">
            LUK LAK DESIGN & BUILD &mdash; LUK LAK DESIGN & BUILD &mdash; 
          </span>
        </motion.div>
      </div>

    </section>
  );
}
