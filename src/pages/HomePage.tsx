import { useEffect, useState } from 'react'
import type { Appointment } from '../types'
import { getAppointmentsMock } from '../mocks/api'
import StatsCards from '../components/StatsCards'
import AppointmentsTable from '../components/AppointmentsTable'
import NextClient from '../components/NextClient'

// "сегодня" для mock-данных
const TODAY = '2026-11-21'

function HomePage() {
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAppointmentsMock().then((data) => {
      setAppointments(data)
      setIsLoading(false)
    })
  }, [])

  const today = appointments
    .filter((item) => item.date.startsWith(TODAY))
    .sort((a, b) => a.date.localeCompare(b.date))

  const waiting = today.filter((item) => item.status === 'записан')
  const done = today.filter((item) => item.status === 'выполнено')
  const revenue = done
    .filter((item) => item.isPaid)
    .reduce((sum, item) => sum + item.price, 0)

  return (
    <main className="page">
      <section className="intro">
        <h1>Журнал записей</h1>
        <p>
          Здесь администратор видит, кто записан на сегодня, к какому мастеру и сколько уже
          заработали за день.
        </p>
        <p className="intro__date">Сегодня: 21 ноября 2026</p>
      </section>

      {isLoading ? (
        <p className="loading">Загрузка...</p>
      ) : (
        <>
          <StatsCards
            todayCount={today.length}
            waitingCount={waiting.length}
            doneCount={done.length}
            revenue={revenue}
          />

          <div className="home-grid">
            <section className="block">
              <h2>Записи на сегодня</h2>
              <AppointmentsTable items={today} />
            </section>
            <NextClient item={waiting[0]} />
          </div>
        </>
      )}
    </main>
  )
}

export default HomePage
