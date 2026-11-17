import { useId, useState } from 'react'
import { money } from '../lib/deals'

const PRESETS = [10000, 15000, 20000, 30000, 50000]

// Printed payout slip: pick an assignment fee, the slip prints your 55% below the tear line.
export default function PayoutTicket() {
  const [fee, setFee] = useState(20000)
  const id = useId()
  const yours = Math.round(fee * 0.55)
  const ours = fee - yours
  const extra = yours - Math.round(fee * 0.5)

  return (
    <div className="payout">
      <div className="ticket">
        <div className="ticket-top">
          <div className="ticket-head">
            <span>Payout slip</span>
            <span>DWD-{String(Math.round(fee / 1000)).padStart(3, '0')}</span>
          </div>
          <p className="ticket-title">Assignment fee</p>
          <div className="ticket-row">
            <span>Fee collected</span>
            <i aria-hidden="true" />
            <span>{money(fee)}</span>
          </div>
          <div className="ticket-row">
            <span>Your share</span>
            <i aria-hidden="true" />
            <span>55%</span>
          </div>
          <div className="ticket-row">
            <span>Dispo With Don</span>
            <i aria-hidden="true" />
            <span>{money(ours)}</span>
          </div>
          <div className="ticket-row">
            <span>Upfront cost</span>
            <i aria-hidden="true" />
            <span>$0.00</span>
          </div>
        </div>
        <div className="ticket-tear" aria-hidden="true" />
        <div className="ticket-foot">
          <span>You keep</span>
          <strong>{money(yours)}</strong>
        </div>
      </div>

      <div className="payout-controls">
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
        <label className="field" htmlFor={id}>
          <span>
            Assignment fee: <strong className="num">{money(fee)}</strong>
          </span>
          <input
            id={id}
            type="range"
            min="5000"
            max="80000"
            step="1000"
            value={fee}
            onChange={(e) => setFee(Number(e.target.value))}
          />
        </label>
        <p className="payout-note">
          <strong className="num">{money(extra)}</strong> more than a 50/50 split, and nothing is owed unless the deal
          closes.
        </p>
      </div>
    </div>
  )
}
