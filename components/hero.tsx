import Image from "next/image";
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
};

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Barrio Alberdi, Cordoba</p>
          <h1>{title}</h1>
          <p className="hero-summary">{subtitle}</p>
          <div className="hero-actions">
            <Link href={primaryCta.href} className="button button-primary">
              {primaryCta.label}
            </Link>
            <Link href={secondaryCta.href} className="button button-secondary">
              {secondaryCta.label}
            </Link>
          </div>
          <ul className="hero-proof" aria-label="Motivos para elegir la escribania">
            <li>Trayectoria desde 1933</li>
            <li>Atencion clara y profesional</li>
            <li>Orientacion previa por servicio</li>
          </ul>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-image-wrap">
            <Image
              src="/assets/hero2.jpg"
              alt="Interior de la escribania"
              fill
              priority
              sizes="(max-width: 979px) 100vw, 45vw"
              className="hero-image"
            />
            <div className="hero-image-overlay" />
          </div>
          <div className="hero-card">
            <h2>Tu tramite, ordenado desde el primer contacto</h2>
            <p>
              Revisamos requisitos antes del turno para que sepas que llevar y cual es el
              siguiente paso.
            </p>
          </div>
          <div className="hero-frame">
            <span>Dean Funes 1117</span>
            <span>Atencion personalizada</span>
          </div>
        </div>
      </div>
    </section>
  );
}
