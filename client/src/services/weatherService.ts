import { AxiosError } from "axios";
import { weatherApi } from "../api/weatherApi";
import { ApiResponse, CitySuggestion, CurrentWeather, ForecastDay } from "../types/weather";

const getErrorMessage = (error: unknown) => {
  const axiosError = error as AxiosError<{ message?: string }>;
  return axiosError.response?.data?.message || "Unable to load weather data. Please try again.";
};

export const fetchCurrentWeather = async (city: string) => {
  try {
    const response = await weatherApi.get<ApiResponse<CurrentWeather>>("/weather/current", {
      params: { city }
    });
    return response.data.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const fetchForecast = async (city: string) => {
  try {
    const response = await weatherApi.get<ApiResponse<ForecastDay[]>>("/weather/forecast", {
      params: { city }
    });
    return response.data.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

export const fetchCitySuggestions = async (city: string) => {
  try {
    const response = await weatherApi.get<ApiResponse<CitySuggestion[]>>("/weather/search", {
      params: { city }
    });
    return response.data.data;
  } catch {
    return [];
  }
};
