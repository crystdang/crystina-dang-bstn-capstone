import axios from 'axios';

export default class FormulaZeroeApi {
  constructor() {
    this.baseUrl = import.meta.env.VITE_API_URL;
  }

  // GET all trivia
  async getAllTrivia() {

    try {
      const response = await axios.get(`${this.baseUrl}/trivia`);
      return response.data;

    } catch (error) {
      console.error(`Unable to get trivia data: ${error}`);
    }
  }
}
