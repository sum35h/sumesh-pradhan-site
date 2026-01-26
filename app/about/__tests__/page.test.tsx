import { render, screen } from '@testing-library/react'
import AboutPage from '@/app/about/page'

describe('AboutPage', () => {
  it('renders the page title', () => {
    render(<AboutPage />)
    
    expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument()
  })

  it('renders the bio text', () => {
    render(<AboutPage />)
    
    expect(
      screen.getByText(/Brief bio, skills, and interests/i)
    ).toBeInTheDocument()
  })

  it('has correct section styling', () => {
    const { container } = render(<AboutPage />)
    const section = container.querySelector('section')
    
    expect(section).toHaveClass('space-y-4')
  })
})
