export type Category = {
  slug: string;
  label: string;
  title: string;
  description: string;
  parent?: string;
  featured?: boolean;
};

export const categories: Category[] = [
  { slug: 'inkjet-printers', label: 'INKJET PRINTERS', title: 'Inkjet printers & online coding systems', description: 'Industrial inkjet printers for date, batch, lot, barcode and variable information marking.', featured: true },
  { slug: 'continuous-inkjet-printers', label: 'CONTINUOUS INKJET', title: 'Continuous inkjet printers', description: 'Fast, non-contact coding systems for production lines and irregular products.', parent: 'inkjet-printers' },
  { slug: 'handheld-inkjet-printers', label: 'HANDHELD INKJET', title: 'Handheld inkjet printers', description: 'Flexible portable printers for cartons, bags, boards and small-batch production.', parent: 'inkjet-printers' },
  { slug: 'coding-machines', label: 'CODING MACHINES', title: 'Coding machines', description: 'Contact coding equipment for packaging dates, batches, prices and product information.', featured: true },
  { slug: 'ribbon-coding-machines', label: 'RIBBON', title: 'Ribbon coding machines', description: 'Manual and electric hot ribbon coders for flexible packaging and foil materials.', parent: 'coding-machines' },
  { slug: 'ink-wheel-coders', label: 'INK ROLLER', title: 'Ink roller coding machines', description: 'Contact ink-wheel equipment for bags, labels and common packaging surfaces.', parent: 'coding-machines' },
  { slug: 'coding-ribbons-consumables', label: 'CONSUMABLES', title: 'Coding ribbons & consumables', description: 'Ribbons, ink and compatible consumables organized around the machines they fit.' },
  { slug: 'type-characters-copper-heads', label: 'ACCESSORIES', title: 'Type characters & copper heads', description: 'Common replacement characters and coding heads for related ribbon coding machines.' },
];

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const getChildren = (slug: string) => categories.filter((category) => category.parent === slug);
