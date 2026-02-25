const patterns = [
  {
    label: 'Dating apps',
    optimizes: 'engagement',
    not: 'your wellbeing',
    color: 'text-violet-400',
  },
  {
    label: 'Education buffet',
    optimizes: 'renewal',
    not: 'your learning',
    color: 'text-amber-400',
  },
  {
    label: 'Asbestos',
    optimizes: 'revenue',
    not: 'your life',
    color: 'text-rose-400',
  },
]

export default function Slide23() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="relative z-10 max-w-2xl w-full">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-8">
          What These Three Have In Common
        </p>

        {/* Pattern table */}
        <div className="rounded-xl border border-slate-800 overflow-hidden mb-8">
          <div className="divide-y divide-slate-800">
            {patterns.map(({ label, optimizes, not, color }) => (
              <div key={label} className="flex items-center gap-6 px-6 py-4">
                <div className={`font-semibold text-sm w-36 shrink-0 ${color}`}>{label}</div>
                <div className="text-slate-400 text-sm flex-1">
                  model optimizes for{' '}
                  <span className="text-white font-medium">{optimizes}</span>
                  {' → not your '}
                  <span className="text-slate-500">{not}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Synthesis */}
        <div className="space-y-4">
          <p className="text-slate-300 text-lg leading-relaxed">
            In every case: the model was built first. The harm followed.
          </p>
          <div className="rounded-2xl border border-indigo-700/50 bg-indigo-950/30 p-6">
            <p className="text-white font-semibold text-lg">
              The ethical question was always: what should this model optimize for?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
