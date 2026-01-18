/**
 * Public asset helper for Vite apps deployed under a sub-path (e.g. GitHub Pages).
 *
 * Put assets in `/public` (e.g. `/public/images/...`) and reference them via:
 *   assetUrl('images/logo-square.png')
 *
 * This works on localhost and on GitHub Pages when `base` is set in `vite.config.ts`.
 */
export function assetUrl(path: string) {
  const clean = path.replace(/^\/+/, "");
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${clean}`;
}
