import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Img from '../components/Img'
import { img } from '../lib/images'

export default function BuyersNetwork() {
  usePageTitle('Join Buyers Network')
  return (
    <>
      <Header active="Buyers" />
      <section
        className="site-container"
        style={{
          position: 'relative',
          paddingTop: 'clamp(36px, 5vw, 64px)',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '-120px',
            right: '-160px',
            width: '640px',
            height: '640px',
            borderRadius: '999px',
            background: 'radial-gradient(closest-side, rgba(255,121,46,.16), transparent)',
            pointerEvents: 'none',
          }}
        />
        <nav
          aria-label="Breadcrumb"
          style={{
            position: 'relative',
            display: 'flex',
            gap: '10px',
            font: '500 13px Inter, system-ui, sans-serif',
            letterSpacing: '0.04em',
            marginBottom: '40px',
          }}
        >
          <Link to="/" className="nav-a">
            Home
          </Link>{' '}
          <span style={{ color: '#343437' }}>/</span> <span style={{ color: '#F4F4F2' }}>Buyers Network</span>
        </nav>
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '40px',
            paddingBottom: '64px',
            borderBottom: '1px solid #262628',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '820px' }}>
            <span
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                color: '#FF792E',
                font: '500 12px Inter, system-ui, sans-serif',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '32px', height: '1px', background: '#FF792E' }} />
              For cash buyers
            </span>
            <h1
              style={{
                margin: '0',
                font: "400 clamp(56px, 7vw, 108px)/0.96 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Join our buyers <em style={{ fontStyle: 'italic', color: '#FF792E' }}>network.</em>
            </h1>
          </div>
          <div style={{ maxWidth: '420px' }}>
            <p
              style={{
                margin: '0',
                maxWidth: '420px',
                color: '#A9ABB0',
                font: '400 17px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Off-market deals matched to your markets, budget and buying criteria, before they go anywhere else.
            </p>
          </div>
        </div>
      </section>
      <section
        className="site-container"
        style={{
          paddingTop: 'clamp(48px, 6vw, 96px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '64px',
          alignItems: 'stretch',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <span
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              color: '#FF792E',
              font: '500 12px Inter, system-ui, sans-serif',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ color: '#A9ABB0' }}>(01)</span>
            <span style={{ width: '32px', height: '1px', background: '#FF792E' }} />
            Why join
          </span>
          <h2
            style={{
              margin: '0',
              font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
              letterSpacing: '-0.015em',
            }}
          >
            Deals that match <em style={{ fontStyle: 'italic', color: '#FF792E' }}>how you buy.</em>
          </h2>

          {/* Luxury Benefit Cards Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                display: 'flex',
                gap: '18px',
                alignItems: 'flex-start',
                padding: '20px 22px',
                background: 'linear-gradient(180deg, #1A1A1C 0%, #151516 100%)',
                border: '1px solid #262628',
                borderRadius: '18px',
                transition: 'border-color 0.25s ease',
              }}
            >
              <span
                style={{
                  flex: 'none',
                  width: '46px',
                  height: '46px',
                  borderRadius: '99px',
                  border: '1px solid rgba(255,121,46,.4)',
                  background: 'rgba(255,121,46,.1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ font: "500 20px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  First look at new inventory
                </span>
                <span style={{ color: '#8A8C91', font: '400 14px/1.6 Inter, system-ui, sans-serif' }}>
                  Matched deals reach your inbox or phone before they are posted anywhere publicly.
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '18px',
                alignItems: 'flex-start',
                padding: '20px 22px',
                background: 'linear-gradient(180deg, #1A1A1C 0%, #151516 100%)',
                border: '1px solid #262628',
                borderRadius: '18px',
              }}
            >
              <span
                style={{
                  flex: 'none',
                  width: '46px',
                  height: '46px',
                  borderRadius: '99px',
                  border: '1px solid rgba(255,121,46,.4)',
                  background: 'rgba(255,121,46,.1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ font: "500 20px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  Only deals that fit your criteria
                </span>
                <span style={{ color: '#8A8C91', font: '400 14px/1.6 Inter, system-ui, sans-serif' }}>
                  Matched on exact buy box, zip codes, and rehab scopes. No spam, no junk deals.
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '18px',
                alignItems: 'flex-start',
                padding: '20px 22px',
                background: 'linear-gradient(180deg, #1A1A1C 0%, #151516 100%)',
                border: '1px solid #262628',
                borderRadius: '18px',
              }}
            >
              <span
                style={{
                  flex: 'none',
                  width: '46px',
                  height: '46px',
                  borderRadius: '99px',
                  border: '1px solid rgba(255,121,46,.4)',
                  background: 'rgba(255,121,46,.1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ font: "500 20px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  Transparent numbers & verified comps
                </span>
                <span style={{ color: '#8A8C91', font: '400 14px/1.6 Inter, system-ui, sans-serif' }}>
                  Every deal sheet comes with vetted ARV comps, itemized repair scopes, and walkthrough videos.
                </span>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '18px',
                alignItems: 'flex-start',
                padding: '20px 22px',
                background: 'linear-gradient(180deg, #1A1A1C 0%, #151516 100%)',
                border: '1px solid #262628',
                borderRadius: '18px',
              }}
            >
              <span
                style={{
                  flex: 'none',
                  width: '46px',
                  height: '46px',
                  borderRadius: '99px',
                  border: '1px solid rgba(255,121,46,.4)',
                  background: 'rgba(255,121,46,.1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ font: "500 20px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  Direct title closing
                </span>
                <span style={{ color: '#8A8C91', font: '400 14px/1.6 Inter, system-ui, sans-serif' }}>
                  Clear title guaranteed through insured title companies. Earnest money held in escrow.
                </span>
              </div>
            </div>
          </div>

          {/* Stat Card */}
          <div className="stat-box-modern" style={{ padding: '24px 28px', flexDirection: 'row', alignItems: 'center', gap: '20px' }}>
            <span style={{ font: "600 52px/1 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
              1,800<span style={{ color: '#FF792E' }}>+</span>
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span className="spread-badge" style={{ alignSelf: 'flex-start', fontSize: '11px', padding: '3px 10px' }}>
                Active Network
              </span>
              <span style={{ color: '#A9ABB0', font: '400 13.5px/1.5 Inter, system-ui, sans-serif' }}>
                Verified cash buyers and hedge funds receiving matched off-market deals.
              </span>
            </div>
          </div>

          <div
            className="ph2"
            style={{
              position: 'relative',
              flex: '1 1 auto',
              minHeight: '260px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #262628',
            }}
          >
            <Img src={img.keys} alt="Investor receiving the keys after closing on a wholesale deal" width={1200} height={800} />
          </div>
        </div>

        {/* Registration Form */}
        <form
          onSubmit={preventSubmit}
          className="luxury-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #262628', paddingBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span className="glass-pill" style={{ alignSelf: 'flex-start', color: '#FF792E', borderColor: 'rgba(255,121,46,0.3)' }}>
                VIP ACCESS
              </span>
              <h3 style={{ margin: '0', font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Cash-buyer registration
              </h3>
            </div>
            <span style={{ color: '#8A8C91', font: '400 13px Inter, system-ui, sans-serif' }}>
              100% Free · 2 min
            </span>
          </div>

          {/* Section 01: Buyer Info */}
          <div className="form-section-card">
            <span style={{ color: '#FF792E', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              01 · Contact Details
            </span>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '20px' }}
            >
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ color: '#A9ABB0', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Full name *
                </span>
                <input className="fld" type="text" name="name" placeholder="Jane Smith" autoComplete="name" required />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ color: '#A9ABB0', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Company / Entity
                </span>
                <input
                  className="fld"
                  type="text"
                  name="company"
                  placeholder="Smith Holdings LLC"
                  autoComplete="organization"
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ color: '#A9ABB0', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Email address *
                </span>
                <input className="fld" type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ color: '#A9ABB0', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Direct Phone *
                </span>
                <input className="fld" type="tel" name="phone" placeholder="(555) 000-0000" autoComplete="tel" required />
              </label>
            </div>
          </div>

          {/* Section 02: Buy Box */}
          <div className="form-section-card">
            <span style={{ color: '#FF792E', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              02 · Target Markets & Criteria
            </span>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ color: '#A9ABB0', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Target Markets (Cities / Zip Codes) *
              </span>
              <input className="fld" type="text" name="markets" placeholder="Columbus OH, Indianapolis IN, Atlanta GA" required />
            </label>

            <fieldset style={{ margin: '0', padding: '0', border: '0' }}>
              <legend style={{ padding: '0', marginBottom: '10px' }}>
                <span style={{ color: '#A9ABB0', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Property types of interest
                </span>
              </legend>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
                <label className="chip">
                  <input type="checkbox" name="types" value="Single-family" defaultChecked />
                  Single-family
                </label>
                <label className="chip">
                  <input type="checkbox" name="types" value="Multifamily" />
                  Multifamily (2–4)
                </label>
                <label className="chip">
                  <input type="checkbox" name="types" value="Condo / Townhome" />
                  Condo / Townhome
                </label>
                <label className="chip">
                  <input type="checkbox" name="types" value="Commercial" />
                  Commercial
                </label>
                <label className="chip">
                  <input type="checkbox" name="types" value="Land" />
                  Land / Lots
                </label>
                <label className="chip">
                  <input type="checkbox" name="types" value="Other" />
                  Other
                </label>
              </div>
            </fieldset>

            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '20px' }}
            >
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ color: '#A9ABB0', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Investment budget
                </span>
                <select className="fld" name="budget">
                  <option>Select a range</option>
                  <option>Under $100k</option>
                  <option>$100k – $250k</option>
                  <option selected>$250k – $500k</option>
                  <option>$500k – $1M</option>
                  <option>$1M+</option>
                </select>
              </label>

              <fieldset style={{ margin: '0', padding: '0', border: '0' }}>
                <legend style={{ padding: '0', marginBottom: '8px' }}>
                  <span style={{ color: '#A9ABB0', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                    Purchasing method
                  </span>
                </legend>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
                  <label className="chip">
                    <input type="radio" name="funding" value="cash" defaultChecked />
                    Cash / Hard Money
                  </label>
                  <label className="chip">
                    <input type="radio" name="funding" value="financing" />
                    Conventional
                  </label>
                </div>
              </fieldset>
            </div>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ color: '#A9ABB0', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                Detailed Buying criteria
              </span>
              <textarea
                className="fld"
                name="criteria"
                rows="3"
                placeholder="Light cosmetic to full gut, 3/2 or larger, min $30k projected spread, no flood zones..."
                style={{ resize: 'vertical' }}
              />
            </label>
          </div>

          {/* Section 03: Consent */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <label className="check-card-row">
              <input type="checkbox" name="consent_email" defaultChecked />
              <span>
                <strong style={{ color: '#F4F4F2', display: 'block' }}>Email Deal Alerts</strong>
                Send off-market deal packets directly to my inbox as soon as they are contracted.
              </span>
            </label>
            <label className="check-card-row">
              <input type="checkbox" name="consent_sms" />
              <span>
                <strong style={{ color: '#F4F4F2', display: 'block' }}>SMS Flash Alerts (Recommended)</strong>
                Send instant text notifications for high-spread wholesale deals in my target zip codes.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="btn-o"
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              minHeight: '60px',
              padding: '0 10px 0 32px',
              border: '0',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #FF792E 0%, #FF9454 100%)',
              boxShadow: '0 12px 30px rgba(255, 121, 46, 0.35)',
              color: '#141414',
              font: '600 15px Inter, system-ui, sans-serif',
              cursor: 'pointer',
            }}
          >
            Join Cash Buyers Network
            <span
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '99px',
                background: '#141414',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF792E"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </span>
          </button>
        </form>
      </section>
      <section
        className="site-container"
        style={{
          paddingTop: 'var(--section-pad)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: '64px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '420px' }}>
          <span
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              color: '#FF792E',
              font: '500 12px Inter, system-ui, sans-serif',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ color: '#A9ABB0' }}>(02)</span>
            <span style={{ width: '32px', height: '1px', background: '#FF792E' }} />
            FAQ
          </span>
          <h2
            style={{
              margin: '0',
              font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
              letterSpacing: '-0.015em',
            }}
          >
            Before you <em style={{ fontStyle: 'italic', color: '#FF792E' }}>sign up.</em>
          </h2>
          <p
            style={{
              margin: '0',
              maxWidth: '380px',
              color: '#A9ABB0',
              font: '400 16px/1.7 Inter, system-ui, sans-serif',
            }}
          >
            Everything you need to know about our off-market deal pipeline.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <details className="faq-item" open>
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '24px 0',
                cursor: 'pointer',
              }}
            >
              <span style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 600 20px Inter, system-ui, sans-serif" }}>01</span>
                <span style={{ font: "500 clamp(20px, 2vw, 24px)/1.25 Inter, system-ui, sans-serif" }}>
                  Is it completely free to join?
                </span>
              </span>
              <span
                className="plus"
                style={{
                  flex: 'none',
                  width: '38px',
                  height: '38px',
                  borderRadius: '99px',
                  border: '1px solid #343437',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  font: '300 20px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 20px 40px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 15.5px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Yes. Joining the cash buyers network costs absolutely nothing. There are no monthly subscriptions, platform fees, or membership dues. You only pay the agreed purchase price on deals you choose to close.
            </p>
          </details>

          <details className="faq-item">
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '24px 0',
                cursor: 'pointer',
              }}
            >
              <span style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 600 20px Inter, system-ui, sans-serif" }}>02</span>
                <span style={{ font: "500 clamp(20px, 2vw, 24px)/1.25 Inter, system-ui, sans-serif" }}>
                  Do I need proof of funds upfront?
                </span>
              </span>
              <span
                className="plus"
                style={{
                  flex: 'none',
                  width: '38px',
                  height: '38px',
                  borderRadius: '99px',
                  border: '1px solid #343437',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  font: '300 20px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 20px 40px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 15.5px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Not to join the VIP list. You will only need proof of funds (bank statement) or an approved hard-money lender letter before we schedule a property walkthrough or execute an assignment agreement.
            </p>
          </details>

          <details className="faq-item">
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '24px 0',
                cursor: 'pointer',
              }}
            >
              <span style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 600 20px Inter, system-ui, sans-serif" }}>03</span>
                <span style={{ font: "500 clamp(20px, 2vw, 24px)/1.25 Inter, system-ui, sans-serif" }}>
                  How often will I receive deal alerts?
                </span>
              </span>
              <span
                className="plus"
                style={{
                  flex: 'none',
                  width: '38px',
                  height: '38px',
                  borderRadius: '99px',
                  border: '1px solid #343437',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  font: '300 20px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 20px 40px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 15.5px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Only when an off-market deal strictly fits your indicated criteria and target zip codes. On average, active buyers receive 2 to 6 curated deal packets per month. We never spam your phone or inbox with mismatched leads.
            </p>
          </details>

          <details className="faq-item">
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '24px 0',
                cursor: 'pointer',
              }}
            >
              <span style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 600 20px Inter, system-ui, sans-serif" }}>04</span>
                <span style={{ font: "500 clamp(20px, 2vw, 24px)/1.25 Inter, system-ui, sans-serif" }}>
                  Can I update my buy box or pause alerts later?
                </span>
              </span>
              <span
                className="plus"
                style={{
                  flex: 'none',
                  width: '38px',
                  height: '38px',
                  borderRadius: '99px',
                  border: '1px solid #343437',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  font: '300 20px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 20px 40px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 15.5px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              At any time. You can reply directly to any SMS or email alert, or reach out to our team to modify your target zip codes, price range, or preferred asset types. You can pause notifications whenever you reach capacity.
            </p>
          </details>
        </div>
      </section>
      <section
        className="site-container"
        style={{ paddingTop: 'var(--section-pad)' }}
      >
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            border: '1px solid #262628',
            background: '#1A1A1B',
            padding: 'clamp(48px, 7vw, 112px) clamp(28px, 5vw, 80px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '28px',
            textAlign: 'center',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '50%',
              bottom: '-380px',
              transform: 'translateX(-50%)',
              width: '900px',
              height: '600px',
              borderRadius: '999px',
              background: 'radial-gradient(closest-side, rgba(255,121,46,.28), transparent)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '26px',
            }}
          >
            <span
              style={{
                alignSelf: 'center',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                color: '#FF792E',
                font: '500 12px Inter, system-ui, sans-serif',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '32px', height: '1px', background: '#FF792E' }} />
              Get started
            </span>
            <h2
              style={{
                margin: '0',
                textAlign: 'center',
                font: "400 clamp(44px, 5.6vw, 88px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              Have a deal <em style={{ fontStyle: 'italic', color: '#FF792E' }}>to sell?</em>
            </h2>
            <p
              style={{
                margin: '0',
                textAlign: 'center',
                maxWidth: '560px',
                color: '#A9ABB0',
                font: '400 17px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Wholesalers keep 55% of the assignment fee. Send it over and we'll get to work.
            </p>
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', paddingTop: '6px' }}
            >
              <Link
                to="/submit-deal"
                className="btn-o"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '16px',
                  minHeight: '58px',
                  padding: '0 8px 0 26px',
                  background: '#FF792E',
                  borderRadius: '999px',
                  color: '#141414',
                  font: '600 15px Inter, system-ui, sans-serif',
                }}
              >
                Submit Your Deal
                <span
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '99px',
                    background: '#141414',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF792E"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/deals"
                className="btn-g"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  minHeight: '58px',
                  padding: '0 26px',
                  border: '1px solid #343437',
                  borderRadius: '999px',
                  color: '#F4F4F2',
                  font: '500 15px Inter, system-ui, sans-serif',
                }}
              >
                Browse Deals
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
