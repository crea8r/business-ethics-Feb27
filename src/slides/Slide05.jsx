export default function Slide05() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/40 border border-indigo-700/50 text-indigo-300 text-xs font-medium mb-8 uppercase tracking-widest">
          Startup in detail
        </div>

        {/* Definition */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          A business designed to be sold
        </h2>

        {/* Characteristics */}
        <div className="space-y-3 mb-8">
          {[
            'Burns cash to grow fast',
            'Investors fund the burn',
            'Success = a big exit event',
            'Scale matters more than profit',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Incentive */}
        <div className="rounded-xl border border-indigo-800/50 bg-indigo-950/30 p-5 mb-6">
          <div className="text-indigo-400 text-xs uppercase tracking-widest font-medium mb-2">The founder's incentive</div>
          <p className="text-white font-semibold text-lg">Maximize TOMORROW's valuation</p>
        </div>

        {/* Critical insight */}
        <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-6">
          <p className="text-slate-200 text-base leading-relaxed italic">
            "You are not building a business. You are building an asset someone else will want to buy."
          </p>
        </div>
      </div>
    </div>
  )
}
