import { useMemo, useState } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

import { useProjects } from '../hooks/useProjects'

const CORE_TAGS = ['All', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'MongoDB', 'PostgreSQL', 'Express']

const normalizeTechTag = (tag: string) => {
  const cleaned = tag.replace(/\s*\(.*?\)/g, '').trim().toLowerCase()

  if (cleaned.startsWith('next.js')) return 'Next.js'
  if (cleaned.startsWith('react')) return 'React'
  if (cleaned.startsWith('typescript')) return 'TypeScript'
  if (cleaned.startsWith('node.js')) return 'Node.js'
  if (cleaned.startsWith('tailwind')) return 'Tailwind'
  if (cleaned.startsWith('mongodb')) return 'MongoDB'
  if (cleaned.startsWith('postgresql')) return 'PostgreSQL'
  if (cleaned.startsWith('express')) return 'Express'
  if (cleaned.startsWith('firebase')) return 'Firebase'
  if (cleaned.startsWith('chart')) return 'Charts'

  return tag
}

export default function ProjectsPage() {
  const { data: projects, loading, error } = useProjects()
  const [selectedTag, setSelectedTag] = useState('All')

  const tags = useMemo(() => {
    const normalizedTags = projects.flatMap((project) => project.techStack.map(normalizeTechTag))
    const uniqueTags = Array.from(new Set(normalizedTags))

    return CORE_TAGS.filter((tag) => tag === 'All' || uniqueTags.includes(tag))
  }, [projects])

  const filteredProjects = useMemo(
    () =>
      selectedTag === 'All'
        ? projects
        : projects.filter((project) => project.techStack.map(normalizeTechTag).includes(selectedTag)),
    [projects, selectedTag],
  )

  const featuredProject = projects.find((project) => project.featured) ?? projects[0]

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f7f5] px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Selected Work</p>
          <h1 className="mt-4 text-4xl font-medium">Loading projects...</h1>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#f7f7f5] px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Selected Work</p>
          <h1 className="mt-4 text-4xl font-medium">Unable to load projects</h1>
          <p className="mt-4 text-slate-600">{error}</p>
        </div>
      </div>
    )
  }

  if (!projects.length) {
    return (
      <div className="min-h-screen bg-[#f7f7f5] px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Selected Work</p>
          <h1 className="mt-4 text-4xl font-medium">No projects available</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col gap-8 border-b border-slate-200 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Selected Work</p>
            <h1 className="mt-3 text-5xl font-medium md:text-7xl">Projects</h1>
          </div>

          <div className="text-left md:text-right">
            <div className="text-5xl font-medium tracking-tight">{String(projects.length).padStart(2, '0')}</div>
            <p className="text-sm text-slate-500">Projects in the portfolio</p>
          </div>
        </div>

        {featuredProject && (
          <Link
            to={`/projects/${featuredProject.id}`}
            className="group mt-14 grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl lg:grid-cols-5"
          >
            <div className="relative overflow-hidden lg:col-span-3">
              <img
                src={featuredProject.coverImage}
                alt={featuredProject.title}
                className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                Featured
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-10">
              <h2 className="text-2xl font-medium md:text-3xl">{featuredProject.title}</h2>
              <p className="mt-3 text-slate-600">{featuredProject.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.techStack.slice(0, 4).map((tag) => (
                  <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                View project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        )}

        <div className="mt-12 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="group overflow-hidden rounded-[22px] border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img src={project.coverImage} alt={project.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-2">
                  {project.techStack.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-medium text-slate-900">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{project.summary}</p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                  <span className="text-sm font-medium text-slate-500">View project</span>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!filteredProjects.length && (
          <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
            No projects match the selected tag.
          </div>
        )}
      </div>
    </div>
  )
}
