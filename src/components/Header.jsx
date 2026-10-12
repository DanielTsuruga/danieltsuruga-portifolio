import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/curriculo', label: 'Currículo' },
  { to: '/contato', label: 'Contato' },
]

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
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

        {/* Área de ações (idioma/tema) */}
        <div className={styles.actions}>
          <span>PT / EN</span>
        </div>
      </div>
    </header>
  )
}

export default Header