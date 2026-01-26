import Link from 'next/link'

interface Project {
  slug: string
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="matrix-card rounded-lg p-4 space-y-3">
      <h3 className="text-xl font-semibold text-green-300">{project.title}</h3>
      <p className="text-gray-300 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 rounded matrix-border text-green-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="matrix-link text-sm"
          >
            GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="matrix-link text-sm"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  )
}
