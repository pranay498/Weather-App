import { Request, Response } from "express";
import { getCurrentWeather, getForecast, searchCities } from "../services/weather.service";
import { AppError } from "../utils/AppError";

const getCityFromQuery = (req: Request) => {
  const city = String(req.query.city || "").trim();

  if (!city) {
    throw new AppError("City is required", 400);
  }

  return city;
};

export const currentWeather = async (req: Request, res: Response) => {
  const city = getCityFromQuery(req);
  const data = await getCurrentWeather(city);

  res.json({ success: true, data });
};

export const forecastWeather = async (req: Request, res: Response) => {
  const city = getCityFromQuery(req);
  const data = await getForecast(city);

  res.json({ success: true, data });
};

export const citySearch = async (req: Request, res: Response) => {
  const city = getCityFromQuery(req);
  const data = await searchCities(city);

  res.json({ success: true, data });
};
