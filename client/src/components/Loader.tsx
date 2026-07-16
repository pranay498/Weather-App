const Loader = () => (
  <div className="animate-fadeIn rounded-[2rem] bg-white/20 p-6 shadow-glass ring-1 ring-white/30 backdrop-blur-xl sm:p-8">
    <div className="grid gap-5 md:grid-cols-[1.4fr_1fr]">
      <div>
        <div className="h-4 w-44 animate-pulse rounded-full bg-white/30" />
        <div className="mt-5 h-12 w-64 max-w-full animate-pulse rounded-2xl bg-white/30" />
        <div className="mt-4 h-5 w-40 animate-pulse rounded-full bg-white/25" />
      </div>
      <div className="flex items-center justify-end gap-5">
        <div className="h-24 w-24 animate-pulse rounded-full bg-white/25" />
        <div className="h-20 w-32 animate-pulse rounded-3xl bg-white/25" />
      </div>
    </div>
    <div className="mt-8 grid gap-3 sm:grid-cols-3">
      {[1, 2, 3].map((item) => (
        <div key={item} className="h-24 animate-pulse rounded-3xl bg-white/20" />
      ))}
    </div>
  </div>
);

export default Loader;
