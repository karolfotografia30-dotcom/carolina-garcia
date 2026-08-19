"use client";

import { cn } from "@/lib/utils";
import type { PhotoCategory } from "@/lib/types";

type FilterCategory = PhotoCategory | "todos";

interface GalleryFiltersProps {
  active: FilterCategory;
  onChange: (category: FilterCategory) => void;
}

const FILTERS: { value: FilterCategory; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "eventos", label: "Eventos" },
  { value: "marcas", label: "Marcas" },
  { value: "books", label: "Books" },
];

export default function GalleryFilters({
  active,
  onChange,
}: GalleryFiltersProps) {
  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3 mb-10"
      role="group"
      aria-label="Filtrar por categoría"
    >
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          id={`filter-${filter.value}`}
          onClick={() => onChange(filter.value)}
          aria-pressed={active === filter.value}
          className={cn(
            "filter-pill",
            active === filter.value
              ? "filter-pill-active"
              : "filter-pill-inactive"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
