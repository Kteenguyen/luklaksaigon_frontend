"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate, AnimatePresence } from 'framer-motion';
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
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section 
      className="relative w-full h-[85vh] overflow-hidden bg-secondary flex items-center justify-center px-6 md:px-12" 
      data-theme="dark"
    >
      {/* Background Image with Parallax and Overlay */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={imgKienTruc.src || imgKienTruc}
          alt="Kiến tạo giá trị bền vững"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-medium block"
        >
          Về Chúng Tôi
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-surface leading-tight tracking-wide"
        >
          Kiến Tạo Giá Trị Bền Vững <br className="hidden md:inline" /> Trong Ngành Xây Dựng
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-surface/70 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Với chiến lược phát triển bền vững, LUKLAK GROUP hướng đến trở thành tập đoàn xây dựng hàng đầu Việt Nam, đồng thời mở rộng hệ sinh thái đa ngành tại các thành phố lớn.
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
  const [expandedIdx, setExpandedIdx] = useState(0);

  const accordionItems = [
    {
      title: "Luklak Architect Việt Nam",
      content: "Luklak Architects là thành viên thuộc Luklak Group tự hào là một trong những thương hiệu thiết kế thi công Nội thất Kiến trúc có quy mô lớn nhất tại Việt Nam. Với văn phòng đại diện tại ĐÀI LOAN và hệ thống chi nhánh trải dài trên toàn quốc."
    },
    {
      title: "T.A Artelia",
      content: "Đóng vai trò quan trọng trong việc tư vấn quản lý dự án và giám sát thi công chất lượng cao cho các công trình trọng điểm."
    },
    {
      title: "A Plus Constructing",
      content: "Đơn vị tổng thầu thi công xây dựng chuyên nghiệp, bảo đảm tiến độ, chất lượng và an toàn tuyệt đối cho mọi dự án."
    },
    {
      title: "Uma",
      content: "Thương hiệu sản xuất và cung ứng các sản phẩm nội thất, thiết bị chiếu sáng cao cấp, hoàn thiện không gian tinh tế."
    }
  ];

  return (
    <section className="relative w-full bg-[#FAF7F2] text-secondary py-24 md:py-32 px-6 md:px-12 overflow-hidden" data-theme="light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-primary text-xs tracking-[0.3em] uppercase mb-6 font-medium">
              / HỆ THỐNG LUKLAKGROUP
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-secondary leading-tight mb-6">
              Hệ sinh thái <br className="hidden md:inline" />Xây dựng Toàn diện
            </h2>
            <p className="text-secondary/70 font-light leading-relaxed text-sm md:text-base mb-10 max-w-xl">
              Từ những bước đi đầu tiên, chúng tôi đã lựa chọn con đường phát triển bền vững. Mỗi cột mốc là minh chứng cho hành trình kiến tạo giá trị thật, lan tỏa tinh thần đổi mới và khát vọng vươn xa.
            </p>

            {/* Brand Accordion */}
            <div className="flex flex-col mb-12">
              {accordionItems.map((item, index) => {
                const isOpen = expandedIdx === index;
                return (
                  <div 
                    key={index} 
                    className="border-b border-secondary/10 py-5 first:border-t"
                  >
                    <button
                      onClick={() => setExpandedIdx(isOpen ? -1 : index)}
                      className="w-full flex justify-between items-center text-left focus:outline-none group"
                    >
                      <span className={`text-lg md:text-xl font-serif transition-colors duration-300 ${isOpen ? 'text-primary font-medium' : 'text-secondary font-light group-hover:text-primary'}`}>
                        {item.title}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                        className={`text-xl font-light transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-secondary/60 group-hover:text-primary'}`}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pt-4 pb-2 text-secondary/70 font-light leading-relaxed text-sm md:text-base">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Button */}
            <div>
              <a
                href="/dang-ky-tu-van"
                className="inline-block border border-secondary text-secondary hover:bg-secondary hover:text-[#FAF7F2] rounded-full px-10 py-4 text-xs tracking-widest uppercase font-medium transition-all duration-300 shadow-sm"
              >
                CHI NHÁNH & VĂN PHÒNG ĐẠI DIỆN ↗
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 relative w-full flex flex-col items-center">
            {/* Map Container */}
            <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[3/4] md:h-[650px] lg:h-[750px] bg-transparent flex items-center justify-center p-4">
              
              {/* Map Image as Background */}
              <img
                src={imgAddress.src || imgAddress}
                alt="Bản đồ hệ thống chi nhánh Luklak"
                className="w-full h-full object-contain opacity-90 mix-blend-multiply"
              />

              {/* SVG Connection Lines (Visible on md and up) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Hanoi Line */}
                <motion.path 
                  d="M 28 20 L 42 24" 
                  stroke="#C95928" 
                  strokeWidth="0.75" 
                  strokeDasharray="4 4" 
                  fill="none" 
                  className="opacity-60"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                {/* Danang Line */}
                <motion.path 
                  d="M 68 46 L 58 48" 
                  stroke="#C95928" 
                  strokeWidth="0.75" 
                  strokeDasharray="4 4" 
                  fill="none" 
                  className="opacity-60"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                {/* HCMC Line */}
                <motion.path 
                  d="M 28 82 L 50 75" 
                  stroke="#C95928" 
                  strokeWidth="0.75" 
                  strokeDasharray="4 4" 
                  fill="none" 
                  className="opacity-60"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </svg>

              {/* Dots & Cards Overlay */}
              {/* 1. Hanoi */}
              <div className="absolute top-[24%] left-[42%] w-4 h-4 -translate-x-1/2 -translate-y-1/2 group">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white shadow-sm"></span>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                transition={{ duration: 0.3 }}
                className="absolute hidden md:block top-[12%] left-[5%] w-[220px] lg:w-[240px] bg-white/95 backdrop-blur-sm p-4 rounded-sm shadow-xl border border-primary/10 transition-all duration-300"
              >
                <h4 className="text-xs font-sans tracking-[0.2em] font-medium uppercase text-primary mb-2">LUKLAK HÀ NỘI</h4>
                <p className="text-xs text-secondary/80 font-light mb-1 leading-relaxed">Số 1, Phạm Huy Thông, Ba Đình, Hà Nội</p>
                <p className="text-xs text-secondary/60 font-medium">Hotline: 024 6687 6661</p>
              </motion.div>

              {/* 2. Danang */}
              <div className="absolute top-[48%] left-[58%] w-4 h-4 -translate-x-1/2 -translate-y-1/2 group">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white shadow-sm"></span>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                transition={{ duration: 0.3 }}
                className="absolute hidden md:block top-[40%] left-[65%] w-[220px] lg:w-[240px] bg-white/95 backdrop-blur-sm p-4 rounded-sm shadow-xl border border-primary/10 transition-all duration-300"
              >
                <h4 className="text-xs font-sans tracking-[0.2em] font-medium uppercase text-primary mb-2">LUKLAK ĐÀ NẴNG</h4>
                <p className="text-xs text-secondary/80 font-light mb-1 leading-relaxed">Số 79 Võ Chí Công, Hòa Xuân, Đà Nẵng</p>
                <p className="text-xs text-secondary/60 font-medium">Hotline: 0934 965 988 - 0935 048 067</p>
              </motion.div>

              {/* 3. HCMC */}
              <div className="absolute top-[75%] left-[50%] w-4 h-4 -translate-x-1/2 -translate-y-1/2 group">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-primary border-2 border-white shadow-sm"></span>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                transition={{ duration: 0.3 }}
                className="absolute hidden md:block top-[78%] left-[5%] w-[220px] lg:w-[240px] bg-white/95 backdrop-blur-sm p-4 rounded-sm shadow-xl border border-primary/10 transition-all duration-300"
              >
                <h4 className="text-xs font-sans tracking-[0.2em] font-medium uppercase text-primary mb-2">LUKLAK TP.HCM</h4>
                <p className="text-xs text-secondary/80 font-light mb-1 leading-relaxed">43R/10, Hồ Văn Huê, Phường 9, Quận Phú Nhuận, Hồ Chí Minh</p>
                <p className="text-xs text-secondary/60 font-medium">Hotline: 097 634 7664</p>
              </motion.div>

            </div>

            {/* Mobile View: Branch Cards in a vertical list below the map */}
            <div className="w-full grid grid-cols-1 gap-6 mt-8 md:hidden px-4">
              <div className="bg-white p-5 rounded-sm shadow-md border border-primary/10">
                <h4 className="text-sm font-sans tracking-[0.2em] font-medium uppercase text-primary mb-2">LUKLAK HÀ NỘI</h4>
                <p className="text-sm text-secondary/80 font-light mb-2">Số 1, Phạm Huy Thông, Ba Đình, Hà Nội</p>
                <p className="text-sm text-secondary/60 font-medium">Hotline: 024 6687 6661</p>
              </div>
              <div className="bg-white p-5 rounded-sm shadow-md border border-primary/10">
                <h4 className="text-sm font-sans tracking-[0.2em] font-medium uppercase text-primary mb-2">LUKLAK ĐÀ NẴNG</h4>
                <p className="text-sm text-secondary/80 font-light mb-2">Số 79 Võ Chí Công, Hòa Xuân, Đà Nẵng</p>
                <p className="text-sm text-secondary/60 font-medium">Hotline: 0934 965 988 - 0935 048 067</p>
              </div>
              <div className="bg-white p-5 rounded-sm shadow-md border border-primary/10">
                <h4 className="text-sm font-sans tracking-[0.2em] font-medium uppercase text-primary mb-2">LUKLAK TP.HCM</h4>
                <p className="text-sm text-secondary/80 font-light mb-2">43R/10, Hồ Văn Huê, Phường 9, Quận Phú Nhuận, Hồ Chí Minh</p>
                <p className="text-sm text-secondary/60 font-medium">Hotline: 097 634 7664</p>
              </div>
            </div>

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
  const bannerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacityText = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.4, 1, 1, 0.4]);

  const stats = [
    {
      number: "04",
      label: "Trụ cột",
      desc: "4 Trụ cột – 1 Phát triển vững chắc trên 4 trụ cột chiến lược: Thương mại – Dịch vụ – Sản xuất – Bất động sản"
    },
    {
      number: "500+",
      label: "Nhân sự",
      desc: "LUKLAK GROUP cam kết xây dựng đội ngũ chuyên môn vững vàng, sáng tạo và trách nhiệm, làm nền tảng cho sự phát triển bền vững và vươn xa."
    },
    {
      number: "5",
      label: "Trụ sở",
      desc: "Hiện diện tại Hà Nội, Hải Phòng, Đà Nẵng, Huế, TP. Hồ Chí Minh"
    },
    {
      number: "1000+",
      label: "Công trình",
      desc: "Công trình đã và đang hoàn thiện, mỗi công trình là một \"chìa khoá trao tay\" được hoàn thiện chỉn chu – bài bản – không lặp lại."
    }
  ];

  const borderClasses = (idx) => {
    let classes = "";
    if (idx > 0) classes += " border-t border-secondary/10";
    if (idx % 2 === 1) classes += " sm:border-l sm:border-secondary/10";
    if (idx === 1) classes += " sm:border-t-0";
    if (idx > 0) classes += " lg:border-t-0 lg:border-l lg:border-secondary/10";
    return classes;
  };

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
        <div className="flex flex-col w-full border border-secondary/10 overflow-hidden rounded-sm bg-[#FAF7F2]">
          
          {/* Top Banner (Horizontal panoramic) */}
          <div ref={bannerRef} className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden bg-secondary">
            <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-[124%] -top-[12%] z-0">
              <img 
                src={imgKienTruc.src || imgKienTruc} 
                alt="Công trình Luklak" 
                className="w-full h-full object-cover object-center filter grayscale opacity-40" 
              />
              <div className="absolute inset-0 bg-black/45" />
            </motion.div>
            
            {/* Parallax Overlay Text */}
            <motion.div 
              style={{ y: yText, opacity: opacityText }}
              className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 md:px-12 pointer-events-none"
            >
              <span className="text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 font-semibold">
                Luklak Group
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-surface leading-tight tracking-wide max-w-4xl">
                Kiến Tạo Không Gian <br className="hidden md:inline" /> Vững Bền Tương Lai
              </h3>
            </motion.div>
          </div>

          {/* Stats Grid directly below it */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#FAF7F2]">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`p-8 md:p-10 flex flex-col justify-start ${borderClasses(idx)}`}
              >
                <span className="text-4xl md:text-5xl font-serif text-primary mb-3 block">
                  {stat.number}
                </span>
                <h4 className="text-xs uppercase tracking-widest text-secondary/50 mb-3 font-semibold">
                  {stat.label}
                </h4>
                <p className="text-sm md:text-base font-light text-secondary/75 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            ))}
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
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#121110] text-surface py-32 px-6 md:px-12 lg:px-16 overflow-hidden min-h-[900px] flex items-center" 
      data-theme="dark"
    >
      {/* SVG Linear Gradient for Icons */}
      <svg className="absolute w-0 h-0" width="0" height="0">
        <defs>
          <linearGradient id="warm-accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C95928" />
            <stop offset="50%" stopColor="#E08354" />
            <stop offset="100%" stopColor="#C95928" />
          </linearGradient>
        </defs>
      </svg>

      {/* Background Banner with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 w-full h-[130%] -top-[15%] pointer-events-none">
        <img 
          src={imgKienTruc.src || imgKienTruc} 
          alt="Core Values Background" 
          className="w-full h-full object-cover filter grayscale opacity-[0.25]" 
        />
        {/* Layered overlays for high-contrast dark theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#121110] via-secondary/75 to-[#121110] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/50 via-transparent to-[#121110]/50" />
      </motion.div>

      <motion.div 
        style={{ y: yContent }}
        className="max-w-7xl mx-auto relative z-10 w-full"
      >
        <div className="text-center mb-24 flex flex-col items-center">
          <span className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-sans font-semibold">
            Bản sắc doanh nghiệp
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white tracking-wide">
            Giá trị Cốt lõi
          </h2>
          <div className="w-16 h-[1px] bg-primary/40 mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {values.map((v, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="group relative bg-white/[0.02] border border-white/10 p-8 md:p-10 rounded-2xl flex flex-col items-start backdrop-blur-md shadow-2xl hover:border-primary/50 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_rgba(201,89,40,0.15)] transition-all duration-500 overflow-hidden"
            >
              {/* Subtle inner border glow on hover */}
              <div className="absolute inset-0 border border-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container with subtle glow */}
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 relative overflow-hidden group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                {/* Background glow in card */}
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                <v.icon 
                  stroke="url(#warm-accent-gradient)" 
                  size={32} 
                  strokeWidth={1.2} 
                  className="relative z-10 filter drop-shadow-[0_2px_10px_rgba(201,89,40,0.25)] group-hover:scale-110 transition-transform duration-500" 
                />
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-light text-white mb-4 group-hover:text-primary transition-colors duration-500">
                {v.title}
              </h3>
              <p className="text-white/60 font-light text-sm md:text-base tracking-wide leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


/* =====================================================================
   5. NHÂN SỰ (Asymmetric Grid)
   ===================================================================== */
function LeadershipSection() {
  const teamCards = [
    {
      type: 'text',
      title: 'Founder & CEO',
      number: '01'
    },
    {
      type: 'photo',
      name: 'Khúc Văn Hiển',
      role: 'Founder & CEO',
      img: imgHien
    },
    {
      type: 'text',
      title: 'Accounting & HR',
      number: '02'
    },
    {
      type: 'photo',
      name: 'Hoàng Phúc',
      role: 'Accounting & HR',
      img: imgPhuc
    },
    {
      type: 'photo',
      name: 'Lê Hưng',
      role: 'Interior Designer',
      img: imgHung
    },
    {
      type: 'photo',
      name: 'Thanh Thảo',
      role: 'HR Specialist',
      img: imgPhuc
    },
    {
      type: 'text',
      title: 'Business Development',
      number: '03'
    },
    {
      type: 'photo',
      name: 'Văn Quân',
      role: 'BD Executive',
      img: imgHung
    },
    {
      type: 'photo',
      name: 'Minh Khang',
      role: 'BD Manager',
      img: imgPhuc
    },
    {
      type: 'text',
      title: 'Project Manager',
      number: '04'
    },
    {
      type: 'photo',
      name: 'Nguyễn Thế Toàn',
      role: 'Project Manager',
      img: imgToan
    },
    {
      type: 'photo',
      name: 'Thu Hương',
      role: 'Project Assistant',
      img: imgHung
    }
  ];

  return (
    <section 
      className="w-full bg-[#151515] py-24 md:py-32 px-6 md:px-12 lg:px-16" 
      data-theme="dark"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section Heading */}
        <div className="mb-16 border-b border-white/10 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase mb-4 block font-semibold">
              Nhân sự
            </span>
            <h2 className="text-4xl md:text-5xl font-sans font-black tracking-tight text-white uppercase">
              MEET OUR TEAM
            </h2>
          </div>
          <p className="text-white/60 font-light max-w-md text-sm md:text-base leading-relaxed">
            Đội ngũ chuyên môn tài năng, nhiệt huyết và tận tâm kiến tạo những không gian sống đẳng cấp và bền vững cùng Luklak.
          </p>
        </div>

        {/* 6-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {teamCards.map((card, idx) => {
            if (card.type === 'text') {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: (idx % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-[3/4] bg-white/[0.03] border border-white/5 p-6 md:p-8 flex flex-col justify-between group transition-all duration-500 hover:bg-white/[0.06] hover:border-white/10"
                >
                  <div className="text-left">
                    <h4 className="text-lg md:text-xl font-sans font-bold text-white leading-tight uppercase tracking-wider">
                      {card.title}
                    </h4>
                  </div>
                  <div className="text-white/20 text-xs font-sans tracking-widest self-end">
                    / {card.number}
                  </div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: (idx % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[3/4] overflow-hidden group cursor-pointer bg-white/[0.02] border border-white/5"
                >
                  <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    src={card.img.src || card.img}
                    alt={card.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                    <span className="text-[10px] text-primary font-semibold tracking-widest uppercase mb-1">
                      {card.role}
                    </span>
                    <h4 className="text-sm md:text-base font-sans font-bold text-white tracking-wide uppercase">
                      {card.name}
                    </h4>
                  </div>
                </motion.div>
              );
            }
          })}
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
