import FormulaOneApi from "./f1Api";
import { useState } from "react";

export const useHandleLanding = () => {

  const [loading, setLoading] = useState(false);
  const [formation, setFormation] = useState(false);
  const [constructors, setConstructors] = useState([]);
  const [team, setTeam] = useState("");
  const [driver, setDriver] = useState("");
  const formulaOneApi = new FormulaOneApi();

  const fetchConstructors = async () => {
    setLoading(true);
    try {
      const response = await formulaOneApi.getAllConstructors();
      setConstructors(response);
      setLoading(false);

    } catch {
      console.error("Error fetching circuit data");
      setLoading(false);
    }};

  const cleanConstructor = (input) => {
    const cleaned = input.replace(' F1 Team', '');
    return cleaned;
  }
  const handleDriver = (e) => {
    setDriver(e.target.value);
  }

  const handleLandingSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setDriver(e.target.name.value);
    setTeam(e.target.constructor.value.toUpperCase());
    setFormation(true);
    setLoading(false);

  }

  return {
    loading,
    driver,
    team,
    constructors,
    formation,
    cleanConstructor,
    fetchConstructors,
    handleDriver,
    handleLandingSubmit
  }
}