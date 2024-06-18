import FormulaOneApi from "./f1-api";
import { useState } from "react";

export const useLeaderBoardHandler = () => {

  const [drivers, setDrivers] = useState([]);
  const formulaOneApi = new FormulaOneApi();

  const fetchDrivers = async () => {
    const response = formulaOneApi.getAllDrivers();
    setDrivers(response);
  }
  return {
    fetchDrivers,
    drivers
  }
}