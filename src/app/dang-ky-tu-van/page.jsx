"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "../../components/Footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    buildingType: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/dang-ky', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok && data.success) {
        // Backup client-side log
        localStorage.setItem('luklak_last_registration', JSON.stringify(data.registration));
        
        setIsSubmitting(false);
        setShowSuccessModal(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          buildingType: '',
          message: ''
        });
      } else {
        alert(data.error || 'Có lỗi xảy ra, vui lòng thử lại sau.');
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error("Lỗi kết nối API:", err);
      alert('Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại mạng.');
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-background text-secondary min-h-screen relative" data-theme="light">
      
      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-secondary/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-secondary text-white max-w-lg w-full p-10 rounded-sm border border-primary/40 shadow-2xl flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center mb-8">
                <span className="text-primary text-2xl">✓</span>
              </div>
              <h3 className="text-3xl font-serif font-light text-white mb-4">
                Đăng ký thành công
              </h3>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-8">
                Một email xác nhận tự động đã được gửi đến hòm thư của bạn. Đội ngũ Kiến trúc sư trưởng của LUKLAK sẽ liên hệ trực tiếp để trao đổi phương án thiết kế trong thời gian sớm nhất.
              </p>
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-primary text-secondary tracking-widest uppercase text-xs font-semibold py-4 hover:bg-white hover:text-secondary transition-colors duration-300 rounded-sm"
              >
                Đóng
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            
            {/* Họ tên */}
            <div className="flex flex-col border-b border-secondary/20 pb-3 focus-within:border-primary transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Họ tên *</label>
              <input 
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-transparent text-secondary outline-none placeholder:text-secondary/20 font-light text-xl" 
                placeholder="Nhập họ tên của bạn" 
              />
            </div>
            
            {/* SĐT + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex flex-col border-b border-secondary/20 pb-3 focus-within:border-primary transition-colors">
                <label className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Số điện thoại *</label>
                <input 
                  type="tel" 
                  required 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-transparent text-secondary outline-none placeholder:text-secondary/20 font-light text-xl" 
                  placeholder="Nhập số điện thoại" 
                />
              </div>
              <div className="flex flex-col border-b border-secondary/20 pb-3 focus-within:border-primary transition-colors">
                <label className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-transparent text-secondary outline-none placeholder:text-secondary/20 font-light text-xl" 
                  placeholder="Nhập email (tuỳ chọn)" 
                />
              </div>
            </div>
            
            {/* Dịch vụ */}
            <div className="flex flex-col border-b border-secondary/20 pb-3 focus-within:border-primary transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Dịch vụ</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="bg-transparent text-secondary outline-none font-light text-xl cursor-pointer"
              >
                <option value="" className="text-secondary bg-background">Chọn dịch vụ...</option>
                <option value="Thiết kế kiến trúc" className="text-secondary bg-background">Thiết kế kiến trúc</option>
                <option value="Thiết kế nội thất" className="text-secondary bg-background">Thiết kế nội thất</option>
                <option value="Thiết kế cảnh quan" className="text-secondary bg-background">Thiết kế cảnh quan</option>
                <option value="Thi công xây dựng" className="text-secondary bg-background">Thi công xây dựng</option>
                <option value="Thi công nội thất" className="text-secondary bg-background">Thi công nội thất</option>
                <option value="Quản lý dự án / Dịch vụ bảo trì" className="text-secondary bg-background">Quản lý dự án / Dịch vụ bảo trì</option>
                <option value="Sản xuất sản phẩm nội thất / chiếu sáng" className="text-secondary bg-background">Sản xuất sản phẩm nội thất / chiếu sáng</option>
                <option value="Thương mại & Trang trí (Decor)" className="text-secondary bg-background">Thương mại & Trang trí (Decor)</option>
              </select>
            </div>

            {/* Loại công trình */}
            <div className="flex flex-col border-b border-secondary/20 pb-3 focus-within:border-primary transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Loại công trình *</label>
              <select 
                required
                value={formData.buildingType}
                onChange={(e) => setFormData({...formData, buildingType: e.target.value})}
                className="bg-transparent text-secondary outline-none font-light text-xl cursor-pointer"
              >
                <option value="" className="text-secondary bg-background">Chọn loại công trình...</option>
                <option value="Villa" className="text-secondary bg-background">Villa</option>
                <option value="Nhà phố" className="text-secondary bg-background">Nhà phố</option>
                <option value="Building" className="text-secondary bg-background">Building</option>
                <option value="Căn hộ" className="text-secondary bg-background">Căn hộ</option>
                <option value="Công trình dịch vụ" className="text-secondary bg-background">Công trình dịch vụ</option>
                <option value="Công trình cảnh quan / Công cộng" className="text-secondary bg-background">Công trình cảnh quan / Công cộng</option>
              </select>
            </div>

            {/* Lời nhắn */}
            <div className="flex flex-col border-b border-secondary/20 pb-3 focus-within:border-primary transition-colors">
              <label className="text-[10px] uppercase tracking-widest text-secondary/50 mb-2">Lời nhắn *</label>
              <textarea 
                required 
                rows="3" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-transparent text-secondary outline-none placeholder:text-secondary/20 font-light text-xl resize-none" 
                placeholder="Lời nhắn của bạn (diện tích, phong cách, vị trí, ngân sách, hoặc yêu cầu cụ thể...)"
              ></textarea>
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
      <Footer />
    </main>
  );
}
