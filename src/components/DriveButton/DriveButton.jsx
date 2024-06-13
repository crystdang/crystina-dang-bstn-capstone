import "./DriveButton.scss";
import { useReward } from 'react-rewards';
import CheckeredFlag from '../../assets/graphics/checkered-flag.svg';

function DriveButton({
  handler,
  trackProgress
}) {

  const { reward, isAnimating } = useReward('rewardId', 'confetti');

  return (
    <div className="drive-button">
      <button 
        className={`drive-button__button ${trackProgress < 14 ? "" : "drive-button__button--finished"}`}
        onClick={(trackProgress > 13) ? reward : handler}
        >
          <span id="rewardId" /> 
          {trackProgress < 14 ? "Drive" : "Checkered Flag"}
      </button>
      {trackProgress < 14 ? "" : <img className="drive-button__flag" src={CheckeredFlag} alt="checkered flag" />}
    </div>
  )
}

export default DriveButton;