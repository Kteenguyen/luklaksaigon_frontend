"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';
import HomeCTA from "../../components/HomeCTA";
import Footer from "../../components/Footer";
import { ShieldCheck, HeartHandshake, Award, Lightbulb, Zap, Users } from 'lucide-react';

// Assets
import imgKienTruc from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg";
import imgHien from "../../assets/hr/Khúc Văn Hiển_Giám đốc Luklak Sài Gòn.webp";
import imgToan from "../../assets/hr/NGuyễn Thế Toàn_Chủ trì dự án.png";
import imgPhuc from "../../assets/hr/Hoàng Phúc_xxx.png";
import imgHung from "../../assets/hr/Hưng lê__.png";
import imgAddress from "../../assets/systemImage/address-branch.JPG";
import imgTeam from "../../assets/systemImage/team.webp";

/* =====================================================================
   1. HERO SECTION
   ===================================================================== */
function AboutHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-secondary flex items-center justify-center" data-theme="dark">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img
          src={imgKienTruc.src || imgKienTruc}
          alt="Luklak Architecture"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-primary text-xs md:text-sm tracking-[0.3em] uppercase mb-6"
        >
          Về Chúng Tôi
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-8xl font-serif font-light text-surface leading-tight tracking-wide"
        >
          <span className="uppercase tracking-widest block mb-2">Luklak Architects</span>
          <span className="italic font-normal text-surface/80">Sài Gòn</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 text-surface/60 font-light text-base md:text-lg max-w-xl mx-auto tracking-wide"
        >
          "Thiết kế sáng tạo, kết hợp thẩm mỹ và tiện nghi hiện đại"
        </motion.p>
      </div>
    </section>
  );
}

/* =====================================================================
   2. LUKLAK GROUP (Scrubbing Text)
   ===================================================================== */
function ScrubbingText({ text }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 80%", "end 50%"]
  });

  const words = text.split(" ");
  return (
    <p ref={container} className="flex flex-wrap text-2xl md:text-4xl lg:text-5xl font-serif font-light leading-snug text-secondary">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
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

function GroupSection() {
  return (
    <section className="w-full bg-background text-secondary py-32 px-8 md:px-16 overflow-hidden" data-theme="light">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

        {/* Left: Image Split */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
            <img src={imgKienTruc.src || imgKienTruc} alt="Luklak Architecture Detail" className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-[2s] ease-out" />
          </div>
        </motion.div>

        {/* Right: Content Split */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full lg:w-1/2 flex flex-col"
        >
          <span className="text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-12 inline-block self-start">
            Luklak Group
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-8">
            Kiến tạo giải pháp <br /><span className="italic text-secondary/70">không gian hoàn mỹ.</span>
          </h2>
          <p className="text-secondary/70 font-light leading-relaxed mb-12 text-lg">
            Ra đời năm 2020, Luklak Group không ngừng nỗ lực kiến tạo các giải pháp không gian hoàn mỹ. Bằng tư duy tiên phong, chúng tôi lấy kiến trúc và xây dựng làm cốt lõi để phát triển một hệ sinh thái đa ngành bền vững tại Việt Nam.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-secondary/10">
            <div>
              <h4 className="text-4xl font-serif text-primary mb-2">04</h4>
              <p className="text-xs uppercase tracking-widest text-secondary/50 mb-2">Trụ sở</p>
              <p className="text-sm font-light text-secondary/70">Hà Nội, Đà Nẵng, Huế, TP.HCM</p>
            </div>
            <div>
              <h4 className="text-4xl font-serif text-primary mb-2">1000+</h4>
              <p className="text-xs uppercase tracking-widest text-secondary/50 mb-2">Nhân sự</p>
              <p className="text-sm font-light text-secondary/70">Chuyên môn cao, tận tâm</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* =====================================================================
   2.5 SƠ ĐỒ HỆ THỐNG (System/Org Diagram)
   ===================================================================== */
function SystemDiagramSection() {
  const divisions = [
    {
      title: "Lĩnh Vực Thiết Kế",
      icon: "01",
      items: ["Thiết kế kiến trúc", "Thiết kế nội thất", "Thiết kế cảnh quan"]
    },
    {
      title: "Lĩnh Vực Thi Công",
      icon: "02",
      items: ["Thi công xây dựng", "Thi công nội thất", "Quản lý dự án", "Dịch vụ bảo trì"]
    },
    {
      title: "Lĩnh Vực Sản Xuất",
      icon: "03",
      items: ["Sản xuất sản phẩm nội thất", "Sản xuất sản phẩm chiếu sáng"]
    },
    {
      title: "Lĩnh Vực Thương Mại",
      icon: "04",
      items: ["Luklak lighting", "Luklak ceramic", "Luklak decor"]
    }
  ];

  return (
    <section className="w-full bg-secondary text-white py-32 px-8 md:px-16 border-t border-white/10 relative overflow-hidden" data-theme="dark">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-white/20 pb-2 mb-6 inline-block">
            Mô hình hệ thống
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-white leading-tight">
            Sơ Đồ Hệ Thống <br /><span className="text-primary italic">Ecosystem Chart</span>
          </h2>
          <p className="text-white/50 text-sm font-light mt-6 max-w-xl leading-relaxed">
            Luklak Group vận hành một chuỗi liên kết chặt chẽ từ thiết kế, thi công, sản xuất đến thương mại bán lẻ nhằm đảm bảo chất lượng công trình khép kín tối ưu nhất.
          </p>
        </div>

        {/* Central Hub Flow Diagram */}
        <div className="flex flex-col items-center relative w-full">
          
          {/* Main Core Node */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="px-12 py-6 border border-primary/50 bg-background text-secondary rounded-sm shadow-2xl relative z-10 hover:bg-primary hover:text-white transition-colors duration-500 mb-20"
          >
            <h3 className="text-xl font-sans tracking-[0.3em] font-medium uppercase text-center">
              LUKLAK GROUP
            </h3>
          </motion.div>

          {/* Grid connecting lines */}
          <div className="hidden lg:block absolute top-[4.5rem] bottom-[16rem] w-[1px] bg-white/10 left-1/2 -translate-x-1/2 z-0" />
          <div className="hidden lg:block absolute top-[9rem] w-3/4 h-[1px] bg-white/10 left-1/2 -translate-x-1/2 z-0" />

          {/* Core Divisions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full relative z-10">
            {divisions.map((div, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 border border-white/10 rounded-sm bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/50 transition-all duration-500 flex flex-col items-center text-center group min-h-[300px]"
              >
                {/* Connecting branch marker */}
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-xs text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500 font-sans font-medium">
                  {div.icon}
                </div>

                <h4 className="text-xl font-serif text-white mb-6 tracking-wide group-hover:text-primary transition-colors duration-300">
                  {div.title}
                </h4>

                <div className="w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-primary/50 transition-all duration-500 mb-6" />

                <ul className="flex flex-col gap-4 text-xs font-light text-white/50 w-full group-hover:text-white/80 transition-colors duration-500">
                  {div.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="hover:text-primary transition-colors py-1 border-b border-white/[0.03] last:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   3. SỨ MỆNH & TẦM NHÌN (Bento Grid + Counter)
   ===================================================================== */
function AnimatedCounter({ from, to, duration = 2 }) {
  const nodeRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.5 });
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (nodeRef.current) nodeRef.current.textContent = Math.round(value);
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration]);

  return <span ref={nodeRef}>{from}</span>;
}

function VisionMissionSection() {
  return (
    <section className="w-full bg-background text-secondary py-32 px-8 md:px-16 border-t border-secondary/10" data-theme="light">
      <div className="max-w-7xl mx-auto">

        {/* TOP: Sticky Split Layout for Mission & Vision */}
        <div className="flex flex-col md:flex-row items-start gap-16 lg:gap-24 mb-32">

          {/* Sticky Title */}
          <div className="w-full md:w-1/3 sticky top-32">
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] mb-4 block">Triết lý doanh nghiệp</span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-tight">Sứ Mệnh <br />& Tầm Nhìn</h2>
          </div>

          {/* Scrollable Content */}
          <div className="w-full md:w-2/3 flex flex-col gap-32">
            {/* Mission */}
            <div>
              <h3 className="text-2xl font-serif mb-12 text-primary border-b border-secondary/10 pb-4">04 Sứ Mệnh</h3>
              <div className="flex flex-col gap-12">
                {[
                  "Phụng sự khách hàng",
                  "Tư duy đổi mới, Sáng tạo không ngừng",
                  "Hệ sinh thái Tinh gọn & Kết nối sâu",
                  "Tầm nhìn cộng đồng & Bền vững"
                ].map((text, idx) => (
                  <div key={idx} className="flex items-start gap-8 group">
                    <span className="text-4xl md:text-5xl font-serif text-secondary/20 group-hover:text-primary transition-colors duration-500">
                      0{idx + 1}
                    </span>
                    <p className="text-2xl md:text-3xl font-light leading-snug pt-2 text-secondary/80 group-hover:text-secondary transition-colors duration-500">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div>
              <h3 className="text-2xl font-serif mb-12 text-primary border-b border-secondary/10 pb-4">Tầm Nhìn</h3>
              <div className="flex flex-col gap-6 border border-secondary/10 p-12 rounded-sm bg-secondary/5 hover:border-secondary/30 transition-colors">
                <h4 className="text-3xl md:text-4xl font-serif font-light leading-snug">04 Trụ cột</h4>
                <p className="text-secondary/70 font-light leading-relaxed text-lg">
                  4 Trụ cột – 1 Phát triển vững chắc trên 4 trụ cột chiến lược:<br />
                  Thương mại – Dịch vụ – Sản xuất – Bất động sản
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: Full Width Stats Layout */}
        <div className="flex flex-col gap-16 w-full">

          {/* Project Block (Horizontal panoramic) */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm group bg-secondary">
            <img src={imgKienTruc.src || imgKienTruc} alt="Công trình Luklak" className="w-full h-full object-cover object-center filter grayscale opacity-40 group-hover:opacity-80 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full flex flex-col justify-end">
              <h3 className="text-7xl md:text-8xl lg:text-9xl font-serif text-primary mb-2">1000+</h3>
              <p className="text-sm md:text-lg uppercase tracking-widest text-surface/90 font-medium mb-4">Công trình</p>
              <p className="text-sm md:text-base font-light text-surface/60 max-w-xl leading-relaxed">
                Công trình đã và đang hoàn thiện, mỗi công trình là một "chìa khoá trao tay" được hoàn thiện chỉn chu – bài bản – không lặp lại.
              </p>
            </div>
          </div>

          {/* Map Block (Split 50/50 for tall map) */}
          <div className="w-full bg-secondary/5 rounded-sm border border-secondary/10 flex flex-col md:flex-row overflow-hidden group">
            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-background z-10 shadow-[20px_0_30px_rgba(0,0,0,0.02)]">
              <h3 className="text-7xl md:text-9xl font-serif text-primary mb-2">05</h3>
              <p className="text-sm md:text-lg uppercase tracking-widest text-secondary/90 font-medium mb-8">Trụ sở chiến lược</p>
              <p className="text-base md:text-lg font-light text-secondary/70 leading-relaxed mb-10">
                Hiện diện tại Hà Nội, Hải Phòng Đà Nẵng, Huế, TP. Hồ Chí Minh
              </p>
              <ul className="flex flex-col gap-6 text-secondary/80 font-serif text-xl md:text-2xl">
                <li className="flex items-center gap-6"><span className="w-3 h-3 rounded-full bg-primary/40 border border-primary" /> Hà Nội</li>
                <li className="flex items-center gap-6"><span className="w-3 h-3 rounded-full bg-primary/40 border border-primary" /> Hải Phòng</li>
                <li className="flex items-center gap-6"><span className="w-3 h-3 rounded-full bg-primary/40 border border-primary" /> Đà Nẵng</li>
                <li className="flex items-center gap-6"><span className="w-3 h-3 rounded-full bg-primary/40 border border-primary" /> Huế</li>
                <li className="flex items-center gap-6"><span className="w-3 h-3 rounded-full bg-primary/40 border border-primary" /> TP. Hồ Chí Minh</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-[800px] bg-surface flex items-center justify-center p-8">
              <img src={imgAddress.src || imgAddress} alt="Bản đồ các chi nhánh Luklak" className="w-full h-full object-contain object-center opacity-80 group-hover:scale-[1.02] transition-transform duration-1000 mix-blend-multiply" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/* =====================================================================
   4. GIÁ TRỊ CỐT LÕI (Hover List)
   ===================================================================== */
const values = [
  { title: "Uy tín", icon: ShieldCheck, desc: "Giữ vững cam kết với khách hàng" },
  { title: "Tôn trọng", icon: HeartHandshake, desc: "Trân trọng đối tác và nhân sự" },
  { title: "Chất lượng", icon: Award, desc: "Đỉnh cao trong từng chi tiết" },
  { title: "Sáng tạo", icon: Lightbulb, desc: "Liên tục đổi mới tư duy thiết kế" },
  { title: "Tốc độ", icon: Zap, desc: "Hiệu quả và đúng tiến độ" },
  { title: "Đoàn kết", icon: Users, desc: "Sức mạnh từ sự thấu hiểu tập thể" }
];

function CoreValuesSection() {
  return (
    <section className="relative w-full bg-background text-secondary py-32 px-8 md:px-16 overflow-hidden" data-theme="light">
      {/* Subtle Background Image */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <img src={imgKienTruc.src || imgKienTruc} alt="Background" className="w-full h-full object-cover grayscale mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
            Bản sắc doanh nghiệp
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light">Giá trị Cốt lõi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-secondary/5 border border-secondary/10 p-10 hover:bg-secondary/10 hover:border-primary/50 transition-all duration-500 rounded-sm flex flex-col items-start"
            >
              <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-500">
                <v.icon size={40} strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-serif font-light text-secondary mb-4">
                {v.title}
              </h3>
              <p className="text-secondary/60 font-light text-sm tracking-wide">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* =====================================================================
   5. NHÂN SỰ (Asymmetric Grid)
   ===================================================================== */
function LeadershipSection() {
  return (
    <section className="w-full bg-background text-secondary py-32 px-8 md:px-16 border-t border-secondary/10" data-theme="light">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-16 inline-block">
          Nhân sự
        </span>

        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 border-b border-secondary/10 pb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-serif mb-6 text-primary">Triết lý thiết kế</h3>
            <p className="text-secondary/70 font-light leading-relaxed text-lg">
              Đề cao sự thấu hiểu mục tiêu và tiềm năng của từng không gian. Chúng tôi kết nối chặt chẽ giữa thiết kế, khách hàng và bối cảnh tự nhiên.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="text-2xl font-serif mb-6 text-primary">Tư duy lãnh đạo</h3>
            <p className="text-secondary/70 font-light leading-relaxed text-lg">
              Liên tục nghiên cứu, phản biện và đổi mới. Mỗi giải pháp đưa ra không chỉ để hoàn thiện không gian, mà còn kiến tạo giá trị bền vững.
            </p>
          </motion.div>
        </div>

        {/* Directors Grid */}
        <div className="flex flex-col lg:flex-row items-start gap-16">

          {/* Mr Hien */}
          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm group mb-8"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                src={imgHien.src || imgHien}
                alt="Khúc Văn Hiển - Director"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-4xl font-serif text-surface">Khúc Văn Hiển</h3>
                <p className="text-primary tracking-widest uppercase text-xs mt-2">Director - Luklak Sài Gòn</p>
              </div>
            </motion.div>
            <p className="text-secondary/70 font-light leading-relaxed mb-6 text-lg italic border-l-2 border-primary pl-6">
              “Với kiến trúc, không có gì là ngẫu nhiên. Tất cả bắt đầu từ một lựa chọn.”
            </p>
            <p className="text-secondary/70 font-light leading-relaxed mb-6">
              Khúc Văn Hiển định hướng đội ngũ bằng tư duy thiết kế tinh gọn, luôn đề cao sự kết nối hoàn hảo giữa công năng thực tế và chiều sâu cảm xúc.
            </p>
            <div className="flex gap-8 text-sm font-light text-secondary/50">
              <a href="mailto:info@luklaksg.vn" className="hover:text-primary transition-colors">info@luklaksg.vn</a>
              <a href="tel:0931258xxx" className="hover:text-primary transition-colors">0931 258 xxx</a>
            </div>
          </div>

          {/* Mr Toan - Khung chờ (So le) */}
          <div className="w-full lg:w-5/12 lg:mt-48">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
              className="relative aspect-square overflow-hidden rounded-sm group mb-8"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                src={imgToan.src || imgToan}
                alt="Nguyễn Thế Toàn"
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-serif text-surface">Nguyễn Thế Toàn</h3>
                <p className="text-primary tracking-widest uppercase text-xs mt-2">Chủ trì dự án</p>
              </div>
            </motion.div>
            <p className="text-secondary/70 font-light leading-relaxed italic opacity-50">
              (Thông tin tiểu sử sẽ được cập nhật sau...)
            </p>
          </div>

        </div>

        {/* 500+ Nhân sự Block */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-sm group bg-secondary mt-32">
          <img src={imgTeam.src || imgTeam} alt="Đội ngũ Luklak Sài Gòn" className="w-full h-full object-cover object-top filter grayscale opacity-40 group-hover:opacity-80 transition-all duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full flex flex-col justify-end">
            <h3 className="text-7xl md:text-8xl lg:text-9xl font-serif text-primary mb-2">500+</h3>
            <p className="text-sm md:text-lg uppercase tracking-widest text-surface/90 font-medium mb-4">Nhân sự</p>
            <p className="text-sm md:text-base font-light text-surface/60 max-w-xl leading-relaxed">
              LUKLAK GROUP cam kết xây dựng đội ngũ chuyên môn vững vàng, sáng tạo và trách nhiệm, làm nền tảng cho sự phát triển bền vững và vươn xa.
            </p>
          </div>
        </div>


        {/* Team Grid */}
        <div className="mt-32 pt-16 border-t border-secondary/10 w-full">
          <h3 className="text-2xl font-serif mb-12 text-primary">Đội ngũ chuyên môn</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: 'Hoàng Phúc', title: 'Kiến trúc sư', img: imgPhuc },
              { name: 'Lê Hưng', title: 'Thiết kế Nội thất', img: imgHung },
              { name: 'Thanh Thảo', title: 'Quản lý Dự án', img: imgPhuc },
              { name: 'Văn Quân', title: 'Giám sát Thi công', img: imgHung },
              { name: 'Minh Khang', title: 'Kỹ sư Kết cấu', img: imgPhuc },
              { name: 'Thu Hương', title: 'Thiết kế Cảnh quan', img: imgHung },
              { name: 'Hoàng Nam', title: 'Kiến trúc sư', img: imgPhuc },
              { name: 'Quỳnh Trang', title: 'Thiết kế Nội thất', img: imgHung },
              { name: 'Đức Phát', title: 'Quản lý Dự án', img: imgPhuc },
              { name: 'Ngọc Lan', title: 'Giám sát Thi công', img: imgHung },
              { name: 'Gia Bảo', title: 'Kỹ sư Kết cấu', img: imgPhuc },
              { name: 'Thúy Vi', title: 'Thiết kế Cảnh quan', img: imgHung },
              { name: 'Nhật Minh', title: 'Kiến trúc sư', img: imgPhuc },
              { name: 'Hải Yến', title: 'Thiết kế Nội thất', img: imgHung },
              { name: 'Quang Đại', title: 'Quản lý Dự án', img: imgPhuc }
            ].map((member, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group cursor-pointer flex flex-col"
              >
                {/* Mask reveal container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                  <motion.div
                    variants={{
                      hidden: { clipPath: "inset(100% 0 0 0)" },
                      visible: {
                        clipPath: "inset(0% 0 0 0)",
                        transition: { duration: 2.5, delay: 0, ease: [0.16, 1, 0.3, 1] }
                      }
                    }}
                    className="w-full h-full"
                  >
                    <motion.img
                      initial={{ scale: 1.15 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2.0, ease: "easeOut" }}
                      whileHover={{ scale: 1.05 }}
                      src={member.img.src || member.img}
                      alt={member.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                  </motion.div>
                </div>

                {/* Text fade/slide up */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 1.0, delay: 0, ease: "easeOut" }
                    }
                  }}
                  className="flex flex-col"
                >
                  <h4 className="text-lg font-serif uppercase tracking-widest text-secondary group-hover:text-primary transition-colors duration-500">
                    {member.name}
                  </h4>
                  <p className="text-[13px] font-light text-secondary/60 mt-1 capitalize">
                    {member.title}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================================
   MAIN PAGE EXPORT
   ===================================================================== */
export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <GroupSection />
      <SystemDiagramSection />
      <VisionMissionSection />
      <CoreValuesSection />
      <LeadershipSection />
      <HomeCTA />
      <Footer />
    </main>
  );
}
