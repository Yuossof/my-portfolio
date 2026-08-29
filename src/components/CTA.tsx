const CTA = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-primary rounded-3xl p-12 overflow-hidden">
          {/* Decorative particles */}
          <div className="absolute inset-0">
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-2 bg-accent/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>

          {/* Spiral pattern */}
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2">
            <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-20">
              <path
                d="M150 50 Q200 100 150 150 Q100 200 150 250"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              <path
                d="M100 80 Q180 120 120 180 Q60 240 140 280"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-normal text-white mb-6 max-w-md">
              Download Portfolio Resume
              <span className="text-accent">|</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="btn-secondary bg-white hover:bg-gray-100">
                Download PDF
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA