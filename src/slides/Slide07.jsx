export default function Slide07() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Sequential statements */}
        <div className="space-y-6 mb-10">
          <p className="text-3xl sm:text-4xl font-bold text-white leading-tight">
            So you want to build a startup?
          </p>
          <p className="text-xl text-slate-400">
            You're saying you want to sell the future of this business.
          </p>
          <p className="text-xl text-slate-400">
            But the future is abstract. Investors can't buy a dream.
          </p>
          <p className="text-xl text-slate-400">
            The future needs a concrete form.
          </p>
        </div>

        {/* Big callout */}
        <div className="rounded-2xl border border-indigo-700/60 bg-indigo-950/40 p-8 mb-8">
          <p className="text-2xl sm:text-3xl font-bold text-white">
            That concrete form is the{' '}
            <span className="text-indigo-400">financial projection.</span>
          </p>
        </div>

        {/* Arrow to Module 2 */}
        <div className="flex items-center justify-center gap-3 text-slate-500 text-sm">
          <span>Next</span>
          <span className="text-indigo-400 text-xl">→</span>
          <span className="text-indigo-400 font-medium">Module 2: The Financial Projection</span>
        </div>
      </div>
    </div>
  )
}
