

import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
   const navigate = useNavigate();
   const [loginInput, setLogin] = useState({
      email: '',
      password: '',
      error: ''
   })

   const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
   });

   const handleInput = (e) => {
      e.persist();
      setLogin({ ...loginInput, [e.target.name]: e.target.value });
   }

   const loginSubmit = (e) => {
      e.preventDefault();

      const data = {
         email: loginInput.email,
         password: loginInput.password
      }

      const csrf = axios.get('/sanctum/csrf-cookie');
      console.log('csrf : ', csrf);

      const login = axios.post('/api/login', data).then(res => {

         setLogin({ ...loginInput, error: null });
         localStorage.setItem("auth_token", res.data.token);
         localStorage.setItem("auth_email", res.data.user.email);
         localStorage.setItem("auth_name", res.data.user.name);
         sessionStorage.setItem("isReload", true);

         navigate('/');
         Toast.fire({
            icon: 'success',
            title: 'Welcome back :)'
         })

      })
         .catch(function (response) {
            console.log(response.response.data.message);
            setLogin({ ...loginInput, error: response.response.data.message })
         });

   }



   return (
      <div class="hold-transition login-page">

         <div className="login-box">
            <div className="login-logo">
               {/* <h1> <b className='font-weight-bold'><i>SME</i></b></h1> */}
            </div>
            {/* /.login-logo */}
            <div className="card">
               <div className='card-header pt-4'>
                  <h1> <b className='font-weight-bold font-italic'><i className='fa fa-file-invoice text-primary'></i> BILLING MEDAN</b></h1>
               </div>
               <div className="card-body login-card-body">
                  <p className="login-box-msg">Sign in to start working</p>
                  {/* <div className=''>{loginInput.error}</div> */}
                  {/* <hr /> */}
                  {loginInput.error &&
                     <div className="alert alert-danger alert-dismissible text-left">
                        {/* <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button> */}
                        <h6><i className="icon fas fa-exclamation-triangle" /> Error!</h6>
                        <small>{loginInput.error}.</small>
                     </div>
                  }


                  <form onSubmit={loginSubmit} >
                     <div className="input-group mb-3">
                        <input type="email" name='email' onChange={handleInput} value={loginInput.email} className="form-control" placeholder="Email" />
                        <div className="input-group-append">
                           <div className="input-group-text">
                              <span className="fas fa-envelope" />
                           </div>
                        </div>
                     </div>
                     <div className="input-group mb-3">
                        <input type="password" name='password' onChange={handleInput} value={loginInput.password} className="form-control" placeholder="Password" />
                        <div className="input-group-append">
                           <div className="input-group-text">
                              <span className="fas fa-lock" />
                           </div>
                        </div>
                     </div>
                     <hr />
                     <div className="row">

                        {/* /.col */}
                        <div className="col-4">

                           <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                        </div>
                        {/* /.col */}
                     </div>
                  </form>

                  {/* /.social-auth-links */}
                  {/* <p className="mb-1">
                        <a href="forgot-password.html">I forgot my password</a>
                     </p>
                     <p className="mb-0">
                        <a href="register.html" className="text-center">Register a new membership</a>
                     </p> */}
               </div>
               <div className='card-footer text-left text-muted'>
                  <small>SME (System Maintenance Ekatama) is a web base application that provide data of maintenance truck. <br /> Property of Graha Teknologi Indotama.</small>
               </div>
               {/* /.login-card-body */}
            </div>
         </div>


      </div >
   )
}

export default Login
