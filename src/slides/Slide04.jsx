export default function Slide04() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-700/50 text-emerald-300 text-xs font-medium mb-8 uppercase tracking-widest">
          SME in detail
        </div>

        {/* Definition */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
          A business that pays you from today's profit
        </h2>

        {/* Characteristics */}
        <div className="space-y-3 mb-8">
          {[
            'Profitable from early on',
            'Owner takes dividend',
            'Grows at a sustainable pace',
            'Success = consistent profit margin',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Examples */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 mb-8">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-3">Examples</div>
          <div className="flex flex-wrap gap-2">
            {['A profitable language school', 'A law firm', 'A restaurant chain'].map((ex) => (
              <span key={ex} className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-sm">
                {ex}
              </span>
            ))}
          </div>
        </div>

        {/* Incentive */}
        <div className="rounded-xl border border-emerald-800/50 bg-emerald-950/30 p-5">
          <div className="text-emerald-400 text-xs uppercase tracking-widest font-medium mb-2">The owner's incentive</div>
          <p className="text-white font-semibold text-lg">Maximize TODAY's profit</p>
        </div>
      </div>
    </div>
  )
}
