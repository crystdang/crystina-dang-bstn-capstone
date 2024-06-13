import "./DriveButton.scss";
import { useReward } from 'react-rewards';

function DriveButton({
  handler,
  trackProgress
}) {

  const { reward, isAnimating } = useReward('rewardId', 'confetti');

  return (
    <div className="drive-button">
      <button 
        className={`drive-button__button ${trackProgress < 13 ? "" : "drive-button__button--finished"}`}
        onClick={(trackProgress > 13) ? reward : handler}
        >
          <span id="rewardId" /> 
          {trackProgress < 14 ? "Drive" : "Checkered Flag"}
      </button>
    </div>
  )
}

export default DriveButton;