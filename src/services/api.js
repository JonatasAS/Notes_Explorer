const axios = require("axios");

export const api = axios.create({
  baseURL: 'https://localhost:3333'
});