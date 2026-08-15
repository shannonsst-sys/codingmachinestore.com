export type Product = {
  slug: string;
  model: string;
  name: string;
  type: string;
  category: string;
  parentCategory: string;
  subcategory: string;
  useCategory: string;
  price: number;
  badge: string;
  hero: string;
  gallery: string[];
  detailGallery: string[];
  description: string;
  longDescription: string;
  applications: string;
  specs: [string, string][];
};

export const products: Product[] = [
  {
    slug: 'dy-8', model: 'DY-8', name: 'Hand-Operated Hot Ribbon Coding Machine', type: 'Manual hot ribbon coder', category: 'ribbon-coding-machines', parentCategory: 'ribbon-coding-machines', subcategory: 'ribbon', useCategory: 'ribbon-standalone', price: 40, badge: 'Entry point',
    hero: '/assets/products/dy-8/hero.png',
    gallery: ['/assets/products/dy-8/hero.png', '/assets/products/dy-8/side-1.jpeg', '/assets/products/dy-8/side-2.jpeg', '/assets/products/dy-8/side-3.jpeg', '/assets/products/dy-8/detail-1.png', '/assets/products/dy-8/detail-2.png'],
    detailGallery: Array.from({ length: 9 }, (_, index) => `/assets/products/dy-8/details-gallery/${index + 1}.png`),
    description: 'A compact hot ribbon coder for flexible packaging, including plastic film bags, laminated pouches and aluminium-plastic composite packaging.',
    longDescription: 'The DY-8 uses hot-stamping ribbon instead of liquid ink to create clean, practical marks on soft packaging. Its hand-operated format is easy to place near a packing station and is particularly suited to food, pharmaceutical and hygiene-sensitive applications.',
    applications: 'Food packaging · Pharmaceutical packaging · Plastic films · Laminated pouches',
    specs: [['Coding speed', '1–90 prints/min'], ['Power supply', '220 V / 50 Hz'], ['Power consumption', '60 W'], ['Ribbon width', '25–35 mm'], ['Net weight', '2.6 kg'], ['Dimensions', '286 × 263 × 196 mm']],
  },
  {
    slug: 'hp-241b', model: 'HP-241B', name: 'Electric Hot Ribbon Coding Machine', type: 'Electric hot ribbon coder', category: 'ribbon-coding-machines', parentCategory: 'ribbon-coding-machines', subcategory: 'ribbon', useCategory: 'ribbon-standalone', price: 160, badge: 'Best value',
    hero: '/assets/products/hp-241b/hero.png',
    gallery: ['/assets/products/hp-241b/hero.png', '/assets/products/hp-241b/side-1.png', '/assets/products/hp-241b/side-2.png', '/assets/products/hp-241b/side-3.png', '/assets/products/hp-241b/detail-1.png', '/assets/products/hp-241b/detail-2.png'],
    detailGallery: Array.from({ length: 12 }, (_, index) => `/assets/products/hp-241b/details-gallery/${index + 1}.png`),
    description: 'An electric multi-row coder with movable copper type characters for foil, film, kraft paper, paper cards and similar materials.',
    longDescription: 'The HP-241B is designed for repeatable electric hot ribbon coding. Movable copper characters are easy to install and replace, while the special character-changing structure supports different work areas and packaging formats.',
    applications: 'Aluminium foil · Plastic film · Kraft paper · Paper cards',
    specs: [['Printing rows', '1–3 rows'], ['Printing speed', '20–120 prints/min'], ['Power supply', '220 V / 150 W'], ['Warm-up time', '5–10 min'], ['Ribbon width', '25–30 mm'], ['Net weight', 'Approx. 7.0 kg'], ['Dimensions', '25 × 22 × 33 cm'], ['Character size', '2 × 4 × 15 mm']],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
