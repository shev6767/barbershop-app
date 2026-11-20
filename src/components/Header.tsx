import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', title: 'Главная' },
  { to: '/appointments', title: 'Записи' },
  { to: '/schedule', title: 'Расписание' },
  { to: '/stats', title: 'Статистика' },
]

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          Барбершоп
        </NavLink>
        <nav className="header__nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'header__link header__link--active' : 'header__link'
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
