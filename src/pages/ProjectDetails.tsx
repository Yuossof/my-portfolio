import { ArrowUpRight, CheckCircle2, Github } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'

import { useProjects } from '../hooks/useProjects'
import { ProjectGallery } from './ProjectGallery'

export default function ProjectDetail() {
  const { id } = useParams()
  const { data: projects, loading, error } = useProjects()
  const project = projects.find((item) => item.id === id)

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7f7f5] px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Selected Work</p>
          <h1 className="mt-4 text-4xl font-medium">Loading project details...</h1>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#f7f7f5] px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Selected Work</p>
          <h1 className="mt-4 text-4xl font-medium">Unable to load project</h1>
          <p className="mt-4 text-slate-600">{error}</p>
          <Link to="/projects" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white">
            Back to projects
          </Link>
        </div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-[#f7f7f5] px-6 py-24 text-slate-900">
        <div className="mx-auto max-w-5xl rounded-[28px] border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Project not found</p>
          <h1 className="mt-4 text-4xl font-medium">We could not find the requested project.</h1>
          <p className="mt-4 text-slate-600">The project ID {id} does not exist in the portfolio collection.</p>
          <Link to="/projects" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white">
            Return to projects
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-8 flex items-center gap-3 text-sm text-slate-500">
          <Link to="/projects" className="transition-colors hover:text-slate-900">Projects</Link>
          <span>/</span>
          <span className="text-slate-900">{project.title}</span>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-[#f8f8f7] shadow-sm">
          <img
            src={project.coverImage}
            alt={project.title}
            className="block h-full w-full bg-white object-cover aspect-[16/9] md:aspect-[16/7]"
          />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Selected Work</p>
            <h1 className="mt-4 text-4xl font-medium md:text-4xl">{project.title}</h1>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-8 text-lg leading-8 text-slate-700">{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  View live project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-100"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              )}
            </div>
          </div>

          <aside className="rounded-[20px] border border-slate-200 bg-white p-6 ">
            <h2 className="text-lg font-medium text-slate-900">Project overview</h2>
            <dl className="mt-6 space-y-4 text-sm text-slate-600">
              {project.category && (
                <div>
                  <dt className="font-medium text-slate-900">Category</dt>
                  <dd className="mt-1">{project.category}</dd>
                </div>
              )}
              {project.role && (
                <div>
                  <dt className="font-medium text-slate-900">Role</dt>
                  <dd className="mt-1">{project.role}</dd>
                </div>
              )}
              {project.architecture && (
                <div>
                  <dt className="font-medium text-slate-900">Architecture</dt>
                  <dd className="mt-1">{project.architecture}</dd>
                </div>
              )}
            </dl>
          </aside>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-medium md:text-3xl">Highlights</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {project.highlights.map((highlight, index) => (
              <div key={highlight} className="rounded-[22px] border border-slate-200 bg-white p-6">
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-medium text-white">
                  0{index + 1}
                </span>
                <p className="text-slate-700">{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[24px] border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-medium">Key features</h2>
            <ul className="mt-6 space-y-4">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">
                    <CheckCircle2 className="h-3.5 w-3.5 text-slate-900" />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[24px] border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-medium">Challenges</h2>
            <ul className="mt-6 space-y-4">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="flex gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">
                    <CheckCircle2 className="h-3.5 w-3.5 text-slate-900" />
                  </span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <ProjectGallery title={project.title} gallery={project.gallery} />
      </div>
    </div>
  )
}
