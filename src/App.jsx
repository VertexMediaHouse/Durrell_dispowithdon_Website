import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Deals from './pages/Deals'
import DealDetail from './pages/DealDetail'
import Services from './pages/Services'
import About from './pages/About'
import SubmitDeal from './pages/SubmitDeal'
import BuyersNetwork from './pages/BuyersNetwork'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        position: 'relative',
        background: '#141414',
        color: '#F4F4F2',
        fontFamily: 'Inter, system-ui, sans-serif',
      }}
    >
      <ScrollToTop />
      <main id="main-content" style={{ flex: '1 0 auto', display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/deals/:slug" element={<DealDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit-deal" element={<SubmitDeal />} />
          <Route path="/buyers-network" element={<BuyersNetwork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}
