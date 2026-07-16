import { weatherClient } from "../config/weatherClient";
import { env } from "../config/env";
import { AppError } from "../utils/AppError";
import { CitySuggestion, CurrentWeather, ForecastDay } from "../types/weather.types";

interface OpenWeatherCurrentResponse {
  name: string;
  sys: { country: string };
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind: { speed: number };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
}

interface OpenWeatherForecastResponse {
  list: Array<{
    dt_txt: string;
    main: {
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{
      main: string;
      icon: string;
    }>;
  }>;
}

interface OpenWeatherGeoResponse {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
}

const ensureApiKey = () => {
  if (!env.weatherApiKey) {
    throw new AppError("Weather API key is missing", 500);
  }
};

const iconUrl = (icon: string) => `https://openweathermap.org/img/wn/${icon}@4x.png`;

const roundTemp = (value: number) => Math.round(value);

export const getCurrentWeather = async (city: string): Promise<CurrentWeather> => {
  ensureApiKey();

  const response = await weatherClient.get<OpenWeatherCurrentResponse>("/data/2.5/weather", {
    params: {
      q: city,
      appid: env.weatherApiKey,
      units: "metric"
    }
  });

  const item = response.data.weather[0];

  return {
    city: response.data.name,
    country: response.data.sys.country,
    temperature: roundTemp(response.data.main.temp),
    feelsLike: roundTemp(response.data.main.feels_like),
    humidity: response.data.main.humidity,
    pressure: response.data.main.pressure,
    windSpeed: response.data.wind.speed,
    weather: item.main,
    weatherDescription: item.description,
    icon: iconUrl(item.icon)
  };
};

export const getForecast = async (city: string): Promise<ForecastDay[]> => {
  ensureApiKey();

  const response = await weatherClient.get<OpenWeatherForecastResponse>("/data/2.5/forecast", {
    params: {
      q: city,
      appid: env.weatherApiKey,
      units: "metric"
    }
  });

  const grouped = new Map<string, OpenWeatherForecastResponse["list"]>();

  response.data.list.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];
    const items = grouped.get(date) || [];
    grouped.set(date, [...items, entry]);
  });

  return Array.from(grouped.entries())
    .slice(0, 5)
    .map(([date, entries]) => {
      const tempsMin = entries.map((entry) => entry.main.temp_min);
      const tempsMax = entries.map((entry) => entry.main.temp_max);
      const middayEntry =
        entries.find((entry) => entry.dt_txt.includes("12:00:00")) ||
        entries[Math.floor(entries.length / 2)];

      return {
        date,
        minTemp: roundTemp(Math.min(...tempsMin)),
        maxTemp: roundTemp(Math.max(...tempsMax)),
        weather: middayEntry.weather[0].main,
        icon: iconUrl(middayEntry.weather[0].icon)
      };
    });
};

export const searchCities = async (city: string): Promise<CitySuggestion[]> => {
  ensureApiKey();

  const response = await weatherClient.get<OpenWeatherGeoResponse[]>("/geo/1.0/direct", {
    params: {
      q: city,
      limit: 5,
      appid: env.weatherApiKey
    }
  });

  return response.data.map((item) => ({
    name: item.name,
    country: item.country,
    state: item.state,
    lat: item.lat,
    lon: item.lon
  }));
};
