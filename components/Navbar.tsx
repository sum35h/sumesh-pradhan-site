'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  
  const links = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#credentials', label: 'Credentials' },
    { href: '/#services', label: 'Services' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <nav className="py-6 border-b border-green-700/30">
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={`matrix-link text-sm ${
              pathname === href ? 'text-green-300' : 'text-gray-400'
            }`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
