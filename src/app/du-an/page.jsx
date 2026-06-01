"use client";
import { motion } from 'framer-motion';
import HomeCTA from "../../components/HomeCTA";
import Footer from "../../components/Footer";
import ProjectGallery from "../../components/ProjectGallery";

// MOCK DATA: Import images for the scattered gallery
import img1 from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg";
import img2 from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg";
import img3 from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg";
import img4 from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg";

const floatingImages = [
  { // 1: Góc trên trái
    src: img1,
    className: "absolute top-[10%] left-[10%] w-[100px] md:w-[150px] xl:w-[180px] aspect-[4/5] z-10",
    initial: { opacity: 0, x: -200, y: -200, rotateY: -1080, rotateZ: -90 },
    animate: { opacity: 1, x: 0, y: 0, rotateY: 0, rotateZ: -12 },
    delay: 0
  },
  { // 2: Góc trên phải
    src: img2,
    className: "absolute top-[12%] right-[10%] w-[140px] md:w-[200px] xl:w-[240px] aspect-[16/9] z-20",
    initial: { opacity: 0, x: 200, y: -150, rotateY: -1080, rotateZ: 90 },
    animate: { opacity: 1, x: 0, y: 0, rotateY: 0, rotateZ: 8 },
    delay: 0
  },
  { // 3: Giữa trái
    src: img3,
    className: "absolute top-[40%] left-[5%] w-[120px] md:w-[160px] xl:w-[200px] aspect-square z-30",
    initial: { opacity: 0, x: -250, y: 0, rotateY: -1080, rotateZ: -45 },
    animate: { opacity: 1, x: 0, y: 0, rotateY: 0, rotateZ: -6 },
    delay: 0
  },
  { // 4: Giữa phải
    src: img4,
    className: "absolute top-[45%] right-[5%] w-[110px] md:w-[150px] xl:w-[180px] aspect-[3/4] z-10",
    initial: { opacity: 0, x: 200, y: 100, rotateY: -1080, rotateZ: 120 },
    animate: { opacity: 1, x: 0, y: 0, rotateY: 0, rotateZ: 15 },
    delay: 0
  },
  { // 5: Góc dưới trái
    src: img1,
    className: "absolute bottom-[10%] left-[15%] w-[130px] md:w-[170px] xl:w-[200px] aspect-[4/5] z-40",
    initial: { opacity: 0, x: -150, y: 250, rotateY: -1080, rotateZ: -60 },
    animate: { opacity: 1, x: 0, y: 0, rotateY: 0, rotateZ: -5 },
    delay: 0
  },
  { // 6: Góc dưới phải
    src: img2,
    className: "absolute bottom-[10%] right-[10%] w-[140px] md:w-[190px] xl:w-[240px] aspect-[16/9] z-30",
    initial: { opacity: 0, x: 250, y: 250, rotateY: -1080, rotateZ: 45 },
    animate: { opacity: 1, x: 0, y: 0, rotateY: 0, rotateZ: 10 },
    delay: 0
  },
  { // 7: Trung tâm (Tấm lớn nhất)
    src: img3,
    className: "absolute top-[50%] left-[50%] w-[160px] md:w-[220px] xl:w-[280px] aspect-[4/5] z-50",
    initial: { opacity: 0, scale: 0.3, x: "-50%", y: "calc(-50% + 200px)", rotateY: -1080, rotateZ: 180 },
    animate: { opacity: 1, scale: 1, x: "-50%", y: "-50%", rotateY: 0, rotateZ: -3 },
    delay: 0
  },
];

export default function ProjectsPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col justify-between overflow-hidden" data-theme="light">

      {/* Hero Section - Split Screen */}
      <div className="relative w-full min-h-screen flex items-center pt-24 pb-16">
        <div className="max-w-[100rem] w-full mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left: Content */}
          <div className="text-left z-40 order-2 lg:order-1">
            <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-4 inline-block">
              Portfolio
            </span>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-serif font-light text-secondary mb-8 flex flex-col gap-2 md:gap-4">
              <span>Dự án</span>
              <span className="text-primary italic">Thiết kế</span>
            </h1>
            <p className="text-secondary/60 font-light text-lg max-w-lg leading-relaxed">
              Khám phá bộ sưu tập các công trình tiêu biểu do Luklak Group thiết kế. Mỗi dự án là một kiệt tác kiến trúc, mang đậm dấu ấn cá nhân và sự tinh tế trong từng chi tiết.
            </p>
          </div>

          {/* Right: Scattered Floating Gallery */}
          <div
            className="relative h-[400px] md:h-[600px] xl:h-[700px] w-full pointer-events-none z-30 order-1 lg:order-2"
            style={{ perspective: '2000px' }}
          >
            {floatingImages.map((img, idx) => (
              <motion.div
                key={idx}
                className={img.className}
                initial={img.initial}
                animate={img.animate}
                transition={{
                  duration: 4.5,
                  delay: img.delay,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {/* White frame wrapper for physical photo aesthetic */}
                <div className="w-full h-full p-2 md:p-3 bg-white shadow-2xl">
                  <img src={img.src.src || img.src} alt="Project Showcase" className="w-full h-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="relative z-40 bg-background">
        <ProjectGallery />
      </div>

      <HomeCTA />
      <Footer />
    </main>
  )
}
