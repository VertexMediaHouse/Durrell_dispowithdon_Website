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
        className="site-container"
        style={{
          paddingTop: 'clamp(36px, 5vw, 64px)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          alignItems: 'flex-start',
        }}
      >
        <aside style={{ flex: '1 1 340px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Priority Split Stat Card */}
          <div className="stat-box-modern" style={{ gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#FF792E',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ width: '20px', height: '1px', background: '#FF792E' }} />
                Your fee share
              </span>
              <span className="spread-badge" style={{ fontSize: '11px', padding: '4px 10px' }}>
                Priority Split
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span
                  style={{
                    color: '#FF792E',
                    font: '600 12px Inter, system-ui, sans-serif',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Wholesaler (You)
                </span>
                <span style={{ font: "600 68px/0.9 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  55<span style={{ color: '#FF792E' }}>%</span>
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'flex-end' }}>
                <span
                  style={{
                    color: '#8A8C91',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  Dispo (Don)
                </span>
                <span style={{ font: "400 56px/0.9 Inter, system-ui, sans-serif", color: '#6A6C72' }}>
                  45%
                </span>
              </div>
            </div>

            {/* Split Progress Track */}
            <div style={{ display: 'flex', height: '8px', borderRadius: '99px', overflow: 'hidden', gap: '4px', background: '#101011', padding: '2px', border: '1px solid #28282B' }}>
              <div style={{ width: '55%', background: 'linear-gradient(90deg, #FF792E, #FFA366)', borderRadius: '99px', boxShadow: '0 0 12px rgba(255,121,46,0.6)' }} />
              <div style={{ width: '45%', background: '#343437', borderRadius: '99px' }} />
            </div>

            <p style={{ margin: '0', color: '#A9ABB0', font: '400 13.5px/1.6 Inter, system-ui, sans-serif' }}>
              Assignment fee split strictly favors the wholesaler who locks up the contract. <strong>No hidden deductions</strong> or admin fees.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '8px', borderTop: '1px solid #262628' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D4D5D8', font: '400 13px Inter, system-ui, sans-serif' }}>
                <span style={{ color: '#FF792E' }}>✓</span> 100% Free upfront — we only earn when you close
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D4D5D8', font: '400 13px Inter, system-ui, sans-serif' }}>
                <span style={{ color: '#FF792E' }}>✓</span> Your direct buyer and seller relationships remain yours
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#D4D5D8', font: '400 13px Inter, system-ui, sans-serif' }}>
                <span style={{ color: '#FF792E' }}>✓</span> Direct wire payout from title at closing
              </div>
            </div>
          </div>

          {/* Workflow Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                color: '#FF792E',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ width: '24px', height: '1px', background: '#FF792E' }} />
              Dispo Process
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '18px 20px',
                  background: 'linear-gradient(180deg, #1A1A1C 0%, #151516 100%)',
                  border: '1px solid #262628',
                  borderRadius: '16px',
                }}
              >
                <span style={{ color: '#FF792E', font: "italic 600 24px/1 Inter, system-ui, sans-serif", textShadow: '0 0 16px rgba(255,121,46,0.3)' }}>
                  01
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ font: "500 17px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                    Submit Deal Details
                  </span>
                  <span style={{ color: '#8A8C91', font: '400 13px/1.5 Inter, system-ui, sans-serif' }}>
                    Send address, contract price, desired buyer price, and photos.
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '18px 20px',
                  background: 'linear-gradient(180deg, #1A1A1C 0%, #151516 100%)',
                  border: '1px solid #262628',
                  borderRadius: '16px',
                }}
              >
                <span style={{ color: '#FF792E', font: "italic 600 24px/1 Inter, system-ui, sans-serif", textShadow: '0 0 16px rgba(255,121,46,0.3)' }}>
                  02
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ font: "500 17px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                    Targeted Buyer Blast
                  </span>
                  <span style={{ color: '#8A8C91', font: '400 13px/1.5 Inter, system-ui, sans-serif' }}>
                    Matched directly with 1,800+ vetted cash buyers who buy in that submarket.
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'flex-start',
                  padding: '18px 20px',
                  background: 'linear-gradient(180deg, #1A1A1C 0%, #151516 100%)',
                  border: '1px solid #262628',
                  borderRadius: '16px',
                }}
              >
                <span style={{ color: '#FF792E', font: "italic 600 24px/1 Inter, system-ui, sans-serif", textShadow: '0 0 16px rgba(255,121,46,0.3)' }}>
                  03
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ font: "500 17px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                    Assignment & Closing
                  </span>
                  <span style={{ color: '#8A8C91', font: '400 13px/1.5 Inter, system-ui, sans-serif' }}>
                    We collect earnest money, execute assignment contracts, and coordinate with title.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Confidentiality Lock Box */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              alignItems: 'center',
              padding: '20px 22px',
              background: 'rgba(255, 121, 46, 0.04)',
              border: '1px solid rgba(255, 121, 46, 0.25)',
              borderRadius: '16px',
              color: '#A9ABB0',
              font: '400 13.5px/1.5 Inter, system-ui, sans-serif',
            }}
          >
            <span
              style={{
                flex: 'none',
                width: '42px',
                height: '42px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.4)',
                background: 'rgba(255,121,46,.1)',
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
            <span>
              <strong style={{ color: '#F4F4F2', display: 'block', marginBottom: '2px' }}>Confidential & Protected</strong>
              Your contract and property data are kept strictly confidential and only presented to verified cash buyers.
            </span>
          </div>
        </aside>

        {/* Form Main Area */}
        <form
          onSubmit={preventSubmit}
          className="luxury-card"
          style={{
            flex: '999 1 600px',
            minWidth: '0',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {/* Form Step Pills Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              overflowX: 'auto',
              paddingBottom: '8px',
              borderBottom: '1px solid #262628',
            }}
          >
            <span className="glass-pill" style={{ background: 'rgba(255,121,46,0.15)', borderColor: 'rgba(255,121,46,0.4)', color: '#FF792E' }}>
              01 Contact
            </span>
            <span style={{ color: '#3A3A3E' }}>→</span>
            <span className="glass-pill" style={{ color: '#A9ABB0' }}>02 Property</span>
            <span style={{ color: '#3A3A3E' }}>→</span>
            <span className="glass-pill" style={{ color: '#A9ABB0' }}>03 Numbers</span>
            <span style={{ color: '#3A3A3E' }}>→</span>
            <span className="glass-pill" style={{ color: '#A9ABB0' }}>04 Files</span>
            <span style={{ color: '#3A3A3E' }}>→</span>
            <span className="glass-pill" style={{ color: '#A9ABB0' }}>05 Confirm</span>
          </div>

          {/* Section 01: Wholesaler Contact */}
          <div className="form-section-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="glass-pill" style={{ color: '#FF792E', borderColor: 'rgba(255,121,46,0.3)' }}>
                  STEP 01
                </span>
                <h2 style={{ margin: '0', font: "400 24px/1.2 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                  Wholesaler contact
                </h2>
              </div>
              <span style={{ color: '#8A8C91', font: '400 12px Inter, system-ui, sans-serif' }}>
                Required fields *
              </span>
            </div>

            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '22px' }}
            >
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  Full name *
                </span>
                <input className="fld" type="text" name="name" placeholder="Jane Smith" autoComplete="name" required />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  Company / Entity
                </span>
                <input
                  className="fld"
                  type="text"
                  name="company"
                  placeholder="Smith Acquisitions LLC"
                  autoComplete="organization"
                />
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  Phone number *
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
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  Email address *
                </span>
                <input
                  className="fld"
                  type="email"
                  name="email"
                  placeholder="jane@smithacquisitions.com"
                  autoComplete="email"
                  required
                />
              </label>
            </div>
          </div>

          {/* Section 02: Property Information */}
          <div className="form-section-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="glass-pill" style={{ color: '#FF792E', borderColor: 'rgba(255,121,46,0.3)' }}>
                STEP 02
              </span>
              <h2 style={{ margin: '0', font: "400 24px/1.2 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                The property
              </h2>
            </div>

            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}
              >
                Property street address *
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
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '22px' }}
            >
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  Asset type *
                </span>
                <select className="fld" name="asset_type">
                  <option>Select asset type</option>
                  <option>Single-family</option>
                  <option>Multifamily (2–4 units)</option>
                  <option>Multifamily (5+ units)</option>
                  <option>Condo / Townhome</option>
                  <option>Land / Lot</option>
                  <option>Commercial</option>
                  <option>Other</option>
                </select>
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  Closing deadline *
                </span>
                <input className="fld" type="date" name="closing_deadline" required />
              </label>
            </div>
          </div>

          {/* Section 03: The Numbers */}
          <div className="form-section-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span className="glass-pill" style={{ color: '#FF792E', borderColor: 'rgba(255,121,46,0.3)' }}>
                  STEP 03
                </span>
                <h2 style={{ margin: '0', font: "400 24px/1.2 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                  Deal numbers & spread
                </h2>
              </div>
              <span className="spread-badge" style={{ fontSize: '11px' }}>55% Split</span>
            </div>

            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '22px' }}
            >
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  Your Contract price *
                </span>
                <span className="money">
                  <span aria-hidden="true" style={{ color: '#FF792E', font: '600 16px Inter, system-ui, sans-serif' }}>
                    $
                  </span>
                  <input type="text" inputMode="numeric" name="contract_price" placeholder="120,000" required />
                </span>
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  Target buyer price *
                </span>
                <span className="money">
                  <span aria-hidden="true" style={{ color: '#FF792E', font: '600 16px Inter, system-ui, sans-serif' }}>
                    $
                  </span>
                  <input type="text" inputMode="numeric" name="buyer_price" placeholder="148,500" required />
                </span>
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.16em',
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
              <label style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  Estimated repairs
                </span>
                <span className="money">
                  <span aria-hidden="true" style={{ color: '#A9ABB0', font: '400 16px Inter, system-ui, sans-serif' }}>
                    $
                  </span>
                  <input type="text" inputMode="numeric" name="repairs" placeholder="38,000" />
                </span>
              </label>
            </div>
          </div>

          {/* Section 04: Photos & Documentation */}
          <div className="form-section-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="glass-pill" style={{ color: '#FF792E', borderColor: 'rgba(255,121,46,0.3)' }}>
                STEP 04
              </span>
              <h2 style={{ margin: '0', font: "400 24px/1.2 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Photos & purchase contract
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '20px' }}>
              <label className="drop-zone-premium">
                <span className="drop-icon-wrap">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF792E"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" x2="12" y1="3" y2="15" />
                  </svg>
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ font: "500 18px Inter, system-ui, sans-serif", color: '#F4F4F2' }}>Property Photos</span>
                  <span style={{ color: '#8A8C91', font: '400 13px Inter, system-ui, sans-serif' }}>
                    Drag & drop or browse photos
                  </span>
                  <span className="spec-tag" style={{ margin: '4px auto 0', fontSize: '11px' }}>
                    JPG · PNG · HEIC
                  </span>
                </div>
                <input className="sr" type="file" name="photos" accept="image/*" multiple />
              </label>

              <label className="drop-zone-premium">
                <span className="drop-icon-wrap">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF792E"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ font: "500 18px Inter, system-ui, sans-serif", color: '#F4F4F2' }}>Purchase Contract</span>
                  <span style={{ color: '#8A8C91', font: '400 13px Inter, system-ui, sans-serif' }}>
                    Upload signed agreement (Optional)
                  </span>
                  <span className="spec-tag" style={{ margin: '4px auto 0', fontSize: '11px' }}>
                    Secure PDF Upload
                  </span>
                </div>
                <input className="sr" type="file" name="contract" accept="application/pdf" />
              </label>
            </div>
          </div>

          {/* Section 05: Agreement & Authorization */}
          <div className="form-section-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span className="glass-pill" style={{ color: '#FF792E', borderColor: 'rgba(255,121,46,0.3)' }}>
                STEP 05
              </span>
              <h2 style={{ margin: '0', font: "400 24px/1.2 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Wholesaler agreement & confirmation
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label className="check-card-row">
                <input type="checkbox" name="contract_interest" required />
                <span>
                  <strong style={{ color: '#F4F4F2', display: 'block' }}>Valid Contractual Interest</strong>
                  I confirm that I or my entity hold a valid, signed purchase agreement and equitable interest in this property.
                </span>
              </label>

              <label className="check-card-row">
                <input type="checkbox" name="authority" required />
                <span>
                  <strong style={{ color: '#F4F4F2', display: 'block' }}>Marketing Authorization</strong>
                  I authorize Dispo With Don to market this opportunity exclusively or co-dispo to their verified cash buyers network.
                </span>
              </label>

              <label className="check-card-row">
                <input type="checkbox" name="split" required />
                <span>
                  <strong style={{ color: '#FF792E', display: 'block' }}>55/45 Assignment Split</strong>
                  I agree to the standard 55/45 assignment fee split (55% to me as the wholesaler, 45% to Dispo With Don) paid at title.
                </span>
              </label>
            </div>
          </div>

          {/* Form Actions Deck */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              paddingTop: '12px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '360px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#A9ABB0', font: '500 12px Inter, system-ui, sans-serif' }}>
                <span style={{ color: '#FF792E' }}>⚡ Same-day underwriting</span>
                <span>•</span>
                <span style={{ color: '#FF792E' }}>🔒 256-bit secure</span>
              </div>
              <span style={{ color: '#8A8C91', font: '400 13px/1.5 Inter, system-ui, sans-serif' }}>
                We review every deal submission within 4 business hours and call or text you right away.
              </span>
            </div>

            <button
              type="submit"
              className="btn-o"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
                minHeight: '62px',
                padding: '0 10px 0 32px',
                border: '0',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #FF792E 0%, #FF9454 100%)',
                boxShadow: '0 12px 30px rgba(255, 121, 46, 0.35)',
                color: '#141414',
                font: '600 16px Inter, system-ui, sans-serif',
                cursor: 'pointer',
              }}
            >
              Submit Deal for Dispo
              <span
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '99px',
                  background: '#141414',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="2.4"
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
