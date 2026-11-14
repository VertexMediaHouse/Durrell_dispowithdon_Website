import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function SubmitDeal() {
  usePageTitle('Submit Your Deal')
  return (
    <>
      <Header active={null} />
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
          <span style={{ color: '#343437' }}>/</span> <span style={{ color: '#F4F4F2' }}>Submit Your Deal</span>
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
              For wholesalers
            </span>
            <h1
              style={{
                margin: '0',
                font: "400 clamp(56px, 7vw, 108px)/0.96 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Submit your <em style={{ fontStyle: 'italic', color: '#FF792E' }}>deal.</em>
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
              You lock it up. We help move it. Send us the details and we'll take it from here.
            </p>
          </div>
        </div>
      </section>
      <main
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingTop: '72px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '56px',
          alignItems: 'flex-start',
        }}
      >
        <aside style={{ flex: '1 1 340px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '56px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
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
              Your share
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span
                    style={{
                      color: '#FF792E',
                      font: '500 11px Inter, system-ui, sans-serif',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    You
                  </span>
                  <span style={{ font: "400 72px/0.9 Inter, system-ui, sans-serif" }}>
                    55
                    <span style={{ color: '#FF792E' }}>%</span>
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-end' }}>
                  <span
                    style={{
                      color: '#A9ABB0',
                      font: '500 11px Inter, system-ui, sans-serif',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Don
                  </span>
                  <span style={{ font: "400 72px/0.9 Inter, system-ui, sans-serif", color: '#A9ABB0' }}>45%</span>
                </div>
              </div>
              <div style={{ display: 'flex', height: '4px', borderRadius: '99px', overflow: 'hidden', gap: '4px' }}>
                <div style={{ width: '55%', background: '#FF792E', borderRadius: '99px' }} />
                <div style={{ width: '45%', background: '#343437', borderRadius: '99px' }} />
              </div>
              <span style={{ color: '#8A8C91', font: '400 13px Inter, system-ui, sans-serif' }}>
                Assignment fee split, in favor of the wholesaler who brings the deal.
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
              What happens next
            </span>
            <ol style={{ listStyle: 'none', margin: '0', padding: '0', borderTop: '1px solid #262628' }}>
              <li
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px minmax(0, 1fr)',
                  gap: '12px',
                  padding: '22px 0',
                  borderBottom: '1px solid #262628',
                }}
              >
                <span style={{ color: '#FF792E', font: "italic 400 26px/1 Inter, system-ui, sans-serif" }}>
                  01
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ font: "400 24px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                    Submit
                  </span>
                  <span style={{ color: '#A9ABB0', font: '400 14px/1.6 Inter, system-ui, sans-serif' }}>
                    Send us your contracted deal: the address, your numbers, photos and the closing timeline.
                  </span>
                </div>
              </li>
              <li
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px minmax(0, 1fr)',
                  gap: '12px',
                  padding: '22px 0',
                  borderBottom: '1px solid #262628',
                }}
              >
                <span style={{ color: '#FF792E', font: "italic 400 26px/1 Inter, system-ui, sans-serif" }}>
                  02
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ font: "400 24px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                    Market
                  </span>
                  <span style={{ color: '#A9ABB0', font: '400 14px/1.6 Inter, system-ui, sans-serif' }}>
                    We evaluate and promote the opportunity to buyers in our network who match the deal.
                  </span>
                </div>
              </li>
              <li
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px minmax(0, 1fr)',
                  gap: '12px',
                  padding: '22px 0',
                  borderBottom: '1px solid #262628',
                }}
              >
                <span style={{ color: '#FF792E', font: "italic 400 26px/1 Inter, system-ui, sans-serif" }}>
                  03
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ font: "400 24px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                    Coordinate
                  </span>
                  <span style={{ color: '#A9ABB0', font: '400 14px/1.6 Inter, system-ui, sans-serif' }}>
                    We help connect interested buyers and advance the transaction toward closing.
                  </span>
                </div>
              </li>
            </ol>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start',
              padding: '24px',
              border: '1px solid #262628',
              borderRadius: '18px',
              color: '#A9ABB0',
              font: '400 14px/1.6 Inter, system-ui, sans-serif',
            }}
          >
            <span
              style={{
                flex: 'none',
                width: '44px',
                height: '44px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.35)',
                background: 'rgba(255,121,46,.07)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF792E"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <span>Your contract and deal details are uploaded securely and only used to market this opportunity.</span>
          </div>
        </aside>
        <form
          onSubmit={preventSubmit}
          style={{
            flex: '999 1 600px',
            minWidth: '0',
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
          <fieldset
            style={{ margin: '0', padding: '0', border: '0', display: 'flex', flexDirection: 'column', gap: '28px' }}
          >
            <legend
              style={{ padding: '0', marginBottom: '28px', display: 'flex', alignItems: 'baseline', gap: '16px' }}
            >
              <span style={{ color: '#FF792E', font: "italic 400 24px Inter, system-ui, sans-serif" }}>01</span>
              <span style={{ font: "400 32px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Your details
              </span>
            </legend>
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
                <input className="fld" type="text" name="name" placeholder="Jane Smith" autoComplete="name" required />
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
                  placeholder="Smith Acquisitions LLC"
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
                  Phone
                </span>
                <input
                  className="fld"
                  type="tel"
                  name="phone"
                  placeholder="(555) 000-0000"
                  autoComplete="tel"
                  required
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
                <input
                  className="fld"
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>
          </fieldset>
          <fieldset
            style={{
              margin: '0',
              padding: '40px 0 0',
              border: '0',
              borderTop: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            <legend
              style={{ padding: '0', marginBottom: '28px', display: 'flex', alignItems: 'baseline', gap: '16px' }}
            >
              <span style={{ color: '#FF792E', font: "italic 400 24px Inter, system-ui, sans-serif" }}>02</span>
              <span style={{ font: "400 32px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                The property
              </span>
            </legend>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Property address
              </span>
              <input
                className="fld"
                type="text"
                name="address"
                placeholder="1214 Oakwood Ave, Columbus, OH 43206"
                autoComplete="street-address"
                required
              />
            </label>
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
                  Asset type
                </span>
                <select className="fld" name="asset_type">
                  <option>Select asset type</option>
                  <option>Single-family</option>
                  <option>Multifamily (2–4 units)</option>
                  <option>Multifamily (5+ units)</option>
                  <option>Condo / Townhome</option>
                  <option>Land</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
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
                  Closing deadline
                </span>
                <input className="fld" type="date" name="closing_deadline" required />
              </label>
            </div>
          </fieldset>
          <fieldset
            style={{
              margin: '0',
              padding: '40px 0 0',
              border: '0',
              borderTop: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            <legend
              style={{ padding: '0', marginBottom: '28px', display: 'flex', alignItems: 'baseline', gap: '16px' }}
            >
              <span style={{ color: '#FF792E', font: "italic 400 24px Inter, system-ui, sans-serif" }}>03</span>
              <span style={{ font: "400 32px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                The numbers
              </span>
            </legend>
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
                  Contract price
                </span>
                <span className="money">
                  <span aria-hidden="true" style={{ color: '#A9ABB0', font: '400 16px Inter, system-ui, sans-serif' }}>
                    $
                  </span>
                  <input type="text" inputMode="numeric" name="contract_price" placeholder="120,000" />
                </span>
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
                  Desired buyer price
                </span>
                <span className="money">
                  <span aria-hidden="true" style={{ color: '#A9ABB0', font: '400 16px Inter, system-ui, sans-serif' }}>
                    $
                  </span>
                  <input type="text" inputMode="numeric" name="buyer_price" placeholder="148,500" />
                </span>
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
                  Estimated ARV
                </span>
                <span className="money">
                  <span aria-hidden="true" style={{ color: '#A9ABB0', font: '400 16px Inter, system-ui, sans-serif' }}>
                    $
                  </span>
                  <input type="text" inputMode="numeric" name="arv" placeholder="235,000" />
                </span>
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
                  Repair estimate
                </span>
                <span className="money">
                  <span aria-hidden="true" style={{ color: '#A9ABB0', font: '400 16px Inter, system-ui, sans-serif' }}>
                    $
                  </span>
                  <input type="text" inputMode="numeric" name="repairs" placeholder="38,000" />
                </span>
              </label>
            </div>
          </fieldset>
          <fieldset
            style={{
              margin: '0',
              padding: '40px 0 0',
              border: '0',
              borderTop: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            <legend
              style={{ padding: '0', marginBottom: '28px', display: 'flex', alignItems: 'baseline', gap: '16px' }}
            >
              <span style={{ color: '#FF792E', font: "italic 400 24px Inter, system-ui, sans-serif" }}>04</span>
              <span style={{ font: "400 32px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Photos & contract
              </span>
            </legend>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <label
                className="drop"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '14px',
                  minHeight: '200px',
                  padding: '28px',
                  border: '1px dashed #343437',
                  borderRadius: '18px',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    flex: 'none',
                    width: '56px',
                    height: '56px',
                    borderRadius: '99px',
                    border: '1px solid rgba(255,121,46,.35)',
                    background: 'rgba(255,121,46,.07)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF792E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                  </svg>
                </span>
                <span style={{ font: "400 24px Inter, system-ui, sans-serif" }}>Property photos</span>
                <span style={{ color: '#8A8C91', font: '400 13px Inter, system-ui, sans-serif' }}>
                  Drag photos here or browse · JPG, PNG, HEIC
                </span>
                <input className="sr" type="file" name="photos" accept="image/*" multiple />
              </label>
              <label
                className="drop"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '14px',
                  minHeight: '200px',
                  padding: '28px',
                  border: '1px dashed #343437',
                  borderRadius: '18px',
                  textAlign: 'center',
                }}
              >
                <span
                  style={{
                    flex: 'none',
                    width: '56px',
                    height: '56px',
                    borderRadius: '99px',
                    border: '1px solid rgba(255,121,46,.35)',
                    background: 'rgba(255,121,46,.07)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF792E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <span style={{ font: "400 24px Inter, system-ui, sans-serif" }}>Purchase contract</span>
                <span style={{ color: '#8A8C91', font: '400 13px Inter, system-ui, sans-serif' }}>
                  Optional · Secure upload · PDF only
                </span>
                <input className="sr" type="file" name="contract" accept="application/pdf" />
              </label>
            </div>
          </fieldset>
          <fieldset
            style={{
              margin: '0',
              padding: '40px 0 0',
              border: '0',
              borderTop: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
              gap: '0',
            }}
          >
            <legend
              style={{ padding: '0', marginBottom: '28px', display: 'flex', alignItems: 'baseline', gap: '16px' }}
            >
              <span style={{ color: '#FF792E', font: "italic 400 24px Inter, system-ui, sans-serif" }}>05</span>
              <span style={{ font: "400 32px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Confirm
              </span>
            </legend>
            <div style={{ borderTop: '1px solid #262628' }}>
              <label
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 15px/1.6 Inter, system-ui, sans-serif',
                }}
              >
                <input type="checkbox" name="contract_interest" required />I confirm I hold a valid contractual interest
                in this property.
              </label>
              <label
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 15px/1.6 Inter, system-ui, sans-serif',
                }}
              >
                <input type="checkbox" name="authority" required />I confirm I have the authority to market or share
                this opportunity.
              </label>
              <label
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 15px/1.6 Inter, system-ui, sans-serif',
                }}
              >
                <input type="checkbox" name="split" />I agree to the 55/45 assignment fee split (55% to me, 45% to Dispo
                With Don).
              </label>
            </div>
          </fieldset>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <span style={{ color: '#8A8C91', font: '400 14px/1.6 Inter, system-ui, sans-serif', maxWidth: '340px' }}>
              We review every submission the same business day and follow up by phone or email.
            </span>
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
              Submit Deal
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
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}
