const examples = [
  'subscription traps',
  'social media',
  'insurance',
  'mobile games',
  'fast fashion',
]

export default function Slide27() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="relative z-10 max-w-2xl w-full text-center">
        <p className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-12">
          Discussion Question 2 of 2
        </p>

        {/* Big question */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-10">
          Name a business you use every day that has a hidden conflict between the owner's interest and yours.
        </h2>

        {/* Examples to prime thinking */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {examples.map((ex) => (
            <span key={ex} className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-sm">
              {ex}
            </span>
          ))}
        </div>

        {/* Encouragement */}
        <p className="text-slate-500 text-sm">
          You don't have to be certain. Just think out loud.
        </p>
      </div>
    </div>
  )
}
