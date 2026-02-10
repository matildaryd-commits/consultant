import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const navItems = {
  sv: [
    { path: '/fragor', label: 'AI i Marketing' },
    { path: '/om', label: 'Om' },
    { path: '/kontakt', label: 'Kontakt' },
  ],
  en: [
    { path: '/fragor', label: 'AI in Marketing' },
    { path: '/om', label: 'About' },
    { path: '/kontakt', label: 'Contact' },
  ],
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggleLang } = useLanguage()
  const basePath = `/${lang}`

  const items = navItems[lang]

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link to={basePath} className="header__name">
            Matilda Rydow
          </Link>

          <nav className="header__nav">
            {items.map((item) => (
              <NavLink
                key={item.path}
                to={`${basePath}${item.path}`}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            ))}
            <button className="header__lang" onClick={toggleLang}>
              {lang.toUpperCase()}
            </button>
          </nav>

          <button
            className="header__menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <nav className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={`${basePath}${item.path}`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <button
          className="header__lang"
          onClick={toggleLang}
          style={{ marginTop: 'var(--space-8)' }}
        >
          {lang === 'sv' ? 'EN' : 'SV'}
        </button>
      </nav>
    </>
  )
}
