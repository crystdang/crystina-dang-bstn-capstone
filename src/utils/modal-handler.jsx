import { useState } from "react";
import { drsZones } from "./mtl-data";

export const useHandleModal = () => {

  const [modal, setModal] = useState(false);
  const [place, setPlace] = useState(20);
  const [currentCircuit,  setCurrentCircuit] = useState("spain");
  const [trackProgressImage, setTrackProgressImage] = useState(`/${currentCircuit}/track-grey.svg`);
  const [trackProgress, setTrackProgress] = useState(-1);
  const [answered, setAnswered] = useState([]);
  const [time, setTime] = useState("0");
  const [trackMax, setTrackMax] = useState(0);

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
      return setModal(false);
    }
    setTrackProgress(trackProgress + 1);
    setModal(true);
  }

  const handleTrivia = (selected, correct) => {

    const verifyAnswer = (input) => {
      if (input === correct && place > 1) {
          if (trackProgress === 1) {
            setPlace(place - 3);
            setAnswered([...answered, "correct, +3"]);
            setTime("+ 3")
            return console.log("Starting");
          }
          if (drsZones.includes(trackProgress)) {
            setPlace(place - 2);
            setAnswered([...answered, "correct, +2"]);
            setTime("+ 2")
            return console.log("DRS Zone");
          }
        setPlace(place - 1);
        setAnswered([...answered, "correct, +1"]);
        setTime("+ 1");
      } else {
        if (trackProgress === 1) {
          console.log("Starting");
        }
        if (drsZones.includes(trackProgress)) {
          console.log("DRS Zone");
        }
        setAnswered([...answered, "incorrect, 0"]);
        setTime("0");
      }
    }

    if (trackProgress > 13) {
      verifyAnswer(selected);
      setTrackProgressImage(`/${currentCircuit}/track-rainbow-all.svg`);
      return setModal(false);
    }
    setModal(false);
    verifyAnswer(selected);
    setTrackProgressImage(`/${currentCircuit}/track-${trackProgress}.svg`);
  }

  return {
    modal,
    place,
    placeSuffix,
    answered,
    time,
    trackProgress,
    trackProgressImage,
    handleModal,
    handleTrivia
  }
}