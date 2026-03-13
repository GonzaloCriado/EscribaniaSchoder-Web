import Link from "next/link";

import { createWhatsAppUrl } from "@/lib/site-config";
import type { ServicePage } from "@/lib/types";

export function ServiceCard({ service }: { service: ServicePage }) {
  return (
    <article className="service-card">
      <p className="eyebrow">Servicio notarial</p>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <div className="service-actions">
        <Link href={`/servicios/${service.slug}`} className="button button-secondary">
          Ver requisitos
        </Link>
        <a href={createWhatsAppUrl(service.whatsappMessage)} className="button button-link">
          Consultar por WhatsApp
        </a>
      </div>
    </article>
  );
}
