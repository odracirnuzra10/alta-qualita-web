export type FAQItem = { q: string; a: string };

export type BlogPost = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  published: string;
  updated: string;
  keywords: string[];
  relatedEquipos: string[];
  relatedPosts: string[];
  faq: FAQItem[];
  /** Product URLs for ItemList schema (pillar) */
  productList?: { name: string; href: string }[];
};

export const BLOG_AUTHOR = {
  name: 'Ricardo Oyarzún',
  jobTitle: 'Fundador Método Hebe, Protocolo Lumina y Alta Qualità',
} as const;

export const posts: BlogPost[] = [
  {
    slug: 'que-maquinas-comprar-clinica-estetica',
    title: 'Qué máquinas comprar para una clínica estética en 2026',
    h1: 'Qué máquinas comprar para una clínica estética: las 4 que sí son rentables',
    description:
      'Las 4 máquinas que necesita una clínica estética para ser rentable: HIFU, criolipólisis, endolaser y analizador facial. Precios, ROI y cómo elegir en Chile.',
    published: '2026-09-05',
    updated: '2026-09-05',
    keywords: [
      'qué máquinas comprar para clínica estética',
      'máquinas para abrir un centro de estética',
      'aparatología estética rentable',
      'equipos estéticos para clínicas',
      'máquina hifu profesional',
      'máquina criolipólisis profesional',
      'máquina endolaser',
      'analizador facial profesional',
    ],
    relatedEquipos: ['skinwave-max', 'criock', 'endojiwoo', 'kimiface'],
    relatedPosts: ['endolaser-vs-hifu-que-comprar', 'rentabilidad-criolipolisis-centro-estetica'],
    productList: [
      { name: 'SkinWave Max', href: '/skinwave-max' },
      { name: 'CrioCK', href: '/equipos/criock' },
      { name: 'EndoJiwoo', href: '/endojiwoo' },
      { name: 'KimiFace', href: '/equipos/kimiface' },
    ],
    faq: [
      {
        q: '¿Cuál es la máquina más rentable para una clínica estética?',
        a: 'La criolipólisis y el HIFU son las máquinas más rentables por sesión para la mayoría de los centros, porque atienden los dos tratamientos con más demanda: grasa localizada y flacidez. El analizador facial tiene el retorno más rápido porque cuesta menos que un corporal de alto ticket y convierte evaluaciones en planes de tratamiento.',
      },
      {
        q: '¿Qué máquinas necesito para abrir un centro de estética?',
        a: 'Para abrir un centro de estética necesitas como mínimo un analizador facial para diagnosticar y un equipo de HIFU para flacidez. Con el flujo del primer año sumas criolipólisis para la línea corporal y, si tienes profesional de la salud, un endolaser para tratamientos de alto ticket.',
      },
      {
        q: '¿Cuánto cuesta una máquina de HIFU profesional en Chile?',
        a: 'Una máquina de HIFU profesional en Chile cuesta $4.500.000 neto + IVA en Alta Qualità (SkinWave Max), con cartuchos, capacitación y servicio técnico local. Los equipos de marketplace cuestan menos pero no tienen respaldo ni grado clínico.',
      },
      {
        q: '¿Necesito ser profesional de la salud para operar estas máquinas?',
        a: 'El endolaser requiere profesional de la salud porque actúa bajo la piel. HIFU, criolipólisis y analizador facial, en la práctica de nuestras clínicas, los opera una esteticista capacitada. Confirma siempre la normativa vigente y la política de venta antes de firmar.',
      },
      {
        q: '¿Las máquinas incluyen capacitación y servicio técnico?',
        a: 'Sí. Todos los equipos de Alta Qualità incluyen capacitación de uso y protocolos, garantía de 12 meses y servicio técnico con primera respuesta en 48 horas. Nunca compres un equipo estético sin estas dos condiciones por escrito.',
      },
      {
        q: '¿Cómo cotizo una máquina para mi clínica?',
        a: 'Escríbenos por WhatsApp (+56 9 6503 1299) o agenda demo en /contacto. Tenemos showrooms en Vitacura, Concón y Los Ángeles. Te decimos qué máquina conviene según tu etapa, precio neto + IVA, financiamiento y tiempo de entrega.',
      },
    ],
  },
  {
    slug: 'endolaser-vs-hifu-que-comprar',
    title: 'Endolaser vs HIFU: qué máquina comprar para tu clínica',
    h1: 'Endolaser vs HIFU: qué máquina comprar primero para tu clínica',
    description:
      'Endolaser o HIFU: diferencias reales de tecnología, ticket por sesión, inversión y retorno para clínicas estéticas en Chile. Comparativa con precios netos.',
    published: '2026-09-05',
    updated: '2026-09-05',
    keywords: [
      'endolaser vs hifu',
      'máquina endolaser',
      'máquina hifu profesional',
      'endolaser precio máquina',
      'hifu equipo precio',
      'diferencia endolaser y hifu',
    ],
    relatedEquipos: ['endojiwoo', 'skinwave-max', 'kimiface'],
    relatedPosts: ['que-maquinas-comprar-clinica-estetica', 'rentabilidad-criolipolisis-centro-estetica'],
    faq: [
      {
        q: '¿Qué es mejor, endolaser o HIFU?',
        a: 'Ninguno es mejor en abstracto. El HIFU es mejor para flacidez facial leve a moderada sin invasión y con menor inversión. El endolaser es mejor para remodelación facial y corporal con resultados en una sesión y ticket alto. Una clínica madura usa los dos.',
      },
      {
        q: '¿Cuánto cuesta una máquina de endolaser en Chile?',
        a: 'El endolaser EndoJiwoo cuesta desde $7.200.000 neto + IVA en Alta Qualità, con tres longitudes de onda (635 / 1470 / 980 nm), garantía de 12 meses y capacitación incluida. La versión de mayor potencia suma $2.000.000 neto.',
      },
      {
        q: '¿Cuánto cuesta una máquina de HIFU profesional en Chile?',
        a: 'El HIFU SkinWave Max cuesta $4.500.000 neto + IVA, con cartuchos de 1,5 / 3,0 / 4,5 mm de 14.000 disparos, garantía de 12 meses y repuestos en Chile.',
      },
      {
        q: '¿Puede una esteticista operar un endolaser?',
        a: 'No. El endolaser introduce una fibra bajo la piel y requiere profesional de la salud. El HIFU, en la práctica de nuestras clínicas, lo opera una esteticista capacitada. Confirma la normativa vigente.',
      },
      {
        q: '¿En cuánto tiempo se paga cada máquina?',
        a: 'El HIFU se paga en unos 3 meses con 8 sesiones mensuales a $250.000 (ticket referencial de mercado). El endolaser se paga en 2 a 4 meses con 4 procedimientos mensuales a $600.000. Calcula con tus propios precios en la calculadora de retorno.',
      },
    ],
  },
  {
    slug: 'rentabilidad-criolipolisis-centro-estetica',
    title: 'Rentabilidad de una máquina de criolipólisis en Chile (2026)',
    h1: 'Cuánto gana un centro de estética con una máquina de criolipólisis',
    description:
      'Cuánto gana un centro de estética con una máquina de criolipólisis: ticket por zona, sesiones al mes, consumibles y meses de retorno. Con precio real neto + IVA.',
    published: '2026-09-05',
    updated: '2026-09-05',
    keywords: [
      'criolipólisis rentabilidad centro estética',
      'máquina criolipólisis profesional',
      'equipo criolipólisis precio',
      'comprar criolipólisis chile',
      'membranas criolipólisis precio',
      'criolipólisis 360 máquina',
    ],
    relatedEquipos: ['criock', 'ized', 'sculpt-dd'],
    relatedPosts: ['que-maquinas-comprar-clinica-estetica', 'endolaser-vs-hifu-que-comprar'],
    faq: [
      {
        q: '¿Cuánto cuesta una máquina de criolipólisis profesional en Chile?',
        a: 'La criolipólisis CrioCK cuesta $8.500.000 neto + IVA ($10.115.000 total) en Alta Qualità, con membranas y repuestos en stock en Chile, garantía de 12 meses y capacitación incluida.',
      },
      {
        q: '¿En cuántos meses se paga una máquina de criolipólisis?',
        a: 'Entre 4 y 9 meses según volumen. Con 10 pacientes al mes tratando dos zonas a $120.000 (ticket referencial), el retorno es de unos 4,5 meses. Con 5 pacientes, cerca de 9 meses. El precio de membrana se confirma al cotizar.',
      },
      {
        q: '¿Cuánto cobrar por una sesión de criolipólisis?',
        a: 'En Chile el rango profesional de mercado es de $80.000 a $180.000 por zona. Cobrar bajo $80.000 atrae pacientes de precio y alarga el retorno del equipo. Lo recomendable es vender planes de 2–3 zonas.',
      },
      {
        q: '¿Necesito profesional de la salud para operar criolipólisis?',
        a: 'En la práctica de nuestras clínicas, la criolipólisis la opera una esteticista capacitada. Confirma la normativa vigente. La capacitación está incluida con el equipo.',
      },
      {
        q: '¿Se puede financiar la máquina?',
        a: 'Sí. Revisa las opciones en financiamiento de equipos estéticos. Con retorno de 4–9 meses, la cuota se cubre con la utilidad del propio equipo desde el primer trimestre.',
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
