import Header from '../../components/Header/Header';
import PlayerInfoBar from '../../components/PlayerInfoBar/PlayerInfoBar';
import Footer from '../../components/Footer/Footer';
import Circuit from '../../components/Circuit/Circuit';
import PointsCounter from '../../components/PointsCounter/PointsCounter';
import DriveButton from '../../components/DriveButton/DriveButton';
import TriviaModal from '../../components/TriviaModal/TriviaModal';
import Loading from '../../components/Loading/Loading';
import { useTrivia } from '../../utils/trivia';
import { useModalHandler } from '../../utils/modal';
import { useEffect, useState } from 'react';
import "./MainPage.scss";

function MainPage() {

  const [selected, setSelected] = useState("");

  const handleSelected = (input) => {
    setSelected(input)
  }

  const{ 
    fetchData,
    fetchTrivia,
    correctAnswer,
    loading,
    // error,
    question,
    allPossibleAnswers,
  } = useTrivia();


  const{
    modal,
    trackProgress,
    trackProgressImage,
    modalHandler,
    handleTrivia
  } = useModalHandler();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSelected("");
    fetchTrivia(trackProgress);
  }, [modal])

  return (
    <div className="main-page">
      <Header />
      {loading ? <Loading /> :
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
                correct={correctAnswer}
                question={question}
                answers={allPossibleAnswers}
                selected={selected}
                handleSelected={handleSelected}
              /> : ""}
          </div>
        </main>
      </div>}
      <Footer />
    </div>
)
}

export default MainPage;