"use client";
import { motion } from 'framer-motion';
import logoSrc from '../assets/logo/PNG/Logo_Light_1 copy.png';

export default function Footer() {
  return (
    <section className="relative w-full bg-secondary text-white overflow-hidden h-[70vh] md:h-[55vh]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }} data-theme="dark">
      
      {/* Sticky Footer Panel */}
      <div className="fixed bottom-0 w-full h-[70vh] md:h-[55vh] flex flex-col justify-between pt-20 pb-8 px-8 md:px-16 pointer-events-none bg-secondary-deep">
        
        {/* Footer Top Content */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full pointer-events-auto max-w-7xl mx-auto z-10">
          
          {/* Logo & Slogan */}
          <div className="max-w-md flex flex-col items-start">
            <img src={logoSrc.src || logoSrc} alt="Luklak Architects" className="h-12 w-auto object-contain mb-6" />
            <p className="text-white/40 text-xs font-light tracking-widest uppercase leading-relaxed max-w-xs">
              Kiến tạo kiến trúc nghệ thuật &amp; Nội thất cao cấp hàng đầu Việt Nam.
            </p>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col md:flex-row gap-16 mt-12 md:mt-0">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4 block">Văn phòng Sài Gòn</span>
              <p className="font-light text-white/70 text-sm leading-relaxed">
                43R/10 - Hồ Văn Huê<br/>
                Phường 9, Quận Phú Nhuận<br/>
                TP Hồ Chí Minh, Vietnam
              </p>
            </div>
            
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-4 block">Liên hệ</span>
              <p className="font-light text-white/70 text-sm">Điện thoại: 093 247 88 58</p>
              <p className="font-light text-white/70 text-sm mt-2">Email: info@luklaksg.vn</p>
            </div>
          </div>

        </div>

        {/* Footer Middle (Policy links row) */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-[9px] uppercase tracking-wider text-white/40 border-t border-white/5 pt-8 pb-4 max-w-7xl mx-auto z-10 pointer-events-auto">
          <a href="/chinh-sach/van-chuyen" className="hover:text-primary transition-colors duration-300">
            &bull; Chính sách vận chuyển &amp; giao nhận
          </a>
          <a href="/chinh-sach/bao-hanh" className="hover:text-primary transition-colors duration-300">
            &bull; Chính sách hỗ trợ &amp; bảo hành
          </a>
          <a href="/chinh-sach/bao-mat" className="hover:text-primary transition-colors duration-300">
            &bull; Chính sách bảo mật thông tin
          </a>
          <a href="/chinh-sach/thanh-toan" className="hover:text-primary transition-colors duration-300">
            &bull; Quy định hình thức thanh toán
          </a>
        </div>

        {/* Footer Bottom (Copyright & Socials) */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-white/30 pointer-events-auto border-t border-white/5 pt-6 max-w-7xl mx-auto z-10">
          <span>&copy; {new Date().getFullYear()} Luklak Architects Sài Gòn. All rights reserved.</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Facebook</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
            <a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a>
          </div>
        </div>

      </div>

      {/* Decorative Subtle Background Text */}
      <div className="absolute bottom-4 left-0 w-full overflow-hidden pointer-events-none opacity-5 z-0">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="whitespace-nowrap"
        >
          <span className="text-[100px] md:text-[180px] font-serif font-bold tracking-tighter uppercase leading-none">
            LUK LAK ARCHITECTS &mdash; LUK LAK ARCHITECTS &mdash; 
          </span>
        </motion.div>
      </div>

    </section>
  );
}
