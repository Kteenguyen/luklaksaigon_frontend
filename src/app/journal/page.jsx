import Contact from "../../components/Contact";
import Journal from "../../components/Journal";

export default function JournalPage() {
  return (
    <main className="bg-background pt-24 min-h-screen flex flex-col justify-between">
      {/* Page Header */}
      <div className="px-8 md:px-16 py-24 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-secondary/20 pb-2 mb-8 inline-block">
          Insights & Updates
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-light text-secondary mb-8">Tin tức & <br/><span className="text-primary">Cảm hứng</span></h1>
        <p className="text-secondary/60 font-light text-lg">
          Cập nhật những xu hướng kiến trúc mới nhất, những câu chuyện thiết kế đầy cảm hứng và tin tức hoạt động từ hệ sinh thái của Luklak Group.
        </p>
      </div>
      
      <Journal />
      
      <Contact />
    </main>
  )
}
