import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetail from './pages/ProjectDetails'
import ProjectsPage from './pages/Projects'

function App() {
  const location = useLocation()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureDirection: 'vertical',
      smoothTouch: false,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)

    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    }
  }, [location.pathname])

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Services />
              <Contact />
              <Footer />
            </>
          )}
        />
        <Route path='/projects/:id' element={<ProjectDetail />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
    </div>
  )
}

export default App