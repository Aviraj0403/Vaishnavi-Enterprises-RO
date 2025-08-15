import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Head from "next/head";  // Import Head component from next/head
import "./globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import WebVitals from "@/components/WebVitals";
import AOSInit from "@/components/AOSInit";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// === Fonts ===
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// === Metadata ===
export const metadata: Metadata = {
  metadataBase: new URL("https://vaishnaviwaterpurifiers.com"),
  title: {
    default: "Vaishnavi Enterprises – Best RO Water Purifier Service Near You",
    template: "%s | Vaishnavi Enterprises",
  },
  description: "Get the best RO water purifier services near you from Vaishnavi Enterprises. We offer installation, repair, and maintenance of water purifiers for fresh and safe drinking water.",
  keywords: [
    "RO service near me",
    "water purifier installation",
    "RO maintenance",
    "water fresh aqua",
    "Vaishnavi Enterprises",
    "RO service",
    "water filtration",
    "aqua filter service",
    "purifier repair",
    "safe drinking water",
  ],
  authors: [{ name: "Vaishnavi Enterprises", url: "https://vaishnaviwaterpurifiers.com" }],
  creator: "Vaishnavi Enterprises",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaishnaviwaterpurifiers.com",
    title: "Vaishnavi Enterprises – Best RO Water Purifier Service Near You",
    description: "Vaishnavi Enterprises provides the best RO water purifier installation, maintenance, and repair services for fresh and safe drinking water.",
    images: [
      {
        url: "https://vaishnaviwaterpurifiers.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vaishnavi Enterprises - Your Trusted RO Service Provider",
      },
    ],
    siteName: "Vaishnavi Enterprises",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaishnavi Enterprises – Best RO Service Near You",
    description: "Vaishnavi Enterprises offers reliable RO water purifier services near you. Get expert installation, repair, and maintenance.",
    images: ["https://vaishnaviwaterpurifiers.com/og-image.jpg"],
    creator: "@vaishnavi_enterprises",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Vaishnavi Enterprises",
  description: "Providing expert RO water purifier services, including installation, maintenance, and repairs. We serve customers with high-quality, safe drinking water solutions.",
  image: "https://vaishnaviwaterpurifiers.com/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Water St, Near XYZ Park", // Update with your actual address
    addressLocality: "City Name", // Update with your city
    addressRegion: "State Name", // Update with your state
    postalCode: "12345", // Update with your postal code
    addressCountry: "IN", // Update with your country
  },
  telephone: "+91-123-456-7890", // Update with your contact number
  url: "https://vaishnaviwaterpurifiers.com",
  openingHours: "Mo-Su 09:00-21:00",
  sameAs: [
    "https://www.facebook.com/vaishnavi.enterprises",
    "https://twitter.com/vaishnavi_enterprises",
    "https://www.instagram.com/vaishnavi_enterprises",
  ],
  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.9716", // Update with your actual latitude
    longitude: "77.5946", // Update with your actual longitude
  },
  priceRange: "$$",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        {/* Meta tag for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Structured Data JSON-LD (SEO for Local Business) */}
        <Head>
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Head>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body>
        <Navbar />
        <AOSInit />
        
        {children}
        <SpeedInsights />
        <Analytics />

        <Footer />
        {/* Web Vitals (only in production for performance) */}
        {process.env.NODE_ENV === "production" && <WebVitals />}
      </body>
    </html>
  );
}
