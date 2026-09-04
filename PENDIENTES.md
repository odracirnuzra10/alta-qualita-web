# PENDIENTES — datos que el cliente debe entregar antes de publicar

Regla: **no inventar**. Editar `src/data/equipos.json` y/o `src/lib/site.ts`.

Última revisión: 2026-09-04.

---

## Completado

| Campo | Valor |
|---|---|
| Razón social | ALTA QUALITA LIMITADA |
| RUT | 77.838.377-2 |
| Correo | ricardo@oacg.cl |
| Teléfono / WhatsApp | +56965031299 |
| Showroom Vitacura | Los Abedules 3085 |
| Showroom Concón | Las Pelargonias 843, Oficina 1112 |
| Showroom Los Ángeles | Av. Gabriela Mistral 269 |
| Tipografía | Editorial clínico (Fraunces / Source Sans 3 / Source Code Pro) |
| Banner Clinera | Marca Clinera (logo + ink/mint/gradiente) |
| Garantía | 12 meses |
| SLA soporte | 48 horas |
| Oferta Clinera | Implementación gratis (USD 450 → $0) + 3 meses con 50% off |
| Fotos equipos | Adipolite, CorpoLift, SkinWave Max, iZed, CarboxCk (+ CorpoHera en disco, sin precio) |
| Logo Clinera | SVG oficial desde Drive |
| Nuevos equipos | Adipolite $4.000.000 · CorpoLift $11.000.000 · SkinWave Max $4.500.000 |

---

## Aún pendiente

### Medición y ops
| Campo | Estado |
|---|---|
| GA4 Measurement ID | Vacío |
| Google Search Console / Bing | Pendiente enviar sitemap |
| Backend de formularios (email/CRM) | Solo validación front |
| Redes `sameAs` (Instagram, LinkedIn, Facebook) | Vacío |

### Comercial / soporte AQ
| Campo | Estado |
|---|---|
| Canales y horario de soporte | Vacío |
| Financiamiento (tasa, pie, plazo, partner) | Vacío |

### Equipos (11 en catálogo)
Specs técnicas, certificaciones con número, qué incluye la compra (salvo garantía ya en 12 meses), ROI defaults, PDFs de ficha reales.  
Fotos pendientes: Sculpt-DD, Sculpt-DD Max, iZed Pro, CrioCK, KimiFace, EndoJiwoo.  
**CorpoHera:** foto lista en `/img/equipos/corpohera.webp` — falta precio neto para publicar.  
**Ambigüedad iZed (frío −5/−11 °C):** sin publicar hasta ficha oficial.

### Clinera (oferta)
| Campo | Estado |
|---|---|
| Sucursales / canales de la oferta | Vacío |
| Precio de lista post-oferta | Vacío |
| Condiciones de renovación | Vacío |
| Plazo de implementación (días) | Vacío |

### Clinera opiniones
Google Business URL, LinkedIn, SLA/responsable Clinera, política de cancelación, testimonios reales autorizados.  
Revalidar claim fechado ante SERNAC.

---

## SEO files (estado)

| Archivo | Estado |
|---|---|
| `robots.txt` | OK — Allow all + GPTBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot; Sitemap a `sitemap-index.xml` |
| `llms.txt` | OK — empresa, catálogo con precios, garantía/SLA, oferta Clinera, enlaces a `/clinera`, `/clinera-opiniones` y `https://clinera.io`, showrooms |
| Sitemap | Generado en build (`@astrojs/sitemap`) |
