import { useState } from "react";
import MtlTrack from '../assets/images/SVG/track-grey.svg';
import RainbowTrack from '../assets/images/SVG/track-rainbow-all.svg';

export const useModalHandler = () => {

  const [modal, setModal] = useState(false);
  const [trackProgressImage, setTrackProgressImage] = useState(MtlTrack);
  const [trackProgress, setTrackProgress] = useState(0);


  const modalHandler = () => {
    if (trackProgress > 13) {
      setTrackProgressImage(RainbowTrack);
      return setModal(false);
    }
    setTrackProgress(trackProgress + 1);
    setModal(true);
  }
  
  const handleTrivia = (selected, correct) => {

    const verifyAnswer = (input) => {
      if (input === correct) {
        // setCurrentPoints(currentPoints + 1);
        console.log("correct")
      } else {
        console.log("incorrect")
      }
    }
    setModal(false);
    verifyAnswer(selected);
    setTrackProgressImage(`/src/assets/images/SVG/track-${trackProgress}.svg`);
  }

  return {
    modal,
    trackProgress,
    trackProgressImage,
    modalHandler,
    handleTrivia
  }
}