import { NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Início' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/curriculo', label: 'Currículo' },
  { to: '/contato', label: 'Contato' },
]

function Header() {
  return (
    <header>
      {/* Logo: ao clicar, volta para o início */}
      <NavLink to="/">TSURUGA /</NavLink>

      {/* Menu de navegação */}
      <nav>
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header