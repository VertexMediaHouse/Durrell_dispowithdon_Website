import { Link } from 'react-router-dom'

// trail: [label, path] pairs between Home and the current page.
export default function PageHead({ crumb, trail = [], kicker, title, children }) {
  return (
    <section className="wrap page-head textured">
      <nav className="crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        {trail.map(([label, to]) => (
          <span key={to} className="row" style={{ gap: 8 }}>
            <span aria-hidden="true">/</span>
            <Link to={to}>{label}</Link>
          </span>
        ))}
        <span aria-hidden="true">/</span>
        <span aria-current="page">{crumb}</span>
      </nav>
      <div className="section-head" style={{ marginBottom: 0 }}>
        <div>
          {kicker && <span className="kicker">{kicker}</span>}
          <h1 className="h1">{title}</h1>
        </div>
        {children && (
          <p className="lead" style={{ maxWidth: '44ch' }}>
            {children}
          </p>
        )}
      </div>
    </section>
  )
}
