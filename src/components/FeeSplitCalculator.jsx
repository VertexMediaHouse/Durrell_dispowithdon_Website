import { useState } from 'react'
import { money } from '../lib/deals'

const PRESETS = [10000, 15000, 20000, 30000, 50000]

export default function FeeSplitCalculator() {
  const [fee, setFee] = useState(20000)
  const yours = Math.round(fee * 0.55)
  const ours = fee - yours
  const extra = yours - Math.round(fee * 0.5)

  return (
    <div className="card calc">
      <div>
        <h3 className="h3">What you keep</h3>
        <p className="small">Pick an assignment fee to see the 55/45 split.</p>
      </div>

      <div className="filters" role="group" aria-label="Assignment fee presets">
        {PRESETS.map((amount) => (
          <button
            key={amount}
            type="button"
            className="filter num"
            aria-pressed={fee === amount}
            onClick={() => setFee(amount)}
          >
            {money(amount)}
          </button>
        ))}
      </div>

      <label className="field">
        <span>
          Assignment fee: <strong className="num">{money(fee)}</strong>
        </span>
        <input
          type="range"
          min="5000"
          max="80000"
          step="1000"
          value={fee}
          onChange={(e) => setFee(Number(e.target.value))}
        />
      </label>

      <dl className="calc-out">
        <div>
          <dt className="small">You (55%)</dt>
          <dd className="accent">{money(yours)}</dd>
          <dd>{money(extra)} more than a 50/50 split</dd>
        </div>
        <div>
          <dt className="small">Dispo With Don (45%)</dt>
          <dd>{money(ours)}</dd>
          <dd>Covers marketing, buyer outreach and coordination</dd>
        </div>
      </dl>

      <div className="bar" aria-hidden="true">
        <span />
        <span />
      </div>
    </div>
  )
}
