interface StatsCardsProps {
  todayCount: number
  waitingCount: number
  doneCount: number
  revenue: number
}

function StatsCards({ todayCount, waitingCount, doneCount, revenue }: StatsCardsProps) {
  return (
    <div className="stats">
      <div className="stats__card">
        <span className="stats__value">{todayCount}</span>
        <span className="stats__label">записей на сегодня</span>
      </div>
      <div className="stats__card">
        <span className="stats__value">{waitingCount}</span>
        <span className="stats__label">еще ждем</span>
      </div>
      <div className="stats__card">
        <span className="stats__value">{doneCount}</span>
        <span className="stats__label">уже обслужены</span>
      </div>
      <div className="stats__card">
        <span className="stats__value">{revenue} ₽</span>
        <span className="stats__label">выручка за день</span>
      </div>
    </div>
  )
}

export default StatsCards
