import { ForecastDay } from "../types/weather";
import { formatForecastDay } from "../utils/date";

interface ForecastCardProps {
  forecast: ForecastDay;
}

const ForecastCard = ({ forecast }: ForecastCardProps) => (
  <article className="group rounded-3xl bg-white/80 p-5 text-center shadow-lg shadow-slate-900/10 ring-1 ring-white/70 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white">
    <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
      {formatForecastDay(forecast.date)}
    </p>
    <img
      src={forecast.icon}
      alt={`${forecast.weather} icon`}
      className="mx-auto my-3 h-20 w-20 transition duration-300 group-hover:scale-110"
    />
    <p className="text-sm font-medium text-slate-500">{forecast.weather}</p>
    <div className="mt-4 flex items-center justify-center gap-4">
      <span className="text-lg font-black text-slate-950">{forecast.maxTemp}°</span>
      <span className="text-lg font-bold text-slate-400">{forecast.minTemp}°</span>
    </div>
  </article>
);

export default ForecastCard;
