import "./FuturePage.scss";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';
import { useEffect } from 'react';
import { useHandleCircuits } from "../../utils/circuits-handler";
import Countdown from 'react-countdown';

function FuturePage() {

  const {
    fetchCircuits,
    loading,
    nextRace
  } = useHandleCircuits();


  useEffect (() => {
    fetchCircuits();
  }
  , []);

  console.log(nextRace.date + nextRace.time)
  return (
    <div className="future-page">
      <Header />
      {loading ? 
        <Loading /> :
        <div className="future-page__main" >
          <h1 className="future-page__countdown">
            <Countdown 
              date={nextRace.date + "T" + nextRace.time}
            />
          </h1>
          <main className="future-page__main-content" >
            Next Races
              <div>
                <h1>{nextRace.raceName}</h1>
                <h2>{nextRace.date}</h2>
              </div>
          </main>
        </div>}
      <Footer />
    </div>
  )
}

export default FuturePage;