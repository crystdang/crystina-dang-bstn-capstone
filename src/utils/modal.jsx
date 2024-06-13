import { useState } from "react";
import MtlTrack from '../assets/images/SVG/track-grey.svg';
import RainbowTrack from '../assets/images/SVG/track-rainbow-all.svg';
// import { mtlData } from "./mtl-data";

export const useHandleModal = () => {

  const drsZones = [7, 12, 14];

  const [modal, setModal] = useState(false);
  const [place, setPlace] = useState(20);
  const [trackProgressImage, setTrackProgressImage] = useState(MtlTrack);
  const [trackProgress, setTrackProgress] = useState(0);
  const [answered, setAnswered] = useState([]);

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

  const handleModal = () => {
    if (trackProgress > 13) {
      setTrackProgressImage(RainbowTrack);
      console.log(trackProgress);
      return setModal(false);
    }
    setTrackProgress(trackProgress + 1);
    setModal(true);
  }
  
  // const storeAnswered = (input) => {
    
  // }

  const handleTrivia = (selected, correct) => {

    const verifyAnswer = (input) => {
      if (input === correct && place > 1) {
          if (drsZones.includes(trackProgress) || trackProgress === 1) {
            setPlace(place - 2);
            setAnswered([...answered, "correct"]);
            return console.log("DRS Zone");
          }
        setPlace(place - 1);
        setAnswered([...answered, "correct"]);
        console.log(answered);
      } else {
        setAnswered([...answered, "incorrect"]);
        console.log(answered);
      }
    }

    if (trackProgress > 13) {
      verifyAnswer(selected);
      setTrackProgressImage(RainbowTrack);
      return setModal(false);
    }
    setModal(false);
    verifyAnswer(selected);
    setTrackProgressImage(`/track-${trackProgress}.svg`);
  }

  return {
    modal,
    place,
    placeSuffix,
    trackProgress,
    trackProgressImage,
    handleModal,
    handleTrivia
  }
}