import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to `#hash` targets after navigation, otherwise to the top of the new page. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section has rendered after a route change.
      const id = requestAnimationFrame(() => {
        document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ behavior: 'smooth' })
      })
      return () => cancelAnimationFrame(id)
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}
