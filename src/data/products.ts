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
  priceLabel?: string;
  priceUnit?: string;
  badge: string;
  hero: string;
  gallery: string[];
  detailGallery: string[];
  description: string;
  longDescription: string;
  applications: string;
  specs: [string, string][];
  options?: ProductOption[];
  notesPrompt?: string;
};

export type ProductOptionValue = {
  id: string;
  sku: string;
  label: string;
  price: number;
  quoteOnly?: boolean;
  description?: string;
  requiresNotes?: boolean;
  maxCharacters?: number;
};

export type ProductOption = {
  id: string;
  label: string;
  helper?: string;
  values: ProductOptionValue[];
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
  {
    slug: 'copper-type-characters', model: 'Copper Type Characters', name: 'Copper Type Characters', type: 'Ribbon machine part', category: 'ribbon-machine-parts', parentCategory: 'ribbon-consumables', subcategory: 'machine part', useCategory: 'ribbon-standalone', price: 0.3, priceLabel: 'From $0.30', priceUnit: 'USD / piece', badge: 'Movable type',
    hero: '/assets/products/copper-type-characters/hero.png',
    gallery: Array.from({ length: 6 }, (_, index) => `/assets/products/copper-type-characters/${index === 0 ? 'hero' : `main-${index + 1}`}.png`),
    detailGallery: Array.from({ length: 7 }, (_, index) => `/assets/products/copper-type-characters/detail-${index + 1}.png`),
    description: 'Movable copper type characters for ribbon coding machines. Select the character size and tell us how many 0–9, A–Z and common symbols you need.',
    longDescription: 'Choose the 2*3 or 2*4 copper type character size for your ribbon coding machine. The customized option is quoted according to the requested character mix. Add quantities for numbers, letters, dot, slash and blank spaces in the notes before adding the set to your quote list.',
    applications: 'DY-8 · HP-241B · Ribbon coding machines',
    specs: [['Available sizes', '2*3 · 2*4'], ['Standard price', '$0.30 / piece'], ['Character range', '0–9 · A–Z · . · / · blank space'], ['Custom option', 'Quote on request']],
    notesPrompt: 'List the quantity needed for each character, for example: 0×10, 1×10, A×4, Z×2, .×2, /×2, blank×4.',
    options: [{ id: 'character-size', label: 'Character SKU', helper: 'Select the copper character size. Price is per piece.', values: [{ id: '2x3', sku: '2*3', label: '2 × 3 mm character', price: 0.3 }, { id: '2x4', sku: '2*4', label: '2 × 4 mm character', price: 0.3 }, { id: 'customized', sku: 'CUSTOMIZED', label: 'Customized character', price: 0, quoteOnly: true, requiresNotes: true, description: 'Send the required letters, numbers and symbols for a direct quotation.' }] }],
  },
  {
    slug: 'copper-type-character-box', model: 'Copper Type Character Box', name: 'Copper Type Character Box', type: 'Ribbon machine part', category: 'ribbon-machine-parts', parentCategory: 'ribbon-consumables', subcategory: 'machine part', useCategory: 'ribbon-standalone', price: 25, priceLabel: 'From $25.00', priceUnit: 'USD / box', badge: 'Ready character sets',
    hero: '/assets/products/copper-type-box/hero.png',
    gallery: Array.from({ length: 6 }, (_, index) => `/assets/products/copper-type-box/${index === 0 ? 'hero' : `main-${index + 1}`}.png`),
    detailGallery: Array.from({ length: 8 }, (_, index) => `/assets/products/copper-type-box/detail-${index + 1}.png`),
    description: 'Ready-to-use copper character boxes for ribbon coding machines, supplied with brass characters, holder tools and layouts for English, numbers or custom combinations.',
    longDescription: 'Choose a standard character box for common date and batch coding, or request a customized box with the letters, numbers and symbols your packaging line needs. The organized product images show the included accessories, character layouts, compatible coding machines and the pure copper type construction.',
    applications: 'DY-8 · HP-241B · HP-30 · DY-6 · Semi-automatic and automatic ribbon coders',
    specs: [['Standard English + numbers', '74-character layout · $25'], ['Numeric box', '72-character layout · $25'], ['English + numbers', '120-character layout · $40'], ['Customized box', 'Up to 74 characters · Quote on request'], ['Included accessories', 'Metal stamp holder · Hex key · Tweezers']],
    notesPrompt: 'For a custom box, list your letters, numbers and symbols with quantities, for example: A×5, 0×10, /×2, blank×3. Add total: 74 if the box uses all 74 positions.',
    options: [{ id: 'box-sku', label: 'Box SKU', helper: 'Choose a standard box or request a custom character mix.', values: [{ id: 'en-num-74', sku: 'EN-NUM-74', label: 'English + numbers · 74 characters', price: 25, description: 'Standard layout based on the supplied contents reference.' }, { id: 'numeric-72', sku: 'NUM-72', label: 'Pure numeric · 72 characters', price: 25, description: 'Numeric box for 0–9.' }, { id: 'en-num-120', sku: 'EN-NUM-120', label: 'English + numbers · 120 characters', price: 40, description: 'Larger English and number set.' }, { id: 'custom-74', sku: 'CUSTOM-74', label: 'Customized · up to 74 characters', price: 0, quoteOnly: true, requiresNotes: true, maxCharacters: 74, description: 'Choose your own letters, numbers and symbols. Maximum 74 pieces.' }] }],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
