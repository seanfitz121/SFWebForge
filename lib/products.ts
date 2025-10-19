export interface Product {
  id: string;
  name: string;
  type: 'download';
  priceEUR: number;
  short: string;
  bullets: string[];
  includes: string[];
  image: string;
  fileKey: string;
  stripePriceId: string;
}

export const products: Product[] = [
  {
    id: "site-template",
    name: "Local Business Website Template",
    type: "download",
    priceEUR: 50,
    short: "3-page starter template (Home, Services, Contact).",
    bullets: [
      "Easy rebrand (colors, fonts, images)",
      "SEO-ready structure",
      "Contact form integration guide"
    ],
    includes: [
      "Source code .zip",
      "Setup guide PDF",
      "Single-site personal/commercial license"
    ],
    image: "/images/shop/site-template-cover.jpg",
    fileKey: "site-template-v1.zip",
    stripePriceId: "price_XXXXXXXX_site_template"
  },
  {
    id: "launch-ebook",
    name: "Website Launch eBook",
    type: "download",
    priceEUR: 25,
    short: "Step-by-step checklist to launch a site the right way.",
    bullets: [
      "Domains, DNS, SSL, redirects",
      "Analytics & Search Console",
      "Legal basics & performance tuning"
    ],
    includes: ["PDF (40+ pages)"],
    image: "/images/shop/launch-ebook-cover.jpg",
    fileKey: "site-launch-ebook-v1.pdf",
    stripePriceId: "price_XXXXXXXX_launch_ebook"
  },
  {
    id: "seo-checklist",
    name: "SEO Checklist",
    type: "download",
    priceEUR: 15,
    short: "Practical on-page and local SEO checklist.",
    bullets: [
      "Titles & meta descriptions",
      "Schema (LocalBusiness, FAQ)",
      "Sitemap, robots, image alts"
    ],
    includes: ["PDF (12 pages)"],
    image: "/images/shop/seo-checklist-cover.jpg",
    fileKey: "seo-checklist-v1.pdf",
    stripePriceId: "price_XXXXXXXX_seo_checklist"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function formatPrice(priceEUR: number): string {
  return `€${priceEUR}`;
}
