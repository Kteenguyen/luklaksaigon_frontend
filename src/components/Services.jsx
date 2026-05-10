import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sử dụng tạm ảnh từ thư mục dự án
import img1 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img2 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import img3 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';
import img4 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg';
import img5 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img6 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';

const services = [
  { id: '01', title: 'Xây dựng nhà trọn gói', desc: 'Tạo nên công trình bền vững, kết hợp thẩm mỹ và chức năng.', img: img1 },
  { id: '02', title: 'Thiết kế kiến trúc', desc: 'Thiết kế sáng tạo, phản ánh phong cách và nhu cầu cá nhân.', img: img2 },
  { id: '03', title: 'Thiết kế nội thất', desc: 'Nội thất hài hòa, tối ưu không gian sống và cá tính.', img: img3 },
  { id: '04', title: 'Thi công phần thô', desc: 'Đảm bảo chất lượng, tiến độ và sự an tâm của khách hàng.', img: img4 },
  { id: '05', title: 'Thi công hoàn thiện', desc: 'Hoàn thiện công trình với sự tận tâm và tỉ mỉ.', img: img5 },
  { id: '06', title: 'Thi công nội thất', desc: 'Thi công chuyên nghiệp, đáp ứng chất lượng vượt trội.', img: img6 },
];

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className="relative w-full bg-secondary text-surface py-32 px-8 md:px-16 overflow-hidden min-h-screen flex items-center transition-colors duration-1000">

      {/* Dynamic Background Images */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            key={activeService}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <img
              src={services.find(s => s.id === activeService)?.img}
              alt="Service Background"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay to ensure text readability against bright images */}
            <div className="absolute inset-0 bg-secondary/60" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="mb-16 md:mb-24 flex justify-between items-end">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-surface/50 border-b border-surface/20 pb-2">
            Lĩnh Vực Hoạt Động
          </span>
        </div>

        {/* Danh sách Dịch vụ */}
        <div className="flex flex-col border-t border-surface/10">
          {services.map((svc, index) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setActiveService(svc.id)}
              onMouseLeave={() => setActiveService(null)}
              className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-10 border-b border-surface/10 cursor-pointer"
            >

              {/* Cột trái: Số & Tiêu đề */}
              <div className="flex items-center gap-8 md:gap-16 w-full md:w-1/2">
                <span className="text-sm md:text-lg font-light text-surface/40 group-hover:text-surface transition-colors duration-300">
                  {svc.id}
                </span>
                <h3 className="text-3xl md:text-5xl font-serif font-light group-hover:pl-4 transition-all duration-500">
                  {svc.title}
                </h3>
              </div>

              {/* Cột phải: Mô tả */}
              <div className="w-full md:w-1/3 mt-4 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-light text-sm md:text-base leading-relaxed">
                  "{svc.desc}"
                </p>
              </div>

              {/* Line hover mở rộng từ trái sang phải */}
              <div className="absolute bottom-0 left-0 h-[1px] bg-surface w-0 group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
