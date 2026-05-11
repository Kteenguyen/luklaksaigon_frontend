"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Contact from "../../components/Contact";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      alert('Cảm ơn bạn đã liên hệ! LUKLAK Group sẽ phản hồi trong thời gian sớm nhất.');
      setIsSubmitting(false);
      e.target.reset();
    }, 1000);
  };

  return (
    <main className="bg-background text-secondary min-h-screen">
      {/* Hero Section */}
      <div className="pt-40 pb-24 px-8 md:px-16 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
          Get in touch
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-light text-secondary mb-8">
          Hãy cùng nhau <br /><span className="text-primary italic">Kiến tạo</span>
        </h1>
        <p className="text-secondary/60 font-light text-lg">
          Để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ tư vấn và đồng hành cùng bạn trên chặng đường xây dựng không gian sống mơ ước.
        </p>
      </div>

      {/* Split Layout: Form & Map */}
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        {/* Left: Form */}
        <div className="order-2 lg:order-1">
          <h3 className="text-3xl font-serif mb-12 text-secondary">Gửi thông tin cho chúng tôi</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="flex flex-col border-b border-secondary/20 pb-3 focus-within:border-primary transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Họ và tên *</label>
              <input type="text" required className="bg-transparent text-secondary outline-none placeholder:text-secondary/20 font-light text-xl" placeholder="Nhập họ tên của bạn" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col border-b border-secondary/20 pb-3 focus-within:border-primary transition-colors">
                <label className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Số điện thoại *</label>
                <input type="tel" required className="bg-transparent text-secondary outline-none placeholder:text-secondary/20 font-light text-xl" placeholder="Nhập số điện thoại" />
              </div>
              <div className="flex flex-col border-b border-secondary/20 pb-3 focus-within:border-primary transition-colors">
                <label className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Email</label>
                <input type="email" className="bg-transparent text-secondary outline-none placeholder:text-secondary/20 font-light text-xl" placeholder="Nhập email (tuỳ chọn)" />
              </div>
            </div>
            <div className="flex flex-col border-b border-secondary/20 pb-3 focus-within:border-primary transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Loại hình dịch vụ quan tâm</label>
              <select className="bg-transparent text-secondary outline-none font-light text-xl cursor-pointer">
                <option value="">Chọn dịch vụ...</option>
                <option value="Tư vấn thiết kế">Tư vấn thiết kế</option>
                <option value="Thi công nội thất">Thi công nội thất</option>
                <option value="Sản xuất đồ gỗ">Sản xuất đồ gỗ nội thất</option>
                <option value="Chìa khóa trao tay">Chìa khóa trao tay (Design & Build)</option>
              </select>
            </div>
            <div className="flex flex-col border-b border-secondary/20 pb-3 focus-within:border-primary transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Nội dung / Ghi chú *</label>
              <textarea required rows="3" className="bg-transparent text-secondary outline-none placeholder:text-secondary/20 font-light text-xl resize-none" placeholder="Chi tiết yêu cầu của bạn (diện tích, phong cách, vị trí, ngân sách...)"></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 bg-primary text-secondary uppercase tracking-widest text-sm font-medium py-5 px-10 rounded-sm hover:bg-secondary hover:text-surface transition-colors self-start disabled:opacity-50"
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
            </button>
          </form>
        </div>

        {/* Right: Info & Map */}
        <div className="order-1 lg:order-2 flex flex-col gap-12">
          <div>
            <h3 className="text-3xl font-serif mb-8 text-secondary">Trụ sở chính</h3>
            <p className="font-light text-secondary/70 leading-relaxed text-lg mb-4">
              43R/10 - Hồ Văn Huê, Phường 9<br />Quận Phú Nhuận, TP. Hồ Chí Minh
            </p>
            <p className="font-light text-secondary/70 text-lg mb-1">
              <span className="text-sm uppercase tracking-widest text-secondary/40 mr-4">Hotline</span>
              <a href="tel:0932478858" className="hover:text-primary transition-colors font-medium">093 247 88 58</a>
            </p>
            <p className="font-light text-secondary/70 text-lg">
              <span className="text-sm uppercase tracking-widest text-secondary/40 mr-4">Email</span>
              <a href="mailto:info@luklak.vn" className="hover:text-primary transition-colors font-medium">info@luklak.vn</a>
            </p>
          </div>

          <div className="w-full aspect-[4/3] bg-secondary/5 rounded-sm overflow-hidden border border-secondary/10 relative group">
            {/* Google Maps Embed with dark styling applied via CSS filter for luxury feel */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.162706859811!2d106.67812581480084!3d10.80650999230085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528df5cdb0ec9%3A0x6331a19f2a0b1bc!2sLUK%20LAK%20Design%20%26%20Build!5e0!3m2!1sen!2s!4v1655000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) opacity(0.8) contrast(1.1)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:filter-none transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Branch List */}
      <div className="max-w-[100rem] mx-auto px-8 md:px-16 py-24 mb-16">
        <h3 className="text-2xl font-serif mb-12 text-center text-secondary border-b border-secondary/10 pb-4 max-w-max mx-auto">
          Hệ thống Chi nhánh Toàn quốc
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { name: 'Hà Nội', address: 'Đang cập nhật địa chỉ chi tiết...', phone: '093 247 88 58' },
            { name: 'Hải Phòng', address: 'Đang cập nhật địa chỉ chi tiết...', phone: '093 247 88 58' },
            { name: 'Đà Nẵng', address: 'Đang cập nhật địa chỉ chi tiết...', phone: '093 247 88 58' },
            { name: 'Huế', address: 'Đang cập nhật địa chỉ chi tiết...', phone: '093 247 88 58' },
          ].map((branch, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              key={i}
              className="p-8 border border-secondary/10 rounded-sm bg-secondary/5 hover:border-primary/50 hover:bg-secondary/10 transition-colors group cursor-default"
            >
              <h4 className="text-2xl font-serif text-primary mb-4">{branch.name}</h4>
              <p className="text-sm font-light text-secondary/60 mb-6 min-h-[3rem]">{branch.address}</p>
              <div className="flex items-center gap-4 border-t border-secondary/10 pt-6">
                <span className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors animate-pulse" />
                <p className="text-sm tracking-widest uppercase font-medium">{branch.phone}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Footer Curtain */}
      <div className="relative z-40 bg-secondary">
        <Contact />
      </div>
    </main>
  );
}
