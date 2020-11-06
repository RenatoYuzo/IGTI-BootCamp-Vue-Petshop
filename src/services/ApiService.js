import axios from 'axios';

export class ApiService {
  constructor() {
    this.url = 'http://localhost:3000/';
    axios.defaults.headers.post['Accept'] = 'application/json';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  async getAllProducts() {
    return await axios.get(this.url + 'produtos');
  }

  async getAllClients() {
    return await axios.get(this.url + 'clientes');
  }

  async getAllRaces() {
    return await axios.get(this.url + 'racas');
  }

  async getAllServices() {
    return await axios.get(this.url + 'servicos');
  }

  async getProductById(id) {
    return await axios.get(`${this.url}produtos/${id}`);
  }
}
