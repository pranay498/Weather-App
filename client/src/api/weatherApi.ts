import axios from "axios";

export const weatherApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:9002/api/v1",
  timeout: 10000
});
