import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Img from '../components/Img'
import { img } from '../lib/images'

export default function About() {
  usePageTitle('About')
  return (
    <>
      <Header active="About" />
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
          <span style={{ color: '#343437' }}>/</span> <span style={{ color: '#F4F4F2' }}>About</span>
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
              About us
            </span>
            <h1
              style={{
                margin: '0',
                font: "400 clamp(56px, 7vw, 108px)/0.96 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              You lock it up.
              <br />
              <em style={{ fontStyle: 'italic', color: '#FF792E' }}>We help move it.</em>
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
              Dispo With Don is a disposition team built for real estate wholesalers who'd rather find deals than chase
              buyers.
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
          paddingTop: '120px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        <div style={{ position: 'relative' }}>
          <div
            className="ph"
            style={{
              position: 'relative',
              height: '640px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #262628',
            }}
          >
            <Img src={img.team_mtg} alt="The Dispo With Don team reviewing active wholesale deals together" width={1200} height={900} priority />
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
              Portrait of Don
            </span>
          </div>
          <div
            style={{
              position: 'absolute',
              left: '20px',
              right: '20px',
              bottom: '56px',
              background: 'rgba(20,20,20,.88)',
              border: '1px solid #343437',
              borderRadius: '16px',
              padding: '20px 22px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ font: "400 24px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Durrell “Don” W.
              </span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 10px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Founder
              </span>
            </div>
            <span style={{ color: '#FF792E', font: "italic 400 22px Inter, system-ui, sans-serif" }}>
              Since 2019
            </span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
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
            Our story
          </span>
          <h2
            style={{
              margin: '0',
              font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
              letterSpacing: '-0.015em',
            }}
          >
            A contract isn't a deal until{' '}
            <em style={{ fontStyle: 'italic', color: '#FF792E' }}>someone closes on it.</em>
          </h2>
          <p
            style={{
              margin: '0',
              maxWidth: '560px',
              color: '#A9ABB0',
              font: '400 17px/1.7 Inter, system-ui, sans-serif',
            }}
          >
            Don started Dispo With Don after years of watching good wholesale contracts die on the disposition side.
            They weren't bad deals. They were marketed to the wrong list, with a repair scope nobody could verify, on a
            timeline that ran out.
          </p>
          <p
            style={{
              margin: '0',
              maxWidth: '560px',
              color: '#A9ABB0',
              font: '400 17px/1.7 Inter, system-ui, sans-serif',
            }}
          >
            So he built the opposite: honest underwriting up front, a buyer network tracked by who actually performs,
            and coordination that holds the deal together after the handshake. Today the team works deals across the
            Midwest and Southeast, and wholesalers keep the bigger share of every fee.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '8px' }}>
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
              Contact Don
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
              Deals assigned
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
              8
            </span>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Team members
            </span>
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
              <span style={{ color: '#A9ABB0' }}>(02)</span>
              <span style={{ width: '32px', height: '1px', background: '#FF792E' }} />
              What we stand for
            </span>
            <h2
              style={{
                margin: '0',
                font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              How we <em style={{ fontStyle: 'italic', color: '#FF792E' }}>work.</em>
            </h2>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            borderTop: '1px solid #262628',
            borderBottom: '1px solid #262628',
          }}
        >
          <div style={{ padding: '40px 32px 40px 0px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span
              style={{
                flex: 'none',
                width: '52px',
                height: '52px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.35)',
                background: 'rgba(255,121,46,.07)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="21"
                height="21"
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
            <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
              Straight about the numbers
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              If the ARV is high or the spread is thin, we tell you before we market it, not after it sits for three
              weeks.
            </span>
          </div>
          <div
            style={{
              padding: '40px 32px 40px 32px',
              borderLeft: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <span
              style={{
                flex: 'none',
                width: '52px',
                height: '52px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.35)',
                background: 'rgba(255,121,46,.07)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="21"
                height="21"
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
            <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
              Buyers who actually close
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              Our network is tracked by closing history, not signup forms. Buyers who flake don't stay on the list.
            </span>
          </div>
          <div
            style={{
              padding: '40px 32px 40px 32px',
              borderLeft: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <span
              style={{
                flex: 'none',
                width: '52px',
                height: '52px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.35)',
                background: 'rgba(255,121,46,.07)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF792E"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
              One point of contact
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              From submission to the closing table, you deal with one person who knows exactly where your file stands.
            </span>
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
              <span style={{ color: '#A9ABB0' }}>(03)</span>
              <span style={{ width: '32px', height: '1px', background: '#FF792E' }} />
              The team
            </span>
            <h2
              style={{
                margin: '0',
                font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              The people <em style={{ fontStyle: 'italic', color: '#FF792E' }}>moving your deal.</em>
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
              Acquisitions, deal marketing, buyer relations and transaction coordination under one roof.
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
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
              <Img src={img.portrait_m} alt="Portrait of Don, Founder and Lead Dispositions at Dispo With Don" width={800} height={800} />
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
                Portrait
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ font: "400 26px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Durrell “Don” W.
              </span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Founder & Lead Dispositions
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
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
              <Img src={img.portrait_w} alt="Portrait of the Buyer Relations lead at Dispo With Don" width={800} height={800} />
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
                Portrait
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ font: "400 26px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Kayla Brooks
              </span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Buyer Relations
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
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
              <Img src={img.portrait_m2} alt="Portrait of the Deal Marketing lead at Dispo With Don" width={800} height={800} />
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
                Portrait
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ font: "400 26px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Andre Mitchell
              </span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Deal Marketing
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
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
              <Img src={img.portrait_w2} alt="Portrait of the Transaction Coordination lead at Dispo With Don" width={800} height={800} />
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
                Portrait
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ font: "400 26px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Priya Nair
              </span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Transaction Coordinator
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
            Don told me straight that my ARV was high, repriced it, and had{' '}
            <em style={{ fontStyle: 'italic', color: '#FF792E' }}>three offers in four days.</em> That honesty is why I
            send him every deal I can't move myself.
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
              TR
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
              <span style={{ font: '500 16px Inter, system-ui, sans-serif' }}>Tasha Reynolds</span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Wholesaler · Indianapolis, IN
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
              Let's move your <em style={{ fontStyle: 'italic', color: '#FF792E' }}>next deal.</em>
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
              Send it over and get an honest read the same business day.
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
        </div>
      </section>
      <Footer wordmarkAlign="center" />
    </>
  )
}
