export default function Slide18() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="relative z-10 max-w-2xl w-full">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-8">
          Paradox 1 — What this means
        </p>

        <h3 className="text-2xl font-bold text-white mb-6">
          So what does a dating app optimize for?
        </h3>

        {/* List */}
        <div className="space-y-3 mb-8">
          {[
            { have: 'More swipes', not: 'more matches' },
            { have: 'Engagement', not: 'outcomes' },
            { have: 'Keeping you slightly hopeful', not: 'satisfied' },
          ].map(({ have, not }) => (
            <div key={have} className="flex items-start gap-3 text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0 mt-2" />
              <span>
                <span className="text-white font-semibold">{have}</span>
                {', not '}
                <span className="text-slate-500">{not}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Insight */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 mb-8">
          <p className="text-slate-300 leading-relaxed">
            The model isn't evil. But the incentive structure shapes{' '}
            <span className="text-white font-semibold">every product decision.</span>
          </p>
        </div>

        {/* Bridge */}
        <div className="rounded-xl border border-amber-800/40 bg-amber-950/20 p-4">
          <p className="text-amber-300 font-medium text-sm">
            Now let's make it personal.
          </p>
        </div>
      </div>
    </div>
  )
}
