import { Link } from 'react-router-dom'

function AppointmentsPage() {
  return (
    <main className="page">
      <h1>Записи</h1>
      <p className="page__desc">
        Здесь будет таблица всех записей с поиском по имени и телефону, фильтрами по мастеру,
        услуге и статусу и сортировкой по дате и цене.
      </p>
      <div className="actions">
        <Link to="/appointments/new" className="btn">
          Новая запись
        </Link>
      </div>
      <p>Пример записи для проверки перехода:</p>
      <ul className="simple-list">
        <li>
          <Link to="/appointments/3">13:00, Егор Смирнов, мужская стрижка</Link>
        </li>
        <li>
          <Link to="/appointments/5">15:30, Илья Воронин, стрижка бороды</Link>
        </li>
      </ul>
    </main>
  )
}

export default AppointmentsPage
