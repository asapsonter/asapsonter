import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../lib/useDocumentTitle'

export default function NotFound() {
  useDocumentTitle('Page not found')
  return (
    <section className="pt-44 pb-32 px-6 md:px-12">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-mono text-[13px] text-vibranium/60 tracking-[3px] uppercase mb-5">404</p>
        <h1 className="font-heading text-4xl font-semibold text-text-primary tracking-tight mb-6">
          This page doesn't exist
        </h1>
        <p className="text-text-secondary mb-10">The link may be old, or the post may have moved.</p>
        <div className="flex justify-center gap-4">
          <Link to="/" className="px-6 py-3 bg-vibranium text-white text-sm rounded-full hover:bg-vibranium-light transition-colors">
            Home
          </Link>
          <Link to="/blog" className="px-6 py-3 border border-border-gold text-gold text-sm rounded-full hover:bg-gold-dim transition-colors">
            Blog
          </Link>
        </div>
      </div>
    </section>
  )
}
