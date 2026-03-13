import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { FAQList } from "@/components/faq-list";
import { Hero } from "@/components/hero";
import { MapEmbed } from "@/components/map-embed";
import { ServiceCard } from "@/components/service-card";
import { getAllServices, getFaqItems } from "@/lib/content";
import { createWhatsAppUrl, siteConfig } from "@/lib/site-config";

export default async function HomePage() {
  const services = await getAllServices();
  const faqs = (await getFaqItems()).slice(0, 6).map(({ question, answer }) => ({ question, answer }));
  const serviceOptions = services.map((service) => ({
    value: service.slug,
    label: service.title,
  }));

  return (
    <>
      <Hero
        title="Escrituras, poderes y certificaciones"
        subtitle="Atencion clara y profesional para que tu tramite salga bien desde la primera consulta. Revisamos requisitos, ordenamos documentacion y coordinamos turnos segun el servicio."
        primaryCta={{
          href: createWhatsAppUrl("Hola, quiero pedir un turno en la escribania."),
          label: "Pedi tu turno por WhatsApp",
        }}
        secondaryCta={{ href: "/contacto", label: "Enviar consulta" }}
      />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Servicios</p>
            <h2>Elegi el tramite y revisa requisitos iniciales</h2>
            <p className="lead">
              Pasamos de una consulta generica a una orientacion por servicio para que sepas que
              hacer antes de venir.
            </p>
          </div>
          <div className="cards-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div className="editorial-panel">
            <div className="content-block">
              <p className="eyebrow">Confianza</p>
              <h2>Trayectoria, continuidad y una forma clara de trabajar</h2>
              <p>
                La escribania inicia su historia en 1933 y mantiene presencia en Dean Funes 1117,
                Barrio Alberdi, desde 1945. Esa continuidad suma experiencia, pero tambien una
                manera de atender: explicar el proceso, pedir la documentacion necesaria y evitar
                vueltas innecesarias.
              </p>
              <ul className="check-list">
                <li>Trayectoria institucional desde 1933</li>
                <li>Sede historica en Barrio Alberdi</li>
                <li>Orientacion previa antes del turno</li>
              </ul>
            </div>
            <div className="image-stack">
              <figure className="image-card image-card-main">
                <Image
                  src="/assets/Ingreso-Escribania1.webp"
                  alt="Ingreso de la escribania"
                  width={900}
                  height={900}
                  sizes="(max-width: 767px) 100vw, 50vw"
                  className="image-cover"
                />
                <figcaption>Ingreso historico y atencion en Barrio Alberdi.</figcaption>
              </figure>
              <figure className="image-card image-card-accent">
                <Image
                  src="/assets/Secretaria1.webp"
                  alt="Sector de recepcion y secretaria de la escribania"
                  width={900}
                  height={900}
                  sizes="(max-width: 767px) 100vw, 25vw"
                  className="image-cover"
                />
              </figure>
            </div>
          </div>
          <div className="content-block">
            <p className="eyebrow">Como trabajamos</p>
            <h2>Un proceso simple para que llegues preparado</h2>
            <ul className="steps-list">
              <li>
                <strong>1. Consulta inicial.</strong> Nos contas el tramite por WhatsApp o
                formulario.
              </li>
              <li>
                <strong>2. Revision previa.</strong> Indicamos que informacion conviene enviar o
                llevar.
              </li>
              <li>
                <strong>3. Turno y seguimiento.</strong> Coordinamos el acto y te orientamos sobre
                lo siguiente.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-section">
          <div>
            <div className="section-header">
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2>Respuestas rapidas antes de consultar</h2>
            </div>
            <FAQList items={faqs} />
            <div className="button-row" style={{ marginTop: "1rem" }}>
              <Link href="/preguntas-frecuentes" className="button button-secondary">
                Ver todas las FAQs
              </Link>
            </div>
          </div>
          <div className="content-block">
            <p className="eyebrow">Ubicacion</p>
            <h2>Dean Funes 1117, Cordoba</h2>
            <figure className="inline-photo">
              <Image
                src="/assets/Living1.webp"
                alt="Espacio de atencion dentro de la escribania"
                width={900}
                height={900}
                sizes="(max-width: 767px) 100vw, 40vw"
                className="image-cover"
              />
            </figure>
            <p>
              Atendemos en Barrio Alberdi, con acceso simple para vecinos y consultas de toda la
              ciudad. Si prefieres confirmar el tramite antes de acercarte, puedes escribirnos y te
              orientamos.
            </p>
            <p>
              Telefonos: {siteConfig.phoneDisplay.join(" / ")}
              <br />
              Email: {siteConfig.email}
            </p>
            <div className="button-row">
              <Link href="/ubicacion" className="button button-secondary">
                Ver ubicacion completa
              </Link>
              <a
                href={createWhatsAppUrl("Hola, quiero hacer una consulta sobre un tramite notarial.")}
                className="button button-link"
              >
                Escribinos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-panel">
            <p className="eyebrow">Contacto y turnos</p>
            <h2>Envia tu consulta online</h2>
            <p>
              Indica el tramite y tu medio de contacto preferido. Asi podemos responder con mas
              contexto y menos idas y vueltas.
            </p>
            <ContactForm services={serviceOptions} />
          </div>
          <div className="visual-contact-stack">
            <figure className="image-card image-card-tall">
              <Image
                src="/assets/Sala-Escrituras.webp"
                alt="Sala de escrituras de la escribania"
                width={900}
                height={1200}
                sizes="(max-width: 767px) 100vw, 50vw"
                className="image-cover"
              />
              <figcaption>Espacios preparados para actos y firmas con atencion personalizada.</figcaption>
            </figure>
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
