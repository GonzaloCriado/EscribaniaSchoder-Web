import Image from "next/image";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Quienes somos | Escribania Schroder",
  description:
    "Conoce la trayectoria de la Escribania Schroder en Cordoba, su continuidad profesional y su forma de trabajo.",
  path: "/quienes-somos",
});

const milestones = [
  {
    title: "1933",
    description:
      "Inicio de la trayectoria institucional con la designacion del escribano titular del Registro Notarial Nro. 244.",
  },
  {
    title: "1945",
    description:
      "La escribania se establece en Dean Funes 1117, Barrio Alberdi, direccion que sigue siendo su sede historica.",
  },
  {
    title: "Continuidad profesional",
    description:
      "La historia de la escribania se sostiene con continuidad generacional y un trabajo enfocado en claridad, orden y atencion personalizada.",
  },
];

export default function AboutPage() {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Quienes somos" }]} />
        <div className="section-header">
          <p className="eyebrow">Quienes somos</p>
          <h1>Una escribania con historia y atencion cercana</h1>
          <p className="lead">
            La confianza se construye con experiencia, continuidad y una forma de trabajo que
            explica cada paso antes de avanzar.
          </p>
        </div>
        <div className="history-grid">
          {milestones.map((item) => (
            <article key={item.title} className="history-card">
              <p className="eyebrow">{item.title}</p>
              <h3>{item.title === "Continuidad profesional" ? item.title : `Desde ${item.title}`}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
        <section className="section">
          <div className="gallery-grid">
            <figure className="image-card image-card-wide">
              <Image
                src="/assets/Living2.webp"
                alt="Sala de espera y recepcion de la escribania"
                width={1200}
                height={900}
                sizes="(max-width: 767px) 100vw, 60vw"
                className="image-cover"
              />
              <figcaption>
                Un espacio renovado para recibir consultas y preparar cada tramite con calma.
              </figcaption>
            </figure>
            <figure className="image-card">
              <Image
                src="/assets/Secretaria1.webp"
                alt="Area administrativa de la escribania"
                width={900}
                height={900}
                sizes="(max-width: 767px) 100vw, 30vw"
                className="image-cover"
              />
            </figure>
            <figure className="image-card">
              <Image
                src="/assets/Ingreso-Escribania1.webp"
                alt="Ingreso principal de la escribania"
                width={900}
                height={900}
                sizes="(max-width: 767px) 100vw, 30vw"
                className="image-cover"
              />
            </figure>
          </div>
        </section>
        <section className="section">
          <div className="split-section">
            <article className="content-block">
              <p className="eyebrow">Como trabajamos</p>
              <h2>Menos incertidumbre, mas claridad</h2>
              <p>
                Cada consulta se organiza segun el tipo de tramite. Eso nos permite pedir
                documentacion util desde el inicio, anticipar requisitos y coordinar turnos con mas
                contexto.
              </p>
            </article>
            <article className="content-block">
              <p className="eyebrow">Equipo y legado</p>
              <h2>Continuidad con mirada actual</h2>
              <p>
                El relato historico de la escribania no queda solo en fechas. La continuidad
                profesional se traduce en criterios de trabajo estables y en una atencion enfocada
                en resolver bien cada tramite.
              </p>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
