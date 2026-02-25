import { useState } from 'react'

const DISCUSSION_QUESTIONS = [
  {
    number: '01',
    question: 'Which of the three paradoxes surprised you most, and why?',
    hint: 'Was it the scale of the surprise, or the familiarity? Did you recognize something in a product you already use?',
    placeholder: 'Dating apps feel abstract, but Topica felt real because...',
  },
  {
    number: '02',
    question: 'Can you name a business you use daily that has a similar hidden conflict?',
    hint: 'Think about: social media, streaming services, food delivery, ride-hailing, insurance, pharmaceuticals...',
    placeholder: 'I use [app] every day and the model seems to rely on...',
  },
  {
    number: '03',
    question: 'If you were building a startup today, what would your model be — and what does that tell you about yourself?',
    hint: 'What is the misalignment built into your model? Can you name it clearly? How would you handle it?',
    placeholder: 'My model would be... and the tension in it is...',
  },
]

export default function Finale() {
  const [notes, setNotes] = useState({ '01': '', '02': '', '03': '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen px-4 py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-rose-900/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Module label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium mb-6 uppercase tracking-widest">
          Finale — Group Discussion
        </div>

        {/* Main prompt */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
            The Mirror Question
          </h2>

          <div className="rounded-2xl border border-indigo-700/60 bg-indigo-950/30 p-8 mb-8">
            <p className="text-xl sm:text-2xl font-medium text-slate-200 leading-relaxed mb-4">
              "You started today thinking:{' '}
              <span className="text-slate-400 italic">I just want to make money.</span>
            </p>
            <p className="text-xl sm:text-2xl font-medium text-slate-200 leading-relaxed mb-4">
              Now you've seen how the model you choose determines who benefits, who's harmed, and who you become.
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-white leading-relaxed">
              When your business scales and you can't control it anymore —<br />
              <span className="text-indigo-400">do you like what it is?"</span>
            </p>
          </div>

          <p className="text-slate-400 text-base leading-relaxed">
            This is not a trick question. There is no right answer. The point is the clarity you develop in answering it — about what you value, what you are willing to do, and what kind of person you are building yourself into, one business decision at a time.
          </p>
        </div>

        {/* Discussion questions with note-taking */}
        <div className="mb-16">
          <h3 className="text-white text-2xl font-bold mb-8">Discussion Questions</h3>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-700/50 bg-emerald-950/20 p-8 text-center">
              <div className="text-5xl mb-4">✓</div>
              <div className="text-emerald-400 text-xl font-semibold mb-2">Notes saved.</div>
              <p className="text-slate-400">Your reflections are recorded. Now discuss them with the person next to you.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm hover:bg-slate-700 transition-colors"
              >
                Edit notes
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {DISCUSSION_QUESTIONS.map(({ number, question, hint, placeholder }) => (
                <div key={number} className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
                  <div className="p-6 border-b border-slate-800">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl font-black text-slate-700 shrink-0">{number}</div>
                      <div>
                        <p className="text-white text-base font-medium leading-relaxed mb-1">{question}</p>
                        <p className="text-slate-500 text-sm">{hint}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <textarea
                      className="w-full bg-slate-950/60 border border-slate-800 rounded-lg px-4 py-3 text-slate-200 text-sm placeholder-slate-600 resize-none focus:outline-none focus:border-indigo-600 transition-colors"
                      rows={4}
                      placeholder={placeholder}
                      value={notes[number]}
                      onChange={e => setNotes(n => ({ ...n, [number]: e.target.value }))}
                    />
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-colors"
              >
                Save my notes
              </button>
            </form>
          )}
        </div>

        {/* Closing statement */}
        <div className="relative">
          {/* Decorative line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600 via-violet-600 to-rose-600" />

          <div className="pl-8 space-y-8">
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-3">Closing Line</p>
              <blockquote className="text-xl sm:text-2xl font-medium text-white leading-relaxed">
                "A startup is a financial projection for something you believe will be big.
                <span className="text-indigo-400"> But that projection is also a mirror —</span>
                it shows exactly what you're willing to do to win."
              </blockquote>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="text-slate-400 text-sm leading-relaxed space-y-3">
                <p>
                  You have now seen three things:
                </p>
                <p>
                  <strong className="text-slate-200">First</strong>, the same product can be run under two completely different financial logics — and those logics produce different people.
                </p>
                <p>
                  <strong className="text-slate-200">Second</strong>, a financial projection is not just math. It is an argument about the future — with ethical consequences baked into its assumptions.
                </p>
                <p>
                  <strong className="text-slate-200">Third</strong>, business models are not neutral. They are incentive structures. Incentive structures shape behavior. Behavior, compounded over time, shapes character — and companies. And industries.
                </p>
                <p className="text-slate-300 font-medium pt-2 border-t border-slate-800">
                  The question is not whether your business will have ethical tensions. It will. Every model does.
                  The question is whether you will be able to see them clearly — and what you will choose to do when you do.
                </p>
              </div>
            </div>

            {/* Session summary chips */}
            <div>
              <p className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-4">Today's Session</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'SME vs Startup',
                  'Financial Projection Logic',
                  'Topica Native Case Study',
                  'Dating App Paradox',
                  'All-You-Can-Eat Education',
                  'Asbestos & Corporate Concealment',
                  'Model as Mirror',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
