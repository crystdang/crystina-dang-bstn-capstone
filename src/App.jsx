import './App.scss';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import FormulaOneApi from './utils/api';

function App() {

  // const formulaOneApi = new FormulaOneApi();

  // const fetchCircuits = async () => {
  //   try {
  //     const response = await formulaOneApi.getAllCircuits();

  //   } catch {
  //     console.error("Error fetching circuit data");
  //   }};

  // useEffect (() => {
  //   fetchCircuits();
  //   }
  // , []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
      </Routes>

      <h1>header 1: FORMULA ZERO</h1>
      <h2>header 2: Formula Zero</h2>
      <h3>header 3: Formula Zero</h3>
      <h4>header 4: Formula Zero</h4>
      <h5>header 5: Formula Zero</h5>
      <p>paragraph: Formula Zero</p>
    </BrowserRouter>
  );
}

export default App;