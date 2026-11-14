import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Img from '../components/Img'
import { img } from '../lib/images'

export default function Deals() {
  usePageTitle('Available Deals')
  return (
    <>
      <Header active="Deals" />
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
          <span style={{ color: '#343437' }}>/</span> <span style={{ color: '#F4F4F2' }}>Deals</span>
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
              Inventory
            </span>
            <h1
              style={{
                margin: '0',
                font: "400 clamp(56px, 7vw, 108px)/0.96 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Available <em style={{ fontStyle: 'italic', color: '#FF792E' }}>deals.</em>
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
              Contracted, off-market opportunities with disclosed scope and supporting comps. Proof of funds required to
              schedule a walkthrough.
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
          paddingTop: '48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
        }}
      >
        <form
          onSubmit={preventSubmit}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '28px',
            alignItems: 'flex-end',
            padding: '28px 32px',
            background: '#1A1A1B',
            border: '1px solid #262628',
            borderRadius: '20px',
          }}
        >
          <div style={{ flex: '2 1 240px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Search
              </span>
              <input className="fld" type="text" name="q" placeholder="City, ZIP or street" />
            </label>
          </div>
          <div style={{ flex: '1 1 160px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Market
              </span>
              <select className="fld" name="market">
                <option>All markets</option>
                <option>Columbus, OH</option>
                <option>Indianapolis, IN</option>
                <option>Charlotte, NC</option>
                <option>Atlanta, GA</option>
                <option>Memphis, TN</option>
              </select>
            </label>
          </div>
          <div style={{ flex: '1 1 160px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Property type
              </span>
              <select className="fld" name="type">
                <option>Any type</option>
                <option>Single-family</option>
                <option>Multifamily</option>
                <option>Condo / Townhome</option>
                <option>Land</option>
              </select>
            </label>
          </div>
          <div style={{ flex: '1 1 160px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Price
              </span>
              <select className="fld" name="price">
                <option>Any price</option>
                <option>Under $100k</option>
                <option>$100k – $250k</option>
                <option>$250k – $500k</option>
                <option>$500k+</option>
              </select>
            </label>
          </div>
          <div style={{ flex: '1 1 160px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Sort by
              </span>
              <select className="fld" name="sort">
                <option>Newest first</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
                <option>Biggest spread</option>
              </select>
            </label>
          </div>
          <button
            type="button"
            className="btn-o"
            style={{
              flex: '0 0 auto',
              minHeight: '52px',
              padding: '0 28px',
              border: '0',
              borderRadius: '999px',
              background: '#FF792E',
              color: '#141414',
              font: '600 15px Inter, system-ui, sans-serif',
              cursor: 'pointer',
            }}
          >
            Apply filters
          </button>
        </form>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '16px',
            borderBottom: '1px solid #262628',
          }}
        >
          <nav
            aria-label="Deal categories"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', font: '500 14px Inter, system-ui, sans-serif' }}
          >
            <a href="#" style={{ paddingBottom: '14px', borderBottom: '1px solid #FF792E', color: '#F4F4F2' }}>
              All deals · 18
            </a>
            <a className="nav-a" href="#" style={{ paddingBottom: '14px' }}>
              Single-family · 9
            </a>
            <a className="nav-a" href="#" style={{ paddingBottom: '14px' }}>
              Multifamily · 5
            </a>
            <a className="nav-a" href="#" style={{ paddingBottom: '14px' }}>
              Condo · 3
            </a>
            <a className="nav-a" href="#" style={{ paddingBottom: '14px' }}>
              Land · 1
            </a>
          </nav>
          <span style={{ paddingBottom: '14px', color: '#8A8C91', font: '400 14px Inter, system-ui, sans-serif' }}>
            Showing 6 of 18
          </span>
        </div>
      </section>
      <section
        style={{ maxWidth: '1320px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '48px' }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px 28px' }}>
          <Link
            to="/deals/oakwood-craftsman"
            className="card"
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ borderRadius: '18px', overflow: 'hidden' }}>
              <div className="lift">
                <div
                  className="ph"
                  style={{
                    position: 'relative',
                    height: '340px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.craftsman} alt="Front exterior of the Oakwood Craftsman in Columbus, Ohio" width={1200} height={900} priority />
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
                    Single-family
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(20,20,20,.78)',
                      border: '1px solid #343437',
                      borderRadius: '999px',
                      padding: '7px 12px',
                      font: '500 11px Inter, system-ui, sans-serif',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                    Available
                  </span>
                  <span
                    className="arr"
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '99px',
                      border: '1px solid #343437',
                      background: 'rgba(20,20,20,.78)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F4F4F2',
                    }}
                  >
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
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Columbus, OH
                </span>
              </span>
              <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Oakwood Craftsman
              </span>
            </div>
            <div style={{ height: '1px', background: '#262628' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  color: '#A9ABB0',
                  font: '400 14px Inter, system-ui, sans-serif',
                }}
              >
                <span>3 bd · 2 ba · 1,420 sq ft</span>
                <span style={{ color: '#8A8C91', fontSize: '13px' }}>ARV $235,000 · Repairs $38,000</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span
                  style={{
                    color: '#8A8C91',
                    font: '500 10px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Asking
                </span>
                <span style={{ font: "400 30px/1 Inter, system-ui, sans-serif" }}>$148,500</span>
              </div>
            </div>
          </Link>
          <Link
            to="/deals/oakwood-craftsman"
            className="card"
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ borderRadius: '18px', overflow: 'hidden' }}>
              <div className="lift">
                <div
                  className="ph2"
                  style={{
                    position: 'relative',
                    height: '340px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.duplex} alt="Linden Street Duplex, a two-unit multifamily investment property" width={1200} height={900} />
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
                    Multifamily
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(20,20,20,.78)',
                      border: '1px solid #343437',
                      borderRadius: '999px',
                      padding: '7px 12px',
                      font: '500 11px Inter, system-ui, sans-serif',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                    New
                  </span>
                  <span
                    className="arr"
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '99px',
                      border: '1px solid #343437',
                      background: 'rgba(20,20,20,.78)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F4F4F2',
                    }}
                  >
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
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Columbus, OH
                </span>
              </span>
              <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Linden Street Duplex
              </span>
            </div>
            <div style={{ height: '1px', background: '#262628' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  color: '#A9ABB0',
                  font: '400 14px Inter, system-ui, sans-serif',
                }}
              >
                <span>4 bd · 2 ba · 2,140 sq ft</span>
                <span style={{ color: '#8A8C91', fontSize: '13px' }}>ARV $285,000 · Repairs $41,000</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span
                  style={{
                    color: '#8A8C91',
                    font: '500 10px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Asking
                </span>
                <span style={{ font: "400 30px/1 Inter, system-ui, sans-serif" }}>$192,000</span>
              </div>
            </div>
          </Link>
          <Link
            to="/deals/oakwood-craftsman"
            className="card"
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ borderRadius: '18px', overflow: 'hidden' }}>
              <div className="lift">
                <div
                  className="ph"
                  style={{
                    position: 'relative',
                    height: '340px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.condo} alt="Penrose Court Condo building exterior" width={1200} height={900} />
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
                    Condo
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(20,20,20,.78)',
                      border: '1px solid #343437',
                      borderRadius: '999px',
                      padding: '7px 12px',
                      font: '500 11px Inter, system-ui, sans-serif',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                    Available
                  </span>
                  <span
                    className="arr"
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '99px',
                      border: '1px solid #343437',
                      background: 'rgba(20,20,20,.78)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F4F4F2',
                    }}
                  >
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
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Charlotte, NC
                </span>
              </span>
              <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Penrose Court Condo
              </span>
            </div>
            <div style={{ height: '1px', background: '#262628' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  color: '#A9ABB0',
                  font: '400 14px Inter, system-ui, sans-serif',
                }}
              >
                <span>2 bd · 2 ba · 980 sq ft</span>
                <span style={{ color: '#8A8C91', fontSize: '13px' }}>ARV $148,000 · Repairs $12,000</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span
                  style={{
                    color: '#8A8C91',
                    font: '500 10px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Asking
                </span>
                <span style={{ font: "400 30px/1 Inter, system-ui, sans-serif" }}>$96,500</span>
              </div>
            </div>
          </Link>
          <Link
            to="/deals/oakwood-craftsman"
            className="card"
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ borderRadius: '18px', overflow: 'hidden' }}>
              <div className="lift">
                <div
                  className="ph2"
                  style={{
                    position: 'relative',
                    height: '340px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.ranch} alt="Maple Ridge Ranch, a single-story home with a front lawn" width={1200} height={900} />
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
                    Single-family
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(20,20,20,.78)',
                      border: '1px solid #343437',
                      borderRadius: '999px',
                      padding: '7px 12px',
                      font: '500 11px Inter, system-ui, sans-serif',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                    Available
                  </span>
                  <span
                    className="arr"
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '99px',
                      border: '1px solid #343437',
                      background: 'rgba(20,20,20,.78)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F4F4F2',
                    }}
                  >
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
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Indianapolis, IN
                </span>
              </span>
              <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Maple Ridge Ranch
              </span>
            </div>
            <div style={{ height: '1px', background: '#262628' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  color: '#A9ABB0',
                  font: '400 14px Inter, system-ui, sans-serif',
                }}
              >
                <span>3 bd · 1.5 ba · 1,260 sq ft</span>
                <span style={{ color: '#8A8C91', fontSize: '13px' }}>ARV $189,000 · Repairs $27,500</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span
                  style={{
                    color: '#8A8C91',
                    font: '500 10px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Asking
                </span>
                <span style={{ font: "400 30px/1 Inter, system-ui, sans-serif" }}>$121,000</span>
              </div>
            </div>
          </Link>
          <Link
            to="/deals/oakwood-craftsman"
            className="card"
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ borderRadius: '18px', overflow: 'hidden' }}>
              <div className="lift">
                <div
                  className="ph"
                  style={{
                    position: 'relative',
                    height: '340px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.townhomes} alt="Hillcrest Townhomes, a row of attached townhouses" width={1200} height={900} />
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
                    4-unit multifamily
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(20,20,20,.78)',
                      border: '1px solid #343437',
                      borderRadius: '999px',
                      padding: '7px 12px',
                      font: '500 11px Inter, system-ui, sans-serif',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#A9ABB0' }} />
                    Pending
                  </span>
                  <span
                    className="arr"
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '99px',
                      border: '1px solid #343437',
                      background: 'rgba(20,20,20,.78)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F4F4F2',
                    }}
                  >
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
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Atlanta, GA
                </span>
              </span>
              <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Hillcrest Townhomes
              </span>
            </div>
            <div style={{ height: '1px', background: '#262628' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  color: '#A9ABB0',
                  font: '400 14px Inter, system-ui, sans-serif',
                }}
              >
                <span>8 bd · 8 ba · 4,800 sq ft</span>
                <span style={{ color: '#8A8C91', fontSize: '13px' }}>ARV $610,000 · Repairs $64,000</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span
                  style={{
                    color: '#8A8C91',
                    font: '500 10px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Asking
                </span>
                <span style={{ font: "400 30px/1 Inter, system-ui, sans-serif" }}>$412,000</span>
              </div>
            </div>
          </Link>
          <Link
            to="/deals/oakwood-craftsman"
            className="card"
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ borderRadius: '18px', overflow: 'hidden' }}>
              <div className="lift">
                <div
                  className="ph2"
                  style={{
                    position: 'relative',
                    height: '340px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.modern} alt="Westbrook Modern, a contemporary single-family home in Memphis, Tennessee" width={1200} height={900} />
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
                    Single-family
                  </span>
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(20,20,20,.78)',
                      border: '1px solid #343437',
                      borderRadius: '999px',
                      padding: '7px 12px',
                      font: '500 11px Inter, system-ui, sans-serif',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                    New
                  </span>
                  <span
                    className="arr"
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '99px',
                      border: '1px solid #343437',
                      background: 'rgba(20,20,20,.78)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#F4F4F2',
                    }}
                  >
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
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Memphis, TN
                </span>
              </span>
              <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Westbrook Modern
              </span>
            </div>
            <div style={{ height: '1px', background: '#262628' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '12px' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  color: '#A9ABB0',
                  font: '400 14px Inter, system-ui, sans-serif',
                }}
              >
                <span>4 bd · 3 ba · 2,050 sq ft</span>
                <span style={{ color: '#8A8C91', fontSize: '13px' }}>ARV $305,000 · Repairs $22,000</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                <span
                  style={{
                    color: '#8A8C91',
                    font: '500 10px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Asking
                </span>
                <span style={{ font: "400 30px/1 Inter, system-ui, sans-serif" }}>$214,900</span>
              </div>
            </div>
          </Link>
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', paddingTop: '72px' }}
        >
          <a
            className="pg"
            href="#"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '99px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              font: "400 20px Inter, system-ui, sans-serif",
              background: '#FF792E',
              color: '#141414',
            }}
          >
            1
          </a>
          <a
            className="pg"
            href="#"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '99px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              font: "400 20px Inter, system-ui, sans-serif",
              border: '1px solid #343437',
            }}
          >
            2
          </a>
          <a
            className="pg"
            href="#"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '99px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              font: "400 20px Inter, system-ui, sans-serif",
              border: '1px solid #343437',
            }}
          >
            3
          </a>
          <a
            className="pg"
            href="#"
            aria-label="Next page"
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '99px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #343437',
            }}
          >
            <svg
              width="16"
              height="16"
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
          </a>
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
              See new deals <em style={{ fontStyle: 'italic', color: '#FF792E' }}>first.</em>
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
              Registered buyers get matched inventory by email or text before it reaches this page.
            </p>
            <div
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center', paddingTop: '6px' }}
            >
              <Link
                to="/buyers-network"
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
              </Link>
              <Link
                to="/contact"
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
                Talk to Don
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
