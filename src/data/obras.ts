import type { L } from '../i18n/ui';

/**
 * Catálogo de obras disponibles (sección "Obras").
 * - Sin precios: cada obra tiene el botón "Send request" que envía la consulta por email.
 * - `images`: rutas dentro de src/assets. La primera es la portada.
 * - `nueva: true` hace que la obra aparezca en "Nueva colección" y en la Home.
 * - `serie` se usa para elegir las obras "Similares".
 * El orden de la lista es el orden en el que se muestran.
 */
export interface Obra {
  slug: string;
  title: string;
  technique?: L;
  sizes?: string[];
  format?: 'triptych' | 'diptych';
  images: string[];
  nueva?: boolean;
  serie: 'hidro' | 'geometric' | 'abstract' | 'body' | 'pop';
}

const T = {
  acrilico: { es: 'Acrílico sobre lienzo.', en: 'Acrylic on canvas.' },
  acrilicoSpray: { es: 'Acrílico y spray sobre lienzo.', en: 'Acrylic and spray paint on canvas.' },
  hidro: {
    es: 'Acrílico sobre lienzo e hidroimpresión.',
    en: 'Acrylic on canvas and hydro printing.',
  },
  acrilicoSprayAcuarela: {
    es: 'Acrílico, spray y acuarela sobre lienzo.',
    en: 'Acrylic, spray paint and watercolour on canvas.',
  },
  spraySobreSpray: {
    es: 'Spray y acrílico sobre bote de spray.',
    en: 'Spray paint and acrylic on spray cans.',
  },
} satisfies Record<string, L>;

export const obras: Obra[] = [
  {
    slug: 'stitch-remedio',
    title: 'Stitch: Remedio',
    technique: T.acrilicoSprayAcuarela,
    sizes: ['100 x 120 cm'],
    images: ['obras/stitch-remedio.jpg'],
    serie: 'pop',
  },
  {
    slug: 'inefable',
    title: 'Inefable',
    technique: T.acrilico,
    sizes: ['100 x 120 cm'],
    images: ['obras/inefable.jpg'],
    serie: 'geometric',
  },
  {
    slug: 'body',
    title: 'Body',
    technique: T.acrilico,
    sizes: ['60 x 90 cm'],
    images: ['obras/body.jpg', 'obras/body-2.jpg'],
    serie: 'body',
  },
  {
    slug: 'my-fucking-ass',
    title: 'My Fucking Ass',
    technique: T.acrilico,
    sizes: ['60 x 90 cm'],
    images: ['obras/my-fucking-ass.jpg', 'obras/my-fucking-ass-2.jpg'],
    serie: 'body',
  },
  {
    slug: 'who-are-you',
    title: 'Who Are You',
    technique: { es: 'Acrílico sobre tabla de skate.', en: 'Acrylic on skateboard deck.' },
    images: ['obras/who-are-you.jpg', 'obras/who-are-you-2.jpg'],
    serie: 'pop',
  },
  {
    slug: 'jordan',
    title: 'Jordan',
    technique: T.acrilico,
    sizes: ['60 x 80 cm'],
    images: ['obras/jordan.jpg'],
    serie: 'pop',
  },
  {
    slug: '624',
    title: '624',
    technique: T.acrilico,
    sizes: ['30 x 30 cm'],
    images: ['obras/624.jpg', 'obras/624-2.jpg'],
    serie: 'pop',
  },
  {
    slug: '625',
    title: '625',
    technique: T.acrilico,
    sizes: ['30 x 30 cm'],
    images: ['obras/625.jpg', 'obras/625-2.jpg'],
    serie: 'pop',
  },
  {
    slug: '626',
    title: '626',
    technique: T.acrilico,
    sizes: ['30 x 30 cm'],
    images: ['obras/626.jpg', 'obras/626-2.jpg'],
    serie: 'pop',
  },
  {
    slug: 'rebel-with-a-cause',
    title: 'Rebel With a Cause',
    technique: T.acrilicoSprayAcuarela,
    sizes: ['60 x 90 cm'],
    images: ['obras/rebel-with-a-cause.jpg'],
    serie: 'pop',
  },
  {
    slug: 'unicorn-riot',
    title: 'Unicorn Riot',
    technique: { es: 'Spray y acrílico sobre juguete.', en: 'Spray paint and acrylic on a toy.' },
    images: ['obras/unicorn-riot.jpg'],
    serie: 'pop',
  },
  {
    slug: 'broken-plaything',
    title: 'Broken Plaything',
    technique: { es: 'Acrílico y spray sobre tabla.', en: 'Acrylic and spray paint on board.' },
    sizes: ['40 x 60 cm'],
    images: ['obras/broken-plaything.jpg'],
    serie: 'pop',
  },
  {
    slug: 'moon',
    title: 'Moon',
    images: ['obras/moon.jpg'],
    serie: 'body',
  },
  {
    slug: 'icon-unmasked',
    title: 'Icon Unmasked',
    technique: T.spraySobreSpray,
    images: ['obras/icon-unmasked.jpg'],
    serie: 'pop',
  },
  {
    slug: 'my-fucking-art',
    title: 'My Fucking Art',
    sizes: ['120 x 120 cm'],
    images: ['obras/my-fucking-art.jpg'],
    serie: 'abstract',
  },
  {
    slug: 'arrecife',
    title: 'Arrecife',
    technique: T.hidro,
    sizes: ['100 x 100 cm'],
    images: ['obras/arrecife.jpg'],
    nueva: true,
    serie: 'hidro',
  },
  {
    slug: 'wine',
    title: 'Wine',
    technique: T.hidro,
    sizes: ['60 x 90 cm'],
    images: ['obras/wine.jpg'],
    nueva: true,
    serie: 'hidro',
  },
  {
    slug: 'magma',
    title: 'Magma',
    technique: T.hidro,
    sizes: ['60 x 90 cm'],
    images: ['obras/magma.jpg'],
    nueva: true,
    serie: 'hidro',
  },
  {
    slug: 'focus',
    title: 'Focus',
    technique: T.acrilicoSpray,
    sizes: ['20 x 60 cm', '20 x 60 cm', '20 x 60 cm'],
    format: 'triptych',
    images: ['obras/focus.jpg'],
    serie: 'abstract',
  },
  {
    slug: 'golden-women',
    title: 'Golden Women',
    technique: T.acrilico,
    sizes: ['60 x 90 cm'],
    images: ['obras/golden-women.jpg', 'obras/golden-women-2.jpg'],
    serie: 'body',
  },
  {
    slug: 'gate-of-the-universe',
    title: 'Gate of the Universe',
    technique: T.acrilico,
    sizes: ['30 x 40 cm'],
    images: ['obras/gate-of-the-universe.jpg'],
    serie: 'geometric',
  },
  {
    slug: 'line-i',
    title: 'Line I',
    technique: T.acrilicoSpray,
    sizes: ['120 x 120 cm'],
    images: ['obras/line-i.jpg'],
    serie: 'geometric',
  },
  {
    slug: 'line-ii',
    title: 'Line II',
    technique: T.acrilicoSpray,
    sizes: ['120 x 120 cm'],
    images: ['obras/line-ii.jpg'],
    serie: 'geometric',
  },
  {
    slug: 'fire',
    title: 'Fire',
    technique: T.hidro,
    sizes: ['100 x 50 cm'],
    images: ['obras/fire.jpg'],
    nueva: true,
    serie: 'hidro',
  },
  {
    slug: 'ecos-del-desierto',
    title: 'Ecos del Desierto',
    technique: T.hidro,
    sizes: ['100 x 50 cm'],
    images: ['obras/ecos-del-desierto.jpg'],
    nueva: true,
    serie: 'hidro',
  },
  {
    slug: 'huellas-en-la-tierra',
    title: 'Huellas en la Tierra',
    technique: T.hidro,
    sizes: ['100 x 100 cm'],
    images: ['obras/huellas-en-la-tierra.jpg'],
    nueva: true,
    serie: 'hidro',
  },
  {
    slug: 'sombras-liquidas',
    title: 'Sombras Líquidas',
    technique: T.hidro,
    sizes: ['60 x 90 cm'],
    images: ['obras/sombras-liquidas.jpg'],
    nueva: true,
    serie: 'hidro',
  },
  {
    slug: 'fusion-flow',
    title: 'Fusion Flow',
    technique: T.hidro,
    sizes: ['90 x 60 cm', '90 x 60 cm'],
    format: 'diptych',
    images: ['obras/fusion-flow.jpg', 'obras/fusion-flow-2.jpg'],
    nueva: true,
    serie: 'hidro',
  },
  {
    slug: 'fluid-darkness',
    title: 'Fluid Darkness',
    technique: T.hidro,
    sizes: ['100 x 100 cm'],
    images: ['obras/fluid-darkness.jpg'],
    nueva: true,
    serie: 'hidro',
  },
  {
    slug: 'electric-bloom',
    title: 'Electric Bloom',
    technique: T.acrilicoSpray,
    sizes: ['120 x 120 cm'],
    images: ['obras/electric-bloom.jpg'],
    serie: 'geometric',
  },
  {
    slug: 'fulgor-rosado',
    title: 'Fulgor Rosado',
    technique: T.acrilico,
    sizes: ['60 x 90 cm'],
    images: ['obras/fulgor-rosado.jpg'],
    serie: 'geometric',
  },
  {
    slug: 'fragmented-horizon',
    title: 'Fragmented Horizon',
    technique: T.acrilico,
    sizes: ['90 x 60 cm'],
    images: ['obras/fragmented-horizon.jpg'],
    serie: 'geometric',
  },
  {
    slug: 'bloom',
    title: 'Bloom',
    technique: T.acrilico,
    sizes: ['100 x 100 cm'],
    images: ['obras/bloom.jpg'],
    serie: 'abstract',
  },
  {
    slug: 'sunset',
    title: 'Sunset',
    technique: T.acrilico,
    sizes: ['120 x 100 cm'],
    images: ['obras/sunset.jpg'],
    serie: 'geometric',
  },
  {
    slug: 'storm-of-colors',
    title: 'Storm of Colors',
    technique: T.acrilico,
    sizes: ['20 x 60 cm', '20 x 60 cm', '20 x 60 cm'],
    format: 'triptych',
    images: ['obras/storm-of-colors.jpg', 'obras/storm-of-colors-2.jpg'],
    serie: 'abstract',
  },
  {
    slug: 'funky-energy',
    title: 'Funky Energy',
    technique: T.acrilicoSpray,
    sizes: ['50 x 40 cm', '50 x 40 cm'],
    format: 'diptych',
    images: ['obras/funky-energy.jpg'],
    serie: 'abstract',
  },
  {
    slug: 'terrae',
    title: 'Terrae',
    technique: T.acrilico,
    sizes: ['100 x 100 cm'],
    images: ['obras/terrae.jpg'],
    serie: 'abstract',
  },
  {
    slug: 'phases-of-stillness',
    title: 'Phases of Stillness',
    technique: T.acrilico,
    sizes: ['30 x 30 cm'],
    images: ['obras/phases-of-stillness.jpg'],
    serie: 'body',
  },
  {
    slug: 'icon-unmasked-2-0',
    title: 'Icon Unmasked 2.0',
    technique: T.spraySobreSpray,
    images: ['obras/icon-unmasked-2-0.jpg'],
    serie: 'pop',
  },
  {
    slug: '94',
    title: '94',
    images: ['obras/94.jpg'],
    serie: 'pop',
  },
];

/** Tres obras parecidas: primero de la misma serie (empezando por las siguientes), luego el resto. */
export function similares(obra: Obra, count = 3): Obra[] {
  const i = obras.indexOf(obra);
  const rotated = [...obras.slice(i + 1), ...obras.slice(0, i)];
  const same = rotated.filter((o) => o.serie === obra.serie);
  const others = rotated.filter((o) => o.serie !== obra.serie);
  return [...same, ...others].slice(0, count);
}
