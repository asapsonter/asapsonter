import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { posts } from '../lib/posts'
import PostCard from './PostCard'

export default function LatestPosts() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const latest = posts.slice(0, 3)
  if (latest.length === 0) return null

  return (
    <>
      <div className="tribal-line max-w-6xl mx-auto" />
      <section id="writing" className="py-28 md:py-36 px-6 md:px-12" ref={ref}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <p className="text-[13px] text-vibranium/60 tracking-[3px] mb-5 font-mono uppercase">Writing</p>
              <h2 className="font-heading text-3xl md:text-[42px] font-semibold text-text-primary tracking-tight">
                Notes on<span className="vibranium-text"> new technology</span>
              </h2>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors font-mono"
            >
              All posts
              <HiArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.12 * i, duration: 0.6 }}
              >
                <PostCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
