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
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          paddingLeft: '32px',
          paddingRight: '32px',
          position: 'relative',
          paddingTop: '72px',
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
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingTop: '96px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '72px',
          alignItems: 'start',
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
          <div style={{ borderTop: '1px solid #262628' }}>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                padding: '26px 0',
                borderBottom: '1px solid #262628',
              }}
            >
              <span
                style={{
                  flex: 'none',
                  width: '48px',
                  height: '48px',
                  borderRadius: '99px',
                  border: '1px solid rgba(255,121,46,.35)',
                  background: 'rgba(255,121,46,.07)',
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
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ font: "400 26px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                  First look at new inventory
                </span>
                <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
                  Matched deals reach your inbox or phone before they go to the wider list.
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                padding: '26px 0',
                borderBottom: '1px solid #262628',
              }}
            >
              <span
                style={{
                  flex: 'none',
                  width: '48px',
                  height: '48px',
                  borderRadius: '99px',
                  border: '1px solid rgba(255,121,46,.35)',
                  background: 'rgba(255,121,46,.07)',
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
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ font: "400 26px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                  Only deals that fit
                </span>
                <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
                  We match on market, price, property type and rehab level. No blasting.
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                padding: '26px 0',
                borderBottom: '1px solid #262628',
              }}
            >
              <span
                style={{
                  flex: 'none',
                  width: '48px',
                  height: '48px',
                  borderRadius: '99px',
                  border: '1px solid rgba(255,121,46,.35)',
                  background: 'rgba(255,121,46,.07)',
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
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <path d="m9 14 2 2 4-4" />
                </svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ font: "400 26px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                  Numbers up front
                </span>
                <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
                  Every deal sheet shows ARV, repair scope and comps, so you can decide fast.
                </span>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                padding: '26px 0',
                borderBottom: '1px solid #262628',
              }}
            >
              <span
                style={{
                  flex: 'none',
                  width: '48px',
                  height: '48px',
                  borderRadius: '99px',
                  border: '1px solid rgba(255,121,46,.35)',
                  background: 'rgba(255,121,46,.07)',
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
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                </svg>
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ font: "400 26px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                  Your channels, your rules
                </span>
                <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
                  Choose email, text or both, and update your buy box anytime.
                </span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', paddingTop: '8px' }}>
            <span style={{ font: "400 64px/1 Inter, system-ui, sans-serif" }}>
              1,800
              <span style={{ color: '#FF792E' }}>+</span>
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.6 Inter, system-ui, sans-serif', maxWidth: '260px' }}>
              verified cash buyers already receiving matched deals.
            </span>
          </div>
          <div
            className="ph2"
            style={{
              position: 'relative',
              height: '280px',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid #262628',
            }}
          >
            <Img src={img.keys} alt="Investor receiving the keys after closing on a wholesale deal" width={1200} height={800} />
            <span
              style={{
                position: 'absolute',
                left: '18px',
                bottom: '16px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#8A8C91',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8A8C91"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              Investor walkthrough
            </span>
          </div>
        </div>
        <form
          onSubmit={preventSubmit}
          style={{
            position: 'relative',
            background: '#1A1A1B',
            border: '1px solid #262628',
            borderRadius: '24px',
            padding: 'clamp(28px, 4vw, 56px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ font: "400 34px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
              Cash-buyer registration
            </span>
            <span style={{ color: '#8A8C91', font: '400 14px Inter, system-ui, sans-serif' }}>
              Takes about two minutes. Free to join.
            </span>
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px 28px' }}
          >
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Full name
              </span>
              <input className="fld" type="text" name="name" placeholder="Jane Smith" autoComplete="name" />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Company
              </span>
              <input
                className="fld"
                type="text"
                name="company"
                placeholder="Smith Holdings LLC"
                autoComplete="organization"
              />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Email
              </span>
              <input className="fld" type="email" name="email" placeholder="you@company.com" autoComplete="email" />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Phone
              </span>
              <input className="fld" type="tel" name="phone" placeholder="(555) 000-0000" autoComplete="tel" />
            </label>
          </div>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Preferred markets
            </span>
            <input className="fld" type="text" name="markets" placeholder="Columbus OH, Indianapolis IN, Atlanta GA" />
          </label>
          <fieldset style={{ margin: '0', padding: '0', border: '0' }}>
            <legend style={{ padding: '0', marginBottom: '14px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Property types
              </span>
            </legend>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
              <label className="chip">
                <input type="checkbox" name="types" value="Single-family" />
                Single-family
              </label>
              <label className="chip">
                <input type="checkbox" name="types" value="Multifamily" />
                Multifamily
              </label>
              <label className="chip">
                <input type="checkbox" name="types" value="Condo / Townhome" />
                Condo / Townhome
              </label>
              <label className="chip">
                <input type="checkbox" name="types" value="Land" />
                Land
              </label>
              <label className="chip">
                <input type="checkbox" name="types" value="Commercial" />
                Commercial
              </label>
              <label className="chip">
                <input type="checkbox" name="types" value="Other" />
                Other
              </label>
            </div>
          </fieldset>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px 28px' }}
          >
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Investment budget
              </span>
              <select className="fld" name="budget">
                <option>Select a range</option>
                <option>Under $100k</option>
                <option>$100k – $250k</option>
                <option>$250k – $500k</option>
                <option>$500k – $1M</option>
                <option>$1M+</option>
              </select>
            </label>
            <fieldset style={{ margin: '0', padding: '0', border: '0' }}>
              <legend style={{ padding: '0', marginBottom: '12px' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  How you buy
                </span>
              </legend>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
                <label className="chip">
                  <input type="radio" name="funding" value="cash" />
                  Cash
                </label>
                <label className="chip">
                  <input type="radio" name="funding" value="financing" />
                  Financing
                </label>
              </div>
            </fieldset>
          </div>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Buying criteria
            </span>
            <textarea
              className="fld"
              name="criteria"
              rows="4"
              placeholder="Light to medium rehab, 3/2 or larger, minimum $30k spread, no flood zones…"
              style={{ resize: 'vertical' }}
            />
          </label>
          <div style={{ height: '1px', background: '#262628' }} />
          <fieldset
            style={{ margin: '0', padding: '0', border: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <legend style={{ padding: '0', marginBottom: '16px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Communication consent
              </span>
            </legend>
            <label
              style={{
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                color: '#C9CACD',
                font: '400 14px/1.6 Inter, system-ui, sans-serif',
              }}
            >
              <input type="checkbox" name="consent_email" />
              Email me new deals and updates from Dispo With Don. Unsubscribe anytime.
            </label>
            <label
              style={{
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                color: '#C9CACD',
                font: '400 14px/1.6 Inter, system-ui, sans-serif',
              }}
            >
              <input type="checkbox" name="consent_sms" />
              Text me deal alerts at the number above. Message and data rates may apply. Reply STOP to opt out.
            </label>
          </fieldset>
          <button
            type="submit"
            className="btn-o"
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              minHeight: '58px',
              padding: '0 8px 0 28px',
              border: '0',
              borderRadius: '999px',
              background: '#FF792E',
              color: '#141414',
              font: '600 15px Inter, system-ui, sans-serif',
              cursor: 'pointer',
            }}
          >
            Join the Buyers Network
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
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingTop: '150px',
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
            Common questions from cash buyers.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #262628' }}>
          <details open style={{ borderBottom: '1px solid #262628' }}>
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '28px 0',
              }}
            >
              <span style={{ display: 'flex', gap: '24px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>01</span>
                <span style={{ font: "400 clamp(22px, 2vw, 28px)/1.25 Inter, system-ui, sans-serif" }}>
                  Is it free to join?
                </span>
              </span>
              <span
                className="plus"
                style={{
                  flex: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '99px',
                  border: '1px solid #343437',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  font: '300 22px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 30px 46px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 16px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Yes. Joining the buyers network costs nothing. You only pay the purchase price on deals you choose to buy.
            </p>
          </details>
          <details style={{ borderBottom: '1px solid #262628' }}>
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '28px 0',
              }}
            >
              <span style={{ display: 'flex', gap: '24px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>02</span>
                <span style={{ font: "400 clamp(22px, 2vw, 28px)/1.25 Inter, system-ui, sans-serif" }}>
                  Do I need proof of funds?
                </span>
              </span>
              <span
                className="plus"
                style={{
                  flex: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '99px',
                  border: '1px solid #343437',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  font: '300 22px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 30px 46px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 16px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Not to join. You'll need proof of funds or a lender letter before we schedule a walkthrough on a specific
              deal.
            </p>
          </details>
          <details style={{ borderBottom: '1px solid #262628' }}>
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '28px 0',
              }}
            >
              <span style={{ display: 'flex', gap: '24px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>03</span>
                <span style={{ font: "400 clamp(22px, 2vw, 28px)/1.25 Inter, system-ui, sans-serif" }}>
                  How often will I hear from you?
                </span>
              </span>
              <span
                className="plus"
                style={{
                  flex: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '99px',
                  border: '1px solid #343437',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  font: '300 22px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 30px 46px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 16px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Only when a deal matches your buy box. Most buyers get a few matched deals a month, depending on their
              markets.
            </p>
          </details>
          <details style={{ borderBottom: '1px solid #262628' }}>
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '28px 0',
              }}
            >
              <span style={{ display: 'flex', gap: '24px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>04</span>
                <span style={{ font: "400 clamp(22px, 2vw, 28px)/1.25 Inter, system-ui, sans-serif" }}>
                  Can I change my criteria later?
                </span>
              </span>
              <span
                className="plus"
                style={{
                  flex: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '99px',
                  border: '1px solid #343437',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  font: '300 22px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 30px 46px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 16px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Anytime. Reply to any deal alert or contact us and we'll update your markets, budget or property types.
            </p>
          </details>
        </div>
      </section>
      <section
        style={{ maxWidth: '1320px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '150px' }}
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
