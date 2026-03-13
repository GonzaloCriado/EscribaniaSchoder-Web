import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ServiceCard } from "@/components/service-card";
import { getAllServices } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Servicios notariales en Cordoba | Escribania Schroder",
  description:
    "Conoce los servicios notariales de la escribania: escrituras, poderes, autorizaciones y certificaciones con orientacion clara.",
  path: "/servicios",
});

export default async function ServicesPage() {
  const services = await getAllServices();

  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Servicios" }]} />
        <div className="section-header">
          <p className="eyebrow">Servicios</p>
          <h1>Servicios notariales con informacion clara desde el inicio</h1>
          <p className="lead">
            Cada pagina resume requisitos, pasos y preguntas frecuentes para ayudarte a consultar
            con mejor contexto.
          </p>
        </div>
        <div className="cards-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
