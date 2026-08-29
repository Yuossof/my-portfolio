import {Code2, Layers, Monitor, Zap } from 'lucide-react'

const ServicesMasonry = () => {
  const services = [
    {
      number: '01',
      title: 'Full-Stack Development',
      description: 'Designing and building complete web applications — from scalable backends to polished user interfaces.',
      icon: Code2,
      features: ['React & Next.js', 'Node.js & Express', 'Database Design'],
    },
    {
      number: '02',
      title: 'Backend Development & APIs',
      description: 'Building secure, scalable backends, RESTful APIs, authentication systems, and databases.',
      icon: Layers,
      features: ['RESTful APIs', 'Authentication', 'Cloud Services'],
    },
    {
      number: '03',
      title: 'Frontend Engineering',
      description: 'Crafting fast, accessible, and interactive user interfaces using modern frontend frameworks.',
      icon: Monitor,
      features: ['UI/UX Implementation', 'Responsive Design', 'Animations'],
    },
    {
      number: '04',
      title: 'Performance & Architecture',
      description: 'Optimizing performance, caching, and structuring applications for long-term scalability.',
      icon: Zap,
      features: ['Speed Optimization', 'Caching Strategies', 'Scalable Architecture'],
    },
  ]

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div>
            <span className="text-sm text-gray-400 uppercase tracking-widest">
              Services
            </span>
            <h2 className="text-5xl md:text-6xl font-medium text-gray-900 mt-4 leading-[1.1]">
              Expertise that<br />
              <span className="text-gray-300">drives results</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-gray-500 text-lg max-w-md">
              Specialized services tailored to bring your digital vision to life with precision and creativity.
            </p>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid md:grid-cols-12 gap-6">

          {/* Service 1 - Large Left */}
          <div className="md:col-span-7 md:row-span-2 group">
            <div className="relative h-full min-h-[500px] bg-gray-900 rounded-[32px] p-10 overflow-hidden">
              <span className="absolute -right-8 -bottom-16 text-[240px] font-bold text-white/[0.02] leading-none select-none">
                01
              </span>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Code2 className="w-7 h-7 text-white/70" />
                  </div>
                  <span className="text-sm text-white/20 font-mono">01</span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-4 group-hover:translate-x-2 transition-transform">
                    {services[0].title}
                  </h3>
                  <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-md">
                    {services[0].description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {services[0].features.map((f, j) => (
                      <span key={j} className="px-4 py-2 bg-white/10 text-white/70 text-sm rounded-full">{f}</span>
                    ))}
                  </div>


                </div>
              </div>
            </div>
          </div>

          {/* Service 2 - Top Right */}
          <div className="md:col-span-5 group">
            <div className="relative h-full min-h-[240px] bg-[#F5F5F5] rounded-3xl p-8  hover:bg-[#EEEEEE] transition-colors overflow-hidden">
              <span className="absolute -right-2 -bottom-4 text-[100px] font-bold text-gray-200/50 leading-none select-none">
                02
              </span>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                    <Layers className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:translate-x-1 transition-transform">
                    {services[1].title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {services[1].description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {services[1].features.slice(0, 2).map((f, j) => (
                      <span key={j} className="px-3 py-1 bg-white text-gray-500 text-xs rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 - Bottom Right */}
          <div className="md:col-span-5 group">
            <div className="relative h-full min-h-[240px] bg-[#F5F5F5] rounded-3xl p-8  hover:bg-[#EEEEEE] transition-colors overflow-hidden">
              <span className="absolute -right-2 -bottom-4 text-[100px] font-bold text-gray-200/50 leading-none select-none">
                03
              </span>

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                    <Monitor className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:translate-x-1 transition-transform">
                    {services[2].title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {services[2].description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {services[2].features.slice(0, 2).map((f, j) => (
                      <span key={j} className="px-3 py-1 bg-white text-gray-500 text-xs rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4 - Full Width Bottom */}
          <div className="md:col-span-12 group">
            <div className="relative bg-[#F5F5F5] rounded-[32px] p-8 md:p-10  overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="flex items-center gap-6">
                  <span className="absolute -right-2 -bottom-4 text-[100px] font-bold text-gray-200/50 leading-none select-none">
                    04</span>
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center">
                    <Zap className="w-6 h-6 text-gray-500" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2 group-hover:translate-x-2 transition-transform">
                    {services[3].title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {services[3].description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {services[3].features.map((f, j) => (
                    <span key={j} className="px-3 py-1 bg-white text-gray-500 text-xs rounded-full">{f}</span>
                  ))}
                </div>

                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default ServicesMasonry