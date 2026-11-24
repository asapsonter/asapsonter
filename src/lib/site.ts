export const site = {
  name: 'Sam Sonter',
  title: 'Sam Sonter — Senior Software Engineer',
  description:
    'Senior software engineer working across IoT, ML/AI and system integration. Portfolio and notes on new technologies.',
  url: import.meta.env.VITE_SITE_URL as string,
  email: 'samuel.aarga@gmail.com',
  socials: {
    github: 'https://github.com/asapsonter',
    linkedin: 'https://linkedin.com/in/aarga-sonter',
    x: 'https://twitter.com/asapsonter',
  },
}

/** Prefix a root-relative path ("/blog/img.png") with the deploy base ("/asapsonter/"). */
export function withBase(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path
  return import.meta.env.BASE_URL.replace(/\/$/, '') + path
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
