import FormulaOneApi from "./f1-api";
import { useState } from "react";

export const useHandleLanding = () => {

  const [loading, setLoading] = useState(false);
  const [formation, setFormation] = useState(false);
  const [constructors, setConstructors] = useState([]);
  const [team, setTeam] = useState("");
  const [driver, setDriver] = useState("");
  const [lights, setLights] = useState(false);
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

  const handleConstructor = (e) => {
    setTeam(e.target.value.toUpperCase());
  }

  const isFormValid = () => {
    if (!driver || !team) {
      return false;
    } return true;
  }
  
  const handleLandingSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (isFormValid()) {
    setLoading(false);
    setFormation(true);
    setLights(true);
  }
  }

  return {
    loading,
    driver,
    team,
    constructors,
    formation,
    lights,
    cleanConstructor,
    fetchConstructors,
    handleConstructor,
    handleDriver,
    handleLandingSubmit
  }
}