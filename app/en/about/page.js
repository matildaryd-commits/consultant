import AboutClient from '../../../src/components/AboutClient'
import { generatePersonSchema } from '../../../src/data/faq'

export const metadata = {
  title: 'About | Matilda Rydow',
  description: 'Matilda Rydow – AI advisor specializing in martech, data/analytics, and AI agents. Former Group COO at Precis, built Alvie and Wilgot. Helping e-commerce, SaaS, and B2B.',
  authors: [{ name: 'Matilda Rydow' }],
  openGraph: {
    title: "Hi, I'm Matilda",
    description: 'Matilda Rydow – AI advisor specializing in martech, data/analytics, and AI agents. Former Group COO at Precis.',
    url: 'https://matildarydow.com/en/about',
    siteName: 'Matilda Rydow',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://matildarydow.com/matilda-portrait.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Matilda Rydow',
    description: 'AI advisor specializing in martech, data/analytics, and AI agents.',
    images: ['https://matildarydow.com/matilda-portrait.jpg'],
  },
  alternates: {
    canonical: 'https://matildarydow.com/en/about',
    languages: {
      'sv': 'https://matildarydow.com/sv/om',
      'en': 'https://matildarydow.com/en/about',
      'x-default': 'https://matildarydow.com/sv/om',
    },
  },
}

const content = {
  title: "Hi, I'm Matilda",
  subtitle: 'Advisor in martech, data/analytics, and AI, with a focus on both tech and organization.',
  intro: `I work with martech, data/analytics, and AI. I help teams build solutions and ways of working that make data and AI actually used: from measurement, data models, and architecture to product decisions and priorities, and how AI agents are embedded in flows, ownership, and tools. But tech is rarely the whole answer. I put equal weight on the organizational side: clear roles and solid decision-making, reasonable processes, and collaboration that holds up over time. When tech and organization pull in the same direction, things happen. That's where I tend to make the biggest difference.

Beyond helping companies with martech, data/analytics, and AI, I'm an angel investor. Previously I was Group COO and CEO at Precis, Martech Lead at Ving/Thomas Cook, and built Alvie (attribution/marketing intelligence) and Wilgot (agentic commerce/GEO).`,
  interests: [
    'How marketing departments should organize for AI',
    'Coordination of AI agents',
    'Agency collaboration in the AI era',
    'Agentic commerce and its impact on marketing',
  ],
  expertise: ['E-commerce', 'SaaS', 'B2B', 'App businesses'],
}

export default function EnAboutPage() {
  const personSchema = generatePersonSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Static content for SEO */}
      <article className="sr-only" aria-label="About page content for search engines">
        <h1>{content.title}</h1>
        <p>{content.subtitle}</p>
        <p>{content.intro}</p>
        <section>
          <h2>What I think about</h2>
          <ul>
            {content.interests.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Company types</h2>
          <ul>
            {content.expertise.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </article>

      <AboutClient lang="en" />
    </>
  )
}
