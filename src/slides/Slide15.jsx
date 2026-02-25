export default function Slide15() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-rose-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-900/40 border border-rose-700/50 text-rose-300 text-xs font-medium mb-8 uppercase tracking-widest">
          Module 3 of 3
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          The Business Model<br />
          <span className="text-rose-400">IS the Ethics</span>
        </h2>

        {/* Conventional view */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 mb-6">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-3">Conventional view</div>
          <p className="text-slate-400">We usually think of business ethics as: Don't lie. Don't pollute. Give to charity.</p>
        </div>

        {/* New thesis */}
        <div className="rounded-2xl border border-rose-700/50 bg-rose-950/30 p-6 mb-6">
          <div className="text-rose-400 text-xs uppercase tracking-widest font-medium mb-3">The real question</div>
          <p className="text-white font-medium leading-relaxed">
            The real ethical question is earlier than that. <strong>It's the model itself.</strong>
          </p>
        </div>

        {/* Four things the model determines */}
        <p className="text-slate-400 text-sm leading-relaxed">
          The business model determines:{' '}
          <span className="text-slate-200">who pays</span>,{' '}
          <span className="text-slate-200">who benefits</span>,{' '}
          <span className="text-slate-200">what incentives are created</span>, and{' '}
          <span className="text-slate-200">what the system optimizes for</span>.
          <strong className="text-white"> That is where ethics lives.</strong>
        </p>
      </div>
    </div>
  )
}
