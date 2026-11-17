import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="stack">
            <Link to="/" className="logo">
              Dispo <span>With Don</span>
            </Link>
            <p className="small" style={{ maxWidth: '30ch' }}>
              Dispositions, buyer outreach and deal marketing for real estate wholesalers.
            </p>
          </div>
          <nav aria-label="Explore">
            <h2>Explore</h2>
            <ul>
              <li><Link to="/deals">Available deals</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact and FAQ</Link></li>
            </ul>
          </nav>
          <nav aria-label="Get started">
            <h2>Get started</h2>
            <ul>
              <li><Link to="/submit-deal">Submit a deal</Link></li>
              <li><Link to="/buyers-network">Join the buyers network</Link></li>
            </ul>
          </nav>
          <div>
            <h2>Contact</h2>
            <ul>
              <li><a href="tel:5553184720">(555) 318-4720</a></li>
              <li><a href="mailto:deals@dispowithdon.com">deals@dispowithdon.com</a></li>
              <li>Mon–Fri, 8am–7pm CT</li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 Dispo With Don</span>
          <span>Privacy policy · Terms</span>
        </div>
      </div>
    </footer>
  )
}
