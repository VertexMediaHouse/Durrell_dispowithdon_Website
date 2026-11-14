import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = `Dispo With Don — ${title}`
  }, [title])
}
