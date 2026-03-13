export type FAQItem = {
  question: string;
  answer: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceRequirement = {
  title: string;
  items: string[];
};

export type ServicePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  summary: string;
  requirements: ServiceRequirement[];
  steps: ServiceStep[];
  faq: FAQItem[];
  whatsappMessage: string;
  ctaLabel?: string;
  order?: number;
  bodyHtml: string;
};

export type ContactInquiry = {
  service: string;
  name: string;
  email: string;
  phone: string;
  preferredContact: "whatsapp" | "email" | "telefono";
  message: string;
};
