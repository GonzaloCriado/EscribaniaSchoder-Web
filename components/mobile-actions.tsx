"use client";

import { useState } from "react";
import Link from "next/link";

import { navigation } from "@/lib/site-config";

export function MobileActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-actions">
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        Menu
      </button>
      <div id="mobile-nav" className={`mobile-drawer ${open ? "is-open" : ""}`}>
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
