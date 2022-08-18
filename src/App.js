


import Dashboard from './pages/Dashboard';
import Driver from './pages/Driver';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Maintenance from './pages/Maintenance';
import Login from './pages/auth/Login';
import AppLayout from './layouts/AppLayout';
import AuthLayout from './layouts/AuthLayout';
import axios from 'axios';
import AuthRoute from './routes/AuthRoute';
import NotFound from './pages/errors/NotFound';


axios.defaults.baseURL = 'http://192.168.1.142:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.withCredentials = true
axios.interceptors.request.use(function (config) {
   const token = localStorage.getItem('auth_token')
   config.headers.Authorization = token ? `Bearer ${token}` : '';
   return config
})

function App() {
   return (
      <BrowserRouter>
         <div class="wrapper">
            {/* <Header />
            <Sidebar /> */}
            <Routes>
               {/* <Route element={<AuthRoute />}> */}
               {/* <Route path='/'>
                     {localStorage.getItem('auth_token') ? <Navigate to='/login' /> : <Dashboard />}
                  </Route> */}
               <Route element={<AppLayout />}>
                  <Route path='/' element={<Dashboard />} />
                  <Route path='/driver' element={<Driver />} />
                  <Route path='/maintenance' element={<Maintenance />} />
               </Route>
               <Route path='*' element={<NotFound />} />

               {/* </Route> */}
               {/* <Route path='/login' element={<Login />} /> */}
               <Route element={<AuthLayout />}>
                  <Route path='/login' element={<Login />} />
               </Route>
               {/* <Route path='/login' element={localStorage.getItem('auth_token') ? <Navigate to="/" /> : <Navigate to="/login" />} /> */}

            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
