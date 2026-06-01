import HomeCTA from "../../components/HomeCTA";
import Footer from "../../components/Footer";
import imgKienTruc from "../../assets/projectImage/Dự án thực tế/KC Villa/z7450164022320_7c5e9ff572be475288651b3a0f1be4a3.jpg";

export default function FactoryPage() {
  return (
    <main className="bg-background pt-24 min-h-screen flex flex-col justify-between">
      {/* Page Header */}
      <div className="px-8 md:px-16 py-24 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
          Manufacturing
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-light text-secondary mb-8">Xưởng sản xuất <br/><span className="text-primary">Tiêu chuẩn</span></h1>
        <p className="text-secondary/60 font-light text-lg">
          Với hệ thống máy móc hiện đại và đội ngũ thợ lành nghề, xưởng sản xuất của Luklak đáp ứng mọi yêu cầu khắt khe nhất về chất lượng và độ tinh xảo của sản phẩm nội thất.
        </p>
      </div>
      
      {/* Factory Banner */}
      <div className="px-8 md:px-16 pb-32">
        <div className="relative w-full aspect-[21/9] rounded-sm overflow-hidden group">
          <img src={imgKienTruc.src || imgKienTruc} alt="Xưởng sản xuất" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-0 left-0 p-12 md:p-24 w-full">
            <h3 className="text-4xl md:text-6xl font-serif text-white mb-4">Hệ thống máy móc CNC <br/> Nhập khẩu Đức & Ý</h3>
            <p className="text-white/70 font-light max-w-2xl text-lg">Đảm bảo độ chính xác tuyệt đối và tiến độ thi công cho mọi dự án, biến các bản thiết kế phức tạp thành những sản phẩm nội thất hiện thực sắc nét nhất.</p>
          </div>
        </div>
      </div>
      
      <HomeCTA />
      <Footer />
    </main>
  )
}
