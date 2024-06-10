import './PlayerInfoBar.scss';
import { useState } from 'react';
import PlayerInfoItem from '../PlayerInfoItem/PlayerInfoItem';

function PlayerInfoBar({
  driver,
  team,
  place,
  placeSuffix
}) {
  
  // const [time, setTime] = useState(currentTime);

  return (
    <div className="player-info">
      <div className="player-info__main">
        {(place > 1) ? 
          <div className="player-info__container player-info__container--other player-info__container--top">
            <PlayerInfoItem 
              place={placeSuffix(place - 1)}
              user="Alonso"
              // time="- 1:20"
              team="ALPINE"
            />
          </div> : ""}
        <div className={`player-info__container ${(place === 20) ? 'player-info__container--last' : ""}`}>
          <PlayerInfoItem 
            place={placeSuffix(place)}
            user={driver}
            // time={time}
            team={team}
          />
        </div>
        {(place < 20) ? 
          <div className="player-info__container player-info__container--other player-info__container--bottom">
              <PlayerInfoItem 
                place={placeSuffix(place + 1)}
                user="Hamilton"
                // time="+ 0:20"
                team="MERCEDES"
              />
          </div> : ""}
      </div>
    </div>
  )
}

export default PlayerInfoBar;