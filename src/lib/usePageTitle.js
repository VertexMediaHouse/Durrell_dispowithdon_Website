import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} | Dispo With Don`
  }, [title])
}
