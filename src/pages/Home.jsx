import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useLanguage, getLocalizedPath } from '../hooks/useLanguage'
import { getFaqId } from '../data/faq'
import { faqs } from '../data/faq'
import { applyPageMeta, setHreflangLinks } from '../utils/seo'

const content = {
  sv: {
    greeting: 'Hej, jag heter Matilda.',
    title: 'Jag hjälper CMO:er och ledningsgrupper att navigera AI.',
    bio: 'Min expertis är martech, data & analytics och AI. Jag hjälper in-house team bygga en framtidssäkrad operational model, där teamet jobbar sida vid sida med AI-agenter, byråer och martech-stacken. Jag har varit <strong>Group COO och VD på Precis</strong>, Martech Lead på <strong>Ving/Thomas Cook</strong>, och byggt <strong>Alvie</strong> (attribution/marketing intelligence) samt <strong>Wilgot</strong> (agentic commerce/GEO).',
    status: 'Tillgänglig för strategiska samtal',
    links: {
      linkedin: 'LinkedIn',
      faq: 'AI i Marketing',
    },
    now: {
      title: 'Just nu',
      building: { label: 'Fokus', value: 'Hur organiserar man marknads-, e‑com- och CRM‑organisationerna 2026–2027 och framåt?' },
      thinking: { label: 'Tänker på', value: 'Vad agentic commerce betyder för SaaS, B2B och appar' },
      reading: { label: 'Jobbar med', value: 'Hur man undviker spretiga AI‑initiativ i marketing' },
    },
    faq: {
      title: 'Vanliga frågor',
      viewAll: 'Alla frågor',
    },
  },
  en: {
    greeting: "Hi, I'm Matilda.",
    title: 'I help CMOs and leadership teams navigate AI.',
    bio: 'My expertise is martech, data & analytics, and AI. I help in-house teams build a future-proof operational model, where the team works side by side with AI agents, agencies, and the martech stack. I was <strong>Group COO and CEO at Precis</strong>, Martech Lead at <strong>Ving/Thomas Cook</strong>, and I built <strong>Alvie</strong> (attribution/marketing intelligence) and <strong>Wilgot</strong> (agentic commerce/GEO).',
    status: 'Available for strategic conversations',
    links: {
      linkedin: 'LinkedIn',
      faq: 'AI in Marketing',
    },
    now: {
      title: 'Now',
      building: { label: 'Focus', value: 'How organisations coordinate AI agents, agencies, and in‑house' },
      thinking: { label: 'Thinking about', value: 'Agentic commerce and what it means for marketing' },
      reading: { label: 'Reading', value: 'GTM engineering' },
    },
    faq: {
      title: 'Common questions',
      viewAll: 'All questions',
    },
  },
}

// Featured questions to show on homepage
const featuredFaqIds = [
  'organisera-marknadsavdelning',
  'agentic-commerce-vad-ar',
  'byra-samarbete-minska-kommunikation',
]

export default function Home() {
  const { lang } = useLanguage()
  const t = content[lang]
  const featuredFaqs = faqs.filter(faq => featuredFaqIds.includes(faq.id))
  const faqById = Object.fromEntries(faqs.map(faq => [faq.id, faq]))
  const nowLinks = [
    { label: t.now.building.label, id: 'organisera-marknadsavdelning' },
    { label: t.now.thinking.label, id: 'agentic-commerce-vad-ar' },
    { label: t.now.reading.label, id: 'undvik-spretiga-ai-initiativ' },
  ]

  useEffect(() => {
    const origin = 'https://matildarydow.com'
    const basePath = lang === 'sv' ? '/sv' : '/en'
    const description = lang === 'sv'
      ? 'AI-konsult som hjälper CMO:er och marknadsavdelningar med martech, data/analytics och AI-agenter. Fd Group COO på Precis. Boka rådgivning.'
      : 'AI consultant helping CMOs and marketing teams with martech, data/analytics, and AI agents. Former Group COO at Precis. Book a consultation.'

    document.documentElement.lang = lang
    applyPageMeta({
      title: lang === 'sv' ? 'AI-konsult för Marknadsföring & Data | Matilda Rydow' : 'AI Consultant for Marketing & Data | Matilda Rydow',
      description,
      ogTitle: lang === 'sv' ? 'AI-konsult för Marknadsföring & Data' : 'AI Consultant for Marketing & Data',
      ogDescription: description,
      ogImage: `${origin}/matilda-portrait.jpg`,
      locale: lang === 'sv' ? 'sv_SE' : 'en_US',
      canonical: `${origin}${basePath}/`,
    })

    setHreflangLinks([
      { lang: 'sv', href: `${origin}/sv/` },
      { lang: 'en', href: `${origin}/en/` },
      { lang: 'x-default', href: `${origin}/sv/` },
    ])
  }, [lang])

  return (
    <>
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero__intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero__greeting">{t.greeting}</div>
            <h1 className="hero__title">{t.title}</h1>
            <p
              className="hero__bio"
              dangerouslySetInnerHTML={{ __html: t.bio }}
            />

            <div className="hero__links">
              <a
                href="https://www.linkedin.com/in/matilda-rydow-13057161/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.links.linkedin}
                <ArrowUpRight size={14} />
              </a>
              <Link to={getLocalizedPath(lang, 'fragor')}>
                {t.links.faq}
                <ArrowRight size={14} />
              </Link>
              <span className="status">
                <span className="status__dot" />
                {t.status}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="now-section">
        <div className="container">
          <div className="label mb-8">{t.now.title}</div>
          <div className="now-grid">
            {nowLinks.map(item => {
              const faq = faqById[item.id]
              const question = faq?.[lang]?.question
              const faqId = faq ? getFaqId(faq, lang) : item.id
              return (
                <div className="now-item" key={item.id}>
                  <div className="now-item__label">{item.label}</div>
                  <div className="now-item__value">
                    <Link to={`${getLocalizedPath(lang, 'fragor')}#${faqId}`}>
                      {question} <ArrowUpRight size={12} />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 0 }}>{t.faq.title}</h2>
            <Link to={getLocalizedPath(lang, 'fragor')} className="btn btn--ghost">
              {t.faq.viewAll} <ArrowRight size={14} />
            </Link>
          </div>

          <ul className="writing-list">
            {featuredFaqs.map((faq, i) => {
              const localized = faq[lang]
              return (
                <motion.li
                  key={faq.id}
                  className="writing-item"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`${getLocalizedPath(lang, 'fragor')}#${getFaqId(faq, lang)}`}>
                    <h3 className="writing-item__title">
                      {localized.question}
                    </h3>
                    <p className="writing-item__excerpt">
                      {localized.answer.split('\n\n')[0].replace(/\*\*/g, '').slice(0, 150)}...
                    </p>
                  </Link>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
