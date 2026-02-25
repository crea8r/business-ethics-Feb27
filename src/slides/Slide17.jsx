const stats = [
  { value: '360M', label: 'global users', sub: '2024' },
  { value: '~7%', label: 'pay for premium', sub: '93% are free' },
  { value: '80 min', label: 'per day on app', sub: 'avg active user' },
  { value: '$10.3B', label: 'global revenue', sub: '2024 market' },
  { value: '1 in 40', label: 'likes → match', sub: 'typical male user' },
]

export default function Slide17() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-violet-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/40 border border-violet-700/50 text-violet-300 text-xs font-medium mb-6 uppercase tracking-widest">
          Paradox 1
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Dating Apps
        </h2>

        {/* The paradox */}
        <div className="rounded-2xl border border-violet-800/50 bg-violet-950/30 p-6 mb-6">
          <p className="text-slate-300 leading-relaxed text-lg">
            A dating app makes money when you keep using it. You keep using it when you haven't found love.{' '}
            <span className="text-white font-semibold">Therefore: a dating app profits when you DON'T find love.</span>
          </p>
          <p className="text-slate-500 text-sm mt-3">
            A perfect product destroys itself.
          </p>
        </div>

        {/* Industry stats — real numbers, no company names */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 mb-5">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-3">Industry — 2024 data</div>
          <div className="grid grid-cols-5 gap-2">
            {stats.map(({ value, label, sub }) => (
              <div key={label} className="text-center">
                <div className="text-violet-300 font-bold text-base font-mono">{value}</div>
                <div className="text-slate-400 text-xs leading-tight mt-0.5">{label}</div>
                <div className="text-slate-600 text-xs">{sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Discussion nudge */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
          <p className="text-slate-300 text-sm font-medium">
            If 93% of users are free — who is the real customer? And what does the app actually sell?
          </p>
        </div>
      </div>
    </div>
  )
}
