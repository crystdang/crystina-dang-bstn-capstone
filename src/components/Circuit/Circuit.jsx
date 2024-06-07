import './Circuit.scss';
import { useState } from 'react';
import MtlTrack from '../../assets/images/SVG/track-grey.svg';
import RainbowTrack from '../../assets/images/SVG/track-rainbow-all.svg';

function Circuit () {
  const [trackProgressImage, setTrackProgressImage] = useState(MtlTrack);
  const [trackProgress, setTrackProgress] = useState(1);

  const trackProgressHandler = (e) => {
    e.preventDefault();
    
    if (trackProgress > 15) {
      return setTrackProgressImage(RainbowTrack);
    }

    setTrackProgress(trackProgress + 1);
    setTrackProgressImage(`/src/assets/images/SVG/track-${trackProgress}.svg`);
  }

  return (
    <section className="circuit">
      <div className="circuit__main">
        <img className="circuit__image" 
          src={trackProgressImage} 
          alt='mtl track' 
          onClick={trackProgressHandler}
        />
      </div>
    </section>
  )
}

export default Circuit;