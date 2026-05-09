import SmoothScrollProvider from './components/SmoothScrollProvider'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectShowcase from './components/ProjectShowcase'
import StickyRevealSection from './components/StickyRevealSection'
import ProjectGallery from './components/ProjectGallery'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <SmoothScrollProvider>
      <div className="min-h-screen font-sans bg-secondary text-text-main">
        <Header />
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
      </div>
    </SmoothScrollProvider>
  )
}

export default App
