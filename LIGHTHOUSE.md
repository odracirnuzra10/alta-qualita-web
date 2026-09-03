# Informe Lighthouse (pre-lanzamiento)

Fecha: 2026-09-03  
Entorno: build estático Astro (`npm run build`) + preview local.  
Nota: este informe resume la **checklist técnica** alineada a Core Web Vitals del brief. Ejecutar Lighthouse CI / PageSpeed Insights sobre `https://alta-qualita.cl` tras el deploy a Vercel para números de laboratorio en red 4G.

## Objetivos del brief

| Métrica | Objetivo | Estado de diseño |
|---|---|---|
| LCP | < 2,0 s | HTML estático, sin hero image pesada (SVG inline), fonts con `display=swap` + preconnect |
| INP | < 200 ms | JS mínimo (nav, forms, ROI, comparador); sin librerías UI |
| CLS | < 0,05 | width/height en SVG placeholder; sin banners async; tipografía estable |

## Accesibilidad (AA)

- Foco visible (`:focus-visible` cobalto)
- Skip link al contenido
- Jerarquía H1→H2 sin saltos en plantillas
- Tablas con `<th scope>`
- Contraste tokens: blanco/cobalto 5,9:1 · blanco/grafito 16,4:1
- `prefers-reduced-motion` respetado
- Navegación por teclado en menú, forms, FAQ (`details`)

## SEO

- `es-CL`, canonical, OG/Twitter
- `sitemap` (@astrojs/sitemap) + `robots.txt` con GPTBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot
- `llms.txt`
- JSON-LD: Organization, WebSite, Product+Offer, BreadcrumbList, FAQPage, Article
- **Sin** Review / AggregateRating

## Cómo medir en producción

```bash
npx lighthouse https://alta-qualita.cl --form-factor=mobile --view
npx lighthouse https://alta-qualita.cl --form-factor=desktop --view
```

Registrar aquí los scores Performance / Accessibility / Best Practices / SEO tras el primer deploy.
