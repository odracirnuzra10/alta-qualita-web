// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alta-qualita.cl',
  trailingSlash: 'never',
  compressHTML: true,
  redirects: {
    '/blog': '/recursos',
    '/blog/que-maquinas-comprar-clinica-estetica': '/recursos/que-maquinas-comprar-clinica-estetica',
    '/blog/endolaser-vs-hifu-que-comprar': '/recursos/endolaser-vs-hifu-que-comprar',
    '/blog/rentabilidad-criolipolisis-centro-estetica':
      '/recursos/rentabilidad-criolipolisis-centro-estetica',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/blog'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
