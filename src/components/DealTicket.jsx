import { money, spread } from '../lib/deals'

// A printed deal sheet, torn along the perforation above the spread.
export default function DealTicket({ deal: d, tag = "DWD-1041" }) {
  return (
    <div className="ticket">
      <div className="ticket-top">
        <div className="ticket-head">
          <span>Deal sheet</span>
          <span>{tag}</span>
        </div>
        <p className="ticket-title">{d.name}</p>
        <div className="ticket-row">
          <span>Market</span>
          <i aria-hidden="true" />
          <span>{d.city}</span>
        </div>
        <div className="ticket-row">
          <span>Asking</span>
          <i aria-hidden="true" />
          <span>{money(d.asking)}</span>
        </div>
        <div className="ticket-row">
          <span>ARV</span>
          <i aria-hidden="true" />
          <span>{money(d.arv)}</span>
        </div>
        <div className="ticket-row">
          <span>Repairs</span>
          <i aria-hidden="true" />
          <span>{money(d.repairs)}</span>
        </div>
      </div>
      <div className="ticket-tear" aria-hidden="true" />
      <div className="ticket-foot">
        <span>Spread</span>
        <strong>{money(spread(d))}</strong>
      </div>
    </div>
  )
}
