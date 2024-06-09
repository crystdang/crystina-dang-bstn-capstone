import "./FuturePage.scss";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import FormulaOneApi from '../../utils/f1-api';

function FuturePage() {

  const [circuits, setCircuits] = useState([]);

  const formulaOneApi = new FormulaOneApi();

  const fetchCircuits = async () => {
    try {
      const response = await formulaOneApi.getAllCircuits();
      setCircuits(response);

    } catch {
      console.error("Error fetching circuit data");
    }};

  useEffect (() => {
    fetchCircuits();
    }
  , []);

  return (
    <div className="future-page">
      <Header />
      <div className="future-page__main" >
        <main className="future-page__main-content" >
          Next Races
          {circuits.map(circuit => {
            return (
              <div key={circuit.round}>
                <h1>{circuit.raceName}</h1>
                <h2>{circuit.date}</h2>
                <h2>{circuit.time}</h2>
              </div>
            )
          })}
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default FuturePage;