import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Fades sections in as they scroll into view. Adds .js-reveal to <html> only
// when IntersectionObserver works and the visitor hasn't asked for less motion,
// so without JS (or with reduced motion) everything stays visible.
export function useReveal() {
  const { pathname } = useLocation()

  // Layout effect so sections are observed in the same frame they mount,
  // before the browser paints them in their faded start state.
  useLayoutEffect(() => {
    const root = document.documentElement
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    root.classList.add('js-reveal')
    const targets = document.querySelectorAll('.section, .page-head')
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    targets.forEach((t) => io.observe(t))

    return () => {
      io.disconnect()
      targets.forEach((t) => t.classList.remove('in'))
    }
  }, [pathname])
}
