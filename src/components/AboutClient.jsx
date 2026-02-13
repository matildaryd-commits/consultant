'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Play, Mic, FileText } from 'lucide-react'

const content = {
  sv: {
    title: 'Hej, jag heter Matilda',
    subtitle: 'Rådgivare inom martech, data/analytics och AI – med fokus på både tech och organisation.',
    portraitAlt: 'Porträtt av Matilda Rydow',
    intro: `Jag jobbar med <strong>martech, data/analytics och AI</strong>. Jag hjälper team att bygga lösningar och arbetssätt som gör att data och AI faktiskt används: från <strong>mätning, datamodeller och arkitektur</strong> till <strong>produktbeslut, prioriteringar</strong> och hur <strong>AI‑agenter</strong> vävs in i flöden, ansvar och verktyg. Men tech är sällan hela svaret. Jag lägger lika mycket vikt vid det organisatoriska: <strong>tydliga roller, bra beslutsfattande</strong>, rimliga processer och samarbete som håller över tid. När tech och organisation drar åt samma håll händer det saker – och det är där jag brukar göra störst skillnad.

Utöver att hjälpa bolag med martech, data/analytics och AI är jag ängelinvesterare. Tidigare har jag varit Group COO och VD på <strong>Precis</strong>, Martech Lead på Ving/Thomas Cook, och byggt Alvie (<strong>attribution/marketing intelligence</strong>) samt Wilgot (<strong>agentic commerce</strong>/GEO).`,
    interests: {
      title: 'Vad jag tänker på',
      items: [
        'Hur marknadsavdelningar ska organiseras för AI',
        'Koordination av AI‑agenter',
        'Byråsamarbete i AI‑eran',
        'Agentic commerce och dess påverkan på marketing',
      ],
    },
    expertise: {
      title: 'Bolag jag har jobbat med',
      items: ['E‑handlare', 'SaaS', 'B2B', 'App‑bolag'],
    },
    media: {
      title: 'I media',
      items: [
        {
          type: 'podcast',
          title: 'Så lyckas ni med datadriven marknadsföring',
          source: 'Erik Modigs podd "Marknadsföring som säljer"',
          url: 'https://www.youtube.com/watch?v=h7Wz8NOryvI',
          thumbnail: 'https://img.youtube.com/vi/h7Wz8NOryvI/maxresdefault.jpg',
        },
        {
          type: 'video',
          title: 'Taking the next step Performance Marketing',
          source: 'Think with Google - Transform on-air',
          url: 'https://www.youtube.com/watch?v=Lswcvjw7Db4',
          thumbnail: 'https://img.youtube.com/vi/Lswcvjw7Db4/maxresdefault.jpg',
        },
        {
          type: 'article',
          title: '99 kvinnor som tar marknadsföring och tech till nästa nivå',
          source: 'Resumé',
          url: 'https://www.resume.se/marknadsforing/tech/99-kvinnor-som-tar-marknadsforing-och-tech-till-nasta-niva/',
          thumbnail: '/resume-logo.png',
        },
      ],
    },
    elsewhere: {
      title: 'Mer om mig',
      items: [
        { label: 'Säg gärna hej på LinkedIn!', url: 'https://www.linkedin.com/in/matilda-rydow-13057161/' },
      ],
    },
  },
  en: {
    title: "Hi, I'm Matilda",
    subtitle: 'Advisor in martech, data/analytics, and AI, with a focus on both tech and organization.',
    portraitAlt: 'Portrait of Matilda Rydow',
    intro: `I work with <strong>martech, data/analytics, and AI</strong>. I help teams build solutions and ways of working that make data and AI actually used: from <strong>measurement, data models, and architecture</strong> to <strong>product decisions and priorities</strong>, and how <strong>AI agents</strong> are embedded in flows, ownership, and tools. But tech is rarely the whole answer. I put equal weight on the organizational side: <strong>clear roles and solid decision‑making</strong>, reasonable processes, and collaboration that holds up over time. When tech and organization pull in the same direction, things happen. That's where I tend to make the biggest difference.

Beyond helping companies with martech, data/analytics, and AI, I'm an angel investor. Previously I was Group COO and CEO at <strong>Precis</strong>, Martech Lead at Ving/Thomas Cook, and built Alvie (<strong>attribution/marketing intelligence</strong>) and Wilgot (<strong>agentic commerce</strong>/GEO).`,
    interests: {
      title: 'What I think about',
      items: [
        'How marketing departments should organize for AI',
        'Coordination of AI agents',
        'Agency collaboration in the AI era',
        'Agentic commerce and its impact on marketing',
      ],
    },
    expertise: {
      title: 'Company types',
      items: ['E‑commerce', 'SaaS', 'B2B', 'App businesses'],
    },
    media: {
      title: 'In media',
      items: [
        {
          type: 'podcast',
          title: 'How to succeed with data-driven marketing',
          source: 'Erik Modigs podd "Marknadsföring som säljer"',
          url: 'https://www.youtube.com/watch?v=h7Wz8NOryvI',
          thumbnail: 'https://img.youtube.com/vi/h7Wz8NOryvI/maxresdefault.jpg',
        },
        {
          type: 'video',
          title: 'Taking the next step Performance Marketing',
          source: 'Think with Google - Transform on-air',
          url: 'https://www.youtube.com/watch?v=Lswcvjw7Db4',
          thumbnail: 'https://img.youtube.com/vi/Lswcvjw7Db4/maxresdefault.jpg',
        },
        {
          type: 'article',
          title: '99 kvinnor som tar marknadsföring och tech till nästa nivå',
          source: 'Resumé',
          url: 'https://www.resume.se/marknadsforing/tech/99-kvinnor-som-tar-marknadsforing-och-tech-till-nasta-niva/',
          thumbnail: '/resume-logo.png',
        },
      ],
    },
    elsewhere: {
      title: 'More of me',
      items: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/matilda-rydow-13057161/' },
      ],
    },
  },
}

export default function AboutClient({ lang }) {
  const t = content[lang]

  return (
    <section className="section">
      <div className="container about-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-8">{t.title}</h1>
          {t.subtitle ? (
            <h2 className="about-subtitle">{t.subtitle}</h2>
          ) : null}

          <div className="about-hero">
            <div
              className="about-intro"
              dangerouslySetInnerHTML={{ __html: t.intro.replace(/\n\n/g, '</p><p>') }}
            />
            <div className="about-portrait">
              <img
                src="/matilda-portrait.jpg"
                srcSet="/matilda-portrait-mobile.jpg 480w, /matilda-portrait.jpg 726w"
                sizes="(max-width: 768px) 160px, 240px"
                alt={t.portraitAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: 'var(--space-16)' }}
        >
          <div className="label mb-8">{t.interests.title}</div>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'grid',
            gap: 'var(--space-3)',
          }}>
            {t.interests.items.map((item, i) => (
              <li
                key={i}
                style={{
                  paddingLeft: 'var(--space-6)',
                  position: 'relative',
                  color: 'var(--text-secondary)',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  *
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: 'var(--space-16)' }}
        >
          <div className="label mb-8">{t.expertise.title}</div>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'grid',
            gap: 'var(--space-3)',
          }}>
            {t.expertise.items.map((item, i) => (
              <li
                key={i}
                style={{
                  paddingLeft: 'var(--space-6)',
                  position: 'relative',
                  color: 'var(--text-secondary)',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  *
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: 'var(--space-16)' }}
        >
          <div className="label mb-8">{t.media.title}</div>
          <div className="media-grid">
            {t.media.items.map((item) => (
              <a
                key={item.url}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="media-card"
              >
                {item.thumbnail ? (
                  <div className="media-card__thumbnail">
                    <img src={item.thumbnail} alt={item.title} loading="lazy" />
                    <div className="media-card__play">
                      {item.type === 'podcast' ? <Mic size={20} /> : item.type === 'video' ? <Play size={20} /> : <FileText size={20} />}
                    </div>
                  </div>
                ) : (
                  <div className="media-card__icon">
                    <FileText size={24} />
                  </div>
                )}
                <div className="media-card__content">
                  <span className="media-card__source">{item.source}</span>
                  <span className="media-card__title">{item.title}</span>
                </div>
                <ArrowUpRight size={14} className="media-card__arrow" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ marginTop: 'var(--space-16)' }}
        >
          <div className="label mb-8">{t.elsewhere.title}</div>
          <div style={{ display: 'flex', gap: 'var(--space-6)' }}>
            {t.elsewhere.items.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  color: 'var(--text-secondary)',
                }}
              >
                {item.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
