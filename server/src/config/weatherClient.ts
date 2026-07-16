import axios from "axios";

export const weatherClient = axios.create({
  baseURL: "https://api.openweathermap.org",
  timeout: 10000
});
