import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { markdownToHtml } from "@/lib/markdown";
import type { FAQItem, ServicePage, ServiceRequirement, ServiceStep } from "@/lib/types";

const contentDir = path.join(process.cwd(), "content");
const servicesDir = path.join(contentDir, "services");

type ServiceFrontmatter = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  summary: string;
  whatsappMessage: string;
  ctaLabel?: string;
  order?: number;
  requirements: ServiceRequirement[];
  steps: ServiceStep[];
  faq: FAQItem[];
};

function readMarkdownFile(filePath: string) {
  return fs.readFileSync(filePath, "utf8");
}

export async function getAllServices() {
  const files = fs.readdirSync(servicesDir).filter((file) => file.endsWith(".md"));
  const services = await Promise.all(
    files.map(async (file) => {
      const raw = readMarkdownFile(path.join(servicesDir, file));
      const { data, content } = matter(raw);
      const frontmatter = data as ServiceFrontmatter;

      const bodyHtml = await markdownToHtml(content);

      return {
        ...frontmatter,
        bodyHtml,
      } satisfies ServicePage;
    }),
  );

  return services.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export async function getServiceBySlug(slug: string) {
  const services = await getAllServices();
  return services.find((service) => service.slug === slug);
}

export async function getFaqItems() {
  const services = await getAllServices();
  return services.flatMap((service) =>
    service.faq.map((item) => ({
      ...item,
      service: service.title,
      slug: service.slug,
    })),
  );
}
