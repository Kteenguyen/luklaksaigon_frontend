"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import imgHien from "../assets/hr/Khúc Văn Hiển_Giám đốc Luklak Sài Gòn.webp";
import imgToan from "../assets/hr/NGuyễn Thế Toàn_Chủ trì dự án.png";

export default function LeadershipPreview() {
  return (
    <section className="w-full bg-background text-secondary py-32 px-8 md:px-16 border-t border-secondary/10" data-theme="light">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-6 inline-block">
              Ban Điều Hành
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-light text-secondary">
              Leadership
            </h2>
          </div>
          <Link 
            href="/ve-chung-toi" 
            className="text-xs uppercase tracking-widest text-primary hover:text-secondary border-b border-primary/40 hover:border-secondary transition-all duration-300 pb-1 self-start md:self-auto"
          >
            Xem tất cả nhân sự &rarr;
          </Link>
        </div>

        {/* Directors grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Mr Hien */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm group mb-8 shadow-xl bg-secondary/5">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={imgHien.src || imgHien}
                alt="Khúc Văn Hiển - Director"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-serif text-white font-light">Khúc Văn Hiển</h3>
                <p className="text-primary tracking-widest uppercase text-[10px] mt-2">Giám đốc Luklak Sài Gòn</p>
              </div>
            </div>
            <p className="text-secondary/70 font-light leading-relaxed italic border-l border-primary pl-6 mb-4">
              “Với kiến trúc, không có gì là ngẫu nhiên. Tất cả bắt đầu từ một lựa chọn.”
            </p>
            <p className="text-secondary/60 font-light text-sm leading-relaxed max-w-lg">
              Định hướng sự phát triển của Luklak Saigon bằng cách tập trung vào chiều sâu công năng kết hợp hoàn hảo cùng mỹ thuật và trải nghiệm sống của từng gia chủ.
            </p>
          </motion.div>

          {/* Mr Toan */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:mt-24"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm group mb-8 shadow-xl bg-secondary/5">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={imgToan.src || imgToan}
                alt="Nguyễn Thế Toàn - Design Lead"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-serif text-white font-light">Nguyễn Thế Toàn</h3>
                <p className="text-primary tracking-widest uppercase text-[10px] mt-2">Chủ trì dự án</p>
              </div>
            </div>
            <p className="text-secondary/70 font-light leading-relaxed italic border-l border-primary pl-6 mb-4">
              “Không gian chính là ngôn ngữ kể câu chuyện tâm hồn của gia chủ.”
            </p>
            <p className="text-secondary/60 font-light text-sm leading-relaxed max-w-lg">
              Chủ trì các dự án thiết kế cao cấp, luôn tìm tòi những cách biểu đạt vật liệu mới và sự giao thoa ánh sáng để khơi dậy linh hồn của mỗi công trình.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
