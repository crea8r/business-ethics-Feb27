export default function Slide14() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute center w-96 h-96 top-1/3 left-1/3 bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Dramatic sequence */}
        <div className="space-y-8 mb-12">
          <p className="text-3xl sm:text-4xl font-bold text-white">
            You just built a financial projection.
          </p>
          <p className="text-xl text-slate-400">
            Look at what it's telling you to do.
          </p>
          <div className="w-16 h-px bg-slate-700 mx-auto" />
          <p className="text-xl text-slate-300 font-medium">
            Is that what you want to do?
          </p>
        </div>

        {/* Transition note */}
        <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-5 mb-6">
          <p className="text-slate-400 text-sm">This is where Module 3 begins.</p>
        </div>

        <p className="text-slate-600 text-sm">
          You can make money in multiple ways. But what do you choose — and what does that say about you?
        </p>
      </div>
    </div>
  )
}
