import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { getAllServices } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";
import { createWhatsAppUrl } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Contacto y turnos | Escribania Schroder",
  description:
    "Envia tu consulta online o pedi tu turno por WhatsApp para escrituras, poderes, autorizaciones y certificaciones.",
  path: "/contacto",
});

export default async function ContactPage() {
  const services = await getAllServices();
  const serviceOptions = services.map((service) => ({
    value: service.slug,
    label: service.title,
  }));

  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Contacto y turnos" }]} />
        <div className="section-header">
          <p className="eyebrow">Contacto y turnos</p>
          <h1>Elegi tu tramite y escribinos</h1>
          <p className="lead">
            Puedes iniciar la consulta por formulario o pasar directo a WhatsApp si prefieres una
            respuesta mas inmediata.
          </p>
        </div>
        <div className="contact-grid">
          <article className="contact-panel">
            <h2>Formulario de consulta</h2>
            <p>Dejanos el tramite, tus datos y la mejor forma de responderte.</p>
            <ContactForm services={serviceOptions} />
          </article>
          <article className="contact-panel">
            <p className="eyebrow">WhatsApp</p>
            <h2>Pedi tu turno o consulta por servicio</h2>
            <p>
              Si ya sabes que tramite necesitas, escribe por WhatsApp y te orientamos sobre
              documentacion y disponibilidad.
            </p>
            <div className="button-row">
              <a
                href={createWhatsAppUrl("Hola, quiero pedir un turno en la escribania.")}
                className="button button-primary"
              >
                Escribinos por WhatsApp
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
