import './PlayerInfoBar.scss';
import PlayerInfoItem from '../PlayerInfoItem/PlayerInfoItem';

function PlayerInfoBar({
  driver,
  team,
  place,
  placeSuffix,
  time
}) {

  return (
    <div className="player-info">
      <div className="player-info__main">
        {(place > 1) ? 
          <div className="player-info__container player-info__container--other player-info__container--top">
            <PlayerInfoItem 
              place={placeSuffix(place - 1)}
              user="Alonso"
              time=""
              team="ASTON MARTIN"
            />
          </div> : ""}
        <div className={`player-info__container ${(place === 20) ? 'player-info__container--last' : ""}${(place === 1) ? 'player-info__container--first' : ""}`}>
          <PlayerInfoItem 
            place={placeSuffix(place)}
            user={driver}
            time={`POSITION: ${time}`}
            team={team}
          />
        </div>
        {(place < 20) ? 
          <div className="player-info__container player-info__container--other player-info__container--bottom">
              <PlayerInfoItem 
                place={placeSuffix(place + 1)}
                user="Hamilton"
                time=""
                team="MERCEDES"
              />
          </div> : ""}
      </div>
    </div>
  )
}

export default PlayerInfoBar;