import { WiHumidity, WiStrongWind, WiThermometer } from "react-icons/wi";
import { CurrentWeather } from "../types/weather";
import { formatLongDate, formatTime } from "../utils/date";

interface WeatherCardProps {
  weather: CurrentWeather;
}

const WeatherCard = ({ weather }: WeatherCardProps) => (
  <section className="animate-fadeIn rounded-[2rem] bg-white/20 p-6 text-white shadow-glass ring-1 ring-white/30 backdrop-blur-xl sm:p-8">
    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
          {formatLongDate()} · {formatTime()}
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          {weather.city}, {weather.country}
        </h1>
        <p className="mt-3 text-lg capitalize text-white/80">{weather.weatherDescription}</p>
      </div>

      <div className="flex items-center justify-between gap-4 md:justify-end">
        <img
          src={weather.icon}
          alt={`${weather.weather} icon`}
          className="h-28 w-28 animate-float drop-shadow-2xl sm:h-36 sm:w-36"
        />
        <div className="text-right">
          <p className="text-7xl font-black leading-none sm:text-8xl">{weather.temperature}°</p>
          <p className="mt-2 text-white/75">Celsius</p>
        </div>
      </div>
    </div>

    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      <div className="flex items-center gap-3 rounded-3xl bg-white/15 p-4 ring-1 ring-white/20">
        <WiThermometer className="h-9 w-9" aria-hidden="true" />
        <div>
          <p className="text-sm text-white/70">Feels Like</p>
          <p className="text-xl font-bold">{weather.feelsLike}°C</p>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-3xl bg-white/15 p-4 ring-1 ring-white/20">
        <WiHumidity className="h-9 w-9" aria-hidden="true" />
        <div>
          <p className="text-sm text-white/70">Humidity</p>
          <p className="text-xl font-bold">{weather.humidity}%</p>
        </div>
      </div>
      <div className="flex items-center gap-3 rounded-3xl bg-white/15 p-4 ring-1 ring-white/20">
        <WiStrongWind className="h-9 w-9" aria-hidden="true" />
        <div>
          <p className="text-sm text-white/70">Wind Speed</p>
          <p className="text-xl font-bold">{weather.windSpeed} m/s</p>
        </div>
      </div>
    </div>
  </section>
);

export default WeatherCard;
