import { ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useProjects } from '../hooks/useProjects'

const clamp = (min: number, value: number, max: number) => Math.min(max, Math.max(min, value))

const ProjectsHorizontal = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  // drag state
  const isDraggingRef = useRef(false)
  const hasDraggedRef = useRef(false)
  const startXRef = useRef(0)
  const startScrollLeftRef = useRef(0)
  const lastXRef = useRef(0)
  const lastTsRef = useRef(0)
  const velocityRef = useRef(0) // px per ms, in scrollLeft terms
  const momentumRafRef = useRef<number | null>(null)

  const { data: projects, loading, error } = useProjects()

  const featuredProjects = projects.slice(0, 4)

  const scrollByAmount = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return

    const amount = 640
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  useEffect(() => {
    const container = scrollRef.current
    if (!container || loading || error || !featuredProjects.length) return

    const mql = window.matchMedia('(min-width: 768px)')
    let cleanupDesktop: (() => void) | null = null

    // All of this only applies at md+ (mobile keeps native touch scrolling via
    // overflow-x-auto + snap in the JSX, so it needs none of this JS).
    const setupDesktopBehavior = () => {
      if (!mql.matches) return

      const stopMomentum = () => {
        if (momentumRafRef.current !== null) {
          cancelAnimationFrame(momentumRafRef.current)
          momentumRafRef.current = null
        }
      }

      const onPointerDown = (e: PointerEvent) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return

        stopMomentum()
        isDraggingRef.current = true
        hasDraggedRef.current = false
        startXRef.current = e.clientX
        startScrollLeftRef.current = container.scrollLeft
        lastXRef.current = e.clientX
        lastTsRef.current = performance.now()
        velocityRef.current = 0

        container.setPointerCapture(e.pointerId)
        container.style.cursor = 'grabbing'
        document.body.style.userSelect = 'none'
      }

      const onPointerMove = (e: PointerEvent) => {
        if (!isDraggingRef.current) return

        const deltaX = e.clientX - startXRef.current
        if (Math.abs(deltaX) > 3) hasDraggedRef.current = true

        const maxScroll = container.scrollWidth - container.clientWidth
        container.scrollLeft = clamp(0, startScrollLeftRef.current - deltaX, maxScroll)

        const now = performance.now()
        const dt = now - lastTsRef.current
        if (dt > 0) {
          const instX = e.clientX - lastXRef.current
          velocityRef.current = -instX / dt
        }
        lastXRef.current = e.clientX
        lastTsRef.current = now
      }

      const endDrag = (e: PointerEvent) => {
        if (!isDraggingRef.current) return
        isDraggingRef.current = false
        container.style.cursor = ''
        document.body.style.userSelect = ''
        try {
          container.releasePointerCapture(e.pointerId)
        } catch {
          /* no-op */
        }

        let velocity = velocityRef.current
        let lastTs = performance.now()

        if (Math.abs(velocity) > 0.03) {
          const step = (ts: number) => {
            const dt = ts - lastTs
            lastTs = ts

            const maxScroll = container.scrollWidth - container.clientWidth
            container.scrollLeft = clamp(0, container.scrollLeft + velocity * dt, maxScroll)
            velocity *= Math.pow(0.94, dt / 16.67)

            const atEdge = container.scrollLeft <= 0 || container.scrollLeft >= maxScroll
            if (Math.abs(velocity) < 0.02 || atEdge) {
              momentumRafRef.current = null
              return
            }
            momentumRafRef.current = requestAnimationFrame(step)
          }
          momentumRafRef.current = requestAnimationFrame(step)
        }
      }

      const onClickCapture = (e: MouseEvent) => {
        if (hasDraggedRef.current) {
          e.preventDefault()
          e.stopPropagation()
          hasDraggedRef.current = false
        }
      }

      container.addEventListener('pointerdown', onPointerDown)
      window.addEventListener('pointermove', onPointerMove)
      window.addEventListener('pointerup', endDrag)
      window.addEventListener('pointercancel', endDrag)
      container.addEventListener('click', onClickCapture, true)

      cleanupDesktop = () => {
        stopMomentum()
        container.style.cursor = ''
        document.body.style.userSelect = ''
        container.removeEventListener('pointerdown', onPointerDown)
        window.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('pointerup', endDrag)
        window.removeEventListener('pointercancel', endDrag)
        container.removeEventListener('click', onClickCapture, true)
      }
    }

    setupDesktopBehavior()

    const onBreakpointChange = () => {
      cleanupDesktop?.()
      cleanupDesktop = null
      setupDesktopBehavior()
    }
    mql.addEventListener('change', onBreakpointChange)

    return () => {
      mql.removeEventListener('change', onBreakpointChange)
      cleanupDesktop?.()
    }
  }, [loading, error, featuredProjects.length])

  if (loading) {
    return (
      <section id="projects" className="py-32 bg-[#FAFAFA]">
        <div className="mx-auto max-w-[1400px] px-6">
          <span className="text-sm uppercase tracking-[0.25em] text-slate-400">Selected Work</span>
          <h2 className="mt-4 text-4xl font-medium text-slate-900">Loading projects...</h2>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="projects" className="py-32 bg-[#FAFAFA]">
        <div className="mx-auto max-w-[1400px] px-6">
          <span className="text-sm uppercase tracking-[0.25em] text-slate-400">Selected Work</span>
          <h2 className="mt-4 text-4xl font-medium text-slate-900">Unable to load projects</h2>
          <p className="mt-3 text-slate-600">{error}</p>
        </div>
      </section>
    )
  }

  if (!featuredProjects.length) {
    return (
      <section id="projects" className="py-32 bg-[#FAFAFA]">
        <div className="mx-auto max-w-[1400px] px-6">
          <span className="text-sm uppercase tracking-[0.25em] text-slate-400">Selected Work</span>
          <h2 className="mt-4 text-4xl font-medium text-slate-900">No projects available</h2>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="overflow-hidden bg-[#FAFAFA] py-32">
      <div className="mx-auto mb-16 max-w-[1400px] px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-sm uppercase tracking-[0.25em] text-slate-400">Selected Work</span>
            <h2 className="mt-4 text-5xl font-medium text-slate-900 md:text-7xl">Projects</h2>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <span className="mr-4 text-sm text-slate-400">Use arrows or drag to browse</span>
            <button
              type="button"
              onClick={() => scrollByAmount('left')}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:border-slate-400 hover:text-slate-900"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount('right')}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white transition-all hover:bg-slate-800"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto md:overflow-x-hidden px-6 pb-8 snap-x snap-mandatory md:snap-none md:px-[calc((100vw-1400px)/2+24px)] md:cursor-grab"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x',
        }}
      >
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group shrink-0 w-[85vw] md:w-[600px] lg:w-[700px] snap-start md:snap-align-none"
          >
            <div className="relative h-[500px] overflow-hidden rounded-3xl bg-gray-200 shadow-lg shadow-gray-200/50 transition-shadow duration-500 group-hover:shadow-xl group-hover:shadow-gray-300/50 md:h-[550px]">
              <img
                src={project.coverImage}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                draggable={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

              <div className="absolute left-8 top-8">
                <span className="select-none text-[120px] font-bold leading-none text-white/10 md:text-[180px]">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-sm text-white/60">Featured</span>
                  <span className="h-px w-8 bg-white/30" />
                  <div className="flex gap-2">
                    {project.techStack.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-sm text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="mb-4 text-3xl font-medium text-white md:text-4xl">{project.title}</h3>
                <p className="mb-8 max-w-md text-white/70">{project.summary}</p>

                <div className="flex items-center gap-4">
                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/70 transition-all hover:border-white/60 hover:bg-white/10 hover:text-white"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        <Link
          to="/projects"
          className="group flex h-[500px] w-[85vw] shrink-0 snap-start flex-col items-center justify-center gap-6 rounded-3xl border-2 border-dashed border-slate-300 transition-all duration-300 hover:border-slate-400 hover:bg-white md:h-[550px] md:w-[400px] md:snap-align-none"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-300 transition-all group-hover:border-slate-900 group-hover:bg-slate-900">
            <ArrowUpRight className="h-8 w-8 text-slate-400 transition-colors group-hover:text-white" />
          </div>
          <span className="font-medium text-slate-400 transition-colors group-hover:text-slate-900">View All Projects</span>
          <span className="inline-flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-800">
            Explore more <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      </div>
    </section>
  )
}

export default ProjectsHorizontal