import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "https://scip-api.herokuapp.com/api/perfis",
});

export default api;