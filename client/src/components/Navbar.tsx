import { WiDayCloudy } from "react-icons/wi";

const Navbar = () => (
  <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
    <a href="/" className="flex items-center gap-3 text-white" aria-label="Weather application home">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/20 shadow-glass ring-1 ring-white/30 backdrop-blur">
        <WiDayCloudy className="h-9 w-9" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-lg font-bold leading-tight">Weatherly</span>
        <span className="block text-sm text-white/75">Live city forecast</span>
      </span>
    </a>
    <span className="hidden rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white/80 ring-1 ring-white/25 backdrop-blur sm:inline-flex">
      Simple Weather Dashboard
    </span>
  </header>
);

export default Navbar;
