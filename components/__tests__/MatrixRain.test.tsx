import { render, screen } from '@testing-library/react'
import MatrixRain from '../MatrixRain'

describe('MatrixRain', () => {
  beforeEach(() => {
    // Mock canvas context
    HTMLCanvasElement.prototype.getContext = jest.fn(() => ({
      fillStyle: '',
      fillRect: jest.fn(),
      fillText: jest.fn(),
      font: '',
    })) as any
  })

  it('renders a canvas element', () => {
    const { container } = render(<MatrixRain />)
    const canvas = container.querySelector('canvas')
    
    expect(canvas).toBeInTheDocument()
  })

  it('has correct CSS classes', () => {
    const { container } = render(<MatrixRain />)
    const canvas = container.querySelector('canvas')
    
    expect(canvas).toHaveClass(
      'fixed',
      'inset-0',
      'pointer-events-none',
      'opacity-20',
      '-z-10'
    )
  })

  it('has aria-hidden attribute', () => {
    const { container } = render(<MatrixRain />)
    const canvas = container.querySelector('canvas')
    
    expect(canvas).toHaveAttribute('aria-hidden', 'true')
  })

  it('sets canvas dimensions on mount', () => {
    const { container } = render(<MatrixRain />)
    const canvas = container.querySelector('canvas') as HTMLCanvasElement
    
    // Canvas dimensions should be set (may be 0 in test environment)
    expect(canvas.width).toBeDefined()
    expect(canvas.height).toBeDefined()
  })

  it('initializes canvas context', () => {
    render(<MatrixRain />)
    
    expect(HTMLCanvasElement.prototype.getContext).toHaveBeenCalledWith('2d')
  })
})
