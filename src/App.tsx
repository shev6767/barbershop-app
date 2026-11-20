import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AppointmentsPage from './pages/AppointmentsPage'
import AppointmentDetailsPage from './pages/AppointmentDetailsPage'
import AppointmentFormPage from './pages/AppointmentFormPage'
import StatsPage from './pages/StatsPage'
import SchedulePage from './pages/SchedulePage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="appointments/new" element={<AppointmentFormPage />} />
          <Route path="appointments/:id" element={<AppointmentDetailsPage />} />
          <Route path="appointments/:id/edit" element={<AppointmentFormPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="stats" element={<StatsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
