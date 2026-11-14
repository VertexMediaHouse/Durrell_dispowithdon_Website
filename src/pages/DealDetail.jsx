import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Img from '../components/Img'
import { img } from '../lib/images'

export default function DealDetail() {
  usePageTitle('Oakwood Craftsman')
  return (
    <>
      <Header active="Deals" />
      <section
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          paddingLeft: '32px',
          paddingRight: '32px',
          paddingTop: '56px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        <nav
          aria-label="Breadcrumb"
          style={{ display: 'flex', gap: '10px', font: '500 13px Inter, system-ui, sans-serif' }}
        >
          <Link to="/" className="nav-a">
            Home
          </Link>
          <span style={{ color: '#343437' }}>/</span>
          <Link to="/deals" className="nav-a">
            Deals
          </Link>
          <span style={{ color: '#343437' }}>/</span>
          <span>Oakwood Craftsman</span>
        </nav>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '32px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div style={{ display: 'flex', gap: '22px', flexWrap: 'wrap', alignItems: 'center' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#FF792E',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
                Available
              </span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Single-family
              </span>
              <span
                style={{
                  color: '#A9ABB0',
                  font: '500 11px Inter, system-ui, sans-serif',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}
              >
                Light–medium rehab
              </span>
            </div>
            <h1
              style={{
                margin: '0',
                font: "400 clamp(56px, 6.6vw, 100px)/0.96 Inter, system-ui, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              Oakwood Craftsman
            </h1>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: '#A9ABB0',
                font: '400 17px Inter, system-ui, sans-serif',
              }}
            >
              <svg
                width="17"
                height="17"
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
              1214 Oakwood Avenue, Columbus, OH 43206
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
            <span
              style={{
                color: '#8A8C91',
                font: '500 11px Inter, system-ui, sans-serif',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              Asking price
            </span>
            <span style={{ font: "400 clamp(52px, 5vw, 76px)/1 Inter, system-ui, sans-serif" }}>$148,500</span>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: '16px',
          }}
        >
          <div
            className="ph"
            style={{
              position: 'relative',
              height: '560px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #262628',
            }}
          >
            <Img src={img.craftsman} alt="Front exterior of the Oakwood Craftsman showing the covered porch and gabled roof" width={1400} height={1000} priority />
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
              Front exterior
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: 'repeat(2, minmax(0, 1fr))', gap: '16px' }}>
            <div
              className="ph2"
              style={{
                position: 'relative',
                height: '272px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #262628',
              }}
            >
              <Img src={img.kitchen} alt="Updated kitchen with wood cabinets and stainless steel appliances" width={900} height={700} />
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
                Kitchen
              </span>
            </div>
            <div
              className="ph"
              style={{
                position: 'relative',
                height: '272px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #262628',
              }}
            >
              <Img src={img.living} alt="Living room with hardwood floors and natural light from the front windows" width={900} height={700} />
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
                Living room
              </span>
              <a
                className="btn-g"
                href="#"
                style={{
                  position: 'absolute',
                  right: '16px',
                  bottom: '16px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  minHeight: '46px',
                  padding: '0 20px',
                  background: 'rgba(20,20,20,.85)',
                  border: '1px solid #343437',
                  borderRadius: '999px',
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
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                </svg>
                View all 24 photos
              </a>
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
          paddingTop: '96px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '64px',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ flex: '999 1 600px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '80px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
              columnGap: '32px',
              borderTop: '1px solid #262628',
            }}
          >
            <div
              style={{
                padding: '26px 0',
                borderBottom: '1px solid #262628',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
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
                Asking price
              </span>
              <span style={{ font: "400 34px/1 Inter, system-ui, sans-serif" }}>$148,500</span>
            </div>
            <div
              style={{
                padding: '26px 0',
                borderBottom: '1px solid #262628',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
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
                Estimated ARV
              </span>
              <span style={{ font: "400 34px/1 Inter, system-ui, sans-serif" }}>$235,000</span>
            </div>
            <div
              style={{
                padding: '26px 0',
                borderBottom: '1px solid #262628',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
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
                Repair estimate
              </span>
              <span style={{ font: "400 34px/1 Inter, system-ui, sans-serif" }}>$38,000</span>
            </div>
            <div
              style={{
                padding: '26px 0',
                borderBottom: '1px solid #262628',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
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
                Potential spread
              </span>
              <span style={{ font: "400 34px/1 Inter, system-ui, sans-serif", color: '#FF792E' }}>$48,500</span>
            </div>
            <div
              style={{
                padding: '26px 0',
                borderBottom: '1px solid #262628',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
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
                Beds / Baths
              </span>
              <span style={{ font: "400 34px/1 Inter, system-ui, sans-serif" }}>3 / 2</span>
            </div>
            <div
              style={{
                padding: '26px 0',
                borderBottom: '1px solid #262628',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
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
                Living area
              </span>
              <span style={{ font: "400 34px/1 Inter, system-ui, sans-serif" }}>1,420 sq ft</span>
            </div>
            <div
              style={{
                padding: '26px 0',
                borderBottom: '1px solid #262628',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
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
                Year built
              </span>
              <span style={{ font: "400 34px/1 Inter, system-ui, sans-serif" }}>1948</span>
            </div>
            <div
              style={{
                padding: '26px 0',
                borderBottom: '1px solid #262628',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
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
                Lot size
              </span>
              <span style={{ font: "400 34px/1 Inter, system-ui, sans-serif" }}>0.17 ac</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
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
              About this deal
            </span>
            <p
              style={{
                margin: '0',
                maxWidth: '760px',
                color: '#C9CACD',
                font: '400 18px/1.7 Inter, system-ui, sans-serif',
              }}
            >
              A solid 1948 craftsman on a quiet, tree-lined street in Merion Village, minutes from German Village and
              downtown Columbus. The bones are good: newer roof, serviced HVAC and an unfinished basement with clean
              walls. It needs a cosmetic-plus refresh to hit ARV. Comparable renovated homes on the block are selling in
              under 30 days.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
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
              Repair scope
            </span>
            <ul
              style={{
                listStyle: 'none',
                margin: '0',
                padding: '0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                columnGap: '40px',
                borderTop: '1px solid #262628',
              }}
            >
              <li
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px/1.5 Inter, system-ui, sans-serif',
                }}
              >
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
                Full interior paint and LVP flooring
              </li>
              <li
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px/1.5 Inter, system-ui, sans-serif',
                }}
              >
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
                Kitchen refresh: cabinets, counters, appliances
              </li>
              <li
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px/1.5 Inter, system-ui, sans-serif',
                }}
              >
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
                Two bathroom updates
              </li>
              <li
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px/1.5 Inter, system-ui, sans-serif',
                }}
              >
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
                Roof is 6 years old, no work needed
              </li>
              <li
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px/1.5 Inter, system-ui, sans-serif',
                }}
              >
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
                HVAC serviced 2025; replace water heater
              </li>
              <li
                style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  padding: '18px 0',
                  borderBottom: '1px solid #262628',
                  color: '#D4D5D8',
                  font: '400 16px/1.5 Inter, system-ui, sans-serif',
                }}
              >
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
                Minor exterior trim and landscaping
              </li>
            </ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
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
              Supporting comps
            </span>
            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  font: '400 15px Inter, system-ui, sans-serif',
                  minWidth: '560px',
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: '0 0 16px',
                        font: '500 10px Inter, system-ui, sans-serif',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#8A8C91',
                        textAlign: 'left',
                      }}
                    >
                      Address
                    </th>
                    <th
                      style={{
                        padding: '0 0 16px',
                        font: '500 10px Inter, system-ui, sans-serif',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#8A8C91',
                        textAlign: 'left',
                      }}
                    >
                      Bd / Ba
                    </th>
                    <th
                      style={{
                        padding: '0 0 16px',
                        font: '500 10px Inter, system-ui, sans-serif',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#8A8C91',
                        textAlign: 'left',
                      }}
                    >
                      Sq ft
                    </th>
                    <th
                      style={{
                        padding: '0 0 16px',
                        font: '500 10px Inter, system-ui, sans-serif',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#8A8C91',
                        textAlign: 'left',
                      }}
                    >
                      Sold price
                    </th>
                    <th
                      style={{
                        padding: '0 0 16px',
                        font: '500 10px Inter, system-ui, sans-serif',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: '#8A8C91',
                        textAlign: 'left',
                        textAlign: 'right',
                      }}
                    >
                      Sold
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '20px 0', borderTop: '1px solid #262628' }}>1182 Oakwood Ave</td>
                    <td style={{ padding: '20px 0', borderTop: '1px solid #262628', color: '#A9ABB0' }}>3 / 2</td>
                    <td style={{ padding: '20px 0', borderTop: '1px solid #262628', color: '#A9ABB0' }}>1,380</td>
                    <td
                      style={{
                        padding: '20px 0',
                        borderTop: '1px solid #262628',
                        font: "400 22px Inter, system-ui, sans-serif",
                      }}
                    >
                      $238,000
                    </td>
                    <td
                      style={{
                        padding: '20px 0',
                        borderTop: '1px solid #262628',
                        color: '#8A8C91',
                        textAlign: 'right',
                      }}
                    >
                      Aug 2026
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '20px 0', borderTop: '1px solid #262628' }}>1240 Elm Park Dr</td>
                    <td style={{ padding: '20px 0', borderTop: '1px solid #262628', color: '#A9ABB0' }}>3 / 2</td>
                    <td style={{ padding: '20px 0', borderTop: '1px solid #262628', color: '#A9ABB0' }}>1,510</td>
                    <td
                      style={{
                        padding: '20px 0',
                        borderTop: '1px solid #262628',
                        font: "400 22px Inter, system-ui, sans-serif",
                      }}
                    >
                      $244,500
                    </td>
                    <td
                      style={{
                        padding: '20px 0',
                        borderTop: '1px solid #262628',
                        color: '#8A8C91',
                        textAlign: 'right',
                      }}
                    >
                      Jul 2026
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '20px 0', borderTop: '1px solid #262628' }}>987 Hamlet St</td>
                    <td style={{ padding: '20px 0', borderTop: '1px solid #262628', color: '#A9ABB0' }}>3 / 1.5</td>
                    <td style={{ padding: '20px 0', borderTop: '1px solid #262628', color: '#A9ABB0' }}>1,350</td>
                    <td
                      style={{
                        padding: '20px 0',
                        borderTop: '1px solid #262628',
                        font: "400 22px Inter, system-ui, sans-serif",
                      }}
                    >
                      $226,000
                    </td>
                    <td
                      style={{
                        padding: '20px 0',
                        borderTop: '1px solid #262628',
                        color: '#8A8C91',
                        textAlign: 'right',
                      }}
                    >
                      Jun 2026
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <aside style={{ flex: '1 1 380px', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
              <span style={{ font: "400 32px/1.1 Inter, system-ui, sans-serif", letterSpacing: '-0.01em' }}>
                Request a walkthrough
              </span>
              <span style={{ color: '#8A8C91', font: '400 14px/1.6 Inter, system-ui, sans-serif' }}>
                Proof of funds is required before we schedule access.
              </span>
            </div>
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
                Your offer (optional)
              </span>
              <span className="money">
                <span aria-hidden="true" style={{ color: '#A9ABB0', font: '400 16px Inter, system-ui, sans-serif' }}>
                  $
                </span>
                <input type="text" inputMode="numeric" name="offer" placeholder="145,000" />
              </span>
            </label>
            <label
              className="drop"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '18px',
                border: '1px dashed #343437',
                borderRadius: '14px',
                font: '500 14px Inter, system-ui, sans-serif',
              }}
            >
              <span
                style={{
                  flex: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '99px',
                  border: '1px solid rgba(255,121,46,.35)',
                  background: 'rgba(255,121,46,.07)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF792E"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" x2="12" y1="3" y2="15" />
                </svg>
              </span>
              <span style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                Upload proof of funds
                <span style={{ color: '#8A8C91', fontWeight: '400', fontSize: '13px' }}>
                  PDF, bank letter or statement
                </span>
              </span>
              <input className="sr" type="file" name="pof" accept="application/pdf,image/*" />
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
              Request Walkthrough
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
          <div
            style={{
              border: '1px solid #262628',
              borderRadius: '20px',
              padding: '26px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <span
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '99px',
                border: '1px solid rgba(255,121,46,.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FF792E',
                font: "italic 400 22px Inter, system-ui, sans-serif",
              }}
            >
              D
            </span>
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ font: "400 22px Inter, system-ui, sans-serif" }}>Questions? Talk to Don.</span>
              <a href="tel:5553184720" style={{ color: '#FF792E', font: '500 15px Inter, system-ui, sans-serif' }}>
                (555) 318-4720
              </a>
            </div>
          </div>
        </aside>
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
              More inventory
            </span>
            <h2
              style={{
                margin: '0',
                font: "400 clamp(42px, 4.8vw, 72px)/1.0 Inter, system-ui, sans-serif",
                letterSpacing: '-0.015em',
              }}
            >
              Similar <em style={{ fontStyle: 'italic', color: '#FF792E' }}>deals.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', maxWidth: '400px' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px 28px' }}>
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
                    height: '320px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.ranch} alt="Maple Ridge Ranch, a comparable single-story wholesale deal" width={1000} height={800} />
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
                  className="ph2"
                  style={{
                    position: 'relative',
                    height: '320px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.townhomes} alt="Hillcrest Townhomes, a comparable attached-home wholesale deal" width={1000} height={800} />
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
                    height: '320px',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid #262628',
                  }}
                >
                  <Img src={img.modern} alt="Westbrook Modern, a comparable contemporary wholesale deal" width={1000} height={800} />
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
        </div>
      </section>
      <Footer />
    </>
  )
}
