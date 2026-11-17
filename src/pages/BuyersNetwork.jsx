import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import PageHead from '../components/PageHead'
import Img from '../components/Img'
import Faq from '../components/Faq'
import { img } from '../lib/images'

const TYPES = ['Single-family', 'Multifamily (2–4)', 'Condo / Townhome', 'Commercial', 'Land / Lots', 'Other']

const FAQ = [
  ['Does it cost anything to join?', 'No. There are no subscriptions, platform fees or dues. You only pay the agreed price on deals you choose to close.'],
  ['Do I need proof of funds to join?', "No. We'll ask for proof of funds or a hard-money lender letter before we schedule a walkthrough or sign an assignment."],
  ['How often will I get deal alerts?', "Only when a deal matches your criteria and ZIP codes. Most active buyers get 2 to 6 deals a month. We don't send deals that don't match."],
  ['Can I change my criteria or pause alerts?', 'Yes, any time. Reply to any alert or contact us to change your ZIP codes, price range or property types, or to pause alerts.'],
]

export default function BuyersNetwork() {
  usePageTitle('Join the buyers network')
  return (
    <>
      <PageHead crumb="Buyers network" kicker="For cash buyers" title="Join the buyers network">
        Off-market deals that match your markets, budget and criteria, sent to you before they're posted anywhere else.
      </PageHead>

      <section className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <div className="detail">
          <form className="form" onSubmit={preventSubmit}>
            <fieldset className="form-group">
              <legend>Your details</legend>
              <div className="fields">
                <label className="field">
                  <span>Full name</span>
                  <input className="fld" type="text" name="name" autoComplete="name" required />
                </label>
                <label className="field">
                  <span>Company (optional)</span>
                  <input className="fld" type="text" name="company" autoComplete="organization" />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input className="fld" type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
                </label>
                <label className="field">
                  <span>Phone</span>
                  <input className="fld" type="tel" name="phone" autoComplete="tel" required />
                </label>
              </div>
            </fieldset>

            <fieldset className="form-group">
              <legend>What you buy</legend>
              <label className="field">
                <span>Markets (cities or ZIP codes)</span>
                <input className="fld" type="text" name="markets" placeholder="Columbus OH, Indianapolis IN, 30310" required />
              </label>
              <div className="field">
                <span className="label" id="types-label">Property types</span>
                <div className="chips" role="group" aria-labelledby="types-label">
                  {TYPES.map((t, i) => (
                    <label key={t} className="chip">
                      <input type="checkbox" name="types" value={t} defaultChecked={i === 0} />
                      {t}
                    </label>
                  ))}
                </div>
              </div>
              <div className="fields">
                <label className="field">
                  <span>Budget per deal</span>
                  <select className="fld" name="budget" defaultValue="">
                    <option value="" disabled>
                      Select a range
                    </option>
                    <option>Under $100k</option>
                    <option>$100k – $250k</option>
                    <option>$250k – $500k</option>
                    <option>$500k – $1M</option>
                    <option>$1M+</option>
                  </select>
                </label>
                <div className="field">
                  <span className="label" id="funding-label">How you pay</span>
                  <div className="chips" role="radiogroup" aria-labelledby="funding-label">
                    <label className="chip">
                      <input type="radio" name="funding" value="cash" defaultChecked />
                      Cash or hard money
                    </label>
                    <label className="chip">
                      <input type="radio" name="funding" value="financing" />
                      Conventional
                    </label>
                  </div>
                </div>
              </div>
              <label className="field">
                <span>Anything else (optional)</span>
                <textarea
                  className="fld"
                  name="criteria"
                  rows="3"
                  placeholder="Light cosmetic to full gut, 3/2 or larger, $30k+ spread, no flood zones"
                />
              </label>
            </fieldset>

            <fieldset className="form-group">
              <legend>How to reach you</legend>
              <label className="check">
                <input type="checkbox" name="consent_email" defaultChecked />
                <span>
                  <strong>Email</strong>
                  Send deal packets to my inbox as soon as they're under contract.
                </span>
              </label>
              <label className="check">
                <input type="checkbox" name="consent_sms" />
                <span>
                  <strong>Text</strong>
                  Text me about high-spread deals in my ZIP codes.
                </span>
              </label>
            </fieldset>

            <div className="row">
              <button type="submit" className="btn btn-primary">
                Join the network
              </button>
              <span className="small dim">Free. Takes about 2 minutes.</span>
            </div>
          </form>

          <aside className="stack-lg">
            <div className="photo">
              <Img src={img.keys} alt="Investor receiving keys after closing on a wholesale deal" width={1200} height={800} />
            </div>
            <div className="stack">
              <h2 className="h3">Why join</h2>
              <ul className="checks">
                <li>You see matching deals before they're posted publicly.</li>
                <li>Matched to your criteria, ZIP codes and rehab level. Nothing else.</li>
                <li>Every deal sheet includes ARV comps, a line-item repair scope and a walkthrough video.</li>
                <li>Closings go through insured title companies, with earnest money held in escrow.</li>
              </ul>
              <p className="small">1,800+ cash buyers and funds already get deals from us.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="wrap section">
        <div className="split">
          <div className="stack">
            <h2 className="h2">Before you sign up</h2>
            <p>Common questions from buyers.</p>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>

      <section className="wrap section">
        <div className="cta">
          <div className="stack">
            <h2 className="h2">Have a deal to sell?</h2>
            <p className="lead">Wholesalers keep 55% of the assignment fee. Send it over and we'll get started.</p>
          </div>
          <div className="row">
            <Link to="/submit-deal" className="btn btn-primary">
              Submit a deal
            </Link>
            <Link to="/deals" className="btn btn-secondary">
              Browse deals
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
