import './App.css';
import Home from './Pages/Home';
import View from './Pages/View';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  return (
    <div className='App'>
      <div className='buttons_nav'>
        <button type='button' onClick={() => navigate('/')}>
          Home
        </button>
        <button type='button' onClick={() => navigate('/view')}>
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
