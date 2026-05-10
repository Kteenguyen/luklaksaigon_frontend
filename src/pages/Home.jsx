import Hero from '../components/Hero'
import About from '../components/About'
import DesignStyles from '../components/DesignStyles'
import Services from '../components/Services'
import ProjectShowcase from '../components/ProjectShowcase'
import DesignProjects from '../components/DesignProjects'
import ConstructionProjects from '../components/ConstructionProjects'
import Journal from '../components/Journal'
import Contact from '../components/Contact'

// Mock Data cho 3 ProjectShowcase nổi bật nhất
import img1 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163862634_83a0f94c7430897270c93b1b0a7bcfd6.jpg';
import img2 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450163989369_be1b80a76e84bb7dc5b88bc685725aee.jpg';
import img3 from '../assets/projectImage/Dự án thực tế/KC Villa/z7450164007724_768e2f7d26c3ae5ab581260ed9f2a55b.jpg';

const featuredProjects = [
  {
    title: 'Biệt Thự <br/> Ánh Sáng.',
    href: '#',
    studio: 'LUK LAK SÀI GÒN',
    type: 'KIẾN TRÚC & NỘI THẤT',
    location: 'Q.2, TP.HCM',
    year: '2025',
    mainImage: { src: img1, alt: 'Biệt thự ánh sáng' },
    slides: [{ src: img2, alt: 'Nội thất' }, { src: img3, alt: 'Ngoại thất' }],
  },
  {
    title: 'Nhà Phố <br/> Wabi-sabi.',
    href: '#',
    studio: 'LUK LAK SÀI GÒN',
    type: 'NỘI THẤT',
    location: 'Q.7, TP.HCM',
    year: '2024',
    mainImage: { src: img2, alt: 'Nhà phố Wabi-sabi' },
    slides: [{ src: img3, alt: 'Phòng khách' }, { src: img1, alt: 'Phòng ngủ' }],
  },
  {
    title: 'Penthouse <br/> Đương Đại.',
    href: '#',
    studio: 'LUK LAK SÀI GÒN',
    type: 'CẢI TẠO NỘI THẤT',
    location: 'BÌNH THẠNH, TP.HCM',
    year: '2024',
    mainImage: { src: img3, alt: 'Penthouse Đương Đại' },
    slides: [{ src: img1, alt: 'Ban công' }, { src: img2, alt: 'Phòng bếp' }],
  }
];

export default function Home() {
  return (
    <main>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Về Chúng Tôi */}
      <About />

      {/* 3. Phong Cách Thiết Kế */}
      <DesignStyles />

      {/* 4. Dịch Vụ */}
      <Services />

      {/* 5. Dự Án Thiết Kế Nổi Bật (3 lần duplicate) */}
      <div className="relative z-10 bg-secondary">
        {featuredProjects.map((proj, idx) => (
          <ProjectShowcase key={idx} project={proj} />
        ))}
      </div>

      {/* 6. Bộ Lọc Dự án Thiết Kế */}
      <DesignProjects />

      {/* 7. Thực Tế Thi Công */}
      <ConstructionProjects />

      {/* 8. Tin Tức & Cảm Hứng */}
      <Journal />

      {/* 9. Liên Hệ & Footer */}
      <Contact />
    </main>
  )
}
