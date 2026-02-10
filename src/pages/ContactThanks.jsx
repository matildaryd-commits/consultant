import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'
import { applyPageMeta, setHreflangLinks } from '../utils/seo'

const content = {
  sv: {
    title: 'Tack!',
    intro: 'Meddelandet är skickat. Jag återkommer så snart jag kan.',
    back: 'Tillbaka till kontakt',
  },
  en: {
    title: 'Thank you!',
    intro: 'Your message has been sent. I will get back to you as soon as I can.',
    back: 'Back to contact',
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
      title: lang === 'sv' ? 'Tack — Matilda Rydow' : 'Thank you — Matilda Rydow',
      description,
      ogTitle: lang === 'sv' ? 'Tack' : 'Thank you',
      ogDescription: description,
      ogImage: `${origin}/matilda-portrait.jpg`,
      locale: lang === 'sv' ? 'sv_SE' : 'en_US',
      canonical: `${origin}${basePath}/kontakt/tack`,
    })

    setHreflangLinks([
      { lang: 'sv', href: `${origin}/sv/kontakt/tack` },
      { lang: 'en', href: `${origin}/en/kontakt/tack` },
      { lang: 'x-default', href: `${origin}/sv/kontakt/tack` },
    ])
  }, [lang])

  return (
    <section className="section">
      <div className="container container--prose">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="mb-6">{t.title}</h1>
          <p className="contact-intro">{t.intro}</p>
          <Link to={`/${lang}/kontakt`} className="contact-back">
            <ArrowLeft size={16} />
            {t.back}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
