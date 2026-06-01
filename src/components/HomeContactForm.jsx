"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Custom Select Component for high-end luxury dropdown design
function CustomSelect({ value, onChange, placeholder, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Find the selected option details
  const selectedOption = options.find(opt => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-14 px-5 bg-[#201E1D] border border-white/10 rounded-[6px] text-left text-sm md:text-base outline-none focus:border-[#DED3B8]/60 focus:bg-white/[0.01] transition-all flex items-center justify-between cursor-pointer ${
          value ? 'text-white' : 'text-white/30'
        }`}
      >
        <span className="truncate pr-4">{displayLabel}</span>
        <svg 
          className={`w-4 h-4 text-white/30 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Options Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 mt-2 z-50 bg-[#1E1C1B] border border-white/10 rounded-[6px] shadow-2xl overflow-hidden max-h-64 overflow-y-auto origin-top"
          >
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3.5 text-sm md:text-base transition-colors duration-150 cursor-pointer border-b border-white/[0.02] last:border-0 hover:bg-white/[0.04] flex items-center justify-between ${
                    value === option.value 
                      ? 'text-[#DED3B8] bg-white/[0.02] font-medium' 
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  <span>{option.label}</span>
                  {value === option.value && (
                    <span className="text-[#DED3B8] text-xs">✓</span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HomeContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    buildingType: '',
    message: ''
  });

  const serviceOptions = [
    { value: "Thiết kế kiến trúc", label: "Architecture Design / Thiết kế kiến trúc" },
    { value: "Thiết kế nội thất", label: "Interior Design / Thiết kế nội thất" },
    { value: "Thiết kế cảnh quan", label: "Landscape Design / Thiết kế cảnh quan" },
    { value: "Thi công xây dựng", label: "Construction / Thi công xây dựng" },
    { value: "Thi công nội thất", label: "Interior Fit-out / Thi công nội thất" },
    { value: "Quản lý dự án / Dịch vụ bảo trì", label: "Project Management / Quản lý dự án" },
    { value: "Sản xuất sản phẩm nội thất / chiếu sáng", label: "Furniture & Lighting / Sản xuất nội thất" },
    { value: "Thương mại & Trang trí (Decor)", label: "Decor & Styling / Thương mại & Trang trí" }
  ];

  const buildingOptions = [
    { value: "Villa", label: "Villa / Biệt thự" },
    { value: "Nhà phố", label: "Townhouse / Nhà phố" },
    { value: "Building", label: "Building / Tòa nhà văn phòng" },
    { value: "Căn hộ", label: "Apartment / Căn hộ" },
    { value: "Công trình dịch vụ", label: "Commercial & Hospitality / Công trình dịch vụ" },
    { value: "Công trình cảnh quan / Công cộng", label: "Landscape & Public / Cảnh quan & Công cộng" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verification check for custom selects
    if (!formData.service) {
      alert("Vui lòng chọn Dịch vụ mong muốn.");
      return;
    }
    if (!formData.buildingType) {
      alert("Vui lòng chọn Loại hình công trình.");
      return;
    }

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
          buildingType: '',
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
    <section id="contact-form" className="w-full bg-[#151413] text-white py-24 md:py-32 px-8 md:px-16 lg:px-24 relative overflow-hidden" data-theme="dark">
      {/* Smooth transition from preceding section */}
      <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-transparent to-transparent z-10 pointer-events-none" />

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {success && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-modal-content flex items-center justify-center p-6 bg-secondary/90 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#201F1E] text-white max-w-md w-full p-10 rounded-[8px] border border-white/10 shadow-2xl flex flex-col items-center text-center relative pointer-events-auto"
            >
              <div className="w-12 h-12 rounded-full border border-beige flex items-center justify-center mb-6">
                <span className="text-[#DED3B8] text-xl">✓</span>
              </div>
              <h3 className="text-2xl font-serif font-light text-white mb-3">Gửi yêu cầu thành công</h3>
              <p className="text-white/60 font-light text-xs leading-relaxed mb-6">
                Hệ thống CMS đã ghi nhận thông tin đăng ký của bạn. KTS trưởng LUKLAK Sài Gòn sẽ liên hệ trực tiếp qua số điện thoại để tư vấn phương án thiết kế sớm nhất.
              </p>
              <button 
                onClick={() => setSuccess(false)}
                className="w-full bg-[#FAF7F2] text-secondary tracking-widest uppercase text-[10px] font-semibold py-3 hover:bg-white hover:text-secondary transition-colors duration-300 rounded-none"
              >
                Đóng
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start relative z-20">
        
        {/* Left Side: Call to Action content */}
        <div className="lg:col-span-5 flex flex-col items-start gap-6 pt-2">
          <span className="text-white/40 text-[10px] md:text-xs tracking-[0.4em] uppercase font-medium">
            CONSULTATION
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[46px] lg:leading-[1.2] font-serif font-light text-white tracking-tight">
            Share your brief and LUKLAK Saigon will respond with a suitable direction for your project.
          </h2>
          
          <div className="flex flex-col gap-2 text-[11px] md:text-xs text-white/45 font-light mt-16 md:mt-32 lg:mt-48">
            <p>43R/10 Ho Van Hue, Duc Nhuan Ward, Phu Nhuan, Ho Chi Minh City</p>
            <p>+84 93 247 88 58 &middot; info@luklaksg.vn</p>
          </div>
        </div>

        {/* Right Side: Form styled like screenshot */}
        <div className="lg:col-span-7 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Row 1: Full name and Phone number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input 
                type="text" 
                required 
                placeholder="Full name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full h-14 px-5 bg-[#201E1D] border border-white/10 rounded-[6px] text-white placeholder:text-white/30 text-sm md:text-base outline-none focus:border-[#DED3B8]/60 transition-all"
              />
              <input 
                type="tel" 
                required 
                placeholder="Phone number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full h-14 px-5 bg-[#201E1D] border border-white/10 rounded-[6px] text-white placeholder:text-white/30 text-sm md:text-base outline-none focus:border-[#DED3B8]/60 transition-all"
              />
            </div>

            {/* Row 2: Email address and Select service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input 
                type="email" 
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full h-14 px-5 bg-[#201E1D] border border-white/10 rounded-[6px] text-white placeholder:text-white/30 text-sm md:text-base outline-none focus:border-[#DED3B8]/60 transition-all"
              />
              <CustomSelect 
                value={formData.service} 
                onChange={(val) => setFormData({...formData, service: val})} 
                placeholder="Select service" 
                options={serviceOptions} 
              />
            </div>

            {/* Row 3: Select building type */}
            <CustomSelect 
              value={formData.buildingType} 
              onChange={(val) => setFormData({...formData, buildingType: val})} 
              placeholder="Select building type" 
              options={buildingOptions} 
            />

            {/* Row 4: Short project description */}
            <textarea 
              required 
              rows="5" 
              placeholder="Short project description"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-5 bg-[#201E1D] border border-white/10 rounded-[6px] text-white placeholder:text-white/30 text-sm md:text-base outline-none focus:border-[#DED3B8]/60 resize-none transition-all"
            ></textarea>

            {/* Bottom note */}
            <p className="text-[10px] md:text-[11px] text-white/40 leading-relaxed font-light mt-1">
              Your information is used only so LUKLAK Saigon can advise on scope, schedule and a suitable delivery direction.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FAF7F2] text-secondary hover:bg-white transition-all duration-300 font-bold uppercase tracking-[0.2em] text-[11px] md:text-xs py-4 md:py-5 rounded-none flex items-center justify-center gap-2 mt-4 disabled:opacity-50"
            >
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
              <span className="text-sm font-semibold relative top-[-1px] ml-1">↗</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
