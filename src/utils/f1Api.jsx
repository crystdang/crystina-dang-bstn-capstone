import axios from 'axios';

export default class FormulaOneApi {
  constructor() {
    this.baseUrl = "http://ergast.com/api/f1";
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
}
