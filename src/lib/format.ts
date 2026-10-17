import { ui, type Lang, type L } from '../i18n/ui';

/** Agrupa medidas repetidas: ["20 x 60 cm" x3] → "3 × 20 x 60 cm". */
export function sizesLine(sizes: string[] = []): string[] {
  if (sizes.length === 0) return [];
  if (sizes.length > 1 && sizes.every((s) => s === sizes[0])) return [`${sizes.length} × ${sizes[0]}`];
  return sizes;
}

export function workLines(
  lang: Lang,
  w: { technique?: L; sizes?: string[]; format?: 'triptych' | 'diptych' },
): string[] {
  const t = ui[lang];
  return [
    ...(w.technique ? [w.technique[lang]] : []),
    ...(w.format ? [w.format === 'triptych' ? t.triptych : t.diptych] : []),
    ...sizesLine(w.sizes),
  ];
}
