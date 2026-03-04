'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import { faqCategories, getFaqId } from '../data/faq'

function formatAnswer(text) {
  return text
    .split(/\n\s*\n/)
    .map(paragraph => {
      const trimmed = paragraph.replace(/^[\s\u00A0]+/u, '')
      const listItemRegex = /^\s*-\s+/u

      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        const content = trimmed.slice(2, -2)
        return `<h2>${content}</h2>`
      }

      const rawLines = paragraph.split('\n')
      const listLines = rawLines.filter(line => listItemRegex.test(line))
      const hasInlineList = listLines.length > 0

      let formatted = paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

      if (listItemRegex.test(trimmed)) {
        const items = rawLines.map(item => {
          let itemText = item.replace(listItemRegex, '')
          itemText = itemText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
          return `<li>${itemText}</li>`
        }).join('')
        return `<ul>${items}</ul>`
      }

      if (hasInlineList) {
        const introLines = rawLines.filter(line => !listItemRegex.test(line))
        const introText = introLines.join(' ').replace(/\s+/g, ' ').trim()
        const introFormatted = introText
          ? `<p>${introText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')}</p>`
          : ''
        const items = listLines.map(item => {
          let itemText = item.replace(listItemRegex, '')
          itemText = itemText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
          return `<li>${itemText}</li>`
        }).join('')
        return `${introFormatted}<ul>${items}</ul>`
      }

      if (/^\d+\.\s/.test(trimmed)) {
        return `<p class="faq-numbered">${formatted.trimStart()}</p>`
      }

      return `<p>${formatted}</p>`
    })
    .join('')
}

const translations = {
  sv: {
    backToAll: 'Alla frågor & svar',
    relatedQuestions: 'Relaterade frågor',
    categories: 'Kategorier',
    author: 'Matilda Rydow',
    faqPath: '/sv/fragor',
  },
  en: {
    backToAll: 'All questions & answers',
    relatedQuestions: 'Related questions',
    categories: 'Categories',
    author: 'Matilda Rydow',
    faqPath: '/en/faq',
  },
}

export default function FAQDetailPage({ faq, relatedFaqs, lang }) {
  const t = translations[lang]
  const localized = faq[lang]

  return (
    <section className="section">
      <div className="container container--prose">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href={t.faqPath} className="faq-detail__back">
            <ArrowLeft size={16} />
            <span>{t.backToAll}</span>
          </Link>
        </motion.div>

        <motion.article
          className="faq-detail"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="faq-detail__tags">
            {faq.categories.map(catId => {
              const cat = faqCategories.find(c => c.id === catId)
              return cat ? (
                <span key={catId} className="faq-tag">{cat[lang].title}</span>
              ) : null
            })}
          </div>
          <h1 className="faq-detail__question">{localized.question}</h1>
          <div className="faq-detail__author">
            <span className="faq-detail__author-name">{t.author}</span>
          </div>

          <div
            className="faq-detail__answer"
            dangerouslySetInnerHTML={{ __html: formatAnswer(localized.answer) }}
          />
        </motion.article>

        {relatedFaqs.length > 0 && (
          <motion.aside
            className="faq-related"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h2 className="faq-related__title">{t.relatedQuestions}</h2>
            <ul className="faq-related__list">
              {relatedFaqs.map(relatedFaq => {
                const relatedSlug = getFaqId(relatedFaq, lang)
                return (
                  <li key={relatedFaq.id}>
                    <Link
                      href={`${t.faqPath}/${relatedSlug}`}
                      className="faq-related__link"
                    >
                      <span>{relatedFaq[lang].question}</span>
                      <ChevronRight size={16} />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.aside>
        )}
      </div>
    </section>
  )
}
