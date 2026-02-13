import HomeClient from '../../src/components/HomeClient'
import { faqs, generatePersonSchema } from '../../src/data/faq'

export const metadata = {
  title: 'AI Consultant for Marketing & Data | Matilda Rydow',
  description: 'AI consultant helping CMOs and marketing teams with martech, data/analytics, and AI agents. Former Group COO at Precis. Book a consultation.',
  keywords: 'AI consulting, CMO, leadership, marketing, data, operating model, martech, agentic commerce, AI agents',
  authors: [{ name: 'Matilda Rydow' }],
  openGraph: {
    title: 'AI Consultant for Marketing & Data',
    description: 'AI consultant helping CMOs and marketing teams with martech, data/analytics, and AI agents. Former Group COO at Precis.',
    url: 'https://matildarydow.com/en/',
    siteName: 'Matilda Rydow',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://matildarydow.com/matilda-portrait.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consultant for Marketing & Data | Matilda Rydow',
    description: 'AI consultant helping CMOs and marketing teams with martech, data/analytics, and AI agents.',
    images: ['https://matildarydow.com/matilda-portrait.jpg'],
  },
  alternates: {
    canonical: 'https://matildarydow.com/en/',
    languages: {
      'sv': 'https://matildarydow.com/sv/',
      'en': 'https://matildarydow.com/en/',
      'x-default': 'https://matildarydow.com/sv/',
    },
  },
}

// Content visible to crawlers and LLMs in static HTML
const content = {
  greeting: "Hi, I'm Matilda.",
  title: 'I help CMOs and leadership teams navigate AI.',
  bio: `My expertise is martech, data & analytics, and AI. I help in-house teams build a future-proof operational model, where the team works side by side with AI agents, agencies, and the martech stack. I was Group COO and CEO at Precis, Martech Lead at Ving/Thomas Cook, and I built Alvie (attribution/marketing intelligence) and Wilgot (agentic commerce/GEO).`,
  status: 'Available for strategic conversations',
  faqTitle: 'Common questions',
}

// Featured FAQ questions for static rendering
const featuredFaqIds = [
  'organisera-marknadsavdelning',
  'agentic-commerce-vad-ar',
  'byra-samarbete-minska-kommunikation',
]

export default function EnHomePage() {
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
            description: 'AI advisor for CMOs and leadership teams. Expert in martech, data & analytics, and AI-driven operating models.',
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
              <h3>{faq.en.question}</h3>
              <p>{faq.en.answer.slice(0, 500)}...</p>
            </article>
          ))}
        </section>
      </article>

      {/* Interactive client component */}
      <HomeClient lang="en" />
    </>
  )
}
