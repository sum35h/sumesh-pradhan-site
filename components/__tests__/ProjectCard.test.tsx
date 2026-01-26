import { render, screen } from '@testing-library/react'
import ProjectCard from '../ProjectCard'

const mockProject = {
  slug: 'test-project',
  title: 'Test Project',
  description: 'This is a test project description',
  tech: ['React', 'TypeScript', 'Jest'],
  github: 'https://github.com/test/project',
  demo: 'https://demo.example.com',
}

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />)
    
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders project description', () => {
    render(<ProjectCard project={mockProject} />)
    
    expect(screen.getByText('This is a test project description')).toBeInTheDocument()
  })

  it('renders all technology tags', () => {
    render(<ProjectCard project={mockProject} />)
    
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Jest')).toBeInTheDocument()
  })

  it('renders GitHub link when provided', () => {
    render(<ProjectCard project={mockProject} />)
    
    const githubLink = screen.getByText('GitHub').closest('a')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test/project')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noreferrer')
  })

  it('renders demo link when provided', () => {
    render(<ProjectCard project={mockProject} />)
    
    const demoLink = screen.getByText('Demo').closest('a')
    expect(demoLink).toHaveAttribute('href', 'https://demo.example.com')
    expect(demoLink).toHaveAttribute('target', '_blank')
    expect(demoLink).toHaveAttribute('rel', 'noreferrer')
  })

  it('does not render GitHub link when not provided', () => {
    const projectWithoutGithub = { ...mockProject, github: undefined }
    render(<ProjectCard project={projectWithoutGithub} />)
    
    expect(screen.queryByText('GitHub')).not.toBeInTheDocument()
  })

  it('does not render demo link when not provided', () => {
    const projectWithoutDemo = { ...mockProject, demo: undefined }
    render(<ProjectCard project={projectWithoutDemo} />)
    
    expect(screen.queryByText('Demo')).not.toBeInTheDocument()
  })

  it('has correct card styling', () => {
    const { container } = render(<ProjectCard project={mockProject} />)
    const card = container.firstChild
    
    expect(card).toHaveClass('matrix-card', 'rounded-lg', 'p-4', 'space-y-3')
  })

  it('applies correct styling to tech tags', () => {
    render(<ProjectCard project={mockProject} />)
    
    const reactTag = screen.getByText('React')
    expect(reactTag).toHaveClass('text-xs', 'px-2', 'py-1', 'rounded', 'matrix-border', 'text-green-300')
  })

  it('applies correct styling to title', () => {
    render(<ProjectCard project={mockProject} />)
    
    const title = screen.getByText('Test Project')
    expect(title).toHaveClass('text-xl', 'font-semibold', 'text-green-300')
  })
})
