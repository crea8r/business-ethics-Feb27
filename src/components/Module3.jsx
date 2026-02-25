import { useState } from 'react'

function ParadoxCard({ number, title, tagline, children, color, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)

  const colorMap = {
    violet: {
      badge: 'bg-violet-900/50 border-violet-700/50 text-violet-300',
      num: 'text-violet-500',
      border: 'border-violet-800/50',
      bg: 'bg-violet-950/20',
      hover: 'hover:border-violet-700/70',
      button: 'text-violet-400 hover:text-violet-300',
    },
    amber: {
      badge: 'bg-amber-900/50 border-amber-700/50 text-amber-300',
      num: 'text-amber-500',
      border: 'border-amber-800/50',
      bg: 'bg-amber-950/20',
      hover: 'hover:border-amber-700/70',
      button: 'text-amber-400 hover:text-amber-300',
    },
    rose: {
      badge: 'bg-rose-900/50 border-rose-700/50 text-rose-300',
      num: 'text-rose-500',
      border: 'border-rose-800/50',
      bg: 'bg-rose-950/20',
      hover: 'hover:border-rose-700/70',
      button: 'text-rose-400 hover:text-rose-300',
    },
  }
  const c = colorMap[color]

  return (
    <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${c.border} ${c.bg} ${c.hover}`}>
      {/* Header — always visible */}
      <button
        className="w-full text-left p-6 sm:p-8"
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`text-5xl font-black leading-none shrink-0 ${c.num}`}>{number}</div>
            <div>
              <div className={`inline-flex px-2 py-0.5 rounded-full border text-xs font-medium mb-2 ${c.badge}`}>
                Paradox {number}
              </div>
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{tagline}</p>
            </div>
          </div>
          <div className={`shrink-0 text-2xl transition-transform ${open ? 'rotate-180' : ''} ${c.button}`}>
            ↓
          </div>
        </div>
      </button>

      {/* Expandable content */}
      {open && (
        <div className="px-6 sm:px-8 pb-8 border-t border-slate-800/50">
          <div className="pt-6">{children}</div>
        </div>
      )}
    </div>
  )
}

export default function Module3() {
  return (
    <div className="min-h-screen px-4 py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-rose-900/10 rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-amber-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Module label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium mb-6 uppercase tracking-widest">
          Module 3 of 3
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          Business Model<br />
          <span className="text-rose-400">as Ethics</span>
        </h2>
        <p className="text-slate-400 text-lg mb-4 leading-relaxed">
          A business model is not neutral. It is a set of incentives — and incentives shape behavior whether you want them to or not.
        </p>
        <p className="text-slate-400 text-base leading-relaxed mb-12">
          Below are three paradoxes, in escalating order. Each one shows a moment where the model and the mission diverge.
          Notice how the distance between "profit motive" and "harm caused" grows with each one.
          Click each paradox to expand.
        </p>

        {/* Three paradoxes */}
        <div className="space-y-6 mb-16">

          {/* Paradox 1: Dating Apps */}
          <ParadoxCard
            number="1"
            title="Dating Apps"
            tagline="The perfect product destroys itself. You only profit when love fails."
            color="violet"
          >
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                A dating app's revenue model is based on subscriptions and premium features. The company earns money while you are searching for love. The moment you find a lasting relationship — the stated purpose of the product — you cancel your subscription. You leave. You stop paying.
              </p>
              <p className="text-slate-300 leading-relaxed">
                This means the company's financial interest is structurally misaligned with your success. A perfect dating app would eliminate itself. The business model cannot survive its own mission being achieved at scale.
              </p>
              <div className="rounded-xl border border-violet-800/50 bg-violet-950/30 p-5">
                <div className="text-violet-300 text-xs uppercase tracking-widest font-medium mb-3">The Structural Tension</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-white text-sm font-semibold mb-1">What the app says</div>
                    <div className="text-slate-400 text-sm">"Find your perfect match. True connection. Love that lasts."</div>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold mb-1">What the model needs</div>
                    <div className="text-slate-400 text-sm">Enough hope to keep paying. Not so much success that you leave.</div>
                  </div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Does this make dating app founders evil? Not necessarily. Many genuinely want to help people find love. But the model creates pressure — toward engagement over connection, toward "interesting matches" over "right matches," toward keeping you searching just a little longer.
              </p>
              <p className="text-slate-400 text-sm italic">
                Notice the severity: low. Nobody is harmed. People just stay single longer. But the seed is planted — profit and mission can point in opposite directions.
              </p>
            </div>
          </ParadoxCard>

          {/* Paradox 2: Education (Topica Native) */}
          <ParadoxCard
            number="2"
            title="All-You-Can-Eat Education"
            tagline="Good enough to not get complaints. Bad enough to keep costs low. Structurally prevents improvement. This one is personal."
            color="amber"
            defaultOpen={true}
          >
            <div className="space-y-4">
              <div className="rounded-xl border border-amber-700/50 bg-amber-950/20 px-4 py-3 text-amber-300 text-sm font-medium">
                This is Topica Native — the same business from the financial model in Module 2. The instructor ran this company.
              </div>
              <p className="text-slate-300 leading-relaxed">
                The business model you just projected works as follows: students pay upfront for 16 sessions. Every session they don't attend saves the company money. Every session they do attend costs money. At scale, the financial pressure to reduce session delivery is enormous.
              </p>
              <p className="text-slate-300 leading-relaxed">
                So the business optimizes — not consciously, but structurally — toward a specific outcome: students who are <em>just satisfied enough</em> to not demand refunds and to buy another enrollment. Students who feel they are making progress, but slowly enough that they need to keep paying.
              </p>
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 my-4">
                <div className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-3">The Optimized State</div>
                <ul className="space-y-2">
                  {[
                    'Good enough to not get complaints — so no churn',
                    'Bad enough to keep costs low — so margin improves',
                    'Just promising enough to sell the next renewal — so revenue continues',
                    'Never transformatively good — because that would end the relationship',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-slate-300 leading-relaxed">
                This structure <em>prevents genuine improvement</em> — not because anyone decides to, but because the economics make genuine improvement unprofitable. A teacher who is so good that every student rapidly becomes fluent in three months is a liability to the business model.
              </p>
              <p className="text-slate-300 leading-relaxed">
                The instructor built this. There was no single moment of deciding to cheat students. There was just a spreadsheet, and the spreadsheet had incentives, and those incentives shaped decisions, and eventually the product was what the model needed it to be — not what the mission said it was.
              </p>
              <p className="text-slate-400 text-sm italic">
                Notice the severity: medium. Real people paid real money and learned less than they could have. The harm is diffuse, hard to see, easy to rationalize. But it is there.
              </p>
            </div>
          </ParadoxCard>

          {/* Paradox 3: Asbestos */}
          <ParadoxCard
            number="3"
            title="Asbestos"
            tagline="They knew it was lethal. For decades. And they kept selling."
            color="rose"
          >
            <div className="space-y-4">
              <div className="rounded-xl border border-rose-700/50 bg-rose-950/20 px-4 py-3 text-rose-300 text-sm font-medium">
                Reference: Veritasium — "The Most Difficult Problem in the World." Watch it after class.
              </div>
              <p className="text-slate-300 leading-relaxed">
                Asbestos companies employed thousands of people, manufactured essential building materials, and generated enormous wealth. They also knew — from internal documents, from their own scientists — that their product caused mesothelioma, an extremely painful and lethal cancer, decades after exposure.
              </p>
              <p className="text-slate-300 leading-relaxed">
                They suppressed the science. They funded counter-research. They lobbied against regulation. They hired people, sold product, expanded operations, and paid dividends — while people who worked with their materials were dying in slow motion, not yet knowing why.
              </p>
              <div className="rounded-xl border border-rose-800/50 bg-rose-950/30 p-5 my-4">
                <div className="text-rose-300 text-xs uppercase tracking-widest font-medium mb-3">The timeline of knowing</div>
                <div className="space-y-3">
                  {[
                    { year: '1930s', text: 'Internal studies begin showing lung disease in workers' },
                    { year: '1940s–50s', text: 'Executives receive and suppress internal reports on cancer risk' },
                    { year: '1960s', text: 'Independent research published. Companies fund opposition research' },
                    { year: '1970s–80s', text: 'Regulation begins. Industry fights it at every step' },
                    { year: '2000s+', text: 'Hundreds of thousands dead or dying. Litigation continues globally' },
                  ].map(({ year, text }) => (
                    <div key={year} className="flex gap-4 text-sm">
                      <span className="text-rose-400 font-mono shrink-0 w-16">{year}</span>
                      <span className="text-slate-400">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                How do executives get there? Slowly. You start with: "The evidence is not conclusive." Then: "We have a responsibility to our shareholders and employees." Then: "If we pull back, competitors fill the gap." Then: "The regulatory environment isn't favorable right now." Then: "These lawsuits are the cost of doing business."
              </p>
              <p className="text-slate-300 leading-relaxed">
                Each step is a small rationalization. None of them require you to be a monster. They just require you to keep choosing the business model's logic over the human being in front of you — until the habit is so deep you can no longer see the choice you're making.
              </p>
              <p className="text-slate-300 leading-relaxed font-medium">
                This is the seed from paradox 1, fully grown. A structural misalignment between profit and mission, compounded over decades, in an industry that could not easily exit its own model. This is what happens when you can't take it back.
              </p>
              <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5 mt-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  <strong className="text-white">The critical question is not</strong>: were these people evil from the start?
                  Most were not. The critical question is: at what point does continuing to run a model you know is harmful become a moral choice — regardless of what you started with?
                </p>
              </div>
            </div>
          </ParadoxCard>
        </div>

        {/* Escalation synthesis */}
        <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-8 mb-12">
          <div className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-6">The Escalating Pattern</div>
          <div className="space-y-4">
            {[
              {
                num: '1',
                label: 'Misaligned incentives',
                desc: 'The model and the mission point in different directions. Harm is minimal. The user stays single a bit longer.',
                color: 'text-violet-400',
              },
              {
                num: '2',
                label: 'Structural prevention of good',
                desc: 'The model actively prevents the best outcome. Harm is diffuse — people learn less than they could. Easy to rationalize.',
                color: 'text-amber-400',
              },
              {
                num: '3',
                label: 'Harm compounded and concealed',
                desc: 'The model requires ongoing suppression of truth. People die. The seed planted in 1 has grown and cannot be recalled.',
                color: 'text-rose-400',
              },
            ].map(({ num, label, desc, color }) => (
              <div key={num} className="flex items-start gap-4">
                <div className={`text-2xl font-black shrink-0 w-8 ${color}`}>{num}</div>
                <div>
                  <div className="text-white text-sm font-semibold">{label}</div>
                  <div className="text-slate-400 text-sm mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
