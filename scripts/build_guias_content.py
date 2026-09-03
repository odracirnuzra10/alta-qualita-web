#!/usr/bin/env python3
"""Build guias-content.ts from article HTML fragments."""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_DIR = Path(__file__).resolve().parent / 'articles'
OUT = ROOT / 'src/lib/guias-content.ts'

# Extra paragraphs to reach 1200+ words on early articles (applied only if not already in HTML)
EXPANSIONS = {}

def wc(html: str) -> int:
    text = re.sub(r'<[^>]+>', ' ', html)
    return len(re.sub(r'\s+', ' ', text).strip().split())

def load_article(slug: str) -> str:
    html_file = ARTICLES_DIR / f'{slug}.html'
    if not html_file.exists():
        raise FileNotFoundError(slug)
    body = html_file.read_text().strip()
    if slug in EXPANSIONS:
        body += '\n' + EXPANSIONS[slug].strip()
    return body

# Parse existing TS for articles 1-3
src = OUT.read_text() if OUT.exists() else ''
existing: dict[str, str] = {}
for m in re.finditer(r"'([^']+)': `\n(.*?)\n`\.trim\(\)", src, re.S):
    if not m.group(1).startswith('PLACEHOLDER'):
        existing[m.group(1)] = m.group(2)

SLUGS = [
    'cuanto-cuesta-maquina-criolipolisis-chile-2026',
    'certificaciones-equipo-estetico-chile',
    'en-cuantos-meses-se-paga-maquina-estetica',
    'equipos-coreanos-vs-chinos-estetica',
    'doce-preguntas-antes-de-comprar-equipo-estetico',
    'leasing-credito-contado-equipo-estetico-chile',
    'que-pasa-cuando-equipo-falla-garantia-repuestos',
    'parrilla-tratamientos-clinica-nueva-tres-equipos',
]

bodies: dict[str, str] = {}
for slug in SLUGS:
    bodies[slug] = load_article(slug)

lines = ['export const guiaBodies: Record<string, string> = {']
for i, slug in enumerate(SLUGS):
    body = bodies[slug]
    lines.append(f"  '{slug}': `")
    lines.append(body)
    lines.append('`.trim(),')
lines.append('};')
lines.append('')

OUT.write_text('\n'.join(lines) + '\n')

print('Written', OUT)
for slug in SLUGS:
    w = wc(bodies[slug])
    status = 'OK' if 1200 <= w <= 1800 else ('LOW' if w < 1200 else 'HIGH')
    print(f'  {slug}: {w} words [{status}]')