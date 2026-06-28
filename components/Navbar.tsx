'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-surface/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-accent/40 group-hover:border-accent transition-colors">
            <img
              src="/profile_pic.png"
              alt="Hari Mishra"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-mono text-md text-accent-soft tracking-widest uppercase hover:text-white transition-colors">
            Hari Prapanna Mishra
          </span>
        </a>
        {/* <a
          href="#"
          className="font-mono text-sm text-accent-soft tracking-widest uppercase hover:text-white transition-colors"
        >
          hari<span className="text-muted">.</span>dev
        </a> */}

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="animated-link text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:hari.mishra.in@gmail.com"
            className="ml-2 px-4 py-1.5 text-sm rounded border border-accent text-accent hover:bg-accent hover:text-white transition-all"
          >
            Hire me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
