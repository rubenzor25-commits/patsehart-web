import type { L } from '../i18n/ui';

/** Obras vendidas (Works › Obras vendidas). */
export interface Vendida {
  slug: string;
  title: string;
  subtitle?: L;
  technique?: L;
  sizes: string[];
  image: string;
}

export const vendidas: Vendida[] = [
  { slug: 'body', title: 'Body', sizes: ['60 x 80 cm'], image: 'vendidas/body.jpg' },
  { slug: 'abstract-women', title: 'Abstract Women', sizes: ['50 x 70 cm'], image: 'vendidas/abstract-women.jpg' },
  {
    slug: 'moons',
    title: 'Moons',
    sizes: ['30 x 30 cm', '50 x 50 cm', '100 x 100 cm'],
    image: 'vendidas/moons.jpg',
  },
  { slug: 'golden-moons', title: 'Golden Moons', sizes: ['30 x 30 cm', '30 x 30 cm'], image: 'vendidas/golden-moons.jpg' },
  {
    slug: 'golden',
    title: 'Golden',
    technique: { es: 'Acrílico sobre lienzo.', en: 'Acrylic on canvas.' },
    sizes: ['60 x 90 cm'],
    image: 'vendidas/golden.jpg',
  },
  {
    slug: 'the-perfect-inspiration',
    title: 'The Perfect Inspiration',
    technique: { es: 'Técnica mixta.', en: 'Mixed media.' },
    sizes: ['60 x 80 cm'],
    image: 'vendidas/the-perfect-inspiration.jpg',
  },
  {
    slug: 'power-of-beautiful-i',
    title: 'Power of Beautiful I',
    subtitle: { es: 'The Feeling Hair', en: 'The Feeling Hair' },
    sizes: ['50 x 70 cm'],
    image: 'vendidas/power-of-beautiful-i.jpg',
  },
  {
    slug: 'power-of-beautiful-ii',
    title: 'Power of Beautiful II',
    subtitle: { es: 'The Feeling Women', en: 'The Feeling Women' },
    sizes: ['50 x 70 cm'],
    image: 'vendidas/power-of-beautiful-ii.jpg',
  },
  {
    slug: 'power-of-beautiful-iii',
    title: 'Power of Beautiful III',
    subtitle: { es: 'The Feeling Beauty', en: 'The Feeling Beauty' },
    sizes: ['50 x 70 cm'],
    image: 'vendidas/power-of-beautiful-iii.jpg',
  },
  {
    slug: 'space',
    title: 'Space',
    technique: { es: 'Tabla de skate.', en: 'Skateboard deck.' },
    sizes: [],
    image: 'vendidas/space.jpg',
  },
];

/** Exposiciones (Works › Exposiciones), de la más reciente a la más antigua. */
export interface Exposicion {
  id: string;
  place: L;
  title: string;
  text: L;
  image: string;
}

export const exposiciones: Exposicion[] = [
  {
    id: 'occo-art-gallery',
    place: { es: 'España', en: 'Spain' },
    title: 'OCCO Art Gallery',
    text: {
      es: 'Exposición ENIGMA de pintura, escultura, arte digital y gráfico. Del 8 al 24 de enero de 2026 en OCCO Art Gallery, Madrid.',
      en: 'ENIGMA exhibition of painting, sculpture, digital and graphic art. From 8 to 24 January 2026 at OCCO Art Gallery, Madrid.',
    },
    image: 'site/expo-occo.jpg',
  },
  {
    id: 'marquesinas-callao',
    place: { es: 'España', en: 'Spain' },
    title: 'Marquesinas y Callao, Madrid',
    text: {
      es: 'Marquesinas y cines Callao de Madrid. Reproducción de vídeos y fotos mostrando mis obras. Febrero y marzo de 2025.',
      en: 'Bus shelters and Callao cinemas, Madrid. Videos and photos showing my artworks on screen. February and March 2025.',
    },
    image: 'site/expo-callao.jpg',
  },
  {
    id: 'londres',
    place: { es: 'Londres', en: 'London' },
    title: 'Fluid Darkness',
    text: {
      es: 'Galería Its Liquid Group, Londres, noviembre y diciembre de 2024. Exposición de una obra.',
      en: 'Its Liquid Group gallery, London, November and December 2024. One artwork exhibited.',
    },
    image: 'site/expo-londres.jpg',
  },
  {
    id: 'badajoz',
    place: { es: 'España', en: 'Spain' },
    title: 'Wine · Magma',
    text: {
      es: 'Galería Laura Rastrollo, Badajoz, octubre de 2024. Exposición de cuatro obras.',
      en: 'Laura Rastrollo Gallery, Badajoz, October 2024. Four artworks exhibited.',
    },
    image: 'site/expo-badajoz.jpg',
  },
];

/** Clothes: vestidos y bolso pintados a mano. */
export interface Prenda {
  slug: string;
  title: string;
  kind: 'dress' | 'bag';
  size?: string;
  images: string[];
}

export const prendas: Prenda[] = [
  {
    slug: 'fluid-darkness-dress',
    title: 'Fluid Darkness',
    kind: 'dress',
    size: 'XS',
    images: ['clothes/fluid-darkness-dress.jpg', 'clothes/fluid-darkness-dress-2.jpg'],
  },
  {
    slug: 'wine-dress',
    title: 'Wine',
    kind: 'dress',
    images: ['clothes/wine-dress.jpg', 'clothes/wine-dress-2.jpg'],
  },
  {
    slug: 'paint-stain-bag',
    title: 'Paint Stain',
    kind: 'bag',
    images: ['clothes/paint-stain-bag.jpg'],
  },
];

export const prendaTexts = {
  dress: {
    label: { es: 'Dress', en: 'Dress' },
    text: {
      es: 'Cada vestido es una pieza única, creada como una extensión de una obra de arte. Diseñados con exclusividad, fusionan expresión artística y moda, convirtiendo cada prenda en una manifestación irrepetible de creatividad. No hay dos iguales, porque el arte, como la belleza, es único en cada detalle.',
      en: 'Each dress is a one-of-a-kind piece, created as an extension of an artwork. Designed exclusively, they merge artistic expression and fashion, turning every garment into an unrepeatable expression of creativity. No two are alike, because art, like beauty, is unique in every detail.',
    },
  },
  bag: {
    label: { es: 'Bolso', en: 'Bag' },
    text: {
      es: 'Cada bolso es una pieza irrepetible, concebida como una obra de arte portátil. Diseñados con esmero y exclusividad, fusionan la expresión artística con la funcionalidad, dando como resultado accesorios únicos que cuentan una historia propia. No existen dos iguales, porque el arte —como la autenticidad— se manifiesta en cada detalle.',
      en: 'Each bag is an unrepeatable piece, conceived as a portable work of art. Carefully and exclusively designed, they merge artistic expression with functionality, resulting in unique accessories that tell their own story. No two are alike, because art —like authenticity— shows in every detail.',
    },
  },
} satisfies Record<Prenda['kind'], { label: L; text: L }>;
