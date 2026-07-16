import { useCallback, useEffect, useState } from "react";
import { CitySuggestion, CurrentWeather, ForecastDay } from "../types/weather";
import { fetchCitySuggestions, fetchCurrentWeather, fetchForecast } from "../services/weatherService";

export const useWeather = () => {
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState<CurrentWeather | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = useCallback(async (cityName: string) => {
    const city = cityName.trim();

    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setIsLoading(true);
    setError("");
    setSuggestions([]);

    try {
      const [currentData, forecastData] = await Promise.all([
        fetchCurrentWeather(city),
        fetchForecast(city)
      ]);

      setCurrent(currentData);
      setForecast(forecastData);
      setQuery(currentData.city);
    } catch (caughtError) {
      setCurrent(null);
      setForecast([]);
      setError(caughtError instanceof Error ? caughtError.message : "City not found.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const city = query.trim();

    if (city.length < 2 || isLoading) {
      setSuggestions([]);
      return;
    }

    const timer = window.setTimeout(async () => {
      setIsSearching(true);
      const results = await fetchCitySuggestions(city);
      setSuggestions(results);
      setIsSearching(false);
    }, 350);

    return () => window.clearTimeout(timer);
  }, [query, isLoading]);

  return {
    query,
    setQuery,
    current,
    forecast,
    suggestions,
    isLoading,
    isSearching,
    error,
    searchWeather
  };
};
