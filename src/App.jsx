import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';
import MtlTrack from './assets/images/SVG/mtl-circuit-bare.svg';

function App() {
  return (
    <BrowserRouter>
      <img className="image" src="./design/SVG/logo-zero.svg" />
      <h1>header 1: FORMULA ZERO</h1>
      <h2>header 2: Formula Zero</h2>
      <h3>header 3: Formula Zero</h3>
      <h4>header 4: Formula Zero</h4>
      <h5>header 5: Formula Zero</h5>
      <p>paragraph: Formula Zero</p>
      <img className="image image__track" src={MtlTrack} alt='mtl track' />

      <div className="test__container">
        <div className="test test__1"></div>
        <div className="test test__2"></div>
        <div className="test test__3"></div>
        <div className="test test__4"></div>
        <div className="test test__5"></div>
        <div className="test test__6"></div>
        <div className="test test__7"></div>
        <div className="test test__8"></div>
        <div className="test test__9"></div>
      </div>
      <Routes>
        <Route path='/' element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;