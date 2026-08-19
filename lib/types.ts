export type PhotoCategory = "eventos" | "marcas" | "books";

export interface Photo {
  id: string;
  src: string;
  alt: string;
  category: PhotoCategory;
  tags: string[];
  featured: boolean;
  orientation: "portrait" | "landscape" | "square";
}
