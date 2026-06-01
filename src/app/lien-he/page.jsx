"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "../../components/Footer";

// Branch Images
import imgBranchHN from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg";
import imgBranchDN from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022156_566f910387ff97df3b8de8afff823dab.jpg";
import imgBranchHP from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164053378_cfa2f77057fb49eb138b08b6da4efad0.jpg";
import imgBranchHue from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164107758_bf85d780d66511a9f5ec62b6e7f13bd1.jpg";

// Custom Select Component for high-end luxury dropdown design (Light Theme adapted)
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

  const selectedOption = options.find(opt => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;

  return (
    <div className="relative w-full" ref={containerRef}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full h-11 px-5 bg-white border border-secondary/25 rounded-[6px] text-left text-sm md:text-base outline-none focus:border-primary transition-all flex items-center justify-between cursor-pointer ${
          value ? 'text-secondary font-medium' : 'text-secondary/55'
        }`}
      >
        <span className="truncate pr-4">{displayLabel}</span>
        <svg 
          className={`w-4 h-4 text-secondary/55 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
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
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 right-0 mt-2 z-50 bg-white border border-secondary/10 rounded-[6px] shadow-2xl overflow-hidden max-h-64 overflow-y-auto origin-top"
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
                  className={`w-full text-left px-5 py-3 text-sm md:text-base transition-colors duration-150 cursor-pointer border-b border-secondary/[0.02] last:border-0 hover:bg-secondary/[0.04] flex items-center justify-between ${
                    value === option.value 
                      ? 'text-primary bg-secondary/[0.02] font-semibold' 
                      : 'text-secondary/90 hover:text-secondary'
                  }`}
                >
                  <span>{option.label}</span>
                  {value === option.value && (
                    <span className="text-primary text-xs">✓</span>
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

export default function ContactPage() {
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
    { value: "Thiết kế kiến trúc", label: "Architectural Design / Thiết kế kiến trúc" },
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
    <main className="bg-cream text-secondary min-h-screen relative overflow-hidden" data-theme="light">
      
      {/* Success Modal Overlay */}
      <AnimatePresence>
        {success && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-modal-content flex items-center justify-center p-6 bg-secondary/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white text-secondary max-w-md w-full p-10 rounded-[8px] border border-secondary/10 shadow-2xl flex flex-col items-center text-center relative pointer-events-auto"
            >
              <div className="w-12 h-12 rounded-full border border-primary bg-primary/5 flex items-center justify-center mb-6">
                <span className="text-primary text-xl">✓</span>
              </div>
              <h3 className="text-2xl font-serif font-light text-secondary mb-3">Gửi yêu cầu thành công</h3>
              <p className="text-secondary/60 font-light text-xs leading-relaxed mb-6">
                Hệ thống CMS đã ghi nhận thông tin đăng ký của bạn. KTS trưởng LUKLAK Sài Gòn sẽ liên hệ trực tiếp qua số điện thoại để tư vấn phương án thiết kế sớm nhất.
              </p>
              <button 
                onClick={() => setSuccess(false)}
                className="w-full bg-secondary text-white tracking-widest uppercase text-[10px] font-semibold py-3 hover:bg-secondary-deep transition-colors duration-300 rounded-none cursor-pointer"
              >
                Đóng
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Contact Section */}
      <section className="max-w-[90rem] mx-auto px-8 md:px-16 lg:px-24 pt-36 pb-24 relative z-20">
        
        {/* ROW 1: Hero & Office details side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Hero Header & Intro */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-left">
            <div className="max-w-xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-primary text-[10px] tracking-[0.4em] uppercase border-b border-secondary/15 pb-2 mb-6 inline-block font-semibold"
              >
                Get in touch
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-secondary mb-6 tracking-tight flex flex-col gap-2 leading-none"
              >
                <span>Hãy cùng nhau</span>
                <span className="text-primary italic font-normal">Kiến tạo</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-secondary/90 font-light text-base md:text-lg leading-relaxed"
              >
                Khởi đầu hành trình kiến tạo tổ ấm mơ ước cùng LUKLAK. Chia sẻ ý tưởng của bạn, đội ngũ kiến trúc sư hàng đầu của chúng tôi sẽ liên hệ để đồng hành.
              </motion.p>
            </div>
          </div>

          {/* Right Column: Office Details */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left bg-white/40 backdrop-blur-sm p-8 md:p-10 border border-secondary/[0.06] rounded-[8px]">
            <div>
              <span className="text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase font-semibold block mb-3">
                Consultation Office
              </span>
              <h3 className="text-2xl md:text-3xl font-serif font-light text-secondary mb-3">
                Văn phòng LUKLAK Sài Gòn
              </h3>
              <p className="font-light text-secondary/90 leading-relaxed text-sm md:text-base mb-4">
                43R/10 - Hồ Văn Huê, Phường 9<br />
                Quận Phú Nhuận, Thành phố Hồ Chí Minh
              </p>
              <div className="h-[1px] w-12 bg-primary/30 my-4" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex flex-col gap-2 font-light text-secondary/90 text-sm md:text-base">
                  <p className="flex flex-col text-left">
                    <span className="text-[9px] uppercase tracking-widest text-secondary/50 font-bold mb-0.5">Hotline</span>
                    <a href="tel:0932478858" className="hover:text-primary transition-colors font-medium text-secondary text-base">
                      093 247 88 58
                    </a>
                  </p>
                  <p className="flex flex-col text-left mt-2">
                    <span className="text-[9px] uppercase tracking-widest text-secondary/50 font-bold mb-0.5">Email</span>
                    <a href="mailto:info@luklaksg.vn" className="hover:text-primary transition-colors font-medium text-secondary text-base">
                      info@luklaksg.vn
                    </a>
                  </p>
                </div>

                <div className="flex flex-col gap-4 font-light text-secondary/90 text-sm md:text-base">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-secondary/50 font-bold block mb-1">
                      Working Hours
                    </span>
                    <p className="font-light text-secondary/90 text-sm leading-relaxed">
                      Thứ 2 &mdash; Thứ 7: 8:00 AM - 5:30 PM <br />
                      Chủ nhật: Hẹn trước
                    </p>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-secondary/50 font-bold block mb-1">
                      Follow Us
                    </span>
                    <div className="flex gap-4">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary/85 hover:text-secondary text-xs tracking-wider uppercase transition-colors">Facebook</a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary/85 hover:text-secondary text-xs tracking-wider uppercase transition-colors">Instagram</a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-secondary/85 hover:text-secondary text-xs tracking-wider uppercase transition-colors">LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-[1px] w-full bg-secondary/10 mb-16" />

        {/* ROW 2: Standalone Form card (Centered & Spacious) */}
        <div className="max-w-[820px] mx-auto w-full">
          <div className="bg-white p-8 md:p-12 border border-secondary/10 rounded-[8px] shadow-sm text-left">
            <h3 className="text-2xl md:text-3xl font-serif font-light text-secondary mb-8 text-center">
              Đăng ký tư vấn thiết kế
            </h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Row 1: Full name and Phone number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-secondary/75 font-semibold">Họ và tên *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Nhập họ tên của bạn"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full h-11 px-4 bg-white border border-secondary/25 rounded-[6px] text-secondary placeholder:text-secondary/55 text-sm md:text-base outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-secondary/75 font-semibold">Số điện thoại *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="Nhập số điện thoại"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full h-11 px-4 bg-white border border-secondary/25 rounded-[6px] text-secondary placeholder:text-secondary/55 text-sm md:text-base outline-none focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email and Selected Service */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-secondary/75 font-semibold">Địa chỉ Email</label>
                  <input 
                    type="email" 
                    placeholder="Nhập email (tuỳ chọn)"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full h-11 px-4 bg-white border border-secondary/25 rounded-[6px] text-secondary placeholder:text-secondary/55 text-sm md:text-base outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-secondary/75 font-semibold">Dịch vụ quan tâm *</label>
                  <CustomSelect 
                    value={formData.service} 
                    onChange={(val) => setFormData({...formData, service: val})} 
                    placeholder="Chọn dịch vụ" 
                    options={serviceOptions} 
                  />
                </div>
              </div>

              {/* Row 3: Building Type */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.15em] text-secondary/75 font-semibold">Loại hình công trình *</label>
                <CustomSelect 
                  value={formData.buildingType} 
                  onChange={(val) => setFormData({...formData, buildingType: val})} 
                  placeholder="Chọn loại hình" 
                  options={buildingOptions} 
                />
              </div>

              {/* Row 4: Description */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.15em] text-secondary/75 font-semibold">Mô tả dự án &amp; yêu cầu *</label>
                <textarea 
                  required 
                  rows="3" 
                  placeholder="Lời nhắn của bạn (diện tích, phong cách, vị trí, ngân sách, hoặc yêu cầu cụ thể...)"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-4 bg-white border border-secondary/25 rounded-[6px] text-secondary placeholder:text-secondary/55 text-sm md:text-base outline-none focus:border-primary resize-none transition-all h-28"
                ></textarea>
              </div>

              <p className="text-[10px] text-secondary/60 leading-relaxed font-light mt-1 text-center md:text-left">
                * Thông tin của bạn được cam kết bảo mật và chỉ sử dụng cho mục đích tư vấn phương án thiết kế bởi Luklak.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-white hover:bg-secondary-deep hover:shadow-lg transition-all duration-300 font-bold uppercase tracking-[0.2em] text-xs py-4 rounded-none flex items-center justify-center gap-2 mt-2 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? 'ĐANG GỬI...' : 'GỬI ĐĂNG KÝ TƯ VẤN'}
                <span className="text-sm font-semibold relative top-[-1px] ml-1">↗</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Branches Network Section */}
      <section className="w-full border-t border-secondary/15 bg-white py-24 mb-16 relative z-20">
        <div className="max-w-[90rem] mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase block mb-4">
              Network
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-secondary">
              Hệ thống Chi nhánh Toàn quốc
            </h2>
            <p className="text-secondary/60 text-sm font-light mt-4 leading-relaxed">
              Luklak không ngừng phát triển và mở rộng quy mô để mang các giải pháp thiết kế - thi công kiến trúc chuẩn mực đến với khách hàng trên khắp cả nước.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: 'Văn phòng Hà Nội', 
                address: 'Căn 03, Dãy C1, Biệt thự Embassy Garden, Tây Hồ, Hà Nội', 
                phone: '093 247 88 58', 
                status: 'Chi nhánh miền Bắc',
                image: imgBranchHN
              },
              { 
                name: 'Văn phòng Đà Nẵng', 
                address: '143 Nguyễn Công Trứ, An Hải Bắc, Sơn Trà, Đà Nẵng', 
                phone: '093 247 88 58', 
                status: 'Chi nhánh miền Trung',
                image: imgBranchDN
              },
              { 
                name: 'Văn phòng Hải Phòng', 
                address: '92 Lạch Tray, Ngô Quyền, Hải Phòng', 
                phone: '093 247 88 58', 
                status: 'Văn phòng đại diện',
                image: imgBranchHP
              },
              { 
                name: 'Văn phòng Huế', 
                address: '48 Bến Nghé, Phú Hội, Thành phố Huế', 
                phone: '093 247 88 58', 
                status: 'Văn phòng đại diện',
                image: imgBranchHue
              },
            ].map((branch, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
                key={i}
                className="flex flex-col border border-secondary/10 rounded-[8px] bg-white overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-500 group cursor-default"
              >
                {/* Branch Image */}
                <div className="relative w-full h-48 overflow-hidden bg-neutral-100">
                  <img 
                    src={branch.image.src || branch.image} 
                    alt={branch.name} 
                    className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[9px] uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-[4px] font-semibold">
                      {branch.status}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                  </div>
                  <h4 className="text-xl font-serif text-secondary mb-4 group-hover:text-primary transition-colors">
                    {branch.name}
                  </h4>
                  <p className="text-xs font-light text-secondary/50 leading-relaxed mb-6 min-h-[3rem]">
                    {branch.address}
                  </p>
                  <div className="border-t border-secondary/10 pt-5 mt-auto flex items-center gap-3">
                    <svg className="w-3.5 h-3.5 text-secondary/40 group-hover:text-primary transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <p className="text-xs tracking-wider font-semibold text-secondary/70">{branch.phone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decorative Background Text (Floating) */}
      <div className="absolute top-[40vh] left-0 w-full overflow-hidden pointer-events-none opacity-[0.015] z-0">
        <div className="whitespace-nowrap font-bold tracking-tighter uppercase text-[200px] leading-none select-none text-secondary">
          LUKLAK SAIGON &mdash; DESIGN & BUILD &mdash;
        </div>
      </div>

      {/* Global Footer Curtain */}
      <Footer />
    </main>
  );
}
