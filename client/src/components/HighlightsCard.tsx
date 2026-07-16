import { IconType } from "react-icons";

interface HighlightsCardProps {
  title: string;
  value: string;
  icon: IconType;
  accent: string;
}

const HighlightsCard = ({ title, value, icon: Icon, accent }: HighlightsCardProps) => (
  <article className="rounded-3xl bg-white/80 p-5 shadow-lg shadow-slate-900/10 ring-1 ring-white/70 backdrop-blur transition hover:-translate-y-1 hover:bg-white">
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-sm font-semibold text-slate-500">{title}</p>
        <p className="mt-2 text-3xl font-black text-slate-900">{value}</p>
      </div>
      <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accent}`}>
        <Icon className="h-7 w-7" aria-hidden="true" />
      </span>
    </div>
  </article>
);

export default HighlightsCard;
