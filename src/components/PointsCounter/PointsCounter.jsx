import './PointsCounter.scss';
import { useState } from 'react';

function PointsCounter() {
  const [points, setPoints] = useState(0);

  return (
    <div className="points">
      <div className="points__main">
        <h2 className="points__counter">
          points: {points}
        </h2>
      </div>
    </div>
  )
}

export default PointsCounter;