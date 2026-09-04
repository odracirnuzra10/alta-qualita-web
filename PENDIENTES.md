# PENDIENTES — datos que el cliente debe entregar antes de publicar

Este archivo lista, página por página y campo por campo, todo lo que quedó en estado **«por confirmar»**.  
Regla del proyecto: **no inventar**. Cuando entregues el dato, edita `src/data/equipos.json` y/o `src/lib/site.ts`.

Última revisión del sitio: 2026-09-03.

---

## Global (`src/lib/site.ts`)

| Campo | Estado |
|---|---|
| Razón social / legalName | Vacío |
| Correo (`email`) | Vacío |
| Teléfono (`phone`) | Vacío |
| WhatsApp (`whatsapp`, formato internacional sin +) | Vacío |
| Dirección (calle, ciudad, región) | **Completado** — 3 showrooms |
| Showroom Vitacura | Los Abedules 3085 |
| Showroom Concón | Las Pelargonias 843, Oficina 1112 |
| Showroom Los Ángeles | Av. Gabriela Mistral 269 |

| Redes `sameAs` (Instagram, LinkedIn, Facebook) | Vacío |
| GA4 Measurement ID (`ga4Id`) | Vacío |
| Autor con nombre y credenciales | Vacío (queda “Equipo técnico Alta Qualità”) |
| Garantía — meses (`trustBar.garantiaMeses`) | Vacío |
| Soporte — horas SLA (`trustBar.soporteHoras`) | Vacío |
| Favicon / OG con fotografía real | Placeholder SVG |
| Google Search Console verification | Pendiente |
| Bing Webmaster verification | Pendiente |

---

## Todos los equipos (`src/data/equipos.json`)

Para **cada uno** de los 8 equipos faltan (salvo lo ya rellenado abajo):

### Campos de specs (tabla completa)
tecnología · aplicación · potencia · frecuencia/longitud de onda · rango de temperatura · número de aplicadores · tamaño de spot · duración de sesión · consumo eléctrico · dimensiones · peso · certificaciones (texto) · garantía

### Certificaciones (con número, no logo)
MFDS · CE · ISO 13485 · registro ISP Chile

### Qué incluye la compra
instalación · capacitación (horas) · protocolos · garantía · repuestos

### ROI defaults
precioSesion · sesionesMes

### Assets
- Fotografía real del equipo (reemplaza `<ProductPlaceholder />`)
- PDF de ficha técnica en `/public/fichas/[slug].pdf` (hoy hay placeholders)

### Ya rellenado (no tocar sin confirmación)
| Equipo | Campo | Valor |
|---|---|---|
| Todos | priceNeto | según tabla del brief |
| Todos | origen | Corea del Sur |
| iZed / iZed Pro | tecnologia | Electroestimulación muscular |
| iZed / iZed Pro | intro | párrafo contextual (ambigüedad frío iZed **sin resolver**) |
| EndoJiwoo | tecnologia / aplicacion / intro | microfibra láser · óvalo facial y papada |
| CarboxCk | tecnologia / intro | carboxiterapia CO₂ medicinal |
| Sculpt-DD, Sculpt-DD Max, CrioCK, KimiFace | intro | **vacío a propósito** |

### Ambigüedad crítica
- **iZed**: fuentes clínicas mencionan también criolipólisis con frío −5 °C a −11 °C y sesiones 35–60 min. **No publicado como spec.** Confirmar con ficha oficial antes de publicar temperaturas.

---

## Home `/`

| Campo | Estado |
|---|---|
| Specs hero: garantía meses | Vacío |
| Specs hero: soporte horas | Vacío |
| Foto / esquema real del hero | Placeholder FIG. 01 |

---

## `/financiamiento`

| Campo | Estado |
|---|---|
| Tasa referencial | Vacío |
| Pie mínimo | Vacío |
| Plazo máximo (meses) | Vacío |
| Partner financiero | Vacío |
| Requisitos documentales | Vacío |

---

## `/soporte-tecnico`

| Campo | Estado |
|---|---|
| Garantía meses | Vacío |
| SLA primera respuesta (horas) | Vacío |
| Canales de soporte | Vacío |
| Horario de atención | Vacío |
| Protocolo falla 90 días (documento) | Vacío |

---

## `/clinera`

| Campo | Estado |
|---|---|
| Nº clínicas/sucursales del mes gratis | Vacío |
| Canales incluidos en el plan | Vacío |
| Precio al mes siguiente | Vacío |
| Condiciones de renovación | Vacío |
| Plazo exacto de implementación (días) | Vacío |

---

## `/clinera-reclamos`

| Campo | Estado |
|---|---|
| URL perfil Google Business | Vacío |
| URL LinkedIn Clinera | Vacío |
| Canales / horario / SLA soporte Clinera | Vacío |
| Nombre del responsable de reclamos | Vacío |
| Correo de reclamos | Vacío (usa SITE.email cuando exista) |
| Plazo comprometido de respuesta | Vacío |
| Política de cancelación (doc) | Vacío |
| Plazo de baja / exportación de datos | Vacío |
| Testimonios reales autorizados | **Bloque vacío a propósito** — no inventar |

### Afirmación de “cero reclamos”
Redacción actual fechada al **3 de septiembre de 2026**.  
**Revalidar** contra SERNAC y canal interno antes de cada publicación mayor. Nunca dejarla como claim permanente sin fecha.

---

## `/nosotros`

| Campo | Estado |
|---|---|
| Razón social, RUT, correo, teléfono | Vacío |
| Showrooms (Vitacura, Concón, Los Ángeles) | **Completado** |

---

## `/contacto`

Depende de email, teléfono y WhatsApp globales.

---

## Formularios

Backend de envío (email, CRM, webhook): **no implementado** — hoy el submit valida en cliente y muestra confirmación local. Conectar antes del lanzamiento real de leads.

---

## Medición

| Ítem | Estado |
|---|---|
| GA4 ID | Vacío |
| Eventos cableados en front | Sí (`descarga_ficha_tecnica`, `agendar_demo`, `click_whatsapp`, `calculo_retorno`, `ver_comparador`, `lead_enviado`) — requieren GA4 ID |
| Search Console / Bing sitemap submit | Pendiente post-deploy |

---

## Cómo completar

1. Editar `src/lib/site.ts` (datos de empresa y trust bar).
2. Editar `src/data/equipos.json` (specs, certs, includes, ROI).
3. Subir PDFs a `public/fichas/{slug}.pdf`.
4. Reemplazar placeholders de imagen cuando existan fotos.
5. Regenerar build y redeploy.
