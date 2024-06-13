import './CheatSheet.scss';
import CloseIcon from '../../assets/graphics/close-24px.svg';

function CheatSheet({
  usedTrivia,
  trivia,
  handleClose
}) {
  

  return (
    <div className="cheat-sheet">
      <div className="cheat-sheet__popup">
      <img
          className="cheat-sheet__close"
          src={CloseIcon}
          alt="Close Icon"
          onClick={handleClose}
        />
      {!usedTrivia ? 
      <h1 className="cheat-sheet__none">
        No questions were answered
      </h1> : 
      <div className="cheat-sheet__body">
        {usedTrivia.map((each) => {
          const data = trivia.find(({ id }) => id === each);
          return (
            <div 
              key={data.id}
              className="cheat-sheet__item"
            >
              <h2 className="cheat-sheet__question">
                {data.question}
              </h2>
              <h1 className="cheat-sheet__answer">
                {data.correct_answer}
              </h1>
            </div>
          )
        })}
      </div>}
      </div>
    </div>
  )
}

export default CheatSheet;