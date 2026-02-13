import AboutClient from '../../../src/components/AboutClient'
import { generatePersonSchema } from '../../../src/data/faq'

export const metadata = {
  title: 'Om mig | Matilda Rydow',
  description: 'Matilda Rydow – AI-rådgivare inom martech, data/analytics och AI-agenter. Fd Group COO på Precis, byggde Alvie och Wilgot. Hjälper e-handel, SaaS och B2B.',
  authors: [{ name: 'Matilda Rydow' }],
  openGraph: {
    title: 'Hej, jag heter Matilda',
    description: 'Matilda Rydow – AI-rådgivare inom martech, data/analytics och AI-agenter. Fd Group COO på Precis, byggde Alvie och Wilgot.',
    url: 'https://matildarydow.com/sv/om',
    siteName: 'Matilda Rydow',
    locale: 'sv_SE',
    type: 'website',
    images: [{ url: 'https://matildarydow.com/matilda-portrait.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om mig | Matilda Rydow',
    description: 'AI-rådgivare inom martech, data/analytics och AI-agenter.',
    images: ['https://matildarydow.com/matilda-portrait.jpg'],
  },
  alternates: {
    canonical: 'https://matildarydow.com/sv/om',
    languages: {
      'sv': 'https://matildarydow.com/sv/om',
      'en': 'https://matildarydow.com/en/about',
      'x-default': 'https://matildarydow.com/sv/om',
    },
  },
}

const content = {
  title: 'Hej, jag heter Matilda',
  subtitle: 'Rådgivare inom martech, data/analytics och AI – med fokus på både tech och organisation.',
  intro: `Jag jobbar med martech, data/analytics och AI. Jag hjälper team att bygga lösningar och arbetssätt som gör att data och AI faktiskt används: från mätning, datamodeller och arkitektur till produktbeslut, prioriteringar och hur AI-agenter vävs in i flöden, ansvar och verktyg. Men tech är sällan hela svaret. Jag lägger lika mycket vikt vid det organisatoriska: tydliga roller, bra beslutsfattande, rimliga processer och samarbete som håller över tid. När tech och organisation drar åt samma håll händer det saker – och det är där jag brukar göra störst skillnad.

Utöver att hjälpa bolag med martech, data/analytics och AI är jag ängelinvesterare. Tidigare har jag varit Group COO och VD på Precis, Martech Lead på Ving/Thomas Cook, och byggt Alvie (attribution/marketing intelligence) samt Wilgot (agentic commerce/GEO).`,
  interests: [
    'Hur marknadsavdelningar ska organiseras för AI',
    'Koordination av AI-agenter',
    'Byråsamarbete i AI-eran',
    'Agentic commerce och dess påverkan på marketing',
  ],
  expertise: ['E-handlare', 'SaaS', 'B2B', 'App-bolag'],
}

export default function SvAboutPage() {
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
          <h2>Vad jag tänker på</h2>
          <ul>
            {content.interests.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Bolag jag har jobbat med</h2>
          <ul>
            {content.expertise.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      </article>

      <AboutClient lang="sv" />
    </>
  )
}
