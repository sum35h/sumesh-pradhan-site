import { render, screen } from '@testing-library/react'
import Navbar from '../Navbar'

// Mock usePathname
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Credentials')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has correct href attributes', () => {
    render(<Navbar />)
    
    const homeLink = screen.getByText('Home').closest('a')
    expect(homeLink).toHaveAttribute('href', '/')
    
    const aboutLink = screen.getByText('About').closest('a')
    expect(aboutLink).toHaveAttribute('href', '/#about')
  })

  it('highlights the active route', () => {
    const { usePathname } = require('next/navigation')
    usePathname.mockReturnValue('/')
    
    render(<Navbar />)
    
    const homeLink = screen.getByText('Home').closest('a')
    expect(homeLink).toHaveClass('text-green-300')
  })

  it('applies correct styling to inactive links', () => {
    render(<Navbar />)
    
    const aboutLink = screen.getByText('About').closest('a')
    expect(aboutLink).toHaveClass('text-gray-400')
  })
})
