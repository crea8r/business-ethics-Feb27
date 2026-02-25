import FinancialTool from './FinancialTool.jsx'

export default function Module2() {
  return (
    <div className="min-h-screen px-4 py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        {/* Module label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium mb-6 uppercase tracking-widest">
          Module 2 of 3
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          Financial Projection
        </h2>
        <p className="text-slate-400 text-lg mb-4 leading-relaxed max-w-2xl">
          A projection is not a prediction. It is a story you tell in numbers — about what you believe, what you are willing to do, and who you are willing to become.
        </p>
        <p className="text-slate-400 text-base leading-relaxed mb-12 max-w-2xl">
          Below is a real model. The instructor built and ran this business. Adjust the sliders. Watch the math. Then notice what the math is asking you to do.
        </p>

        {/* The tool — centerpiece */}
        <FinancialTool />

        {/* Transition callout */}
        <div className="mt-16 rounded-2xl border border-violet-700/50 bg-violet-950/30 p-8">
          <div className="text-violet-400 text-xs uppercase tracking-widest font-medium mb-4">The Transition</div>
          <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed mb-4">
            "You've built the projection. But look what it's telling you to do.
            <span className="text-violet-400"> Is that what you want?"</span>
          </blockquote>
          <p className="text-slate-400 text-base leading-relaxed">
            The model rewards you for students using fewer sessions. Every 60-minute conversation a student skips saves
            the business 210,000 VND. At 3,000 students, the difference between a fully-delivered product and a
            barely-delivered one is nearly <strong className="text-white">3.78 billion VND per month</strong>.
          </p>
          <p className="text-slate-400 text-base leading-relaxed mt-4">
            The model does not care about your intentions. It incentivizes "good enough." Not great. Not transformative. Just good enough to sell the next enrollment.
            This is not a bug — it is a structural feature of the business model. And it is built directly into the spreadsheet you just played with.
          </p>
          <p className="text-slate-300 text-base leading-relaxed mt-4 font-medium">
            The projection is also a mirror. What does yours say?
          </p>
        </div>
      </div>
    </div>
  )
}
