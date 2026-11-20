function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__logo">Барбершоп</span>
        <nav className="header__nav">
          <a href="/" className="header__link header__link--active">Главная</a>
          <span className="header__link header__link--soon">Записи</span>
          <span className="header__link header__link--soon">Расписание</span>
          <span className="header__link header__link--soon">Статистика</span>
        </nav>
      </div>
    </header>
  )
}

export default Header
