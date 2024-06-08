import './PlayerInfoBar.scss';
import { useState } from 'react';
import PlayerInfoItem from '../PlayerInfoItem/PlayerInfoItem';

function PlayerInfoBar() {
  const currentTime = Date.now();
  const [place, setPlace] = useState("4th");
  const [user, setUser] = useState("Vettel");
  const [time, setTime] = useState(currentTime);
  const [team, setTeam] = useState("FERRARI");

  return (
    <div className="player-info">
      <div className="player-info__main">
        <div className="player-info__container player-info__container--other player-info__container--top">
          <PlayerInfoItem 
            place="3rd"
            user="Alonso"
            time="- 1:20"
            team="ALPINE"
          />
        </div>
        <div className="player-info__container">
          <PlayerInfoItem 
            place={place}
            user={user}
            time={time}
            team={team}
          />
        </div>
        <div className="player-info__container player-info__container--other player-info__container--bottom">
          <PlayerInfoItem 
            place="5th"
            user="Hamilton"
            time="+ 0:20"
            team="MERCEDES"
          />
        </div>
      </div>
    </div>
  )
}

export default PlayerInfoBar;