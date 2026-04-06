import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-12 py-5 flex items-center justify-between">
        {/* Logo with tribal accent */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 relative flex items-center justify-center">
            <svg viewBox="0 0 32 32" className="w-full h-full">
              <path d="M16 2L30 16L16 30L2 16Z" fill="none" stroke="url(#logo-grad)" strokeWidth="1.5" />
              <path d="M16 8L24 16L16 24L8 16Z" fill="none" stroke="url(#logo-grad)" strokeWidth="1" opacity="0.5" />
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7B2FF2" />
                  <stop offset="100%" stopColor="#D4A843" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-heading text-sm font-semibold tracking-wide text-text-primary">
            SS
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-text-muted hover:text-vibranium-light transition-colors duration-300 tracking-wide font-mono"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[13px] px-5 py-2 rounded-full bg-vibranium/10 border border-vibranium/20 text-vibranium-light hover:bg-vibranium/20 transition-all duration-300 font-mono"
          >
            Get in touch
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-[1.5px] bg-vibranium-light transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
          <span className={`w-5 h-[1.5px] bg-vibranium-light transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/98 backdrop-blur-xl border-b border-border"
          >
            <div className="flex flex-col px-8 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-text-muted hover:text-vibranium-light transition-colors font-mono"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
