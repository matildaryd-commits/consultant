import FAQClient from '../../../src/components/FAQClient'
import { faqs, faqCategories, generateFAQSchema, generatePersonSchema, getFaqId } from '../../../src/data/faq'

export const metadata = {
  title: 'Guide: AI in Marketing – Q&A | Matilda Rydow',
  description: 'Expert guide on AI in marketing: organization, AI agents, agentic commerce, agency collaboration, and measurement. Q&A from Matilda Rydow.',
  keywords: 'AI marketing, agentic commerce, marketing operating model, CMO, martech, AI agents, attribution, MMM',
  authors: [{ name: 'Matilda Rydow' }],
  openGraph: {
    title: 'Guide: AI in Marketing',
    description: 'Expert guide on AI in marketing: organization, AI agents, agentic commerce, agency collaboration, and measurement.',
    url: 'https://matildarydow.com/en/faq',
    siteName: 'Matilda Rydow',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://matildarydow.com/matilda-portrait.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide: AI in Marketing | Matilda Rydow',
    description: 'Expert guide on AI in marketing: organization, AI agents, agentic commerce, agency collaboration.',
    images: ['https://matildarydow.com/matilda-portrait.jpg'],
  },
  alternates: {
    canonical: 'https://matildarydow.com/en/faq',
    languages: {
      'sv': 'https://matildarydow.com/sv/fragor',
      'en': 'https://matildarydow.com/en/faq',
      'x-default': 'https://matildarydow.com/sv/fragor',
    },
  },
}

const introText = `It's an exciting time right now for most companies and functions. But marketing, CRM, and e-com/web have a very particular challenge ahead.

I've spent the last ten years deeply involved in digital marketing, especially the nerdy part: how companies build competitive advantage through smart use of data. It has been a long journey for many, and the work is still very much ongoing.

Now AI enters and makes everything… both easier and harder.

From one direction, AI creates entirely new possibilities in daily work: more automation, faster production, new ways to analyse, and eventually AI agents that can take over parts of the job. But that development has to live side by side with everything else already in motion: data projects, new CDP/warehouse initiatives, measurement improvements, attribution/MMM, new processes, new tools, new agency setups. AI is not a "reset", it's a new layer that has to fit into reality.

From the other direction comes AI search, and not least Agentic commerce. It's a phenomenon that doesn't just affect channel mix or creative formats, but can change how companies operate at the core, across product, revenue, and marketing. When discovery, research, and sometimes purchase move to new interfaces and new decision flows, it also affects the marketing operating model.

That's why the CMO role becomes so central in this shift. The change is driven from two directions at once: internally (how AI changes ways of working, teams, cost structure, and quality) and externally (how AI search and agentic commerce move customer behavior and the rules of the game).

Here I share ongoing questions & answers, reflections, and observations on the topic, as transparently as I can. This is too important to stay behind closed doors.`

export default function EnFAQPage() {
  const faqSchema = generateFAQSchema(faqs, 'en')
  const personSchema = generatePersonSchema()

  return (
    <>
      {/* JSON-LD Schemas for search engines and LLMs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://matildarydow.com/en',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Q&A',
                item: 'https://matildarydow.com/en/faq',
              },
            ],
          }),
        }}
      />

      {/* Static content for SEO/LLM - ALL FAQ content is visible in HTML source */}
      {/* Note: Schema is handled via JSON-LD above, no microdata needed */}
      <article
        className="sr-only"
        aria-label="FAQ content for search engines"
      >
        <header>
          <h1>Q&A on AI in Marketing</h1>
          <p>{introText}</p>
          <p>By Matilda Rydow, AI Advisor & Consultant</p>
        </header>

        <section>
          <h2>Categories</h2>
          <ul>
            {faqCategories.map(cat => (
              <li key={cat.id}>{cat.en.title}</li>
            ))}
          </ul>
        </section>

        {/* All FAQs rendered as static HTML for LLM crawlers */}
        {faqs.map(faq => (
          <article
            key={faq.id}
            id={`static-${faq.enId || faq.id}`}
          >
            <h3 id={faq.enId || faq.id}>{faq.en.question}</h3>
            <div>
              {faq.en.answer.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph.replace(/\*\*/g, '')}</p>
              ))}
            </div>
            <footer>
              <p>Categories: {faq.categories.map(catId => {
                const cat = faqCategories.find(c => c.id === catId)
                return cat?.en.title
              }).filter(Boolean).join(', ')}</p>
            </footer>
          </article>
        ))}
      </article>

      {/* Interactive client component */}
      <FAQClient lang="en" />
    </>
  )
}
