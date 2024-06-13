import './ProgressBar.scss';

function ProgressBar({
  answered
}) {
  

  return (
    <div className="progress-bar">
      <div className="progress-bar__container">
        {answered.map((answer) => (
          <div 
            key={answer.index}
            className="progress-bar__level"
          >
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressBar;