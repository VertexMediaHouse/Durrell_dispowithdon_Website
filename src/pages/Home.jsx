import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Img from '../components/Img'
import Ticker from '../components/Ticker'
import FeeSplitCalculator from '../components/FeeSplitCalculator'
import { img } from '../lib/images'

const MARQUEE = ['Good deals', 'Serious buyers', 'Real closings']

export default function Home() {
  usePageTitle('Home')
  return (
    <>
      <Header active="Home" />
      <section
        className="site-container"
        style={{
          position: 'relative',
          paddingTop: 'clamp(36px, 5vw, 64px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '56px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', maxWidth: '560px' }}>
            {/* Live Indicator Pill */}
            <div
              style={{
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 14px',
                borderRadius: '99px',
                background: 'rgba(255,121,46,0.08)',
                border: '1px solid rgba(255,121,46,0.3)',
                boxShadow: '0 2px 12px rgba(255,121,46,0.1)',
              }}
            >
              <span className="pulse-dot" />
              <span
                style={{
                  color: '#FF792E',
                  font: '600 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                18 Active Deals · 1,800+ Cash Buyers
              </span>
            </div>

            <h1
              style={{
                margin: '0',
                font: "400 clamp(42px, 5vw, 76px)/0.96 Inter, system-ui, sans-serif",
                letterSpacing: '-0.025em',
                color: '#F4F4F2',
              }}
            >
              You lock it up.
              <br />
              <em style={{ fontStyle: 'italic', color: '#FF792E' }}>We help move it.</em>
            </h1>

            <p
              style={{
                margin: '0',
                maxWidth: '480px',
                color: '#A9ABB0',
                font: '400 16px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Skip the tire-kickers and flaky buyers. Dispo With Don underwrites your contract, promotes it to vetted cash buyers who perform, and coordinates title through funding — with <strong>55% of the fee staying in your pocket.</strong>
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <Link
                to="/submit-deal"
                className="btn-o"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '14px',
                  minHeight: '54px',
                  padding: '0 8px 0 26px',
                  background: 'linear-gradient(135deg, #FF792E 0%, #FF9454 100%)',
                  boxShadow: '0 10px 24px rgba(255,121,46,0.3)',
                  borderRadius: '999px',
                  color: '#141414',
                  font: '600 15px Inter, system-ui, sans-serif',
                  textDecoration: 'none',
                }}
              >
                Submit Your Deal (55% Split)
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '99px',
                    background: '#141414',
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
                  gap: '10px',
                  minHeight: '54px',
                  padding: '0 24px',
                  border: '1px solid #343437',
                  borderRadius: '999px',
                  color: '#F4F4F2',
                  font: '500 15px Inter, system-ui, sans-serif',
                  textDecoration: 'none',
                }}
              >
                Join Buyers Network
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
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Compact Trust Stat Chips */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px', paddingTop: '8px' }}>
              <div className="hero-stat-card">
                <span style={{ font: "600 24px/1 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  1,800<span style={{ color: '#FF792E' }}>+</span>
                </span>
                <span style={{ color: '#8A8C91', font: '500 10px Inter, system-ui, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Verified Buyers
                </span>
              </div>
              <div className="hero-stat-card">
                <span style={{ font: "600 24px/1 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  12 <span style={{ fontSize: '15px', color: '#FF792E' }}>Days</span>
                </span>
                <span style={{ color: '#8A8C91', font: '500 10px Inter, system-ui, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Median to Assign
                </span>
              </div>
              <div className="hero-stat-card">
                <span style={{ font: "600 24px/1 Inter, system-ui, sans-serif", color: '#FF792E' }}>
                  55<span style={{ color: '#FF792E' }}>%</span>
                </span>
                <span style={{ color: '#8A8C91', font: '500 10px Inter, system-ui, sans-serif', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Your Fee Cut
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Column: Spotlight Deal + Docked Fee Split Card */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: '-80px -60px -40px -40px',
                borderRadius: '999px',
                background: 'radial-gradient(closest-side, rgba(255,121,46,.24), transparent)',
                pointerEvents: 'none',
              }}
            />

            {/* Spotlight Card */}
            <div
              style={{
                position: 'relative',
                background: 'linear-gradient(180deg, #1d1d20 0%, #161618 100%)',
                border: '1px solid #343438',
                borderRadius: '24px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                boxShadow: '0 40px 80px rgba(0,0,0,.65), 0 0 32px rgba(255,121,46,.1)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span
                  style={{
                    color: '#A9ABB0',
                    font: '600 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Featured Deal Spotlight
                </span>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#FF792E',
                    font: '600 11px Inter, system-ui, sans-serif',
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
                  height: '260px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid #262628',
                }}
              >
                <Img src={img.craftsman} alt="Front exterior of the Oakwood Craftsman, the featured wholesale deal in Columbus, Ohio" width={1200} height={800} priority />
                <div style={{ position: 'absolute', top: '14px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                  <span className="glass-pill">
                    <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                    Under Contract
                  </span>
                  <span className="spread-badge">
                    +$48,500 Spread
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#FF792E', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF792E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Columbus, OH
                </span>
                <span style={{ font: "500 32px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em', color: '#FFFFFF' }}>
                  Oakwood Craftsman
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '4px' }}>
                  <span className="spec-tag">3 Beds</span>
                  <span className="spec-tag">2 Baths</span>
                  <span className="spec-tag">1,420 Sq Ft</span>
                  <span className="spec-tag">Single Family</span>
                </div>
              </div>

              <div style={{ height: '1px', background: '#262628' }} />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span
                    style={{
                      color: '#8A8C91',
                      font: '500 10px Inter, system-ui, sans-serif',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Asking Price
                  </span>
                  <span style={{ font: "700 24px/1 Inter, system-ui, sans-serif", color: '#FFFFFF' }}>$148,500</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span
                    style={{
                      color: '#8A8C91',
                      font: '500 10px Inter, system-ui, sans-serif',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    ARV Target
                  </span>
                  <span style={{ font: "500 24px/1 Inter, system-ui, sans-serif", color: '#D4D5D8' }}>$235,000</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span
                    style={{
                      color: '#FF792E',
                      font: '600 10px Inter, system-ui, sans-serif',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Est. Spread
                  </span>
                  <span style={{ font: "700 24px/1 Inter, system-ui, sans-serif", color: '#FF792E' }}>
                    +$48,500
                  </span>
                </div>
              </div>

              <Link
                to="/deals/oakwood-craftsman"
                className="btn-o"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  minHeight: '50px',
                  borderRadius: '999px',
                  background: 'linear-gradient(135deg, #FF792E 0%, #FF9454 100%)',
                  color: '#141414',
                  font: '600 14px Inter, system-ui, sans-serif',
                  textDecoration: 'none',
                }}
              >
                View Deal Package & Comps
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Companion Fee Split Dock */}
            <div
              className="fee-split-card"
              style={{
                background: 'linear-gradient(180deg, #18181A 0%, #121213 100%)',
                border: '1px solid #2E2E32',
                borderRadius: '20px',
                padding: '20px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                boxShadow: '0 24px 50px rgba(0,0,0,.6)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span
                  style={{
                    color: '#FF792E',
                    font: '600 11px Inter, system-ui, sans-serif',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  Wholesaler Priority Split
                </span>
                <span style={{ font: "600 36px/1 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  55<span style={{ color: '#FF792E' }}>%</span>
                  <span style={{ fontSize: '20px', color: '#6A6C72', margin: '0 6px' }}>/</span>
                  <span style={{ fontSize: '24px', color: '#8A8C91' }}>45%</span>
                </span>
              </div>
              <div style={{ display: 'flex', height: '6px', borderRadius: '99px', overflow: 'hidden', gap: '3px', background: '#101011', padding: '1px' }}>
                <div style={{ width: '55%', background: '#FF792E', borderRadius: '99px', boxShadow: '0 0 10px rgba(255,121,46,0.5)' }} />
                <div style={{ width: '45%', background: '#343437', borderRadius: '99px' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8A8C91', font: '400 12px Inter, system-ui, sans-serif' }}>
                <span>Wholesaler (You): 55%</span>
                <span>Dispo Team: 45%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar Filter */}
        <div style={{ paddingTop: '56px' }}>
          <form
            onSubmit={preventSubmit}
            className="search-bar-form"
            style={{
              background: 'linear-gradient(180deg, rgba(29, 29, 32, 0.9) 0%, rgba(20, 20, 22, 0.98) 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid #2C2C30',
              borderRadius: '999px',
              padding: '8px 10px',
              boxShadow: '0 24px 50px rgba(0, 0, 0, 0.55), 0 0 20px rgba(255, 121, 46, 0.05)',
            }}
          >
            <label
              className="search-field-divider"
              style={{
                flex: '1 1 200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '4px',
                padding: '10px 24px',
              }}
            >
              <span
                style={{
                  color: '#FF792E',
                  font: '600 10px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Target Market
              </span>
              <select className="srch" style={{ background: 'transparent', border: 0, color: '#F4F4F2', font: '500 15px Inter, system-ui, sans-serif', outline: 'none', cursor: 'pointer' }}>
                <option value="">All Active Markets (Nationwide)</option>
                <option value="columbus">Columbus, OH (Hub)</option>
                <option value="indy">Indianapolis, IN</option>
                <option value="charlotte">Charlotte, NC</option>
                <option value="atlanta">Atlanta, GA</option>
                <option value="memphis">Memphis, TN</option>
                <option value="cleveland">Cleveland, OH</option>
              </select>
            </label>
            <label
              className="search-field-divider"
              style={{
                flex: '1 1 200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '4px',
                padding: '10px 24px',
              }}
            >
              <span
                style={{
                  color: '#8A8C91',
                  font: '600 10px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                Property Type
              </span>
              <select className="srch" style={{ background: 'transparent', border: 0, color: '#F4F4F2', font: '500 15px Inter, system-ui, sans-serif', outline: 'none', cursor: 'pointer' }}>
                <option value="">Any Asset Class</option>
                <option value="sfr">Single-Family Residence (SFR)</option>
                <option value="mfr">Multifamily (2–4 Units)</option>
                <option value="condo">Condo / Townhome</option>
                <option value="land">Residential Land / Lot</option>
              </select>
            </label>
            <label
              style={{
                flex: '1 1 200px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '4px',
                padding: '10px 24px',
              }}
            >
              <span
                style={{
                  color: '#8A8C91',
                  font: '600 10px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                Contract Price
              </span>
              <select className="srch" style={{ background: 'transparent', border: 0, color: '#F4F4F2', font: '500 15px Inter, system-ui, sans-serif', outline: 'none', cursor: 'pointer' }}>
                <option value="">Any Purchase Price</option>
                <option value="under-100k">Entry Level (Under $100k)</option>
                <option value="100k-250k">Core Wholesale ($100k – $250k)</option>
                <option value="250k-500k">Mid-Market ($250k – $500k)</option>
                <option value="500k-plus">High Value ($500k+)</option>
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
                minHeight: '56px',
                padding: '0 28px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #FF792E 0%, #FF9454 100%)',
                color: '#141414',
                font: '600 15px Inter, system-ui, sans-serif',
                boxShadow: '0 8px 24px rgba(255,121,46,0.3)',
                transition: 'all 0.25s ease',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              Explore 18 Deals
            </Link>
          </form>
        </div>
        <div
          style={{
            marginTop: '44px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            padding: '14px 22px',
            background: 'rgba(24, 24, 27, 0.45)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          <span style={{ flex: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '99px', background: '#FF792E', boxShadow: '0 0 8px rgba(255,121,46,0.6)' }} />
            <span
              style={{
                color: '#8A8C91',
                font: '600 11px Inter, system-ui, sans-serif',
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
              font: "400 19px Inter, system-ui, sans-serif",
              maskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 4%, black 96%, transparent)',
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
        className="site-container" style={{ paddingTop: 'var(--section-pad)' }}
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px' }}>
          {/* Card 1: Oakwood Craftsman */}
          <Link to="/deals/oakwood-craftsman" className="deal-card-premium">
            <div className="card-img-wrap ph">
              <Img src={img.craftsman} alt="Front exterior of the Oakwood Craftsman single-family home in Columbus, Ohio" width={1200} height={900} />
              <div style={{ position: 'absolute', top: '14px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                <span className="glass-pill">
                  <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                  Available
                </span>
                <span className="spread-badge">
                  +$48,500 Spread
                </span>
              </div>
            </div>

            <div style={{ padding: '20px 8px 8px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#FF792E', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF792E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Columbus, OH
                </span>
                <h3 style={{ margin: 0, font: "500 26px/1.15 Inter, system-ui, sans-serif", letterSpacing: '-0.01em', color: '#FFFFFF' }}>
                  Oakwood Craftsman
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="spec-tag">3 Beds</span>
                <span className="spec-tag">2 Baths</span>
                <span className="spec-tag">1,420 Sq Ft</span>
                <span className="spec-tag">Single Family</span>
              </div>

              <div style={{ height: '1px', background: '#262628' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: '#8A8C91', font: '500 10px Inter, system-ui, sans-serif', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    Contract Asking
                  </span>
                  <span style={{ font: "700 28px/1 Inter, system-ui, sans-serif", color: '#FFFFFF' }}>
                    $148,500
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <span style={{ color: '#8A8C91', font: '500 10px Inter, system-ui, sans-serif', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    ARV / Repairs
                  </span>
                  <span style={{ font: "500 14px Inter, system-ui, sans-serif", color: '#A9ABB0' }}>
                    $235k · $38k rep
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 2: Linden Street Duplex */}
          <Link to="/deals/oakwood-craftsman" className="deal-card-premium">
            <div className="card-img-wrap ph2">
              <Img src={img.duplex} alt="Brick duplex exterior at Linden Street, a multifamily wholesale deal" width={1200} height={900} />
              <div style={{ position: 'absolute', top: '14px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                <span className="glass-pill">
                  <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                  Just Listed
                </span>
                <span className="spread-badge">
                  +$52,000 Spread
                </span>
              </div>
            </div>

            <div style={{ padding: '20px 8px 8px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#FF792E', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF792E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Columbus, OH
                </span>
                <h3 style={{ margin: 0, font: "500 26px/1.15 Inter, system-ui, sans-serif", letterSpacing: '-0.01em', color: '#FFFFFF' }}>
                  Linden Street Duplex
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="spec-tag">4 Beds</span>
                <span className="spec-tag">2 Baths</span>
                <span className="spec-tag">2,140 Sq Ft</span>
                <span className="spec-tag">Multifamily</span>
              </div>

              <div style={{ height: '1px', background: '#262628' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: '#8A8C91', font: '500 10px Inter, system-ui, sans-serif', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    Contract Asking
                  </span>
                  <span style={{ font: "700 28px/1 Inter, system-ui, sans-serif", color: '#FFFFFF' }}>
                    $192,000
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <span style={{ color: '#8A8C91', font: '500 10px Inter, system-ui, sans-serif', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    ARV / Repairs
                  </span>
                  <span style={{ font: "500 14px Inter, system-ui, sans-serif", color: '#A9ABB0' }}>
                    $285k · $41k rep
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Card 3: Penrose Court Condo */}
          <Link to="/deals/oakwood-craftsman" className="deal-card-premium">
            <div className="card-img-wrap ph">
              <Img src={img.condo} alt="Modern condo building exterior at Penrose Court" width={1200} height={900} />
              <div style={{ position: 'absolute', top: '14px', left: '14px', right: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 2 }}>
                <span className="glass-pill">
                  <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                  Available
                </span>
                <span className="spread-badge">
                  +$39,500 Spread
                </span>
              </div>
            </div>

            <div style={{ padding: '20px 8px 8px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#FF792E', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF792E" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Charlotte, NC
                </span>
                <h3 style={{ margin: 0, font: "500 26px/1.15 Inter, system-ui, sans-serif", letterSpacing: '-0.01em', color: '#FFFFFF' }}>
                  Penrose Court Condo
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="spec-tag">2 Beds</span>
                <span className="spec-tag">2 Baths</span>
                <span className="spec-tag">980 Sq Ft</span>
                <span className="spec-tag">Condo</span>
              </div>

              <div style={{ height: '1px', background: '#262628' }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ color: '#8A8C91', font: '500 10px Inter, system-ui, sans-serif', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    Contract Asking
                  </span>
                  <span style={{ font: "700 28px/1 Inter, system-ui, sans-serif", color: '#FFFFFF' }}>
                    $96,500
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                  <span style={{ color: '#8A8C91', font: '500 10px Inter, system-ui, sans-serif', letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                    ARV / Repairs
                  </span>
                  <span style={{ font: "500 14px Inter, system-ui, sans-serif", color: '#A9ABB0' }}>
                    $148k · $12k rep
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <section
        className="site-container" style={{ paddingTop: 'var(--section-pad)' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '20px',
          }}
        >
          <div className="stat-box-modern">
            <span style={{ color: '#FF792E', font: '600 11px Inter, system-ui, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Buyer Network
            </span>
            <span style={{ font: "400 clamp(48px, 5.5vw, 76px)/0.9 Inter, system-ui, sans-serif", letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              1,800<span style={{ color: '#FF792E' }}>+</span>
            </span>
            <span style={{ color: '#A9ABB0', font: '400 14px/1.5 Inter, system-ui, sans-serif' }}>
              Verified cash buyers actively reviewing wholesale deals across core markets.
            </span>
          </div>

          <div className="stat-box-modern">
            <span style={{ color: '#FF792E', font: '600 11px Inter, system-ui, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Track Record
            </span>
            <span style={{ font: "400 clamp(48px, 5.5vw, 76px)/0.9 Inter, system-ui, sans-serif", letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              340<span style={{ color: '#FF792E' }}>+</span>
            </span>
            <span style={{ color: '#A9ABB0', font: '400 14px/1.5 Inter, system-ui, sans-serif' }}>
              Off-market deals successfully assigned to closing tables since 2019.
            </span>
          </div>

          <div className="stat-box-modern">
            <span style={{ color: '#FF792E', font: '600 11px Inter, system-ui, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Speed To Lockup
            </span>
            <span style={{ font: "400 clamp(48px, 5.5vw, 76px)/0.9 Inter, system-ui, sans-serif", letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              12 <span style={{ fontSize: '28px', color: '#FF792E' }}>Days</span>
            </span>
            <span style={{ color: '#A9ABB0', font: '400 14px/1.5 Inter, system-ui, sans-serif' }}>
              Median timeline from contract submission to signed assignment agreement.
            </span>
          </div>

          <div className="stat-box-modern">
            <span style={{ color: '#FF792E', font: '600 11px Inter, system-ui, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Wholesaler First
            </span>
            <span style={{ font: "400 clamp(48px, 5.5vw, 76px)/0.9 Inter, system-ui, sans-serif", letterSpacing: '-0.02em', color: '#FFFFFF' }}>
              55<span style={{ color: '#FF792E' }}>/</span>45
            </span>
            <span style={{ color: '#A9ABB0', font: '400 14px/1.5 Inter, system-ui, sans-serif' }}>
              Fee split strictly in your favor — keeping more revenue where it belongs.
            </span>
          </div>
        </div>
      </section>
      <section
        className="site-container" style={{ paddingTop: 'var(--section-pad)' }}
      >
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '32px',
            marginBottom: '64px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '620px' }}>
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
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '400px' }}>
            <p
              style={{
                margin: '0',
                color: '#A9ABB0',
                font: '400 16px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Every deal is different, but the way we work it stays the same: honest review, targeted marketing, and one
              point of contact who knows where your file stands.
            </p>
            <div>
              <Link
                to="/submit-deal"
                className="lnk"
                style={{
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  font: '500 15px Inter, system-ui, sans-serif',
                }}
              >
                Submit your deal
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
        </div>
        {/* Step cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
          <div className="how-it-works-card">
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '2px',
                background: 'linear-gradient(90deg, #FF792E 0%, transparent 100%)',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span className="step-num">01</span>
              <span
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '99px',
                  border: '1px solid #343437',
                  background: 'rgba(255, 121, 46, 0.08)',
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
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M10 18v-4" />
                  <path d="M14 18v-6" />
                </svg>
              </span>
            </div>
            <span style={{ font: "400 28px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em', color: '#F4F4F2' }}>
              Submit
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              Send us your contracted deal: the address, your numbers, photos and the closing timeline.
            </span>
          </div>
          <div className="how-it-works-card">
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '2px',
                background: 'linear-gradient(90deg, #FF792E 0%, transparent 100%)',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span className="step-num">02</span>
              <span
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '99px',
                  border: '1px solid #343437',
                  background: 'rgba(255, 121, 46, 0.08)',
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
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                </svg>
              </span>
            </div>
            <span style={{ font: "400 28px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em', color: '#F4F4F2' }}>
              Market
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              We evaluate and promote the opportunity to buyers in our network who match the deal.
            </span>
          </div>
          <div className="how-it-works-card">
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '2px',
                background: 'linear-gradient(90deg, #FF792E 0%, transparent 100%)',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <span className="step-num">03</span>
              <span
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '99px',
                  border: '1px solid #343437',
                  background: 'rgba(255, 121, 46, 0.08)',
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
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                  <path d="m21 3 1 11h-2" />
                  <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                  <path d="M3 4h8" />
                </svg>
              </span>
            </div>
            <span style={{ font: "400 28px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em', color: '#F4F4F2' }}>
              Coordinate
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              We help connect interested buyers and advance the transaction toward closing.
            </span>
          </div>
        </div>
      </section>
      <section
        className="site-container" style={{ paddingTop: 'var(--section-pad)' }}
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
          <div style={{ position: 'relative', minWidth: 0 }}>
            <FeeSplitCalculator />
          </div>
        </div>
      </section>
      <section
        className="site-container" style={{ paddingTop: 'var(--section-pad)' }}
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '48px 28px' }}>
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
      <section aria-hidden="true" style={{ paddingTop: 'var(--section-pad)', overflow: 'hidden' }}>
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
        className="site-container" style={{ paddingTop: 'var(--section-pad)' }}
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
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <details open className="faq-item">
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '18px 0',
              }}
            >
              <span style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 500 22px Inter, system-ui, sans-serif" }}>01</span>
                <span style={{ font: "500 clamp(20px, 2vw, 24px)/1.25 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  How is the assignment fee split?
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
                  font: '300 22px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 16px 42px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 15px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              55/45, strictly in favor of the wholesaler who brings the deal. You keep 55% of the total assignment fee and Dispo With
              Don earns 45%, agreed in writing before we market anything.
            </p>
          </details>
          <details className="faq-item">
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '18px 0',
              }}
            >
              <span style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 500 22px Inter, system-ui, sans-serif" }}>02</span>
                <span style={{ font: "500 clamp(20px, 2vw, 24px)/1.25 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  Do I need the property under contract first?
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
                  font: '300 22px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 16px 42px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 15px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Yes. We market contracted deals with clear assignment rights in place. If you're still negotiating with the seller, call us
              early and we'll evaluate whether your target numbers will clear our buyer network.
            </p>
          </details>
          <details className="faq-item">
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '18px 0',
              }}
            >
              <span style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 500 22px Inter, system-ui, sans-serif" }}>03</span>
                <span style={{ font: "500 clamp(20px, 2vw, 24px)/1.25 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  Which markets do you work in?
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
                  font: '300 22px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 16px 42px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 15px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Our buyer network is nationwide, with the deepest institutional and cash-buyer pools across the Midwest and Southeast, including Columbus,
              Indianapolis, Charlotte, Atlanta, Memphis, and Cleveland.
            </p>
          </details>
          <details className="faq-item">
            <summary
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                padding: '18px 0',
              }}
            >
              <span style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}>
                <span style={{ color: '#FF792E', font: "italic 500 22px Inter, system-ui, sans-serif" }}>04</span>
                <span style={{ font: "500 clamp(20px, 2vw, 24px)/1.25 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  How fast do deals usually assign?
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
                  font: '300 22px/1 Inter, system-ui, sans-serif',
                }}
              >
                +
              </span>
            </summary>
            <p
              style={{
                margin: '0 0 16px 42px',
                maxWidth: '640px',
                color: '#A9ABB0',
                font: '400 15px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Light-scope opportunities priced to market usually assign within 5 to 8 business days. Our median across all 340+ deals is 12 days to executed assignment agreement.
            </p>
          </details>
        </div>
      </section>
      <section
        className="site-container" style={{ paddingTop: 'var(--section-pad)' }}
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
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              <span className="spec-tag" style={{ color: '#FF792E', borderColor: 'rgba(255,121,46,0.3)', background: 'rgba(255,121,46,0.08)' }}>
                ✓ 55% Wholesaler Cut
              </span>
              <span className="spec-tag">
                ✓ 1,800+ Cash Buyers
              </span>
              <span className="spec-tag">
                ✓ No Upfront Fees
              </span>
            </div>
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
