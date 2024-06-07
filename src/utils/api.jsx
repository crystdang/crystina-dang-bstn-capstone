import axios from 'axios';

export default class FormulaOneApi {
  constructor() {
    this.baseUrl = "http://ergast.com/api/f1";
    this.year = new Date().getFullYear();
  }

  // GET all warehouses
  async getAllCircuits() {

    try {
      const response = await axios.get(`${this.baseUrl}/${this.year}/circuits`);
      const data = response.data;
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/xml");
      return doc.getElementsByTagName("CircuitName")[0].childNodes[0].nodeValue;
    } catch (error) {
      console.error(`Unable to get circuit data: ${error}`);
    }
  }
}
