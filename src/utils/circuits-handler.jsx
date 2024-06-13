import { useState } from 'react';
import FormulaOneApi from './f1-api';
import { useDateConverter } from './date-converter';

export const useHandleCircuits = () => {

  const {
    findNextDate,
    nextRace
  } = useDateConverter();

  // const [circuits, setCircuits] = useState([]);
  const [loading, setLoading] = useState(false);

  const formulaOneApi = new FormulaOneApi();

  const fetchCircuits = async () => {
    setLoading(true);
    try {
      const response = await formulaOneApi.getAllCircuits();
      findNextDate(response);
      setLoading(false);

    } catch {
      console.error("Error fetching circuit data");
      setLoading(false);
    }};

    return {
      nextRace,
      fetchCircuits,
      loading
    }
}