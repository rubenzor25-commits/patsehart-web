import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('../assets/**/*.jpg', { eager: true });

/** Devuelve la imagen de src/assets a partir de su ruta relativa, p. ej. "obras/wine.jpg". */
export function img(path: string): ImageMetadata {
  const mod = all[`../assets/${path}`];
  if (!mod) throw new Error(`Imagen no encontrada en src/assets: ${path}`);
  return mod.default;
}
