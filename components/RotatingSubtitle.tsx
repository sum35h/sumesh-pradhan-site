'use client'

import { useState, useEffect } from 'react'

const subtitles = ['DevOps', 'Cloud', 'Platform', 'Software']

export default function RotatingSubtitle() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % subtitles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className="text-green-400 font-semibold inline-block min-w-[120px]">
      {subtitles[index]}
    </span>
  )
}
