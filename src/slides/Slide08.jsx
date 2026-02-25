export default function Slide08() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/40 border border-violet-700/50 text-violet-300 text-xs font-medium mb-8 uppercase tracking-widest">
          Module 2 of 3
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          The Financial Projection
        </h2>
        <p className="text-xl text-slate-400 mb-10">
          How to make the future concrete
        </p>

        {/* Key idea */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 mb-8">
          <p className="text-slate-300 leading-relaxed">
            A projection is not a prediction. It is a set of{' '}
            <span className="text-white font-semibold">assumptions</span>{' '}
            and their{' '}
            <span className="text-white font-semibold">consequences.</span>
          </p>
        </div>

        {/* Three elements */}
        <div className="flex items-center gap-3 flex-wrap">
          {[
            'Operational assumptions',
            'Revenue',
            'Cost',
            'P&L',
          ].map((el, i, arr) => (
            <div key={el} className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium">
                {el}
              </div>
              {i < arr.length - 1 && <div className="text-violet-500">→</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
