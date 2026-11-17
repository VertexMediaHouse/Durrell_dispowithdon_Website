import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import PageHead from '../components/PageHead'
import Img from '../components/Img'
import DealCard from '../components/DealCard'
import DealTicket from '../components/DealTicket'
import { img } from '../lib/images'
import { deals, money, spread } from '../lib/deals'

const deal = deals[0]

const COMPS = [
  ['1182 Oakwood Ave', '3 / 2', '1,380', '$238,000', 'Aug 2026'],
  ['1240 Elm Park Dr', '3 / 2', '1,510', '$244,500', 'Jul 2026'],
  ['987 Hamlet St', '3 / 1.5', '1,350', '$226,000', 'Jun 2026'],
]

export default function DealDetail() {
  usePageTitle(deal.name)
  return (
    <>
      <PageHead crumb={deal.name} trail={[['Deals', '/deals']]} kicker="Available · Single-family · Light to medium rehab" title={deal.name}>
        1214 Oakwood Avenue, Columbus, OH 43206. Asking <strong className="num">{money(deal.asking)}</strong>.
      </PageHead>

      <section className="wrap">
        <div className="gallery">
          <div className="photo">
            <Img src={img.craftsman} alt="Front of the Oakwood Craftsman with its covered porch and gabled roof" width={1400} height={1000} priority />
          </div>
          <div className="photo">
            <Img src={img.kitchen} alt="Kitchen with wood cabinets and stainless steel appliances" width={900} height={700} />
          </div>
          <div className="photo">
            <Img src={img.living} alt="Living room with hardwood floors and light from the front windows" width={900} height={700} />
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="detail">
          <div className="stack-lg">
            <dl className="facts">
              <div><dt>Asking price</dt><dd>{money(deal.asking)}</dd></div>
              <div><dt>Estimated ARV</dt><dd>{money(deal.arv)}</dd></div>
              <div><dt>Repair estimate</dt><dd>{money(deal.repairs)}</dd></div>
              <div><dt>Gross spread</dt><dd className="accent">{money(spread(deal))}</dd></div>
              <div><dt>Beds / baths</dt><dd>3 / 2</dd></div>
              <div><dt>Living area</dt><dd>1,420 sq ft</dd></div>
              <div><dt>Year built</dt><dd>1948</dd></div>
              <div><dt>Lot size</dt><dd>0.17 ac</dd></div>
            </dl>

            <div className="stack">
              <h2 className="h3">About this deal</h2>
              <p>
                A 1948 craftsman on a quiet, tree-lined street in Merion Village, minutes from German Village and downtown
                Columbus. The roof is newer, the HVAC has been serviced and the unfinished basement has clean walls. It
                needs a cosmetic refresh, plus a few extras, to hit ARV. Renovated homes on the same block are selling in
                under 30 days.
              </p>
            </div>

            <div className="stack">
              <h2 className="h3">Repair scope</h2>
              <ul className="checks">
                <li>Full interior paint and LVP flooring</li>
                <li>Kitchen refresh: cabinets, counters, appliances</li>
                <li>Two bathroom updates</li>
                <li>Roof is 6 years old, no work needed</li>
                <li>HVAC serviced in 2025; water heater needs replacing</li>
                <li>Minor exterior trim and landscaping</li>
              </ul>
            </div>

            <div className="stack">
              <h2 className="h3">Comparable sales</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th scope="col">Address</th>
                      <th scope="col">Bd / Ba</th>
                      <th scope="col">Sq ft</th>
                      <th scope="col">Sold price</th>
                      <th scope="col">Sold</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPS.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <aside className="stack-lg">
            <DealTicket deal={deal} tag="DWD-1214" />
            <form className="card form" onSubmit={preventSubmit} style={{ gap: 20 }}>
              <div>
                <h2 className="h3">Request a walkthrough</h2>
                <p className="small">We need proof of funds before we schedule access.</p>
              </div>
              <label className="field">
                <span>Full name</span>
                <input className="fld" type="text" name="name" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input className="fld" type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
              </label>
              <label className="field">
                <span>Phone</span>
                <input className="fld" type="tel" name="phone" autoComplete="tel" required />
              </label>
              <label className="field">
                <span>Your offer (optional)</span>
                <span className="money">
                  $<input type="text" inputMode="numeric" name="offer" placeholder="145,000" />
                </span>
              </label>
              <label className="drop">
                <strong>Upload proof of funds</strong>
                <span className="small dim">PDF, bank letter or statement</span>
                <input className="sr" type="file" name="pof" accept="application/pdf,image/*" />
              </label>
              <button type="submit" className="btn btn-primary btn-block">
                Request walkthrough
              </button>
            </form>
            <p className="small">
              Questions about this deal? Call Don at{' '}
              <a href="tel:5553184720" className="link">
                (555) 318-4720
              </a>
              .
            </p>
          </aside>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2 className="h2">Similar deals</h2>
          <Link to="/deals" className="link">
            View all deals
          </Link>
        </div>
        <div className="grid cols-3">
          {deals.slice(1, 4).map((d) => (
            <DealCard key={d.slug} deal={d} />
          ))}
        </div>
      </section>
    </>
  )
}
