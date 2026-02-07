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
    introFull: `Det är en extremt intressant tid just nu.

Jag har de senaste tio åren varit ganska insyltad i utvecklingen av digital marknadsföring – och framförallt i den lite nördiga delen: hur bolag blir mer datadrivna, hur man bygger bättre mätning, hur man faktiskt använder sin data smartare (och inte bara samlar den). Det har varit en lång process. Många har kommit långt, men ännu fler är långt ifrån "klara". Transformationen pågår fortfarande, och i många organisationer är den dessutom ojämn: vissa delar är moderna, andra kör på gamla arbetssätt och gamla sanningar.

Och nu kommer AI in och gör allt… både enklare och svårare.

Från ena hållet skapar AI helt nya möjligheter i det dagliga arbetet: mer automation, snabbare produktion, nya sätt att analysera, och på sikt fler AI-agenter som kan ta delar av jobbet. Men den utvecklingen måste någonstans leva sida vid sida med allt det andra som redan pågår: dataprojekt, nya CDP/warehouse-satsningar, mätförbättringar, attribution/MMM, nya processer, nya verktyg, nya byråupplägg. AI är inte en "reset" – den blir ett nytt lager som behöver passa in i verkligheten.

Från andra hållet kommer AI-sök, och inte minst agentic commerce. Det är fenomen som inte bara påverkar kanalmix eller kreativa formats, utan som kan förändra hur bolag opererar i grunden – inom product, revenue och marketing. När discovery, research och ibland köp flyttar till nya gränssnitt och nya beslutsflöden förändras både tratten, mätningen och vad som faktiskt skapar preferens.

Det är därför CMO-rollen blir så central i det här skiftet. För förändringen drivs från två håll samtidigt: internt (hur AI förändrar arbetssätt, team, kostnadsstruktur och kvalitet) och externt (hur AI-sök och agentic commerce flyttar kundbeteenden och spelregler). Och "på det" kommer allt det vanliga: transformationsprojekt som redan rullar, pressade budgetar, ökade krav på effekt, och en organisation som ofta är mer siloifierad än man vill erkänna.

Det är i den verkligheten jag vill hjälpa och stötta. Jag får mycket frågor från CMO:er och ledningsgrupper, och jag märker att många brottas med samma mönster: enorm potential, men begränsad överblick och en vardag som snabbt blir mer komplex när nya verktyg, nya agenter och nya arbetssätt ska in.

Så jag samlar mina frågor, svar, reflektioner och spaningar här – så transparent jag kan – för att det här området är för viktigt (och för intressant) för att bara stanna i stängda rum.`,
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
    introFull: `It's an extremely interesting time right now.

I've spent the last ten years fairly immersed in the development of digital marketing – especially the nerdy part: how companies become more data-driven, how to build better measurement, how to actually use data smarter (and not just collect it). It's been a long process. Many have come far, but even more are far from "done". The transformation is still ongoing, and in many organisations it's uneven: some parts are modern, others run on old workflows and old truths.

And now AI comes in and makes everything… both easier and harder.

From one direction, AI creates entirely new possibilities in daily work: more automation, faster production, new ways to analyse, and eventually more AI agents that can take parts of the job. But that development must somehow coexist with everything else already happening: data projects, new CDP/warehouse initiatives, measurement improvements, attribution/MMM, new processes, new tools, new agency setups. AI isn't a "reset" – it becomes a new layer that needs to fit into reality.

From the other direction comes AI search, and not least agentic commerce. These are phenomena that don't just affect channel mix or creative formats, but can fundamentally change how companies operate – in product, revenue, and marketing. When discovery, research, and sometimes purchases move to new interfaces and new decision flows, both the funnel, the measurement, and what actually creates preference change.

That's why the CMO role becomes so central in this shift. Because change is driven from two directions simultaneously: internally (how AI changes workflows, teams, cost structure, and quality) and externally (how AI search and agentic commerce shift customer behaviors and rules of the game). And "on top of that" comes all the usual: transformation projects already rolling, pressed budgets, increased demands for results, and an organisation that's often more siloed than anyone wants to admit.

That's the reality I want to help with. I get many questions from CMOs and leadership teams, and I notice that many struggle with the same pattern: enormous potential, but limited overview and a daily life that quickly becomes more complex when new tools, new agents, and new workflows need to fit in.

So I'm collecting my questions, answers, reflections, and observations here – as transparently as I can – because this area is too important (and too interesting) to stay behind closed doors.`,
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
    .split('\n\n')
    .map(paragraph => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        const content = highlightText(paragraph.slice(2, -2), searchQuery)
        return `<h3>${content}</h3>`
      }

      let formatted = paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      formatted = highlightText(formatted, searchQuery)

      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n').map(item => {
          let itemText = item.replace(/^- /, '')
          itemText = itemText.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
          itemText = highlightText(itemText, searchQuery)
          return `<li>${itemText}</li>`
        }).join('')
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
  const [introExpanded, setIntroExpanded] = useState(false)

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
