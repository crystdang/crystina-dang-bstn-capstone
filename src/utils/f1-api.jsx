import axios from 'axios';
import { constructors } from '../data/constructors';

export default class FormulaOneApi {
  constructor() {
    this.baseUrl = "https://ergast.com/api/f1";
    this.year = new Date().getFullYear();
  }

  // GET all circuits
  async getAllCircuits() {

    try {
      const response = await axios.get(`${this.baseUrl}/current.json`);
      return response.data.MRData.RaceTable.Races;

    } catch (error) {
      console.error(`Unable to get circuit data: ${error}`);
    }
  }

  async getAllConstructors() {

    try {
      const response = await axios.get(`${this.baseUrl}/${this.year}/constructors.json`);
      return response.data.MRData.ConstructorTable.Constructors;

    } catch (error) {
      console.error(`Unable to get constructors data: ${error}`);
      return constructors;
    }
  }

  async getAllDrivers() {

    try {
      const response = await axios.get(`${this.baseUrl}/${this.year}/drivers.json`);
      return response.data.MRData.DriverTable.Drivers;

    } catch (error) {
      console.error(`Unable to get drivers data: ${error}`);
    }
  }
}
