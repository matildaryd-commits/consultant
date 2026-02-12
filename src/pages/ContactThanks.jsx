import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage, getLocalizedPath } from '../hooks/useLanguage'
import { applyPageMeta, setHreflangLinks } from '../utils/seo'

const content = {
  sv: {
    title: 'Tack för ditt meddelande',
    intro: 'Vad kul att du hör av dig! Jag hör av mig inom kort.',
    meanwhile: 'Under tiden',
    links: [
      { label: 'Läs vanliga frågor om AI i marketing', href: 'fragor', type: 'internal' },
      { label: 'Följ mig på LinkedIn', href: 'https://www.linkedin.com/in/matilda-rydow-13057161/', type: 'external' },
    ],
    home: 'Till startsidan',
  },
  en: {
    title: 'Thank you for reaching out',
    intro: "Great to hear from you! I read all messages personally and will get back to you as soon as I can, usually within a couple of days.",
    meanwhile: 'In the meantime',
    links: [
      { label: 'Read common questions about AI in marketing', href: 'fragor', type: 'internal' },
      { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/matilda-rydow-13057161/', type: 'external' },
    ],
    home: 'Back to home',
  },
}

export default function ContactThanks() {
  const { lang } = useLanguage()
  const t = content[lang]
  useEffect(() => {
    const origin = 'https://matildarydow.com'
    const basePath = lang === 'sv' ? '/sv' : '/en'
    const description = lang === 'sv'
      ? 'Tack för ditt meddelande.'
      : 'Thanks for your message.'

    document.documentElement.lang = lang
    applyPageMeta({
      title: lang === 'sv' ? 'Tack | Matilda Rydow' : 'Thank you | Matilda Rydow',
      description,
      ogTitle: lang === 'sv' ? 'Tack' : 'Thank you',
      ogDescription: description,
      ogImage: `${origin}/matilda-portrait.jpg`,
      locale: lang === 'sv' ? 'sv_SE' : 'en_US',
      canonical: `${origin}${getLocalizedPath(lang, 'kontakt/tack')}`,
    })

    setHreflangLinks([
      { lang: 'sv', href: `${origin}/sv/kontakt/tack` },
      { lang: 'en', href: `${origin}/en/contact/thanks` },
      { lang: 'x-default', href: `${origin}/sv/kontakt/tack` },
    ])
  }, [lang])

  return (
    <section className="section section--lg">
      <div className="container container--prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="thanks-content"
        >
          <motion.div
            className="thanks-icon"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Check size={32} strokeWidth={2.5} />
          </motion.div>

          <h1 className="thanks-title">{t.title}</h1>
          <p className="thanks-intro">{t.intro}</p>

          <div className="thanks-divider">
            <span>{t.meanwhile}</span>
          </div>

          <div className="thanks-links">
            {t.links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                {link.type === 'internal' ? (
                  <Link to={getLocalizedPath(lang, link.href)} className="thanks-link">
                    <span>{link.label}</span>
                    <ArrowRight size={16} />
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="thanks-link"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <Link to={`/${lang}`} className="thanks-home">
            {t.home}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
