import './Landing.scss';
import { useEffect } from 'react';
import Loading from '../Loading/Loading';

function Landing ({
  loading,
  driver,
  constructors,
  cleanConstructor,
  fetchConstructors,
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
          <form 
            id="player" 
            className="landing__player"
            onSubmit={handleLandingSubmit}
          >
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
                !constructors ? 
                "landing__input--error" 
                : ""}`}
              name="constructor" 
              // onChange={handleConstructor}
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
            <button>
              START THE FORMATION LAP
            </button>
        </form>
        </div>}
    </main>
  )
}

export default Landing;