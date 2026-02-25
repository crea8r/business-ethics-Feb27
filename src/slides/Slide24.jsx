const stages = [
  { scale: 'You start', detail: 'You are one person making decisions.' },
  { scale: '100 students', detail: 'You can change anything.' },
  { scale: '10,000 students', detail: 'The system runs itself.' },
  { scale: '1,000,000 users', detail: 'YOU work for the model.' },
]

export default function Slide24() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-8">
          What Happens When It Scales
        </p>

        {/* Scale stages */}
        <div className="space-y-4 mb-10">
          {stages.map(({ scale, detail }, i) => (
            <div key={scale} className="flex items-start gap-5">
              <div className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 mt-2" />
              <div>
                <span className="text-white font-bold">{scale}</span>
                <span className="text-slate-400"> — {detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-7">
          <p className="text-white text-xl font-medium leading-relaxed">
            The seed you plant determines the tree.{' '}
            <span className="text-slate-400">And trees are hard to uproot.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
