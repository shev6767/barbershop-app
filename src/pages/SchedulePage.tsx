import { Link } from 'react-router-dom'

function SchedulePage() {
  return (
    <main className="page">
      <h1>Расписание мастеров</h1>
      <p className="page__desc">
        Здесь будет сетка на день: мастера по столбцам, время по строкам. Занятое время
        закрашено, а по свободному окну можно сразу записать клиента.
      </p>
      <div className="actions">
        <Link to="/appointments/new" className="btn">
          Записать клиента
        </Link>
      </div>
    </main>
  )
}

export default SchedulePage
