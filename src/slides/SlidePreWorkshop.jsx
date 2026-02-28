const questions = [
  'What does "ethics in startups" mean to you?',
  'Why do you think ethical choices matter for new ventures?',
  'What ethical issues might a startup face when raising funds?',
  'What role does transparency play in a startup\'s relationship with customers?',
  'Give one example of an ethical dilemma a founder could encounter.',
]

export default function SlidePreWorkshop() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-900/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-yellow-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="px-3 py-1 rounded-full bg-amber-900/50 border border-amber-700/50 text-amber-300 text-xs font-medium uppercase tracking-widest">
            Pre-Workshop
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 leading-snug">
          Before we begin — write your answers
        </h2>

        <ol className="space-y-4">
          {questions.map((q, i) => (
            <li key={i} className="flex gap-4 items-start">
              <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-amber-900/60 border border-amber-700/60 text-amber-300 text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <p className="text-slate-300 text-base leading-relaxed">{q}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-slate-600 text-sm">
          Keep your answers — you'll revisit them at the end of the session.
        </p>
      </div>
    </div>
  )
}
