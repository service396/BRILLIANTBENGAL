import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import WhyBengal from './pages/WhyBengal.jsx'
import Opportunities from './pages/Opportunities.jsx'
import SectorDetail from './pages/SectorDetail.jsx'
import Simple from './pages/Simple.jsx'
import NotFound from './pages/NotFound.jsx'
import { PAGES } from './data/pages.js'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-bengal" element={<WhyBengal />} />
          <Route path="/sectors" element={<Opportunities />} />
          <Route path="/sectors/:slug" element={<SectorDetail />} />
          {Object.entries(PAGES).map(([key, p]) => (
            <Route key={key} path={p.path} element={<Simple {...p} />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
