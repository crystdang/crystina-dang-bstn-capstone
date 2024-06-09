import { useState } from "react";
import MtlTrack from '../assets/images/SVG/track-grey.svg';
import RainbowTrack from '../assets/images/SVG/track-rainbow-all.svg';
import { useTrivia } from "./trivia";

export const useModalHandler = () => {

  const [modal, setModal] = useState(false);
  const [place, setPlace] = useState(20);
  const [trackProgressImage, setTrackProgressImage] = useState(MtlTrack);
  const [trackProgress, setTrackProgress] = useState(0);

  const placeSuffix = (input) => {
    if (input === 1) {
      return input + "st";
    } if (input === 2) {
      return input + "nd";
    } if (input === 3) {
      return input + "rd";
    } else {
      return input + "th"
    }
  }

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
      if (input === correct && place > 1) {
        setPlace(place - 1);
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
    place,
    placeSuffix,
    trackProgress,
    trackProgressImage,
    modalHandler,
    handleTrivia
  }
}