import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-b from-teal-50 to-orange-100'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy-credit' element={<BuyCredit />} />
      </Routes>
    </div>
  );
}

export default App;
