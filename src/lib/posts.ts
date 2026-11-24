import { isPublishable, parsePost, sortByDateDesc } from './frontmatter'
import type { ParsedPost } from './frontmatter'

export type Post = ParsedPost

const files = import.meta.glob('../posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

// Drafts are visible while running `npm run dev`, hidden in production builds.
export const posts: Post[] = sortByDateDesc(
  Object.entries(files)
    .filter(([path]) => isPublishable(path))
    .map(([path, raw]) => parsePost(path, raw))
    .filter((p) => import.meta.env.DEV || !p.draft),
)

export const allTags: string[] = [...new Set(posts.flatMap((p) => p.tags))].sort((a, b) =>
  a.localeCompare(b),
)

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
