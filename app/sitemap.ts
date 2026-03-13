import type { MetadataRoute } from "next";

import { getAllServices } from "@/lib/content";
import { absoluteUrl } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = await getAllServices();
  const staticRoutes = ["", "/servicios", "/quienes-somos", "/ubicacion", "/preguntas-frecuentes", "/contacto"];

  const staticEntries = staticRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: absoluteUrl(`/servicios/${service.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...serviceEntries];
}
