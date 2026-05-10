import Contact from '../components/Contact'

export default function FactoryPage() {
  return (
    <main className="pt-24 min-h-screen flex flex-col justify-between">
      <div className="px-8 md:px-16 py-12">
        <h1 className="text-4xl md:text-6xl font-serif">Xưởng sản xuất</h1>
        <p className="mt-4 text-white/70">Nội dung trang xưởng sản xuất đang được cập nhật...</p>
      </div>
      <Contact />
    </main>
  )
}
