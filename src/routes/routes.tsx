import { Route, Routes } from 'react-router-dom';
import Login from '../components/login/Login';
import Dashboard from '../pages/Dashboard';
import Calendar from '../pages/Calendar';
const ROUTES = {
  // General Routes
  DASHBOARD: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  ACTIVATE_ACCOUNT: '/activate-account',

  // Profile Routes
  PROFILE: '/:username',

  // Report Routes
  REPORTS: '/reports',

  CALENDAR: '/calendar',
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* General Routes */}
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.CALENDAR} element={<Calendar />} />
    </Routes>
  )
};

export default AppRoutes;