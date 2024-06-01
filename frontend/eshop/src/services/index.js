import axios from 'axios'

const api = axios.create({
  baseURL: "https://tccpuc.vercel.app/",
  // baseURL: "http://127.0.0.1:3333",
  // baseURL: "http://server.redsis.com.br:5555",
  // baseURL: "http://10.1.1.91:8087",
});

export default api;