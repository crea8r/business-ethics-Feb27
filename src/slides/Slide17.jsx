export default function Slide17() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-violet-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/40 border border-violet-700/50 text-violet-300 text-xs font-medium mb-8 uppercase tracking-widest">
          Paradox 1
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
          Dating Apps
        </h2>

        {/* The paradox */}
        <div className="rounded-2xl border border-violet-800/50 bg-violet-950/30 p-7 mb-8">
          <p className="text-slate-300 leading-relaxed text-lg">
            A dating app makes money when you keep using it. You keep using it when you haven't found love.{' '}
            <span className="text-white font-semibold">Therefore: a dating app profits when you DON'T find love.</span>
          </p>
        </div>

        <p className="text-slate-400 text-base mb-8">
          A perfect product destroys itself.
        </p>

        {/* Discussion nudge */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-5">
          <p className="text-slate-300 text-sm font-medium">
            Discussion: Do you think Tinder wants you to find your soulmate?
          </p>
        </div>
      </div>
    </div>
  )
}
