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
  relatedAccessories?: string[];
  videoUrl?: string;
  videoAspectRatio?: string;
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
  contents?: string;
  characterQuantities?: boolean;
};

export type ProductOption = {
  id: string;
  label: string;
  helper?: string;
  values: ProductOptionValue[];
};

export const products: Product[] = [
  {
    slug: 'dy-8', model: 'DY-8B', name: 'Manual Hot Ribbon Coding Machine', type: 'Manual hot ribbon coder', category: 'ribbon-coding-machines', parentCategory: 'ribbon-coding-machines', subcategory: 'ribbon', useCategory: 'ribbon-standalone', price: 47.28, badge: 'Entry point',
    hero: '/assets/products/dy-8/hero.png',
    gallery: ['/assets/products/dy-8/hero.png', '/assets/products/dy-8/side-1.jpeg', '/assets/products/dy-8/side-2.jpeg', '/assets/products/dy-8/side-3.jpeg', '/assets/products/dy-8/detail-1.png', '/assets/products/dy-8/detail-2.png', '/assets/products/dy-8/catalog-hero.png', '/assets/products/dy-8/catalog-detail-1.png'],
    detailGallery: [...Array.from({ length: 9 }, (_, index) => `/assets/products/dy-8/details-gallery/${index + 1}.png`), '/assets/products/print-samples/ribbon-colours.png', '/assets/products/print-samples/ribbon-sample-bag.png', '/assets/products/print-samples/ribbon-foil.png', '/assets/products/print-samples/ribbon-plastic.png', '/assets/products/print-samples/ribbon-film.png'],
    description: 'A compact manual hot ribbon coder for date and batch coding on flexible packaging, including plastic film bags, laminated pouches and aluminium-plastic composite packaging.',
    longDescription: 'The DY-8B uses hot-stamping ribbon instead of liquid ink to create clean, practical marks on soft packaging. Its hand-operated format is easy to place near a packing station and is particularly suited to food, pharmaceutical and hygiene-sensitive applications.',
    applications: 'Food packaging · Pharmaceutical packaging · Plastic films · Laminated pouches',
    specs: [['Printing speed', '1–80 prints/min'], ['Printing area', 'Three rows, max 3 × 35 mm, approx. 21 characters'], ['Type', 'Arabic numerals, Chinese and English'], ['Thermal printing ribbon', 'Max width 35 mm, standard 30 mm × 50 m'], ['Power supply', '220 V'], ['Heating tube', '100 W / 220 V'], ['Dimensions', '240 × 240 × 140 mm'], ['Net weight', '2.8 kg']],
    relatedAccessories: ['copper-type-characters', 'copper-type-character-box'],
    videoUrl: 'https://www.youtube.com/shorts/H68jSVME708',
    videoAspectRatio: '9 / 16',
  },
  {
    slug: 'hp-241b', model: 'HP-241B', name: 'Electric Hot Ribbon Coding Machine', type: 'Electric hot ribbon coder', category: 'ribbon-coding-machines', parentCategory: 'ribbon-coding-machines', subcategory: 'ribbon', useCategory: 'ribbon-standalone', price: 113.05, badge: 'Best value',
    hero: '/assets/products/hp-241b/hero.png',
    gallery: ['/assets/products/hp-241b/hero.png', '/assets/products/hp-241b/side-1.png', '/assets/products/hp-241b/side-2.png', '/assets/products/hp-241b/side-3.png', '/assets/products/hp-241b/detail-1.png', '/assets/products/hp-241b/detail-2.png', '/assets/products/hp-241b/catalog-hero.png', '/assets/products/hp-241b/catalog-detail-1.png'],
    detailGallery: [...Array.from({ length: 12 }, (_, index) => `/assets/products/hp-241b/details-gallery/${index + 1}.png`), '/assets/products/print-samples/ribbon-colours.png', '/assets/products/print-samples/ribbon-sample-bag.png', '/assets/products/print-samples/ribbon-foil.png', '/assets/products/print-samples/ribbon-plastic.png', '/assets/products/print-samples/ribbon-film.png'],
    description: 'An electric hot ribbon coding machine for date, batch and expiry coding with movable copper type characters for foil, film, kraft paper, paper cards and similar materials.',
    longDescription: 'The HP-241B is designed for repeatable electric hot ribbon coding. Movable copper characters are easy to install and replace, while the special character-changing structure supports different work areas and packaging formats.',
    applications: 'Aluminium foil · Plastic film · Kraft paper · Paper cards',
    specs: [['Printing speed', '10–100 prints/min, stepless adjustable'], ['Printing area', 'Single row max 4 × 35 mm, approx. 15 characters; double row max 8 × 35 mm, approx. 30 characters'], ['Type', 'Arabic numerals, Chinese and English'], ['Thermal printing ribbon', 'Standard length 100 m, core Φ25.4 mm, colour optional'], ['Power supply', 'AC 220 V / 50 Hz, 200 W'], ['Motor', 'Reduction motor 15 W / 220 V, output 140 rpm'], ['Dimensions', 'L255 × W255 × H315 mm'], ['Weight', '7 kg']],
    relatedAccessories: ['copper-type-characters', 'copper-type-character-box'],
  },
  {
    slug: 'hp-241', model: 'HP-241', name: 'Ribbon Printing Machine — Hot Ribbon Coder', type: 'Hot ribbon coder', category: 'ribbon-coding-machines', parentCategory: 'ribbon-coding-machines', subcategory: 'ribbon', useCategory: 'ribbon-packaging-line', price: 164.79, badge: 'Packaging-line coder',
    hero: '/assets/products/hp-241/hero.png',
    gallery: ['/assets/products/hp-241/hero.png', '/assets/products/hp-241/detail-1.png'],
    detailGallery: ['/assets/products/hp-241/hero.png', '/assets/products/hp-241/detail-1.png', '/assets/products/print-samples/ribbon-colours.png', '/assets/products/print-samples/ribbon-sample-bag.png', '/assets/products/print-samples/ribbon-foil.png', '/assets/products/print-samples/ribbon-plastic.png', '/assets/products/print-samples/ribbon-film.png'],
    description: 'A hot ribbon coding machine for date, batch and expiry coding on packaging lines, with movable copper type characters for flexible packaging.',
    longDescription: 'The HP-241 is a ribbon printing machine for continuous date and batch coding. It uses hot-stamping ribbon and movable type characters, and is designed for use on packaging machines and production lines.',
    applications: 'Flexible packaging · Plastic film · Food packaging · Pharmaceutical packaging',
    specs: [['Printing speed', '≤120 prints/min'], ['Printing area', 'Single row max 4 × 35 mm, approx. 15 characters; double row max 8 × 35 mm, approx. 30 characters; three rows max 12 × 35 mm, approx. 45 characters'], ['Type', 'Arabic numerals, Chinese and English'], ['Thermal printing ribbon', 'Max width 35 mm, standard core Φ25.4 mm'], ['Power supply', '220 V / 220 W'], ['Dimensions', '280 × 180 × 420 mm'], ['Weight', '8 kg']],
    relatedAccessories: ['copper-type-characters', 'copper-type-character-box'],
  },
  {
    slug: 'hp-241c', model: 'HP-241C', name: 'Pneumatic Hot Ribbon Coding Machine', type: 'Pneumatic hot ribbon coder', category: 'ribbon-coding-machines', parentCategory: 'ribbon-coding-machines', subcategory: 'ribbon', useCategory: 'ribbon-packaging-line', price: 215.62, badge: 'Pneumatic',
    hero: '/assets/products/hp-241c/hero.png',
    gallery: ['/assets/products/hp-241c/hero.png', '/assets/products/hp-241c/detail-1.png'],
    detailGallery: ['/assets/products/hp-241c/hero.png', '/assets/products/hp-241c/detail-1.png', '/assets/products/print-samples/ribbon-colours.png', '/assets/products/print-samples/ribbon-sample-bag.png', '/assets/products/print-samples/ribbon-foil.png', '/assets/products/print-samples/ribbon-plastic.png', '/assets/products/print-samples/ribbon-film.png'],
    description: 'A pneumatic hot ribbon coding machine for date, batch and expiry coding on packaging lines, with movable copper type characters.',
    longDescription: 'The HP-241C is a pneumatic ribbon printing machine for continuous date and batch coding. It uses hot-stamping ribbon and movable type characters, and is designed for use on packaging machines and production lines.',
    applications: 'Flexible packaging · Plastic film · Food packaging · Pharmaceutical packaging',
    specs: [['Printing speed', '≤120 prints/min'], ['Power supply', '220 V / 220 W'], ['Printing area', 'Single row max 4 × 35 mm, approx. 15 characters; double row max 8 × 35 mm, approx. 30 characters; three rows max 12 × 35 mm, approx. 45 characters'], ['Type', 'Arabic numerals, Chinese and English'], ['Thermal printing ribbon', 'Max width 35 mm, standard core Φ25.4 mm'], ['Gas source', '3 kg/cm²'], ['Dimensions', '280 × 180 × 420 mm'], ['Weight', '10 kg']],
    relatedAccessories: ['copper-type-characters', 'copper-type-character-box'],
  },
  {
    slug: 'hp-241q', model: 'HP-241Q', name: 'Pneumatic Hot Ribbon Coding Machine', type: 'Pneumatic hot ribbon coder', category: 'ribbon-coding-machines', parentCategory: 'ribbon-coding-machines', subcategory: 'ribbon', useCategory: 'ribbon-packaging-line', price: 251.76, badge: 'High-speed pneumatic',
    hero: '/assets/products/hp-241q/hero.png',
    gallery: ['/assets/products/hp-241q/hero.png', '/assets/products/hp-241q/detail-1.png'],
    detailGallery: ['/assets/products/hp-241q/hero.png', '/assets/products/hp-241q/detail-1.png', '/assets/products/print-samples/ribbon-colours.png', '/assets/products/print-samples/ribbon-sample-bag.png', '/assets/products/print-samples/ribbon-foil.png', '/assets/products/print-samples/ribbon-plastic.png', '/assets/products/print-samples/ribbon-film.png'],
    description: 'A high-speed pneumatic hot ribbon coding machine for date, batch and expiry coding on packaging lines, with movable copper type characters.',
    longDescription: 'The HP-241Q is a pneumatic ribbon printing machine for continuous date and batch coding at up to 400 prints/min. It uses hot-stamping ribbon and movable type characters, and is designed for use on packaging machines and production lines.',
    applications: 'Flexible packaging · Plastic film · Food packaging · Pharmaceutical packaging',
    specs: [['Printing speed', '≤400 prints/min'], ['Power supply', '220 V / 100 W'], ['Printing area', 'Single row max 4 × 35 mm, approx. 15 characters; double row max 8 × 35 mm, approx. 30 characters; three rows max 12 × 35 mm, approx. 45 characters'], ['Type', 'Arabic numerals, Chinese and English'], ['Thermal printing ribbon', 'Max width 35 mm, standard core Φ25.4 mm'], ['Gas source', '3 kg/cm²'], ['Dimensions', '420 × 280 × 240 mm'], ['Weight', '10 kg']],
    relatedAccessories: ['copper-type-characters', 'copper-type-character-box'],
  },
  {
    slug: 'hp-501', model: 'HP-501', name: 'Pneumatic Hot Ribbon Coding Machine', type: 'Pneumatic hot ribbon coder', category: 'ribbon-coding-machines', parentCategory: 'ribbon-coding-machines', subcategory: 'ribbon', useCategory: 'ribbon-packaging-line', price: 193.00, badge: 'Pneumatic',
    hero: '/assets/products/hp-501/hero.png',
    gallery: ['/assets/products/hp-501/hero.png', '/assets/products/hp-501/detail-1.png'],
    detailGallery: ['/assets/products/hp-501/hero.png', '/assets/products/hp-501/detail-1.png', '/assets/products/print-samples/ribbon-colours.png', '/assets/products/print-samples/ribbon-sample-bag.png', '/assets/products/print-samples/ribbon-foil.png', '/assets/products/print-samples/ribbon-plastic.png', '/assets/products/print-samples/ribbon-film.png'],
    description: 'A pneumatic hot ribbon coding machine for date, batch and expiry coding on packaging lines, with movable copper type characters.',
    longDescription: 'The HP-501 is a pneumatic ribbon printing machine for continuous date and batch coding. It uses hot-stamping ribbon and movable type characters, and is designed for use on packaging machines and production lines.',
    applications: 'Flexible packaging · Plastic film · Food packaging · Pharmaceutical packaging',
    specs: [['Printing speed', '≤120 prints/min'], ['Power supply', '220 V / 220 W'], ['Printing area', 'Single row max 4 × 35 mm, approx. 15 characters; double row max 8 × 35 mm, approx. 30 characters; three rows max 12 × 35 mm, approx. 45 characters'], ['Type', 'Arabic numerals, Chinese and English'], ['Thermal printing ribbon', 'Max width 35 mm, standard core Φ25.4 mm'], ['Gas source', '3 kg/cm²'], ['Dimensions', '280 × 180 × 420 mm'], ['Weight', '10 kg']],
    relatedAccessories: ['copper-type-characters', 'copper-type-character-box'],
  },
  {
    slug: 'hp-280', model: 'HP-280', name: 'Hot Ink Roll Coding Machine', type: 'Hot ink roll coder', category: 'ink-wheel-coders', parentCategory: 'ink-wheel-coders', subcategory: 'ink roller', useCategory: 'ink-roller-packaging-line', price: 232.90, badge: 'Ink roll',
    hero: '/assets/products/hp-280/hero.png',
    gallery: ['/assets/products/hp-280/hero.png', '/assets/products/hp-280/detail-1.png'],
    detailGallery: ['/assets/products/hp-280/hero.png', '/assets/products/hp-280/detail-1.png'],
    description: 'A hot ink roll coding machine for date and batch coding on packaging film, using a solid ink roll and a temperature-controlled control box.',
    longDescription: 'The HP-280 is a hot ink roll printing machine for coding on packaging film lines. It prints with a solid ink roll, with stepless temperature control, and is designed for continuous use on packaging film.',
    applications: 'Packaging film · Flexible packaging · Food packaging · Pharmaceutical packaging',
    specs: [['Print range', 'Axial 40 mm, circumferential ≤45 mm'], ['Printing lines', 'T-type max 13 lines, 13 characters per line; R-type max 9 lines, 13 characters per line'], ['Type specifications', 'T-type 2.5 / 3.0 / 3.5 mm × 3.5 mm; R-type 3.5 mm × 3.5 / 4.5 / 5.5 mm'], ['Print speed', 'Max 120 prints/min'], ['Packaging film line speed', 'Max 70 m/min'], ['Minimum spacing', '≥70 mm (two-line), ≥35 mm (four-line)'], ['Control box', 'Stepless temperature control, with temperature controller'], ['Solid ink', 'Φ36 × 40 mm (max length)'], ['Power supply', 'AC 220 V ± 10 V, 50 Hz, 100 W'], ['Weight', 'Print head 2.2 kg, control box 1.0 kg'], ['Dimensions', 'Print head 120 × 100 × 140 mm, control box 180 × 140 × 80 mm']],
  },
  {
    slug: 'ls-1100', model: 'LS-1100', name: 'Ink Wheel Coding Machine', type: 'Ink wheel coder', category: 'ink-wheel-coders', parentCategory: 'ink-wheel-coders', subcategory: 'ink roller', useCategory: 'ink-roller-packaging-line', price: 194.05, badge: 'High-speed ink wheel',
    hero: '/assets/products/ls-1100/hero.png',
    gallery: ['/assets/products/ls-1100/hero.png', '/assets/products/ls-1100/detail-1.png'],
    detailGallery: ['/assets/products/ls-1100/hero.png', '/assets/products/ls-1100/detail-1.png'],
    description: 'An ink wheel coding machine for date and batch coding on packaging film, using a solid ink wheel and a temperature-controlled control box.',
    longDescription: 'The LS-1100 is a friction ink wheel printing machine for coding on packaging film lines. It prints with a solid ink wheel, with temperature control, and is designed for continuous use on packaging film.',
    applications: 'Packaging film · Flexible packaging · Food packaging · Pharmaceutical packaging',
    specs: [['Print range', 'Axial 40 mm, circumferential ≤45 mm'], ['Printing lines', 'T-type max 13 lines, 20 characters per line; R-type max 10 lines, 13 characters per line'], ['Type specifications', 'T-type 1.5 / 2.0 / 2.5 / 3.0 mm × 3.5 mm; R-type 3.5 mm × 3.5 / 4.5 / 5.5 mm'], ['Print speed', '≤300 prints/min'], ['Packaging film line speed', '≤50 m/min'], ['Minimum spacing', '≥70 mm (two-line), ≥38 mm (four-line)'], ['Control box', 'Temperature control type'], ['Solid ink', 'Φ36 × 40 mm (max length)'], ['Power supply', 'AC 220 V ± 10 V, 50 / 60 Hz, 130 W'], ['Weight', 'Print head 2.0 kg, control box 1.0 kg'], ['Dimensions', 'Print head 120 × 100 × 140 mm, control box 180 × 160 × 125 mm']],
  },
  {
    slug: 'my-380f', model: 'MY-380F', name: 'MY-380F Automatic Solid Ink Roll Coding Machine', type: 'Automatic solid ink roll coder', category: 'ink-wheel-coders', parentCategory: 'ink-wheel-coders', subcategory: 'ink roller', useCategory: 'ink-roller-standalone', price: 267.32, badge: 'Automatic paging',
    hero: '/assets/products/my-380f/hero.png',
    gallery: ['/assets/products/my-380f/hero.png', '/assets/products/my-380f/detail-1.png', '/assets/products/my-380f/detail-2.png'],
    detailGallery: ['/assets/products/my-380f/hero.png', '/assets/products/my-380f/detail-1.png', '/assets/products/my-380f/detail-2.png'],
    description: 'An automatic solid ink roll coding machine with automatic paging for date, batch and expiry coding on paper bags, labels and film boxes, using a heated solid ink wheel for instant-dry print.',
    longDescription: 'The MY-380F is an automatic solid ink roll (ink wheel) coding machine with automatic paging, automatic counting and photoelectric positioning. The heated constant-temperature solid ink wheel prints instantly dry, with no smearing, on paper bags, paper and plastic labels, film boxes and similar flat materials.',
    applications: 'Paper bags · Paper / plastic labels · Film boxes · Medicine · Food · Cosmetics · Hardware labels',
    specs: [['Power supply', 'AC 220 V / 50 Hz, 180 W; AC 110 V / 60 Hz export/custom'], ['Printing speed', '≤300 impressions/min (depends on object size)'], ['Object size', 'Length up to 500 mm; width up to 180 mm standard, up to 350 mm widened'], ['Print position', 'Single side 60–250 mm, freely adjustable'], ['Printing lines', 'T-type 1 line, max 10 characters/line; R-type up to 8 lines, max 8 characters/line'], ['Type size', '2.0T, 2.5T, 3.0T standard (18PT, 6*7T custom); default type box 9PT-T, 2 × 3 mm characters'], ['Solid ink roll', 'Φ36 × 32 mm standard, black supplied; Φ36 × 16 / 36 × 36 / 36 × 40 mm optional; black / blue / red / white'], ['Dimensions', '440 × 345 × 280 mm standard; 440 × 540 × 280 mm widened'], ['Net weight', '22 kg standard / 24 kg widened'], ['Shell', 'Painted iron shell standard; stainless-steel shell option']],
  },
  {
    slug: 'copper-type-characters', model: 'Copper Type Characters', name: 'Copper Type Characters', type: 'Ribbon machine part', category: 'ribbon-machine-parts', parentCategory: 'ribbon-consumables', subcategory: 'machine part', useCategory: 'ribbon-standalone', price: 0.3, priceLabel: 'From $0.30', priceUnit: 'USD / piece', badge: 'Movable type',
    hero: '/assets/products/copper-type-characters/hero.png',
    gallery: Array.from({ length: 6 }, (_, index) => `/assets/products/copper-type-characters/${index === 0 ? 'hero' : `main-${index + 1}`}.png`),
    detailGallery: Array.from({ length: 7 }, (_, index) => `/assets/products/copper-type-characters/detail-${index + 1}.png`),
    description: 'Movable copper type characters for ribbon coding machines. Select the character size and tell us how many 0–9, A–Z and common symbols you need.',
    longDescription: 'Choose the 2*3 or 2*4 copper type character size for your ribbon coding machine. The customized option is quoted according to the requested character mix. Add quantities for numbers, letters, dot, slash and blank spaces in the notes before adding the set to your quote list.',
    applications: 'DY-8B · HP-241 · HP-241B · HP-241C · HP-241Q · HP-501 · Ribbon coding machines',
    specs: [['Available sizes', '2*3 · 2*4'], ['Standard price', '$0.30 / piece'], ['Character range', '0–9 · A–Z · . · / · blank space'], ['Custom option', 'Quote on request']],
    notesPrompt: 'List the quantity needed for each character, for example: 0×10, 1×10, A×4, Z×2, .×2, /×2, blank×4.',
    options: [{ id: 'character-size', label: 'Character SKU', helper: 'Select the copper character size, then enter the quantity needed for each character.', values: [{ id: '2x3', sku: '2*3', label: '2 × 3 mm character', price: 0.3, characterQuantities: true, description: 'Choose the quantities for each number, letter and common symbol. The total and price are calculated automatically at $0.30 per piece.' }, { id: '2x4', sku: '2*4', label: '2 × 4 mm character', price: 0.3, characterQuantities: true, description: 'Choose the quantities for each number, letter and common symbol. The total and price are calculated automatically at $0.30 per piece.' }, { id: 'customized', sku: 'CUSTOMIZED', label: 'Customized character', price: 0, quoteOnly: true, requiresNotes: true, description: 'Send the required letters, numbers and symbols for a direct quotation.' }] }],
  },
  {
    slug: 'copper-type-character-box', model: 'Copper Type Character Box', name: 'Copper Type Character Box', type: 'Ribbon machine part', category: 'ribbon-machine-parts', parentCategory: 'ribbon-consumables', subcategory: 'machine part', useCategory: 'ribbon-standalone', price: 25, priceLabel: 'From $25.00', priceUnit: 'USD / box', badge: 'Ready character sets',
    hero: '/assets/products/copper-type-box/hero.png',
    gallery: Array.from({ length: 6 }, (_, index) => `/assets/products/copper-type-box/${index === 0 ? 'hero' : `main-${index + 1}`}.png`),
    detailGallery: Array.from({ length: 8 }, (_, index) => `/assets/products/copper-type-box/detail-${index + 1}.png`),
    description: 'Ready-to-use copper character boxes for ribbon coding machines, supplied with brass characters, holder tools and layouts for English, numbers or custom combinations.',
    longDescription: 'Choose a standard character box for common date and batch coding, or request a customized box with the letters, numbers and symbols your packaging line needs. The organized product images show the included accessories, character layouts, compatible coding machines and the pure copper type construction.',
    applications: 'DY-8B · HP-241 · HP-241B · HP-241C · HP-241Q · HP-501 · Semi-automatic and automatic ribbon coders',
    specs: [['Standard English + numbers', '73-character layout · $25'], ['Numeric box', '72-character layout · $25'], ['English + numbers', '120-character layout · $40'], ['Customized box', 'Exactly 72 characters · $25'], ['Included accessories', 'Metal stamp holder · Hex key · Tweezers']],
    notesPrompt: 'Enter the quantity needed for each character. The total must be exactly 72 pieces.',
    options: [{ id: 'box-sku', label: 'Box SKU', helper: 'Choose a standard box or build a custom 72-character mix.', values: [{ id: 'en-num-73', sku: 'EN-NUM-73', label: 'English + numbers · 73 characters', price: 25, description: 'Pre-set layout based on the supplied contents reference. No character quantities required.', contents: '0, 1, 2: 2 each · 3–9: 1 each · A–Z: 2 each · dot and slash: 2 each · blank space: 4' }, { id: 'numeric-72', sku: 'NUM-72', label: 'Pure numeric · 72 characters', price: 25, description: 'Pre-set layout based on the supplied contents reference. No character quantities required.', contents: '0, 1, 2: 10 each · 3–9: 6 each' }, { id: 'en-num-120', sku: 'EN-NUM-120', label: 'English + numbers · 120 characters', price: 40, description: 'Pre-set layout based on the supplied contents reference. No character quantities required.', contents: '0, 1, 2: 4 each · 3–9: 2 each · A–Z: 3 each · dot and slash: 2 each · blank space: 12' }, { id: 'custom-72', sku: 'CUSTOM-72', label: 'Customized · exactly 72 characters', price: 25, requiresNotes: true, maxCharacters: 72, description: 'Choose the quantity of each number, letter and common symbol. The total must equal 72.' }] }],
  },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
