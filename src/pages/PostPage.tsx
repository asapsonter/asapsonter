import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import type { Components } from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { getPost, posts } from '../lib/posts'
import { site, withBase } from '../lib/site'
import { useDocumentTitle } from '../lib/useDocumentTitle'
import { PostMetaLine, TagList } from '../components/PostCard'
import ShareBar from '../components/ShareBar'
import NotFound from './NotFound'

const markdownComponents: Components = {
  a: ({ href = '', children, ...rest }) => {
    const external = /^https?:\/\//.test(href)
    return (
      <a
        href={withBase(href)}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  },
  img: ({ src = '', alt = '', ...rest }) => (
    <img src={withBase(String(src))} alt={alt} loading="lazy" {...rest} />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto">
      <table>{children}</table>
    </div>
  ),
}

export default function PostPage() {
  const { slug = '' } = useParams()
  const post = getPost(slug)
  useDocumentTitle(post?.title ?? 'Post not found', post?.summary)

  if (!post) return <NotFound />

  const index = posts.indexOf(post)
  const newer = posts[index - 1]
  const older = posts[index + 1]
  const url = `${site.url}/blog/${post.slug}`

  return (
    <article className="pt-36 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/blog"
          className="group inline-flex items-center gap-2 text-[13px] text-text-muted hover:text-vibranium-light font-mono transition-colors mb-10"
        >
          <HiArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          All posts
        </Link>

        <header className="mb-12">
          <PostMetaLine post={post} />
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary tracking-tight leading-[1.15] mt-5 mb-6">
            {post.title}
          </h1>
          {post.summary && <p className="text-lg text-text-secondary leading-[1.7] mb-6">{post.summary}</p>}
          <TagList tags={post.tags} />
          {post.cover && (
            <img src={withBase(post.cover)} alt="" className="mt-10 w-full rounded-2xl border border-border" />
          )}
        </header>

        <div className="tribal-line mb-12" />

        <div className="prose-post">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={markdownComponents}>
            {post.body}
          </ReactMarkdown>
        </div>

        <footer className="mt-16 pt-10 border-t border-border space-y-12">
          <ShareBar title={post.title} url={url} />

          <div className="wakanda-card p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
            <div>
              <p className="font-heading text-text-primary font-semibold">Written by {site.name}</p>
              <p className="text-sm text-text-secondary mt-1">Senior software engineer — IoT, ML/AI & system integration.</p>
            </div>
            <Link
              to="/#contact"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-vibranium/10 border border-vibranium/25 text-vibranium-light text-[13px] font-mono hover:bg-vibranium/20 transition-colors"
            >
              Get in touch
            </Link>
          </div>

          {(newer || older) && (
            <nav aria-label="More posts" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {older ? (
                <Link to={`/blog/${older.slug}`} className="wakanda-card p-5 group">
                  <span className="flex items-center gap-1.5 text-[11px] text-text-muted font-mono uppercase tracking-[2px]">
                    <HiArrowLeft size={12} /> Older
                  </span>
                  <span className="block mt-2 text-text-primary group-hover:text-vibranium-light transition-colors">{older.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {newer && (
                <Link to={`/blog/${newer.slug}`} className="wakanda-card p-5 group sm:text-right">
                  <span className="flex items-center sm:justify-end gap-1.5 text-[11px] text-text-muted font-mono uppercase tracking-[2px]">
                    Newer <HiArrowRight size={12} />
                  </span>
                  <span className="block mt-2 text-text-primary group-hover:text-vibranium-light transition-colors">{newer.title}</span>
                </Link>
              )}
            </nav>
          )}
        </footer>
      </div>
    </article>
  )
}
