import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import PageHead from '../components/PageHead'

const MONEY = [
  ['contract_price', 'Your contract price', '120,000', true],
  ['buyer_price', 'Target buyer price', '148,500', true],
  ['arv', 'Estimated ARV (optional)', '235,000', false],
  ['repairs', 'Estimated repairs (optional)', '38,000', false],
]

export default function SubmitDeal() {
  usePageTitle('Submit a deal')
  return (
    <>
      <PageHead crumb="Submit a deal" kicker="For wholesalers" title="Submit a deal">
        Send us the details. We review every submission within 4 business hours and call or text you back.
      </PageHead>

      <section className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <div className="detail">
          <form className="form" onSubmit={preventSubmit}>
            <fieldset className="form-group">
              <legend>Your contact details</legend>
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
                  <span>Phone</span>
                  <input className="fld" type="tel" name="phone" autoComplete="tel" required />
                </label>
                <label className="field">
                  <span>Email</span>
                  <input className="fld" type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
                </label>
              </div>
            </fieldset>

            <fieldset className="form-group">
              <legend>The property</legend>
              <label className="field">
                <span>Street address</span>
                <input
                  className="fld"
                  type="text"
                  name="address"
                  placeholder="1214 Oakwood Ave, Columbus, OH 43206"
                  autoComplete="street-address"
                  required
                />
              </label>
              <div className="fields">
                <label className="field">
                  <span>Property type</span>
                  <select className="fld" name="asset_type" defaultValue="" required>
                    <option value="" disabled>
                      Select one
                    </option>
                    <option>Single-family</option>
                    <option>Multifamily (2–4 units)</option>
                    <option>Multifamily (5+ units)</option>
                    <option>Condo / Townhome</option>
                    <option>Land / Lot</option>
                    <option>Commercial</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="field">
                  <span>Closing deadline</span>
                  <input className="fld" type="date" name="closing_deadline" required />
                </label>
              </div>
            </fieldset>

            <fieldset className="form-group">
              <legend>The numbers</legend>
              <div className="fields">
                {MONEY.map(([name, label, placeholder, required]) => (
                  <label key={name} className="field">
                    <span>{label}</span>
                    <span className="money">
                      $<input type="text" inputMode="numeric" name={name} placeholder={placeholder} required={required} />
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="form-group">
              <legend>Photos and contract</legend>
              <div className="fields">
                <label className="drop">
                  <strong>Property photos</strong>
                  <span className="small dim">JPG, PNG or HEIC</span>
                  <input className="sr" type="file" name="photos" accept="image/*" multiple />
                </label>
                <label className="drop">
                  <strong>Purchase contract (optional)</strong>
                  <span className="small dim">Signed agreement, PDF</span>
                  <input className="sr" type="file" name="contract" accept="application/pdf" />
                </label>
              </div>
            </fieldset>

            <fieldset className="form-group">
              <legend>Confirm</legend>
              <label className="check">
                <input type="checkbox" name="contract_interest" required />
                <span>
                  I or my company hold a valid, signed purchase agreement and equitable interest in this property.
                </span>
              </label>
              <label className="check">
                <input type="checkbox" name="authority" required />
                <span>
                  I authorize Dispo With Don to market this deal to its cash buyers, exclusively or as a co-dispo.
                </span>
              </label>
              <label className="check">
                <input type="checkbox" name="split" required />
                <span>
                  I agree to the 55/45 assignment fee split (55% to me, 45% to Dispo With Don), paid at title.
                </span>
              </label>
            </fieldset>

            <div>
              <button type="submit" className="btn btn-primary">
                Submit deal
              </button>
            </div>
          </form>

          <aside className="card stack-lg">
            <div className="stack">
              <h2 className="h3">Your share: 55%</h2>
              <div className="bar" aria-hidden="true">
                <span />
                <span />
              </div>
              <ul className="checks small">
                <li>No upfront fees. We get paid when you close.</li>
                <li>Your buyer and seller relationships stay yours.</li>
                <li>Your payout is wired from title at closing.</li>
              </ul>
            </div>
            <div className="stack">
              <h2 className="h3">What happens next</h2>
              <ol className="steps" style={{ gridTemplateColumns: '1fr', gap: 20 }}>
                <li>
                  <p>We check your numbers and call you back.</p>
                </li>
                <li>
                  <p>We send the deal to cash buyers who buy in that area.</p>
                </li>
                <li>
                  <p>We collect earnest money, sign the assignment and work with title.</p>
                </li>
              </ol>
            </div>
            <p className="small">We only share your contract and property details with verified cash buyers.</p>
          </aside>
        </div>
      </section>
    </>
  )
}
