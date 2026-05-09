import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <footer id="contact" className="bg-secondary pt-32 pb-12 px-6 md:px-16">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-5xl md:text-8xl font-serif font-light text-surface mb-8">Khởi tạo <br/> tương lai.</h2>
          <a href="mailto:hello@luklakdn.vn" className="text-lg md:text-2xl text-text-muted hover:text-surface transition-colors duration-300 font-light border-b border-text-main hover:border-surface pb-2 inline-block">
            hello@luklakdn.vn
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-x-16 gap-y-8"
        >
          {['Đà Nẵng', 'Hội An'].map((city) => (
            <div key={city}>
              <h3 className="text-sm tracking-widest uppercase text-surface mb-2">{city}</h3>
              <p className="text-xs text-text-muted font-light">Văn phòng / Xưởng</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 border-t border-surface/10 mb-16">
        <div className="col-span-1 md:col-span-2">
          <p className="text-[10px] tracking-widest text-text-muted uppercase mb-4">Sitemap</p>
          <div className="grid grid-cols-2 gap-4 text-xs font-light tracking-wide text-surface">
            <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
            <a href="/factory" className="hover:text-primary transition-colors">Xưởng sản xuất</a>
            <a href="/about" className="hover:text-primary transition-colors">Về chúng tôi</a>
            <a href="/journal" className="hover:text-primary transition-colors">Tin tức & Cảm hứng</a>
            <a href="/projects" className="hover:text-primary transition-colors">Dự án</a>
            <a href="/contact" className="hover:text-primary transition-colors">Liên hệ</a>
            <a href="/services" className="hover:text-primary transition-colors">Dịch vụ</a>
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-[10px] tracking-widest text-text-muted uppercase mb-4">Dự án</p>
          <div className="flex flex-col gap-4 text-xs font-light tracking-wide text-surface">
            <a href="/projects" className="hover:text-primary transition-colors">Biệt thự</a>
            <a href="/projects" className="hover:text-primary transition-colors">Căn hộ</a>
            <a href="/projects" className="hover:text-primary transition-colors">Nhà phố</a>
            <a href="/projects" className="hover:text-primary transition-colors">Thương mại</a>
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-[10px] tracking-widest text-text-muted uppercase mb-4">Dịch vụ</p>
          <div className="flex flex-col gap-4 text-xs font-light tracking-wide text-surface">
            <a href="/services" className="hover:text-primary transition-colors">Thiết kế kiến trúc</a>
            <a href="/services" className="hover:text-primary transition-colors">Thiết kế nội thất</a>
            <a href="/services" className="hover:text-primary transition-colors">Thi công trọn gói</a>
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-surface/10 text-[10px] tracking-widest text-text-muted uppercase">
        <p>&copy; {new Date().getFullYear()} Luk Lak Design & Build. All rights reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-surface transition-colors duration-300">Facebook</a>
          <a href="#" className="hover:text-surface transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-surface transition-colors duration-300">Chính sách</a>
        </div>
      </div>
    </footer>
  );
}
