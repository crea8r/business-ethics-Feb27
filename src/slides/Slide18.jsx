import { useState, useMemo } from 'react'

// ── Fixed industry constants ─────────────────────────────
const MAU           = 30_000_000   // monthly active users
const DORMANT       = 10_000_000   // have app installed, not active past 30d
const CAC           = 35           // $ to acquire one paying subscriber
const OP_RATIO      = 0.35         // ops (tech, R&D, G&A) as % of revenue
const NOTIF_CTR     = 0.13         // re-engagement push notification CTR (industry)
const LOVE_POOL_PCT = 0.25         // % of MAU who found a relationship via the app

// ── Slider component ─────────────────────────────────────
function Lever({ label, tag, value, min, max, step, onChange, format, danger, note }) {
  const pct = ((value - min) / (max - min)) * 100
  const color = danger ? 'bg-rose-500' : 'bg-violet-500'
  const thumb = danger ? 'bg-rose-500 border-rose-300' : 'bg-violet-500 border-violet-300'
  return (
    <div className="space-y-1.5">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-slate-200 text-xs font-medium">{label}</span>
          {tag && (
            <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-rose-900/50 border border-rose-800/60 text-rose-400 font-mono">
              {tag}
            </span>
          )}
          {note && <div className="text-slate-600 text-[10px] mt-0.5 leading-tight">{note}</div>}
        </div>
        <span className={`text-xs font-mono font-bold shrink-0 ${danger ? 'text-rose-400' : 'text-violet-300'}`}>
          {format ? format(value) : value}
        </span>
      </div>
      <div className="relative h-1.5">
        <div className="absolute inset-0 rounded-full bg-slate-700" />
        <div className={`absolute top-0 left-0 h-full rounded-full ${color}`} style={{ width: `${pct}%` }} />
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer" />
        <div className={`absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 ${thumb}`}
          style={{ left: `calc(${pct}% - 7px)` }} />
      </div>
    </div>
  )
}

function Metric({ label, value, sub, color = 'slate', danger, good }) {
  const c = danger ? 'text-rose-400' : good ? 'text-emerald-400' : 'text-violet-300'
  return (
    <div className={`rounded-lg border p-3 ${danger ? 'border-rose-800/50 bg-rose-950/20' : good ? 'border-emerald-800/40 bg-emerald-950/15' : 'border-slate-800 bg-slate-900/50'}`}>
      <div className="text-slate-500 text-[10px] uppercase tracking-widest mb-0.5">{label}</div>
      <div className={`text-lg font-bold font-mono ${c}`}>{value}</div>
      {sub && <div className="text-slate-600 text-[10px] mt-0.5">{sub}</div>}
    </div>
  )
}

function fmtUSD(n) {
  if (Math.abs(n) >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B'
  if (Math.abs(n) >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M'
  if (Math.abs(n) >= 1e3) return '$' + (n / 1e3).toFixed(0) + 'K'
  return '$' + Math.round(n)
}
function fmtDays(d) {
  if (d < 1) return (d * 24).toFixed(1) + ' hrs'
  if (d > 365) return '>1 year'
  return d.toFixed(1) + ' days'
}
function fmtPct(v) { return v.toFixed(1) + '%' }

export default function Slide18() {
  // ── Match Engine ───────────────────────────────────────
  const [swipeCap,      setSwipeCap]      = useState(25)    // free-tier daily swipe limit
  const [maleMatchRate, setMaleMatchRate] = useState(2.5)   // % per swipe → match
  const [femMatchRate,  setFemMatchRate]  = useState(50)    // % per swipe → match
  const [responseRate,  setResponseRate]  = useState(20)    // % of matches who reply

  // ── Subscription Coercion ──────────────────────────────
  const [blurNotifs,    setBlurNotifs]    = useState(4)     // "N people liked you!" / week (blurred)
  const [price,         setPrice]         = useState(20)    // $/month
  const [avgMonths,     setAvgMonths]     = useState(6)     // avg subscription length

  // ── Re-engagement Engine ───────────────────────────────
  const [reengageNotifs, setReengageNotifs] = useState(3)   // push notifs/week to dormant users
  const [resubRate,      setResubRate]      = useState(8)   // % of notified who re-subscribe
  const [relFailRate,    setRelFailRate]    = useState(40)  // % of found-love who return

  const c = useMemo(() => {
    // ── Match Engine ──────────────────────────────────
    const maleQPD = swipeCap * (maleMatchRate / 100) * (responseRate / 100) // quality matches / day
    const femQPD  = swipeCap * (femMatchRate  / 100) * (responseRate / 100)
    const maleDaysToMatch = maleQPD > 0 ? 1 / maleQPD : 999
    const femDaysToMatch  = femQPD  > 0 ? 1 / femQPD  : 999
    // Approx days to a "date" (30% of quality matches lead to date)
    const maleDaysToDate = maleQPD > 0 ? 1 / (maleQPD * 0.30) : 999
    const femDaysToDate  = femQPD  > 0 ? 1 / (femQPD  * 0.30) : 999

    // ── Subscription Coercion ─────────────────────────
    // Frustration index: normalised so 0.1 QPD → index 1.0
    const frustIdx  = Math.max(0.05, 0.1 / Math.max(maleQPD, 0.001))
    const fomoBoost = 1 + blurNotifs * 0.08   // each blurred-likes notif lifts conversion 8%
    const baseConv  = 0.07 * Math.pow(frustIdx, 0.6)
    const conversion = Math.min(0.28, baseConv * fomoBoost)

    const subRevenue    = MAU * conversion * price
    const newSubsMonth  = MAU * (conversion / avgMonths)    // churn replacement
    const cacSpend      = newSubsMonth * CAC
    const opCosts       = subRevenue * OP_RATIO

    // ── Re-engagement Engine ──────────────────────────
    // Notification channel: dormant users who still have push enabled (~65%)
    const notifPool    = DORMANT * 0.65
    const monthlyClicks = notifPool * (reengageNotifs / 7) * 30 * NOTIF_CTR
    const notifResubs   = monthlyClicks * (resubRate / 100)

    // Organic return: relationships that fail come back
    const monthlyRelFails = MAU * LOVE_POOL_PCT * (relFailRate / 100) / 12
    const reengageRevenue = (notifResubs + monthlyRelFails) * price

    // ── Total P&L ─────────────────────────────────────
    const totalRevenue = subRevenue + reengageRevenue
    const netProfit    = totalRevenue - cacSpend - opCosts
    const netMargin    = totalRevenue > 0 ? (netProfit / totalRevenue) * 100 : 0

    // ── Ethical comparison: user-optimised settings ───
    // swipeCap=100, maleMatchRate=8%, blurNotifs=0, reengageNotifs=1
    const uOptMaleQPD  = 100 * 0.08 * (responseRate / 100)
    const uOptFrustIdx = Math.max(0.05, 0.1 / uOptMaleQPD)
    const uOptConv     = Math.min(0.28, 0.07 * Math.pow(uOptFrustIdx, 0.6) * 1.0)
    const uOptRevenue  = MAU * uOptConv * price * (1 - OP_RATIO) - (MAU * uOptConv / avgMonths) * CAC
    const uOptDaysToMatch = 1 / uOptMaleQPD

    return {
      maleQPD, femQPD, maleDaysToMatch, femDaysToMatch, maleDaysToDate, femDaysToDate,
      conversion, subRevenue, reengageRevenue, totalRevenue,
      cacSpend, opCosts, netProfit, netMargin,
      notifResubs, monthlyRelFails,
      uOptRevenue, uOptDaysToMatch,
    }
  }, [swipeCap, maleMatchRate, femMatchRate, responseRate, blurNotifs, price, avgMonths, reengageNotifs, resubRate, relFailRate])

  const isLoss = c.netProfit < 0

  return (
    <div className="h-screen w-full overflow-y-auto bg-slate-950">
      <div className="max-w-5xl mx-auto p-6 lg:p-8 pb-16">

        {/* Header */}
        <div className="mb-5">
          <p className="text-rose-400 text-xs uppercase tracking-widest font-mono font-bold mb-1">
            Paradox 1 — Engineering the Ethical Trap
          </p>
          <p className="text-slate-500 text-xs">
            Every slider below is a real product decision an engineer was asked to optimise. No company named.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* ═══ LEFT: INPUTS ═══════════════════════════════════════ */}
          <div className="space-y-5">

            {/* Section 1: Match Engine */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-slate-300 text-xs font-bold uppercase tracking-widest">① Match Engine</span>
                <span className="text-slate-600 text-[10px]">what the algorithm controls</span>
              </div>
              <div className="space-y-4">
                <Lever
                  label="Free-tier daily swipe cap"
                  tag="throttle"
                  value={swipeCap} min={5} max={100} step={5}
                  onChange={setSwipeCap}
                  danger
                  note="Industry: ~25. Lower = more frustration = more subscriptions."
                />
                <Lever
                  label="Male match rate per swipe"
                  tag="calibrated"
                  value={maleMatchRate} min={0.5} max={15} step={0.5}
                  onChange={setMaleMatchRate}
                  format={v => v + '%'}
                  danger
                  note="Industry: ~2.5% (1 in 40). Low enough to keep men swiping."
                />
                <Lever
                  label="Female match rate per swipe"
                  value={femMatchRate} min={10} max={90} step={5}
                  onChange={setFemMatchRate}
                  format={v => v + '%'}
                  note="Industry: ~50% (1 in 2). Women are inventory, not customers."
                />
                <Lever
                  label="Match response rate"
                  value={responseRate} min={5} max={50} step={5}
                  onChange={setResponseRate}
                  format={v => v + '%'}
                  note="% of matches that turn into actual conversations."
                />
              </div>
            </div>

            {/* Section 2: Subscription Coercion */}
            <div className="rounded-xl border border-amber-900/40 bg-amber-950/10 p-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">② Subscription Coercion</span>
                <span className="text-slate-600 text-[10px]">monetisation engineering</span>
              </div>
              <div className="space-y-4">
                <Lever
                  label='"N people liked you!" blur-notifications / week'
                  tag="dark pattern"
                  value={blurNotifs} min={0} max={10} step={1}
                  onChange={setBlurNotifs}
                  danger
                  note='Profiles shown blurred. "Subscribe to see who." Often inflated or fabricated.'
                />
                <Lever
                  label="Monthly subscription price"
                  value={price} min={10} max={50} step={5}
                  onChange={setPrice}
                  format={v => '$' + v}
                />
                <Lever
                  label="Avg months subscribed"
                  value={avgMonths} min={1} max={18} step={1}
                  onChange={setAvgMonths}
                  format={v => v + ' mo'}
                  note="Longer = more profitable per user. Model profits when users don't find love fast."
                />
              </div>
            </div>

            {/* Section 3: Re-engagement Engine */}
            <div className="rounded-xl border border-rose-900/40 bg-rose-950/10 p-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-rose-300 text-xs font-bold uppercase tracking-widest">③ Re-engagement Engine</span>
                <span className="text-slate-600 text-[10px]">sent even to users who found love</span>
              </div>
              <div className="space-y-4">
                <Lever
                  label="Push notifications / week → dormant users"
                  tag="re-invite"
                  value={reengageNotifs} min={0} max={7} step={1}
                  onChange={setReengageNotifs}
                  danger
                  note='Industry CTR: 13%. Sent to users who found love, stopped using. "People are waiting for you!"'
                />
                <Lever
                  label="Re-subscription rate from notifications"
                  value={resubRate} min={1} max={25} step={1}
                  onChange={setResubRate}
                  format={v => v + '%'}
                />
                <Lever
                  label="Relationship failure rate at 6 months"
                  value={relFailRate} min={10} max={70} step={5}
                  onChange={setRelFailRate}
                  format={v => v + '%'}
                  danger
                  note="These users organically return. The app profits when love doesn't last."
                />
              </div>
            </div>
          </div>

          {/* ═══ RIGHT: OUTPUTS ═════════════════════════════════════ */}
          <div className="space-y-4">

            {/* Gender Experience Asymmetry */}
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
              <div className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-3">
                User experience — by gender
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="text-slate-500 text-[10px] uppercase tracking-widest">Male</div>
                  <Metric label="Quality matches / day" value={c.maleQPD.toFixed(2)} sub="conversations started" />
                  <Metric label="Days to first match" value={fmtDays(c.maleDaysToMatch)} danger={c.maleDaysToMatch > 14} />
                  <Metric label="Days to likely date" value={fmtDays(c.maleDaysToDate)} danger={c.maleDaysToDate > 30} />
                  <div className="rounded-lg border border-rose-900/50 bg-rose-950/20 p-2 text-[10px] text-rose-400 leading-snug">
                    Low match rate → frustration → subscription. This is the design.
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-slate-500 text-[10px] uppercase tracking-widest">Female</div>
                  <Metric label="Quality matches / day" value={c.femQPD.toFixed(2)} sub="conversations started" good />
                  <Metric label="Days to first match" value={fmtDays(c.femDaysToMatch)} good={c.femDaysToMatch < 2} />
                  <Metric label="Days to likely date" value={fmtDays(c.femDaysToDate)} good={c.femDaysToDate < 5} />
                  <div className="rounded-lg border border-amber-900/50 bg-amber-950/20 p-2 text-[10px] text-amber-400 leading-snug">
                    High match rate → overwhelmed → choice paralysis. Women are inventory.
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription conversion */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-3">Subscription mechanics</div>
              <div className="grid grid-cols-3 gap-2">
                <Metric label="Conversion rate" value={fmtPct(c.conversion * 100)} sub="of MAU pays" />
                <Metric label="Paying subscribers" value={(MAU * c.conversion / 1e6).toFixed(2) + 'M'} />
                <Metric label="Sub revenue / mo" value={fmtUSD(c.subRevenue)} good />
              </div>
              {/* FOMO effect callout */}
              <div className="rounded-lg border border-amber-800/40 bg-amber-950/15 p-2 mt-3 text-[10px] text-amber-400">
                Blur-notifications add <strong className="text-white">{((1 + blurNotifs * 0.08 - 1) * 100).toFixed(0)}% lift</strong> to conversion.
                {blurNotifs > 5
                  ? ' High notification volume — users may flag this as spam or delete app.'
                  : ' Moderate. Engineers track this metric weekly.'}
              </div>
            </div>

            {/* Re-engagement breakdown */}
            <div className="rounded-xl border border-rose-900/40 bg-rose-950/10 p-4">
              <div className="text-rose-400 text-xs uppercase tracking-widest font-medium mb-3">Re-engagement revenue</div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <Metric label="Notif re-subs / mo" value={Math.round(c.notifResubs).toLocaleString()} sub={`${reengageNotifs} push/wk × 13% CTR`} />
                <Metric label="Relationship failures / mo" value={Math.round(c.monthlyRelFails).toLocaleString()} sub={`${relFailRate}% fail at 6 mo`} danger />
              </div>
              <div className="rounded-lg border border-rose-800/50 bg-rose-950/20 p-2 text-[10px] text-rose-300 leading-snug">
                Re-engagement revenue: <strong className="text-white font-mono">{fmtUSD(c.reengageRevenue)}/month</strong>.
                Every failed relationship is a returning customer. The app has no financial reason to help love last.
              </div>
            </div>

            {/* Net P&L */}
            <div className={`rounded-xl border p-4 text-center ${isLoss ? 'border-rose-700 bg-rose-950/30' : 'border-emerald-700/60 bg-emerald-950/20'}`}>
              <div className="text-slate-400 text-xs uppercase tracking-widest mb-1">Monthly net profit</div>
              <div className={`text-3xl font-black font-mono ${isLoss ? 'text-rose-400' : 'text-emerald-400'}`}>
                {isLoss ? '(' : ''}{fmtUSD(Math.abs(c.netProfit))}{isLoss ? ')' : ''}
              </div>
              <div className={`text-sm font-medium mt-0.5 ${isLoss ? 'text-rose-500' : 'text-emerald-500'}`}>
                {c.netMargin.toFixed(1)}% margin · total revenue {fmtUSD(c.totalRevenue)}
              </div>
            </div>

            {/* Ethical comparison */}
            <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
              <div className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-3">
                If engineers optimised for users instead
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <div className="text-slate-500 uppercase tracking-widest text-[10px]">Current model</div>
                  <div className="text-slate-300">Swipe cap: <span className="text-rose-400 font-mono">{swipeCap}</span></div>
                  <div className="text-slate-300">Male match rate: <span className="text-rose-400 font-mono">{maleMatchRate}%</span></div>
                  <div className="text-slate-300">Blur notifs: <span className="text-rose-400 font-mono">{blurNotifs}/wk</span></div>
                  <div className="text-slate-300">Days to match: <span className="text-rose-400 font-mono">{fmtDays(c.maleDaysToMatch)}</span></div>
                  <div className="text-emerald-400 font-mono font-bold mt-2">{fmtUSD(c.netProfit)}/mo</div>
                </div>
                <div className="space-y-1">
                  <div className="text-slate-500 uppercase tracking-widest text-[10px]">User-optimised</div>
                  <div className="text-slate-300">Swipe cap: <span className="text-emerald-400 font-mono">100</span></div>
                  <div className="text-slate-300">Male match rate: <span className="text-emerald-400 font-mono">8%</span></div>
                  <div className="text-slate-300">Blur notifs: <span className="text-emerald-400 font-mono">0/wk</span></div>
                  <div className="text-slate-300">Days to match: <span className="text-emerald-400 font-mono">{fmtDays(c.uOptDaysToMatch)}</span></div>
                  <div className="text-rose-400 font-mono font-bold mt-2">{fmtUSD(c.uOptRevenue)}/mo</div>
                </div>
              </div>
              <div className="border-t border-slate-700 mt-3 pt-3 text-[10px] text-slate-500 leading-relaxed">
                The gap between these two columns is the price of the ethical choice.
                Engineers knew both numbers. Product managers chose.
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
