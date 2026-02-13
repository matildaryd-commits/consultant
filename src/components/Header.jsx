'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navItems = {
  sv: [
    { path: '/sv/fragor', label: 'AI i Marketing' },
    { path: '/sv/om', label: 'Om' },
    { path: '/sv/kontakt', label: 'Kontakt' },
  ],
  en: [
    { path: '/en/faq', label: 'AI in Marketing' },
    { path: '/en/about', label: 'About' },
    { path: '/en/contact', label: 'Contact' },
  ],
}

// Route mapping for language switching
const routeMap = {
  '/sv': '/en',
  '/sv/fragor': '/en/faq',
  '/sv/om': '/en/about',
  '/sv/kontakt': '/en/contact',
  '/sv/kontakt/tack': '/en/contact/thanks',
  '/en': '/sv',
  '/en/faq': '/sv/fragor',
  '/en/about': '/sv/om',
  '/en/contact': '/sv/kontakt',
  '/en/contact/thanks': '/sv/kontakt/tack',
}

export default function Header({ lang }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const basePath = `/${lang}`
  const items = navItems[lang]

  const getOtherLangPath = () => {
    return routeMap[pathname] || (lang === 'sv' ? '/en' : '/sv')
  }

  const isActive = (path) => pathname === path

  return (
    <>
      <header className="header">
        <div className="header__inner">
          <Link href={basePath} className="header__name">
            Matilda Rydow
          </Link>

          <nav className="header__nav">
            {items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={isActive(item.path) ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
            <Link href={getOtherLangPath()} className="header__lang">
              {lang === 'sv' ? 'EN' : 'SV'}
            </Link>
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
          <Link
            key={item.path}
            href={item.path}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href={getOtherLangPath()}
          className="header__lang"
          style={{ marginTop: 'var(--space-8)' }}
        >
          {lang === 'sv' ? 'EN' : 'SV'}
        </Link>
      </nav>
    </>
  )
}
