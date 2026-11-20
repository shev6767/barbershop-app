import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <main className="page not-found">
      <h1>Страница не найдена</h1>
      <p className="page__desc">Такого адреса в приложении нет.</p>
      <Link to="/" className="btn">
        На главную
      </Link>
    </main>
  )
}

export default NotFoundPage
