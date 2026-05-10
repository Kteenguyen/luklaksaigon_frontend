import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SmoothScrollProvider from './components/SmoothScrollProvider'
import Header from './components/Header'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ConstructionPage from './pages/ConstructionPage'
import ServicesPage from './pages/ServicesPage'
import FactoryPage from './pages/FactoryPage'
import JournalPage from './pages/JournalPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <SmoothScrollProvider>
        <div className="min-h-screen font-sans bg-secondary text-text-main">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/construction" element={<ConstructionPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/factory" element={<FactoryPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
      </SmoothScrollProvider>
    </Router>
  )
}

export default App
