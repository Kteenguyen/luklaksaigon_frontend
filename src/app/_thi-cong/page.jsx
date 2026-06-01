"use client";
import { motion } from 'framer-motion';
import HomeCTA from "../../components/HomeCTA";
import Footer from "../../components/Footer";
import ConstructionProjects from "../../components/ConstructionProjects";

// Import images for timeline / standards
import imgStandard1 from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg";
import imgStandard2 from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg";
import imgStandard3 from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg";

export default function ConstructionPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col justify-between overflow-hidden">

      {/* Hero Section - Video Background */}
      <section className="relative w-full h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {/* Fallback to image if video not available, but assuming video exists in public/video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-[0.4]"
          >
            <source src="/video/banner.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 px-8 md:px-16 text-center max-w-5xl mx-auto flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary text-[10px] tracking-[0.4em] uppercase border-b border-white/20 pb-2 mb-8 inline-block"
          >
            Construction Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl xl:text-8xl font-serif font-light text-white mb-8 leading-tight"
          >
            Thiết kế đi đôi với <br /><span className="text-primary italic">Thực thi</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white/60 font-light text-lg max-w-2xl"
          >
            Sự hoàn hảo không chỉ nằm trên bản vẽ. Chúng tôi hiện thực hóa mọi chi tiết không gian với quy trình thi công khắt khe, vật liệu cao cấp và đội ngũ kỹ sư tận tâm.
          </motion.p>
        </div>
      </section>

      {/* Technical Standards */}
      <section className="py-24 md:py-32 bg-background text-secondary">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
            <h2 className="text-4xl md:text-6xl font-serif font-light">Tiêu chuẩn <br /><span className="text-primary italic">Kỹ thuật</span></h2>
            <p className="text-secondary/60 font-light max-w-md">Áp dụng các tiêu chuẩn quản lý chất lượng khắt khe nhất để đảm bảo độ bền vững và tính thẩm mỹ vượt thời gian.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                num: '01',
                title: 'An toàn Lao động',
                desc: 'Đảm bảo môi trường làm việc chuyên nghiệp, tuân thủ nghiêm ngặt các quy định về an toàn lao động tại công trường.',
                img: imgStandard1
              },
              {
                num: '02',
                title: 'Vật tư Cao cấp',
                desc: 'Cam kết sử dụng vật liệu xây dựng và nội thất chính hãng, minh bạch nguồn gốc và đạt chuẩn bảo vệ sức khỏe.',
                img: imgStandard2
              },
              {
                num: '03',
                title: 'Giám sát Chặt chẽ',
                desc: 'Đội ngũ kỹ sư hiện trường giám sát 24/7, cập nhật tiến độ liên tục bằng hình ảnh/video cho khách hàng.',
                img: imgStandard3
              }
            ].map((std, i) => (
              <motion.div
                key={std.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="flex flex-col"
              >
                <div className="w-full aspect-square overflow-hidden mb-8 rounded-sm">
                  <img src={std.img.src || std.img} alt={std.title} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary font-serif text-xl">{std.num}.</span>
                  <h3 className="text-2xl font-serif">{std.title}</h3>
                </div>
                <p className="text-secondary/60 font-light leading-relaxed pl-10">{std.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects Component - Reused from Home */}
      <ConstructionProjects />
      {/* Construction Timeline */}
      <section className="py-24 md:py-32 bg-secondary text-surface">
        <div className="max-w-[100rem] mx-auto px-8 md:px-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-24 text-center">Tiến trình <span className="text-primary italic">Triển khai</span></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-surface/10 z-0"></div>

            {[
              { time: 'Tuần 1-2', title: 'Thi công phần thô', items: ['Phá dỡ, xây mới tường', 'Thi công điện nước âm', 'Lắp đặt hệ thống HVAC'] },
              { time: 'Tuần 3-4', title: 'Hoàn thiện bề mặt', items: ['Trần thạch cao', 'Sơn bả, ốp lát', 'Lắp đặt thiết bị vệ sinh'] },
              { time: 'Tuần 5-6', title: 'Lắp đặt nội thất', items: ['Vận chuyển đồ gỗ', 'Lắp ráp tủ, bếp, giường', 'Thi công rèm, thảm'] },
              { time: 'Tuần 7', title: 'Nghiệm thu bàn giao', items: ['Vệ sinh công nghiệp', 'Kiểm tra vận hành', 'Bàn giao chìa khóa'] }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative z-10 flex flex-col"
              >
                <div className="w-24 h-24 rounded-full bg-secondary border border-primary flex items-center justify-center text-primary font-sans text-sm tracking-widest uppercase mb-8 mx-auto lg:mx-0 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                  {phase.time}
                </div>
                <h4 className="text-2xl font-serif text-white mb-6 text-center lg:text-left">{phase.title}</h4>
                <ul className="flex flex-col gap-3">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-surface/60 font-light text-sm">
                      <span className="text-primary mt-1 text-[10px]">■</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="relative z-40 bg-secondary">
        <HomeCTA />
        <Footer />
      </div>
    </main>
  )
}
