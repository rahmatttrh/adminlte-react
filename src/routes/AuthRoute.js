import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../pages/auth/Login'

export default function AuthRoute() {
   return localStorage.getItem('auth_token') ? <Outlet /> : <Login />
}
