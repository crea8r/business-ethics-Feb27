import RedactedBrand from '../components/RedactedBrand'

export default function Slide20() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="relative z-10 max-w-2xl w-full">
        {/* Compact brand badge */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-slate-500 text-sm font-mono">Running</span>
          <RedactedBrand compact />
          <span className="text-slate-500 text-sm font-mono">— what it actually felt like</span>
        </div>

        {/* Narrative */}
        <div className="space-y-5 mb-10">
          <p className="text-slate-300 text-lg leading-relaxed">
            "When you run this model, you face a choice every day."
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            "Do you invest in better teachers? Better materials? Or do you hire more salespeople?"
          </p>
          <p className="text-slate-300 text-lg leading-relaxed">
            "The financial model answers that question for you — before you even ask it."
          </p>
        </div>

        {/* Deming quote */}
        <div className="rounded-2xl border border-slate-700 bg-slate-900/50 p-7 mb-8">
          <p className="text-white text-xl font-medium leading-relaxed italic mb-3">
            "Every system is perfectly designed to get the results it gets."
          </p>
          <p className="text-slate-500 text-sm">— W. Edwards Deming</p>
        </div>

        <p className="text-slate-400 text-base font-medium">
          The model was the decision.
        </p>
      </div>
    </div>
  )
}
