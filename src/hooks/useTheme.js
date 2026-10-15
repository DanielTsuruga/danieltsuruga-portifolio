import { useState, useEffect } from 'react'

export const THEMES = ['light', 'dark', 'galo']

export const VISIBLE_THEMES = ['light', 'dark']

const STORAGE_KEY = 'tsuruga-theme'

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  return THEMES.includes(saved) ? saved : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return { theme, setTheme }
}
