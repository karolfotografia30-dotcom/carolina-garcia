import type { Photo } from "./types";

/**
 * Overrides manuales para archivos cuyo nombre no contiene palabras clave
 * suficientemente descriptivas (e.g. IDs numéricos de Instagram).
 * Solo se sobreescribe lo que se especifica; el resto se auto-detecta.
 */
export const PHOTO_OVERRIDES: Record<string, Partial<Photo>> = {
  // IDs numéricos de Instagram → clasificar manualmente
  "619467491_17936375202117348_8800862422272657926_n.jpg": {
    category: "eventos",
    alt: "Cobertura de evento social — Carolina García Fotografía",
    orientation: "portrait",
  },
  "658595171_17920704378317469_4715650126915815622_n.webp": {
    category: "books",
    alt: "Sesión editorial de moda — Carolina García Fotografía",
    orientation: "portrait",
  },
  "658970329_17920702899317469_55788804691975450_n.webp": {
    category: "books",
    alt: "Retrato editorial — Carolina García Fotografía",
    orientation: "portrait",
  },
  "660076512_17920703328317469_4558593171086298744_n.webp": {
    category: "books",
    alt: "Book fotográfico — Carolina García Fotografía",
    orientation: "portrait",
  },
  // Archivos genéricos
  "fotografia.webp": {
    category: "books",
    alt: "Fotografía artística — Carolina García Fotografía",
  },
  "naturaleza.webp": {
    category: "books",
    alt: "Fotografía de naturaleza — Carolina García Fotografía",
  },
  "naturaleza2.webp": {
    category: "books",
    alt: "Fotografía de naturaleza — Carolina García Fotografía",
  },
  // Foto principal del Hero
  "modelo3.webp": {
    featured: true,
    category: "books",
    alt: "Portafolio editorial — Carolina García Fotografía",
    orientation: "portrait",
  },
  // Retrato de Carolina (solo para sección About, no galería)
  // "fotografa.jpg" se excluye de la galería en photos.ts
};

/**
 * Archivos que no deben aparecer en la galería pública
 * (logo, retrato de Carolina, etc.)
 */
export const EXCLUDED_FILES = new Set([
  "carolinalogo.webp",
  "fotografa.jpg",
]);
