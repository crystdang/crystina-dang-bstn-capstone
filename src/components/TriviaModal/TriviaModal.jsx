import "./TriviaModal.scss";

function TriviaModal({
  question,
  answers,
  selected,
  correct,
  handleSelected,
  handler
}) {

  return (
    <div className="trivia-modal">
      <div className="trivia-modal__popup">
        <h1 className="trivia-modal__question">
          {question}
        </h1>
        {answers.map((answer, index) => {
          return (
            <button 
              className={`trivia-modal__text ${(selected === answer) ? "trivia-modal__text--selected" : ""}`} 
              key={index}
              onClick={() => handleSelected(answer)}
            >
              {answer}
            </button>
          )
        })}
        <div className="trivia-modal__buttons">
          <button 
            className="trivia-modal__cta-btn" 
            onClick={() => handler(selected, correct)}
          >
            Go!
          </button>
        </div>
      </div>
    </div>
  );
}

export default TriviaModal;