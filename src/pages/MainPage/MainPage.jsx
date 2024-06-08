import Header from '../../components/Header/Header';
import PlayerInfoBar from '../../components/PlayerInfoBar/PlayerInfoBar';
import Footer from '../../components/Footer/Footer';
import Circuit from '../../components/Circuit/Circuit';
import PointsCounter from '../../components/PointsCounter/PointsCounter';
import DriveButton from '../../components/DriveButton/DriveButton';
import TriviaModal from '../../components/TriviaModal/TriviaModal';
import MtlTrack from '../../assets/images/SVG/track-grey.svg';
import RainbowTrack from '../../assets/images/SVG/track-rainbow-all.svg';
import { useState } from 'react';
import "./MainPage.scss";

function MainPage() {

  const [modal, setModal] = useState(false);
  const [trackProgressImage, setTrackProgressImage] = useState(MtlTrack);
  const [trackProgress, setTrackProgress] = useState(1);

  const modalHandler = () => {
    if (trackProgress > 16) {
      return setModal(false);
    }
    setModal(true);
  }

  const handleTrivia = () => {
    setModal(false);
    if (trackProgress > 15) {
      return setTrackProgressImage(RainbowTrack);
    }

    setTrackProgress(trackProgress + 1);
    setTrackProgressImage(`/src/assets/images/SVG/track-${trackProgress}.svg`);
  }

console.log(trackProgress);
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__main" >
        <PlayerInfoBar />
        <main className="main-page__main-content" >
          <Circuit 
            image={trackProgressImage}
          />
          <div className="main-page__data">
            <PointsCounter />
            <DriveButton 
              handler={modalHandler}
            />
            {modal ? 
              <TriviaModal 
                handler={handleTrivia}
              /> : ""}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default MainPage;