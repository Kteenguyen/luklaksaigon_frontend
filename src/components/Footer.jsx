"use client";
import { motion } from 'framer-motion';
import logoSrc from '../assets/logo/PNG/Logo_Light_1 copy.png';

export default function Footer() {
  return (
    <footer 
      className="relative w-full bg-[#070606] text-white overflow-hidden" 
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      data-theme="dark"
    >
      {/* Spacer on desktop to allocate scrolling height for the reveal effect */}
      <div className="hidden lg:block h-[55vh] pointer-events-none" />
      
      {/* Footer Panel - static on mobile, fixed reveal on desktop */}
      <div className="relative lg:fixed lg:bottom-0 lg:left-0 w-full h-auto lg:h-[55vh] flex flex-col justify-between pt-16 pb-8 px-6 md:px-16 bg-[#070606] z-10">
        
        {/* Footer Top Content */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full max-w-7xl mx-auto z-10 gap-10 md:gap-0">
          
          {/* Logo & Slogan */}
          <div className="max-w-md flex flex-col items-start">
            <img src={logoSrc.src || logoSrc} alt="Luklak Architects" className="h-10 md:h-12 w-auto object-contain mb-5" />
            <p className="text-white/40 text-[10px] md:text-xs font-light tracking-widest uppercase leading-relaxed max-w-xs">
              Kiến tạo kiến trúc nghệ thuật &amp; Nội thất cao cấp hàng đầu Việt Nam.
            </p>
          </div>
 
          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row gap-10 md:gap-16 mt-4 md:mt-0">
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 mb-3 block">Văn phòng Sài Gòn</span>
              <p className="font-light text-white/70 text-xs md:text-sm leading-relaxed">
                43R/10 - Hồ Văn Huê<br/>
                Phường 9, Quận Phú Nhuận<br/>
                TP Hồ Chí Minh, Vietnam
              </p>
            </div>
            
            <div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/50 mb-3 block">Liên hệ</span>
              <p className="font-light text-white/70 text-xs md:text-sm">Điện thoại: 093 247 88 58</p>
              <p className="font-light text-white/70 text-xs md:text-sm mt-1.5">Email: info@luklaksg.vn</p>
            </div>
          </div>
 
        </div>
 
        {/* Footer Middle (Policy links row) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-[9px] uppercase tracking-wider text-white/40 border-t border-white/5 pt-8 pb-4 max-w-7xl mx-auto z-10 mt-10 lg:mt-0">
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
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] uppercase tracking-widest text-white/30 border-t border-white/5 pt-6 max-w-7xl mx-auto z-10 gap-4 mt-6 lg:mt-0">
          <span className="text-center md:text-left">&copy; {new Date().getFullYear()} Luklak Architects Sài Gòn. Bản quyền đã được bảo hộ.</span>
          <div className="flex gap-6 md:gap-8">
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
          <span className="text-[70px] md:text-[180px] font-serif font-bold tracking-tighter uppercase leading-none">
            LUK LAK ARCHITECTS &mdash; LUK LAK ARCHITECTS &mdash; 
          </span>
        </motion.div>
      </div>
 
    </footer>
  );
}
