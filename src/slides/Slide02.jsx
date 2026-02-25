export default function Slide02() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Simple question */}
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-8">What is a business?</p>
        <p className="text-2xl sm:text-3xl text-slate-200 leading-relaxed mb-12">
          A business takes something people need and delivers it in exchange for money.
        </p>

        {/* Three concepts */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { label: 'Jobs created', icon: '👷', color: 'border-slate-700 bg-slate-900/60 text-slate-300' },
            { label: 'Value delivered', icon: '✦', color: 'border-indigo-800/50 bg-indigo-950/30 text-indigo-300' },
            { label: 'Money captured', icon: '◈', color: 'border-emerald-800/50 bg-emerald-950/30 text-emerald-300' },
          ].map(({ label, icon, color }) => (
            <div key={label} className={`rounded-xl border p-5 text-center ${color}`}>
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-sm font-semibold">{label}</div>
            </div>
          ))}
        </div>

        {/* Key insight callout */}
        <div className="rounded-2xl border border-indigo-700/50 bg-indigo-950/30 p-6">
          <p className="text-white text-lg font-medium leading-relaxed">
            Every business does these three things. But{' '}
            <span className="text-indigo-400 font-bold">HOW it captures money</span>{' '}
            changes everything.
          </p>
        </div>
      </div>
    </div>
  )
}
