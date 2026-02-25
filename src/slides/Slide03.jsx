export default function Slide03() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-indigo-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl w-full">
        <p className="text-slate-400 text-sm uppercase tracking-widest font-medium mb-8 text-center">
          Two ways to capture money
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {/* SME card */}
          <div className="rounded-2xl border border-emerald-800/60 bg-emerald-950/30 p-8">
            <div className="text-emerald-400 text-xs uppercase tracking-widest font-medium mb-2">SME / Enterprise</div>
            <div className="text-emerald-300 text-2xl font-black mb-4">You extract value TODAY</div>
            <div className="space-y-2 mb-6">
              {['Revenue', 'Profit', 'Dividend', 'Your income'].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="text-emerald-400 font-mono text-sm bg-emerald-950/60 border border-emerald-800/50 rounded-lg px-3 py-1.5 flex-1 text-center">
                    {step}
                  </div>
                  {i < arr.length - 1 && <div className="text-emerald-600 text-sm">→</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Startup card */}
          <div className="rounded-2xl border border-indigo-800/60 bg-indigo-950/30 p-8">
            <div className="text-indigo-400 text-xs uppercase tracking-widest font-medium mb-2">Startup</div>
            <div className="text-indigo-300 text-2xl font-black mb-4">You sell TOMORROW</div>
            <div className="space-y-2 mb-6">
              {['Burn cash', 'Capture future', 'Exit (M&A / IPO)', 'Your payout'].map((step, i, arr) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="text-indigo-400 font-mono text-sm bg-indigo-950/60 border border-indigo-800/50 rounded-lg px-3 py-1.5 flex-1 text-center">
                    {step}
                  </div>
                  {i < arr.length - 1 && <div className="text-indigo-600 text-sm">→</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center text-slate-400 text-lg font-medium">
          Same product. <span className="text-white font-bold">Radically different logic.</span>
        </div>
      </div>
    </div>
  )
}
