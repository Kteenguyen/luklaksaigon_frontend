import Hero from '../components/Hero'
import ProjectShowcase from '../components/ProjectShowcase'
import StickyRevealSection from '../components/StickyRevealSection'
import ProjectGallery from '../components/ProjectGallery'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      {/* ── Hero: dark bg ── */}
      <Hero />

      {/* ── Project Showcase: dark sticky curtain ── */}
      <ProjectShowcase />

      {/* ── Sticky Reveal: light bg (transition from dark) ── */}
      <div className="section-divider" />
      <StickyRevealSection />

      {/* ── Project Gallery: light bg ── */}
      <div className="section-divider" />
      <ProjectGallery />

      {/* ── About: light bg ── */}
      <div className="section-divider" />
      <About />

      {/* ── Contact / Footer: dark bg ── */}
      <Contact />
    </main>
  )
}
