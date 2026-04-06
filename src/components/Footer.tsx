export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Tribal accent */}
        <div className="flex items-center gap-4 mb-8">
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-vibranium/30">
            <path d="M12 2L22 12L12 22L2 12Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 7L17 12L12 17L7 12Z" fill="none" stroke="currentColor" strokeWidth="1" />
          </svg>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-vibranium/10 to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[13px] text-text-muted tracking-wide font-mono">
              &copy; {new Date().getFullYear()} Sam Sonter
            </p>
            <p className="text-[11px] text-text-muted/50 mt-1 font-mono tracking-wide">
              Built from Nigeria, for the world
            </p>
          </div>
          <div className="flex gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[13px] text-text-muted hover:text-vibranium-light transition-colors tracking-wide font-mono"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
