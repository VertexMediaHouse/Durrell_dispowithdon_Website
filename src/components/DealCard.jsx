import { Link } from 'react-router-dom'
import Img from './Img'
import { money, spread } from '../lib/deals'

// ponytail: every card links to the one detail page that exists; route by d.slug once each deal has its own page.
export default function DealCard({ deal: d, priority }) {
  return (
    <Link to="/deals/oakwood-craftsman" className="deal">
      <div className="photo">
        <Img src={d.img} alt={d.alt} width={1200} height={900} priority={priority} />
        <span className="tag">{d.status}</span>
        <span className="spread-tab">{money(spread(d))} spread</span>
      </div>
      <div>
        <div className="deal-title">
          <h3 className="h3">{d.name}</h3>
          <span className="deal-go" aria-hidden="true">
            →
          </span>
        </div>
        <p className="deal-meta">
          {d.city} · {d.beds} bd · {d.baths} ba · {d.sqft.toLocaleString()} sq ft
        </p>
      </div>
      <dl className="deal-figs">
        <div>
          <dt>Asking</dt>
          <dd>{money(d.asking)}</dd>
        </div>
        <div>
          <dt>ARV</dt>
          <dd>{money(d.arv)}</dd>
        </div>
        <div>
          <dt>Repairs</dt>
          <dd>{money(d.repairs)}</dd>
        </div>
      </dl>
    </Link>
  )
}
