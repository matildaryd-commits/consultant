import HomeClient from '../../src/components/HomeClient'
import { faqs, generatePersonSchema } from '../../src/data/faq'

export const metadata = {
  title: 'AI-konsult för Marknadsföring & Data | Matilda Rydow',
  description: 'AI-konsult som hjälper CMO:er och marknadsavdelningar med martech, data/analytics och AI-agenter. Fd Group COO på Precis. Boka rådgivning.',
  keywords: 'AI rådgivning, CMO, ledningsgrupp, marketing, data, operating model, martech, agentic commerce, AI agenter',
  authors: [{ name: 'Matilda Rydow' }],
  openGraph: {
    title: 'AI-konsult för Marknadsföring & Data',
    description: 'AI-konsult som hjälper CMO:er och marknadsavdelningar med martech, data/analytics och AI-agenter. Fd Group COO på Precis.',
    url: 'https://matildarydow.com/sv/',
    siteName: 'Matilda Rydow',
    locale: 'sv_SE',
    type: 'website',
    images: [{ url: 'https://matildarydow.com/matilda-portrait.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-konsult för Marknadsföring & Data | Matilda Rydow',
    description: 'AI-konsult som hjälper CMO:er och marknadsavdelningar med martech, data/analytics och AI-agenter.',
    images: ['https://matildarydow.com/matilda-portrait.jpg'],
  },
  alternates: {
    canonical: 'https://matildarydow.com/sv/',
    languages: {
      'sv': 'https://matildarydow.com/sv/',
      'en': 'https://matildarydow.com/en/',
      'x-default': 'https://matildarydow.com/sv/',
    },
  },
}

// Content visible to crawlers and LLMs in static HTML
const content = {
  greeting: 'Hej, jag heter Matilda.',
  title: 'Jag hjälper CMO:er och ledningsgrupper att navigera AI.',
  bio: `Min expertis är martech, data & analytics och AI. Jag hjälper in-house team bygga en framtidssäkrad operational model, där teamet jobbar sida vid sida med AI-agenter, byråer och martech-stacken. Jag har varit Group COO och VD på Precis, Martech Lead på Ving/Thomas Cook, och byggt Alvie (attribution/marketing intelligence) samt Wilgot (agentic commerce/GEO).`,
  status: 'Tillgänglig för strategiska samtal',
  faqTitle: 'Vanliga frågor',
}

// Featured FAQ questions for static rendering
const featuredFaqIds = [
  'organisera-marknadsavdelning',
  'agentic-commerce-vad-ar',
  'byra-samarbete-minska-kommunikation',
]

export default function SvHomePage() {
  const featuredFaqs = faqs.filter(faq => featuredFaqIds.includes(faq.id))
  const personSchema = generatePersonSchema()

  return (
    <>
      {/* Static SEO content visible to crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Matilda Rydow',
            alternateName: 'Matilda Rydow AI Advisor',
            url: 'https://matildarydow.com',
            description: 'AI-rådgivare för CMO:er och ledningsgrupper. Expert inom martech, data & analytics och AI-drivna operating models.',
            inLanguage: ['sv-SE', 'en-US'],
            author: {
              '@type': 'Person',
              name: 'Matilda Rydow',
              jobTitle: 'AI Advisor & Consultant',
              url: 'https://matildarydow.com',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Static content for SEO - visible in HTML source */}
      <article itemScope itemType="https://schema.org/WebPage" style={{ display: 'none' }} aria-hidden="true">
        <h1>{content.title}</h1>
        <p>{content.bio}</p>
        <section>
          <h2>{content.faqTitle}</h2>
          {featuredFaqs.map(faq => (
            <article key={faq.id}>
              <h3>{faq.sv.question}</h3>
              <p>{faq.sv.answer.slice(0, 500)}...</p>
            </article>
          ))}
        </section>
      </article>

      {/* Interactive client component */}
      <HomeClient lang="sv" />
    </>
  )
}
