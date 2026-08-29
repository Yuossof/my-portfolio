import { useEffect, useState } from 'react'

export type Project = {
  id: string
  title: string
  category: string
  summary: string
  description: string
  techStack: string[]
  coverImage: string
  gallery: string[]
  featured: boolean
  highlights: string[]
  features: string[]
  challenges: string[]
  architecture?: string
  role?: string
  links: {
    live?: string
    github?: string
  }
}

export function useProjects() {
  const [data, setData] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json')

        if (!response.ok) {
          throw new Error(`Failed to load projects (${response.status})`)
        }

        const result = (await response.json()) as Project[]

        if (!Array.isArray(result)) {
          throw new Error('Projects data is not in the expected format.')
        }

        if (isMounted) {
          setData(result)
          setError(null)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Something went wrong while loading projects.')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchProjects()

    return () => {
      isMounted = false
    }
  }, [])

  return { data, loading, error }
}
