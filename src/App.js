import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Mobiles from './Pages/Mobiles';
import Laptops from './Pages/Laptops';
import Watches from './Pages/Watches';
import Dismob from './Display/Dismob';
import Dislap from './Display/Dislap';
import Diswat from './Display/Diswat';
import MobileDet from './Details/MobileDet';
import LaptopDet from './Details/LaptopDet';
import WatchDet from './Details/WatchDet';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/mobiles' element={<Mobiles />} />
          <Route path='/laptops' element={<Laptops />} />
          <Route path='/watches' element={<Watches />} />
          <Route path='/dismob' element={<Dismob />} />
          <Route path='/dislap' element={<Dislap />} />
          <Route path='/diswat' element={<Diswat />} />
          <Route path='/mobiledet/:id' element={<MobileDet />} />
          <Route path='/laptopdet/:id' element={<LaptopDet />} />
          <Route path='/watchdet/:id' element={<WatchDet />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
