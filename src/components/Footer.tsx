export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-8 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-[13px] text-text-muted tracking-wide">
          &copy; {new Date().getFullYear()} Sam Sonter
        </p>
        <div className="flex gap-8">
          {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] text-text-muted hover:text-text-primary transition-colors tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
