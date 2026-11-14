import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Img from '../components/Img'
import Ticker from '../components/Ticker'
import { img } from '../lib/images'

const MARQUEE = ['Good deals', 'Serious buyers', 'Real closings']

export default function Home() {
  usePageTitle('Home')
  return (
    <>
      <Header active="Home" />
      <section
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          paddingLeft: '32px',
          paddingRight: '32px',
          position: 'relative',
          paddingTop: '88px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
            gap: '72px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '34px' }}>
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
              Disposition services for real estate wholesalers
            </span>
            <h1
              style={{
                margin: '0',
                font: "400 clamp(60px, 7.4vw, 116px)/0.96 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              You find the deal.
              <br />
              <em style={{ fontStyle: 'italic', color: '#FF792E' }}>We help find the buyer.</em>
            </h1>
            <p
              style={{
                margin: '0',
                maxWidth: '520px',
                color: '#A9ABB0',
                font: '400 18px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              You've done the work to get a property under contract. Let Dispo With Don market the opportunity, connect
              it with investors who actually close, and coordinate every step to the closing table.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
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
                to="/buyers-network"
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
                Join Our Buyers Network
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
            <div style={{ display: 'flex', gap: '36px', paddingTop: '14px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ font: "400 34px/1 Inter, system-ui, sans-serif" }}>
                  1,800
                  <span style={{ color: '#FF792E' }}>+</span>
                </span>
                <span
                  style={{
                    color: '#8A8C91',
                    font: '500 10px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Cash buyers
                </span>
              </div>
              <div style={{ width: '1px', background: '#262628' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ font: "400 34px/1 Inter, system-ui, sans-serif" }}>
                  12 <span style={{ fontSize: '20px', color: '#A9ABB0' }}>days</span>
                </span>
                <span
                  style={{
                    color: '#8A8C91',
                    font: '500 10px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Median to assign
                </span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-80px -60px -40px -40px',
                borderRadius: '999px',
                background: 'radial-gradient(closest-side, rgba(255,121,46,.22), transparent)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'relative',
                background: 'rgba(26,26,27,.92)',
                border: '1px solid #343437',
                borderRadius: '24px',
                padding: '22px',
                display: 'flex',
                flexDirection: 'column',
                gap: '22px',
                boxShadow: '0 40px 80px rgba(0,0,0,.5)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Featured deal
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#FF792E',
                    font: '500 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                  Just listed
                </span>
              </div>
              <div
                className="ph"
                style={{
                  position: 'relative',
                  height: '250px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #262628',
                }}
              >
                <Img src={img.craftsman} alt="Front exterior of the Oakwood Craftsman, the featured wholesale deal in Columbus, Ohio" width={1200} height={800} priority />
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
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ font: "400 34px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                  Oakwood Craftsman
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#A9ABB0',
                    font: '400 14px Inter, system-ui, sans-serif',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
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
                  Columbus, OH · 3 bd · 2 ba · 1,420 sq ft
                </span>
              </div>
              <div style={{ height: '1px', background: '#262628' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                  <span style={{ font: "400 26px/1 Inter, system-ui, sans-serif" }}>$148,500</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span
                    style={{
                      color: '#8A8C91',
                      font: '500 10px Inter, system-ui, sans-serif',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    ARV
                  </span>
                  <span style={{ font: "400 26px/1 Inter, system-ui, sans-serif" }}>$235,000</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span
                    style={{
                      color: '#8A8C91',
                      font: '500 10px Inter, system-ui, sans-serif',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Spread
                  </span>
                  <span style={{ font: "400 26px/1 Inter, system-ui, sans-serif", color: '#FF792E' }}>
                    $48,500
                  </span>
                </div>
              </div>
              <Link
                to="/deals/oakwood-craftsman"
                className="btn-g"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  minHeight: '52px',
                  border: '1px solid #343437',
                  borderRadius: '999px',
                  font: '500 15px Inter, system-ui, sans-serif',
                }}
              >
                View deal{' '}
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
            <div
              style={{
                position: 'relative',
                alignSelf: 'flex-end',
                width: 'min(340px, 100%)',
                marginTop: '-70px',
                marginRight: '-24px',
                background: '#141414',
                border: '1px solid #343437',
                borderRadius: '20px',
                padding: '22px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 30px 60px rgba(0,0,0,.55)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '500 10px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Fee split
                </span>
                <span style={{ font: "400 40px/1 Inter, system-ui, sans-serif" }}>
                  55
                  <span style={{ color: '#FF792E' }}>/</span>
                  45
                </span>
              </div>
              <div style={{ display: 'flex', height: '4px', gap: '4px' }}>
                <div style={{ width: '55%', background: '#FF792E', borderRadius: '99px' }} />
                <div style={{ width: '45%', background: '#343437', borderRadius: '99px' }} />
              </div>
              <span style={{ color: '#8A8C91', font: '400 12px/1.5 Inter, system-ui, sans-serif' }}>
                In favor of the wholesaler who brings the deal.
              </span>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: '72px' }}>
          <form
            onSubmit={preventSubmit}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'stretch',
              background: '#1A1A1B',
              border: '1px solid #262628',
              borderRadius: '999px',
              padding: '8px',
              gap: '4px',
            }}
          >
            <label
              style={{
                flex: '1 1 200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '4px',
                padding: '10px 26px',
                borderRight: '1px solid #262628',
              }}
            >
              <span
                style={{
                  color: '#8A8C91',
                  font: '500 10px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Market
              </span>
              <select className="srch">
                <option>All markets</option>
                <option>Columbus, OH</option>
                <option>Indianapolis, IN</option>
                <option>Charlotte, NC</option>
                <option>Atlanta, GA</option>
                <option>Memphis, TN</option>
              </select>
            </label>
            <label
              style={{
                flex: '1 1 200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '4px',
                padding: '10px 26px',
                borderRight: '1px solid #262628',
              }}
            >
              <span
                style={{
                  color: '#8A8C91',
                  font: '500 10px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Property type
              </span>
              <select className="srch">
                <option>Any type</option>
                <option>Single-family</option>
                <option>Multifamily</option>
                <option>Condo / Townhome</option>
                <option>Land</option>
              </select>
            </label>
            <label
              style={{
                flex: '1 1 200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '4px',
                padding: '10px 26px',
              }}
            >
              <span
                style={{
                  color: '#8A8C91',
                  font: '500 10px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Price range
              </span>
              <select className="srch">
                <option>Any price</option>
                <option>Under $100k</option>
                <option>$100k – $250k</option>
                <option>$250k – $500k</option>
                <option>$500k+</option>
              </select>
            </label>
            <Link
              to="/deals"
              className="btn-o"
              style={{
                flex: '0 0 auto',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                minHeight: '60px',
                padding: '0 30px',
                borderRadius: '999px',
                background: '#FF792E',
                color: '#141414',
                font: '600 15px Inter, system-ui, sans-serif',
              }}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Explore Available Deals
            </Link>
          </form>
        </div>
        <div style={{ marginTop: '56px', display: 'flex', alignItems: 'center', gap: '32px', overflow: 'hidden' }}>
          <span style={{ flex: 'none' }}>
            <span
              style={{
                color: '#8A8C91',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Active markets
            </span>
          </span>
          <div
            style={{
              flex: '1',
              overflow: 'hidden',
              color: '#A9ABB0',
              font: "400 22px Inter, system-ui, sans-serif",
            }}
          >
            <div className="tick" style={{ gap: '40px' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Columbus
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Indianapolis
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Charlotte
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Atlanta
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Memphis
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Cleveland
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Louisville
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Columbus
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Indianapolis
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Charlotte
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Atlanta
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Memphis
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Cleveland
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '40px' }}>
                Louisville
                <span style={{ color: '#FF792E', fontSize: '7px' }}>◆</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ maxWidth: '1320px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '150px' }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '32px',
            marginBottom: '56px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '720px' }}>
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
              Available deals
            </span>
            <h2
              style={{
                margin: '0',
                font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              Off-market deals, <em style={{ fontStyle: 'italic', color: '#FF792E' }}>ready to assign.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '400px' }}>
            <p
              style={{
                margin: '0',
                maxWidth: '400px',
                color: '#A9ABB0',
                font: '400 16px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Contracted opportunities with disclosed scope and the numbers a buyer checks first. Registered buyers see
              new inventory before anyone else.
            </p>
            <Link
              to="/deals"
              className="lnk"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                font: '500 15px Inter, system-ui, sans-serif',
              }}
            >
              View all deals
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF792E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px 28px' }}>
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
                    height: '400px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.craftsman} alt="Front exterior of the Oakwood Craftsman single-family home in Columbus, Ohio" width={1200} height={900} />
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
                    height: '400px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.duplex} alt="Brick duplex exterior at Linden Street, a multifamily wholesale deal" width={1200} height={900} />
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
                    height: '400px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.condo} alt="Modern condo building exterior at Penrose Court" width={1200} height={900} />
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
        </div>
      </section>
      <section
        style={{ maxWidth: '1320px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '150px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            rowGap: '40px',
            padding: '56px 0',
            borderTop: '1px solid #262628',
            borderBottom: '1px solid #262628',
          }}
        >
          <div style={{ padding: '8px 32px 8px 0px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span
              style={{
                font: "400 clamp(56px, 6vw, 88px)/0.9 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              1,800
              <span style={{ color: '#FF792E' }}>+</span>
            </span>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Verified cash buyers
            </span>
          </div>
          <div
            style={{
              padding: '8px 32px 8px 32px',
              borderLeft: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            <span
              style={{
                font: "400 clamp(56px, 6vw, 88px)/0.9 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              340
              <span style={{ color: '#FF792E' }}>+</span>
            </span>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Deals assigned since 2019
            </span>
          </div>
          <div
            style={{
              padding: '8px 32px 8px 32px',
              borderLeft: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            <span
              style={{
                font: "400 clamp(56px, 6vw, 88px)/0.9 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              12
            </span>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Median days to assign
            </span>
          </div>
          <div
            style={{
              padding: '8px 32px 8px 32px',
              borderLeft: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            <span
              style={{
                font: "400 clamp(56px, 6vw, 88px)/0.9 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              55/45
            </span>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Fee split in your favor
            </span>
          </div>
        </div>
      </section>
      <section
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingTop: '150px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
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
            How it works
          </span>
          <h2
            style={{
              margin: '0',
              font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
              letterSpacing: '-0.015em',
            }}
          >
            Three steps from <em style={{ fontStyle: 'italic', color: '#FF792E' }}>contract</em> to closing.
          </h2>
          <p
            style={{
              margin: '0',
              maxWidth: '440px',
              color: '#A9ABB0',
              font: '400 16px/1.7 Inter, system-ui, sans-serif',
            }}
          >
            Every deal is different, but the way we work it stays the same: honest review, targeted marketing, and one
            point of contact who knows where your file stands.
          </p>
          <div style={{ paddingTop: '8px' }}>
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
          </div>
          <div
            className="ph2"
            style={{
              position: 'relative',
              height: '300px',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid #262628',
              marginTop: '24px',
            }}
          >
            <Img src={img.signing} alt="Wholesaler signing a purchase contract during a disposition handoff" width={1200} height={800} />
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
              Walkthrough
            </span>
          </div>
        </div>
        <ol style={{ listStyle: 'none', margin: '0', padding: '0', borderTop: '1px solid #262628' }}>
          <li
            style={{
              display: 'grid',
              gridTemplateColumns: '80px minmax(0, 1fr)',
              gap: '20px',
              padding: '34px 0',
              borderBottom: '1px solid #262628',
            }}
          >
            <span style={{ color: '#FF792E', font: "italic 400 44px/1 Inter, system-ui, sans-serif" }}>01</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ font: "400 34px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Submit
              </span>
              <span style={{ color: '#A9ABB0', font: '400 16px/1.7 Inter, system-ui, sans-serif', maxWidth: '480px' }}>
                Send us your contracted deal: the address, your numbers, photos and the closing timeline.
              </span>
            </div>
          </li>
          <li
            style={{
              display: 'grid',
              gridTemplateColumns: '80px minmax(0, 1fr)',
              gap: '20px',
              padding: '34px 0',
              borderBottom: '1px solid #262628',
            }}
          >
            <span style={{ color: '#FF792E', font: "italic 400 44px/1 Inter, system-ui, sans-serif" }}>02</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ font: "400 34px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Market
              </span>
              <span style={{ color: '#A9ABB0', font: '400 16px/1.7 Inter, system-ui, sans-serif', maxWidth: '480px' }}>
                We evaluate and promote the opportunity to buyers in our network who match the deal.
              </span>
            </div>
          </li>
          <li
            style={{
              display: 'grid',
              gridTemplateColumns: '80px minmax(0, 1fr)',
              gap: '20px',
              padding: '34px 0',
              borderBottom: '1px solid #262628',
            }}
          >
            <span style={{ color: '#FF792E', font: "italic 400 44px/1 Inter, system-ui, sans-serif" }}>03</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ font: "400 34px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Coordinate
              </span>
              <span style={{ color: '#A9ABB0', font: '400 16px/1.7 Inter, system-ui, sans-serif', maxWidth: '480px' }}>
                We help connect interested buyers and advance the transaction toward closing.
              </span>
            </div>
          </li>
        </ol>
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
            padding: 'clamp(32px, 5vw, 80px)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '64px',
            alignItems: 'center',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '-200px',
              left: '-200px',
              width: '600px',
              height: '600px',
              borderRadius: '999px',
              background: 'radial-gradient(closest-side, rgba(255,121,46,.14), transparent)',
            }}
          />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '26px' }}>
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
              <span style={{ color: '#A9ABB0' }}>(03)</span>
              <span style={{ width: '32px', height: '1px', background: '#FF792E' }} />
              For wholesalers
            </span>
            <h2
              style={{
                margin: '0',
                font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              You bring the deal.
              <br />
              <em style={{ fontStyle: 'italic', color: '#FF792E' }}>You keep the bigger share.</em>
            </h2>
            <p
              style={{
                margin: '0',
                maxWidth: '480px',
                color: '#A9ABB0',
                font: '400 17px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Got a property under contract and need the right buyer? We handle wholesale dispositions, buyer outreach
              and deal marketing, and the larger cut of the assignment fee stays with you.
            </p>
            <div>
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
            </div>
          </div>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '36px' }}>
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
                    Dispo With Don
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
            <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #262628' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  borderBottom: '1px solid #262628',
                }}
              >
                <span style={{ font: "400 24px Inter, system-ui, sans-serif" }}>Wholesale dispositions</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  borderBottom: '1px solid #262628',
                }}
              >
                <span style={{ font: "400 24px Inter, system-ui, sans-serif" }}>Buyer outreach</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  borderBottom: '1px solid #262628',
                }}
              >
                <span style={{ font: "400 24px Inter, system-ui, sans-serif" }}>Deal marketing</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  borderBottom: '1px solid #262628',
                }}
              >
                <span style={{ font: "400 24px Inter, system-ui, sans-serif" }}>Transaction coordination</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{ maxWidth: '1320px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '150px' }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '32px',
            marginBottom: '56px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '720px' }}>
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
              <span style={{ color: '#A9ABB0' }}>(04)</span>
              <span style={{ width: '32px', height: '1px', background: '#FF792E' }} />
              What we do
            </span>
            <h2
              style={{
                margin: '0',
                font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              Everything between <em style={{ fontStyle: 'italic', color: '#FF792E' }}>contract</em> and close.
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '400px' }}>
            <p
              style={{
                margin: '0',
                maxWidth: '400px',
                color: '#A9ABB0',
                font: '400 16px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              One team, one point of contact, from the signed contract to a funded closing.
            </p>
            <Link
              to="/services"
              className="lnk"
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                font: '500 15px Inter, system-ui, sans-serif',
              }}
            >
              All services
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF792E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px 28px' }}>
          <Link to="/services" className="card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ borderRadius: '18px', overflow: 'hidden' }}>
              <div className="lift">
                <div
                  className="ph"
                  style={{
                    position: 'relative',
                    height: '380px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.handshake} alt="Dispositions manager closing a wholesale deal with a cash buyer" width={1200} height={900} />
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
                    Wholesale Dispositions
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>01</span>
              <span style={{ font: "400 32px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Wholesale Dispositions
              </span>
              <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif', maxWidth: '380px' }}>
                We take your contracted deal to market and work it through to a signed assignment.
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '6px',
                  font: '500 14px Inter, system-ui, sans-serif',
                }}
              >
                <span
                  className="arr"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '99px',
                    border: '1px solid #343437',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
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
                Learn more
              </span>
            </div>
          </Link>
          <Link to="/services" className="card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ borderRadius: '18px', overflow: 'hidden' }}>
              <div className="lift">
                <div
                  className="ph2"
                  style={{
                    position: 'relative',
                    height: '380px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.phone_call} alt="Buyer outreach call connecting a deal with a verified cash buyer" width={1200} height={900} />
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
                    Buyer Outreach
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>02</span>
              <span style={{ font: "400 32px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Buyer Outreach
              </span>
              <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif', maxWidth: '380px' }}>
                Targeted sends to verified cash buyers who match the market, price and property type.
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '6px',
                  font: '500 14px Inter, system-ui, sans-serif',
                }}
              >
                <span
                  className="arr"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '99px',
                    border: '1px solid #343437',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
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
                Learn more
              </span>
            </div>
          </Link>
          <Link to="/services" className="card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ borderRadius: '18px', overflow: 'hidden' }}>
              <div className="lift">
                <div
                  className="ph"
                  style={{
                    position: 'relative',
                    height: '380px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.marketing} alt="Deal marketing materials and property flyers laid out on a desk" width={1200} height={900} />
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
                    Deal Marketing
                  </span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>03</span>
              <span style={{ font: "400 32px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Deal Marketing
              </span>
              <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif', maxWidth: '380px' }}>
                Photos, walkthrough video and a deal sheet that leads with the numbers buyers check.
              </span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginTop: '6px',
                  font: '500 14px Inter, system-ui, sans-serif',
                }}
              >
                <span
                  className="arr"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '99px',
                    border: '1px solid #343437',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
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
                Learn more
              </span>
            </div>
          </Link>
        </div>
      </section>
      <section aria-hidden="true" style={{ paddingTop: '150px', overflow: 'hidden' }}>
        <Ticker
          items={MARQUEE}
          className="mq outline"
          gap="64px"
          diamond="40px"
          style={{
            font: "italic 400 clamp(80px, 10vw, 160px)/1 Inter, system-ui, sans-serif",
            letterSpacing: '-0.02em',
            whiteSpace: 'nowrap',
          }}
        />
      </section>
      <section
        style={{ maxWidth: '1320px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '150px' }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '36px',
            textAlign: 'center',
            maxWidth: '1040px',
            margin: '0 auto',
          }}
        >
          <span
            aria-hidden="true"
            style={{ color: '#FF792E', font: "400 120px/0.5 Inter, system-ui, sans-serif", height: '50px' }}
          >
            “
          </span>
          <p
            style={{
              margin: '0',
              font: "400 clamp(30px, 3.4vw, 48px)/1.22 Inter, system-ui, sans-serif",
              letterSpacing: '-0.01em',
            }}
          >
            I had a contract sitting at day nineteen with nothing moving. Don repriced it, sent it to the right buyers
            and had it <em style={{ fontStyle: 'italic', color: '#FF792E' }}>assigned inside a week.</em> He's my first
            call now.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span
              style={{
                width: '52px',
                height: '52px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FF792E',
                font: "italic 400 20px Inter, system-ui, sans-serif",
              }}
            >
              MT
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
              <span style={{ font: '500 16px Inter, system-ui, sans-serif' }}>Marcus Thompson</span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Wholesaler · Columbus, OH
              </span>
            </div>
          </div>
        </div>
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
            <span style={{ color: '#A9ABB0' }}>(05)</span>
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
            Questions, <em style={{ fontStyle: 'italic', color: '#FF792E' }}>answered.</em>
          </h2>
          <p
            style={{
              margin: '0',
              maxWidth: '380px',
              color: '#A9ABB0',
              font: '400 16px/1.7 Inter, system-ui, sans-serif',
            }}
          >
            Don't see yours? Send the deal over and ask. We'll tell you straight.
          </p>
          <div style={{ paddingTop: '8px' }}>
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
              Contact us
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
                  How is the assignment fee split?
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
              55/45, in favor of the wholesaler who brings the deal. You keep 55% of the assignment fee and Dispo With
              Don earns 45%, agreed in writing before we market anything.
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
                  Do I need the property under contract first?
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
              Yes. We market contracted deals with assignment rights in place. If you're still negotiating, call us
              early and we'll tell you whether the numbers are likely to work.
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
                  Which markets do you work in?
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
              Our buyer network is nationwide, with the most depth across the Midwest and Southeast, including Columbus,
              Indianapolis, Charlotte, Atlanta and Memphis.
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
                  How fast do deals usually assign?
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
              Light-scope deals priced correctly often assign within a week. Heavier rehabs take longer because the
              buyer pool is smaller.
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
              Got a deal <em style={{ fontStyle: 'italic', color: '#FF792E' }}>under contract?</em>
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
              Send the address, your numbers and the contract timeline. We review every submission and come back with an
              honest read.
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
