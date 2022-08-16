

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Driver from './pages/Driver';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Maintenance from './pages/Maintenance';


function App() {
   return (
      <BrowserRouter>
         <div class="wrapper">
            <Header />
            <Sidebar />
            <Routes>
               <Route path='/' element={<Dashboard />} />
               <Route path='/driver' element={<Driver />} />
               <Route path='/maintenance' element={<Maintenance />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
