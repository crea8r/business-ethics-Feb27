export default function Slide28() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        {/* Closing line — left-aligned with decorative bar */}
        <div className="absolute left-8 lg:left-16 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600 via-violet-600 to-rose-600 pointer-events-none" />
        <div className="pl-8">
          <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-10">
            The Mirror
          </p>

          <div className="space-y-6 mb-12">
            <p className="text-2xl sm:text-3xl text-white leading-relaxed">
              A startup is a financial projection for something you believe will be big.
            </p>
            <p className="text-2xl sm:text-3xl text-indigo-400 leading-relaxed">
              But that projection is also a mirror.
            </p>
            <p className="text-2xl sm:text-3xl text-slate-300 leading-relaxed">
              It shows exactly what you're willing to do to win.
            </p>
          </div>

          {/* Final question */}
          <div className="rounded-2xl border border-indigo-700/60 bg-indigo-950/30 p-7 mb-8">
            <p className="text-white text-2xl font-bold">
              What does your mirror show?
            </p>
          </div>

          {/* Footer */}
          <p className="text-slate-600 text-sm">
            Thank you. Pre-class reading and financial tool remain available at this URL.
          </p>
        </div>
      </div>
    </div>
  )
}
