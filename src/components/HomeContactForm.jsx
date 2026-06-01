"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomeContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '', // Hidden or auto-filled to support API format, but keeping it empty
    service: '',
    buildingType: 'Không xác định', // default for homepage inline form
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
        setSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          buildingType: 'Không xác định',
          message: ''
        });
      } else {
        alert(data.error || 'Có lỗi xảy ra, vui lòng thử lại sau.');
      }
    } catch (err) {
      console.error("Lỗi kết nối API:", err);
      alert('Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại mạng.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="w-full bg-secondary text-white py-32 px-8 md:px-24 relative overflow-hidden" data-theme="dark">
      {/* Smooth transition from preceding light section */}
      <div className="absolute top-0 left-0 w-full h-[15vh] bg-gradient-to-b from-[#FAF7F2] to-transparent z-10 pointer-events-none" />

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {success && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-secondary/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-secondary text-white max-w-md w-full p-10 rounded-sm border border-primary/30 shadow-2xl flex flex-col items-center text-center relative pointer-events-auto"
            >
              <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center mb-6">
                <span className="text-primary text-xl">✓</span>
              </div>
              <h3 className="text-2xl font-serif font-light text-white mb-3">Gửi yêu cầu thành công</h3>
              <p className="text-white/60 font-light text-xs leading-relaxed mb-6">
                Hệ thống CMS đã ghi nhận thông tin đăng ký của bạn. KTS trưởng LUKLAK Sài Gòn sẽ liên hệ trực tiếp qua số điện thoại để tư vấn phương án thiết kế sớm nhất.
              </p>
              <button 
                onClick={() => setSuccess(false)}
                className="w-full bg-primary text-secondary tracking-widest uppercase text-[10px] font-semibold py-3 hover:bg-white hover:text-secondary transition-colors duration-300 rounded-sm"
              >
                Đóng
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Call to Action content */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6">
          <span className="text-primary text-[10px] tracking-[0.4em] uppercase border-b border-white/20 pb-2 font-medium">
            Đăng ký tư vấn
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white leading-tight">
            Kiến tạo không gian <br/><span className="text-primary italic">Sống đẳng cấp</span>
          </h2>
          <p className="text-white/60 font-light text-sm leading-relaxed max-w-md">
            LUKLAK hỗ trợ miễn phí khảo sát trực tiếp hiện trạng công trình và tư vấn lên phương án thiết kế mặt bằng sơ bộ. Hãy chia sẻ yêu cầu của bạn, đội ngũ chuyên gia của chúng tôi sẽ liên hệ trong vòng 24 giờ.
          </p>
          <div className="flex flex-col gap-2 text-xs text-white/40 mt-4">
            <p>Hotline hỗ trợ nhanh: <a href="tel:0932478858" className="text-primary hover:underline">093 247 88 58</a></p>
            <p>Văn phòng: 43R/10 - Hồ Văn Huê, P.9, Phú Nhuận, TP.HCM</p>
          </div>
        </div>

        {/* Right Side: Simple & Elegant Form (Sen Design style layout) */}
        <div className="lg:col-span-7 bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl relative">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            
            {/* Họ tên */}
            <div className="flex flex-col border-b border-white/10 pb-2 focus-within:border-primary transition-colors">
              <label className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Họ tên *</label>
              <input 
                type="text" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-transparent text-white outline-none placeholder:text-white/20 font-light text-lg" 
                placeholder="Nhập họ tên của bạn" 
              />
            </div>

            {/* Số điện thoại */}
            <div className="flex flex-col border-b border-white/10 pb-2 focus-within:border-primary transition-colors">
              <label className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Số điện thoại *</label>
              <input 
                type="tel" 
                required 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-transparent text-white outline-none placeholder:text-white/20 font-light text-lg" 
                placeholder="Nhập số điện thoại của bạn" 
              />
            </div>

            {/* Dịch vụ select */}
            <div className="flex flex-col border-b border-white/10 pb-2 focus-within:border-primary transition-colors">
              <label className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Dịch vụ quan tâm *</label>
              <select 
                required
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="bg-transparent text-white outline-none font-light text-lg cursor-pointer [&>option]:bg-secondary [&>option]:text-white"
              >
                <option value="">Chọn dịch vụ...</option>
                <option value="Thiết kế kiến trúc">Thiết kế kiến trúc</option>
                <option value="Thiết kế nội thất">Thiết kế nội thất</option>
                <option value="Thiết kế cảnh quan">Thiết kế cảnh quan</option>
                <option value="Thi công xây dựng">Thi công xây dựng</option>
                <option value="Thi công nội thất">Thi công nội thất</option>
                <option value="Quản lý dự án / Dịch vụ bảo trì">Quản lý dự án / Dịch vụ bảo trì</option>
                <option value="Sản xuất sản phẩm nội thất / chiếu sáng">Sản xuất sản phẩm nội thất / chiếu sáng</option>
                <option value="Thương mại & Trang trí (Decor)">Thương mại & Trang trí (Decor)</option>
              </select>
            </div>

            {/* Lời nhắn */}
            <div className="flex flex-col border-b border-white/10 pb-2 focus-within:border-primary transition-colors">
              <label className="text-[9px] uppercase tracking-widest text-white/40 mb-1">Lời nhắn *</label>
              <textarea 
                required 
                rows="2" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-transparent text-white outline-none placeholder:text-white/20 font-light text-lg resize-none" 
                placeholder="Diện tích, phong cách, vị trí công trình hoặc yêu cầu cụ thể..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto self-start bg-primary text-secondary uppercase tracking-[0.2em] text-xs font-semibold py-4 px-10 rounded-sm hover:bg-white hover:text-secondary transition-all duration-300 disabled:opacity-50 mt-4"
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin tư vấn'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
