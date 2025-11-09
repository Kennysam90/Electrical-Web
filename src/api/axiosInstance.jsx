
import axios from "axios";
import API_BASE_URL from "../config/apiConfig";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


api.interceptors.request.use((config) => {
  console.log("API Request:", config.url);
  return config;
});

export default api;
