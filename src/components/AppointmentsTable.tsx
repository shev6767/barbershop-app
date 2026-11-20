import type { Appointment } from '../types'
import StatusBadge from './StatusBadge'

interface AppointmentsTableProps {
  items: Appointment[]
}

function getTime(date: string) {
  return date.slice(11, 16)
}

function AppointmentsTable({ items }: AppointmentsTableProps) {
  if (items.length === 0) {
    return <p className="empty">На этот день записей нет</p>
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Время</th>
          <th>Клиент</th>
          <th>Услуга</th>
          <th>Мастер</th>
          <th>Цена</th>
          <th>Статус</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{getTime(item.date)}</td>
            <td>{item.clientName}</td>
            <td>{item.service}</td>
            <td>{item.master}</td>
            <td>{item.price} ₽</td>
            <td>
              <StatusBadge status={item.status} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default AppointmentsTable
