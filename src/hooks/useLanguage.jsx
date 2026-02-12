import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const LanguageContext = createContext()

// Route mapping between languages
const routeMap = {
  sv: {
    fragor: 'fragor',
    om: 'om',
    kontakt: 'kontakt',
    'kontakt/tack': 'kontakt/tack',
  },
  en: {
    fragor: 'faq',
    om: 'about',
    kontakt: 'contact',
    'kontakt/tack': 'contact/thanks',
  },
}

// Reverse mapping for translation
const reverseRouteMap = {
  faq: 'fragor',
  about: 'om',
  contact: 'kontakt',
  'contact/thanks': 'kontakt/tack',
}

export function LanguageProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()
  const pathLang = useMemo(() => {
    const match = location.pathname.match(/^\/(sv|en)(\/|$)/)
    return match ? match[1] : null
  }, [location.pathname])

  const [lang, setLang] = useState(() => {
    const stored = localStorage.getItem('lang')
    return stored || 'sv'
  })

  useEffect(() => {
    if (pathLang && pathLang !== lang) {
      setLang(pathLang)
      return
    }
    if (!pathLang) return
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang, pathLang])

  const setLangAndNavigate = useCallback((nextLang) => {
    if (nextLang === lang) {
      setLang(nextLang)
      return
    }

    // Extract current path without language prefix
    const match = location.pathname.match(/^\/(sv|en)\/(.*)$/)
    let slug = match ? match[2] : ''

    // Translate the slug to the new language
    if (slug) {
      // First normalize to Swedish (base) slug
      const baseSlug = reverseRouteMap[slug] || slug
      // Then translate to target language
      slug = routeMap[nextLang]?.[baseSlug] || baseSlug
    }

    const newPath = `/${nextLang}${slug ? '/' + slug : ''}`
    setLang(nextLang)
    navigate(`${newPath}${location.search}${location.hash}`)
  }, [lang, location.pathname, location.search, location.hash, navigate])

  const toggleLang = () => {
    setLangAndNavigate(lang === 'sv' ? 'en' : 'sv')
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang: setLangAndNavigate, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Helper to get localized path
export function getLocalizedPath(lang, baseSlug) {
  const slug = routeMap[lang]?.[baseSlug] || baseSlug
  return `/${lang}/${slug}`
}

// Export route map for hreflang generation
export { routeMap }
