import RedactedBrand from '../components/RedactedBrand'

export default function Slide09() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center p-8 lg:p-16 relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl w-full flex flex-col sm:flex-row items-start gap-10">
        {/* Left: redacted brand */}
        <div className="shrink-0">
          <RedactedBrand />
        </div>

        {/* Right: business description */}
        <div className="flex-1 min-w-0">
          <p className="text-slate-400 text-sm font-medium mb-4">
            Let's build a real projection. This is a company I actually ran.
          </p>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 divide-y divide-slate-800">
            {[
              { label: 'Student pays', value: '7,000,000 VND — 3 months of unlimited access' },
              { label: 'What they get', value: '16 group sessions run every day, any of which they can join' },
              { label: 'Each session', value: '60 min · native English speaker · ~25 students per class' },
              { label: 'Teacher paid', value: '210,000 VND per session, regardless of attendance' },
              { label: 'Sales team', value: 'Hundreds of salespeople closing enrollments' },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-start gap-4 px-5 py-3.5">
                <div className="text-slate-500 text-sm w-28 shrink-0">{label}</div>
                <div className="text-slate-200 text-sm font-medium">{value}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-violet-800/50 bg-violet-950/30 p-4 mt-4">
            <p className="text-violet-300 font-medium">
              If students used it fully — 16 sessions/day for 90 days — what would that cost the company per student?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
