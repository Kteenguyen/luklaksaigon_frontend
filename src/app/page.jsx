import Hero from '../components/Hero';
import About from '../components/About';
import DesignStyles from '../components/DesignStyles';
import ProjectShowcase from '../components/ProjectShowcase';
import DesignProjects from '../components/DesignProjects';
import { projectsData } from '../data/mockData';
import HomeContactForm from '../components/HomeContactForm';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import LeadershipPreview from '../components/LeadershipPreview';

export default function Home() {
  // Get the first 3 key projects for Section 3 (KC Villa, The Landmark Apartment, Sunrise Townhouse)
  const keyProjects = projectsData.slice(0, 3);

  return (
    <main>
      {/* Section 1 (Hero banner/video - HBA style slideshow) */}
      <Hero />

      {/* Section 2 (Giới thiệu thương hiệu - HBA style typography & spacing) */}
      <About />

      {/* Design Styles (Design styles list with target anchor #design-styles) */}
      <DesignStyles />

      {/* Section 3 (Tầm 3 Dự án thực tế Key - Staggered layout & parallax scroll) */}
      <div className="relative z-10 bg-secondary" data-theme="dark">
        {keyProjects.map((project, idx) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            isFirst={idx === 0}
            isLast={idx === keyProjects.length - 1}
          />
        ))}
      </div>

      {/* Section 4: Tổng hợp dự án theo loại hình (Dynamic categorization tabs & detail links) */}
      <DesignProjects />

      {/* Section 5: Leadership (Team management preview) */}
      <LeadershipPreview />

      {/* Section 6: Form (Tinh gọn nhất: Tên, SĐT, Dịch vụ, Lời nhắn - Sen Design inspired layout) */}
      <HomeContactForm />

      {/* Đối tác & Hệ sinh thái (Kat Studio infinite marquee ticker) */}
      <Partners />

      {/* Section 7 / Footnote: Footer including policy links */}
      <Footer />
    </main>
  );
}
