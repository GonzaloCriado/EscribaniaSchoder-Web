import Image from "next/image";
import Link from "next/link";

import { MobileActions } from "@/components/mobile-actions";
import { navigation } from "@/lib/site-config";

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-shell">
        <Link href="/" className="brand-mark" aria-label="Escribania Schroder, ir al inicio">
          <span className="brand-lockup">
            <Image
              src="/assets/Logo2.webp"
              alt="Logo de Escribania Schroder"
              width={72}
              height={72}
              className="brand-logo"
            />
            <span className="brand-copy">
              <span className="brand-kicker">Desde 2010</span>
              <span className="brand-name">Escribania</span>
            </span>
          </span>
        </Link>
        <nav aria-label="Principal" className="desktop-nav">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileActions />
      </div>
    </header>
  );
}
