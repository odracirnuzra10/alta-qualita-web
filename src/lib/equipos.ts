import equipos from '../data/equipos.json';
import { SITE } from './site';

export type Equipo = (typeof equipos)[number];

export function getEquipos(): Equipo[] {
  return equipos as Equipo[];
}

export function getEquipo(slug: string): Equipo | undefined {
  return getEquipos().find((e) => e.slug === slug);
}

export function formatCLP(value: number): string {
  return value.toLocaleString('es-CL', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });
}

export function calcIva(neto: number, rate = SITE.ivaRate) {
  const iva = Math.round(neto * rate);
  const total = neto + iva;
  return { neto, iva, total };
}

export function priceParts(neto: number) {
  const { iva, total } = calcIva(neto);
  return {
    netoLabel: `$${formatCLP(neto)} neto`,
    ivaLabel: `+ IVA $${formatCLP(iva)}`,
    totalLabel: `Total $${formatCLP(total)}`,
    neto,
    iva,
    total,
  };
}

export function displayValue(value: string | number | null | undefined): string | null {
  if (value === null || value === undefined || value === '') return null;
  return String(value);
}

export function whatsappUrl(message: string): string | null {
  if (!SITE.whatsapp) return null;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${SITE.domain}${clean === '/' ? '' : clean}`;
}
