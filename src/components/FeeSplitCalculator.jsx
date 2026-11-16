import { useState } from 'react'
import { Link } from 'react-router-dom'

const PRESETS = [10000, 15000, 20000, 30000, 50000]

export default function FeeSplitCalculator() {
  const [fee, setFee] = useState(20000)

  const wholesalerShare = Math.round(fee * 0.55)
  const donShare = Math.round(fee * 0.45)
  const standardFiftyShare = Math.round(fee * 0.5)
  const extraGain = wholesalerShare - standardFiftyShare

  const formatMoney = (n) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)

  return (
    <div
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #1d1d20 0%, #151517 100%)',
        border: '1px solid #343438',
        borderRadius: '24px',
        padding: 'clamp(28px, 4vw, 44px)',
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
        boxShadow: '0 30px 60px rgba(0,0,0,.6), 0 0 40px rgba(255,121,46,.08)',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '320px',
          height: '320px',
          borderRadius: '999px',
          background: 'radial-gradient(closest-side, rgba(255,121,46,0.18), transparent)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <span
            style={{
              color: '#FF792E',
              font: '500 11px Inter, system-ui, sans-serif',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '6px',
            }}
          >
            Interactive Payout Calculator
          </span>
          <h3 style={{ margin: 0, font: '400 clamp(24px, 3vw, 34px)/1.1 Inter, system-ui, sans-serif', letterSpacing: '-0.01em' }}>
            Calculate your <span style={{ color: '#FF792E', fontStyle: 'italic' }}>55% split</span>
          </h3>
        </div>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '99px',
            background: 'rgba(255,121,46,0.12)',
            border: '1px solid rgba(255,121,46,0.3)',
            color: '#FF792E',
            font: '600 12px Inter, system-ui, sans-serif',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '99px', background: '#FF792E' }} />
          55/45 Split in Your Favor
        </span>
      </div>

      {/* Preset Buttons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <span style={{ color: '#8A8C91', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          Expected Assignment Fee:
        </span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {PRESETS.map((amount) => {
            const isActive = fee === amount
            return (
              <button
                key={amount}
                type="button"
                onClick={() => setFee(amount)}
                className={`calc-chip ${isActive ? 'active' : ''}`}
              >
                {formatMoney(amount)}
              </button>
            )
          })}
        </div>
      </div>

      {/* Slider */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ color: '#A9ABB0', font: '400 13px Inter, system-ui, sans-serif' }}>Custom Fee Slider:</span>
          <span style={{ font: '600 20px Inter, system-ui, sans-serif', color: '#F4F4F2' }}>{formatMoney(fee)}</span>
        </div>
        <input
          type="range"
          min="5000"
          max="80000"
          step="1000"
          value={fee}
          onChange={(e) => setFee(Number(e.target.value))}
          style={{
            width: '100%',
            accentColor: '#FF792E',
            cursor: 'pointer',
            height: '6px',
            background: '#2A2A2D',
            borderRadius: '99px',
          }}
        />
      </div>

      {/* Split Display Deck */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
          gap: '16px',
          padding: '24px',
          background: 'rgba(20, 20, 21, 0.9)',
          border: '1px solid #2C2C2F',
          borderRadius: '18px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '99px', background: '#FF792E' }} />
            <span style={{ color: '#FF792E', font: '600 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Your Net Payout (55%)
            </span>
          </div>
          <span style={{ font: '700 clamp(32px, 4vw, 44px)/1 Inter, system-ui, sans-serif', color: '#FFFFFF' }}>
            {formatMoney(wholesalerShare)}
          </span>
          <span style={{ color: '#2ED177', font: '500 12px Inter, system-ui, sans-serif', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            +{formatMoney(extraGain)} extra vs typical 50/50
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '99px', background: '#6E7075' }} />
            <span style={{ color: '#A9ABB0', font: '500 11px Inter, system-ui, sans-serif', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Dispo With Don (45%)
            </span>
          </div>
          <span style={{ font: '400 clamp(28px, 3.5vw, 38px)/1 Inter, system-ui, sans-serif', color: '#A9ABB0' }}>
            {formatMoney(donShare)}
          </span>
          <span style={{ color: '#8A8C91', font: '400 12px Inter, system-ui, sans-serif' }}>
            Covers marketing, vetted buyers & coordination
          </span>
        </div>
      </div>

      {/* Visual Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', height: '8px', gap: '4px', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{ width: '55%', background: '#FF792E', borderRadius: '99px', boxShadow: '0 0 12px rgba(255,121,46,0.6)' }} />
          <div style={{ width: '45%', background: '#343438', borderRadius: '99px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#8A8C91', font: '500 11px Inter, system-ui, sans-serif' }}>
          <span style={{ color: '#FF792E' }}>55% Wholesaler</span>
          <span>45% Dispo With Don</span>
        </div>
      </div>

      {/* CTA */}
      <Link
        to="/submit-deal"
        className="btn-o"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          minHeight: '52px',
          padding: '0 24px',
          background: '#FF792E',
          borderRadius: '999px',
          color: '#141414',
          font: '600 15px Inter, system-ui, sans-serif',
          textDecoration: 'none',
        }}
      >
        Submit Deal & Lock In 55%
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}
