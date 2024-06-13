import './ProgressBar.scss';

function ProgressBar({
  answered,
  trackProgress
}) {
  

  return (
    <div className="progress-bar">
      {!answered || trackProgress > 13 ? "" :
      <div className="progress-bar__container">
        {answered.map((answer, index) => {
          const progress = answer.split(', ');
          return (
          <div 
            key={index}
            className="progress-bar__level"
          >
            <div className=
            {`progress-bar__answered ${progress[0] === "correct" ? 
              "progress-bar__answered--correct" 
              : "progress-bar__answered--incorrect"}`}
            >
              {progress[1]}
            </div>
          </div>
        )})}
      </div>}
    </div>
  )
}

export default ProgressBar;