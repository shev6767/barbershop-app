import { Link, useParams } from 'react-router-dom'

// одна страница и для создания, и для редактирования
function AppointmentFormPage() {
  const { id } = useParams()
  const isEdit = id !== undefined

  return (
    <main className="page">
      <Link to={isEdit ? `/appointments/${id}` : '/appointments'} className="back">
        ← Назад
      </Link>
      <h1>{isEdit ? `Редактирование записи № ${id}` : 'Новая запись'}</h1>
      <p className="page__desc">
        Здесь будет форма: имя и телефон клиента, услуга, мастер, дата и время, цена и пожелания.
        Поля будут проверяться перед сохранением.
      </p>
    </main>
  )
}

export default AppointmentFormPage
