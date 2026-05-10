import Contact from '../components/Contact';
import Services from '../components/Services';
import DesignStyles from '../components/DesignStyles';

export default function ServicesPage() {
  return (
    <main className="bg-background pt-24 min-h-screen flex flex-col justify-between">
      {/* Page Header */}
      <div className="px-8 md:px-16 py-24 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
          Expertise
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-light text-secondary mb-8">Dịch vụ & <br/><span className="text-primary">Giải pháp</span></h1>
        <p className="text-secondary/60 font-light text-lg">
          Luklak Group cung cấp các giải pháp toàn diện từ tư vấn thiết kế, thi công nội thất đến sản xuất đồ gỗ cao cấp. Chúng tôi cam kết mang lại không gian sống hoàn mỹ và đẳng cấp nhất.
        </p>
      </div>
      
      <Services />
      <div className="py-8"></div>
      <DesignStyles />
      
      <Contact />
    </main>
  )
}
