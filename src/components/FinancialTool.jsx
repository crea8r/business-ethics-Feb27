import { useState, useMemo } from 'react'
import RedactedBrand from './RedactedBrand'

function formatVND(n) {
  if (Math.abs(n) >= 1_000_000_000) {
    return (n / 1_000_000_000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' B'
  }
  if (Math.abs(n) >= 1_000_000) {
    return (n / 1_000_000).toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' M'
  }
  return Math.round(n).toLocaleString('en-US') + ' ₫'
}

function SliderInput({ label, sublabel, value, min, max, step, onChange, formatFn, warning, highlight }) {
  const pct = ((value - min) / (max - min)) * 100
  const color = warning ? 'bg-rose-500' : highlight ? 'bg-amber-500' : 'bg-indigo-500'
  const textColor = warning ? 'text-rose-400' : highlight ? 'text-amber-300' : 'text-indigo-300'
  const thumbColor = warning ? 'bg-rose-500 border-rose-300' : highlight ? 'bg-amber-500 border-amber-300' : 'bg-indigo-500 border-indigo-300'
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <div>
          <div className="text-slate-200 text-sm font-medium">{label}</div>
          {sublabel && <div className="text-slate-500 text-xs mt-0.5">{sublabel}</div>}
        </div>
        <div className={`text-sm font-mono font-semibold ${textColor}`}>
          {formatFn ? formatFn(value) : value.toLocaleString('en-US')}
        </div>
      </div>
      <div className="relative h-2">
        <div className="absolute inset-0 rounded-full bg-slate-700" />
        <div className={`absolute top-0 left-0 h-full rounded-full transition-all ${color}`} style={{ width: `${pct}%` }} />
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
          style={{ margin: 0 }}
        />
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 shadow-lg transition-all ${thumbColor}`}
          style={{ left: `calc(${pct}% - 8px)` }}
          aria-hidden="true"
        />
      </div>
      <div className="flex justify-between text-slate-600 text-xs">
        <span>{formatFn ? formatFn(min) : min.toLocaleString()}</span>
        <span>{formatFn ? formatFn(max) : max.toLocaleString()}</span>
      </div>
    </div>
  )
}

function MetricCard({ label, value, color, sublabel, highlight }) {
  const colorMap = {
    green: 'text-emerald-400', red: 'text-rose-400',
    blue: 'text-indigo-400', yellow: 'text-amber-400', white: 'text-white',
  }
  return (
    <div className={`rounded-xl p-4 border ${highlight ? 'border-rose-700/60 bg-rose-950/30' : 'border-slate-800 bg-slate-900/60'}`}>
      <div className="text-slate-500 text-xs uppercase tracking-widest font-medium mb-1">{label}</div>
      <div className={`text-lg sm:text-xl font-bold font-mono ${colorMap[color] || 'text-white'}`}>{value}</div>
      {sublabel && <div className="text-slate-500 text-xs mt-1">{sublabel}</div>}
    </div>
  )
}

function EthicsBar({ dailySessions, studentsPerSession, teacherCost, enrollmentPrice, newEnrollments }) {
  // Monthly revenue per active student
  const revenuePerStudentPerMonth = enrollmentPrice / 3
  // Teacher cost per active student per month at given daily attendance
  const teacherCostPerStudentPerMonth = dailySessions * 30 * (teacherCost / studentsPerSession)
  // Breakeven daily sessions
  const breakeven = revenuePerStudentPerMonth / (30 * teacherCost / studentsPerSession)
  const breakevenRounded = breakeven.toFixed(1)

  const pct = (dailySessions / 16) * 100
  const isOverBreakeven = dailySessions > breakeven
  const isLowAttendance = dailySessions <= 3

  return (
    <div className={`rounded-xl border p-6 ${isOverBreakeven ? 'border-rose-700/60 bg-rose-950/20' : isLowAttendance ? 'border-amber-700/50 bg-amber-950/15' : 'border-slate-700 bg-slate-900/40'}`}>
      <div className="flex items-start justify-between mb-4 gap-4 flex-wrap">
        <div>
          <div className={`text-sm font-semibold ${isOverBreakeven ? 'text-rose-400' : isLowAttendance ? 'text-amber-400' : 'text-slate-300'}`}>
            The Ethical Lever: Daily Sessions Attended
          </div>
          <div className="text-slate-500 text-xs mt-0.5">
            How much of the unlimited access are students actually using?
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {isOverBreakeven && (
            <div className="px-2 py-1 rounded bg-rose-900/60 border border-rose-700 text-rose-300 text-xs font-medium shrink-0">
              Company loses money
            </div>
          )}
          {isLowAttendance && !isOverBreakeven && (
            <div className="px-2 py-1 rounded bg-amber-900/60 border border-amber-700 text-amber-300 text-xs font-medium shrink-0">
              Students underserved
            </div>
          )}
        </div>
      </div>

      {/* Session usage bar with breakeven marker */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>0</span>
          <span className="text-slate-300 font-medium">{dailySessions} / 16 sessions per day</span>
          <span>16 (full)</span>
        </div>
        <div className="h-4 rounded-full bg-slate-800 overflow-hidden relative">
          <div
            className={`h-full rounded-full transition-all duration-300 ${isOverBreakeven ? 'bg-gradient-to-r from-rose-700 to-rose-500' : isLowAttendance ? 'bg-gradient-to-r from-amber-700 to-amber-500' : 'bg-gradient-to-r from-indigo-700 to-indigo-500'}`}
            style={{ width: `${pct.toFixed(1)}%` }}
          />
          {/* Breakeven marker */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white/60"
            style={{ left: `${((breakeven / 16) * 100).toFixed(1)}%` }}
          />
        </div>
        <div className="flex justify-between text-xs mt-1">
          <span className="text-slate-600">Students underserved</span>
          <span className="text-slate-500" style={{ marginLeft: `${((breakeven / 16) * 100).toFixed(0)}%`, transform: 'translateX(-50%)' }}>
            ↑ breakeven ({breakevenRounded})
          </span>
          <span className="text-slate-600">Company loses money</span>
        </div>
      </div>

      {/* Three scenarios */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: 'Full product (16/day)', sessions: 16, note: 'Company bankrupt' },
          { label: `Current (${dailySessions}/day)`, sessions: dailySessions, note: 'Your setting', active: true },
          { label: 'Breakeven (~9/day)', sessions: Math.round(breakeven), note: 'Cost = revenue' },
        ].map(({ label, sessions, note, active }) => {
          const cost = sessions * 30 * (teacherCost / studentsPerSession)
          const isLoss = cost > revenuePerStudentPerMonth
          return (
            <div
              key={label}
              className={`rounded-lg p-3 border text-center ${active ? (isOverBreakeven ? 'border-rose-600 bg-rose-950/40' : 'border-indigo-600 bg-indigo-950/40') : 'border-slate-800 bg-slate-900/40'}`}
            >
              <div className={`text-xs font-medium mb-1 ${active ? (isOverBreakeven ? 'text-rose-300' : 'text-indigo-300') : 'text-slate-500'}`}>{label}</div>
              <div className={`text-sm font-mono font-bold ${isLoss ? 'text-rose-400' : active ? 'text-white' : 'text-slate-400'}`}>
                {formatVND(cost)}<span className="text-xs font-normal text-slate-500">/student</span>
              </div>
              <div className="text-slate-600 text-xs mt-0.5">{note}</div>
            </div>
          )
        })}
      </div>

      {/* Key insight */}
      <div className="rounded-lg border border-amber-800/50 bg-amber-950/20 p-4">
        <div className="text-amber-400 text-xs uppercase tracking-widest font-medium mb-2">The core paradox</div>
        <p className="text-slate-300 text-sm">
          Students paid for <strong className="text-white">unlimited access</strong> to 16 sessions per day.
          The model is viable only if they attend fewer than <strong className="text-white">~{breakevenRounded} sessions per day</strong>.
          Below that: <span className="text-emerald-400">company profits</span>, students are underserved.
          Above that: <span className="text-rose-400">company loses money</span>, students are using what they paid for.
        </p>
      </div>

      {isOverBreakeven && (
        <div className="mt-4 text-rose-400 text-xs leading-relaxed border-t border-rose-900 pt-3">
          <strong>Note:</strong> At {dailySessions} sessions/day, teacher cost per student ({formatVND(teacherCostPerStudentPerMonth)}/month) exceeds
          revenue per student ({formatVND(revenuePerStudentPerMonth)}/month) before any fixed costs. The business cannot sustain this attendance rate.
        </div>
      )}
    </div>
  )
}

export default function FinancialTool() {
  const [newEnrollments, setNewEnrollments] = useState(1000)
  const [dailySessions, setDailySessions] = useState(2)
  const [studentsPerSession, setStudentsPerSession] = useState(25)
  const [teacherCost, setTeacherCost] = useState(210000)
  const [enrollmentPrice, setEnrollmentPrice] = useState(7000000)
  const [fixedCosts, setFixedCosts] = useState(3500000000)

  const calc = useMemo(() => {
    // Active students = new enrollments × 3 months (steady state)
    const activeStudents = newEnrollments * 3
    // Revenue = new enrollments × price (cash received this month)
    const revenue = newEnrollments * enrollmentPrice
    // Sessions running per day = active students attending daily / group size
    const dailyVisits = activeStudents * dailySessions
    const sessionsPerDay = Math.ceil(dailyVisits / studentsPerSession)
    // Monthly teacher cost
    const variableCost = sessionsPerDay * 30 * teacherCost
    const grossProfit = revenue - variableCost
    const netProfit = grossProfit - fixedCosts
    const netMarginPct = revenue > 0 ? (netProfit / revenue) * 100 : 0
    const breakeven = (enrollmentPrice / 3) / (30 * teacherCost / studentsPerSession)
    return { revenue, variableCost, grossProfit, netProfit, netMarginPct, activeStudents, sessionsPerDay, breakeven }
  }, [newEnrollments, dailySessions, studentsPerSession, teacherCost, enrollmentPrice, fixedCosts])

  const isLoss = calc.netProfit < 0
  const isOverBreakeven = dailySessions > calc.breakeven

  return (
    <div className="space-y-8">
      {/* Context banner */}
      <div className="rounded-xl border border-slate-700 bg-slate-900/60 p-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-slate-400 text-xs uppercase tracking-widest font-medium">Real Case Study</div>
          <RedactedBrand compact />
        </div>
        <div className="text-white font-semibold mb-1">English Learning Startup · Vietnam · ca. 2013</div>
        <p className="text-slate-400 text-sm leading-relaxed">
          Students pay <strong className="text-white">7,000,000 VND</strong> for 3 months of unlimited access to{' '}
          <strong className="text-white">16 group sessions per day</strong> (each 60 min, ~25 students + 1 native speaker).
          Teachers are paid <strong className="text-white">210,000 VND per session</strong>.
          Adjust the sliders to see how attendance drives costs — and reveals the ethical trap.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Inputs */}
        <div className="space-y-6">
          <div className="text-slate-300 text-sm font-semibold uppercase tracking-widest border-b border-slate-800 pb-3">
            Adjust Assumptions
          </div>

          <SliderInput
            label="New enrollments this month"
            sublabel="Active students = enrollments × 3 (steady state)"
            value={newEnrollments}
            min={100}
            max={6000}
            step={100}
            onChange={setNewEnrollments}
          />

          <SliderInput
            label="Sessions attended per student per day"
            sublabel={`↑ THE key lever — breakeven is ~${calc.breakeven.toFixed(1)} sessions/day`}
            value={dailySessions}
            min={1}
            max={16}
            step={1}
            onChange={setDailySessions}
            warning={isOverBreakeven}
            highlight={!isOverBreakeven && dailySessions <= 3}
          />

          <SliderInput
            label="Students per session (group size)"
            sublabel="Larger groups = lower cost per student"
            value={studentsPerSession}
            min={10}
            max={50}
            step={5}
            onChange={setStudentsPerSession}
          />

          <SliderInput
            label="Teacher cost per session"
            sublabel="VND paid to native speaker per 60-min group session"
            value={teacherCost}
            min={100000}
            max={500000}
            step={10000}
            onChange={setTeacherCost}
            formatFn={formatVND}
          />

          <SliderInput
            label="Enrollment price (per student)"
            sublabel="VND per 3-month enrollment"
            value={enrollmentPrice}
            min={3000000}
            max={15000000}
            step={500000}
            onChange={setEnrollmentPrice}
            formatFn={formatVND}
          />

          <SliderInput
            label="Fixed costs per month"
            sublabel="Sales team ~3B, office/tech ~500M"
            value={fixedCosts}
            min={500000000}
            max={10000000000}
            step={100000000}
            onChange={setFixedCosts}
            formatFn={formatVND}
          />
        </div>

        {/* Right: Outputs */}
        <div className="space-y-4">
          <div className="text-slate-300 text-sm font-semibold uppercase tracking-widest border-b border-slate-800 pb-3">
            Monthly Projection
          </div>

          {/* Key derived facts */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-500">Active students (enrolled × 3)</span>
              <span className="text-slate-200 font-mono">{calc.activeStudents.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Group sessions running per day</span>
              <span className="text-slate-200 font-mono">{calc.sessionsPerDay.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Breakeven attendance</span>
              <span className="text-amber-300 font-mono">~{calc.breakeven.toFixed(1)} sessions/day</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <MetricCard
              label="Revenue"
              value={formatVND(calc.revenue)}
              color="blue"
              sublabel={`${newEnrollments.toLocaleString()} × ${formatVND(enrollmentPrice)}`}
            />
            <MetricCard
              label="Teacher Cost"
              value={formatVND(calc.variableCost)}
              color="yellow"
              sublabel={`${calc.sessionsPerDay.toLocaleString()} sessions/day × 30d`}
              highlight={isOverBreakeven}
            />
            <MetricCard
              label="Gross Profit"
              value={formatVND(calc.grossProfit)}
              color={calc.grossProfit >= 0 ? 'green' : 'red'}
            />
            <MetricCard
              label="Fixed Costs"
              value={formatVND(fixedCosts)}
              color="yellow"
              sublabel="Sales + office/tech"
            />
          </div>

          {/* Net profit */}
          <div className={`rounded-xl border p-5 text-center ${isLoss ? 'border-rose-700 bg-rose-950/30' : 'border-emerald-700 bg-emerald-950/30'}`}>
            <div className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-2">Net Profit / (Loss)</div>
            <div className={`text-3xl sm:text-4xl font-black font-mono mb-1 ${isLoss ? 'text-rose-400' : 'text-emerald-400'}`}>
              {isLoss ? '(' : ''}{formatVND(Math.abs(calc.netProfit))}{isLoss ? ')' : ''}
            </div>
            <div className={`text-sm font-medium ${isLoss ? 'text-rose-500' : 'text-emerald-500'}`}>
              Net Margin: {calc.netMarginPct.toFixed(1)}%
            </div>
          </div>

          {/* Breakdown bar */}
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <div className="text-slate-400 text-xs uppercase tracking-widest font-medium mb-4">Cost vs Revenue Breakdown</div>
            {[
              { label: 'Revenue', value: calc.revenue, max: Math.max(calc.revenue, calc.variableCost + fixedCosts), color: 'bg-indigo-500' },
              { label: `Teacher Cost (${dailySessions} sessions/day)`, value: calc.variableCost, max: Math.max(calc.revenue, calc.variableCost + fixedCosts), color: 'bg-amber-500' },
              { label: 'Fixed Costs', value: fixedCosts, max: Math.max(calc.revenue, calc.variableCost + fixedCosts), color: 'bg-amber-700' },
              { label: 'Net Profit', value: Math.max(0, calc.netProfit), max: Math.max(calc.revenue, calc.variableCost + fixedCosts), color: 'bg-emerald-500' },
            ].map(({ label, value, max, color }) => (
              <div key={label} className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">{label}</span>
                  <span className="text-slate-300 font-mono">{formatVND(value)}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${color}`}
                    style={{ width: `${Math.min(100, max > 0 ? (value / max) * 100 : 0).toFixed(1)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ethics bar — full width */}
      <EthicsBar
        dailySessions={dailySessions}
        studentsPerSession={studentsPerSession}
        teacherCost={teacherCost}
        enrollmentPrice={enrollmentPrice}
        newEnrollments={newEnrollments}
      />

      {/* Scenario comparison table */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-800">
          <div className="text-slate-200 font-semibold text-sm">Scale Scenarios — All at {dailySessions} Sessions/Day</div>
          <div className="text-slate-500 text-xs mt-0.5">How profitability changes as the business scales</div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left px-6 py-3 text-slate-500 text-xs uppercase tracking-widest font-medium">Enrollments/mo</th>
                <th className="text-right px-4 py-3 text-slate-500 text-xs uppercase tracking-widest font-medium">Revenue</th>
                <th className="text-right px-4 py-3 text-slate-500 text-xs uppercase tracking-widest font-medium">Teacher Cost</th>
                <th className="text-right px-4 py-3 text-slate-500 text-xs uppercase tracking-widest font-medium">Fixed</th>
                <th className="text-right px-6 py-3 text-slate-500 text-xs uppercase tracking-widest font-medium">Net</th>
              </tr>
            </thead>
            <tbody>
              {[100, 1000, 3000, 6000].map(s => {
                const rev = s * enrollmentPrice
                const active = s * 3
                const spd = Math.ceil(active * dailySessions / studentsPerSession)
                const varC = spd * 30 * teacherCost
                const net = rev - varC - fixedCosts
                const isActive = s === newEnrollments
                return (
                  <tr key={s} className={`border-b border-slate-800/50 last:border-0 transition-colors ${isActive ? 'bg-indigo-950/30' : 'hover:bg-slate-800/30'}`}>
                    <td className="px-6 py-3 text-slate-200 font-medium">
                      {s.toLocaleString()}
                      {isActive && <span className="ml-2 text-indigo-400 text-xs">(current)</span>}
                    </td>
                    <td className="px-4 py-3 text-right text-indigo-300 font-mono text-xs">{formatVND(rev)}</td>
                    <td className="px-4 py-3 text-right text-amber-400 font-mono text-xs">{formatVND(varC)}</td>
                    <td className="px-4 py-3 text-right text-amber-600 font-mono text-xs">{formatVND(fixedCosts)}</td>
                    <td className={`px-6 py-3 text-right font-mono text-sm font-bold ${net >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {net < 0 ? '(' : ''}{formatVND(Math.abs(net))}{net < 0 ? ')' : ''}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
