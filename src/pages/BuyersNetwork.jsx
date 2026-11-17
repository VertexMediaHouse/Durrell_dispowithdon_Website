import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import PageHead from '../components/PageHead'
import Img from '../components/Img'
import Faq from '../components/Faq'
import DealTicket from '../components/DealTicket'
import { img } from '../lib/images'
import { deals } from '../lib/deals'

const TYPES = ['Single-family', 'Multifamily (2–4)', 'Condo / Townhome', 'Commercial', 'Land / Lots', 'Other']

const PERKS = [
  [
    'First look, before the list',
    'Matching deals reach you while they are still off-market. Public listings on our Deals page go out days later, after our buyers have passed.',
    '2-6',
    'matched deals a month for active buyers',
  ],
  [
    'Matched, not blasted',
    'Alerts are filtered by your ZIP codes, price band, property type and rehab appetite. If it does not match, you never see it.',
    '0',
    'untargeted blasts to your inbox',
  ],
  [
    'Numbers you can check',
    'Every deal sheet carries ARV comps, a line-item repair scope, a walkthrough video and the title company already lined up.',
    '100%',
    'of deals sent with comps and scope',
  ],
]

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
        <dl className="stats">
          <div>
            <dt>Cash buyers and funds</dt>
            <dd>1,800+</dd>
          </div>
          <div>
            <dt>Active markets</dt>
            <dd>7</dd>
          </div>
          <div>
            <dt>Median days to assign</dt>
            <dd>12</dd>
          </div>
          <div>
            <dt>Cost to join</dt>
            <dd>$0</dd>
          </div>
        </dl>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <div>
            <span className="kicker">What you get</span>
            <h2 className="h2">Deal flow worth opening</h2>
          </div>
          <p style={{ maxWidth: '40ch' }}>
            We would rather send you four deals you can close than forty you delete.
          </p>
        </div>
        <ol className="principles">
          {PERKS.map(([title, body, figure, caption]) => (
            <li key={title} className="principle">
              <h3 className="h3">{title}</h3>
              <p>{body}</p>
              <div className="principle-proof">
                <strong>{figure}</strong>
                <span>{caption}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="band section">
        <div className="wrap split center">
          <div className="stack">
            <span className="kicker">A typical alert</span>
            <h2 className="h2">This is what lands in your inbox</h2>
            <p className="lead">
              Address, asking price, ARV, a line-item repair scope and the spread, on one page. If the numbers work, you
              reply and we schedule the walkthrough.
            </p>
            <ul className="checks">
              <li>Comps pulled within the last 90 days, with addresses</li>
              <li>Repair scope priced line by line, not a single lump sum</li>
              <li>Walkthrough video, so you can send a contractor before you drive</li>
              <li>Insured title company and escrow named up front</li>
            </ul>
          </div>
          <DealTicket deal={deals[0]} tag="ALERT-0417" />
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <div>
            <span className="kicker">Sign up</span>
            <h2 className="h2">Tell us what you buy</h2>
          </div>
          <p style={{ maxWidth: '40ch' }}>
            Takes about two minutes. The more specific your criteria, the fewer irrelevant alerts you get.
          </p>
        </div>

        <div className="detail">
          <form className="form card" onSubmit={preventSubmit} style={{ padding: 'clamp(24px, 3vw, 40px)' }}>
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

          <aside className="stack-lg sticky-aside">
            <div className="photo">
              <Img src={img.keys} alt="Investor receiving keys after closing on a wholesale deal" width={1200} height={800} />
            </div>
            <div className="stack">
              <span className="kicker">After you join</span>
              <ol className="steps" style={{ gridTemplateColumns: '1fr', gap: 20 }}>
                <li>
                  <span className="step-meta">Same day</span>
                  <h3 className="h3">We confirm your criteria</h3>
                  <p>Kayla calls to check your markets, price band and rehab appetite before any alert goes out.</p>
                </li>
                <li>
                  <span className="step-meta">Within a week</span>
                  <h3 className="h3">First matching deals</h3>
                  <p>You get full deal sheets, not teasers. Reply to the ones you want to walk.</p>
                </li>
                <li>
                  <span className="step-meta">On offer</span>
                  <h3 className="h3">Proof of funds, then access</h3>
                  <p>Send proof of funds or a lender letter and we schedule the walkthrough and the assignment.</p>
                </li>
              </ol>
            </div>
            <p className="small dim">
              Already have a deal under contract?{' '}
              <Link to="/submit-deal" className="link">
                Submit it instead
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>

      <section className="wrap section">
        <div className="split">
          <div className="stack">
            <span className="kicker">FAQ</span>
            <h2 className="h2">Before you sign up</h2>
            <p>
              Common questions from buyers. Anything else, call Don at{' '}
              <a href="tel:5553184720" className="link">
                (555) 318-4720
              </a>
              .
            </p>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>

      <section className="wrap section">
        <div className="cta-panel textured"><div className="cta">
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
        </div></div>
      </section>
    </>
  )
}
