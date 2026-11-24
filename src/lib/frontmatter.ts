// Shared by the app (src/lib/posts.ts) and the build-time RSS plugin (vite.config.ts).
// Keep this file free of browser- or Vite-specific APIs.

export interface PostMeta {
  slug: string
  title: string
  date: string // YYYY-MM-DD
  summary: string
  tags: string[]
  draft: boolean
  cover?: string
}

export interface ParsedPost extends PostMeta {
  body: string
  readingMinutes: number
}

type FrontmatterValue = string | boolean | string[]

function unquote(value: string): string {
  const v = value.trim()
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
    return v.slice(1, -1)
  }
  return v
}

/** Parses a small YAML subset: `key: value`, `key: [a, b]`, `key: true|false`. */
export function parseFrontmatter(raw: string): { data: Record<string, FrontmatterValue>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, body: raw }

  const data: Record<string, FrontmatterValue> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/)
    if (!kv) continue
    const [, key, rawValue] = kv
    const value = rawValue.trim()
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value.slice(1, -1).split(',').map(unquote).filter(Boolean)
    } else if (value === 'true' || value === 'false') {
      data[key] = value === 'true'
    } else {
      data[key] = unquote(value)
    }
  }
  return { data, body: match[2] }
}

/** `2026-11-23-my-post.md` -> `my-post`; `my-post.md` -> `my-post` */
export function slugFromPath(path: string): string {
  const file = path.split('/').pop() ?? path
  return file.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '')
}

export function parsePost(path: string, raw: string): ParsedPost {
  const { data, body } = parseFrontmatter(raw)
  const file = path.split('/').pop() ?? ''
  const dateFromFile = file.match(/^(\d{4}-\d{2}-\d{2})-/)?.[1]
  const words = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length

  const str = (v: FrontmatterValue | undefined) => (typeof v === 'string' ? v : '')
  const tags = data.tags
  return {
    slug: str(data.slug) || slugFromPath(path),
    title: str(data.title) || slugFromPath(path),
    date: str(data.date) || dateFromFile || '1970-01-01',
    summary: str(data.summary),
    tags: Array.isArray(tags) ? tags : typeof tags === 'string' && tags ? [tags] : [],
    draft: data.draft === true,
    cover: str(data.cover) || undefined,
    body,
    readingMinutes: Math.max(1, Math.round(words / 220)),
  }
}

/** Files starting with `_` (e.g. `_template.md`) are never published. */
export function isPublishable(path: string): boolean {
  return !(path.split('/').pop() ?? '').startsWith('_')
}

export function sortByDateDesc<T extends { date: string }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}
