import React, { Component } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Login from '../pages/auth/Login';


function AppLayout() {

   const navigate = useNavigate()
   return localStorage.getItem('auth_token') ? <div className="hold-transition sidebar-mini layout-fixed">
      <Header />
      <Sidebar />
      <Outlet />
   </div> : <Navigate to='/login' />;
}

export default AppLayout
