import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTheme, THEMES } from '../hooks/useTheme'
import styles from './Header.module.css'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/curriculo', label: 'Currículo' },
  { to: '/contato', label: 'Contato' },
]

const languages = ['PT', 'EN']

const themeMeta = {
  light: { icon: '☀', label: 'Tema claro' },
  dark: { icon: '☾', label: 'Tema escuro' },
  galo: { icon: '🐓', label: 'Tema galo' },
}

function Header() {
  // Lógica de tema vinda do nosso hook personalizado.
  const { theme, setTheme } = useTheme()

  // Estado local do idioma selecionado.
  const [lang, setLang] = useState('PT')

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo: volta ao início */}
        <NavLink to="/" className={styles.logo}>
          TSURUGA /
        </NavLink>

        {/* Menu de navegação */}
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Área de ações: idioma + tema */}
        <div className={styles.actions}>
          {/* Idioma (PT | EN) */}
          <div className={styles.langGroup}>
            {languages.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLang(option)}
                className={
                  lang === option
                    ? `${styles.langButton} ${styles.langActive}`
                    : styles.langButton
                }
              >
                {option}
              </button>
            ))}
          </div>

          <span className={styles.divider} />

          {/* Tema (claro | escuro | galo) */}
          <div className={styles.themeGroup}>
            {THEMES.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTheme(option)}
                title={themeMeta[option].label}
                aria-label={themeMeta[option].label}
                className={
                  theme === option
                    ? `${styles.iconButton} ${styles.themeActive}`
                    : styles.iconButton
                }
              >
                {themeMeta[option].icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header