import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { MapEmbed } from "@/components/map-embed";
import { buildMetadata } from "@/lib/metadata";
import { createWhatsAppUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  title: "Ubicacion de la escribania en Cordoba | Escribania Schroder",
  description:
    "Encuentra la escribania en Dean Funes 1117, Barrio Alberdi, Cordoba. Datos de contacto y mapa de referencia.",
  path: "/ubicacion",
});

export default function LocationPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Ubicacion" }]} />
        <div className="section-header">
          <p className="eyebrow">Ubicacion</p>
          <h1>Dean Funes 1117, Barrio Alberdi, Cordoba</h1>
          <p className="lead">
            Atendemos en una ubicacion historica de la escribania, con consultas previas por
            WhatsApp o formulario para orientar tu tramite antes del turno.
          </p>
        </div>
        <div className="contact-grid">
          <article className="contact-panel map-copy">
            <h2>Datos utiles</h2>
            <figure className="inline-photo">
              <Image
                src="/assets/Ingreso-Escribania1.webp"
                alt="Fachada e ingreso de la escribania"
                width={900}
                height={900}
                sizes="(max-width: 767px) 100vw, 40vw"
                className="image-cover"
              />
            </figure>
            <p>
              Direccion: {siteConfig.address.street}, {siteConfig.address.neighborhood}, {siteConfig.address.city}.
            </p>
            <p>Telefonos: {siteConfig.phoneDisplay.join(" / ")}</p>
            <p>Email: {siteConfig.email}</p>
            <p>Horario de referencia: lunes a viernes, manana y tarde.</p>
            <div className="button-row">
              <a
                href={createWhatsAppUrl("Hola, quiero confirmar la ubicacion de la escribania.")}
                className="button button-primary"
              >
                Consultar por WhatsApp
              </a>
              <a href="/contacto" className="button button-secondary">
                Enviar consulta
              </a>
            </div>
          </article>
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
