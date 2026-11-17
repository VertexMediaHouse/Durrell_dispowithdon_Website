import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import PageHead from '../components/PageHead'
import Img from '../components/Img'
import { img } from '../lib/images'

const TEAM = [
  ['Durrell “Don” W.', 'Founder, dispositions', img.portrait_m],
  ['Kayla Brooks', 'Buyer relations', img.portrait_w],
  ['Andre Mitchell', 'Deal marketing', img.portrait_m2],
  ['Priya Nair', 'Transaction coordination', img.portrait_w2],
]

export default function About() {
  usePageTitle('About')
  return (
    <>
      <PageHead crumb="About" kicker="About us" title="Built for wholesalers who'd rather find deals than chase buyers" />

      <section className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <div className="split">
          <div className="photo">
              <Img src={img.team_mtg} alt="The Dispo With Don team going over active deals" width={1200} height={900} priority />
            </div>
          <div className="stack">
            <h2 className="h2">A contract isn't a deal until someone closes on it</h2>
            <p>
              Don started Dispo With Don after years of watching good wholesale contracts die at the disposition stage.
              They weren't bad deals. They went to the wrong list, with a repair scope nobody could check, on a timeline
              that ran out.
            </p>
            <p>
              So he built the opposite: honest numbers up front, buyers ranked by who actually closes, and someone keeping
              the deal on track after the handshake. Today the team works deals across the Midwest and Southeast, and
              wholesalers keep the bigger share of every fee.
            </p>
            <div className="row" style={{ marginTop: 8 }}>
              <Link to="/submit-deal" className="btn btn-primary">
                Submit a deal
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Don
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <dl className="stats">
          <div><dt>Verified cash buyers</dt><dd>1,800+</dd></div>
          <div><dt>Deals assigned since 2019</dt><dd>340+</dd></div>
          <div><dt>Median days to assign</dt><dd>12</dd></div>
          <div><dt>Full-time team members</dt><dd>8</dd></div>
        </dl>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2 className="h2">How we work</h2>
        </div>
        <div className="grid cols-3" style={{ gap: 40 }}>
          <div className="stack">
            <h3 className="h3">Straight about the numbers</h3>
            <p>
              If the ARV is unrealistic or the spread is too tight, we tell you before we market it, not after your
              inspection period runs out.
            </p>
          </div>
          <div className="stack">
            <h3 className="h3">Buyers who close</h3>
            <p>We rank buyers by the deals they've actually closed. Buyers who back out or renegotiate get dropped.</p>
          </div>
          <div className="stack">
            <h3 className="h3">One person on your deal</h3>
            <p>From the first upload until title confirms the wire, you deal with one manager who knows your file.</p>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2 className="h2">The team</h2>
          <p style={{ maxWidth: '44ch' }}>Underwriting, marketing, buyer outreach and escrow coordination, all under one roof.</p>
        </div>
        <div className="grid cols-4">
          {TEAM.map(([name, role, src]) => (
            <figure key={name} className="stack" style={{ gap: 12 }}>
              <div className="photo square">
                <Img src={src} alt={`Portrait of ${name}`} width={800} height={800} />
              </div>
              <figcaption>
                <strong>{name}</strong>
                <p className="small">{role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <blockquote className="quote">
          <p>
            “Don told me straight that my ARV was high. He repriced it and had three offers in four days. That honesty is
            why I send him every deal I lock up.”
          </p>
          <footer>
            <cite>Tasha Reynolds</cite>, wholesaler, Indianapolis, IN
          </footer>
        </blockquote>
      </section>

      <section className="wrap section">
        <div className="cta">
          <div className="stack">
            <h2 className="h2">Let's move your next deal</h2>
            <p className="lead">Send it over and hear back the same business day.</p>
          </div>
          <div className="row">
            <Link to="/submit-deal" className="btn btn-primary">
              Submit a deal
            </Link>
            <Link to="/buyers-network" className="btn btn-secondary">
              Join the buyers network
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
