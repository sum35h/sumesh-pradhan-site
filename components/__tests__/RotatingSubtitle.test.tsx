import { render, screen, waitFor, act } from '@testing-library/react'
import RotatingSubtitle from '../RotatingSubtitle'

jest.useFakeTimers()

describe('RotatingSubtitle', () => {
  it('renders the first subtitle initially', () => {
    render(<RotatingSubtitle />)
    
    expect(screen.getByText('DevOps')).toBeInTheDocument()
  })

  it('rotates through subtitles', async () => {
    render(<RotatingSubtitle />)
    
    // Initial subtitle
    expect(screen.getByText('DevOps')).toBeInTheDocument()
    
    // Advance timers by 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000)
    })
    
    await waitFor(() => {
      expect(screen.getByText('Cloud')).toBeInTheDocument()
    })
    
    // Advance timers by another 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000)
    })
    
    await waitFor(() => {
      expect(screen.getByText('Platform')).toBeInTheDocument()
    })
    
    // Advance timers by another 2 seconds
    act(() => {
      jest.advanceTimersByTime(2000)
    })
    
    await waitFor(() => {
      expect(screen.getByText('Software')).toBeInTheDocument()
    })
    
    // Should cycle back to first
    act(() => {
      jest.advanceTimersByTime(2000)
    })
    
    await waitFor(() => {
      expect(screen.getByText('DevOps')).toBeInTheDocument()
    })
  })

  it('has correct styling classes', () => {
    render(<RotatingSubtitle />)
    
    const element = screen.getByText('DevOps')
    expect(element).toHaveClass('text-green-400', 'font-semibold', 'inline-block', 'min-w-[120px]')
  })

  it('cleans up interval on unmount', () => {
    const { unmount } = render(<RotatingSubtitle />)
    
    const clearIntervalSpy = jest.spyOn(global, 'clearInterval')
    
    unmount()
    
    expect(clearIntervalSpy).toHaveBeenCalled()
    clearIntervalSpy.mockRestore()
  })
})
