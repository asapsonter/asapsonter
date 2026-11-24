import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import type { Post } from '../lib/posts'
import { formatDate } from '../lib/site'

export function PostMetaLine({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-text-muted font-mono tracking-wide">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span aria-hidden>·</span>
      <span>{post.readingMinutes} min read</span>
      {post.draft && (
        <span className="px-2 py-0.5 rounded-full border border-gold/30 text-gold text-[10px] uppercase tracking-[2px]">
          Draft
        </span>
      )}
    </div>
  )
}

export function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          to={`/blog?tag=${encodeURIComponent(tag)}`}
          className="relative z-10 px-3 py-1 text-[11px] text-vibranium-light/80 border border-vibranium/15 rounded-full tracking-wide font-mono bg-vibranium-dim hover:border-vibranium/40 transition-colors"
        >
          #{tag}
        </Link>
      ))}
    </div>
  )
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="wakanda-card p-7 md:p-8 flex flex-col group relative h-full">
      <PostMetaLine post={post} />
      <h3 className="font-heading text-xl font-semibold text-text-primary mt-4 mb-3 leading-snug group-hover:text-vibranium-light transition-colors duration-300">
        {/* Stretched link: the whole card is clickable, tags stay independently clickable above it. */}
        <Link to={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">
          {post.title}
        </Link>
      </h3>
      {post.summary && (
        <p className="text-sm text-text-secondary leading-[1.8] mb-6 flex-1">{post.summary}</p>
      )}
      <div className="flex items-end justify-between gap-4 mt-auto">
        <TagList tags={post.tags} />
        <HiArrowRight
          size={16}
          className="shrink-0 text-text-muted group-hover:text-vibranium-light group-hover:translate-x-1 transition-all"
          aria-hidden
        />
      </div>
    </article>
  )
}
