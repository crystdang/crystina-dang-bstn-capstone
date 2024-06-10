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

  //combines correct and incorrect answer into single array
  const combineAllAnswers = async (incorrect, correct) => {
    const allAnswers = [];
    incorrect.map((answer) => {
      allAnswers.push(answer);
    })
    allAnswers.push(correct);
    //Randomize order of answers in array
    allAnswers.sort(() => Math.random() - 0.5);
    setAllPossibleAnswers(allAnswers);
  }
  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchedData = await formulaZeroApi.getAllTrivia();
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
    setQuestion(trivia[progress].question);
    setCorrectAnswer(trivia[progress].correct_answer);
    const formattedIncorrectAnswers = trivia[progress].incorrect_answers.split(', ');

    await combineAllAnswers(formattedIncorrectAnswers, trivia[progress].correct_answer);
  }


  return {
    fetchData,
    fetchTrivia,
    correctAnswer,
    loading,
    error,
    question,
    allPossibleAnswers,
  }
}