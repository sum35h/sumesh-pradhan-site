import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders the copyright text with current year', () => {
    render(<Footer />)
    
    const currentYear = new Date().getFullYear()
    expect(
      screen.getByText(`© ${currentYear} Sumesh Pradhan. All rights reserved.`)
    ).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    
    const githubLink = screen.getByText('GitHub').closest('a')
    expect(githubLink).toHaveAttribute('href', 'https://github.com/sum35h')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noreferrer')
    
    const linkedinLink = screen.getByText('LinkedIn').closest('a')
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/sumeshpradhan')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noreferrer')
  })

  it('has correct styling classes', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    
    expect(footer).toHaveClass('py-8', 'border-t', 'border-green-700/30', 'mt-20')
  })

  it('renders links with matrix-link class', () => {
    render(<Footer />)
    
    const githubLink = screen.getByText('GitHub')
    const linkedinLink = screen.getByText('LinkedIn')
    
    expect(githubLink).toHaveClass('matrix-link')
    expect(linkedinLink).toHaveClass('matrix-link')
  })
})
