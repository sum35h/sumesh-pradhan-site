import { render, screen } from '@testing-library/react'
import ExperiencePage from '@/app/experience/page'

describe('ExperiencePage', () => {
  it('renders the page title', () => {
    render(<ExperiencePage />)
    
    expect(
      screen.getByRole('heading', { name: /Professional Experience/i })
    ).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<ExperiencePage />)
    
    expect(
      screen.getByText(/A detailed view of roles and impact/i)
    ).toBeInTheDocument()
  })

  it('renders back to home link', () => {
    render(<ExperiencePage />)
    
    const backLink = screen.getByText(/Back to Home/i).closest('a')
    expect(backLink).toHaveAttribute('href', '/')
    expect(backLink).toHaveClass('matrix-link')
  })

  it('has correct section styling', () => {
    const { container } = render(<ExperiencePage />)
    const section = container.querySelector('section')
    
    expect(section).toHaveClass('min-h-screen', 'flex', 'flex-col', 'justify-center', 'space-y-4')
  })
})
