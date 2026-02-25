export default function Slide22() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="relative z-10 max-w-2xl w-full">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-8">
          Paradox 3 — The consequence
        </p>

        {/* Facts */}
        <div className="space-y-4 mb-10">
          <p className="text-slate-300 text-lg leading-relaxed">
            Hundreds of thousands died. Lawsuits are still being filed today.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            The executives who made those early decisions are long dead.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            But the seed they planted kept growing.
          </p>
        </div>

        {/* Big question */}
        <div className="rounded-2xl border border-rose-700/50 bg-rose-950/30 p-7 mb-8">
          <p className="text-white text-xl font-bold leading-relaxed mb-4">
            At what point does a business decision become a crime against humanity?
          </p>
          <p className="text-slate-400 leading-relaxed">
            And more importantly: at what point did they know — and choose to continue?
          </p>
        </div>

        {/* Reference */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <p className="text-slate-500 text-sm">
            Reference: <span className="text-slate-300">Veritasium — "The Most Difficult Problem in the World"</span> (for further reading)
          </p>
        </div>
      </div>
    </div>
  )
}
