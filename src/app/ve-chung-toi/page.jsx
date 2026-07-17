"use client";
import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate, AnimatePresence } from 'framer-motion';
import HomeContactForm from "../../components/HomeContactForm";
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

// Core Values Images
import imgUyTin from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg";
import imgTonTrong from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg";
import imgChatLuong from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164007725_487732fcdca5ccf6a4189f90c0c957fa.jpg";
import imgSangTao from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022155_66f13bcfae7d52a8681c0232feeb187f.jpg";
import imgTocDo from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022157_9985b14bc96b0721c6f25d1c6bf3e6a0.jpg";
import imgDoanKet from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022158_478bff7e126689859a32fa842add2090.jpg";


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
          alt="Kiến trúc công trình biệt thự cao cấp do Luklak Architects thực hiện"
          title="Công trình biệt thự cao cấp"
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
    <section className="w-full bg-background text-secondary py-24 md:py-32 px-8 md:px-16 overflow-hidden" data-theme="light">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Full-width Panoramic Team Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full overflow-x-auto no-scrollbar rounded-sm bg-neutral-100 cursor-grab active:cursor-grabbing select-none"
        >
          <img 
            src={imgTeam.src || imgTeam} 
            alt="Đội ngũ nhân sự LUKLAK GROUP VIỆT NAM" 
            title="Tập thể nhân sự Luklak" 
            className="min-w-[640px] md:min-w-0 w-full h-[220px] md:h-auto object-cover object-center filter brightness-[0.98] md:hover:scale-[1.02] transition-transform duration-[2s] ease-out" 
          />
        </motion.div>

        {/* Text split block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 pt-4">
          
          {/* Left Column: Section Title */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <span className="text-secondary tracking-[0.2em] uppercase font-semibold text-sm flex items-center gap-2">
              <span className="text-primary font-normal">/</span> VỀ CHÚNG TÔI
            </span>
          </motion.div>

          {/* Right Column: Paragraphs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-9 flex flex-col gap-6 text-left"
          >
            <p className="text-secondary/80 font-light leading-relaxed text-base md:text-lg">
              Được thành lập ngày 1.10.2020 sau những năm không ngừng nỗ lực, LUKLAK GROUP đã xây dựng thành công những thương hiệu trực thuộc nhằm phục vụ đa dạng nhu cầu của thị trường trong lĩnh vực tư vấn thiết kế và xây dựng. Cùng với 1 chiến lược phát triển bền vững, LUKLAK GROUP định hướng trở thành tập đoàn đa ngành hàng đầu tại Việt Nam vào năm 2033. Hiện tại LUKLAK GROUP đã vững vàng phát triển tại 03 thành phố lớn: TP. Hà Nội, TP. Đà Nẵng và TP. Hồ Chí Minh. Chúng tôi luôn không ngừng sáng tạo, đổi mới cùng với mong muốn kiến tạo thêm nhiều giá trị cho khách hàng, đối tác, cũng như tạo ra môi trường làm việc chất lượng cho đội ngũ nhân viên.
            </p>
            <p className="text-secondary/80 font-light leading-relaxed text-base md:text-lg">
              Trong giai đoạn 2025 – 2027, LUKLAK GROUP VIỆT NAM đặt mục tiêu phát triển quy mô trên 1000 nhân sự chất lượng cao, tâm huyết. Tiếp tục xây dựng và cải tổ hoàn thiện 03 trụ sở tại 03 thành phố lớn và mở rộng thị trường từ 2025 đến 2027 thêm 10 trụ sở mới tại các tỉnh và thành phố tại Việt Nam.
            </p>
          </motion.div>

        </div>

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
    <section className="relative w-full bg-cream text-secondary py-24 md:py-32 px-6 md:px-12 overflow-hidden" data-theme="light">
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
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                href="/lien-he"
                className="inline-block border border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-4 text-xs tracking-[0.2em] uppercase transition-colors duration-500 bg-transparent"
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
                alt="Bản đồ vị trí hệ thống chi nhánh Luklak Architects tại Việt Nam"
                title="Hệ thống chi nhánh Luklak"
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
      from: 0,
      to: 4,
      prefix: "0",
      suffix: "",
      label: "Trụ cột",
      desc: "4 Trụ cột – 1 Phát triển vững chắc trên 4 trụ cột chiến lược: Thương mại – Dịch vụ – Sản xuất – Bất động sản"
    },
    {
      from: 0,
      to: 500,
      prefix: "",
      suffix: "+",
      label: "Nhân sự",
      desc: "LUKLAK GROUP cam kết xây dựng đội ngũ chuyên môn vững vàng, sáng tạo và trách nhiệm, làm nền tảng cho sự phát triển bền vững và vươn xa."
    },
    {
      from: 0,
      to: 5,
      prefix: "",
      suffix: "",
      label: "Trụ sở",
      desc: "Hiện diện tại Hà Nội, Hải Phòng, Đà Nẵng, Huế, TP. Hồ Chí Minh"
    },
    {
      from: 0,
      to: 1000,
      prefix: "",
      suffix: "+",
      label: "Công trình",
      desc: "Công trình đã và đang hoàn thiện, mỗi công trình là một \"chìa khoá trao tay\" được hoàn thiện chỉn chu – bài bản – không lặp lại."
    }
  ];

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

          </div>
        </div>

        {/* BOTTOM: Full Width Stats Layout */}
        <div className="flex flex-col w-full relative">
          
          {/* Top Banner (Horizontal panoramic) */}
          <div ref={bannerRef} className="relative w-full h-[300px] md:h-[450px] lg:h-[500px] overflow-hidden bg-secondary rounded-sm">
            <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-[124%] -top-[12%] z-0">
              <img 
                src={imgKienTruc.src || imgKienTruc} 
                alt="Ảnh thực tế công trình xây dựng biệt thự trọn gói" 
                title="Công trình thi công biệt thự thực tế" 
                className="w-full h-full object-cover object-center filter grayscale opacity-40" 
              />
              <div className="absolute inset-0 bg-black/45" />
            </motion.div>
            
            {/* Parallax Overlay Text */}
            <motion.div 
              style={{ y: yText, opacity: opacityText }}
              className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 md:px-12 pb-16 md:pb-24 pointer-events-none"
            >
              <span className="text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase mb-4 font-semibold">
                Luklak Group
              </span>
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-surface leading-tight tracking-wide max-w-4xl">
                Kiến Tạo Không Gian <br className="hidden md:inline" /> Vững Bền Tương Lai
              </h3>
            </motion.div>
          </div>

          {/* Stats Grid directly below it - Floating & Overlapping */}
          <div className="relative z-20 px-4 md:px-8 lg:px-12 -mt-12 md:-mt-20 lg:-mt-28">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8 }}
                  className="bg-white/95 backdrop-blur-md border border-secondary/[0.08] hover:border-primary/25 p-8 md:p-10 rounded-[8px] flex flex-col justify-start group transition-all duration-500 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_60px_-15px_rgba(201,89,40,0.1)]"
                >
                  <span className="text-5xl lg:text-6.5xl font-serif text-primary tracking-tight font-light mb-3 block">
                    {stat.prefix}
                    <AnimatedCounter from={stat.from} to={stat.to} duration={2.5} />
                    {stat.suffix}
                  </span>
                  
                  <h4 className="text-xs uppercase tracking-widest text-secondary/80 mb-2.5 font-bold">
                    {stat.label}
                  </h4>
                  
                  {/* Decorative Expandable Horizontal Line */}
                  <div className="w-6 h-[1.5px] bg-primary/30 group-hover:w-16 group-hover:bg-primary transition-all duration-500 mb-4" />
                  
                  <p className="text-xs md:text-sm font-light text-secondary/70 leading-relaxed font-sans text-left">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
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
  { title: "Uy tín", icon: ShieldCheck, desc: "Giữ vững cam kết với khách hàng", image: imgUyTin, caption: "KC VILLA - TRUSTWORTHINESS" },
  { title: "Tôn trọng", icon: HeartHandshake, desc: "Trân trọng đối tác và nhân sự", image: imgTonTrong, caption: "KC VILLA - RESPECT" },
  { title: "Chất lượng", icon: Award, desc: "Đỉnh cao trong từng chi tiết", image: imgChatLuong, caption: "KC VILLA - CRAFTSMANSHIP" },
  { title: "Sáng tạo", icon: Lightbulb, desc: "Liên tục đổi mới tư duy thiết kế", image: imgSangTao, caption: "KC VILLA - CREATIVITY" },
  { title: "Tốc độ", icon: Zap, desc: "Hiệu quả và đúng tiến độ", image: imgTocDo, caption: "KC VILLA - VELOCITY" },
  { title: "Đoàn kết", icon: Users, desc: "Sức mạnh từ sự thấu hiểu tập thể", image: imgDoanKet, caption: "KC VILLA - UNITY" }
];

function CoreValuesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  
  // Parallax scrolling for background texture
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-alabaster text-secondary py-16 lg:py-20 px-8 md:px-16 lg:px-24 overflow-hidden flex items-center" 
      data-theme="light"
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

      {/* Subtle Luminous Background Accent Lights */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-[#E08354]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Background Parallax Image Layer (Luminous/Low opacity blend) */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 w-full h-[120%] -top-[10%] pointer-events-none opacity-[0.03] mix-blend-multiply">
        <img 
          src={imgKienTruc.src || imgKienTruc} 
          alt="Phối cảnh thiết kế kiến trúc biệt thự cao cấp" 
          title="Phối cảnh thiết kế biệt thự" 
          className="w-full h-full object-cover filter grayscale" 
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Desktop Split Screen Layout (Hidden on Mobile) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* LEFT COLUMN: Sticky Premium Visual Card */}
          <div className="col-span-5 sticky top-28 flex flex-col items-start justify-start">
            
            {/* Title Block inside left column */}
            <div className="mb-4 text-left">
              <span className="text-primary text-[10px] tracking-[0.3em] uppercase mb-2 font-semibold block">
                / Bản sắc doanh nghiệp
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-light text-secondary tracking-tight leading-tight">
                Giá trị Cốt lõi
              </h2>
            </div>

            {/* Ambient Background Glow behind the card */}
            <div className="absolute w-[200px] h-[200px] bg-primary/10 rounded-full blur-[80px] top-[140px] left-[50px] z-0 pointer-events-none animate-pulse duration-[6s]" />

            {/* Luxury Printed Photo Card with White Border, Gold Trim, and Deep Drop Shadow */}
            <div className="relative w-full max-w-[290px] aspect-[4/5] bg-white p-3 shadow-[0_20px_50px_rgba(201,89,40,0.05),0_10px_20px_rgba(0,0,0,0.03)] border border-secondary/5 rounded-none z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-700 ease-out flex flex-col mt-2">
              
              {/* Huge low-opacity serif background index number */}
              <div className="absolute top-[-30px] left-[-15px] select-none pointer-events-none overflow-hidden z-0">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeIndex}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 0.12, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="font-serif italic font-extrabold text-[240px] leading-none text-primary block"
                  >
                    0{activeIndex + 1}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Image Frame Container */}
              <div className="w-full flex-1 overflow-hidden relative bg-neutral-50 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img 
                      src={values[activeIndex].image.src || values[activeIndex].image} 
                      alt={`Giá trị cốt lõi - ${values[activeIndex].title} do Luklak Saigon cam kết`} 
                      title={`Giá trị cốt lõi: ${values[activeIndex].title}`}
                      className="w-full h-full object-cover filter brightness-[0.97]" 
                    />
                  </motion.div>
                </AnimatePresence>

                {/* LIGHT SWEEP SHINE SHEEN EFFECT */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`sheen-${activeIndex}`}
                    initial={{ x: "-120%", opacity: 0.8 }}
                    animate={{ x: "250%", opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none z-20"
                  />
                </AnimatePresence>
              </div>

              {/* Photo Caption */}
              <div className="pt-3 pb-0.5 flex flex-col justify-center items-start text-secondary font-serif z-10">
                <span className="text-[9px] tracking-[0.2em] font-sans font-bold uppercase text-primary mb-0.5">
                  LUKLAK SAIGON
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeIndex}
                    initial={{ opacity: 0, x: -3 }}
                    animate={{ opacity: 0.4, x: 0 }}
                    exit={{ opacity: 0, x: 3 }}
                    transition={{ duration: 0.25 }}
                    className="text-[8px] uppercase tracking-widest font-mono font-medium"
                  >
                    {values[activeIndex].caption}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            
          </div>

          {/* RIGHT COLUMN: Asymmetric Dynamic Accordion List */}
          <div className="col-span-7 flex flex-col gap-1">
            {values.map((v, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className="group border-b border-secondary/10 py-4 transition-all duration-500 cursor-default relative overflow-hidden"
                >
                  {/* Subtle Background Glow Row */}
                  <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Row Header */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-8">
                      {/* Asymmetrical Floating Line Indicator */}
                      <div className="w-12 flex items-center justify-start overflow-hidden">
                        <motion.div
                          animate={{ x: isActive ? 0 : -48 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="h-[1.5px] w-12 bg-primary"
                        />
                      </div>
                      
                      {/* Serif Index */}
                      <span className={`font-serif text-lg transition-all duration-500 ${isActive ? 'text-primary font-medium' : 'text-secondary/30 group-hover:text-secondary/60'}`}>
                        0{idx + 1}
                      </span>
                      
                      {/* Core Value Title */}
                      <h3 className={`text-2xl md:text-3xl font-serif transition-colors duration-500 ${isActive ? 'text-secondary font-medium' : 'text-secondary/60 group-hover:text-secondary'}`}>
                        {v.title}
                      </h3>
                    </div>

                    {/* Icon with subtle scale rotation */}
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-primary/5 border-primary/20 shadow-[0_4px_12px_rgba(201,89,40,0.06)]' : 'bg-secondary/[0.02] border-secondary/5 group-hover:border-secondary/15'}`}>
                      <v.icon 
                        stroke="url(#warm-accent-gradient)" 
                        size={20} 
                        strokeWidth={1.3} 
                        className={`transition-transform duration-700 ${isActive ? 'scale-110 rotate-12' : 'group-hover:scale-105'}`}
                      />
                    </div>
                  </div>

                  {/* Accordion Detail Area */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-28 pr-16 pt-3 pb-1">
                          <p className="text-secondary/70 font-light leading-relaxed text-sm md:text-base tracking-wide max-w-xl">
                            {v.desc}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                </div>
              );
            })}
          </div>

        </div>

        {/* Mobile Title Block (Visible on mobile, hidden on desktop) */}
        <div className="lg:hidden text-left mb-8 px-2">
          <span className="text-primary text-[10px] md:text-xs tracking-[0.4em] uppercase mb-2 block">
            / Bản sắc doanh nghiệp
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-secondary tracking-tight">
            Giá trị Cốt lõi
          </h2>
        </div>

        {/* Mobile Tactile Card Carousel (Hidden on Desktop) */}
        <div className="lg:hidden flex flex-col gap-6 px-2">
          {values.map((v, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              key={idx}
              className="bg-white border border-secondary/[0.08] rounded-xl overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.02)] p-6 md:p-8 flex flex-col gap-6 relative"
            >
              {/* Top Row: Index, Icon, Title */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="font-serif text-sm text-primary">0{idx + 1}</span>
                  <h3 className="text-xl md:text-2xl font-serif text-secondary font-medium">{v.title}</h3>
                </div>
                
                <div className="w-10 h-10 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center">
                  <v.icon stroke="url(#warm-accent-gradient)" size={18} strokeWidth={1.3} />
                </div>
              </div>

              {/* Description */}
              <p className="text-secondary/70 font-light text-sm md:text-base leading-relaxed pl-1">
                {v.desc}
              </p>

              {/* Inlined Project Image mimicking Polaroid print */}
              <div className="w-full aspect-[16/9] bg-neutral-100 relative overflow-hidden rounded-[6px] border border-secondary/5 shadow-inner">
                <img 
                  src={v.image.src || v.image} 
                  alt={`Giá trị cốt lõi di động - ${v.title}`} 
                  title={`Giá trị cốt lõi di động: ${v.title}`}
                  className="w-full h-full object-cover filter brightness-[0.95]" 
                />
              </div>
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
  const teamCards = [
    {
      type: 'text',
      title: 'Sáng lập & Điều hành',
      number: '01'
    },
    {
      type: 'photo',
      name: 'Khúc Văn Hiển',
      role: 'Sáng lập & Giám đốc điều hành (CEO)',
      img: imgHien
    },
    {
      type: 'photo',
      name: 'Nguyễn Lâm Vũ',
      role: 'Giám đốc thiết kế',
      img: imgToan
    },
    {
      type: 'text',
      title: 'Tài chính & Nhân sự',
      number: '02'
    },
    {
      type: 'photo',
      name: 'Hoàng Phúc',
      role: 'Kế toán trưởng',
      img: imgPhuc
    },
    {
      type: 'photo',
      name: 'Thanh Thảo',
      role: 'Chuyên viên nhân sự',
      img: imgPhuc
    },
    {
      type: 'text',
      title: 'Thiết kế & Ý tưởng',
      number: '03'
    },
    {
      type: 'photo',
      name: 'Lê Hưng',
      role: 'KTS Ý tưởng',
      img: imgHung
    },
    {
      type: 'photo',
      name: 'Phạm Minh Tuấn',
      role: 'KTS Cấp cao',
      img: imgToan
    },
    {
      type: 'photo',
      name: 'Trần Thu Hà',
      role: 'NTK Nội thất',
      img: imgHung
    },
    {
      type: 'photo',
      name: 'Nguyễn Hoàng Long',
      role: 'KTS Ý tưởng',
      img: imgHung
    },
    {
      type: 'photo',
      name: 'Đỗ Thùy Linh',
      role: 'Diễn họa 3D',
      img: imgPhuc
    },
    {
      type: 'text',
      title: 'Quản lý dự án & BD',
      number: '04'
    },
    {
      type: 'photo',
      name: 'Nguyễn Thế Toàn',
      role: 'Quản lý dự án cấp cao',
      img: imgToan
    },
    {
      type: 'photo',
      name: 'Thu Hương',
      role: 'Điều phối viên dự án',
      img: imgHung
    },
    {
      type: 'photo',
      name: 'Minh Khang',
      role: 'Trưởng phòng phát triển kinh doanh',
      img: imgPhuc
    },
    {
      type: 'photo',
      name: 'Văn Quân',
      role: 'Chuyên viên phát triển kinh doanh',
      img: imgHung
    },
    {
      type: 'photo',
      name: 'Nguyễn Tiến Dũng',
      role: 'Chuyên viên thu mua',
      img: imgToan
    },
    {
      type: 'text',
      title: 'Kỹ thuật & Công trường',
      number: '05'
    },
    {
      type: 'photo',
      name: 'Trần Anh Tuấn',
      role: 'Kỹ sư trưởng công trường',
      img: imgToan
    },
    {
      type: 'photo',
      name: 'Lê Huy Hoàng',
      role: 'Kỹ sư Cơ điện (M&E)',
      img: imgHung
    },
    {
      type: 'photo',
      name: 'Nguyễn Văn Đức',
      role: 'Giám sát thi công',
      img: imgPhuc
    },
    {
      type: 'photo',
      name: 'Phan Văn Nam',
      role: 'Giám sát công trường',
      img: imgToan
    },
    {
      type: 'photo',
      name: 'Bùi Quốc Khánh',
      role: 'Kỹ sư khối lượng (QS)',
      img: imgPhuc
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
              Đội ngũ của chúng tôi
            </h2>
          </div>
          <p className="text-white/60 font-light max-w-md text-sm md:text-base leading-relaxed">
            Đội ngũ chuyên môn tài năng, nhiệt huyết và tận tâm kiến tạo những không gian sống đẳng cấp và bền vững cùng Luklak.
          </p>
        </div>

        {/* 6-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
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
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.05 }}
                    src={card.img.src || card.img}
                    alt={`Thành viên ${card.name} - ${card.role} tại Luklak Architects`}
                    title={`KTS ${card.name} - ${card.role} Luklak`}
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
      <HomeContactForm />
      <Footer />
    </main>
  );
}
