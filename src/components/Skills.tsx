import { Palette, Server, Wrench, Layers } from 'lucide-react'

const Skills = () => {
  return (
    <section id="skills" className="py-32 md:px-0 px-6">
      <div className="max-w-350 mx-auto">

        {/* Section Label */}
        <div className="mb-6">
          <span className="text-sm text-gray-400 uppercase tracking-wider">
            Skills
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-primary leading-[1.1] max-w-3xl mb-20">
          The tools I use to{' '}
          <span className="text-gray-400">
            turn ideas into working products.
          </span>
        </h2>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

          {/* Frontend */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-xl font-medium text-primary mb-1">
                  Frontend
                </h3>

                <p className="text-sm text-gray-400">
                  Building user interfaces
                </p>
              </div>

              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                <Palette className="w-6 h-6 text-gray-700" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                'React.js',
                'Next.js',
                'TypeScript',
                'JavaScript',
                'Tailwind CSS',
                'HTML/CSS',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Beyond the UI */}
          <div className="bg-primary rounded-3xl p-8 flex flex-col justify-between min-h-60">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Layers className="w-6 h-6 text-white/80" />
                </div>
              </div>

              <h3 className="text-xl font-medium text-white mb-2">
                Beyond the UI
              </h3>

              <p className="text-sm leading-6 text-gray-400 max-w-sm">
                I work beyond the interface, building APIs, databases,
                integrations, and the systems behind real-world products.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {[
                'APIs',
                'Databases',
                'Integrations',
                'Automation',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-white/10 text-white/90 text-sm rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-white lg:col-span-2 rounded-3xl p-8 border border-gray-100">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-xl font-medium text-primary mb-1">
                  Backend
                </h3>

                <p className="text-sm text-gray-400">
                  Server, APIs & databases
                </p>
              </div>

              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                <Server className="w-6 h-6 text-gray-700" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                'Node.js',
                'Express.js',
                'TypeScript',
                'MongoDB',
                'PostgreSQL',
                'REST APIs',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100">
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-xl font-medium text-primary mb-1">
                  Tools & Workflow
                </h3>

                <p className="text-sm text-gray-400">
                  Development environment
                </p>
              </div>

              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-gray-700" />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                'Git',
                'GitHub',
                'Docker',
                'Redis',
                'RabbitMQ',
                'Figma',
                'Vercel',
                'npm',
                'Terminal',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills