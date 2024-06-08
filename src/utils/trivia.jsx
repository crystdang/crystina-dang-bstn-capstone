import FormulaZeroApi from "./fZeroApi";
import { useState } from "react";

export const useTrivia = () => {
  const formulaZeroApi = new FormulaZeroApi();
  const [trivia, setTrivia] = useState([]);
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [allPossibleAnswers, setAllPossibleAnswers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //combines correct and incorrect answer into single array
  const combineAllAnswers = async (incorrect, correct) => {
    const allAnswers = [];
    for (let i = 0; i < incorrect.length; i++) {
      allAnswers.push(incorrect[i]);
    }
    allAnswers.push(correct);
    //Randomize order of answers in array
    allAnswers.sort(() => Math.random() - 0.5);
    setAllPossibleAnswers(allAnswers);
  }
  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchedData = await formulaZeroApi.getAllTrivia();
      setTrivia(fetchedData[0]);
      // trivia.map((each) => {
        setQuestion(fetchedData[0].question);
        setCorrectAnswer(fetchedData[0].correct_answer);
        const formattedIncorrectAnswers = fetchedData[0].incorrect_answers.split(', ');

        await combineAllAnswers(formattedIncorrectAnswers, fetchedData[0].correct_answer);
      // })
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error("Error fetching data: ", error);
    }
  };

  return {
    fetchData,
    loading,
    error,
    question,
    allPossibleAnswers,
    correctAnswer,
    incorrectAnswers
  }
}