import { render, screen } from '@testing-library/react'
import ServicesPage from '@/app/services/page'

describe('ServicesPage', () => {
  it('renders the page title', () => {
    render(<ServicesPage />)
    
    expect(screen.getByRole('heading', { name: /What I Do/i })).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<ServicesPage />)
    
    expect(
      screen.getByText(/Consulting and engineering services I offer/i)
    ).toBeInTheDocument()
  })

  it('renders back to home link', () => {
    render(<ServicesPage />)
    
    const backLink = screen.getByText(/Back to Home/i).closest('a')
    expect(backLink).toHaveAttribute('href', '/')
    expect(backLink).toHaveClass('matrix-link')
  })

  it('has correct section styling', () => {
    const { container } = render(<ServicesPage />)
    const section = container.querySelector('section')
    
    expect(section).toHaveClass('min-h-screen', 'flex', 'flex-col', 'justify-center', 'space-y-4')
  })
})
