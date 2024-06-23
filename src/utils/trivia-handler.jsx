import FormulaZeroApi from "./fzero-api";
import { useState } from "react";

export const useTrivia = () => {
  const formulaZeroApi = new FormulaZeroApi();
  const [trivia, setTrivia] = useState([]);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [allPossibleAnswers, setAllPossibleAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [usedTrivia, setUsedTrivia] = useState([]);

  // combines correct and incorrect answer into single array
  const combineAllAnswers = async (incorrect, correct) => {
    const allAnswers = [];
    incorrect.map((answer) => {
      allAnswers.push(answer);
    })
    allAnswers.push(correct);
    // randomize order of answers in array
    allAnswers.sort(() => Math.random() - 0.5);
    setAllPossibleAnswers(allAnswers);
  }

  function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchedData = await formulaZeroApi.getAllTrivia();
      //randomize order of trivia in array
      shuffle(fetchedData);
      setTrivia(fetchedData);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error("Error fetching data: ", error);
    }
  };
  
  const fetchTrivia = async (progress) => {
    if (!trivia[progress]) {
      return;
    }
    if (!usedTrivia.includes(trivia[progress].id)) {
      setUsedTrivia([...usedTrivia, trivia[progress].id]);
    }
    setQuestion(trivia[progress].question);
    setCorrectAnswer(trivia[progress].correct_answer);
    const formattedIncorrectAnswers = trivia[progress].incorrect_answers.split(', ');

    await combineAllAnswers(formattedIncorrectAnswers, trivia[progress].correct_answer);
  }


  return {
    fetchData,
    fetchTrivia,
    trivia,
    correctAnswer,
    loading,
    error,
    question,
    allPossibleAnswers,
    usedTrivia
  }
}