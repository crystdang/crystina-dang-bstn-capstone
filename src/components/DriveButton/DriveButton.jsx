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
        className="drive-button__button"
        onClick={(trackProgress === 14) ? reward : handler}
        >
          <span id="rewardId" /> Drive
      </button>
    </div>
  )
}

export default DriveButton;