import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import PageHead from '../components/PageHead'
import Img from '../components/Img'
import FeeSplitCalculator from '../components/FeeSplitCalculator'
import { img } from '../lib/images'

const SERVICES = [
  {
    title: 'Dispositions',
    body: 'You bring the contract. We take it to market, handle the buyers and get it to a signed assignment, so you can get back to finding the next deal.',
    points: ['An honest pricing review before anything goes out', 'Assignment terms negotiated for you', 'Weekly updates until it signs'],
    src: img.handshake,
    alt: 'Matching a wholesale contract with a cash buyer',
  },
  {
    title: 'Buyer outreach',
    body: 'Your deal goes to cash buyers who already buy in that market, at that price and with that much rehab. Not to a list of 50,000 strangers.',
    points: ['1,800+ buyers, tracked by what they actually close', 'Targeted email and text sends', 'Direct calls to top buyers on hot deals'],
    src: img.phone_call,
    alt: 'Calling verified cash buyers about a new deal',
  },
  {
    title: 'Deal marketing',
    body: 'Buyers decide in minutes. We put together what they need to say yes: photos, a walkthrough video and a deal sheet that opens with the numbers.',
    points: ['Professional photos and walkthrough video', 'One-page deal sheet with ARV, repairs and comps', 'Listed on our Available Deals page'],
    src: img.marketing,
    alt: 'Marketing materials and comparable sales for a deal launch',
  },
  {
    title: 'Transaction coordination',
    body: 'Deals usually fall apart after the handshake. We track title, earnest money, signatures and deadlines until your fee is paid out.',
    points: ['Title and escrow coordination', 'Earnest money and deadline tracking', 'One person to call through closing'],
    src: img.signing,
    alt: 'Reviewing closing paperwork with a title company',
  },
]

export default function Services() {
  usePageTitle('Services')
  return (
    <>
      <PageHead crumb="Services" kicker="What we do" title="Services">
        Everything from the signed contract to a funded closing, handled by one team with one point of contact.
      </PageHead>

      <section className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <div className="stack-lg" style={{ gap: 'var(--section)' }}>
          {SERVICES.map((s, i) => (
            <div key={s.title} className="split center">
              <div className="stack" style={{ order: i % 2 }}>
                <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="h2">{s.title}</h2>
                <p className="lead">{s.body}</p>
                <ul className="checks">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
              <div className="svc-photo">
                <div className="photo">
                <Img src={s.src} alt={s.alt} width={1200} height={900} priority={i === 0} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <div>
            <span className="kicker">The process</span>
            <h2 className="h2">Four steps, one point of contact</h2>
          </div>
        </div>
        <ol className="steps">
          <li>
            <h3 className="h3">Submit</h3>
            <p>Send the address, your contract price, your target buyer price and photos. It takes about two minutes.</p>
          </li>
          <li>
            <h3 className="h3">Review</h3>
            <p>Same day, we send back our honest read on value, the comps we checked and a plan for marketing it.</p>
          </li>
          <li>
            <h3 className="h3">Market</h3>
            <p>The deal goes to the buyers in our network who buy in that area and that property type.</p>
          </li>
          <li>
            <h3 className="h3">Close</h3>
            <p>We collect earnest money, sign the assignment and work with title through funding and your payout.</p>
          </li>
        </ol>
      </section>

      <section className="wrap section">
        <div className="split center">
          <div className="stack">
            <span className="kicker">Pricing</span>
            <h2 className="h2">55% of the fee is yours</h2>
            <p className="lead">No upfront fees, retainers or hidden costs. We get paid at closing, from the assignment fee.</p>
          </div>
          <FeeSplitCalculator />
        </div>
      </section>

      <section className="wrap section">
        <div className="cta-panel textured"><div className="cta">
          <div className="stack">
            <h2 className="h2">Ready to move your deal?</h2>
            <p className="lead">Send it over today. We'll tell you honestly what we think of the price, the rehab and buyer demand.</p>
          </div>
          <div className="row">
            <Link to="/submit-deal" className="btn btn-primary">
              Submit a deal
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
