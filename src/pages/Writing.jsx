import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Link as LinkIcon } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { faqs, faqCategories, generateFAQSchema, generatePersonSchema } from '../data/faq'

const content = {
  sv: {
    title: 'Frågor & Svar om AI i Marketing',
    subtitle: 'Perspektiv & Reflektioner',
    intro: 'Här samlar jag frågor jag fått från CMO:er och ledningsgrupper, tillsammans med egna reflektioner och spaningar.',
    author: 'Matilda Rydow',
    authorTitle: 'AI Advisor & Consultant',
    filterAll: 'Alla',
    searchPlaceholder: 'Sök i frågor och svar',
    searchClear: 'Rensa',
    copyLink: 'Kopiera länk',
    linkCopied: 'Länk kopierad!',
  },
  en: {
    title: 'Q&A on AI in Marketing',
    subtitle: 'Perspectives & Reflections',
    intro: 'Here I collect questions I get from CMOs and leadership teams, along with my own reflections and observations.',
    author: 'Matilda Rydow',
    authorTitle: 'AI Advisor & Consultant',
    filterAll: 'All',
    searchPlaceholder: 'Search questions and answers',
    searchClear: 'Clear',
    copyLink: 'Copy link',
    linkCopied: 'Link copied!',
  },
}

function FAQItem({ faq, lang, isOpen, onToggle, index }) {
  const localized = faq[lang]
  const [copied, setCopied] = useState(false)

  const copyLink = (e) => {
    e.stopPropagation()
    const url = `${window.location.origin}/fragor#${faq.id}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.article
      id={faq.id}
      className="faq-item"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        className={`faq-item__question ${isOpen ? 'faq-item__question--open' : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <h2 itemProp="name">{localized.question}</h2>
        <div className="faq-item__actions">
          <span
            className="faq-item__copy"
            onClick={copyLink}
            title={copied ? content[lang].linkCopied : content[lang].copyLink}
          >
            <LinkIcon size={14} />
          </span>
          <ChevronDown
            size={20}
            className={`faq-item__icon ${isOpen ? 'faq-item__icon--open' : ''}`}
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${faq.id}`}
            className="faq-item__answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div className="faq-item__tags">
              {faq.categories.map(catId => {
                const cat = faqCategories.find(c => c.id === catId)
                return cat ? (
                  <span key={catId} className="faq-tag">{cat[lang].title}</span>
                ) : null
              })}
            </div>
            <div
              className="faq-item__content"
              itemProp="text"
              dangerouslySetInnerHTML={{
                __html: formatAnswer(localized.answer)
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

function formatAnswer(text) {
  return text
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return `<h3>${paragraph.slice(2, -2)}</h3>`
      }

      let formatted = paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')

      if (formatted.startsWith('- ')) {
        const items = formatted.split('\n').map(item =>
          `<li>${item.replace(/^- /, '')}</li>`
        ).join('')
        return `<ul>${items}</ul>`
      }

      if (/^\d+\.\s/.test(formatted)) {
        return `<p class="faq-numbered">${formatted}</p>`
      }

      return `<p>${formatted}</p>`
    })
    .join('')
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export default function Writing() {
  const { lang } = useLanguage()
  const t = content[lang]
  const location = useLocation()
  const [openItems, setOpenItems] = useState(new Set())
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Handle anchor links - open the FAQ item if there's a hash in the URL
  useEffect(() => {
    const hash = location.hash.slice(1) // Remove the #
    if (hash) {
      const faq = faqs.find(f => f.id === hash)
      if (faq) {
        setOpenItems(new Set([hash]))
        // Scroll to the element after a short delay to let it render
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }
  }, [location.hash])

  // Inject JSON-LD schema on mount
  useEffect(() => {
    const faqSchema = document.createElement('script')
    faqSchema.type = 'application/ld+json'
    faqSchema.id = 'faq-schema'
    faqSchema.textContent = JSON.stringify(generateFAQSchema(faqs, lang))

    const personSchema = document.createElement('script')
    personSchema.type = 'application/ld+json'
    personSchema.id = 'person-schema'
    personSchema.textContent = JSON.stringify(generatePersonSchema())

    document.getElementById('faq-schema')?.remove()
    document.getElementById('person-schema')?.remove()
    document.head.appendChild(faqSchema)
    document.head.appendChild(personSchema)

    return () => {
      document.getElementById('faq-schema')?.remove()
      document.getElementById('person-schema')?.remove()
    }
  }, [lang])

  const toggleItem = (id) => {
    setOpenItems(prev => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
    // Update URL hash when opening
    if (!openItems.has(id)) {
      window.history.replaceState(null, '', `/fragor#${id}`)
    }
  }

  const filteredFaqs = faqs
    .filter(faq => activeCategory === 'all' || faq.categories.includes(activeCategory))
    .filter(faq => {
      if (!searchQuery.trim()) return true
      const categoryLabels = faq.categories
        .map(catId => faqCategories.find(c => c.id === catId))
        .filter(Boolean)
        .map(cat => cat[lang].title)
        .join(' ')
      const searchable = `${faq[lang].question} ${faq[lang].answer} ${categoryLabels}`
      return normalizeText(searchable).includes(normalizeText(searchQuery))
    })

  return (
    <section
      className="section"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container container--prose">
        <motion.header
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="faq-header__label">{t.subtitle}</div>
          <h1 className="faq-header__title">{t.title}</h1>
          <p className="faq-header__intro">{t.intro}</p>

          <div className="faq-author" itemScope itemType="https://schema.org/Person">
            <div className="faq-author__info">
              <span className="faq-author__name" itemProp="name">{t.author}</span>
              <span className="faq-author__title" itemProp="jobTitle">{t.authorTitle}</span>
            </div>
          </div>
        </motion.header>

        <motion.div
          className="faq-search"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <label className="sr-only" htmlFor="faq-search">
            {t.searchPlaceholder}
          </label>
          <input
            id="faq-search"
            className="faq-search__input"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
          />
          {searchQuery && (
            <button
              className="faq-search__clear"
              type="button"
              onClick={() => setSearchQuery('')}
            >
              {t.searchClear}
            </button>
          )}
        </motion.div>

        <motion.nav
          className="faq-filters"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button
            className={`faq-filter ${activeCategory === 'all' ? 'faq-filter--active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            {t.filterAll}
          </button>
          {faqCategories.map(cat => (
            <button
              key={cat.id}
              className={`faq-filter ${activeCategory === cat.id ? 'faq-filter--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat[lang].title}
            </button>
          ))}
        </motion.nav>

        <div className="faq-list">
          {filteredFaqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              lang={lang}
              isOpen={openItems.has(faq.id)}
              onToggle={() => toggleItem(faq.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
