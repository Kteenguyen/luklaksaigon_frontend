"use client";
import { motion } from 'framer-motion';
import aboutBanner from '../assets/systemImage/about-banner.jpg';

export default function About() {
  return (
    <section id="about" className="w-full bg-[#FAF7F2] text-secondary pt-28 md:pt-40 pb-0" data-theme="light">
      <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start px-8 md:px-16 lg:px-24 mb-20 md:mb-28">

        {/* Left Column: Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4"
        >
          <h2 className="text-[11px] md:text-xs tracking-[0.3em] uppercase font-bold text-secondary flex items-center gap-2">
            <span className="text-primary font-bold">/</span> VỀ CHÚNG TÔI
          </h2>
        </motion.div>

        {/* Right Column: Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 flex flex-col gap-8 text-sm md:text-[15px] text-secondary/70 font-light leading-relaxed max-w-4xl"
        >
          <p>
            Được thành lập ngày 10.2020 sau những năm không ngừng nỗ lực, LUKLAK GROUP đã xây dựng thành công những thương hiệu trực thuộc nhằm phục vụ đa dạng nhu cầu của thị trường trong lĩnh vực tư vấn thiết kế và xây dựng. Cùng với 1 chiến lược phát triển bền vững, LUKLAK GROUP định hướng trở thành tập đoàn đa ngành hàng đầu tại Việt Nam vào năm 2033. Hiện tại LUKLAK GROUP đã vững vàng phát triển tại 03 thành phố lớn: TP. Hà Nội, TP. Đà Nẵng và TP. Hồ Chí Minh. Chúng tôi luôn không ngừng sáng tạo, đổi mới cùng với mong muốn kiến tạo thêm nhiều giá trị cho khách hàng, đối tác, cũng như tạo ra môi trường làm việc chất lượng cho đội ngũ nhân viên.
          </p>
          <p>
            Trong giai đoạn 2025 – 2027, LUKLAK GROUP VIỆT NAM đặt mục tiêu phát triển quy mô trên 1000 nhân sự chất lượng cao, tâm huyết. Tiếp tục xây dựng và cải tổ hoàn thiện 03 trụ sở tại 03 thành phố lớn và mở rộng thị trường từ 2025 đến 2027 thêm 10 trụ sở mới tại các tỉnh và thành phố tại Việt Nam.
          </p>
        </motion.div>

      </div>

      {/* Full-width horizontal banner */}
      <div className="w-full h-[350px] md:h-[500px] lg:h-[650px] overflow-hidden relative">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          src={aboutBanner.src || aboutBanner}
          alt="Luklak About Banner"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
