import Header from '../../components/Header/Header';
import PlayerInfoBar from '../../components/PlayerInfoBar/PlayerInfoBar';
import Footer from '../../components/Footer/Footer';
import Circuit from '../../components/Circuit/Circuit';
// import PointsCounter from '../../components/PointsCounter/PointsCounter';
import DriveButton from '../../components/DriveButton/DriveButton';
import TriviaModal from '../../components/TriviaModal/TriviaModal';
import Loading from '../../components/Loading/Loading';
import Landing from '../../components/Landing/Landing';
import { useTrivia } from '../../utils/trivia';
import { useHandleModal } from '../../utils/modal';
import { useEffect, useState } from 'react';
import "./MainPage.scss";
import { useHandleLanding } from '../../utils/landing-handler';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import CheatSheet from '../../components/CheatSheet/CheatSheet';

function MainPage() {

  const [selected, setSelected] = useState("");
  const [cheat, setCheat] = useState(false);

  const handleSelected = (input) => {
    setSelected(input)
  };

  const handleCheat = (e) => {
    e.preventDefault();
    setCheat(true);
  }

  const handleCheatClose = (e) => {
    e.preventDefault();
    setCheat(false);
  }

  const {
    driver,
    constructors,
    cleanConstructor,
    fetchConstructors,
    handleConstructor,
    handleDriver,
    handleLandingSubmit,
    formation,
    lights,
    team
  } = useHandleLanding();

  const { 
    fetchData,
    fetchTrivia,
    trivia,
    correctAnswer,
    loading,
    // error,
    question,
    allPossibleAnswers,
    usedTrivia
  } = useTrivia();


  const {
    modal,
    place,
    placeSuffix,
    trackProgress,
    trackProgressImage,
    answered,
    time,
    handleModal,
    handleTrivia
  } = useHandleModal();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSelected("");
    fetchTrivia(trackProgress);
  }, [modal])

  return (
    <div className="main-page">
      <Header 
        handleCheat={handleCheat}
      />
      <div className="main-page__main" >
      {loading ? <Loading /> :
      <>
      {!formation ? 
        <Landing 
        loading={loading}
        driver={driver}
        team={team}
        constructors={constructors}
        cleanConstructor={cleanConstructor}
        fetchConstructors={fetchConstructors}
        handleDriver={handleDriver}
        handleConstructor={handleConstructor}
        handleLandingSubmit={handleLandingSubmit}
        lights={lights}
        /> :
        <>
          <PlayerInfoBar 
            driver={driver}
            team={team}
            place={place}
            placeSuffix={placeSuffix}
            time={time}
          />
          <main className="main-page__main-content" >
            <Circuit 
              image={trackProgressImage}
            />
            <div className="main-page__data">
              {/* <PointsCounter /> */}
              <DriveButton 
                handler={handleModal}
                trackProgress={trackProgress}
              />
              <ProgressBar 
              answered={answered}/>
              {modal ? 
                <TriviaModal 
                  handler={handleTrivia}
                  correct={correctAnswer}
                  question={question}
                  answers={allPossibleAnswers}
                  selected={selected}
                  handleSelected={handleSelected}
                /> : ""}
              {cheat ?
                <CheatSheet 
                  usedTrivia={usedTrivia}
                  trivia={trivia}
                  handleClose={handleCheatClose}
                /> : ""}
            </div>
          </main>
        </>}
      </>}
      </div>
      <Footer />
    </div>
)
}

export default MainPage;