import { WiDaySunnyOvercast } from "react-icons/wi";

const EmptyState = () => (
  <section className="animate-fadeIn rounded-[2rem] bg-white/20 p-8 text-center text-white shadow-glass ring-1 ring-white/30 backdrop-blur-xl">
    <WiDaySunnyOvercast className="mx-auto h-24 w-24 animate-float" aria-hidden="true" />
    <h1 className="mt-4 text-3xl font-black">Search for any city</h1>
    <p className="mx-auto mt-3 max-w-xl text-white/75">
      Get current conditions, today&apos;s highlights, and a clean 5-day forecast in one place.
    </p>
  </section>
);

export default EmptyState;
