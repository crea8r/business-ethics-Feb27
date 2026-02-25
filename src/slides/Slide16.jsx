export default function Slide16() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="relative z-10 max-w-2xl w-full">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-8">
          Business Model Paradoxes
        </p>

        {/* Definition */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-6 mb-8">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-3">Definition</div>
          <p className="text-slate-200 leading-relaxed">
            A paradox exists when the owner's financial interest and the customer's interest{' '}
            <span className="text-white font-semibold">structurally conflict.</span>
          </p>
        </div>

        <p className="text-slate-400 text-base mb-8 leading-relaxed">
          This isn't about bad people. It's about what the model rewards.
        </p>

        {/* Three examples */}
        <div className="space-y-3">
          {[
            { num: '1', title: 'Dating Apps', color: 'text-violet-400 border-violet-800/50 bg-violet-950/20', severity: 'Low severity' },
            { num: '2', title: 'All-You-Can-Eat Education', color: 'text-amber-400 border-amber-800/50 bg-amber-950/20', severity: 'Medium severity' },
            { num: '3', title: 'Asbestos', color: 'text-rose-400 border-rose-800/50 bg-rose-950/20', severity: 'High severity' },
          ].map(({ num, title, color, severity }) => (
            <div key={num} className={`rounded-xl border p-4 flex items-center gap-4 ${color}`}>
              <div className="text-3xl font-black opacity-60">{num}</div>
              <div>
                <div className="text-white font-semibold">{title}</div>
                <div className="text-xs opacity-60 mt-0.5">{severity}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-slate-600 text-sm mt-6">Each more serious than the last.</p>
      </div>
    </div>
  )
}
