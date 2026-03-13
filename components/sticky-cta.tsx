import Link from "next/link";

export function StickyCTA({ whatsappUrl }: { whatsappUrl: string }) {
  return (
    <div className="sticky-cta">
      <a href={whatsappUrl} className="button button-primary">
        Pedir turno por WhatsApp
      </a>
      <Link href="/contacto" className="button button-secondary">
        Enviar consulta
      </Link>
    </div>
  );
}
