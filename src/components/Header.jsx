import { useState } from 'react'
import { Link } from 'react-router-dom'
import Ticker from './Ticker'

const TICKER = [
  '55/45 split in favor of the wholesaler',
  'Good deals',
  'Serious buyers',
  'Real closings',
  'Off-market real estate',
  'Investor connections',
  'Dispositions',
]

const NAV = [
  ['Home', '/'],
  ['Deals', '/deals'],
  ['Services', '/services'],
  ['About', '/about'],
  ['Buyers', '/buyers-network'],
  ['Contact', '/contact'],
]

export default function Header({ active }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div
        style={{
          borderBottom: '1px solid #262628',
          overflow: 'hidden',
          padding: '12px 0',
          color: '#A9ABB0',
          font: '500 11px/1 Inter, system-ui, sans-serif',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        <Ticker items={TICKER} gap="56px" diamond="8px" />
      </div>

      <header
        className="site-container"
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <Link to="/" aria-label="Dispo With Don home" onClick={() => setMobileMenuOpen(false)}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.4)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg
                width="19"
                height="19"
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
            <span
              style={{ font: '800 19px/1 Inter, system-ui, sans-serif', letterSpacing: '0.02em', color: '#F4F4F2' }}
            >
              DISPO <span style={{ color: '#FF792E' }}>WITH DON.</span>
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main"
          className="header-nav-desktop"
          style={{
            font: '500 14px Inter, system-ui, sans-serif',
            letterSpacing: '0.01em',
          }}
        >
          {NAV.map(([label, to]) =>
            label === active ? (
              <Link
                key={to}
                to={to}
                aria-current="page"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#F4F4F2' }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '99px', background: '#FF792E' }} />
                {label}
              </Link>
            ) : (
              <Link key={to} className="nav-a" to={to}>
                {label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop CTA & Phone */}
        <div className="header-actions-desktop">
          <a
            className="nav-a"
            href="tel:5553184720"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              font: '500 14px Inter, system-ui, sans-serif',
            }}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FF792E"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            (555) 318-4720
          </a>
          <Link
            to="/submit-deal"
            className="btn-o"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '14px',
              minHeight: '48px',
              padding: '0 6px 0 22px',
              background: '#FF792E',
              borderRadius: '999px',
              color: '#141414',
              font: '600 14px Inter, system-ui, sans-serif',
            }}
          >
            Submit Your Deal
            <span
              style={{
                width: '36px',
                height: '36px',
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
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <nav aria-label="Mobile Navigation" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {NAV.map(([label, to]) => {
              const isCurrent = label === active
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    background: isCurrent ? 'rgba(255,121,46,0.12)' : 'transparent',
                    color: isCurrent ? '#FF792E' : '#F4F4F2',
                    font: '500 16px Inter, system-ui, sans-serif',
                  }}
                >
                  {isCurrent && (
                    <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                  )}
                  {label}
                </Link>
              )
            })}
          </nav>

          <div style={{ height: '1px', background: '#262628' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <a
              href="tel:5553184720"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#A9ABB0',
                font: '500 15px Inter, system-ui, sans-serif',
                padding: '4px 0',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF792E"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (555) 318-4720
            </a>

            <Link
              to="/submit-deal"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-o"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '48px',
                padding: '0 8px 0 20px',
                background: '#FF792E',
                borderRadius: '999px',
                color: '#141414',
                font: '600 15px Inter, system-ui, sans-serif',
              }}
            >
              Submit Your Deal
              <span
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '99px',
                  background: '#141414',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="13"
                  height="13"
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
      )}

      <div className="site-container">
        <div style={{ height: '1px', background: '#262628' }} />
      </div>
    </>
  )
}
