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
    slug: faq.enId || faq.id,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const faq = findFaqById(slug)
  if (!faq) return {}
  return generateFaqMetadata(faq, 'en')
}

export default async function EnFAQDetailPage({ params }) {
  const { slug } = await params
  const faq = findFaqById(slug)

  if (!faq) {
    notFound()
  }

  const relatedFaqs = getRelatedFaqs(faq.id, 3)
  const personSchema = generatePersonSchema()

  const baseUrl = 'https://www.matildarydow.com'
  const enSlug = faq.enId || faq.id
  const pagePath = `/en/faq/${enSlug}/`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: faq.en.question,
    description: faq.en.answer.replace(/\*\*/g, '').replace(/\n/g, ' ').trim().substring(0, 200),
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
    inLanguage: 'en-US',
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
        name: faq.en.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.en.answer.replace(/\*\*/g, '').replace(/\n/g, ' ').trim(),
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
        name: 'Home',
        item: `${baseUrl}/en/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Q&A',
        item: `${baseUrl}/en/faq/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: faq.en.question.length > 50 ? faq.en.question.substring(0, 47) + '...' : faq.en.question,
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
        <h1>{faq.en.question}</h1>
        <p>By Matilda Rydow</p>
        <p>Categories: {faq.categories.map(catId => {
          const cat = faqCategories.find(c => c.id === catId)
          return cat?.en.title
        }).filter(Boolean).join(', ')}</p>
        <div>
          {faq.en.answer.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph.replace(/\*\*/g, '')}</p>
          ))}
        </div>
      </article>

      <FAQDetailPage faq={faq} relatedFaqs={relatedFaqs} lang="en" />
    </>
  )
}
