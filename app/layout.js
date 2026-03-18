import '@/styles/globals.css';

export const metadata = {
  title: 'yakships — Steve Sikoryak | Shopify Developer & Full-Stack Builder',
  description:
    'Freelance Shopify developer based in New Jersey with 10+ years of experience building high-performing e-commerce storefronts, custom themes, and full-stack web applications.',
  metadataBase: new URL('https://yakships.dev'),
  keywords: [
    'Shopify developer',
    'freelance Shopify developer',
    'Shopify theme development',
    'e-commerce developer',
    'full-stack developer',
    'Liquid developer',
    'WooCommerce developer',
    'New Jersey web developer',
    'Steve Sikoryak',
    'yakships',
  ],
  authors: [{ name: 'Steve Sikoryak', url: 'https://yakships.dev' }],
  creator: 'Steve Sikoryak',
  alternates: {
    canonical: 'https://yakships.dev',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: { url: '/apple-touch-icon.png' },
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'yakships — Steve Sikoryak | Shopify Developer & Full-Stack Builder',
    description:
      'Freelance Shopify developer with 10+ years of experience building high-performing e-commerce storefronts and web applications.',
    url: 'https://yakships.dev',
    siteName: 'yakships',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'yakships — Steve Sikoryak | Shopify Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'yakships — Steve Sikoryak | Shopify Developer',
    description:
      'Freelance Shopify developer with 10+ years of experience building high-performing e-commerce storefronts and web applications.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
