export default function Slide01() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        {/* Big title */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white mb-6 leading-none tracking-tight">
          Business<br />
          <span className="text-indigo-400">Ethics</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 mb-12 leading-relaxed">
          A 2.5-hour session on startups, money, and the choices that define you
        </p>

        {/* Module pills */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {[
            { label: 'Module 1', sub: 'Startup vs SME', color: 'border-indigo-700/60 bg-indigo-950/40 text-indigo-300' },
            { label: 'Module 2', sub: 'Financial Projection', color: 'border-violet-700/60 bg-violet-950/40 text-violet-300' },
            { label: 'Module 3', sub: 'Model as Ethics', color: 'border-rose-700/60 bg-rose-950/40 text-rose-300' },
          ].map(({ label, sub, color }) => (
            <div key={label} className={`px-5 py-3 rounded-full border ${color} text-sm font-medium`}>
              <span className="font-bold">{label}</span>
              <span className="opacity-70 ml-1.5">&mdash; {sub}</span>
            </div>
          ))}
        </div>

        {/* Instructor note */}
        <p className="text-slate-600 text-sm">
          Pre-class reading available on this site
        </p>
      </div>
    </div>
  )
}
