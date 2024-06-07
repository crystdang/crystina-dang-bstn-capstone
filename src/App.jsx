import './App.scss';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import FormulaOneApi from './utils/api';
import TriviaModal from './components/TriviaModal/TriviaModal';

function App() {

  const formulaOneApi = new FormulaOneApi();

  const fetchCircuits = async () => {
    try {
      const response = await formulaOneApi.getAllCircuits();
      console.log(response);
    } catch {
      console.error("Error fetching circuit data");
    }};

  useEffect (() => {
    fetchCircuits();
    }
  , []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
      </Routes>
    {/* <TriviaModal /> */}
    </BrowserRouter>
  );
}

export default App;