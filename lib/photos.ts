import fs from "node:fs";
import path from "node:path";
import type { Photo, PhotoCategory } from "./types";
import { PHOTO_OVERRIDES, EXCLUDED_FILES } from "./photos.meta";

const VALID_EXTENSIONS = /\.(webp|jpe?g|png)$/i;

const CATEGORY_KEYWORDS: Record<PhotoCategory, string[]> = {
  eventos: [
    "evento",
    "boda",
    "bodas",
    "xv",
    "quince",
    "quinceanera",
    "quinceañera",
    "quinceanos",
    "social",
    "fiesta",
    "novia",
    "novios",
    "compromiso",
    "cumpleanos",
    "cumpleaños",
    "cisne",
    "negro",
  ],
  marcas: [
    "marca",
    "brand",
    "campana",
    "campaña",
    "campaign",
    "producto",
    "comercial",
    "corporativo",
  ],
  books: [
    "book",
    "retrato",
    "editorial",
    "revista",
    "portrait",
    "sesion",
    "sesión",
    "moda",
    "estudio",
    "fashion",
    "modelo",
    "model",
    "fotografia",
    "fotografía",
    "naturaleza",
  ],
};

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, ""); // strip accents
}

function detectCategory(filename: string): PhotoCategory {
  const normalized = normalize(filename);
  for (const [category, keywords] of Object.entries(CATEGORY_KEYWORDS) as [
    PhotoCategory,
    string[]
  ][]) {
    if (keywords.some((kw) => normalized.includes(normalize(kw)))) {
      return category;
    }
  }
  return "books"; // safe fallback
}

function humanizeFilename(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\d+/g, "")
    .trim()
    .replace(/\s+/g, " ");
}

export function getPhotos(): Photo[] {
  const dir = path.join(process.cwd(), "public", "fotos");

  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => VALID_EXTENSIONS.test(f) && !EXCLUDED_FILES.has(f));

  return files.map((filename) => {
    const id = filename.replace(/\.[^.]+$/, "");
    const override = PHOTO_OVERRIDES[filename] ?? {};
    const humanName = humanizeFilename(filename);

    return {
      id,
      src: `/fotos/${filename}`,
      alt:
        override.alt ??
        `${humanName || "Fotografía"} — Carolina García Fotografía`,
      category: override.category ?? detectCategory(filename),
      tags: override.tags ?? [],
      featured: override.featured ?? false,
      orientation: override.orientation ?? "portrait",
    };
  });
}

export function getPhotosByCategory(
  category: PhotoCategory | "todos"
): Photo[] {
  const photos = getPhotos();
  return category === "todos"
    ? photos
    : photos.filter((p) => p.category === category);
}

export function getFeaturedPhoto(): Photo | undefined {
  const photos = getPhotos();
  return photos.find((p) => p.featured) ?? photos[0];
}
