import { FiActivity, FiCompass } from "react-icons/fi";
import { WiBarometer, WiHumidity, WiStrongWind, WiThermometer } from "react-icons/wi";
import EmptyState from "../components/EmptyState";
import ErrorMessage from "../components/ErrorMessage";
import ForecastCard from "../components/ForecastCard";
import HighlightsCard from "../components/HighlightsCard";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { useWeather } from "../hooks/useWeather";

const Home = () => {
  const {query, setQuery, current, forecast, suggestions, isLoading, isSearching, error,searchWeather} = useWeather();

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.55),transparent_34%),radial-gradient(circle_at_top_right,rgba(251,146,60,0.38),transparent_32%),linear-gradient(135deg,#0f172a_0%,#155e75_48%,#4d7c0f_100%)]">
      <div className="absolute inset-x-0 top-0 h-64 bg-white/10 blur-3xl" aria-hidden="true" />
      <Navbar />

      <main className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 pb-8 sm:px-6 lg:px-8">
        <section className="pt-6 text-center text-white sm:pt-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-teal-100/85">
            Modern Weather Application
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">
            Check weather conditions with clarity and style.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            Search a city to view current temperature, useful highlights, and a smooth 5-day forecast.
          </p>
        </section>

        <SearchBar
          query={query}
          onQueryChange={setQuery}
          onSearch={searchWeather}
          suggestions={suggestions}
          isLoading={isLoading}
          isSearching={isSearching}
        />

        {error && <ErrorMessage message={error} />}
        {isLoading && <Loader />}
        {!isLoading && !current && !error && <EmptyState />}

        {!isLoading && current && (
          <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <WeatherCard weather={current} />

            <section className="grid gap-4" aria-label="Today's highlights">
              <HighlightsCard
                title="Feels Like"
                value={`${current.feelsLike}°C`}
                icon={WiThermometer}
                accent="bg-amber-100 text-amber-700"
              />
              <HighlightsCard
                title="Humidity"
                value={`${current.humidity}%`}
                icon={WiHumidity}
                accent="bg-teal-100 text-teal-700"
              />
              <HighlightsCard
                title="Pressure"
                value={`${current.pressure} hPa`}
                icon={WiBarometer}
                accent="bg-lime-100 text-lime-700"
              />
              <HighlightsCard
                title="Wind"
                value={`${current.windSpeed} m/s`}
                icon={WiStrongWind}
                accent="bg-sky-100 text-sky-700"
              />
            </section>
          </div>
        )}

        {!isLoading && current && forecast.length > 0 && (
          <section className="animate-fadeIn" aria-labelledby="forecast-title">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-white">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/70">
                  <FiActivity aria-hidden="true" />
                  Outlook
                </p>
                <h2 id="forecast-title" className="mt-2 text-2xl font-black">
                  5-Day Forecast
                </h2>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold ring-1 ring-white/25 backdrop-blur">
                <FiCompass aria-hidden="true" />
                {current.city}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {forecast.map((item) => (
                <ForecastCard key={item.date} forecast={item} />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Home;
