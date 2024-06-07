import "./TriviaModal.scss";

function TriviaModal({
  question,
  answer,
  // handleModalClose,
  handleTrivia
}) {
  
  return (
    <div className="trivia-modal">
      <div className="trivia-modal__popup">
        {/* <img
          className="trivia-modal__close"
          src={closeIcon}
          alt="Close Icon"
          onClick={handleModalClose}
        /> */}
        <h1 className="trivia-modal__question">
          {!question ? "question" : {question}}
        </h1>
        <p className="trivia-modal__text">
          a. {!answer ? "answer 1" : {answer}}
        </p>
        <p className="trivia-modal__text">
          b. {!answer ? "answer 2" : {answer}}
        </p>
        <p className="trivia-modal__text">
          c. {!answer ? "answer 3" : {answer}}
        </p>
        <p className="trivia-modal__text">
          d. {!answer ? "answer 4" : {answer}}
        </p>
        <div className="trivia-modal__buttons">
          {/* <button
            className="trivia-modal__cancel-btn"
            // onClick={handleModalClose}
          >
            Cancel
          </button> */}
          <button 
            className="trivia-modal__cta-btn" 
            onClick={handleTrivia}
          >
            Go!
          </button>
        </div>
      </div>
    </div>
  );
}

export default TriviaModal;