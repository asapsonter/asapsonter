import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { HiOutlineRss } from 'react-icons/hi'
import { site, withBase } from '../lib/site'

const links = [
  { label: 'About', to: '/#about' },
  { label: 'Work', to: '/#projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Tribal accent */}
        <div className="flex items-center gap-4 mb-8">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-vibranium/30" aria-hidden>
            <path d="M12 2L22 12L12 22L2 12Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 7L17 12L12 17L7 12Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-vibranium/10 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[13px] text-text-secondary tracking-wide font-mono">
              &copy; {new Date().getFullYear()} {site.name}
            </p>
            <p className="text-[11px] text-text-muted mt-1 font-mono tracking-wide">
              Built from Nigeria, for the world
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[13px] text-text-secondary hover:text-vibranium-light transition-colors tracking-wide font-mono"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 text-text-muted">
              <a href={site.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-vibranium-light transition-colors"><FaGithub size={15} /></a>
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-vibranium-light transition-colors"><FaLinkedin size={15} /></a>
              <a href={site.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-vibranium-light transition-colors"><FaXTwitter size={15} /></a>
              <a href={withBase('/rss.xml')} aria-label="RSS feed" className="hover:text-gold transition-colors"><HiOutlineRss size={16} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
