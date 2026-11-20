export type Service =
  | 'Мужская стрижка'
  | 'Детская стрижка'
  | 'Стрижка бороды'
  | 'Стрижка + борода'
  | 'Бритье'

export type Status = 'записан' | 'выполнено' | 'отменено' | 'не пришел'

export interface Appointment {
  id: string
  clientName: string
  phone: string
  comment: string
  service: Service
  master: string
  status: Status
  price: number
  date: string // формат 2026-11-21T10:00
  isPaid: boolean
}
