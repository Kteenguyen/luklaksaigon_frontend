import Hero from '../components/Hero'
import About from '../components/About'
import DesignStyles from '../components/DesignStyles'
import ProjectShowcase from '../components/ProjectShowcase'
import DesignProjects from '../components/DesignProjects'
import FeaturedHorizontalScroll from '../components/FeaturedHorizontalScroll'
import { constructionProjectsData } from '../data/mockData'
import HomeCTA from '../components/HomeCTA'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import LeadershipPreview from '../components/LeadershipPreview'

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

      {/* 4. Dự Án Thiết Kế Nổi Bật (3 lần duplicate) */}
      <div className="relative z-10 bg-secondary" data-theme="dark">
        {featuredProjects.map((proj, idx) => (
          <ProjectShowcase key={idx} project={proj} />
        ))}
      </div>

      {/* 5. Bộ Lọc Dự án Thiết Kế */}
      <DesignProjects />

      {/* 6. Dự Án Thực Tế Nổi Bật (Horizontal Scrolling) */}
      <FeaturedHorizontalScroll
        projects={constructionProjectsData.slice(0, 4)}
        title="Dự án Thực tế"
      />

      {/* 7. Ban Điều Hành (Leadership) */}
      <LeadershipPreview />

      {/* 8. CTA Liên Hệ */}
      <HomeCTA />

      {/* 9. Đối Tác Chiến Lược */}
      <Partners />

      {/* 10. Footer Thông Tin Công Ty */}
      <Footer />
    </main>
  )
}
