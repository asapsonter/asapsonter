import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import { HiOutlineSearch, HiOutlineRss } from 'react-icons/hi'
import { allTags, posts } from '../lib/posts'
import { withBase } from '../lib/site'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import PostCard from '../components/PostCard'

export default function Blog() {
  useDocumentTitle('Blog', 'Notes on new technologies — IoT, applied ML/AI and system integration.')
  const [params, setParams] = useSearchParams()
  const activeTag = params.get('tag') ?? ''
  const query = params.get('q') ?? ''

  const update = (key: 'tag' | 'q', value: string) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((p) => {
      if (activeTag && !p.tags.includes(activeTag)) return false
      if (!q) return true
      return [p.title, p.summary, p.tags.join(' '), p.body].some((s) => s.toLowerCase().includes(q))
    })
  }, [activeTag, query])

  return (
    <section className="pt-36 pb-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[13px] text-vibranium/60 tracking-[3px] mb-5 font-mono uppercase">Blog</p>
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-text-primary tracking-tight">
            Notes on<span className="vibranium-text"> new technology</span>
          </h1>
          <p className="text-text-secondary mt-6 max-w-2xl leading-[1.8]">
            Hands-on write-ups on the tools and ideas I'm working with — IoT, applied ML/AI, and
            the integration work that ties systems together.
          </p>
          <a
            href={withBase('/rss.xml')}
            className="mt-6 inline-flex items-center gap-2 text-[13px] text-gold hover:text-gold-light font-mono transition-colors"
          >
            <HiOutlineRss size={15} /> Subscribe via RSS
          </a>
        </motion.header>

        <div className="flex flex-col gap-5 mb-12">
          <label className="relative block max-w-md">
            <span className="sr-only">Search posts</span>
            <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={16} />
            <input
              type="search"
              value={query}
              onChange={(e) => update('q', e.target.value)}
              placeholder="Search posts…"
              className="w-full bg-surface-card border border-border rounded-full pl-11 pr-4 py-3 text-sm text-text-primary focus:outline-none focus:border-vibranium/40 transition-colors placeholder:text-text-muted"
            />
          </label>
          {allTags.length > 0 && (
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
              {['', ...allTags].map((tag) => {
                const active = tag === activeTag
                return (
                  <button
                    key={tag || 'all'}
                    type="button"
                    onClick={() => update('tag', tag)}
                    aria-pressed={active}
                    className={`px-3.5 py-1.5 text-[12px] rounded-full font-mono tracking-wide border transition-colors ${
                      active
                        ? 'bg-vibranium text-white border-vibranium'
                        : 'text-text-secondary border-border hover:border-vibranium/40 hover:text-text-primary'
                    }`}
                  >
                    {tag ? `#${tag}` : 'All'}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-text-secondary font-mono text-sm">
            {posts.length === 0 ? 'No posts yet — check back soon.' : 'No posts match that filter.'}
          </p>
        )}
      </div>
    </section>
  )
}
