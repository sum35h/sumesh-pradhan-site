import { render, screen } from '@testing-library/react'
import CredentialsPage from '@/app/credentials/page'

describe('CredentialsPage', () => {
  it('renders the page title', () => {
    render(<CredentialsPage />)
    
    expect(screen.getByRole('heading', { name: /Credentials/i })).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<CredentialsPage />)
    
    expect(
      screen.getByText(/Certifications and accreditations with links/i)
    ).toBeInTheDocument()
  })

  it('renders back to home link', () => {
    render(<CredentialsPage />)
    
    const backLink = screen.getByText(/Back to Home/i).closest('a')
    expect(backLink).toHaveAttribute('href', '/')
    expect(backLink).toHaveClass('matrix-link')
  })

  it('has correct section styling', () => {
    const { container } = render(<CredentialsPage />)
    const section = container.querySelector('section')
    
    expect(section).toHaveClass('min-h-screen', 'flex', 'flex-col', 'justify-center', 'space-y-4')
  })
})
