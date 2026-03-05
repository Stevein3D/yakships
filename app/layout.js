import '@/styles/globals.css';

export const metadata = {
  title: 'yakships — Steve Sikoryak | Shopify Developer & Full-Stack Builder',
  description:
    'Freelance Shopify developer with 8+ years of experience building high-performing e-commerce storefronts and web applications.',
  metadataBase: new URL('https://yakships.dev'),
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
