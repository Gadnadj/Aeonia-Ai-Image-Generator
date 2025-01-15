import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Result from './pages/Result';
import BuyCredit from './pages/BuyCredit';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from './components/Login';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App() {

  const { showLogin } = useContext(AppContext);

  return (
    <div className='min-h-screen bg-gradient-to-b from-teal-50 to-orange-200'>
      <ToastContainer position = 'bottom-right' />
      <NavBar />
      {showLogin && <Login />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<Result />} />
        <Route path='/buy-credit' element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
