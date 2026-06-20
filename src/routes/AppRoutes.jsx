import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Feed from "../pages/Feed";
import Login from '../pages/Login'
import AdminLogin from '../pages/AdminLogin'
import Register from '../pages/Register'
import Admin from '../pages/Admin'
import ProtectedRoute from '../components/ProtectedRoute'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute roles={['admin']} redirectTo="/admin-login">
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}