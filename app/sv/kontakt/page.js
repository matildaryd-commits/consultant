import ContactClient from '../../../src/components/ContactClient'

export const metadata = {
  title: 'Boka AI-rådgivning eller Föreläsning | Matilda Rydow',
  description: 'Boka AI-rådgivning, workshop eller föreläsning med Matilda Rydow. Expertis inom martech, data/analytics och AI för marknadsavdelningar.',
  authors: [{ name: 'Matilda Rydow' }],
  openGraph: {
    title: 'Boka AI-rådgivning eller Föreläsning',
    description: 'Boka AI-rådgivning, workshop eller föreläsning med Matilda Rydow. Expertis inom martech, data/analytics och AI för marknadsavdelningar.',
    url: 'https://matildarydow.com/sv/kontakt',
    siteName: 'Matilda Rydow',
    locale: 'sv_SE',
    type: 'website',
    images: [{ url: 'https://matildarydow.com/matilda-portrait.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boka AI-rådgivning | Matilda Rydow',
    description: 'Boka AI-rådgivning, workshop eller föreläsning.',
    images: ['https://matildarydow.com/matilda-portrait.jpg'],
  },
  alternates: {
    canonical: 'https://matildarydow.com/sv/kontakt',
    languages: {
      'sv': 'https://matildarydow.com/sv/kontakt',
      'en': 'https://matildarydow.com/en/contact',
      'x-default': 'https://matildarydow.com/sv/kontakt',
    },
  },
}

export default function SvContactPage() {
  return <ContactClient lang="sv" />
}
