import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import GenericPage from './pages/GenericPage.jsx'
import SectorsBoard, { SectorsAZ } from './pages/SectorsBoard.jsx'
import Calendar from './pages/Calendar.jsx'
import InvestmentGrid from './pages/InvestmentGrid.jsx'
import NotFound from './pages/NotFound.jsx'
import { PAGES } from './data/site.js'

// Routes with hand-built components. Everything else in PAGES is rendered by
// GenericPage, so adding a page to the design data adds a working route.
const BESPOKE = {
  '/': Home,
  '/sectors': SectorsBoard,
  '/sectors/all': SectorsAZ,
  '/calendar': Calendar,
  '/investment-grid': InvestmentGrid,
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="main" className="flex-1">
        <Routes>
          {Object.keys(BESPOKE).map((path) => {
            const C = BESPOKE[path]
            return <Route key={path} path={path} element={<C />} />
          })}
          {Object.keys(PAGES)
            .filter((route) => !BESPOKE[route])
            .map((route) => (
              <Route key={route} path={route} element={<GenericPage route={route} />} />
            ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
