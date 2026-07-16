export interface CurrentWeather {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  weather: string;
  weatherDescription: string;
  icon: string;
}

export interface ForecastDay {
  date: string;
  minTemp: number;
  maxTemp: number;
  weather: string;
  icon: string;
}

export interface CitySuggestion {
  name: string;
  country: string;
  state?: string;
  lat: number;
  lon: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}
