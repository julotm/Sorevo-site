import { slugs } from '../i18n/content';
const base = 'https://sorevo.vercel.app';
export function GET() {
  const langs = ['fr', 'en', 'es'];
  const paths = ['', 'about/', 'faq/', 'guides/', 'legal/', ...slugs.map(s => `guides/${s}/`)];
  const urls = langs.flatMap(l => paths.map(p => `<url><loc>${base}/${l}/${p}</loc>${langs.map(a => `<xhtml:link rel="alternate" hreflang="${a}" href="${base}/${a}/${p}"/>`).join('')}</url>`));
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
}
