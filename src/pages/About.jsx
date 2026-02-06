import { motion } from 'framer-motion'
import { ArrowUpRight, Play, Mic, FileText } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const content = {
  sv: {
    title: 'Om mig',
    portraitAlt: 'Porträtt av Matilda Rydow',
    intro: `Min expertis är <strong>martech, data & analytics och AI</strong>. Jag hjälper in-house team bygga en framtidssäkrad operational model, där teamet jobbar sida vid sida med AI-agenter, byråer och martech-stacken.

Idag är jag ängelinvesterare, rådgivare och independent consultant. Tidigare har jag varit Group COO och VD på Precis, CPO & Partner Sponsor på Alvie by Precis, CPO och Co-founder på Wilgot, samt Martech Lead & Digital Transformation Manager på Ving/Thomas Cook.`,
    chapters: {
      title: 'Bakgrund',
      items: [
        {
          period: 'Nu',
          role: 'Ängelinvesterare, Rådgivare och Independent Consultant',
          company: '',
          text: 'Stöttar CMO:er och ledningsgrupper i AI‑transformation och org‑design.',
        },
        {
          period: 'Tidigare',
          role: 'Group COO och VD',
          company: 'Precis',
          text: 'Skalade byrå från 60 till 600+ och arbetade nära ledningsgrupper och CMO:er med data, organisation och execution i en internationell miljö.',
        },
        {
          period: 'Tidigare',
          role: 'CPO & Partner Sponsor',
          company: 'Alvie by Precis',
          text: 'Byggde plattform för attribution och marketing intelligence med fokus på mätbarhet och beslutsstöd.',
        },
        {
          period: 'Tidigare',
          role: 'CPO och Co-founder',
          company: 'Wilgot',
          text: 'Byggde agentic commerce och GEO med fokus på skalbar content‑produktion och distribution.',
        },
        {
          period: 'Tidigare',
          role: 'Martech Lead & Digital Transformation Manager',
          company: 'Ving/Thomas Cook',
          text: 'Drev in‑house martech och transformation i en komplex, internationell organisation.',
        },
        {
          period: 'Tidigare',
          role: 'Head of Digital Marketing',
          company: 'Tikkurila (Alcro, Beckers)',
          text: 'Ledde digital transformation inom marketing i en internationell koncern.',
        },
      ],
    },
    interests: {
      title: 'Vad jag tänker på',
      items: [
        'Hur marknadsavdelningar ska organiseras för AI',
        'Koordination av AI‑agenter',
        'Byråsamarbete i AI‑eran',
        'Agentic commerce och dess påverkan på marketing',
        'GTM engineering och konvergensen mellan marketing och sales',
      ],
    },
    expertise: {
      title: 'Bolag jag har jobbat med',
      items: [
        'E‑handlare',
        'SaaS',
        'B2B',
        'Consumer',
        'App‑bolag',
      ],
    },
    media: {
      title: 'I media',
      items: [
        {
          type: 'video',
          title: 'Taking the next step Performance Marketing',
          source: 'Think with Google - Transform on-air',
          url: 'https://www.youtube.com/watch?v=Lswcvjw7Db4',
          thumbnail: 'https://img.youtube.com/vi/Lswcvjw7Db4/maxresdefault.jpg',
        },
        {
          type: 'podcast',
          title: 'Så lyckas ni med datadriven marknadsföring',
          source: 'Erik Modigs podd "Marknadsföring som säljer"',
          url: 'https://www.youtube.com/watch?v=h7Wz8NOryvI',
          thumbnail: 'https://img.youtube.com/vi/h7Wz8NOryvI/maxresdefault.jpg',
        },
      ],
    },
    elsewhere: {
      title: 'Mer om mig',
      items: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/matilda-rydow-13057161/' },
      ],
    },
  },
  en: {
    title: 'About me',
    portraitAlt: 'Portrait of Matilda Rydow',
    intro: `My expertise is <strong>martech, data & analytics, and AI</strong>. I help in-house teams build a future-proof operational model, where the team works side by side with AI agents, agencies, and the martech stack.

Today I'm an angel investor, advisor, and independent consultant. Previously I was Group COO and CEO at Precis, CPO & Partner Sponsor at Alvie by Precis, CPO and Co-founder at Wilgot, and Martech Lead & Digital Transformation Manager at Ving/Thomas Cook.`,
    chapters: {
      title: 'Background',
      items: [
        {
          period: 'Now',
          role: 'Angel Investor, Advisor, and Independent Consultant',
          company: '',
          text: 'Helping CMOs and leadership teams with AI transformation and org design.',
        },
        {
          period: 'Previously',
          role: 'Group COO and CEO',
          company: 'Precis',
          text: 'Scaled the agency from 60 to 600+ and worked closely with leadership teams and CMOs on data, org design, and execution in an international setup.',
        },
        {
          period: 'Previously',
          role: 'CPO & Partner Sponsor',
          company: 'Alvie by Precis',
          text: 'Built an attribution and marketing intelligence platform focused on measurement and decision support.',
        },
        {
          period: 'Previously',
          role: 'CPO and Co-founder',
          company: 'Wilgot',
          text: 'Built agentic commerce and GEO focused on scalable content production and distribution.',
        },
        {
          period: 'Previously',
          role: 'Martech Lead & Digital Transformation Manager',
          company: 'Ving/Thomas Cook',
          text: 'Led in‑house martech and transformation in a complex, international organization.',
        },
        {
          period: 'Previously',
          role: 'Head of Digital Marketing',
          company: 'Tikkurila (Alcro, Beckers)',
          text: 'Led digital transformation in marketing within a multi‑country group.',
        },
      ],
    },
    interests: {
      title: 'What I think about',
      items: [
        'How marketing departments should organize for AI',
        'Coordination of AI agents',
        'Agency collaboration in the AI era',
        'Agentic commerce and its impact on marketing',
        'GTM engineering and the convergence of marketing and sales',
      ],
    },
    expertise: {
      title: 'Company types',
      items: [
        'E‑commerce',
        'SaaS',
        'B2B',
        'Consumer',
        'App businesses',
      ],
    },
    media: {
      title: 'In media',
      items: [
        {
          type: 'video',
          title: 'Taking the next step Performance Marketing',
          source: 'Think with Google - Transform on-air',
          url: 'https://www.youtube.com/watch?v=Lswcvjw7Db4',
          thumbnail: 'https://img.youtube.com/vi/Lswcvjw7Db4/maxresdefault.jpg',
        },
        {
          type: 'podcast',
          title: 'How to succeed with data-driven marketing',
          source: 'Erik Modigs podd "Marknadsföring som säljer"',
          url: 'https://www.youtube.com/watch?v=h7Wz8NOryvI',
          thumbnail: 'https://img.youtube.com/vi/h7Wz8NOryvI/maxresdefault.jpg',
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

export default function About() {
  const { lang } = useLanguage()
  const t = content[lang]

  return (
    <section className="section">
      <div className="container container--prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-12">{t.title}</h1>

          <div className="about-hero">
            <div
              className="about-intro"
              dangerouslySetInnerHTML={{ __html: t.intro.replace(/\n\n/g, '</p><p>') }}
            />
            <div className="about-portrait">
              <img src="/matilda-portrait.jpg" alt={t.portraitAlt} loading="lazy" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="label mb-8">{t.chapters.title}</div>

          {t.chapters.items.map((item, i) => (
            <motion.div
              key={item.period}
              className="career-chapter"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <div className="career-chapter__period">{item.period}</div>
              <div>
                <div className="career-chapter__role">{item.role}</div>
                {item.company && (
                  <div className="career-chapter__company">{item.company}</div>
                )}
                <p className="career-chapter__text">{item.text}</p>
              </div>
            </motion.div>
          ))}
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
                      {item.type === 'podcast' ? <Mic size={20} /> : <Play size={20} />}
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
