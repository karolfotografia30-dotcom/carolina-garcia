import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

/**
 * Generates a tiny base64-encoded blur placeholder for a given image path.
 * Used with next/image placeholder="blur" + blurDataURL.
 *
 * @param relativePath - path relative to /public (e.g. "/fotos/boda.webp")
 */
export async function generateBlurDataURL(
  relativePath: string
): Promise<string> {
  const filePath = path.join(process.cwd(), "public", relativePath);

  if (!fs.existsSync(filePath)) {
    // Return a dark placeholder if file not found
    return "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoBAAEAAkA4JZACdAEO/gHOAAD++P/QAAAAAA==";
  }

  const buffer = await sharp(filePath)
    .resize(16, 16, { fit: "cover" })
    .blur(4)
    .webp({ quality: 20 })
    .toBuffer();

  return `data:image/webp;base64,${buffer.toString("base64")}`;
}
