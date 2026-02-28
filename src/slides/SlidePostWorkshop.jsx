const questions = [
  'How has your understanding of startup ethics changed?',
  'What key principles should guide ethical decisions in a startup?',
  'Describe one scenario where you would apply ethical reasoning in a business setting.',
  'After the workshop, how would you balance profit and purpose in a startup decision?',
  'What specific actions will you take to ensure ethical practices in your own startup idea?',
]

export default function SlidePostWorkshop() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-900/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-teal-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="px-3 py-1 rounded-full bg-emerald-900/50 border border-emerald-700/50 text-emerald-300 text-xs font-medium uppercase tracking-widest">
            Post-Workshop
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-snug">
          Now revisit — have your answers changed?
        </h2>

        <ol className="space-y-4" start={6}>
          {questions.map((q, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-emerald-900/60 border border-emerald-700/60 text-emerald-300 text-xs font-bold flex items-center justify-center">
                {i + 6}
              </span>
              <p className="text-slate-300 text-base leading-relaxed">{q}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-slate-600 text-sm">
          Compare with your pre-workshop answers. Notice what shifted.
        </p>
      </div>
    </div>
  )
}
