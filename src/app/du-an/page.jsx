"use client";
import HomeCTA from "../../components/HomeCTA";
import Footer from "../../components/Footer";
import ProjectGallery from "../../components/ProjectGallery";

export default function ProjectsPage() {
  return (
    <main className="bg-[#FAF7F2] min-h-screen flex flex-col justify-between" data-theme="light">

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-12 md:pt-44 md:pb-16 text-center">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <span className="text-primary text-xs tracking-[0.3em] uppercase border-b border-primary/20 pb-2 mb-6 inline-block font-sans font-medium">
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-light text-secondary mb-8">
            Tất cả dự án
          </h1>
          <p className="text-secondary/70 font-light text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-sans">
            Chúng tôi kiến tạo không gian không chỉ đẹp về thẩm mỹ, mà còn ấm cúng, gắn kết và hài hòa với thiên nhiên. Mỗi dự án là hành trình sáng tạo – nơi kỹ thuật và nghệ thuật cùng hội tụ để tạo nên không gian sống mang đậm dấu ấn cá nhân.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="relative z-40 bg-[#FAF7F2]">
        <ProjectGallery />
      </div>
      <HomeCTA />
      <Footer />
    </main>
  );
}
