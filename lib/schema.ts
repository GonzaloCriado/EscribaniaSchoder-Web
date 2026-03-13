import { absoluteUrl, siteConfig } from "@/lib/site-config";
import type { FAQItem } from "@/lib/types";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": absoluteUrl("#business"),
    name: siteConfig.legalName,
    image: absoluteUrl(siteConfig.socialImage),
    url: siteConfig.domain,
    telephone: siteConfig.phoneE164[0],
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.latitude,
      longitude: siteConfig.coordinates.longitude,
    },
    openingHours: siteConfig.businessHours,
    areaServed: "Cordoba, Argentina",
    sameAs: [createWhatsappLanding()],
  };
}

export function buildFaqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createWhatsappLanding() {
  return `https://wa.me/${siteConfig.whatsappNumber}`;
}
