import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV = [
  ['Deals', '/deals'],
  ['Services', '/services'],
  ['About', '/about'],
  ['Buyers', '/buyers-network'],
  ['Contact', '/contact'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  const links = NAV.map(([label, to]) => (
    <NavLink key={to} to={to}>
      {label}
    </NavLink>
  ))

  return (
    <header className="site-header header-glow">
      <div className="wrap">
        <Link to="/" className="logo">
          Dispo <span>With Don</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {links}
        </nav>

        <div className="header-actions">
          <a href="tel:5553184720">(555) 318-4720</a>
          <Link to="/submit-deal" className="btn btn-primary">
            Submit a deal
          </Link>
        </div>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="wrap mobile-menu" aria-label="Mobile">
          {links}
          <a href="tel:5553184720">(555) 318-4720</a>
          <Link to="/submit-deal" className="btn btn-primary">
            Submit a deal
          </Link>
        </nav>
      )}
    </header>
  )
}
