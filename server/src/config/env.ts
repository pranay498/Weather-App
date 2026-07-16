import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.PORT) || 5000,
  weatherApiKey: process.env.WEATHER_API_KEY || ""
};
