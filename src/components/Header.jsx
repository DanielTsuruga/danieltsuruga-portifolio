import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTheme, THEMES } from '../hooks/useTheme'
import { LANGUAGES } from '../i18n'
import styles from './Header.module.css'

const navLinks = [
  { to: '/', key: 'home' },
  { to: '/projetos', key: 'projects' },
  { to: '/sobre', key: 'about' },
  { to: '/curriculo', key: 'resume' },
  { to: '/contato', key: 'contact' },
]

const themeIcons = {
  light: '☀',
  dark: '☾',
  galo: '🐓',
}

function Header() {
  const { t, i18n } = useTranslation()

  const { theme, setTheme } = useTheme()

  const currentLang = i18n.resolvedLanguage || i18n.language

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          TSURUGA /
        </NavLink>

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
              {t(`nav.${link.key}`)}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.langGroup}>
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => i18n.changeLanguage(code)}
                aria-pressed={currentLang === code}
                className={
                  currentLang === code
                    ? `${styles.langButton} ${styles.langActive}`
                    : styles.langButton
                }
              >
                {label}
              </button>
            ))}
          </div>

          <span className={styles.divider} />

          <div className={styles.themeGroup}>
            {THEMES.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTheme(option)}
                title={t(`theme.${option}`)}
                aria-label={t(`theme.${option}`)}
                className={
                  theme === option
                    ? `${styles.iconButton} ${styles.themeActive}`
                    : styles.iconButton
                }
              >
                {themeIcons[option]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
