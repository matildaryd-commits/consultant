import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LanguageProvider } from './hooks/useLanguage'
import Layout from './components/Layout'
import Home from './pages/Home'
import FAQ from './pages/Writing'
import About from './pages/About'
import Contact from './pages/Contact'
import ContactThanks from './pages/ContactThanks'

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/sv" replace />} />

          <Route path="/sv" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fragor" element={<FAQ />} />
            <Route path="om" element={<About />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="kontakt/tack" element={<ContactThanks />} />
          </Route>

          <Route path="/en" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fragor" element={<FAQ />} />
            <Route path="om" element={<About />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="kontakt/tack" element={<ContactThanks />} />
          </Route>

          <Route path="/fragor" element={<Navigate to="/sv/fragor" replace />} />
          <Route path="/om" element={<Navigate to="/sv/om" replace />} />
          <Route path="/kontakt" element={<Navigate to="/sv/kontakt" replace />} />
          <Route path="/kontakt/tack" element={<Navigate to="/sv/kontakt/tack" replace />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  )
}
