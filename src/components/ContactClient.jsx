'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Linkedin, ArrowUpRight } from 'lucide-react'

const content = {
  sv: {
    title: 'Hör gärna av dig!',
    intro: `Oavsett om du har ett konkret behov inom martech, AI, data/analytics, marketing operating model - eller bara tycker ämnet är intressant och vill ta ett första samtal så skriv gärna en rad, så hör jag av mig.`,
    form: {
      heading: '',
      name: 'Namn',
      email: 'E‑post',
      message: 'Meddelande',
      submit: 'Skicka',
      submitting: 'Skickar…',
    },
    linkedin: {
      label: 'LinkedIn',
      value: 'Säg gärna hej på LinkedIn!',
    },
    or: 'eller',
    error: 'Det gick inte att skicka. Försök igen om en stund.',
    thanksPath: '/sv/kontakt/tack',
  },
  en: {
    title: 'Contact',
    intro: `Whether you have a concrete need within martech, AI, data/analytics, or marketing operating model, or simply find the topic interesting and want an initial conversation, feel free to drop a note and I'll get back to you.`,
    form: {
      heading: '',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
      submitting: 'Sending…',
    },
    linkedin: {
      label: 'LinkedIn',
      value: 'Follow or send a message',
    },
    or: 'or',
    error: 'Could not send. Please try again in a moment.',
    thanksPath: '/en/contact/thanks',
  },
}

export default function ContactClient({ lang }) {
  const t = content[lang]
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitError('')

    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('https://formspree.io/f/xjgekolz', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Form submit failed')
      }

      router.push(t.thanksPath)
    } catch (error) {
      setSubmitError(t.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section">
      <div className="container container--prose">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="contact-title">{t.title}</h1>
          <p className="contact-intro">{t.intro}</p>
        </motion.div>

        <motion.div
          className="contact-methods"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="contact-method contact-method--form">
            {t.form.heading ? (
              <div className="contact-form__heading">{t.form.heading}</div>
            ) : null}
            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <label className="contact-form__field">
                <span className="contact-form__label">{t.form.name}</span>
                <input
                  className="contact-form__input"
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="contact-form__field">
                <span className="contact-form__label">{t.form.email}</span>
                <input
                  className="contact-form__input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="contact-form__field">
                <span className="contact-form__label">{t.form.message}</span>
                <textarea
                  className="contact-form__input contact-form__textarea"
                  name="message"
                  rows={5}
                  required
                />
              </label>

              <div className="contact-form__actions">
                <button type="submit" className="contact-form__submit" disabled={isSubmitting}>
                  {isSubmitting ? t.form.submitting : t.form.submit}
                </button>
                {submitError ? (
                  <span className="contact-form__error">{submitError}</span>
                ) : null}
              </div>
            </form>
          </div>

          <div className="contact-divider">
            <span>{t.or}</span>
          </div>

          <a
            href="https://www.linkedin.com/in/matilda-rydow-13057161/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-method contact-method--link"
          >
            <Linkedin className="contact-method__icon" size={22} />
            <div>
              <div className="contact-method__label">{t.linkedin.label}</div>
              <div className="contact-method__value contact-method__value--inline">
                {t.linkedin.value}
                <ArrowUpRight className="contact-method__link-icon" size={14} />
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
