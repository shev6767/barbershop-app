import type { Appointment } from '../types'
import { appointments } from './appointments'

// имитация запроса к серверу: ответ приходит через 800 мс
export function getAppointmentsMock(): Promise<Appointment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(appointments.map((item) => ({ ...item })))
    }, 800)
  })
}
