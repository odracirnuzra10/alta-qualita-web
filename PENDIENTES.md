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
| Garantía — meses | Vacío |
| SLA soporte — horas | Vacío |
| Canales y horario de soporte | Vacío |
| Financiamiento (tasa, pie, plazo, partner) | Vacío |

### Equipos (los 8)
Specs técnicas, certificaciones con número, qué incluye la compra, ROI defaults, fotos reales, PDFs de ficha reales.  
**Ambigüedad iZed (frío −5/−11 °C):** sin publicar hasta ficha oficial.

### Clinera (oferta)
| Campo | Estado |
|---|---|
| Sucursales / canales del mes gratis | Vacío |
| Precio al mes siguiente | Vacío |
| Condiciones de renovación | Vacío |
| Plazo de implementación (días) | Vacío |

### Clinera reclamos
Google Business URL, LinkedIn, SLA/responsable Clinera, política de cancelación, testimonios reales autorizados.  
Revalidar claim fechado de “cero reclamos formales” ante SERNAC.

---

## SEO files (estado)

| Archivo | Estado |
|---|---|
| `robots.txt` | OK — Allow all + GPTBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot; Sitemap a `sitemap-index.xml` |
| `llms.txt` | OK — empresa, catálogo con precios, **enlaces a `/clinera`, `/clinera-reclamos` y `https://clinera.io`**, showrooms |
| Sitemap | Generado en build (`@astrojs/sitemap`) |
