import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './hooks/useLanguage'
import Layout from './components/Layout'
import Home from './pages/Home'
import FAQ from './pages/Writing'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fragor" element={<FAQ />} />
            <Route path="om" element={<About />} />
            <Route path="kontakt" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
