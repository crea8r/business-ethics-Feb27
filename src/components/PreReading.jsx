export default function PreReading() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-4 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-900/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-700/50 text-indigo-300 text-xs font-medium mb-8 uppercase tracking-widest">
          Pre-Class Reading
        </div>

        {/* Hero title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Business Ethics:<br />
          <span className="text-indigo-400">The Model You Choose</span><br />
          Is Who You Become
        </h1>

        <p className="text-xl text-slate-400 leading-relaxed mb-12 max-w-2xl">
          This session runs 2–3 hours. Before we meet, read through this overview so you arrive
          with a working frame. We will go deeper in class.
        </p>

        {/* Three module cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {[
            {
              num: '01',
              title: 'Startup vs SME',
              desc: 'Same product. Radically different financial logic. Different decisions, different pressures, different people you become.',
              color: 'indigo',
            },
            {
              num: '02',
              title: 'Financial Projection',
              desc: 'Build a real projection for Topica Native — an English-learning startup. Watch the numbers tell you something uncomfortable.',
              color: 'violet',
            },
            {
              num: '03',
              title: 'Model as Ethics',
              desc: 'Three paradoxes, escalating in weight. From dating apps to asbestos. When does a business model become a moral position?',
              color: 'rose',
            },
          ].map(({ num, title, desc, color }) => (
            <div
              key={num}
              className={`rounded-xl border p-5 bg-slate-900/60 backdrop-blur-sm
                ${color === 'indigo' ? 'border-indigo-800/60' : color === 'violet' ? 'border-violet-800/60' : 'border-rose-800/60'}
              `}
            >
              <div className={`text-3xl font-black mb-3 ${color === 'indigo' ? 'text-indigo-600' : color === 'violet' ? 'text-violet-600' : 'text-rose-600'}`}>
                {num}
              </div>
              <h3 className="text-white font-semibold mb-2">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Central question */}
        <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-8">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-3">The question we are building toward</p>
          <blockquote className="text-xl sm:text-2xl font-medium text-slate-200 leading-relaxed">
            "When your business scales and you can't control it anymore —<br />
            <span className="text-indigo-400">do you like what it is?"</span>
          </blockquote>
          <p className="mt-4 text-slate-500 text-sm">
            You started today thinking: I just want to make money. By the end of this session,
            you will see that the model you choose determines who benefits, who is harmed, and — most importantly — who you become.
          </p>
        </div>

        {/* Scroll hint */}
        <div className="mt-12 flex items-center gap-3 text-slate-600 text-sm">
          <div className="w-px h-8 bg-slate-700" />
          <span>Scroll down to begin Module 1</span>
        </div>
      </div>
    </div>
  )
}
