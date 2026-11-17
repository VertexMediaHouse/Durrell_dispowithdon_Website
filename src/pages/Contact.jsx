import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/usePageTitle'
import { preventSubmit } from '../lib/forms'
import PageHead from '../components/PageHead'
import Faq from '../components/Faq'

const FAQ = [
  ['How is the assignment fee split?', 'You keep 55% of the assignment fee. We keep 45%, paid when title funds.'],
  [
    'Do I need the property under contract first?',
    'Yes. We market contracted deals that you have the right to assign. If you are still negotiating and want an honest read on value first, call Don at (555) 318-4720.',
  ],
  [
    'What do I need to submit a deal?',
    'The address, property type, your contract price, your target buyer price, the closing deadline and photos. The signed purchase agreement is optional but helps.',
  ],
  [
    'Which markets do you work in?',
    'We work nationwide. Most of our cash buyers are in Ohio, Indiana, Georgia, Tennessee, Florida and nearby Midwest and Southern metros.',
  ],
  [
    'How do I join the buyers network?',
    <>
      Sign up on the <Link to="/buyers-network" className="link">buyers network</Link> page with your ZIP codes, property
      types and budget. It's free.
    </>,
  ],
]

export default function Contact() {
  usePageTitle('Contact')
  return (
    <>
      <PageHead crumb="Contact" kicker="Get in touch" title="Let's talk deals">
        Questions about a deal, the buyers network or the split? We reply to every message the same business day.
      </PageHead>

      <section className="wrap" style={{ paddingBottom: 'var(--section)' }}>
        <div className="detail">
          <form className="form" onSubmit={preventSubmit}>
            <div className="fields">
              <label className="field">
                <span>Full name</span>
                <input className="fld" type="text" name="name" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input className="fld" type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
              </label>
              <label className="field">
                <span>Phone</span>
                <input className="fld" type="tel" name="phone" autoComplete="tel" required />
              </label>
              <label className="field">
                <span>I am a</span>
                <select className="fld" name="role" defaultValue="">
                  <option value="" disabled>
                    Select one
                  </option>
                  <option>Wholesaler with a deal</option>
                  <option>Cash buyer</option>
                  <option>Agent or broker</option>
                  <option>Title or escrow officer</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <label className="field">
              <span>Message</span>
              <textarea
                className="fld"
                name="message"
                rows="5"
                placeholder="Tell us about the property, your question about the split, or what you buy."
                required
              />
            </label>
            <div>
              <button type="submit" className="btn btn-primary">
                Send message
              </button>
            </div>
          </form>

          <aside>
            <dl className="facts" style={{ gridTemplateColumns: '1fr' }}>
              <div>
                <dt>Phone, direct to Don</dt>
                <dd><a href="tel:5553184720">(555) 318-4720</a></dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:deals@dispowithdon.com">deals@dispowithdon.com</a></dd>
              </div>
              <div>
                <dt>Hours (Central Time)</dt>
                <dd>Mon–Fri 8–7, Sat 9–2</dd>
              </div>
              <div>
                <dt>Markets</dt>
                <dd>OH, IN, GA, TN, FL and growing</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="wrap section">
        <div className="split">
          <div className="stack">
            <h2 className="h2">Questions</h2>
            <p>What wholesalers and buyers ask us most.</p>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>
    </>
  )
}
