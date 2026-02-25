const timeline = [
  { year: '1930s', text: 'Internal studies begin showing lung disease in workers' },
  { year: '1940s–50s', text: 'Executives receive and suppress internal reports on cancer risk' },
  { year: '1960s', text: 'Independent research published. Companies fund opposition research' },
  { year: '1970s–80s', text: 'Regulation begins. Industry fights it at every step' },
  { year: '2000s+', text: 'Hundreds of thousands dead or dying. Litigation continues globally' },
]

export default function Slide21() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-rose-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-900/40 border border-rose-700/50 text-rose-300 text-xs font-medium mb-8 uppercase tracking-widest">
          Paradox 3
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          When the Seed Grows
        </h2>

        {/* Context */}
        <p className="text-slate-400 leading-relaxed mb-6">
          Asbestos was a miracle material. Fireproof. Cheap. Everywhere. By the 1930s, companies had internal documents proving it caused fatal lung disease. They continued selling for 40+ more years.
        </p>

        {/* Timeline */}
        <div className="space-y-2 mb-6">
          {timeline.map(({ year, text }) => (
            <div key={year} className="flex gap-4 text-sm">
              <span className="text-rose-400 font-mono shrink-0 w-16">{year}</span>
              <span className="text-slate-400">{text}</span>
            </div>
          ))}
        </div>

        {/* Key insight */}
        <div className="rounded-xl border border-rose-800/40 bg-rose-950/20 p-4">
          <p className="text-rose-300 text-sm leading-relaxed">
            Not just evil individuals — the business model: asbestos revenue funded everything. Admitting the risk meant destroying the company.{' '}
            <strong className="text-white">The financial model made honesty economically irrational.</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
