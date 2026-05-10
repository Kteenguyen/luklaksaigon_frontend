import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from '../../Dự án/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg';
import img2 from '../../Dự án/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';

// Component Text Scrubbing: Mờ -> Sáng khi cuộn chuột
function ScrubbingText({ text }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"] // Bắt đầu sáng khi vào khung hình, sáng hết khi tới giữa màn
  });

  const words = text.split(" ");
  return (
    <p ref={container} className="flex flex-wrap text-3xl md:text-4xl lg:text-6xl font-serif font-light leading-snug text-secondary">
      {words.map((word, i) => {
        // Tính toán khoảng scroll cho từng từ
        const start = i / words.length;
        const end = start + (1 / words.length);
        // Map scroll progress vào opacity
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        return (
          <motion.span key={i} style={{ opacity }} className="mr-[0.25em] mb-[0.1em]">
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}

export default function About() {
  return (
    <section id="about" className="relative w-full bg-background text-secondary py-32 md:py-48 px-8 md:px-16 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        {/* Tiêu đề góc nhỏ */}
        <div className="mb-16 md:mb-32">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary border-b border-secondary/20 pb-2">
            Về chúng tôi
          </span>
        </div>

        {/* Text Scrubbing (Nội dung chính) */}
        <div className="w-full lg:w-10/12">
          <ScrubbingText text="Luklak Architects Sài Gòn - Nâng tầm trải nghiệm sống qua những không gian mang dấu ấn cá nhân và giá trị lâu dài." />
        </div>

        {/* Cấu trúc chia cột bên dưới */}
        <div className="mt-32 flex flex-col lg:flex-row gap-24 items-start">
          
          {/* Cột trái: Hình ảnh Asymmetric */}
          <div className="w-full lg:w-5/12 flex flex-col gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/5] overflow-hidden rounded-sm"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={img1} 
                alt="Architecture details" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-3/4 ml-auto aspect-square overflow-hidden rounded-sm -mt-24 relative z-10 shadow-2xl"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={img2} 
                alt="Interior details" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Cột phải: Đoạn văn chi tiết */}
          <div className="w-full lg:w-7/12 flex flex-col gap-12 pt-12 lg:pl-12">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-xl font-light text-text-main leading-relaxed"
            >
              Với trụ sở đặt tại Thành phố Hồ Chí Minh – Việt Nam, chúng tôi là một phần của mạng lưới LukLak Architects Việt Nam, ra đời từ năm 2025. Tự hào về sự phát triển không ngừng và cam kết mang lại những giải pháp kiến trúc và dịch vụ chất lượng nhất.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl font-light text-text-main leading-relaxed"
            >
              Luklak Architects Sài Gòn là thương hiệu thiết kế – thi công kiến trúc và nội thất với định vị <strong className="text-secondary font-normal">“Thiết kế sáng tạo, kết hợp thẩm mỹ và tiện nghi hiện đại”</strong>.
            </motion.p>

            {/* Core Values */}
            <div className="flex flex-col gap-8 mt-8 border-t border-secondary/10 pt-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-xl font-serif text-secondary mb-4">Giá trị</h3>
                <p className="text-text-main font-light leading-relaxed">
                  Mang đến không gian sống độc đáo và đẳng cấp, vừa đáp ứng tiện ích thực tế, vừa thể hiện phong cách cá nhân. Khách hàng được sở hữu thiết kế tùy chỉnh khác biệt và trải nghiệm dịch vụ trọn gói, từ ý tưởng đến hoàn thiện.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h3 className="text-xl font-serif text-secondary mb-4">Điểm độc đáo</h3>
                <p className="text-text-main font-light leading-relaxed">
                  Sản phẩm thiết kế có gu và định hình riêng. Là đơn vị thiết kế - thi công tiên phong trong việc nhân chuỗi và quy mô lớn trong ngành.
                </p>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
