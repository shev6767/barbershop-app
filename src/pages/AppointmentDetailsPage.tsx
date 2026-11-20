import { Link, useParams } from 'react-router-dom'

function AppointmentDetailsPage() {
  const { id } = useParams()

  return (
    <main className="page">
      <Link to="/appointments" className="back">
        ← Ко всем записям
      </Link>
      <h1>Запись № {id}</h1>
      <p className="page__desc">
        Здесь будут все данные записи: клиент, телефон, услуга, мастер, время, цена и пожелания.
        Можно будет поменять статус, отметить оплату и удалить запись.
      </p>
      <div className="actions">
        <Link to={`/appointments/${id}/edit`} className="btn">
          Редактировать
        </Link>
      </div>
    </main>
  )
}

export default AppointmentDetailsPage
