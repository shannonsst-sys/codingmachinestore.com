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
  { slug: 'machine-parts', label: 'MACHINE PARTS', title: 'Machine parts & consumables', description: 'Compatible ribbons, cartridges and ink rollers organized by the machine they fit.', featured: true },
  { slug: 'ribbon-machine-parts', label: 'RIBBON', title: 'Ribbon machine parts', description: 'Ribbons, type characters and related replacement parts for ribbon coding machines.', parent: 'machine-parts' },
  { slug: 'cartridge-machine-parts', label: 'CARTRIDGE', title: 'Cartridges for inkjet printers', description: 'Ink cartridges and related supplies for inkjet printers.', parent: 'machine-parts' },
  { slug: 'ink-roller-machine-parts', label: 'INK ROLLER', title: 'Ink rollers for coding machines', description: 'Replacement ink rollers and related parts for ink roller coding machines.', parent: 'machine-parts' },
];

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const getChildren = (slug: string) => categories.filter((category) => category.parent === slug);
