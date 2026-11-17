import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import Img from '../components/Img'
import DealCard from '../components/DealCard'
import DealTicket from '../components/DealTicket'
import FeeSplitCalculator from '../components/FeeSplitCalculator'
import Faq from '../components/Faq'
import { img } from '../lib/images'
import { deals } from '../lib/deals'

const MARKETS = ['Columbus', 'Indianapolis', 'Charlotte', 'Atlanta', 'Memphis', 'Cleveland', 'Louisville']

const SERVICES = [
  ['01', img.handshake, 'Dispositions', 'We take your contracted deal to market and get it to a signed assignment.', 'Shaking hands over a closed wholesale deal'],
  ['02', img.phone_call, 'Buyer outreach', 'We send it to verified cash buyers who match the market, price and property type.', 'Calling a cash buyer about a new deal'],
  ['03', img.marketing, 'Deal marketing', 'Photos, a walkthrough video and a deal sheet that opens with the numbers.', 'Property flyers and deal sheets on a desk'],
]

const FAQ = [
  [
    'How is the assignment fee split?',
    'You keep 55% of the assignment fee and we keep 45%. We put that in writing before we market anything.',
  ],
  [
    'Do I need the property under contract first?',
    "Yes. We only market contracted deals with assignment rights in place. If you're still negotiating with the seller, call us and we'll tell you whether your numbers will work for our buyers.",
  ],
  [
    'Which markets do you work in?',
    'Our buyers are nationwide. Most of them buy in the Midwest and Southeast: Columbus, Indianapolis, Charlotte, Atlanta, Memphis and Cleveland.',
  ],
  [
    'How fast do deals usually assign?',
    'A light-rehab deal priced at market usually assigns in 5 to 8 business days. Across our 340+ deals, the median is 12 days to a signed assignment.',
  ],
]

export default function Home() {
  usePageTitle('Disposition services for wholesalers')
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="wrap hero textured" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Decorative background layers */}
        <div className="dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
        <div className="glow-orb" aria-hidden="true" style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', zIndex: 0, pointerEvents: 'none' }} />
        <div className="glow-orb-blue" aria-hidden="true" style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: '400px', height: '400px', zIndex: 0, pointerEvents: 'none' }} />

        <div className="hero-grid" style={{ position: 'relative', zIndex: 1 }}>
          <div className="stack-lg">
            <span className="kicker">Dispositions for wholesalers</span>
            <h1 className="h1">
              You lock it up.
              <br />
              <span className="soft gradient-text">We help move it.</span>
            </h1>
            <p className="lead">
              We check your numbers, send the deal to cash buyers who close, and keep title on schedule until funding. You
              keep 55% of the assignment fee.
            </p>
            <div className="row">
              <Link to="/submit-deal" className="btn btn-primary btn-shine btn-pulse">
                Submit a deal
              </Link>
              <Link to="/deals" className="btn btn-secondary btn-shine">
                Browse deals
              </Link>
            </div>
            <div className="markets" aria-label="Active markets" style={{ position: 'relative' }}>
              {MARKETS.map((m) => (
                <span key={m}>{m}</span>
              ))}
              <div className="float-badge" aria-hidden="true" style={{ position: 'absolute', top: '-28px', right: '-12px' }}>
                7 markets
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo corner-marks" style={{ position: 'relative' }}>
              <Img
                src={img.craftsman}
                alt="Front of the Oakwood Craftsman, a wholesale deal in Columbus, Ohio"
                width={1200}
                height={1500}
                priority
              />
              <div className="photo-vignette" aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
              <span className="hero-badge">
                <i aria-hidden="true" />
                18 live deals
              </span>
            </div>
            <DealTicket deal={deals[0]} />
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="wrap section" style={{ position: 'relative' }}>
        <div className="accent-line" aria-hidden="true" />
        <dl className="stats corner-marks" style={{ position: 'relative' }}>
          <div className="reveal-up stagger-1">
            <dt>Verified cash buyers</dt>
            <dd className="gradient-text">1,800+</dd>
          </div>
          <div className="reveal-up stagger-2">
            <dt>Deals assigned since 2019</dt>
            <dd className="gradient-text">340+</dd>
          </div>
          <div className="reveal-up stagger-3">
            <dt>Median days to assign</dt>
            <dd className="gradient-text">12</dd>
          </div>
          <div className="reveal-up stagger-4">
            <dt>Fee split, in your favor</dt>
            <dd className="gradient-text">55/45</dd>
          </div>
        </dl>
        <div className="accent-line" aria-hidden="true" />
      </section>

      {/* ─── AVAILABLE DEALS ─── */}
      <section className="wrap section section-decorated" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" aria-hidden="true" style={{ position: 'absolute', top: '20%', left: '-10%', width: '450px', height: '450px', zIndex: 0, pointerEvents: 'none' }} />
        <div className="section-head" style={{ position: 'relative', zIndex: 1 }}>
          <div>
            <span className="kicker">
              <span aria-hidden="true" style={{ marginRight: '8px', opacity: 0.5 }}>◆</span>
              Available deals
              <span aria-hidden="true" style={{ marginLeft: '8px', opacity: 0.5 }}>◆</span>
            </span>
            <h2 className="h2 bracket-heading">Off-market and ready to assign</h2>
          </div>
          <Link to="/deals" className="link btn-arrow-slide">
            View all deals
          </Link>
        </div>
        <div className="grid cols-3" style={{ position: 'relative', zIndex: 1 }}>
          {deals.slice(0, 3).map((d, i) => (
            <div key={d.slug} className={`reveal-up stagger-${i + 1} hover-tilt`}>
              <DealCard deal={d} />
            </div>
          ))}
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="wrap section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="dot-grid" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
        <div className="section-head" style={{ position: 'relative', zIndex: 1 }}>
          <div>
            <span className="kicker">How it works</span>
            <h2 className="h2 bracket-heading">From contract to closing</h2>
          </div>
          <p style={{ maxWidth: '44ch' }}>
            We review every deal honestly, market it to the right buyers, and give you one person to call about it.
          </p>
        </div>
        <ol className="steps" style={{ position: 'relative', zIndex: 1 }}>
          <li className="reveal-up stagger-1" style={{ position: 'relative' }}>
            <span className="step-meta">Day 0</span>
            <h3 className="h3">Submit</h3>
            <p>Send the address, your numbers, photos and the closing timeline.</p>
            {/* Dashed connector to next step */}
            <span aria-hidden="true" style={{ position: 'absolute', top: '50%', right: '-32px', width: '32px', borderTop: '2px dashed var(--clr-accent, #f97316)', opacity: 0.3, pointerEvents: 'none' }} />
          </li>
          <li className="reveal-up stagger-2" style={{ position: 'relative' }}>
            <span className="step-meta">Days 1-8</span>
            <h3 className="h3">Market</h3>
            <p>We check the numbers and send the deal to buyers in our network who buy that kind of property.</p>
            <span aria-hidden="true" style={{ position: 'absolute', top: '50%', right: '-32px', width: '32px', borderTop: '2px dashed var(--clr-accent, #f97316)', opacity: 0.3, pointerEvents: 'none' }} />
          </li>
          <li className="reveal-up stagger-3" style={{ position: 'relative' }}>
            <span className="step-meta">To funding</span>
            <h3 className="h3">Coordinate</h3>
            <p>We line up the buyer, handle the assignment and work with title until it closes.</p>
          </li>
        </ol>
      </section>

      {/* ─── FOR WHOLESALERS ─── */}
      <section className="band section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="noise-overlay" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
        {/* Floating geometric decorations */}
        <span aria-hidden="true" style={{ position: 'absolute', top: '12%', left: '5%', width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.12)', transform: 'rotate(45deg)', pointerEvents: 'none' }} />
        <span aria-hidden="true" style={{ position: 'absolute', top: '65%', left: '8%', fontSize: '18px', color: 'rgba(255,255,255,0.08)', transform: 'rotate(20deg)', pointerEvents: 'none' }}>+</span>
        <span aria-hidden="true" style={{ position: 'absolute', top: '20%', right: '6%', width: '10px', height: '10px', border: '2px solid rgba(255,255,255,0.1)', transform: 'rotate(45deg)', pointerEvents: 'none' }} />
        <span aria-hidden="true" style={{ position: 'absolute', bottom: '15%', right: '12%', fontSize: '22px', color: 'rgba(255,255,255,0.07)', transform: 'rotate(-15deg)', pointerEvents: 'none' }}>+</span>
        <span aria-hidden="true" style={{ position: 'absolute', top: '45%', right: '3%', width: '18px', height: '18px', border: '1.5px solid rgba(255,255,255,0.08)', transform: 'rotate(45deg)', pointerEvents: 'none' }} />
        <span aria-hidden="true" style={{ position: 'absolute', bottom: '25%', left: '15%', fontSize: '14px', color: 'rgba(255,255,255,0.1)', pointerEvents: 'none' }}>◇</span>

        <div className="wrap split center" style={{ position: 'relative', zIndex: 1 }}>
          <div className="stack">
            <span className="kicker">For wholesalers</span>
            <h2 className="h2">You bring the deal. You keep the bigger share.</h2>
            <p className="lead">
              Got a property under contract and need a buyer? We handle dispositions, buyer outreach and deal marketing.
              No upfront fees. We only get paid when the deal closes.
            </p>
            <div className="row">
              <Link to="/submit-deal" className="btn btn-onband btn-shine btn-pulse">
                Submit a deal
              </Link>
            </div>
          </div>
          <FeeSplitCalculator />
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="wrap section corner-marks" style={{ position: 'relative' }}>
        <div className="section-head">
          <div>
            <span className="kicker">Services</span>
            <h2 className="h2 bracket-heading">Everything between contract and close</h2>
          </div>
          <Link to="/services" className="link btn-arrow-slide">
            All services
          </Link>
        </div>
        <div className="grid cols-3">
          {SERVICES.map(([n, src, title, body, alt], i) => (
            <Link key={title} to="/services" className={`deal card-shine reveal-up stagger-${i + 1} hover-tilt`}>
              <div className="photo photo-frame photo-hover-zoom">
                <Img src={src} alt={alt} width={1200} height={900} />
              </div>
              <div className="stack" style={{ gap: 6 }}>
                <span className="svc-num">{n}</span>
                <div className="deal-title">
                  <h3 className="h3">{title}</h3>
                  <span className="deal-go" aria-hidden="true">
                    →
                  </span>
                </div>
                <p>{body}</p>
                {/* Spec tags */}
                <div aria-hidden="true" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                  {n === '01' && (
                    <>
                      <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '999px', background: 'rgba(249,115,22,0.1)', color: 'var(--clr-accent, #f97316)', fontWeight: 600 }}>✓ Full title escrow</span>
                      <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '999px', background: 'rgba(249,115,22,0.1)', color: 'var(--clr-accent, #f97316)', fontWeight: 600 }}>✓ 55/45 split</span>
                    </>
                  )}
                  {n === '02' && (
                    <>
                      <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '999px', background: 'rgba(249,115,22,0.1)', color: 'var(--clr-accent, #f97316)', fontWeight: 600 }}>✓ 1,800+ buyers</span>
                      <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '999px', background: 'rgba(249,115,22,0.1)', color: 'var(--clr-accent, #f97316)', fontWeight: 600 }}>✓ Cash verified</span>
                    </>
                  )}
                  {n === '03' && (
                    <>
                      <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '999px', background: 'rgba(249,115,22,0.1)', color: 'var(--clr-accent, #f97316)', fontWeight: 600 }}>✓ Verified comps</span>
                      <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '999px', background: 'rgba(249,115,22,0.1)', color: 'var(--clr-accent, #f97316)', fontWeight: 600 }}>✓ Pro photos</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── QUOTE ─── */}
      <section className="wrap section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" aria-hidden="true" style={{ position: 'absolute', top: '-20%', right: '10%', width: '400px', height: '400px', zIndex: 0, pointerEvents: 'none' }} />
        <div className="quote-block card-glow" style={{ position: 'relative', zIndex: 1 }}>
          {/* Decorative quotation mark */}
          <span aria-hidden="true" style={{ position: 'absolute', top: '-16px', left: '24px', fontSize: '5rem', lineHeight: 1, fontFamily: 'Georgia, serif', color: 'var(--clr-accent, #f97316)', opacity: 0.15, pointerEvents: 'none', zIndex: 0 }}>"</span>
          <div className="photo photo-frame">
            <Img src={img.portrait_m2} alt="Portrait of Marcus Thompson" width={600} height={600} />
          </div>
          <blockquote className="quote" style={{ position: 'relative', zIndex: 1 }}>
            {/* Star rating */}
            <div aria-hidden="true" style={{ marginBottom: '8px', letterSpacing: '2px' }}>
              <span style={{ color: '#facc15', fontSize: '1.1rem' }}>★★★★★</span>
            </div>
            <p>
              I had a contract sitting at day nineteen with nothing moving. Don repriced it, sent it to the right buyers
              and had it assigned inside a week. He's my first call now.
            </p>
            <footer>
              <cite>Marcus Thompson</cite>, wholesaler, Columbus, OH
            </footer>
          </blockquote>
          {/* Closing quotation mark */}
          <span aria-hidden="true" style={{ position: 'absolute', bottom: '-10px', right: '24px', fontSize: '5rem', lineHeight: 1, fontFamily: 'Georgia, serif', color: 'var(--clr-accent, #f97316)', opacity: 0.1, pointerEvents: 'none', zIndex: 0 }}>"</span>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="wrap section" style={{ position: 'relative' }}>
        <div className="accent-line" aria-hidden="true" style={{ marginBottom: '24px' }} />
        <div className="split">
          <div className="stack">
            <span className="kicker">
              <span aria-hidden="true" style={{ marginRight: '6px', opacity: 0.4 }}>◆</span>
              FAQ
            </span>
            <h2 className="h2 bracket-heading">Questions</h2>
            <p>
              Don't see yours? <Link to="/contact" className="link">Ask us</Link>. We'll give you a straight answer.
            </p>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="wrap section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="glow-orb" aria-hidden="true" style={{ position: 'absolute', bottom: '-20%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '500px', zIndex: 0, pointerEvents: 'none' }} />
        <div className="cta-panel textured card-gradient-border" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="noise-overlay" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
          {/* Floating decorative elements */}
          <span aria-hidden="true" style={{ position: 'absolute', top: '10%', left: '6%', width: '12px', height: '12px', border: '2px solid rgba(249,115,22,0.15)', transform: 'rotate(45deg)', pointerEvents: 'none' }} />
          <span aria-hidden="true" style={{ position: 'absolute', bottom: '12%', right: '8%', fontSize: '16px', color: 'rgba(249,115,22,0.12)', transform: 'rotate(25deg)', pointerEvents: 'none' }}>+</span>
          <span aria-hidden="true" style={{ position: 'absolute', top: '55%', left: '3%', fontSize: '12px', color: 'rgba(249,115,22,0.1)', pointerEvents: 'none' }}>◇</span>
          <div className="cta" style={{ position: 'relative', zIndex: 1 }}>
            <div className="stack">
              <h2 className="h2">
                Got a deal under contract<span className="gradient-text">?</span>
              </h2>
              <p className="lead">
                Send the address, your numbers and the contract timeline. We review every submission and tell you honestly
                what we think. No upfront fees.
              </p>
            </div>
            <div className="row">
              <Link to="/submit-deal" className="btn btn-primary btn-shine btn-pulse">
                Submit a deal
              </Link>
              <Link to="/buyers-network" className="btn btn-secondary btn-shine">
                Join the buyers network
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
