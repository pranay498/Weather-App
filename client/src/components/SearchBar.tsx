import { FormEvent } from "react";
import { FiLoader, FiMapPin, FiSearch } from "react-icons/fi";
import { CitySuggestion } from "../types/weather";

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  onSearch: (city: string) => void;
  suggestions: CitySuggestion[];
  isLoading: boolean;
  isSearching: boolean;
}

const SearchBar = ({
  query,
  onQueryChange,
  onSearch,
  suggestions,
  isLoading,
  isSearching
}: SearchBarProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="relative z-20 mx-auto w-full max-w-3xl">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 rounded-[2rem] bg-white/85 p-2 shadow-glass ring-1 ring-white/70 backdrop-blur-xl"
      >
        <FiSearch className="ml-4 h-5 w-5 shrink-0 text-slate-500" aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search city, for example Delhi"
          aria-label="Search city"
          className="min-w-0 flex-1 bg-transparent px-2 py-4 text-base font-semibold text-slate-800 outline-none placeholder:text-slate-400"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex h-12 min-w-28 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-bold text-white shadow-lg shadow-slate-950/25 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-teal-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isLoading ? <FiLoader className="h-4 w-4 animate-spin" aria-hidden="true" /> : <FiSearch aria-hidden="true" />}
          Search
        </button>
      </form>

      {(suggestions.length > 0 || isSearching) && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-3xl bg-white/90 p-2 shadow-glass ring-1 ring-white/70 backdrop-blur-xl">
          {isSearching ? (
            <div className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500">
              <FiLoader className="h-4 w-4 animate-spin" aria-hidden="true" />
              Finding matching cities
            </div>
          ) : (
            suggestions.map((city) => {
              const label = [city.name, city.state, city.country].filter(Boolean).join(", ");
              const searchValue = [city.name, city.country].filter(Boolean).join(",");
              return (
                <button
                  key={`${city.name}-${city.lat}-${city.lon}`}
                  type="button"
                  onClick={() => onSearch(searchValue)}
                  className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:bg-slate-100 focus:bg-slate-100 focus:outline-none"
                >
                  <FiMapPin className="h-5 w-5 text-teal-600" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-slate-800">{city.name}</span>
                    <span className="block truncate text-sm text-slate-500">
                      {[city.state, city.country].filter(Boolean).join(", ")}
                    </span>
                  </span>
                </button>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
