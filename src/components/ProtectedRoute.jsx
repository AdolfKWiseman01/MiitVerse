import { Navigate, useLocation } from 'react-router-dom'

import { useAuth } from '../context/useAuth'

export default function ProtectedRoute({ children, roles, redirectTo = '/login' }) {
  const { isAuthenticated, user, ready } = useAuth()
  const location = useLocation()

  if (!ready) {
    return null
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace state={{ from: location }} />
  }

  if (roles?.length && !roles.includes(user?.role)) {
    return <Navigate to={redirectTo} replace />
  }

  return children
}