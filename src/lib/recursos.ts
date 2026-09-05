export type FAQItem = { q: string; a: string };

export type Guia = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  published: string;
  updated: string;
  relatedEquipos: string[];
  keywords: string[];
  faq: FAQItem[];
};

export const guias: Guia[] = [
  {
    slug: 'cuanto-cuesta-maquina-criolipolisis-chile-2026',
    title: '¿Cuánto cuesta una máquina de criolipólisis en Chile en 2026?',
    h1: '¿Cuánto cuesta una máquina de criolipólisis en Chile en 2026?',
    description:
      'Precios netos + IVA de equipos de criolipólisis en Chile 2026, qué comparar antes de comprar y cómo leer una cotización sin humo.',
    published: '2026-09-03',
    updated: '2026-09-03',
    relatedEquipos: ['criock', 'sculpt-dd', 'ized'],
    keywords: ['máquina de criolipólisis precio Chile', 'criolipólisis Chile 2026'],
    faq: [
      {
        q: '¿Cuánto cuesta una máquina de criolipólisis en Chile?',
        a: 'En el catálogo Alta Qualità 2026, el CrioCK tiene precio neto de $8.500.000 + IVA 19% (total $10.115.000). Otros equipos de contorno corporal van desde $4.500.000 neto. Siempre pide precio neto y total con IVA por separado.',
      },
      {
        q: '¿El precio de criolipólisis incluye IVA?',
        a: 'En Alta Qualità los precios publicados son netos. El IVA 19% se muestra aparte y el total con IVA queda visible. Nunca compares un neto de un proveedor con un bruto de otro.',
      },
      {
        q: '¿Qué más debo presupuestar además del equipo?',
        a: 'Instalación, capacitación, protocolos, garantía y stock de repuestos. Si un proveedor no detalla esos ítems, el precio “bajo” suele ser incompleto.',
      },
    ],
  },
  {
    slug: 'certificaciones-equipo-estetico-chile',
    title: '¿Qué certificaciones debe tener un equipo estético en Chile?',
    h1: '¿Qué certificaciones debe tener un equipo estético en Chile?',
    description:
      'Guía de MFDS, CE, ISO 13485 y registro ISP para equipos estéticos en Chile: qué significa cada una y cómo verificarlas.',
    published: '2026-09-03',
    updated: '2026-09-03',
    relatedEquipos: ['criock', 'endojiwoo', 'carboxck'],
    keywords: ['certificaciones equipo estético Chile', 'registro ISP equipos estéticos'],
    faq: [
      {
        q: '¿Qué es el registro ISP para equipos estéticos?',
        a: 'El Instituto de Salud Pública (ISP) de Chile regula dispositivos según su clasificación. Exige verificar si tu equipo requiere registro o notificación antes de usarlo clínicamente. Consulta siempre la fuente oficial del ISP.',
      },
      {
        q: '¿MFDS y CE son lo mismo?',
        a: 'No. MFDS es la autoridad sanitaria de Corea del Sur; CE es el marcado de conformidad europeo. Son certificaciones distintas y no se sustituyen entre sí.',
      },
      {
        q: '¿ISO 13485 garantiza que el equipo es seguro?',
        a: 'ISO 13485 certifica el sistema de gestión de calidad del fabricante de dispositivos médicos. Es un requisito de proceso, no un sustituto de registro sanitario local.',
      },
    ],
  },
  {
    slug: 'en-cuantos-meses-se-paga-maquina-estetica',
    title: '¿En cuántos meses se paga una máquina de estética?',
    h1: '¿En cuántos meses se paga una máquina de estética?',
    description:
      'Metodología para calcular el retorno de un equipo estético: precio de sesión, ocupación, costos y meses para cubrir la inversión.',
    published: '2026-09-03',
    updated: '2026-09-03',
    relatedEquipos: ['ized', 'criock', 'sculpt-dd'],
    keywords: ['en cuánto tiempo se paga una máquina de estética', 'ROI equipo estético'],
    faq: [
      {
        q: '¿Cómo se calcula el retorno de un equipo estético?',
        a: 'Meses ≈ inversión neta ÷ (precio de sesión × sesiones netas al mes). Debes restar insumos, comisiones y tiempo improductivo. Alta Qualità publica una calculadora con supuestos editables.',
      },
      {
        q: '¿Debo usar el precio neto o el total con IVA en el ROI?',
        a: 'Para flujo de caja usa el desembolso real (con IVA si no lo recuperas). Para margen operativo muchos usan neto. Sé consistente y declara el supuesto.',
      },
    ],
  },
  {
    slug: 'equipos-coreanos-vs-chinos-estetica',
    title: 'Equipos coreanos vs. chinos: qué cambia realmente',
    h1: 'Equipos coreanos vs. chinos: qué cambia realmente',
    description:
      'Comparación sobria entre equipos estéticos coreanos y chinos: regulatorio, repuestos, soporte y criterio de compra en Chile.',
    published: '2026-09-03',
    updated: '2026-09-03',
    relatedEquipos: ['ized', 'endojiwoo', 'carboxck'],
    keywords: ['equipos coreanos vs chinos estética', 'equipos estéticos coreanos Chile'],
    faq: [
      {
        q: '¿Los equipos coreanos son mejores que los chinos?',
        a: 'No hay una respuesta única. Lo que cambia en la práctica es trazabilidad regulatoria (MFDS), madurez de protocolos, disponibilidad de repuestos y calidad del soporte local. Evalúa ficha, no marketing.',
      },
      {
        q: '¿Alta Qualità vende equipos coreanos?',
        a: 'Sí. Alta Qualità importa equipos de estética profesional de origen coreano a Chile. El origen se declara en cada ficha.',
      },
    ],
  },
  {
    slug: 'doce-preguntas-antes-de-comprar-equipo-estetico',
    title: 'Doce preguntas que hacerle a un proveedor antes de firmar',
    h1: 'Doce preguntas que hacerle a un proveedor antes de firmar',
    description:
      'Lista de control B2B para comprar equipos estéticos en Chile: garantía, ISP, repuestos, capacitación, IVA y soporte.',
    published: '2026-09-03',
    updated: '2026-09-03',
    relatedEquipos: ['sculpt-dd', 'ized-pro', 'criock'],
    keywords: ['qué preguntar antes de comprar un equipo estético'],
    faq: [
      {
        q: '¿Qué debo preguntar antes de comprar un equipo estético?',
        a: 'Pregunta precio neto + IVA, números de certificación, plazo de garantía, stock de repuestos en Chile, horas de capacitación, SLA de soporte y qué pasa si el equipo falla en los primeros 90 días.',
      },
    ],
  },
  {
    slug: 'leasing-credito-contado-equipo-estetico-chile',
    title: 'Leasing, crédito o contado: cómo se financia un equipo estético en Chile',
    h1: 'Leasing, crédito o contado: cómo se financia un equipo estético en Chile',
    description:
      'Opciones de financiamiento para equipos estéticos en Chile: leasing, crédito y contado. Criterios sin cifras inventadas.',
    published: '2026-09-03',
    updated: '2026-09-03',
    relatedEquipos: ['ized-pro', 'criock', 'sculpt-dd-max'],
    keywords: ['leasing de equipos médicos Chile', 'financiamiento equipo estético'],
    faq: [
      {
        q: '¿Se puede hacer leasing de un equipo estético en Chile?',
        a: 'Sí, existen opciones de leasing y crédito para capital de trabajo médico-estético. Condiciones, tasas y requisitos se confirman con cada entidad; Alta Qualità orienta el proceso en la página de financiamiento.',
      },
    ],
  },
  {
    slug: 'que-pasa-cuando-equipo-falla-garantia-repuestos',
    title: 'Qué pasa cuando un equipo falla: garantía, repuestos y tiempos reales',
    h1: 'Qué pasa cuando un equipo falla: garantía, repuestos y tiempos reales',
    description:
      'Cómo evaluar garantía, repuestos en Chile y SLA de soporte antes de comprar un equipo estético profesional.',
    published: '2026-09-03',
    updated: '2026-09-03',
    relatedEquipos: ['ized', 'criock', 'endojiwoo'],
    keywords: ['garantía equipos estéticos Chile', 'repuestos equipos estética'],
    faq: [
      {
        q: '¿Qué debo exigir en la garantía de un equipo estético?',
        a: 'Plazo en meses, qué cubre (partes, mano de obra, desplazamiento), exclusiones, tiempo de primera respuesta y si hay equipo de respaldo. Si no está escrito, no existe.',
      },
    ],
  },
  {
    slug: 'parrilla-tratamientos-clinica-nueva-tres-equipos',
    title: 'Cómo armar la parrilla de tratamientos de una clínica nueva con tres equipos',
    h1: 'Cómo armar la parrilla de tratamientos de una clínica nueva con tres equipos',
    description:
      'Método para combinar tres equipos estéticos en una clínica nueva: corporal, facial y ticket medio, sin inventar protocolos.',
    published: '2026-09-03',
    updated: '2026-09-03',
    relatedEquipos: ['criock', 'endojiwoo', 'ized'],
    keywords: ['parrilla tratamientos clínica estética', 'equipos para clínica nueva'],
    faq: [
      {
        q: '¿Con cuántos equipos conviene abrir una clínica estética?',
        a: 'Depende del público y del local. Un esquema frecuente es combinar un equipo corporal de alto ticket, uno facial diferenciador y uno de volumen. La decisión debe basarse en demanda local, no en catálogo.',
      },
    ],
  },
  {
    slug: 'que-es-ized-ultrasonido-focalizado-chile',
    title: 'Qué es iZED: ultrasonido focalizado para contorno corporal en Chile',
    h1: 'Qué es iZED: ultrasonido focalizado para contorno corporal en Chile',
    description:
      'Guía B2B sobre iZED: qué es, cómo funciona el ultrasonido focalizado de 60 joules, diferencia con HIEMT y criolipólisis, precio en Chile y criterio de compra para clínicas.',
    published: '2026-09-05',
    updated: '2026-09-05',
    relatedEquipos: ['ized', 'ized-pro', 'sculpt-dd'],
    keywords: [
      'iZED',
      'ized',
      'máquina iZED Chile',
      'ultrasonido focalizado estética',
      'iZED precio Chile',
      'equipo iZED clínica',
    ],
    faq: [
      {
        q: '¿Qué es iZED?',
        a: 'iZED es un equipo de ultrasonido terapéutico focalizado de origen coreano para contorno corporal no invasivo. Según el fabricante (ized.es), actúa sobre adipocitos de la grasa subcutánea localizada con energía focalizada de 60 joules.',
      },
      {
        q: '¿Cuánto cuesta el iZED en Chile?',
        a: 'En Alta Qualità el iZED tiene precio neto de $7.500.000 + IVA 19% ($1.425.000). Total con IVA: $8.925.000. El iZED Pro figura en $14.500.000 neto.',
      },
      {
        q: '¿iZED es criolipólisis o electroestimulación?',
        a: 'No. En el portafolio del fabricante, iZED es ultrasonido focalizado. La criolipólisis y el HIEMT (p. ej. Sculpt-DD) son tecnologías distintas que una clínica puede combinar, pero no son el mismo equipo.',
      },
      {
        q: '¿Dónde comprar iZED en Chile?',
        a: 'Alta Qualità importa y comercializa iZED e iZED Pro en Chile para clínicas estéticas y centros médico-estéticos, con ficha, precio neto + IVA y soporte local.',
      },
    ],
  },
];

export function getGuia(slug: string): Guia | undefined {
  return guias.find((g) => g.slug === slug);
}
