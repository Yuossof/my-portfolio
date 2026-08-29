const Features = () => {
  const developers = [
    {
      title: 'Frontend developer',
      description: 'Streamline UX development by leveraging browser-in-the-loop agents to automate repetitive tasks.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
    },
    {
      title: 'Backend developer',
      description: 'Build scalable APIs and services with modern frameworks and best practices.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop',
    },
    {
      title: 'Full Stack developer',
      description: 'Create end-to-end solutions with seamless integration between frontend and backend.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop',
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal text-primary mb-2">
              Built for developers
            </h2>
            <p className="text-2xl md:text-3xl font-light text-gray-400">
              for the agent-first era
            </p>
          </div>
          <p className="max-w-md text-gray-500 text-right hidden lg:block">
            Built for user trust, whether you're a professional developer working in a large 
            enterprise codebase, a hobbyist vibe-coding in spare time, or anyone in between.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((dev, index) => (
            <div key={index} className="group relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200">
                <img
                  src={dev.image}
                  alt={dev.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Title on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-medium text-white">
                    {dev.title}
                  </h3>
                </div>

                {/* Play button */}
                <button className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
              
              {/* Description */}
              <div className="mt-4">
                <h4 className="font-medium text-primary mb-1">{dev.title}</h4>
                <p className="text-sm text-gray-500">{dev.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-start gap-2 mt-8">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-300 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features