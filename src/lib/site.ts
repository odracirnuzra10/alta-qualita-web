export const SITE = {
  name: 'Alta Qualità',
  legalName: 'ALTA QUALITA LIMITADA',
  rut: '77.838.377-2',
  domain: 'https://alta-qualita.cl',
  locale: 'es-CL',
  tagline: 'Equipos de estética profesional de origen coreano',
  description:
    'Alta Qualità es una importadora chilena de equipos de estética profesional de origen coreano. Vende a clínicas estéticas, centros médico-estéticos y profesionales independientes en Chile. Showrooms en Vitacura, Concón y Los Ángeles.',
  email: 'ricardo@oacg.cl',
  phone: '+56965031299',
  whatsapp: '56965031299',
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
    instagram: null as string | null,
    linkedin: null as string | null,
    facebook: null as string | null,
  },
  ga4Id: null as string | null, // Por confirmar — G-XXXXXXXX
  author: {
    name: 'Ricardo Oyarzún',
    role: 'Fundador Método Hebe, Protocolo Lumina y Alta Qualità',
    credentials: '3 clínicas estéticas en Chile (Los Ángeles, Vitacura y Concón)',
  },
  trustBar: {
    garantiaMeses: '12',
    repuestos: 'REPUESTOS EN STOCK',
    soporteHoras: '48',
    capacitacion: 'CAPACITACIÓN INCLUIDA',
  },
  clineraOffer: {
    implementationFeeUsd: 450,
    implementationFeePromoUsd: 0,
    discountMonths: 3,
    discountPercent: 50,
    summary:
      'Implementación gratis (USD 450 → $0) y 3 meses con 50% de descuento',
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
