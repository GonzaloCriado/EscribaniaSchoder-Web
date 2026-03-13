import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQList } from "@/components/faq-list";
import { getFaqItems } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { buildFaqSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Preguntas frecuentes | Escribania Schroder",
  description:
    "Respuestas frecuentes sobre escrituras, poderes, autorizaciones y certificaciones en Cordoba.",
  path: "/preguntas-frecuentes",
});

export default async function FaqPage() {
  const items = await getFaqItems();
  const faqItems = items.map(({ question, answer }) => ({ question, answer }));
  const schema = buildFaqSchema(faqItems);

  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Preguntas frecuentes" }]} />
        <div className="section-header">
          <p className="eyebrow">FAQ</p>
          <h1>Preguntas frecuentes sobre tramites notariales</h1>
          <p className="lead">
            Reunimos respuestas iniciales para ayudarte a consultar con mas contexto segun el tipo
            de tramite.
          </p>
        </div>
        <FAQList items={faqItems} />
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
