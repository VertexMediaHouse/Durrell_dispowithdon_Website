import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Img from '../components/Img'
import { img } from '../lib/images'

export default function Services() {
  usePageTitle('Services')
  return (
    <>
      <Header active="Services" />
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
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingTop: '120px',
          display: 'flex',
          flexDirection: 'column',
          gap: '150px',
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            borderTop: '1px solid #262628',
            borderBottom: '1px solid #262628',
          }}
        >
          <div style={{ padding: '36px 28px 36px 0px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
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
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M12 12v6" />
                <path d="m15 15-3-3-3 3" />
              </svg>
            </span>
            <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>
              Step 01
            </span>
            <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
              Submit
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              Send the contract, numbers and photos.
            </span>
          </div>
          <div
            style={{
              padding: '36px 28px 36px 28px',
              borderLeft: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
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
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="m9 14 2 2 4-4" />
              </svg>
            </span>
            <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>
              Step 02
            </span>
            <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
              Review
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              Same-day honest read on price and scope.
            </span>
          </div>
          <div
            style={{
              padding: '36px 28px 36px 28px',
              borderLeft: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
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
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
            </span>
            <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>
              Step 03
            </span>
            <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
              Market
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              Deal package out to matched buyers.
            </span>
          </div>
          <div
            style={{
              padding: '36px 28px 36px 28px',
              borderLeft: '1px solid #262628',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
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
                <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
                <path d="m21 3 1 11h-2" />
                <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
                <path d="M3 4h8" />
              </svg>
            </span>
            <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>
              Step 04
            </span>
            <span style={{ font: "400 30px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
              Close
            </span>
            <span style={{ color: '#A9ABB0', font: '400 15px/1.7 Inter, system-ui, sans-serif' }}>
              Title, EMD and deadlines through funding.
            </span>
          </div>
        </div>
      </section>
      <section
        style={{ maxWidth: '1320px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '150px' }}
      >
        <div
          style={{
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
              Pricing
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
            <p
              style={{
                margin: '0',
                maxWidth: '460px',
                color: '#A9ABB0',
                font: '400 17px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              No upfront fees and no retainers. We only earn when your deal assigns, and you keep the bigger share.
            </p>
          </div>
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
