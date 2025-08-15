"use client";
import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  twitterHandle?: string;
}

export default function SEO({
  title,
  description = "Get expert RO water purifier services near you from Vaishnavi Enterprises. We offer installation, repair, and maintenance of water purifiers for fresh and safe drinking water in Saraiya, Muzaffarpur.",
  url = "https://vaishnaviwaterpurifiers.com",
  image = "https://vaishnaviwaterpurifiers.com/og-image.jpg",
  twitterHandle = "@vaishnavi_enterprises",
}: SEOProps) {
  const siteName = "Vaishnavi Enterprises";
  const pageTitle = title ? `${title} | ${siteName}` : siteName;

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="RO service near me, water purifier installation, RO maintenance, water fresh aqua, Vaishnavi Enterprises, RO service, water filtration, aqua filter service, purifier repair, safe drinking water, Saraiya Muzaffarpur" />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
