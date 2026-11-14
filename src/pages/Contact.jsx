import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Img from '../components/Img'
import { img } from '../lib/images'

export default function Contact() {
  usePageTitle('Contact')
  return (
    <>
      <Header active="Contact" />
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
          <span style={{ color: '#343437' }}>/</span> <span style={{ color: '#F4F4F2' }}>Contact</span>
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
              Get in touch
            </span>
            <h1
              style={{
                margin: '0',
                font: "400 clamp(56px, 7vw, 108px)/0.96 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Let's <em style={{ fontStyle: 'italic', color: '#FF792E' }}>talk deals.</em>
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
              Questions about a deal, the buyers network or how the split works? We answer every message the same
              business day.
            </p>
          </div>
        </div>
      </section>
      <section
        style={{ maxWidth: '1320px', margin: '0 auto', paddingLeft: '32px', paddingRight: '32px', paddingTop: '0' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            borderBottom: '1px solid #262628',
          }}
        >
          <div style={{ padding: '36px 28px 36px 0px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span
              style={{
                flex: 'none',
                width: '48px',
                height: '48px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.35)',
                background: 'rgba(255,121,46,.07)',
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
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Call
            </span>
            <a href="tel:5553184720" style={{ font: "400 26px/1.2 Inter, system-ui, sans-serif" }}>
              (555) 318-4720
            </a>
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
                width: '48px',
                height: '48px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.35)',
                background: 'rgba(255,121,46,.07)',
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
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Email
            </span>
            <a href="mailto:deals@dispowithdon.com" style={{ font: "400 26px/1.2 Inter, system-ui, sans-serif" }}>
              deals@dispowithdon.com
            </a>
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
                width: '48px',
                height: '48px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.35)',
                background: 'rgba(255,121,46,.07)',
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
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </span>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Hours
            </span>
            <span style={{ font: "400 26px/1.2 Inter, system-ui, sans-serif" }}>Mon–Fri 8–7 · Sat 9–2 CT</span>
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
                width: '48px',
                height: '48px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.35)',
                background: 'rgba(255,121,46,.07)',
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
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                <line x1="9" x2="9" y1="3" y2="18" />
                <line x1="15" x2="15" y1="6" y2="21" />
              </svg>
            </span>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Markets
            </span>
            <span style={{ font: "400 26px/1.2 Inter, system-ui, sans-serif" }}>
              Nationwide · Midwest & Southeast
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
          paddingTop: '96px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '28px',
          alignItems: 'stretch',
        }}
      >
        <form
          onSubmit={preventSubmit}
          style={{
            position: 'relative',
            background: '#1A1A1B',
            border: '1px solid #262628',
            borderRadius: '24px',
            padding: 'clamp(28px, 4vw, 56px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ font: "400 36px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
              Send us a message
            </span>
            <span style={{ color: '#8A8C91', font: '400 14px Inter, system-ui, sans-serif' }}>
              We answer every message the same business day.
            </span>
          </div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '28px 28px' }}
          >
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Full name
              </span>
              <input className="fld" type="text" name="name" placeholder="Jane Smith" autoComplete="name" />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Email
              </span>
              <input className="fld" type="email" name="email" placeholder="you@company.com" autoComplete="email" />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Phone
              </span>
              <input className="fld" type="tel" name="phone" placeholder="(555) 000-0000" autoComplete="tel" />
            </label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                I am a
              </span>
              <select className="fld" name="role">
                <option>Select one</option>
                <option>Wholesaler</option>
                <option>Cash buyer</option>
                <option>Agent / broker</option>
                <option>Other</option>
              </select>
            </label>
          </div>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span
              style={{
                color: '#A9ABB0',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Message
            </span>
            <textarea
              className="fld"
              name="message"
              rows="5"
              placeholder="Tell us about your deal or what you're looking for…"
              style={{ resize: 'vertical' }}
            />
          </label>
          <button
            type="submit"
            className="btn-o"
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              minHeight: '58px',
              padding: '0 8px 0 28px',
              border: '0',
              borderRadius: '999px',
              background: '#FF792E',
              color: '#141414',
              font: '600 15px Inter, system-ui, sans-serif',
              cursor: 'pointer',
            }}
          >
            Send Message
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
          </button>
        </form>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div
            className="ph2"
            style={{
              position: 'relative',
              flex: '1',
              minHeight: '360px',
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid #262628',
            }}
          >
            <Img src={img.office} alt="The Dispo With Don office where the dispositions team works deals" width={1200} height={800} />
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
              Office
            </span>
          </div>
          <div
            style={{
              border: '1px solid #262628',
              borderRadius: '20px',
              padding: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '18px',
            }}
          >
            <span
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FF792E',
                font: "italic 400 24px Inter, system-ui, sans-serif",
              }}
            >
              D
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <span style={{ font: "400 26px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Prefer to talk it through?
              </span>
              <span style={{ color: '#A9ABB0', font: '400 15px Inter, system-ui, sans-serif' }}>
                Call Don directly at{' '}
                <a href="tel:5553184720" style={{ color: '#FF792E' }}>
                  (555) 318-4720
                </a>
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
            <span style={{ color: '#A9ABB0' }}>(FAQ)</span>
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
            Everything wholesalers and buyers ask us most.
          </p>
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
              Don earns 45%.
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
              Yes. We market contracted deals with assignment rights in place. If you're still negotiating, call us and
              we'll give you an early read.
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
                  What do I need to submit a deal?
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
              The address and asset type, contract price, desired buyer price, estimated ARV, repair estimate, closing
              deadline and photos. Uploading the contract is optional.
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
              Nationwide, with the deepest buyer coverage across the Midwest and Southeast.
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
                <span style={{ color: '#FF792E', font: "italic 400 20px Inter, system-ui, sans-serif" }}>05</span>
                <span style={{ font: "400 clamp(22px, 2vw, 28px)/1.25 Inter, system-ui, sans-serif" }}>
                  How do I join the buyers network?
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
              Fill out the cash-buyer registration with your markets, property types, budget and criteria. It's free.
            </p>
          </details>
        </div>
      </section>
      <Footer />
    </>
  )
}
