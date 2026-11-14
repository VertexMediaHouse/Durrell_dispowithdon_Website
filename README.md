# Dispo With Don — Website (React + Vite)

8 pages, same design as the approved canvas: Home, Deals, Deal Detail, Services, About, Submit Your Deal, Join Buyers Network, Contact.

## Run
```
npm install
npm run dev
```

## Build & deploy (Cloudflare Workers)
```
npm run build
npx wrangler deploy
```

## Structure
- `src/pages/` – one component per page
- `src/components/Header.jsx`, `Footer.jsx` – shared header (ticker + nav) and footer
- `src/index.css` – global styles, hover states, animations
- `src/lib/forms.js` – form submit handler (replace with GoHighLevel integration)

## Routes
| Page | Path |
|---|---|
| Home | `/` |
| Deals | `/deals` |
| Deal Detail | `/deals/oakwood-craftsman` |
| Services | `/services` |
| About | `/about` |
| Submit Your Deal | `/submit-deal` |
| Join Buyers Network | `/buyers-network` |
| Contact | `/contact` |

Image areas are styled placeholder frames — replace each with an `<img>` when real photos are ready.
Sample content (phone, email, deals, stats, testimonials, team) should be replaced with real details before launch.
