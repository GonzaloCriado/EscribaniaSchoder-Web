export const siteConfig = {
  name: "Escribania Schroder",
  legalName: "Escribania Schroder",
  domain:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://escribaniaschroder.com.ar",
  description:
    "Escribania en Barrio Alberdi, Cordoba. Escrituras, poderes, autorizaciones y certificaciones con atencion clara y profesional.",
  whatsappNumber: "5493513054134",
  whatsappDisplay: "+54 9 351 305-4134",
  phoneDisplay: ["(0351) 421-6570", "(0351) 421-3212"],
  phoneE164: ["+543514216570", "+543514213212"],
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "info@escribaniaschroder.com.ar",
  address: {
    street: "Dean Funes 1117",
    neighborhood: "Barrio Alberdi",
    city: "Cordoba",
    region: "Cordoba",
    postalCode: "5000",
    country: "AR",
  },
  coordinates: {
    latitude: -31.4114,
    longitude: -64.1967,
  },
  businessHours: [
    "Mo-Fr 09:00-13:00",
    "Mo-Fr 16:00-19:00",
  ],
  socialImage: "/og/og-image.svg",
};

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/quienes-somos", label: "Quienes somos" },
  { href: "/ubicacion", label: "Ubicacion" },
  { href: "/preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto y turnos" },
];

export function absoluteUrl(path = "") {
  return new URL(path, siteConfig.domain).toString();
}

export function createWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}
