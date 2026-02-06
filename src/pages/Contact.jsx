import { motion } from 'framer-motion'
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const content = {
  sv: {
    title: 'Kontakt',
    intro: `Jag tar gärna dialoger med CMO:er och ledningsgrupper om AI‑drivna marketing‑ och dataorganisationer. Det gäller strategi, operating model eller teknik. Skicka ett mail eller hitta mig på LinkedIn.`,
    email: {
      label: 'E-post',
      value: 'matilda@rydow.com',
      note: 'Jag försöker svara inom ett par dagar.',
    },
    linkedin: {
      label: 'LinkedIn',
      value: 'Följ eller skriv ett meddelande',
    },
    coffee: {
      title: 'Kaffe?',
      text: 'Jag är baserad i Stockholm. Om du vill träffas och prata, föreslå en tid.',
    },
  },
  en: {
    title: 'Contact',
    intro: `I welcome conversations with CMOs and leadership teams about AI‑driven marketing and data organizations. This covers strategy, operating model, or technology. Send an email or find me on LinkedIn.`,
    email: {
      label: 'Email',
      value: 'matilda@rydow.com',
      note: 'I try to respond within a couple of days.',
    },
    linkedin: {
      label: 'LinkedIn',
      value: 'Follow or send a message',
    },
    coffee: {
      title: 'Coffee?',
      text: "I'm based in Stockholm. If you want to meet up and chat, suggest a time.",
    },
  },
}

export default function Contact() {
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
          <h1 className="mb-8">{t.title}</h1>
          <p className="contact-intro">{t.intro}</p>
        </motion.div>

        <motion.div
          className="contact-methods"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a
            href={`mailto:${t.email.value}`}
            className="contact-method"
            style={{ textDecoration: 'none' }}
          >
            <Mail className="contact-method__icon" size={24} />
            <div>
              <div className="contact-method__label">{t.email.label}</div>
              <div className="contact-method__value">{t.email.value}</div>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                marginTop: 'var(--space-2)',
                marginBottom: 0,
              }}>
                {t.email.note}
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/matilda-rydow-13057161/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method"
            style={{ textDecoration: 'none' }}
          >
            <Linkedin className="contact-method__icon" size={24} />
            <div>
              <div className="contact-method__label">{t.linkedin.label}</div>
              <div className="contact-method__value" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                {t.linkedin.value}
                <ArrowUpRight size={16} />
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: 'var(--space-16)',
            padding: 'var(--space-8)',
            background: 'var(--bg-code)',
            borderRadius: 'var(--radius-md)',
            borderLeft: '3px solid var(--accent)',
          }}
        >
          <div className="label mb-4">{t.coffee.title}</div>
          <p style={{ marginBottom: 0, color: 'var(--text-secondary)' }}>
            {t.coffee.text}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
