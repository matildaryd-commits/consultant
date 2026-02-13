import ContactThanksClient from '../../../../src/components/ContactThanksClient'

export const metadata = {
  title: 'Thank you | Matilda Rydow',
  description: 'Thanks for your message.',
  robots: { index: false },
  openGraph: {
    title: 'Thank you',
    description: 'Thanks for your message.',
    url: 'https://matildarydow.com/en/contact/thanks',
    siteName: 'Matilda Rydow',
    locale: 'en_US',
    type: 'website',
    images: [{ url: 'https://matildarydow.com/matilda-portrait.jpg' }],
  },
  alternates: {
    canonical: 'https://matildarydow.com/en/contact/thanks',
    languages: {
      'sv': 'https://matildarydow.com/sv/kontakt/tack',
      'en': 'https://matildarydow.com/en/contact/thanks',
      'x-default': 'https://matildarydow.com/sv/kontakt/tack',
    },
  },
}

export default function EnContactThanksPage() {
  return <ContactThanksClient lang="en" />
}
