import { Route, Routes } from 'react-router-dom'

import ProtectedRoute from '../components/ProtectedRoute'
import Admin from '../pages/Admin'
import AdminLogin from '../pages/AdminLogin'
import Feed from '../pages/Feed'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={(
          <ProtectedRoute roles={['admin']}>
            <Admin />
          </ProtectedRoute>
        )}
      />
    </Routes>
  )
}