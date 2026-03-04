import ContactClient from '../../../src/components/ContactClient'

export const metadata = {
  title: 'Book AI Consulting or Speaking | Matilda Rydow',
  description: 'Book AI consulting, workshop, or speaking with Matilda Rydow. Expertise in martech, data/analytics, and AI for marketing teams.',
  authors: [{ name: 'Matilda Rydow' }],
  openGraph: {
    title: 'Book AI Consulting or Speaking',
    description: 'Book AI consulting, workshop, or speaking with Matilda Rydow. Expertise in martech, data/analytics, and AI for marketing teams.',
    url: 'https://www.matildarydow.com/en/contact',
    siteName: 'Matilda Rydow',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://www.matildarydow.com/matilda-portrait.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book AI Consulting | Matilda Rydow',
    description: 'Book AI consulting, workshop, or speaking.',
    images: ['https://www.matildarydow.com/matilda-portrait.jpg'],
  },
  alternates: {
    canonical: 'https://www.matildarydow.com/en/contact',
    languages: {
      'sv': 'https://www.matildarydow.com/sv/kontakt',
      'en': 'https://www.matildarydow.com/en/contact',
      'x-default': 'https://www.matildarydow.com/sv/kontakt',
    },
  },
}

export default function EnContactPage() {
  return <ContactClient lang="en" />
}
