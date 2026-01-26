import { render, screen, waitFor } from '@testing-library/react'
import VisitorCounter from '../VisitorCounter'

describe.skip('VisitorCounter', () => {
  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear()
    jest.clearAllMocks()
  })

  it('initializes count from localStorage', async () => {
    localStorage.setItem('visitorCount', '5')
    
    render(<VisitorCounter />)
    
    await waitFor(() => {
      expect(screen.getByText('Visitor #6')).toBeInTheDocument()
    })
  })

  it('starts count at 1 if no previous count exists', async () => {
    render(<VisitorCounter />)
    
    await waitFor(() => {
      expect(screen.getByText('Visitor #1')).toBeInTheDocument()
    })
  })

  it('increments and saves count to localStorage', async () => {
    localStorage.setItem('visitorCount', '10')
    
    render(<VisitorCounter />)
    
    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith('visitorCount', '11')
    })
  })

  it('does not render before count is loaded', () => {
    const { container } = render(<VisitorCounter />)
    
    // Before useEffect runs, component should render null
    expect(container.firstChild).toBeNull()
  })

  it('has correct styling', async () => {
    render(<VisitorCounter />)
    
    await waitFor(() => {
      const element = screen.getByText(/Visitor #/).closest('span')
      expect(element).toHaveClass('matrix-link')
    })
  })

  it('handles invalid localStorage data', async () => {
    localStorage.setItem('visitorCount', 'invalid')
    
    render(<VisitorCounter />)
    
    await waitFor(() => {
      // NaN + 1 = NaN, but should still render something
      const text = screen.getByText(/Visitor #/)
      expect(text).toBeInTheDocument()
    })
  })
})
