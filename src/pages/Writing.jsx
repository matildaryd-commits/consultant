import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Link as LinkIcon } from 'lucide-react'
import { useLanguage, getLocalizedPath } from '../hooks/useLanguage'
import { faqs, faqCategories, generateFAQSchema, generatePersonSchema } from '../data/faq'
import { applyPageMeta, setHreflangLinks } from '../utils/seo'

const content = {
  sv: {
    title: 'Frågor & Svar om AI i Marketing',
    subtitle: 'Perspektiv & Reflektioner',
    introFull: `Det är en spännande tid just nu, för de flesta bolag och funktioner. Men marketing, CRM och ecom/web har en alldeles speciell utmaning framför sig.

Jag har de senaste tio åren varit väldigt insyltad i allt som har med digital marknadsföring att göra. Framförallt den nördiga delen: hur bolag skaffar sig konkurrensfördel genom smart användning av sin data. Det har varit en lång resa för många, och arbetet pågår fortfarande i högsta grad.

Nu kommer AI in och gör allt… både enklare och svårare.

Från ena hållet skapar AI helt nya möjligheter i det dagliga arbetet: mer automation, snabbare produktion, nya sätt att analysera, och på sikt AI-agenter som kan ta över delar av jobbet. Men den utvecklingen måste någonstans leva sida vid sida med allt det andra som redan pågår: dataprojekt, nya CDP/warehouse-satsningar, mätförbättringar, attribution/MMM, nya processer, nya verktyg, nya byråupplägg. AI är inte en "reset" – den blir ett nytt lager som behöver passa in i verkligheten.

Från andra hållet kommer AI-sök, och inte minst Agentic commerce. Det är ett fenomen som inte bara påverkar kanalmix eller kreativa formats, utan som kan förändra hur bolag opererar i grunden – inom product, revenue och marketing. När discovery, research och ibland köp flyttar till nya gränssnitt och nya beslutsflöden skapas så påverkar det också en marknadsavdelnings operating model.

Det är därför CMO-rollen blir så central i det här skiftet. Förändringen drivs från två håll samtidigt: internt (hur AI förändrar arbetssätt, team, kostnadsstruktur och kvalitet) och externt (hur AI-sök och agentic commerce flyttar kundbeteenden och spelregler). Och "på det" kommer allt det vanliga: transformationsprojekt som redan rullar, pressade budgetar, ökade krav på effekt, och en organisation som ofta är mer siloifierad än man vill erkänna.

Det är i den verkligheten jag vill hjälpa och stötta. Jag märker att många brottas med samma mönster: enorm potential, men begränsad överblick och en vardag som snabbt blir mer komplex när nya verktyg, nya agenter och nya arbetssätt ska in.

Här delar jag löpande frågor & svar, reflektioner och spaningar på ämnet – så transparent jag kan. Det här ämnet är för viktigt, för att bara stanna i stängda rum.`,
    readMore: 'Läs mer',
    readLess: 'Visa mindre',
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
    introFull: `It’s an exciting time right now for most companies and functions. But marketing, CRM, and e‑com/web have a very particular challenge ahead.

I’ve spent the last ten years deeply involved in digital marketing, especially the nerdy part: how companies build competitive advantage through smart use of data. It has been a long journey for many, and the work is still very much ongoing.

Now AI enters and makes everything… both easier and harder.

From one direction, AI creates entirely new possibilities in daily work: more automation, faster production, new ways to analyse, and eventually AI agents that can take over parts of the job. But that development has to live side by side with everything else already in motion: data projects, new CDP/warehouse initiatives, measurement improvements, attribution/MMM, new processes, new tools, new agency setups. AI is not a “reset” — it’s a new layer that has to fit into reality.

From the other direction comes AI search, and not least Agentic commerce. It’s a phenomenon that doesn’t just affect channel mix or creative formats, but can change how companies operate at the core — across product, revenue, and marketing. When discovery, research, and sometimes purchase move to new interfaces and new decision flows, it also affects the marketing operating model.

That’s why the CMO role becomes so central in this shift. The change is driven from two directions at once: internally (how AI changes ways of working, teams, cost structure, and quality) and externally (how AI search and agentic commerce move customer behavior and the rules of the game). And on top of that comes all the usual: transformation projects already in motion, pressured budgets, higher demands for impact, and an organisation that is often more siloed than you want to admit.

That’s the reality I want to help with. I see many wrestling with the same pattern: enormous potential, but limited overview — and a daily reality that quickly gets more complex when new tools, new agents, and new ways of working need to fit in.

Here I share ongoing questions & answers, reflections, and observations on the topic — as transparently as I can. This is too important to stay behind closed doors.`,
    readMore: 'Read more',
    readLess: 'Show less',
    author: 'Matilda Rydow',
    authorTitle: 'AI Advisor & Consultant',
    filterAll: 'All',
    searchPlaceholder: 'Search questions and answers',
    searchClear: 'Clear',
    copyLink: 'Copy link',
    linkCopied: 'Link copied!',
  },
}

function FAQItem({ faq, lang, isOpen, onToggle, index, searchQuery }) {
  const localized = faq[lang]
  const [copied, setCopied] = useState(false)

  const copyLink = (e) => {
    e.stopPropagation()
    const url = `${window.location.origin}${getLocalizedPath(lang, 'fragor')}#${faq.id}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.article
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
        <h2 id={faq.id} itemProp="name">{localized.question}</h2>
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
                __html: formatAnswer(localized.answer, searchQuery)
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

function highlightText(text, query) {
  if (!query || !query.trim()) return text
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`(${escaped})`, 'gi')
  return text.replace(regex, '<mark>$1</mark>')
}

function formatAnswer(text, searchQuery = '') {
  return text
    .split(/\n\s*\n/)
    .map(paragraph => {
      const trimmed = paragraph.replace(/^[\s\u00A0]+/u, '')
      const listItemRegex = /^\s*-\s+/u

      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        const content = highlightText(trimmed.slice(2, -2), searchQuery)
        return `<h3>${content}</h3>`
      }

      const rawLines = paragraph.split('\n')
      const listLines = rawLines.filter(line => listItemRegex.test(line))
      const hasInlineList = listLines.length > 0

      let formatted = paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      formatted = highlightText(formatted, searchQuery)

      if (listItemRegex.test(trimmed)) {
        const items = rawLines.map(item => {
          let itemText = item.replace(listItemRegex, '')
          itemText = itemText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
          itemText = highlightText(itemText, searchQuery)
          return `<li>${itemText}</li>`
        }).join('')
        return `<ul>${items}</ul>`
      }

      if (hasInlineList) {
        const introLines = rawLines.filter(line => !listItemRegex.test(line))
        const introText = introLines.join(' ').replace(/\s+/g, ' ').trim()
        const introFormatted = introText
          ? `<p>${highlightText(introText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>'), searchQuery)}</p>`
          : ''
        const items = listLines.map(item => {
          let itemText = item.replace(listItemRegex, '')
          itemText = itemText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
          itemText = highlightText(itemText, searchQuery)
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
  const [introExpanded, setIntroExpanded] = useState(false)

  useEffect(() => {
    const origin = 'https://matildarydow.com'
    const basePath = lang === 'sv' ? '/sv' : '/en'
    const description = lang === 'sv'
      ? 'Expertguide om AI i marknadsföring: organisation, AI-agenter, agentic commerce, byråsamarbeten och mätning. Frågor & svar från Matilda Rydow.'
      : 'Expert guide on AI in marketing: organization, AI agents, agentic commerce, agency collaboration, and measurement. Q&A from Matilda Rydow.'

    document.documentElement.lang = lang
    applyPageMeta({
      title: lang === 'sv' ? 'Guide: AI i Marknadsföring – Frågor & Svar | Matilda Rydow' : 'Guide: AI in Marketing – Q&A | Matilda Rydow',
      description,
      ogTitle: lang === 'sv' ? 'Guide: AI i Marknadsföring' : 'Guide: AI in Marketing',
      ogDescription: description,
      ogImage: `${origin}/matilda-portrait.jpg`,
      locale: lang === 'sv' ? 'sv_SE' : 'en_US',
      canonical: `${origin}${getLocalizedPath(lang, 'fragor')}`,
    })

    setHreflangLinks([
      { lang: 'sv', href: `${origin}/sv/fragor` },
      { lang: 'en', href: `${origin}/en/faq` },
      { lang: 'x-default', href: `${origin}/sv/fragor` },
    ])
  }, [lang])

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

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

  // Inject JSON-LD schemas on mount
  useEffect(() => {
    const baseUrl = 'https://matildarydow.com'

    // FAQ Schema
    const faqSchema = document.createElement('script')
    faqSchema.type = 'application/ld+json'
    faqSchema.id = 'faq-schema'
    faqSchema.textContent = JSON.stringify(generateFAQSchema(faqs, lang))

    // Person Schema
    const personSchema = document.createElement('script')
    personSchema.type = 'application/ld+json'
    personSchema.id = 'person-schema'
    personSchema.textContent = JSON.stringify(generatePersonSchema())

    // Breadcrumb Schema for navigation
    const breadcrumbSchema = document.createElement('script')
    breadcrumbSchema.type = 'application/ld+json'
    breadcrumbSchema.id = 'breadcrumb-schema'
    breadcrumbSchema.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: lang === 'sv' ? 'Hem' : 'Home',
          item: `${baseUrl}/${lang}`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: lang === 'sv' ? 'Frågor & Svar' : 'Q&A',
          item: `${baseUrl}/${lang}/fragor`,
        },
      ],
    })

    // Remove old schemas and add new ones
    document.getElementById('faq-schema')?.remove()
    document.getElementById('person-schema')?.remove()
    document.getElementById('breadcrumb-schema')?.remove()
    document.head.appendChild(faqSchema)
    document.head.appendChild(personSchema)
    document.head.appendChild(breadcrumbSchema)

    return () => {
      document.getElementById('faq-schema')?.remove()
      document.getElementById('person-schema')?.remove()
      document.getElementById('breadcrumb-schema')?.remove()
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
      window.history.replaceState(null, '', `${getLocalizedPath(lang, 'fragor')}#${id}`)
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

          <div className="faq-intro">
            <div className={`faq-intro__text ${!introExpanded ? 'faq-intro__text--collapsed' : ''}`}>
              {t.introFull.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <button
              className="faq-intro__toggle"
              onClick={() => setIntroExpanded(!introExpanded)}
            >
              {introExpanded ? t.readLess : t.readMore}
              <ChevronDown
                size={14}
                className={`faq-intro__icon ${introExpanded ? 'faq-intro__icon--open' : ''}`}
              />
            </button>
          </div>

          <div className="faq-author" itemScope itemType="https://schema.org/Person">
            <span className="faq-author__name" itemProp="name">{t.author}</span>
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
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
