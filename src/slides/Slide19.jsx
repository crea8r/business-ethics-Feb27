export default function Slide19() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/40 border border-amber-700/50 text-amber-300 text-xs font-medium mb-8 uppercase tracking-widest">
          Paradox 2
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          The Education Buffet
        </h2>

        <p className="text-slate-400 leading-relaxed mb-6">
          Topica Native offered students <strong className="text-white">unlimited access</strong> to 16 group sessions per day for 3 months. Like a buffet: you pay once, you can come back as many times as you want.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <div className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-2">Buffet restaurant</div>
            <p className="text-slate-200 text-sm">
              The owner profits when you <strong className="text-white">eat LESS.</strong><br />
              If everyone ate to the maximum, the restaurant loses money.
            </p>
          </div>
          <div className="rounded-xl border border-amber-800/50 bg-amber-950/30 p-5">
            <div className="text-amber-400 text-xs uppercase tracking-widest font-medium mb-2">Topica Native</div>
            <p className="text-slate-200 text-sm">
              The owner profits when students <strong className="text-white">attend FEWER sessions.</strong><br />
              If every student came 16 times a day, the company goes bankrupt.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-3">The sweet spot the model creates</div>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span className="text-slate-300">Quality good enough → no social media complaints, no refund demands</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span className="text-rose-400 font-bold mt-0.5">✗</span>
              <span className="text-slate-300">Quality not so good → students don't make rapid progress, attendance stays low</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <span className="text-emerald-400 font-bold mt-0.5">✓</span>
              <span className="text-slate-300">Quality just good enough → students believe another 3 months will help them</span>
            </div>
          </div>
        </div>

        <p className="text-slate-500 text-sm mt-6 italic">
          "I built this model. I know exactly how this feels."
        </p>
      </div>
    </div>
  )
}
