import ContactThanksClient from '../../../../src/components/ContactThanksClient'

export const metadata = {
  title: 'Tack | Matilda Rydow',
  description: 'Tack för ditt meddelande.',
  robots: { index: false },
  openGraph: {
    title: 'Tack',
    description: 'Tack för ditt meddelande.',
    url: 'https://www.matildarydow.com/sv/kontakt/tack',
    siteName: 'Matilda Rydow',
    locale: 'sv_SE',
    type: 'website',
    images: [{ url: 'https://www.matildarydow.com/matilda-portrait.jpg' }],
  },
  alternates: {
    canonical: 'https://www.matildarydow.com/sv/kontakt/tack',
    languages: {
      'sv': 'https://www.matildarydow.com/sv/kontakt/tack',
      'en': 'https://www.matildarydow.com/en/contact/thanks',
      'x-default': 'https://www.matildarydow.com/sv/kontakt/tack',
    },
  },
}

export default function SvContactThanksPage() {
  return <ContactThanksClient lang="sv" />
}
