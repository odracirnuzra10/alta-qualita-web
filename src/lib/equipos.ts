import equipos from '../data/equipos.json';
import { SITE } from './site';

export type Equipo = (typeof equipos)[number];

export function getEquipos(): Equipo[] {
  return equipos as Equipo[];
}

export type Disponibilidad = 'inmediata' | 'pedido';

export function isStock(e: Pick<Equipo, 'disponibilidad'>): boolean {
  return e.disponibilidad === 'inmediata';
}

/** Stock en Chile primero, a pedido después. Respeta el orden del JSON dentro de cada grupo. */
export function getEquiposPorDisponibilidad() {
  const todos = getEquipos();
  const stock = todos.filter(isStock);
  const pedido = todos.filter((e) => !isStock(e));
  return { stock, pedido };
}

export const PLAZO_PEDIDO_DIAS = 30;

export const FAQ_ENTREGA = {
  q: '¿Cuánto demora la entrega?',
  a: `Los equipos marcados con Entrega inmediata están en stock en Chile. El resto se importa a pedido, con un plazo estimado de ${PLAZO_PEDIDO_DIAS} días.`,
};

export const FAQ_CERTIFICADO = {
  q: '¿La compra incluye certificado de uso?',
  a: SITE.certificadoUso.resumen + ' Lo emiten las clínicas Método Hebe (estética corporal) y Protocolo Lumina (estética facial), operadas por el mismo grupo que fundó Alta Qualità.',
};

export function equipoHref(slug: string): string {
  if (slug === 'skinwave-max') return '/skinwave-max';
  if (slug === 'endojiwoo') return '/endojiwoo';
  return `/equipos/${slug}`;
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

export function hasPrice(neto: number | null | undefined): neto is number {
  return typeof neto === 'number' && Number.isFinite(neto) && neto > 0;
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

export function pricedEquipos(): Equipo[] {
  return getEquipos().filter((e) => hasPrice(e.priceNeto));
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
