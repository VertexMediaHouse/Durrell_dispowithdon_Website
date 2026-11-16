import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Img from '../components/Img'
import FeeSplitCalculator from '../components/FeeSplitCalculator'
import { img } from '../lib/images'

export default function Services() {
  usePageTitle('Services')
  return (
    <>
      <Header active="Services" />
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
          <span style={{ color: '#343437' }}>/</span> <span style={{ color: '#F4F4F2' }}>Services</span>
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
              What we do
            </span>
            <h1
              style={{
                margin: '0',
                font: "400 clamp(56px, 7vw, 108px)/0.96 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Our <em style={{ fontStyle: 'italic', color: '#FF792E' }}>services.</em>
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
              Everything between a signed contract and a funded closing, handled by one team with one point of contact.
            </p>
          </div>
        </div>
      </section>
      <section
        className="site-container"
        style={{
          paddingTop: 'var(--section-pad)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--section-pad)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', justifyContent: 'center', order: '0' }}>
            <span style={{ color: '#FF792E', font: "italic 400 26px Inter, system-ui, sans-serif" }}>
              Service 01
            </span>
            <h2
              style={{
                margin: '0',
                font: "400 clamp(40px, 4.2vw, 64px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              Wholesale Dispositions
            </h2>
            <p
              style={{
                margin: '0',
                maxWidth: '520px',
                color: '#A9ABB0',
                font: '400 17px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              You bring the contract. We take it to market, run the buyer side and drive it to a signed assignment, so
              you can get back to finding the next deal.
            </p>
            <ul style={{ listStyle: 'none', margin: '0', padding: '0', borderTop: '1px solid #262628' }}>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                Honest pricing review before anything goes out
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
              </li>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                Assignment terms negotiated on your behalf
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
              </li>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                Weekly status updates until it's signed
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
              </li>
            </ul>
          </div>
          <div style={{ order: '1' }}>
            <div
              className="ph"
              style={{
                position: 'relative',
                height: '520px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #262628',
              }}
            >
              <Img src={img.handshake} alt="Dispositions team matching a wholesale contract with a cash buyer" width={1200} height={900} priority />
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', justifyContent: 'center', order: '1' }}>
            <span style={{ color: '#FF792E', font: "italic 400 26px Inter, system-ui, sans-serif" }}>
              Service 02
            </span>
            <h2
              style={{
                margin: '0',
                font: "400 clamp(40px, 4.2vw, 64px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              Buyer Outreach
            </h2>
            <p
              style={{
                margin: '0',
                maxWidth: '520px',
                color: '#A9ABB0',
                font: '400 17px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Your deal goes to cash buyers who already buy in that market, at that price point and with that scope, not
              to a list of 50,000 strangers.
            </p>
            <ul style={{ listStyle: 'none', margin: '0', padding: '0', borderTop: '1px solid #262628' }}>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                1,800+ buyers tracked by closing history
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
              </li>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                Targeted email and SMS sends
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
              </li>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                Direct calls to top buyers on hot deals
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
              </li>
            </ul>
          </div>
          <div style={{ order: '0' }}>
            <div
              className="ph2"
              style={{
                position: 'relative',
                height: '520px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #262628',
              }}
            >
              <Img src={img.phone_call} alt="Buyer outreach specialist calling verified cash buyers about a new deal" width={1200} height={900} />
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', justifyContent: 'center', order: '0' }}>
            <span style={{ color: '#FF792E', font: "italic 400 26px Inter, system-ui, sans-serif" }}>
              Service 03
            </span>
            <h2
              style={{
                margin: '0',
                font: "400 clamp(40px, 4.2vw, 64px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              Deal Marketing
            </h2>
            <p
              style={{
                margin: '0',
                maxWidth: '520px',
                color: '#A9ABB0',
                font: '400 17px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              Buyers decide in minutes. We build the package that gets them to yes: photos, walkthrough video and a deal
              sheet that leads with the numbers.
            </p>
            <ul style={{ listStyle: 'none', margin: '0', padding: '0', borderTop: '1px solid #262628' }}>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                Professional photos and walkthrough video
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
              </li>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                One-page deal sheet with ARV, repairs and comps
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
              </li>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                Featured on our Available Deals page
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
              </li>
            </ul>
          </div>
          <div style={{ order: '1' }}>
            <div
              className="ph"
              style={{
                position: 'relative',
                height: '520px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #262628',
              }}
            >
              <Img src={img.marketing} alt="Property marketing assets and comparable sales prepared for a deal launch" width={1200} height={900} />
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '26px', justifyContent: 'center', order: '1' }}>
            <span style={{ color: '#FF792E', font: "italic 400 26px Inter, system-ui, sans-serif" }}>
              Service 04
            </span>
            <h2
              style={{
                margin: '0',
                font: "400 clamp(40px, 4.2vw, 64px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              Transaction Coordination
            </h2>
            <p
              style={{
                margin: '0',
                maxWidth: '520px',
                color: '#A9ABB0',
                font: '400 17px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              After the handshake is where deals fall apart. We track title, earnest money, signatures and deadlines
              until your fee is disbursed.
            </p>
            <ul style={{ listStyle: 'none', margin: '0', padding: '0', borderTop: '1px solid #262628' }}>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                Title and escrow coordination
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
              </li>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                Earnest money and deadline tracking
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
              </li>
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px Inter, system-ui, sans-serif',
                }}
              >
                One point of contact through closing
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
              </li>
            </ul>
          </div>
          <div style={{ order: '0' }}>
            <div
              className="ph2"
              style={{
                position: 'relative',
                height: '520px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #262628',
              }}
            >
              <Img src={img.signing} alt="Transaction coordinator reviewing closing paperwork with a title company" width={1200} height={900} />
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
              <span style={{ color: '#A9ABB0' }}>(05)</span>
              <span style={{ width: '32px', height: '1px', background: '#FF792E' }} />
              The process
            </span>
            <h2
              style={{
                margin: '0',
                font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              Four steps, <em style={{ fontStyle: 'italic', color: '#FF792E' }}>one point of contact.</em>
            </h2>
          </div>
        </div>

        {/* Upgraded 4 Process Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '24px',
          }}
        >
          <div className="how-it-works-card">
            <span className="step-num">01</span>
            <span style={{ font: "500 24px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
              Submit
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              Upload your contracted property address, purchase price, target buyer price, and photos in 2 minutes.
            </span>
          </div>

          <div className="how-it-works-card">
            <span className="step-num">02</span>
            <span style={{ font: "500 24px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
              Review
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              We provide a same-day honest underwriting valuation, verified comps analysis, and marketing game plan.
            </span>
          </div>

          <div className="how-it-works-card">
            <span className="step-num">03</span>
            <span style={{ font: "500 24px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
              Market
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              Your deal packet is broadcast directly to 1,800+ vetted buyers matching that submarket and asset type.
            </span>
          </div>

          <div className="how-it-works-card">
            <span className="step-num">04</span>
            <span style={{ font: "500 24px/1.2 Inter, system-ui, sans-serif", color: '#F4F4F2' }}>
              Close
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              We collect buyer earnest money, execute assignments, and coordinate title through funding and payout.
            </span>
          </div>
        </div>
      </section>

      {/* Upgraded Pricing & Interactive Calculator */}
      <section
        className="site-container" style={{ paddingTop: 'var(--section-pad)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '32px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '680px' }}>
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
                <span style={{ color: '#A9ABB0' }}>(06)</span>
                <span style={{ width: '32px', height: '1px', background: '#FF792E' }} />
                Transparent Pricing
              </span>
              <h2
                style={{
                  margin: '0',
                  font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
                  letterSpacing: '-0.015em',
                }}
              >
                Simple, fair and <em style={{ fontStyle: 'italic', color: '#FF792E' }}>in your favor.</em>
              </h2>
            </div>
            <p
              style={{
                margin: '0',
                maxWidth: '440px',
                color: '#A9ABB0',
                font: '400 16px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              No upfront fees, retainers, or hidden expenses. Wholesalers keep 55% of the total assignment fee. Test your payout below:
            </p>
          </div>

          <FeeSplitCalculator />
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
              Ready to <em style={{ fontStyle: 'italic', color: '#FF792E' }}>move your deal?</em>
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
              Send it over today and get an honest read on price, scope and buyer demand.
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
