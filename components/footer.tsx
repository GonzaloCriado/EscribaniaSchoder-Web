import Link from "next/link";

import { navigation, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="eyebrow">Escribania en Cordoba</p>
          <h2>Escribania Schroder</h2>
          <p>
            {siteConfig.address.street}, {siteConfig.address.neighborhood}, {siteConfig.address.city}.
          </p>
        </div>
        <div>
          <h3>Navegacion</h3>
          <ul className="footer-list">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul className="footer-list">
            <li>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            {siteConfig.phoneDisplay.map((phone, index) => (
              <li key={phone}>
                <a href={`tel:${siteConfig.phoneE164[index]}`}>{phone}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>Atencion profesional para escrituras, poderes, autorizaciones y certificaciones.</p>
        <p>© 2026 Escribania Schroder.</p>
      </div>
    </footer>
  );
}
