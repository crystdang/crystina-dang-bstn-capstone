import "./TriviaModal.scss";

function TriviaModal({
  question,
  answers,
  // handleModalClose,
  handler
}) {

  console.log("answers: ", answers);
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
          {question}
        </h1>
        {answers.map((answer, index) => {
          return (
            <p className="trivia-modal__text" key={index}>
              {answer}
            </p>
          )
        })}
        <div className="trivia-modal__buttons">
          {/* <button
            className="trivia-modal__cancel-btn"
            // onClick={handleModalClose}
          >
            Cancel
          </button> */}
          <button 
            className="trivia-modal__cta-btn" 
            onClick={handler}
          >
            Go!
          </button>
        </div>
      </div>
    </div>
  );
}

export default TriviaModal;