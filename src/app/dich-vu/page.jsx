"use client";
import { motion } from 'framer-motion';
import HomeCTA from "../../components/HomeCTA";
import Footer from "../../components/Footer";

// Assets
import imgDesign from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg";
import imgBuild from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg";
import imgProduct from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg";
import imgCommerce from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg";

const SERVICES_DATA = [
  {
    id: "01",
    category: "Lĩnh vực thiết kế",
    title: "Ý tưởng khởi nguyên cho không gian hoàn mỹ.",
    description: "Tại Luklak, chúng tôi tin rằng thiết kế không chỉ là thẩm mỹ bên ngoài mà là sự dung hoà tuyệt đối giữa công năng sử dụng, bối cảnh tự nhiên và chiều sâu cá tính của gia chủ. Mỗi bản vẽ thiết kế là kết quả của sự nghiên cứu tỉ mỉ và tư duy sáng tạo vượt giới hạn.",
    items: [
      { 
        name: "Thiết kế kiến trúc", 
        desc: "Tập trung vào hình khối, vật liệu và ánh sáng, đảm bảo sự hài hòa giữa thẩm mỹ, công năng, cảnh quan và yếu tố bản địa." 
      },
      { 
        name: "Thiết kế nội thất", 
        desc: "Xây dựng giải pháp dựa trên lối sống và sở thích khách hàng, ưu tiên sự tinh gọn và tính cá nhân hóa." 
      },
      { 
        name: "Thiết kế cảnh quan", 
        desc: "Khai thác địa hình và yếu tố môi trường để tạo sự kết nối linh hoạt giữa kiến trúc và thiên nhiên." 
      }
    ],
    img: imgDesign
  },
  {
    id: "02",
    category: "Lĩnh vực thi công",
    title: "Hiện thực hoá tác phẩm với tiêu chuẩn khắt khe nhất.",
    description: "Một bản vẽ đẹp chỉ thực sự giá trị khi được thi công chuẩn xác đến từng milimet. Chúng tôi áp dụng quy trình kiểm soát chất lượng nghiêm ngặt cùng đội ngũ nghệ nhân mộc và kỹ sư xây dựng dày dặn kinh nghiệm nhằm bàn giao công trình hoàn mỹ dạng 'Chìa khóa trao tay'.",
    items: [
      { 
        name: "Thi công xây dựng", 
        desc: "Tuân thủ chặt chẽ bản vẽ và tiêu chuẩn kỹ thuật với đội ngũ giàu kinh nghiệm." 
      },
      { 
        name: "Thi công nội thất", 
        desc: "Chú trọng độ chính xác cao so với bản vẽ và tính đồng bộ trong từng chi tiết." 
      },
      { 
        name: "Quản lý dự án", 
        desc: "Điều phối toàn bộ quy trình từ thiết kế đến hoàn thiện, giám sát tiến độ, chi phí và xử lý phát sinh." 
      },
      { 
        name: "Dịch vụ bảo trì", 
        desc: "Đồng hành cùng khách hàng sau khi bàn giao công trình." 
      }
    ],
    img: imgBuild
  },
  {
    id: "03",
    category: "Lĩnh vực sản xuất",
    title: "Sản phẩm nội thất tinh xảo chế tác tại xưởng.",
    description: "Để cam kết chất lượng vật liệu tốt nhất cho khách hàng, Luklak sở hữu xưởng sản xuất nội thất quy mô lớn được đầu tư máy móc hiện đại. Từ đó sản xuất trực tiếp và kiểm soát 100% nguồn gốc gỗ, độ bền mối nối cũng như độ thẩm mỹ bề mặt trước khi lắp ráp tại công trình.",
    items: [
      { 
        name: "Sản xuất sản phẩm nội thất", 
        desc: "Chế tác sofa, bàn ghế, tủ bếp, giường ngủ từ gỗ óc chó cao cấp và ván gỗ công nghiệp đạt chuẩn E1 châu Âu." 
      },
      { 
        name: "Sản xuất sản phẩm chiếu sáng", 
        desc: "Nghiên cứu và chế tác hệ thống đèn chiếu sáng mỹ thuật, đáp ứng tính kịch bản ánh sáng chuyên biệt cho không gian." 
      }
    ],
    img: imgProduct
  },
  {
    id: "04",
    category: "Lĩnh vực thương mại",
    title: "Cung cấp những mảnh ghép nghệ thuật chọn lọc.",
    description: "Nhằm mang lại hệ sinh thái tiện ích khép kín tối ưu, Luklak chọn lọc và phân phối độc quyền các sản phẩm decor trang trí nghệ thuật và gốm sứ thủ công cao cấp. Đây chính là những mảnh ghép tinh tế cuối cùng để thổi bừng sức sống và cá tính của gia chủ vào không gian.",
    items: [
      { 
        name: "LUKLAK LIGHTING", 
        desc: "Phân phối các dòng đèn trang trí cao cấp, đèn ray nam châm thông minh định hình kịch bản ánh sáng sang trọng." 
      },
      { 
        name: "LUKLAK DÉCOR", 
        desc: "Tuyển chọn đồ thủ công mỹ nghệ, tranh ảnh, thảm trải sàn và các phụ kiện trang trí có gu tinh tế." 
      },
      { 
        name: "LUKLAK CERAMIC", 
        desc: "Cung cấp các sản phẩm gốm sứ nghệ thuật thủ công độc bản được chế tác bởi nghệ nhân Việt Nam." 
      }
    ],
    img: imgCommerce
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FBFAF5] min-h-screen flex flex-col justify-between overflow-x-hidden text-secondary" data-theme="light">
      
      {/* Title Header */}
      <section className="pt-44 pb-20 px-6 md:px-16 text-center max-w-4xl mx-auto">
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

      {/* Ecosystem & Services Grid (30/70 Asymmetric Layout) */}
      <section className="w-full flex flex-col">
        {SERVICES_DATA.map((svc, idx) => (
          <div 
            key={svc.id}
            className="w-full py-16 md:py-24 border-t border-secondary/10 bg-[#FBFAF5] first:border-t-0"
          >
            <div className="max-w-[1440px] mx-auto px-6 md:px-16">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                
                {/* Left Column (30% width) */}
                <div className="w-full lg:w-[30%] flex flex-col lg:sticky lg:top-32 self-start">
                  <div className="flex items-center gap-3">
                    <span className="text-primary font-serif font-light text-lg tracking-wider">
                      {svc.id}
                    </span>
                    <span className="w-8 h-[1px] bg-secondary/20"></span>
                    <h3 className="text-secondary font-sans text-xs md:text-sm tracking-[0.25em] uppercase font-semibold">
                      {svc.category}
                    </h3>
                  </div>
                </div>

                {/* Right Column (70% width) */}
                <div className="w-full lg:w-[70%] flex flex-col gap-10">
                  {/* Category Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-4"
                  >
                    <h2 className="text-2xl md:text-4xl font-serif font-light text-secondary leading-tight">
                      {svc.title}
                    </h2>
                    <p className="text-secondary/70 font-light leading-relaxed text-sm md:text-base max-w-3xl">
                      {svc.description}
                    </p>
                  </motion.div>

                  {/* Sub-items List with Clean Borders */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 border-t border-secondary/10 pt-8"
                  >
                    {svc.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex flex-col gap-2 group">
                        <h4 className="font-serif text-lg text-secondary group-hover:text-primary transition-colors duration-300 font-medium">
                          {item.name}
                        </h4>
                        <p className="text-secondary/60 text-xs md:text-sm font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </motion.div>

                  {/* Showcase Banner Image */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full mt-4 overflow-hidden rounded-sm bg-white"
                  >
                    <img 
                      src={svc.img.src || svc.img} 
                      alt={svc.category} 
                      className="w-full h-[400px] md:h-[500px] object-cover filter grayscale-[10%] hover:grayscale-0 hover:scale-[1.02] transition-all duration-[1.2s] ease-out" 
                    />
                  </motion.div>
                  
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Global Footer Curtain */}
      <HomeCTA />
      <Footer />
    </main>
  );
}
