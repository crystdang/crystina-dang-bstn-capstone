import './PlayerInfoBar.scss';
import { useState } from 'react';

function PlayerInfoBar() {
  const currentTime = Date.now();
  const [user, setUser] = useState("Vettel");
  const [time, setTime] = useState(currentTime);
  const [team, setTeam] = useState("FERRARI");

  return (
    <div className="player-info">
      <div className="player-info__main">
        <div className="player-info__container">
          <h2 className="player-info__user">
            {user}
          </h2>
          <div className="player-info__data">
            <h2 className="player-info__time">
              {time}
            </h2>
            <h2 className="player-info__team">
              {team}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayerInfoBar;