import '@/styles/globals.css';

export const metadata = {
  title: 'yakships — Steve Sikoryak | Shopify Developer & Full-Stack Builder',
  description:
    'Freelance Shopify developer with 8+ years of experience building high-performing e-commerce storefronts and web applications.',
  metadataBase: new URL('https://yakships.dev'),
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
    title: 'yakships — Steve Sikoryak',
    description:
      'Freelance Shopify developer with 8+ years of experience building high-performing e-commerce storefronts and web applications.',
    url: 'https://yakships.dev',
    siteName: 'yakships',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'yakships — Steve Sikoryak',
    description:
      'Freelance Shopify developer with 8+ years of experience.',
  },
  robots: {
    index: true,
    follow: true,
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
