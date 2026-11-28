import { readFileSync } from 'node:fs';
const rules = readFileSync('public/_redirects', 'utf8');

const links = new Map(rules.trim().split(/\r?\n/).map(line => {
  const [shortPath, productPath] = line.split(/\s+/);
  return [productPath, shortPath] as const;
}));

export function sharePath(product: { slug: string }) {
  const path = `/products/${product.slug}/`;
  return links.get(path) ?? path;
}
