import React, { Component } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default class AuthLayout extends Component {
   render() {
      return localStorage.getItem('auth_token') ? <Navigate to='/' /> : <div class="hold-transition login-page">
         <Outlet />
      </div>
      // return (
      //    <div class="hold-transition login-page">
      //       <Outlet />
      //    </div>
      // )
   }
}
