import { useRef } from "react";
import { Componentx } from "./CursorEffect";

const Footer = () => {
  const year = new Date().getFullYear()
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <Componentx containerRef={containerRef} />
      <footer className="py-16 px-6 border-t border-gray-100">
        <div className="max-w-350 mx-auto">
          {/* Top */}
          <div className="flex flex-col md:flex-row md:justify-between gap-12 mb-16">
            <div>
              <p className="text-gray-500">Building digital experiences</p>
            </div>

            <div className="flex gap-16">
              <div>
                <h4 className="font-medium text-primary mb-4">Navigation</h4>
                <ul className="space-y-3">
                  <li><a href="#about" className="text-sm text-gray-500 hover:text-primary">About</a></li>
                  <li><a href="#skills" className="text-sm text-gray-500 hover:text-primary">Skills</a></li>
                  <li><a href="#projects" className="text-sm text-gray-500 hover:text-primary">Projects</a></li>
                  <li><a href="#contact" className="text-sm text-gray-500 hover:text-primary">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-primary mb-4">Social</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-500 hover:text-primary">GitHub</a></li>
                  <li><a href="#" className="text-sm text-gray-500 hover:text-primary">LinkedIn</a></li>
                  <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Twitter</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Big Name */}
          <div className="mb-12 overflow-hidden">
            <h2 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[14rem] font-bold text-primary leading-none tracking-tighter">
              Developer
            </h2>
          </div>

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-8 border-t border-gray-100">
            <span className="text-sm text-gray-400">John Doe</span>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>© {year}</span>
              <a href="#" className="hover:text-primary">Privacy</a>
              <a href="#" className="hover:text-primary">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer