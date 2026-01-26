import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

// Mock components
jest.mock('@/components/VisitorCounter', () => {
  return function VisitorCounter() {
    return <div data-testid="visitor-counter">Visitor Counter</div>
  }
})

jest.mock('@/components/MatrixRain', () => {
  return function MatrixRain() {
    return <div data-testid="matrix-rain">Matrix Rain</div>
  }
})

jest.mock('@/components/RotatingSubtitle', () => {
  return function RotatingSubtitle() {
    return <span data-testid="rotating-subtitle">DevOps</span>
  }
})

describe('HomePage', () => {
  it('renders the hero section', () => {
    render(<HomePage />)
    
    expect(screen.getByText(/Hello, I'm Sumesh/)).toBeInTheDocument()
    expect(screen.getAllByText(/Engineer/i).length).toBeGreaterThan(0)
  })

  it('renders the tagline', () => {
    render(<HomePage />)
    
    expect(
      screen.getByText('On a journey of building bridges between code, cloud, and culture.')
    ).toBeInTheDocument()
  })

  it('renders navigation links in hero', () => {
    render(<HomePage />)
    
    expect(screen.getByText('experience')).toBeInTheDocument()
    expect(screen.getByText('whoami')).toBeInTheDocument()
    expect(screen.getByText('contact')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<HomePage />)
    
    const linkedinLinks = screen.getAllByText('LinkedIn')
    expect(linkedinLinks.length).toBeGreaterThan(0)
    
    const githubLinks = screen.getAllByText('GitHub')
    expect(githubLinks.length).toBeGreaterThan(0)
  })

  it('renders about section', () => {
    render(<HomePage />)
    
    expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument()
    expect(
      screen.getByText(/DevOps engineer and cloud architect/i)
    ).toBeInTheDocument()
  })

  it('renders technical skills section', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Technical Skills')).toBeInTheDocument()
    expect(screen.getByText('Cloud Infrastructure')).toBeInTheDocument()
    expect(screen.getAllByText('Kubernetes').length).toBeGreaterThan(0)
  })

  it('renders experience section', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Professional Experience')).toBeInTheDocument()
    expect(screen.getAllByText(/Eventbrite/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Appsmith/i).length).toBeGreaterThan(0)
  })

  it('renders credentials section', () => {
    render(<HomePage />)
    
    expect(screen.getAllByText('Credentials')[0]).toBeInTheDocument()
    expect(screen.getByText(/Kubernetes Certified/i)).toBeInTheDocument()
  })

  it('renders services section', () => {
    render(<HomePage />)
    
    expect(screen.getAllByText('What I Do')[0]).toBeInTheDocument()
    expect(screen.getByText('Cloud Engineering')).toBeInTheDocument()
    expect(screen.getByText('DevOps & Automation')).toBeInTheDocument()
  })

  it('renders contact section', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
  })

  it('has correct section IDs for anchor navigation', () => {
    const { container } = render(<HomePage />)
    
    expect(container.querySelector('#home')).toBeInTheDocument()
    expect(container.querySelector('#about')).toBeInTheDocument()
    expect(container.querySelector('#experience')).toBeInTheDocument()
    expect(container.querySelector('#credentials')).toBeInTheDocument()
    expect(container.querySelector('#services')).toBeInTheDocument()
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })

  it('renders MatrixRain component', () => {
    render(<HomePage />)
    
    expect(screen.getByTestId('matrix-rain')).toBeInTheDocument()
  })

  it('renders RotatingSubtitle component', () => {
    render(<HomePage />)
    
    expect(screen.getByTestId('rotating-subtitle')).toBeInTheDocument()
  })
})
