import { useState, useEffect } from 'react'

export const THEMES = ['light', 'dark', 'galo']

const STORAGE_KEY = 'tsuruga-theme'

// Lê o tema salvo no navegador; se não houver, começa no 'light'.
function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY)
  return THEMES.includes(saved) ? saved : 'light'
}

export function useTheme() {
  // useState cria a "memória" do tema dentro da aplicação.
  const [theme, setTheme] = useState(getInitialTheme)

  // useEffect roda SEMPRE que `theme` mudar.
  // Aqui aplicamos o tema no <html> e salvamos a escolha.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  return { theme, setTheme }
}