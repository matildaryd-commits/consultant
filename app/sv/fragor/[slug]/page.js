import { notFound } from 'next/navigation'
import FAQDetailPage from '../../../../src/components/FAQDetailPage'
import {
  faqs,
  findFaqById,
  getRelatedFaqs,
  generateFaqMetadata,
  generatePersonSchema,
  faqCategories,
} from '../../../../src/data/faq'

export async function generateStaticParams() {
  return faqs.map(faq => ({
    slug: faq.id,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const faq = findFaqById(slug)
  if (!faq) return {}
  return generateFaqMetadata(faq, 'sv')
}

export default async function SvFAQDetailPage({ params }) {
  const { slug } = await params
  const faq = findFaqById(slug)

  if (!faq) {
    notFound()
  }

  const relatedFaqs = getRelatedFaqs(faq.id, 3)
  const personSchema = generatePersonSchema()

  const baseUrl = 'https://www.matildarydow.com'
  const pagePath = `/sv/fragor/${faq.id}/`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: faq.sv.question,
    description: faq.sv.answer.replace(/\*\*/g, '').replace(/\n/g, ' ').trim().substring(0, 200),
    author: {
      '@type': 'Person',
      name: 'Matilda Rydow',
      url: baseUrl,
    },
    publisher: {
      '@type': 'Person',
      name: 'Matilda Rydow',
      url: baseUrl,
    },
    url: `${baseUrl}${pagePath}`,
    inLanguage: 'sv-SE',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${pagePath}`,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: faq.sv.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.sv.answer.replace(/\*\*/g, '').replace(/\n/g, ' ').trim(),
          author: {
            '@type': 'Person',
            name: 'Matilda Rydow',
          },
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Hem',
        item: `${baseUrl}/sv/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Frågor & Svar',
        item: `${baseUrl}/sv/fragor/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: faq.sv.question.length > 50 ? faq.sv.question.substring(0, 47) + '...' : faq.sv.question,
        item: `${baseUrl}${pagePath}`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Static content for SEO */}
      <article className="sr-only" aria-label="FAQ content for search engines">
        <h1>{faq.sv.question}</h1>
        <p>Av Matilda Rydow</p>
        <p>Kategorier: {faq.categories.map(catId => {
          const cat = faqCategories.find(c => c.id === catId)
          return cat?.sv.title
        }).filter(Boolean).join(', ')}</p>
        <div>
          {faq.sv.answer.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph.replace(/\*\*/g, '')}</p>
          ))}
        </div>
      </article>

      <FAQDetailPage faq={faq} relatedFaqs={relatedFaqs} lang="sv" />
    </>
  )
}
