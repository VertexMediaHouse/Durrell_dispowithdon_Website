import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import { useReveal } from './lib/useReveal'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Deals from './pages/Deals'
import DealDetail from './pages/DealDetail'
import Services from './pages/Services'
import About from './pages/About'
import SubmitDeal from './pages/SubmitDeal'
import BuyersNetwork from './pages/BuyersNetwork'
import Contact from './pages/Contact'

export default function App() {
  useReveal()
  return (
    <>
      <a className="skip" href="#main-content">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content">
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
      <Footer />
    </>
  )
}
