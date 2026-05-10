import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, animate } from 'framer-motion';
import Contact from '../components/Contact';

// Assets
import imgKienTruc from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg';
import imgHien from '../assets/hr/Khúc Văn Hiển_Giám đốc Luklak Sài Gòn.webp';
import imgToan from '../assets/hr/NGuyễn Thế Toàn_Chủ trì dự án.png';

/* =====================================================================
   1. HERO SECTION
   ===================================================================== */
function AboutHero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-secondary flex items-center justify-center">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src={imgKienTruc} 
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
          className="text-5xl md:text-7xl lg:text-[10vw] font-serif font-light text-surface uppercase leading-[0.9] tracking-tighter"
        >
          LUKLAK<br/>ARCHITECTS<br/>SÀI GÒN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 text-surface/70 font-light text-lg md:text-xl max-w-2xl mx-auto"
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
    <section className="w-full bg-background text-secondary py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-[10px] md:text-xs tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-16 inline-block">
          LUKLAK GROUP - KHẲNG ĐỊNH VỊ THẾ TIÊN PHONG
        </span>
        
        <div className="w-full lg:w-11/12 mb-24">
          <ScrubbingText text="Ra đời vào 1/10/2020 cùng mong muốn lan tỏa giá trị bền vững tới cộng đồng, Luklak Group không ngừng nỗ lực, chuyển mình và khai phá những tiềm năng mới để mang tới dịch vụ chất lượng hàng đầu trong thị trường kiến trúc - xây dựng. Bằng chiến lược phát triển dám nghĩ dám làm, Luklak Group xác lập vị thế tiên phong hướng tới là một tập đoàn lấy ngành xây dựng làm cốt lõi, đồng thời phát triển hệ sinh thái đa ngành hàng đầu tại Việt Nam." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-16 border-t border-secondary/10">
          <div>
            <h3 className="text-2xl font-serif mb-6">Hệ thống trụ sở</h3>
            <p className="text-text-main font-light leading-relaxed mb-6">
              Hiện nay, Luklak Group liên tục triển khai các dự án trải dài khắp cả nước và xây dựng trụ sở chính tại 04 thành phố lớn: TP. Hà Nội, TP. Đà Nẵng, TP. Huế và TP. Hồ Chí Minh.
            </p>
            <p className="text-text-main font-light leading-relaxed">
              Để hoàn thành mục tiêu giai đoạn năm 2024-2026, Luklak Group định rõ nhiệm vụ: tiếp tục xây dựng hệ thống tại 3 thành phố lớn với quy mô 1000 nhân sự có tâm, có tầm nhằm phát triển hoàn thiện các thương hiệu trực thuộc hướng tới 03 nhóm trụ cột: thương mại, dịch vụ, bất động sản.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-serif mb-6">Tầm nhìn vươn xa</h3>
            <p className="text-text-main font-light leading-relaxed mb-6">
              Mặc dù vẫn còn tồn tại những trở ngại, nhưng Luklak Group còn đó sự nhiệt huyết, bản lĩnh và tiên phong để hoàn thành tất cả nhiệm vụ đặt ra.
            </p>
            <p className="text-text-main font-light leading-relaxed">
              Hy vọng Luklak Group không chỉ nhận được sự ủng hộ từ quý khách hàng, quý đối tác mà còn được tin tưởng với vai trò tiên phong kiến tạo thêm nhiều thành tựu và đem lại nhiều hơn những giá trị cho cộng đồng và xã hội.
            </p>
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
    <section className="w-full bg-secondary text-surface py-32 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sứ mệnh */}
          <div className="lg:col-span-5 bg-surface/5 p-12 rounded-sm border border-surface/10 hover:border-surface/30 transition-colors">
            <span className="text-primary text-[10px] uppercase tracking-[0.3em] mb-12 block">Sứ Mệnh</span>
            <ul className="flex flex-col gap-8 text-xl md:text-2xl font-serif font-light">
              <li className="flex items-start gap-4">
                <span className="text-primary mt-1">01.</span> Phụng sự khách hàng
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary mt-1">02.</span> Tư duy đổi mới,<br/>Sáng tạo không ngừng
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary mt-1">03.</span> Hệ sinh thái Tinh gọn<br/>& Kết nối sâu
              </li>
              <li className="flex items-start gap-4">
                <span className="text-primary mt-1">04.</span> Tầm nhìn cộng đồng<br/>& Bền vững
              </li>
            </ul>
          </div>

          {/* Tầm nhìn Bento */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2 bg-surface/5 p-12 rounded-sm border border-surface/10 hover:border-surface/30 transition-colors flex flex-col justify-center">
              <span className="text-primary text-[10px] uppercase tracking-[0.3em] mb-4 block">Tầm Nhìn 04 Trụ Cột</span>
              <h3 className="text-3xl md:text-4xl font-serif font-light mb-4">
                Thương mại – Dịch vụ<br/>Sản xuất – Bất động sản
              </h3>
              <p className="text-surface/60 font-light">1 Phát triển vững chắc trên 4 trụ cột chiến lược.</p>
            </div>

            <div className="bg-surface/5 p-12 rounded-sm border border-surface/10 hover:border-surface/30 transition-colors flex flex-col justify-center items-center text-center">
              <h3 className="text-5xl md:text-7xl font-serif text-primary mb-4">
                <AnimatedCounter from={0} to={500} />+
              </h3>
              <span className="text-[10px] uppercase tracking-[0.3em] text-surface/50 mb-2">Nhân sự</span>
              <p className="text-surface/60 font-light text-sm">Chuyên môn vững vàng, sáng tạo và trách nhiệm.</p>
            </div>

            <div className="bg-surface/5 p-12 rounded-sm border border-surface/10 hover:border-surface/30 transition-colors flex flex-col justify-center items-center text-center">
              <h3 className="text-5xl md:text-7xl font-serif text-primary mb-4">
                <AnimatedCounter from={0} to={1000} />+
              </h3>
              <span className="text-[10px] uppercase tracking-[0.3em] text-surface/50 mb-2">Công trình</span>
              <p className="text-surface/60 font-light text-sm">Được hoàn thiện chỉn chu – bài bản – không lặp lại.</p>
            </div>
            
            {/* 5 Trụ sở */}
             <div className="md:col-span-2 bg-surface/5 p-8 rounded-sm border border-surface/10 hover:border-surface/30 transition-colors flex flex-col md:flex-row items-center justify-between">
              <h3 className="text-4xl font-serif text-primary">
                0<AnimatedCounter from={0} to={5} /> Trụ sở
              </h3>
              <p className="text-surface/60 font-light text-right mt-4 md:mt-0">Hà Nội, Hải Phòng, Đà Nẵng, Huế, TP. HCM</p>
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
const values = ["Uy tín", "Tôn trọng", "Chất lượng", "Sáng tạo", "Tốc độ", "Đoàn kết"];

function CoreValuesSection() {
  return (
    <section className="w-full bg-background text-secondary py-32 px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="w-full md:w-1/3 sticky top-32">
          <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
            Bản sắc doanh nghiệp
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-light">Giá trị<br/>Cốt lõi</h2>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          {values.map((v, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer border-b border-secondary/10 pb-8 pt-4 relative"
            >
              <h3 className="text-4xl md:text-6xl font-serif font-light text-secondary/40 group-hover:text-secondary group-hover:pl-8 transition-all duration-500">
                {v}
              </h3>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-primary">
                &mdash;
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
  return (
    <section className="w-full bg-secondary text-surface py-32 px-8 md:px-16 border-t border-surface/10">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-surface/20 pb-2 mb-16 inline-block">
          Nhân sự & Quy trình
        </span>

        {/* Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h3 className="text-2xl font-serif mb-6 text-primary">Project Leadership</h3>
            <p className="text-surface/70 font-light leading-relaxed">
              Tại Luklak, chúng tôi luôn đề cao việc thấu hiểu giá trị, mục tiêu và tiềm năng sáng tạo mà mỗi dự án mang lại. Giao tiếp rõ ràng và sự đồng hành xuyên suốt là nền tảng trong quy trình làm việc của chúng tôi, nhằm tạo nên sự kết nối chặt chẽ giữa đội ngũ thiết kế với khách hàng, văn hoá, bối cảnh và môi trường mà công trình hiện diện.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <h3 className="text-2xl font-serif mb-6 text-primary">Design Leadership</h3>
            <p className="text-surface/70 font-light leading-relaxed">
              Mỗi thành viên trong đội ngũ thiết kế đều được định hướng rõ ràng để hiểu sâu về tinh thần và cơ hội của từng dự án. Chúng tôi không chỉ thiết kế để hoàn thiện một không gian, mà còn liên tục nghiên cứu, đề xuất, phản biện và phát triển những giải pháp phù hợp nhất nhằm tạo ra giá trị bền vững cho khách hàng.
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
                src={imgHien} 
                alt="Khúc Văn Hiển - Director" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-4xl font-serif">Khúc Văn Hiển</h3>
                <p className="text-primary tracking-widest uppercase text-xs mt-2">Director - Luklak Sài Gòn</p>
              </div>
            </motion.div>
            <p className="text-surface/70 font-light leading-relaxed mb-6">
              Khúc Văn Hiển là Director tại Luklak Sài Gòn, người định hướng đội ngũ bằng tư duy thiết kế gắn liền với chiều sâu của kiến trúc và trải nghiệm sống. Với quan điểm <strong className="text-surface">“Với kiến trúc, mọi thứ đều có liên quan. Không có gì là ngẫu nhiên. Tất cả bắt đầu từ một lựa chọn”</strong>, anh luôn đề cao sự kết nối giữa công năng, thẩm mỹ và cảm xúc trong từng không gian.
            </p>
            <div className="flex gap-8 text-sm font-light text-surface/50">
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
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square overflow-hidden rounded-sm group mb-8"
            >
              <motion.img 
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 1 }}
                src={imgToan} 
                alt="Nguyễn Thế Toàn" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-3xl font-serif">Nguyễn Thế Toàn</h3>
                <p className="text-primary tracking-widest uppercase text-xs mt-2">Chủ trì dự án</p>
              </div>
            </motion.div>
            <p className="text-surface/70 font-light leading-relaxed italic opacity-50">
              (Thông tin tiểu sử sẽ được cập nhật sau...)
            </p>
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
      <VisionMissionSection />
      <CoreValuesSection />
      <LeadershipSection />
      <Contact />
    </main>
  );
}
