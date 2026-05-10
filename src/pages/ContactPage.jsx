import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen bg-secondary">
      {/* Page Header */}
      <div className="px-8 md:px-16 py-24 text-center max-w-4xl mx-auto">
        <span className="text-primary text-[10px] tracking-[0.3em] uppercase border-b border-surface/20 pb-2 mb-8 inline-block">
          Get in touch
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-light text-surface mb-8">Liên hệ <br/><span className="text-primary">Luklak Group</span></h1>
        <p className="text-surface/50 font-light text-lg">
          Hãy để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ tư vấn và đồng hành cùng bạn kiến tạo nên không gian sống mơ ước.
        </p>
      </div>
      
      <Contact />
    </main>
  )
}
