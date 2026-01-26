import { render, screen } from '@testing-library/react'
import ProjectsPage from '@/app/projects/page'

// Mock the projects data
jest.mock('@/data/projects', () => ({
  projects: [
    {
      slug: 'project-1',
      title: 'Project 1',
      description: 'Description 1',
      tech: ['React', 'TypeScript'],
      github: 'https://github.com/test/project1',
    },
    {
      slug: 'project-2',
      title: 'Project 2',
      description: 'Description 2',
      tech: ['Node.js', 'Express'],
      demo: 'https://demo.example.com',
    },
  ],
}))

// Mock ProjectCard component
jest.mock('@/components/ProjectCard', () => {
  return function ProjectCard({ project }: any) {
    return (
      <div data-testid={`project-card-${project.slug}`}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    )
  }
})

describe('ProjectsPage', () => {
  it('renders the page title', () => {
    render(<ProjectsPage />)
    
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument()
  })

  it('renders all project cards', () => {
    render(<ProjectsPage />)
    
    expect(screen.getByTestId('project-card-project-1')).toBeInTheDocument()
    expect(screen.getByTestId('project-card-project-2')).toBeInTheDocument()
  })

  it('passes correct props to ProjectCard', () => {
    render(<ProjectsPage />)
    
    expect(screen.getByText('Project 1')).toBeInTheDocument()
    expect(screen.getByText('Description 1')).toBeInTheDocument()
    expect(screen.getByText('Project 2')).toBeInTheDocument()
    expect(screen.getByText('Description 2')).toBeInTheDocument()
  })

  it('has correct grid layout', () => {
    const { container } = render(<ProjectsPage />)
    const grid = container.querySelector('.grid')
    
    expect(grid).toHaveClass('sm:grid-cols-2', 'gap-6')
  })
})
