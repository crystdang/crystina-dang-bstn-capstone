import "./TriviaModal.scss";

function TriviaModal({
  // question,
  // handleModalClose,
  // handleTrivia
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
        <h1 className="trivia-modal__header">
          Trivia
        </h1>
        <p className="trivia-modal__text">
          question
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
            // onClick={handleTrivia}
          >
            Trivia
          </button>
        </div>
      </div>
    </div>
  );
}

export default TriviaModal;