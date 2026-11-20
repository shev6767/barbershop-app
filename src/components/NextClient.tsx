import type { Appointment } from '../types'

function NextClient({ item }: { item: Appointment | undefined }) {
  if (!item) {
    return (
      <div className="next">
        <h3>Следующий клиент</h3>
        <p>На сегодня больше никого нет</p>
      </div>
    )
  }

  return (
    <div className="next">
      <h3>Следующий клиент</h3>
      <p className="next__time">{item.date.slice(11, 16)}</p>
      <p className="next__name">{item.clientName}</p>
      <p>
        {item.service}, мастер {item.master}
      </p>
      <p className="next__phone">{item.phone}</p>
      {item.comment && <p className="next__comment">«{item.comment}»</p>}
    </div>
  )
}

export default NextClient
