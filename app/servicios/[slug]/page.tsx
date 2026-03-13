import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQList } from "@/components/faq-list";
import { StickyCTA } from "@/components/sticky-cta";
import { getAllServices, getServiceBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { buildFaqSchema } from "@/lib/schema";
import { createWhatsAppUrl } from "@/lib/site-config";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/servicios/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const whatsappUrl = createWhatsAppUrl(service.whatsappMessage);
  const faqSchema = buildFaqSchema(service.faq);

  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs
          items={[
            { href: "/", label: "Inicio" },
            { href: "/servicios", label: "Servicios" },
            { label: service.title },
          ]}
        />
        <div className="service-detail-grid">
          <div className="content-block">
            <p className="eyebrow">Servicio</p>
            <h1>{service.title}</h1>
            <p className="lead">{service.hero}</p>
            <div className="markdown-content" dangerouslySetInnerHTML={{ __html: service.bodyHtml }} />
          </div>
          <aside className="page-card">
            <p className="eyebrow">Resumen</p>
            <h2>{service.summary}</h2>
            <div className="button-row">
              <a href={whatsappUrl} className="button button-primary">
                Consultar este servicio
              </a>
              <a href="/contacto" className="button button-secondary">
                Enviar consulta
              </a>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <h3>Ver requisitos</h3>
              <ul className="requirements-list">
                {service.requirements.map((group) => (
                  <li key={group.title}>
                    <strong>{group.title}</strong>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <div className="split-section section">
          <div className="content-block">
            <p className="eyebrow">Pasos</p>
            <h2>Como avanza este tramite</h2>
            <ul className="steps-list">
              {service.steps.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="section-header">
              <p className="eyebrow">FAQ</p>
              <h2>Preguntas frecuentes</h2>
            </div>
            <FAQList items={service.faq} />
            <StickyCTA whatsappUrl={whatsappUrl} />
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
