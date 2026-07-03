'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true
    if (href !== '/' && pathname.startsWith(href)) return true
    return false
  }

  return (
    <nav className="sticky top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-neutral-800">
      <div className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <img 
            src="/logo.jpeg"
            alt="Quantara Security"
            className="h-14 md:h-16 rounded"
          />
          <span className="hidden sm:inline font-bold text-sm md:text-base">Quantara Security</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors font-medium ${
                isActive(item.href)
                  ? 'text-[#d4af37]'
                  : 'text-neutral-300 hover:text-[#d4af37]'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm ml-4">
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:text-[#d4af37] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/98 border-t border-neutral-800">
          <div className="container-max py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-2 rounded transition-colors font-medium ${
                  isActive(item.href)
                    ? 'bg-neutral-800 text-[#d4af37]'
                    : 'text-neutral-300 hover:bg-neutral-900 hover:text-[#d4af37]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary w-full text-center block py-2 rounded">
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
