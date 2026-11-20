import { Outlet } from 'react-router-dom'
import Header from './Header'

// общий макет: шапка с меню остается, меняется только содержимое
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
