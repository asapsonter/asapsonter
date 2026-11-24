import { useEffect } from 'react'
import { site } from './site'

export function useDocumentTitle(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : site.title
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description || site.description
  }, [title, description])
}
