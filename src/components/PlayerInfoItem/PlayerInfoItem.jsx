import './PlayerInfoItem.scss';

function PlayerInfoItem({
  place,
  user,
  // time,
  team
}) {

  
  return (
    <>
      <div className="player-info__identifier">
      <h3 className="player-info__place">
        {place}
      </h3>
      <h2 className="player-info__user">
        {user}
      </h2>
      </div>
      <div className="player-info__data">
      <h2 className="player-info__time">
        {/* {time} */}
      </h2>
      <h2 className="player-info__team">
        {team}
      </h2>
      </div>
    </>
  )
}

export default PlayerInfoItem;