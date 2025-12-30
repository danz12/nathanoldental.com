import { Helmet } from "react-helmet-async";
import { BUSINESS_INFO } from "@/lib/constants";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article";
}

export function SEOHead({ 
  title, 
  description, 
  keywords,
  canonical,
  ogImage = "/og-image.jpg",
  type = "website"
}: SEOHeadProps) {
  const fullTitle = title.includes("Nathanol") ? title : `${title} | ${BUSINESS_INFO.name}`;
  
  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": BUSINESS_INFO.name,
    "description": description,
    "url": canonical || "https://nathanoldental.com",
    "telephone": BUSINESS_INFO.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.location.address,
      "addressLocality": BUSINESS_INFO.location.city,
      "addressCountry": BUSINESS_INFO.location.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.0192", // Approximate for Addis Ababa
      "longitude": "38.7525"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS_INFO.reviews.google.rating.toString(),
      "reviewCount": BUSINESS_INFO.reviews.google.count.toString()
    },
    "openingHoursSpecification": BUSINESS_INFO.hours.weekly.map(day => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": day.day,
      "opens": day.hours === "Closed" ? undefined : "08:00",
      "closes": day.hours === "Closed" ? undefined : "19:00"
    })),
    "sameAs": [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.tiktok
    ]
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BUSINESS_INFO.name} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}
