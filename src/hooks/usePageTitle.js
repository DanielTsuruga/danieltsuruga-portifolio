import { useEffect } from 'react'

const BASE = 'Daniel Tsuruga'

export function usePageTitle(titulo) {
  useEffect(() => {
    document.title = titulo ? `${titulo} — ${BASE}` : `${BASE} — Portfólio`
  }, [titulo])
}
