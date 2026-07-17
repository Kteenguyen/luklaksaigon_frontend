"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import HomeContactForm from "../../components/HomeContactForm";
import Footer from "../../components/Footer";

// Assets
import imgDesignArch from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022321_03054fbc155e2451385f87aba8e4e079.jpg";
import imgDesignInterior from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022325_acdb6c57ea6311a6ca39c00a8bbdfa9b.jpg";
import imgDesignLandscape from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg";
import imgBuild1 from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg";
import imgBuild2 from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg";
import imgBuild3 from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164007725_487732fcdca5ccf6a4189f90c0c957fa.jpg";
import imgBuild4 from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg";
import imgProductFurniture from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg";
import imgProductLighting from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg";
import imgCommerce from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg";

export default function ServicesPage() {
  // Section 1: Accordion state
  const [activeAccordion, setActiveAccordion] = useState(0);
  // Section 3: Production tab state
  const [activeTab, setActiveTab] = useState(0);

  // Image mappings for active states
  const designImages = [imgDesignArch, imgDesignInterior, imgDesignLandscape];
  const productImages = [imgProductFurniture, imgProductLighting];
  const buildImages = [imgBuild1, imgBuild2, imgBuild3, imgBuild4];

  // Data Definitions
  const designItems = [
    { 
      name: "Thiết kế kiến trúc", 
      desc: "Chú trọng phát triển hình khối, vật liệu và ánh sáng để kiến tạo một diện mạo kiến trúc rõ nét, hài hòa giữa thẩm mỹ và công năng. Mỗi thiết kế đều được cân nhắc kỹ lưỡng trong mối tương quan với cảnh quan, khí hậu và yếu tố bản địa, nhằm đảm bảo giá trị sử dụng bền vững và vẻ đẹp vượt thời gian." 
    },
    { 
      name: "Thiết kế nội thất", 
      desc: "Giải pháp nội thất được xây dựng dựa trên lối sống và sở thích của từng khách hàng. Từ tổ chức không gian đến chi tiết hoàn thiện, Luklak Architects ưu tiên sự tinh gọn và cảm giác sử dụng thực tế, nhằm tạo nên môi trường sống tiện nghi và cá nhân hoá." 
    },
    { 
      name: "Thiết kế cảnh quan", 
      desc: "Thiết kế cảnh quan được khai thác qua hệ thực vật, địa hình và yếu tố môi trường để tạo nên không gian chuyển tiếp linh hoạt giữa kiến trúc và thiên nhiên. Mục tiêu là tăng cường trải nghiệm sử dụng ngoài trời, đồng thời thúc đẩy sự hài hòa và khả năng thích ứng sinh thái của công trình." 
    }
  ];

  const buildItems = [
    {
      num: "01",
      name: "Thi công xây dựng",
      desc: "Quy trình thi công tuân thủ chặt chẽ bản thiết kế và tiêu chuẩn kỹ thuật. Đội ngũ thi công giàu kinh nghiệm thực tế, đảm bảo đúng tiến độ, kiểm soát chất lượng và phối hợp hiệu quả với các bên liên quan trong suốt quá trình triển khai."
    },
    {
      num: "02",
      name: "Thi công nội thất",
      desc: "Đồng bộ hóa quy trình hoàn thiện nội thất với độ tinh xảo cao, biến ý tưởng từ bản thiết kế 3D thành sản phẩm thực tế sắc nét trong từng mối ghép, màu sắc và độ phẳng bề mặt gỗ."
    },
    {
      num: "03",
      name: "Quản lý dự án",
      desc: "Giám sát kỹ thuật toàn diện, lập kế hoạch tiến độ tối ưu, quản lý chi phí minh bạch và báo cáo tiến trình định kỳ, đảm bảo chủ đầu tư luôn nắm rõ trạng thái công trình."
    },
    {
      num: "04",
      name: "Dịch vụ bảo trì",
      desc: "Chăm sóc và bảo dưỡng công trình định kỳ sau bàn giao, nhanh chóng hỗ trợ xử lý mọi vấn đề kỹ thuật phát sinh, bảo vệ độ bền và thẩm mỹ của dự án theo năm tháng."
    }
  ];

  const productItems = [
    {
      name: "Sản xuất sản phẩm nội thất",
      desc: "Chúng tôi sản xuất nội thất dựa trên nhu cầu thực tế của từng gia đình, đảm bảo tính tiện dụng, độ bền và thẩm mỹ hài hòa. Quy trình được chuẩn hóa, vật liệu được chọn theo tiêu chí phù hợp – bền – dễ bảo trì, giúp mỗi sản phẩm vừa đẹp, vừa dễ ứng dụng trong không gian sống hàng ngày."
    },
    {
      name: "Sản xuất sản phẩm chiếu sáng",
      desc: "Chúng tôi nghiên cứu và phát triển các giải pháp chiếu sáng mang tính thẩm mỹ cao, ứng dụng công nghệ hiện đại và vật liệu bền vững. Mỗi sản phẩm được thiết kế để tối ưu ánh sáng, tạo cảm xúc và góp phần định hình bản sắc không gian sống."
    }
  ];

  const commerceItems = [
    {
      name: "LUKLAK LIGHTING",
      desc: "Phân phối các dòng đèn trang trí cao cấp, đèn ray nam châm thông minh định hình kịch bản ánh sáng sang trọng.",
      image: imgProductLighting
    },
    {
      name: "LUKLAK DÉCOR",
      desc: "Tuyển chọn đồ thủ công mỹ nghệ, tranh ảnh, thảm trải sàn và các phụ kiện trang trí có gu tinh tế.",
      image: imgDesignInterior
    },
    {
      name: "LUKLAK CERAMIC",
      desc: "Cung cấp các sản phẩm gốm sứ nghệ thuật thủ công độc bản được chế tác bởi nghệ nhân Việt Nam.",
      image: imgCommerce
    }
  ];

  return (
    <main className="bg-alabaster min-h-screen flex flex-col justify-between overflow-x-hidden text-secondary" data-theme="light">
      
      {/* ── HEADER TITLE SECTION ─────────────────────────────────── */}
      <section className="pt-24 md:pt-44 pb-12 md:pb-20 px-6 md:px-16 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.35em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block font-sans font-semibold">
          Dịch vụ toàn diện
        </span>
        <h1 className="text-4xl md:text-6xl font-serif font-light text-secondary mb-8 leading-tight">
          Lĩnh Vực Hoạt Động
        </h1>
        <p className="text-secondary/70 font-light text-sm md:text-base leading-relaxed">
          Với chiến lược phát triển bền vững và tư duy hệ sinh thái, LUKLAK GROUP hoạt động trên ba trụ cột chính: Thương mại, Dịch vụ và Bất động sản. Mỗi lĩnh vực không chỉ bổ trợ cho nhau mà còn tạo nên chuỗi giá trị khép kín, nhằm tối ưu hoá trải nghiệm khách hàng và nâng cao năng lực cạnh tranh dài hạn.
        </p>
      </section>

      {/* ── SECTION 1: LĨNH VỰC THIẾT KẾ (Accordion Layout) ────── */}
      {/* ── SECTION 1: LĨNH VỰC THIẾT KẾ (Accordion Layout) ────── */}
      <section className="w-full py-20 md:py-28 border-t border-secondary/10 bg-alabaster">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* Left Column (Landscape image matching Accordion) */}
            <div className="lg:col-span-6 w-full aspect-[3/2] overflow-hidden bg-white shadow-sm lg:sticky lg:top-32 self-start">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeAccordion}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  src={designImages[activeAccordion !== null ? activeAccordion : 0].src || designImages[activeAccordion !== null ? activeAccordion : 0]} 
                  alt="Phối cảnh thiết kế kiến trúc nội thất cảnh quan Luklak Architects" 
                  title="Thiết kế kiến trúc nội thất cảnh quan - Luklak Architects" 
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
                />
              </AnimatePresence>
            </div>

            {/* Right Column (Subtitle & Accordion List) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-primary font-serif text-lg tracking-wider">01</span>
                <span className="w-8 h-[1px] bg-secondary/20"></span>
                <h3 className="text-secondary font-sans text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
                  Lĩnh vực thiết kế
                </h3>
              </div>

              <div className="border-t border-secondary/15 pt-2">
                {designItems.map((item, idx) => {
                  const isOpen = activeAccordion === idx;
                  return (
                    <div key={idx} className="border-b border-secondary/15 py-6">
                      <button
                        onClick={() => setActiveAccordion(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between text-left group transition-all"
                      >
                        <span className={`font-serif text-xl md:text-2xl transition-colors ${isOpen ? 'text-primary font-medium' : 'text-secondary group-hover:text-primary'}`}>
                          {item.name}
                        </span>
                        <span className={`flex items-center justify-center w-9 h-9 rounded-full border transition-colors ${isOpen ? 'border-primary bg-primary text-white' : 'border-secondary/20 group-hover:border-primary text-secondary/60 group-hover:text-primary'}`}>
                          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                        </span>
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pt-5 text-secondary/70 font-light leading-relaxed text-sm md:text-base">
                              {item.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: LĨNH VỰC THI CÔNG (Asymmetric Bento Grid Editorial Layout) ── */}
      <section className="w-full py-20 md:py-28 bg-white border-t border-secondary/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          
          {/* Header */}
          <div className="flex flex-col gap-4 max-w-2xl mb-16 md:mb-20">
            <div className="flex items-center gap-3">
              <span className="text-primary font-serif text-lg tracking-wider">02</span>
              <span className="w-8 h-[1px] bg-secondary/20"></span>
              <h3 className="text-secondary font-sans text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
                Lĩnh vực thi công
              </h3>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-secondary leading-tight">
              Hiện thực hoá tác phẩm với tiêu chuẩn khắt khe nhất.
            </h2>
          </div>

          {/* Asymmetric Bento Grid rows */}
          <div className="flex flex-col gap-12 lg:gap-16">
            
            {/* Step 1: Thi công xây dựng */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-secondary/15 pt-12">
              {/* Text Card (Left 7) */}
              <div className="col-span-12 lg:col-span-7 order-1 flex flex-col gap-6 group">
                <span className="font-serif text-4xl md:text-5xl text-primary/80 font-light tracking-wide">
                  {buildItems[0].num}
                </span>
                <h4 className="font-serif text-2xl md:text-3xl text-secondary group-hover:text-primary transition-colors duration-300 font-light">
                  {buildItems[0].name}
                </h4>
                <p className="text-secondary/70 font-light text-sm md:text-base leading-relaxed max-w-xl">
                  {buildItems[0].desc}
                </p>
              </div>
              {/* Image Block (Right 5) */}
              <div className="col-span-12 lg:col-span-5 order-2 w-full aspect-[3/2] overflow-hidden group">
                <img 
                  src={buildImages[0].src || buildImages[0]} 
                  alt={buildItems[0].name}
                  title={buildItems[0].name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
                />
              </div>
            </div>

            {/* Step 2: Thi công nội thất */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-secondary/15 pt-12">
              {/* Image Block (Left 5) */}
              <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 w-full aspect-[3/2] overflow-hidden group">
                <img 
                  src={buildImages[1].src || buildImages[1]} 
                  alt={buildItems[1].name}
                  title={buildItems[1].name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
                />
              </div>
              {/* Text Card (Right 7) */}
              <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6 pl-0 lg:pl-12 group">
                <span className="font-serif text-4xl md:text-5xl text-primary/80 font-light tracking-wide">
                  {buildItems[1].num}
                </span>
                <h4 className="font-serif text-2xl md:text-3xl text-secondary group-hover:text-primary transition-colors duration-300 font-light">
                  {buildItems[1].name}
                </h4>
                <p className="text-secondary/70 font-light text-sm md:text-base leading-relaxed max-w-xl">
                  {buildItems[1].desc}
                </p>
              </div>
            </div>

            {/* Step 3: Quản lý dự án */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-secondary/15 pt-12">
              {/* Text Card (Left 7) */}
              <div className="col-span-12 lg:col-span-7 order-1 flex flex-col gap-6 group">
                <span className="font-serif text-4xl md:text-5xl text-primary/80 font-light tracking-wide">
                  {buildItems[2].num}
                </span>
                <h4 className="font-serif text-2xl md:text-3xl text-secondary group-hover:text-primary transition-colors duration-300 font-light">
                  {buildItems[2].name}
                </h4>
                <p className="text-secondary/70 font-light text-sm md:text-base leading-relaxed max-w-xl">
                  {buildItems[2].desc}
                </p>
              </div>
              {/* Image Block (Right 5) */}
              <div className="col-span-12 lg:col-span-5 order-2 w-full aspect-[3/2] overflow-hidden group">
                <img 
                  src={buildImages[2].src || buildImages[2]} 
                  alt={buildItems[2].name}
                  title={buildItems[2].name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
                />
              </div>
            </div>

            {/* Step 4: Dịch vụ bảo trì */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-secondary/15 pt-12">
              {/* Image Block (Left 5) */}
              <div className="col-span-12 lg:col-span-5 order-2 lg:order-1 w-full aspect-[3/2] overflow-hidden group">
                <img 
                  src={buildImages[3].src || buildImages[3]} 
                  alt={buildItems[3].name}
                  title={buildItems[3].name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
                />
              </div>
              {/* Text Card (Right 7) */}
              <div className="col-span-12 lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6 pl-0 lg:pl-12 group">
                <span className="font-serif text-4xl md:text-5xl text-primary/80 font-light tracking-wide">
                  {buildItems[3].num}
                </span>
                <h4 className="font-serif text-2xl md:text-3xl text-secondary group-hover:text-primary transition-colors duration-300 font-light">
                  {buildItems[3].name}
                </h4>
                <p className="text-secondary/70 font-light text-sm md:text-base leading-relaxed max-w-xl">
                  {buildItems[3].desc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SECTION 3: LĨNH VỰC SẢN XUẤT (Dark 50/50 Split & Tabs Layout) ── */}
      <section className="w-full bg-secondary text-white border-t border-white/5" data-theme="dark">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] md:min-h-[700px]">
            
            {/* Left Column (Factory Image Panel) */}
            <div className="relative w-full h-[350px] lg:h-auto overflow-hidden bg-secondary">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  src={productImages[activeTab].src || productImages[activeTab]} 
                  alt="Xưởng sản xuất gỗ và thiết bị chiếu sáng Luklak" 
                  title="Xưởng sản xuất Luklak" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2.5s] ease-out"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent lg:hidden pointer-events-none" />
            </div>

            {/* Right Column (Dynamic Tabs Panel) */}
            <div className="flex flex-col justify-center px-6 py-16 md:p-16 lg:p-24 gap-8">
              
              <div className="flex items-center gap-3">
                <span className="text-primary font-serif text-lg tracking-wider">03</span>
                <span className="w-8 h-[1px] bg-white/20"></span>
                <h3 className="text-white/80 font-sans text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
                  Lĩnh vực sản xuất
                </h3>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif font-light text-white leading-tight">
                Sản phẩm nội thất tinh xảo chế tác tại xưởng.
              </h2>
              
              <p className="text-white/70 font-light leading-relaxed text-sm md:text-base max-w-xl">
                Để cam kết chất lượng vật liệu tốt nhất cho khách hàng, Luklak sở hữu xưởng sản xuất nội thất quy mô lớn được đầu tư máy móc hiện đại, trực tiếp giám sát nguồn gốc và chế tác gỗ.
              </p>

              {/* Tab Selector Links */}
              <div className="flex border-b border-white/10 mt-4">
                {productItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`pb-4 pr-8 text-left font-serif text-lg tracking-wide uppercase transition-colors relative ${activeTab === idx ? 'text-primary' : 'text-white/50 hover:text-white'}`}
                  >
                    {idx === 0 ? "Nội Thất" : "Chiếu Sáng"}
                    {activeTab === idx && (
                      <motion.span 
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-8 h-[2px] bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content Display */}
              <div className="min-h-[160px] mt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4"
                  >
                    <h4 className="font-serif text-xl md:text-2xl text-white font-medium">
                      {productItems[activeTab].name}
                    </h4>
                    <p className="text-white/60 font-light text-sm md:text-base leading-relaxed max-w-xl">
                      {productItems[activeTab].desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 4: LĨNH VỰC THƯƠNG MẠI (3-Column Minimal Grid) ── */}
      <section className="w-full py-20 md:py-28 bg-alabaster border-t border-secondary/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          
          {/* Header */}
          <div className="flex flex-col gap-4 max-w-3xl mb-16">
            <div className="flex items-center gap-3">
              <span className="text-primary font-serif text-lg tracking-wider">04</span>
              <span className="w-8 h-[1px] bg-secondary/20"></span>
              <h3 className="text-secondary font-sans text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
                Lĩnh vực thương mại
              </h3>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-secondary leading-tight">
              Cung cấp những mảnh ghép nghệ thuật chọn lọc.
            </h2>
            <p className="text-secondary/70 font-light leading-relaxed text-sm md:text-base mt-2">
              Nhằm mang lại hệ sinh thái tiện ích khép kín tối ưu, Luklak chọn lọc và phân phối các sản phẩm decor trang trí nghệ thuật và gốm sứ thủ công cao cấp độc bản.
            </p>
          </div>

          {/* 3-Column Image Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {commerceItems.map((item, idx) => (
              <div 
                key={idx}
                className="flex flex-col bg-white border border-secondary/5 overflow-hidden group hover:shadow-lg transition-all duration-500"
              >
                {/* Visual Image container with different focus filters */}
                <div className="w-full h-[280px] md:h-[350px] overflow-hidden bg-secondary relative">
                  <img 
                    src={item.image.src || item.image} 
                    alt={`Trưng bày sản phẩm decor nghệ thuật ${item.name}`} 
                    title={`Sản phẩm thương mại ${item.name} - Luklak Decor`} 
                    className={`w-full h-full object-cover filter brightness-[85%] grayscale-[20%] group-hover:scale-105 group-hover:filter group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-[1.2s] ease-out ${
                      idx === 1 ? 'object-center' : idx === 2 ? 'object-bottom' : 'object-top'
                    }`}
                  />
                  <div className="absolute top-6 left-6 w-8 h-8 flex items-center justify-center border border-white/30 text-white font-serif text-xs rounded-full bg-secondary/20 backdrop-blur-sm">
                    0{idx + 1}
                  </div>
                </div>

                {/* Text details card */}
                <div className="p-8 flex flex-col gap-4">
                  <h4 className="font-serif text-lg md:text-xl text-secondary font-medium tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-secondary/60 text-xs md:text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Footer Curtain */}
      <HomeContactForm />
      <Footer />
    </main>
  );
}
