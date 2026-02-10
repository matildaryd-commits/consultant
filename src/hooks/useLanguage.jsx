import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const LanguageContext = createContext()

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
    const hasLangPrefix = /^\/(sv|en)(\/|$)/.test(location.pathname)
    const newPath = hasLangPrefix
      ? location.pathname.replace(/^\/(sv|en)/, `/${nextLang}`)
      : `/${nextLang}${location.pathname === '/' ? '' : location.pathname}`
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
