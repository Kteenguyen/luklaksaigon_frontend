import Contact from '../components/Contact'

export default function ProjectsPage() {
  return (
    <main className="pt-24 min-h-screen flex flex-col justify-between">
      <div className="px-8 md:px-16 py-12">
        <h1 className="text-4xl md:text-6xl font-serif">Dự án</h1>
        <p className="mt-4 text-white/70">Nội dung trang dự án đang được cập nhật...</p>
      </div>
      <Contact />
    </main>
  )
}
