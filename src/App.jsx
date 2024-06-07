import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import FuturePage from './pages/FuturePage/FuturePage';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/future' element={<FuturePage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;