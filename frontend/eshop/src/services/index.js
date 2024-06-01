import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: "https://tccpuc.vercel.app/",
  // baseURL: "http://127.0.0.1:3333",
  // baseURL: "http://server.redsis.com.br:5555",
  // baseURL: "http://10.1.1.91:8087",
});

export default api;