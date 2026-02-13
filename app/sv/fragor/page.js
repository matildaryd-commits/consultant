import FAQClient from '../../../src/components/FAQClient'
import { faqs, faqCategories, generateFAQSchema, generatePersonSchema, getFaqId } from '../../../src/data/faq'

export const metadata = {
  title: 'Guide: AI i Marknadsföring – Frågor & Svar | Matilda Rydow',
  description: 'Expertguide om AI i marknadsföring: organisation, AI-agenter, agentic commerce, byråsamarbeten och mätning. Frågor & svar från Matilda Rydow.',
  keywords: 'AI marknadsföring, agentic commerce, marketing operating model, CMO, martech, AI-agenter, attribution, MMM',
  authors: [{ name: 'Matilda Rydow' }],
  openGraph: {
    title: 'Guide: AI i Marknadsföring',
    description: 'Expertguide om AI i marknadsföring: organisation, AI-agenter, agentic commerce, byråsamarbeten och mätning.',
    url: 'https://matildarydow.com/sv/fragor',
    siteName: 'Matilda Rydow',
    locale: 'sv_SE',
    type: 'website',
    images: [{ url: 'https://matildarydow.com/matilda-portrait.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guide: AI i Marknadsföring | Matilda Rydow',
    description: 'Expertguide om AI i marknadsföring: organisation, AI-agenter, agentic commerce, byråsamarbeten.',
    images: ['https://matildarydow.com/matilda-portrait.jpg'],
  },
  alternates: {
    canonical: 'https://matildarydow.com/sv/fragor',
    languages: {
      'sv': 'https://matildarydow.com/sv/fragor',
      'en': 'https://matildarydow.com/en/faq',
      'x-default': 'https://matildarydow.com/sv/fragor',
    },
  },
}

const introText = `Det är en spännande tid just nu, för de flesta bolag och funktioner. Men marketing, CRM och ecom/web har en alldeles speciell utmaning framför sig.

Jag har de senaste tio åren varit väldigt insyltad i allt som har med digital marknadsföring att göra. Framförallt den nördiga delen: hur bolag skaffar sig konkurrensfördel genom smart användning av sin data. Det har varit en lång resa för många, och arbetet pågår fortfarande i högsta grad.

Nu kommer AI in och gör allt… både enklare och svårare.

Från ena hållet skapar AI helt nya möjligheter i det dagliga arbetet: mer automation, snabbare produktion, nya sätt att analysera, och på sikt AI-agenter som kan ta över delar av jobbet. Men den utvecklingen måste någonstans leva sida vid sida med allt det andra som redan pågår: dataprojekt, nya CDP/warehouse-satsningar, mätförbättringar, attribution/MMM, nya processer, nya verktyg, nya byråupplägg. AI är inte en "reset" – den blir ett nytt lager som behöver passa in i verkligheten.

Från andra hållet kommer AI-sök, och inte minst Agentic commerce. Det är ett fenomen som inte bara påverkar kanalmix eller kreativa formats, utan som kan förändra hur bolag opererar i grunden – inom product, revenue och marketing. När discovery, research och ibland köp flyttar till nya gränssnitt och nya beslutsflöden skapas så påverkar det också en marknadsavdelnings operating model.

Det är därför CMO-rollen blir så central i det här skiftet. Förändringen drivs från två håll samtidigt: internt (hur AI förändrar arbetssätt, team, kostnadsstruktur och kvalitet) och externt (hur AI-sök och agentic commerce flyttar kundbeteenden och spelregler).

Här delar jag löpande frågor & svar, reflektioner och spaningar på ämnet – så transparent jag kan. Det här ämnet är för viktigt, för att bara stanna i stängda rum.`

export default function SvFAQPage() {
  const faqSchema = generateFAQSchema(faqs, 'sv')
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
                name: 'Hem',
                item: 'https://matildarydow.com/sv',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Frågor & Svar',
                item: 'https://matildarydow.com/sv/fragor',
              },
            ],
          }),
        }}
      />

      {/* Static content for SEO/LLM - ALL FAQ content is visible in HTML source */}
      <article
        itemScope
        itemType="https://schema.org/FAQPage"
        className="sr-only"
        aria-label="FAQ content for search engines"
      >
        <header>
          <h1>Frågor & Svar om AI i Marketing</h1>
          <p>{introText}</p>
          <p>Av Matilda Rydow, AI Advisor & Consultant</p>
        </header>

        <section>
          <h2>Kategorier</h2>
          <ul>
            {faqCategories.map(cat => (
              <li key={cat.id}>{cat.sv.title}</li>
            ))}
          </ul>
        </section>

        {/* All FAQs rendered as static HTML for LLM crawlers */}
        {faqs.map(faq => (
          <article
            key={faq.id}
            id={`static-${faq.id}`}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <h2 id={faq.id} itemProp="name">{faq.sv.question}</h2>
            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div itemProp="text">
                {faq.sv.answer.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph.replace(/\*\*/g, '')}</p>
                ))}
              </div>
            </div>
            <footer>
              <p>Kategorier: {faq.categories.map(catId => {
                const cat = faqCategories.find(c => c.id === catId)
                return cat?.sv.title
              }).filter(Boolean).join(', ')}</p>
            </footer>
          </article>
        ))}
      </article>

      {/* Interactive client component */}
      <FAQClient lang="sv" />
    </>
  )
}
