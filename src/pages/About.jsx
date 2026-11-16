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
        className="site-container"
        style={{
          paddingTop: 'var(--section-pad)',
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
        className="site-container" style={{ paddingTop: 'var(--section-pad)' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '24px',
          }}
        >
          <div className="stat-box-modern">
            <span
              style={{
                font: "600 clamp(52px, 5.5vw, 76px)/0.9 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
                color: '#F4F4F2',
              }}
            >
              1,800<span style={{ color: '#FF792E' }}>+</span>
            </span>
            <span
              style={{
                color: '#FF792E',
                font: '600 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Verified Cash Buyers
            </span>
            <span style={{ color: '#8A8C91', font: '400 13px/1.5 Inter, system-ui, sans-serif' }}>
              Active buyers tracked by real verified closing history across Midwestern & Southern markets.
            </span>
          </div>

          <div className="stat-box-modern">
            <span
              style={{
                font: "600 clamp(52px, 5.5vw, 76px)/0.9 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
                color: '#F4F4F2',
              }}
            >
              340<span style={{ color: '#FF792E' }}>+</span>
            </span>
            <span
              style={{
                color: '#FF792E',
                font: '600 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Deals Assigned
            </span>
            <span style={{ color: '#8A8C91', font: '400 13px/1.5 Inter, system-ui, sans-serif' }}>
              Successfully closed contracts disbursed through vetted title agencies and escrow officers.
            </span>
          </div>

          <div className="stat-box-modern">
            <span
              style={{
                font: "600 clamp(52px, 5.5vw, 76px)/0.9 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
                color: '#F4F4F2',
              }}
            >
              12
            </span>
            <span
              style={{
                color: '#FF792E',
                font: '600 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Median Days to Assign
            </span>
            <span style={{ color: '#8A8C91', font: '400 13px/1.5 Inter, system-ui, sans-serif' }}>
              From initial deal packet launch to signed assignment agreement and earnest money deposit.
            </span>
          </div>

          <div className="stat-box-modern">
            <span
              style={{
                font: "600 clamp(52px, 5.5vw, 76px)/0.9 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
                color: '#F4F4F2',
              }}
            >
              8
            </span>
            <span
              style={{
                color: '#FF792E',
                font: '600 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Full-Time Dispo Pros
            </span>
            <span style={{ color: '#8A8C91', font: '400 13px/1.5 Inter, system-ui, sans-serif' }}>
              Specialists in underwriting, photography, buyer relations, and transaction coordination.
            </span>
          </div>
        </div>
      </section>

      {/* Section 02: What we stand for */}
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
            marginBottom: '48px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '720px' }}>
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
              Our Core Principles
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px',
          }}
        >
          <div className="how-it-works-card">
            <span
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.4)',
                background: 'rgba(255,121,46,.1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
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
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
            </span>
            <span style={{ font: "500 24px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
              Straight about the numbers
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              If the ARV is unrealistic or the spread is too tight, we tell you up front before marketing it, not after your inspection period runs out.
            </span>
          </div>

          <div className="how-it-works-card">
            <span
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.4)',
                background: 'rgba(255,121,46,.1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
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
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </span>
            <span style={{ font: "500 24px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
              Buyers who actually perform
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              Our network is tracked by verifiable closed transactions, not email subscribers. Flaky buyers or renegotiators are promptly purged.
            </span>
          </div>

          <div className="how-it-works-card">
            <span
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.4)',
                background: 'rgba(255,121,46,.1)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <span style={{ font: "500 24px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
              One dedicated dispo partner
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              From initial upload to wire confirmation at title, you communicate with one lead manager who knows every detail of your file.
            </span>
          </div>
        </div>
      </section>

      {/* Section 03: The Team */}
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
            marginBottom: '48px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '720px' }}>
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
              The Team
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
          <p
            style={{
              margin: '0',
              maxWidth: '380px',
              color: '#A9ABB0',
              font: '400 16px/1.7 Inter, system-ui, sans-serif',
            }}
          >
            Underwriting, marketing, buyer outreach and escrow coordination united under one roof.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '24px' }}>
          <div className="team-card-modern">
            <div className="team-img-wrap">
              <Img src={img.portrait_m} alt="Portrait of Don, Founder and Lead Dispositions at Dispo With Don" width={800} height={800} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '0 6px 6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ font: "500 22px/1.1 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                  Durrell “Don” W.
                </span>
                <span className="spread-badge" style={{ fontSize: '10px', padding: '3px 8px' }}>Lead</span>
              </div>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                Founder & Dispositions
              </span>
            </div>
          </div>

          <div className="team-card-modern">
            <div className="team-img-wrap">
              <Img src={img.portrait_w} alt="Portrait of the Buyer Relations lead at Dispo With Don" width={800} height={800} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '0 6px 6px' }}>
              <span style={{ font: "500 22px/1.1 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                Kayla Brooks
              </span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                Buyer Network Relations
              </span>
            </div>
          </div>

          <div className="team-card-modern">
            <div className="team-img-wrap">
              <Img src={img.portrait_m2} alt="Portrait of the Deal Marketing lead at Dispo With Don" width={800} height={800} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '0 6px 6px' }}>
              <span style={{ font: "500 22px/1.1 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                Andre Mitchell
              </span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                Deal Marketing & Assets
              </span>
            </div>
          </div>

          <div className="team-card-modern">
            <div className="team-img-wrap">
              <Img src={img.portrait_w2} alt="Portrait of the Transaction Coordination lead at Dispo With Don" width={800} height={800} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '0 6px 6px' }}>
              <span style={{ font: "500 22px/1.1 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
                Priya Nair
              </span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                Transaction Coordinator
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section
        className="site-container" style={{ paddingTop: 'var(--section-pad)' }}
      >
        <div
          className="luxury-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '28px',
            textAlign: 'center',
            maxWidth: '1040px',
            margin: '0 auto',
            padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 64px)',
          }}
        >
          <div style={{ display: 'flex', gap: '6px', color: '#FF792E', fontSize: '18px' }}>
            ★★★★★
          </div>
          <p
            style={{
              margin: '0',
              font: "400 clamp(24px, 3.2vw, 42px)/1.3 Inter, system-ui, sans-serif",
              letterSpacing: '-0.01em',
              color: '#F4F4F2',
            }}
          >
            “Don told me straight that my ARV was high, repriced it honestly, and had{' '}
            <em style={{ fontStyle: 'italic', color: '#FF792E' }}>three offers in four days.</em> That transparency is why I send him every deal I lock up.”
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '8px' }}>
            <span
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '99px',
                border: '1.5px solid rgba(255,121,46,.45)',
                background: 'rgba(255,121,46,.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FF792E',
                font: "italic 600 20px Inter, system-ui, sans-serif",
              }}
            >
              TR
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
              <span style={{ font: '600 16px Inter, system-ui, sans-serif', color: '#F4F4F2' }}>Tasha Reynolds</span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                Active Wholesaler · Indianapolis, IN
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
