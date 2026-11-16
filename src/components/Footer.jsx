import { Link } from 'react-router-dom'

export default function Footer({ wordmarkAlign = 'left' }) {
  return (
    <footer
      className="site-container"
      style={{
        paddingTop: 'var(--section-pad)',
        paddingBottom: '36px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '32px',
          paddingBottom: '56px',
        }}
      >
        <h2
          style={{
            margin: '0',
            font: "400 clamp(44px, 5.4vw, 84px)/1.0 Inter, system-ui, sans-serif",
            letterSpacing: '-0.015em',
          }}
        >
          You lock it up.
          <br />
          <em style={{ fontStyle: 'italic', color: '#FF792E' }}>We help move it.</em>
        </h2>
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
            Join Buyers Network
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
      <div style={{ height: '1px', background: '#262628' }} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 190px), 1fr))',
          gap: '40px',
          padding: '56px 0',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.4)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="17"
                height="17"
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
              style={{ font: '800 17px/1 Inter, system-ui, sans-serif', letterSpacing: '0.02em', color: '#F4F4F2' }}
            >
              DISPO <span style={{ color: '#FF792E' }}>WITH DON.</span>
            </span>
          </span>
          <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif', maxWidth: '280px' }}>
            Wholesale dispositions, buyer outreach and deal marketing for real estate wholesalers.
          </span>
        </div>
        <nav
          aria-label="Explore"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            font: '400 15px Inter, system-ui, sans-serif',
          }}
        >
          <span
            style={{
              color: '#8A8C91',
              font: '500 11px Inter, system-ui, sans-serif',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Explore
          </span>
          <Link to="/deals" className="nav-a">
            Available Deals
          </Link>
          <Link to="/services" className="nav-a">
            Services
          </Link>
          <Link to="/about" className="nav-a">
            About Don
          </Link>
          <Link to="/contact" className="nav-a">
            Contact & FAQ
          </Link>
        </nav>
        <nav
          aria-label="Get started"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            font: '400 15px Inter, system-ui, sans-serif',
          }}
        >
          <span
            style={{
              color: '#8A8C91',
              font: '500 11px Inter, system-ui, sans-serif',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Get started
          </span>
          <Link to="/submit-deal" className="nav-a">
            Submit Your Deal
          </Link>
          <Link to="/buyers-network" className="nav-a">
            Join Buyers Network
          </Link>
        </nav>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            color: '#A9ABB0',
            font: '400 15px Inter, system-ui, sans-serif',
          }}
        >
          <span
            style={{
              color: '#8A8C91',
              font: '500 11px Inter, system-ui, sans-serif',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Contact
          </span>
          <a className="nav-a" href="tel:5553184720">
            (555) 318-4720
          </a>
          <a className="nav-a" href="mailto:deals@dispowithdon.com">
            deals@dispowithdon.com
          </a>
          <span>Mon–Fri · 8am–7pm CT</span>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="outline"
        style={{
          font: "400 clamp(64px, 14.5vw, 216px)/0.9 Inter, system-ui, sans-serif",
          letterSpacing: '-0.03em',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          paddingBottom: '28px',
          textAlign: wordmarkAlign,
        }}
      >
        Dispo With Don.
      </div>
      <div style={{ height: '1px', background: '#262628' }} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '16px',
          paddingTop: '24px',
          color: '#8A8C91',
          font: '400 13px Inter, system-ui, sans-serif',
        }}
      >
        <span>© 2026 Dispo With Don. All rights reserved.</span>
        <span>Privacy Policy · Terms</span>
      </div>
    </footer>
  )
}
