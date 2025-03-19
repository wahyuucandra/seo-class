import { envClient } from "@/utils/environments";

export const organizationSchema = {
  '@type': 'Organization',
  name: 'ACC ONE',
  url: envClient.NEXT_PUBLIC_API_URL,
  logo: `${envClient.NEXT_PUBLIC_API_URL}/logo.svg`,
  image: `${envClient.NEXT_PUBLIC_API_URL}/logo.svg`,
  sameAs: [
    'https://www.facebook.com/acconeid',
    'https://www.instagram.com/acconeid',
    'https://www.youtube.com/c/AstraCreditCompanies-acconeid',
    'https://x.com/acconeid',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jakarta',
    addressRegion: 'Jakarta',
    postalCode: '12530',
    streetAddress: 'Jalan TB Simatupang Kav. 90, Jakarta Selatan, Jakarta Selatan, DKI Jakarta 12530',
    telephone: '+628111500599',
    email: 'kontak.acc@ai.astra.co.id',
  },

  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${envClient.NEXT_PUBLIC_API_URL}/search/result={search_term_string}`,
    },
    'query-input': {
      '@type': 'PropertyValueSpecification',
      valueRequired: 'https://schema.org/True',
      valueName: 'search_term_string',
    },
  },
}
