import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import PageHead from '../components/PageHead'
import DealCard from '../components/DealCard'
import { deals, spread } from '../lib/deals'

const FILTERS = [
  ['All', () => true],
  ['Single-family', (d) => d.type === 'Single-family'],
  ['Multifamily', (d) => d.type === 'Multifamily'],
  ['Condo', (d) => d.type === 'Condo'],
  ['Spread over $45k', (d) => spread(d) > 45000],
]

export default function Deals() {
  usePageTitle('Available deals')
  const [active, setActive] = useState('All')
  const shown = deals.filter(FILTERS.find(([label]) => label === active)[1])

  return (
    <>
      <PageHead crumb="Deals" kicker="Inventory" title="Available deals">
        Contracted, off-market deals with the repair scope and comps included. We need proof of funds before we schedule
        a walkthrough.
      </PageHead>

      <section className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <div className="section-head" style={{ marginBottom: 28 }}>
          <div className="filters" role="group" aria-label="Filter deals">
            {FILTERS.map(([label, test]) => (
              <button
                key={label}
                type="button"
                className="filter"
                aria-pressed={active === label}
                onClick={() => setActive(label)}
              >
                {label} <span className="dim">{deals.filter(test).length}</span>
              </button>
            ))}
          </div>
          <p className="small" aria-live="polite">
            Showing {shown.length} of {deals.length} deals
          </p>
        </div>
        <div className="grid cols-3" style={{ rowGap: 48 }}>
          {shown.map((d, i) => (
            <DealCard key={d.slug} deal={d} priority={i < 3} />
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="cta-panel textured"><div className="cta">
          <div className="stack">
            <h2 className="h2">See new deals first</h2>
            <p className="lead">Registered buyers get matching deals by email or text before they're posted here.</p>
          </div>
          <div className="row">
            <Link to="/buyers-network" className="btn btn-primary">
              Join the buyers network
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Talk to Don
            </Link>
          </div>
        </div></div>
      </section>
    </>
  )
}
