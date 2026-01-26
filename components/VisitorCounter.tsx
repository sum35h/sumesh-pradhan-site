'use client'

import { useState, useEffect } from 'react'

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    // Simulate fetching visitor count
    const storedCount = localStorage.getItem('visitorCount')
    const currentCount = storedCount ? parseInt(storedCount, 10) : 0
    const newCount = currentCount + 1
    localStorage.setItem('visitorCount', newCount.toString())
    setCount(newCount)
  }, [])

  if (count === null) return null

  return (
    <div className="text-sm text-gray-400">
      <span className="matrix-link">Visitor #{count}</span>
    </div>
  )
}
