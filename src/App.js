import './App.css';
import Home from './Pages/Home';
import View from './Pages/View';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
function App() {
  const [page, setPage] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/view') {
      setPage('view');
    }
  }, [location]);
  return (
    <div
      className='App'
      style={{
        backgroundImage: ` ${
          page === 'home' ? 'url(/travel.jpg)' : 'url(/view.jpg)'
        } `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className='buttons_nav'>
        <button
          className='navButtons'
          type='button'
          onClick={() => {
            navigate('/');
            setPage('home');
          }}
        >
          Home
        </button>
        <button
          className='navButtons'
          type='button'
          onClick={() => {
            navigate('/view');
            setPage('view');
          }}
        >
          View
        </button>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/view' element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
