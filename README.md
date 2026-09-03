# Alta Qualità — alta-qualita.cl

Sitio estático (Astro + Tailwind) de la importadora chilena de equipos de estética profesional de origen coreano.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Salida en `dist/` (compatible con Vercel).

## Datos editables

- Precios y specs: `src/data/equipos.json`
- Empresa / WhatsApp / GA4 / trust bar: `src/lib/site.ts`
- Guías: `src/lib/recursos.ts` + `src/lib/guias-content.ts`
- Pendientes del cliente: `PENDIENTES.md`

## Reglas no negociables

No inventar specs, reseñas ni AggregateRating. Precios siempre neto + IVA. Origen coreano declarado. Placeholders visibles cuando falte el dato.
