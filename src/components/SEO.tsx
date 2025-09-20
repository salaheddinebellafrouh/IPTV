import { Helmet, HelmetProvider } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title = "StreamPro IPTV - Premium IPTV Streaming Service | 15,000+ Channels",
  description = "Experience premium IPTV streaming with 15,000+ live channels, 50,000+ VOD movies, 4K quality, and 24/7 support. No contract, 7-day money back guarantee. Start streaming now!",
  keywords = "IPTV, streaming, live TV, movies, 4K streaming, premium IPTV, internet TV, cord cutting, streaming service, live channels, VOD, IPTV subscription, smart TV streaming",
  canonical,
  ogTitle,
  ogDescription,
  ogImage = "/og-image.jpg",
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData
}) => {
  const siteUrl = "https://streamproiptv.com"; // Replace with your actual domain
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : `${siteUrl}/`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "StreamPro IPTV",
    "description": description,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* Basic SEO Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={ogUrl || fullCanonical} />
      <meta property="og:site_name" content="StreamPro IPTV" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || fullOgImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="StreamPro IPTV" />
      <meta name="language" content="en-US" />
      <meta name="geo.region" content="US" />
      <meta name="geo.country" content="USA" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {!structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(defaultStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export const SEOProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <HelmetProvider>
      {children}
    </HelmetProvider>
  );
};
