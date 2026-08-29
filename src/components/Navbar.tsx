import { useState } from 'react'

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-350 mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 19h20L12 2z"/>
            </svg>
            <span className="text-base">
              <span className="font-semibold">Youssof</span>
              {/* <span className="text-gray-400"> Developer</span> */}
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-gray-500 hover:text-primary">About</a>
            <a href="#skills" className="text-sm text-gray-500 hover:text-primary">Skills</a>
            <a href="#projects" className="text-sm text-gray-500 hover:text-primary">Projects</a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-primary">Contact</a>
          </div>

          {/* CTA */}
          <a 
            href="#contact" 
            className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-gray-800"
          >
            Hire Me
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#about" className="text-gray-600" onClick={() => setMobileOpen(false)}>About</a>
              <a href="#skills" className="text-gray-600" onClick={() => setMobileOpen(false)}>Skills</a>
              <a href="#projects" className="text-gray-600" onClick={() => setMobileOpen(false)}>Projects</a>
              <a href="#contact" className="text-gray-600" onClick={() => setMobileOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar