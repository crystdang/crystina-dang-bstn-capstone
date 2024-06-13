import './Landing.scss';
import { useEffect } from 'react';
import Loading from '../Loading/Loading';
import Logo from '../../assets/logos/logo-zero.svg';

function Landing ({
  loading,
  driver,
  team,
  constructors,
  cleanConstructor,
  fetchConstructors,
  handleConstructor,
  handleDriver,
  handleLandingSubmit
}) {

  useEffect (() => {
    fetchConstructors();
    }
  , []);

  return (
    <main className="landing">
      {loading ? 
        <Loading /> :
        <div className="landing__popup">
          <div className="landing__header">
            <img 
              className="landing__logo" 
              src={Logo} 
              alt="logo" 
            />
            <h1 className="landing__logo-text">
              Formula Zero
            </h1>
          </div>
          <form 
            id="player" 
            className="landing__player"
            onSubmit={handleLandingSubmit}
          >
            <div className="landing__info">
              <input 
                  className="landing__name"
                  type="text" 
                  name="name" 
                  placeholder="driver name"
                  onChange={handleDriver}
                  value={driver}
              />
              <select 
                className={`landing__input ${
                  !team ? 
                  "landing__input--error" 
                  : ""}`}
                name="constructor" 
                onChange={handleConstructor}
              >
              <option value="">Choose your team</option>
              {constructors.map((constructor) => (
                    <option 
                      key={constructor.constructorId} 
                      value={cleanConstructor(constructor.name)}
                    >
                      {cleanConstructor(constructor.name)}
                    </option>
                  )
                )}
              </select>
            </div>
            <button className="landing__cta-btn">
              START
            </button>
        </form>
        </div>}
    </main>
  )
}

export default Landing;