export const SITE = {
  name: 'Alta Qualità',
  legalName: 'Alta Qualità', // Por confirmar: razón social exacta
  domain: 'https://alta-qualita.cl',
  locale: 'es-CL',
  tagline: 'Equipos de estética profesional de origen coreano',
  description:
    'Alta Qualità es una importadora chilena de equipos de estética profesional de origen coreano. Vende a clínicas estéticas, centros médico-estéticos y profesionales independientes en Chile. Showrooms en Vitacura, Concón y Los Ángeles.',
  email: null as string | null, // Por confirmar
  phone: null as string | null, // Por confirmar
  whatsapp: null as string | null, // Por confirmar — formato internacional sin +
  address: {
    street: 'Los Abedules 3085',
    city: 'Vitacura',
    region: 'Región Metropolitana',
    country: 'CL',
  },
  showrooms: [
    {
      city: 'Vitacura',
      region: 'Región Metropolitana',
      street: 'Los Abedules 3085',
      label: 'Showroom Vitacura',
    },
    {
      city: 'Concón',
      region: 'Región de Valparaíso',
      street: 'Las Pelargonias 843, Oficina 1112',
      label: 'Showroom Concón',
    },
    {
      city: 'Los Ángeles',
      region: 'Región del Biobío',
      street: 'Av. Gabriela Mistral 269',
      label: 'Showroom Los Ángeles',
    },
  ] as const,
  social: {
    // sameAs reales cuando existan
    instagram: null as string | null,
    linkedin: null as string | null,
    facebook: null as string | null,
  },
  ga4Id: null as string | null, // Por confirmar — G-XXXXXXXX
  author: {
    name: null as string | null, // Por confirmar
    role: 'Equipo técnico Alta Qualità',
    credentials: null as string | null,
  },
  trustBar: {
    garantiaMeses: null as string | null,
    repuestos: 'REPUESTOS EN STOCK',
    soporteHoras: null as string | null,
    capacitacion: 'CAPACITACIÓN INCLUIDA',
  },
  lastUpdated: '2026-09',
  ivaRate: 0.19,
} as const;

export type Showroom = (typeof SITE.showrooms)[number];

export const NAV_LINKS = [
  { href: '/equipos', label: 'Equipos' },
  { href: '/comparador', label: 'Comparador' },
  { href: '/financiamiento', label: 'Financiamiento' },
  { href: '/soporte-tecnico', label: 'Soporte' },
  { href: '/clinera', label: 'Clinera' },
  { href: '/recursos', label: 'Recursos' },
  { href: '/nosotros', label: 'Nosotros' },
] as const;

export const SPEC_LABELS: Record<string, string> = {
  tecnologia: 'Tecnología',
  aplicacion: 'Aplicación',
  potencia: 'Potencia',
  frecuencia: 'Frecuencia / longitud de onda',
  temperatura: 'Rango de temperatura',
  aplicadores: 'Número de aplicadores',
  spot: 'Tamaño de spot',
  duracionSesion: 'Duración de sesión',
  consumo: 'Consumo eléctrico',
  dimensiones: 'Dimensiones',
  peso: 'Peso',
  certificaciones: 'Certificaciones',
  origen: 'Origen',
  garantia: 'Garantía',
};
