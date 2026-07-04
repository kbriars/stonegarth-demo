import type { ImageMetadata } from "astro";

/**
 * Resolves an image by basename from src/assets/images/, preferring real
 * photos over the bundled SVG placeholders. Dropping e.g. `hero.jpg` into
 * the folder automatically replaces `hero.svg`, no code changes needed.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/*.{jpg,jpeg,png,webp,svg}",
  { eager: true },
);

const EXTENSION_PRIORITY = ["jpg", "jpeg", "png", "webp", "svg"];

export function siteImage(name: string): ImageMetadata {
  for (const ext of EXTENSION_PRIORITY) {
    const match = files[`../assets/images/${name}.${ext}`];
    if (match) return match.default;
  }
  throw new Error(
    `No image named "${name}" in src/assets/images/, expected ${name}.jpg (or a ${name}.svg placeholder)`,
  );
}
