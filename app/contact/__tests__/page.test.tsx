import { render, screen } from '@testing-library/react'
import ContactPage from '@/app/contact/page'

describe('ContactPage', () => {
  it('renders the page title', () => {
    render(<ContactPage />)
    
    expect(screen.getByRole('heading', { name: /Contact/i })).toBeInTheDocument()
  })

  it('renders the email link', () => {
    render(<ContactPage />)
    
    const emailLink = screen.getByText('you@example.com').closest('a')
    expect(emailLink).toHaveAttribute('href', 'mailto:you@example.com')
  })

  it('has correct link styling', () => {
    render(<ContactPage />)
    
    const emailLink = screen.getByText('you@example.com')
    expect(emailLink).toHaveClass('text-primary')
  })
})
