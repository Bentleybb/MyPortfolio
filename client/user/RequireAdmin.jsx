import { Navigate } from 'react-router-dom'
import auth from '../lib/auth-helper'

export default function RequireAdmin({ children }) {
  const currentUser = auth.isAuthenticated()?.user
  if (!currentUser || currentUser.role !== 'admin') {
    return <Navigate to="/" />
  }
  return children
}
