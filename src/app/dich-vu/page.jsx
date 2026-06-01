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
      { name: "Thiết kế kiến trúc", desc: "Tạo hình mặt đứng, kết cấu mặt bằng biệt thự, nhà phố và building hiện đại tối ưu công năng." },
      { name: "Thiết kế nội thất", desc: "Kiến tạo phong cách không gian nội thất có gu độc bản (Japandi, Wabi-Sabi, Mid-Century, Modern...)." },
      { name: "Thiết kế cảnh quan", desc: "Xanh hoá không gian sống, kết nối mượt mà giữa thiên nhiên bên ngoài và công trình kiến trúc." }
    ],
    img: imgDesign
  },
  {
    id: "02",
    category: "Lĩnh vực thi công",
    title: "Hiện thực hoá tác phẩm với tiêu chuẩn khắt khe nhất.",
    description: "Một bản vẽ đẹp chỉ thực sự giá trị khi được thi công chuẩn xác đến từng milimet. Chúng tôi áp dụng quy trình kiểm soát chất lượng nghiêm ngặt cùng đội ngũ nghệ nhân mộc và kỹ sư xây dựng dày dặn kinh nghiệm nhằm bàn giao công trình hoàn mỹ dạng 'Chìa khóa trao tay'.",
    items: [
      { name: "Thi công xây dựng", desc: "Đổ kết cấu phần thô, xử lý móng, dầm cột và các biện pháp chống thấm chuyên sâu đạt chuẩn." },
      { name: "Thi công nội thất", desc: "Lắp đặt, hoàn thiện đồ gỗ tự nhiên/công nghiệp và hoàn thiện các bề mặt tường, sàn mài thô mộc tinh tế." },
      { name: "Quản lý dự án", desc: "Giám sát tiến độ xây dựng và kiểm soát chặt chẽ ngân sách, triệt tiêu hoàn toàn chi phí phát sinh ngoài ý muốn." },
      { name: "Dịch vụ bảo trì", desc: "Cung cấp giải pháp bảo dưỡng hệ thống kỹ thuật định kỳ đảm bảo công trình bền bỉ qua năm tháng." }
    ],
    img: imgBuild
  },
  {
    id: "03",
    category: "Lĩnh vực sản xuất",
    title: "Sản phẩm nội thất tinh xảo chế tác tại xưởng.",
    description: "Để cam kết chất lượng vật liệu tốt nhất cho khách hàng, Luklak sở hữu xưởng sản xuất nội thất quy mô lớn được đầu tư máy móc hiện đại. Từ đó sản xuất trực tiếp và kiểm soát 100% nguồn gốc gỗ, độ bền mối nối cũng như độ thẩm mỹ bề mặt trước khi lắp ráp tại công trình.",
    items: [
      { name: "Sản xuất sản phẩm nội thất", desc: "Chế tác sofa, bàn ghế, tủ bếp, giường ngủ từ gỗ óc chó cao cấp và ván gỗ công nghiệp đạt chuẩn E1 châu Âu." },
      { name: "Sản xuất sản phẩm chiếu sáng", desc: "Nghiên cứu và chế tác hệ thống đèn chiếu sáng mỹ thuật, đáp ứng tính kịch bản ánh sáng chuyên biệt cho không gian." }
    ],
    img: imgProduct
  },
  {
    id: "04",
    category: "Lĩnh vực thương mại",
    title: "Cung cấp những mảnh ghép nghệ thuật chọn lọc.",
    description: "Nhằm mang lại hệ sinh thái tiện ích khép kín tối ưu, Luklak chọn lọc và phân phối độc quyền các sản phẩm decor trang trí nghệ thuật và gốm sứ thủ công cao cấp. Đây chính là những mảnh ghép tinh tế cuối cùng để thổi bừng sức sống và cá tính của gia chủ vào không gian.",
    items: [
      { name: "Luklak Lighting", desc: "Phân phối các dòng đèn trang trí cao cấp, đèn ray nam châm thông minh định hình kịch bản ánh sáng sang trọng." },
      { name: "Luklak Ceramic", desc: "Cung cấp các sản phẩm gốm sứ nghệ thuật thủ công độc bản được chế tác bởi nghệ nhân Việt Nam." },
      { name: "Luklak Decor", desc: "Tuyển chọn đồ thủ công mỹ nghệ, tranh ảnh, thảm trải sàn và các phụ kiện trang trí có gu tinh tế." }
    ],
    img: imgCommerce
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen flex flex-col justify-between overflow-x-hidden text-secondary" data-theme="light">
      
      {/* Title Header */}
      <section className="pt-40 pb-24 px-8 md:px-16 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
          Dịch vụ toàn diện
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-light text-secondary mb-8">
          Lĩnh Vực Hoạt Động <br /><span className="text-primary italic">Services</span>
        </h1>
        <p className="text-secondary/60 font-light text-lg">
          Chúng tôi mang đến giải pháp dịch vụ khép kín toàn diện từ lên ý tưởng thiết kế, thi công hoàn thiện công trình đến trực tiếp sản xuất nội thất và thương mại đồ decor trang trí cao cấp.
        </p>
      </section>

      {/* Services List - Premium Alternating Layout */}
      <section className="max-w-[100rem] mx-auto px-8 md:px-16 pb-32 flex flex-col gap-32">
        {SERVICES_DATA.map((svc, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div 
              key={svc.id} 
              className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden rounded-sm shadow-xl p-2 md:p-3 bg-white">
                  <img 
                    src={svc.img.src || svc.img} 
                    alt={svc.category} 
                    className="w-full h-full object-cover filter grayscale-[10%] hover:grayscale-0 hover:scale-105 transition-all duration-[1.5s] ease-out" 
                  />
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-1/2 flex flex-col"
              >
                <span className="text-primary text-xs tracking-[0.25em] uppercase font-sans font-medium mb-4 block">
                  {svc.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-6">
                  {svc.title}
                </h2>
                <p className="text-secondary/70 font-light leading-relaxed mb-8 text-base">
                  {svc.description}
                </p>

                {/* Sub items List */}
                <div className="flex flex-col gap-6 border-t border-secondary/10 pt-8 mt-4">
                  {svc.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex gap-6 items-start group">
                      <div className="text-primary font-serif font-light text-lg tracking-widest mt-1">
                        {svc.id}.{itemIdx + 1}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-secondary group-hover:text-primary transition-colors duration-300">
                          {item.name}
                        </h4>
                        <p className="text-xs text-secondary/50 font-light mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* Global Footer Curtain */}
      <HomeCTA />
      <Footer />
    </main>
  );
}
