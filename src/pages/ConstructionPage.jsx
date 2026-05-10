import Contact from '../components/Contact';
import ConstructionProjects from '../components/ConstructionProjects';

export default function ConstructionPage() {
  return (
    <main className="bg-background pt-24 min-h-screen flex flex-col justify-between">
      {/* Page Header */}
      <div className="px-8 md:px-16 py-24 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
          Construction
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-light text-secondary mb-8">Dự án <br/><span className="text-primary">Thực tế</span></h1>
        <p className="text-secondary/60 font-light text-lg">
          Chiêm ngưỡng quá trình hiện thực hóa các bản vẽ kỹ thuật thành những không gian sống đẳng cấp, với quy trình thi công chuẩn xác và vật liệu cao cấp nhất.
        </p>
      </div>
      
      {/* Components */}
      <ConstructionProjects />
      
      <Contact />
    </main>
  )
}
