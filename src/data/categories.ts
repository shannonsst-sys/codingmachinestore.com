export type Category = {
  slug: string;
  label: string;
  title: string;
  description: string;
  parent?: string;
  featured?: boolean;
};

export const categories: Category[] = [
  { slug: 'ribbon-coding-machines', label: 'RIBBON CODING MACHINE', title: 'Ribbon Coding Machine', description: 'Manual and electric hot ribbon coders for flexible packaging and foil materials.', featured: true },
  { slug: 'ink-wheel-coders', label: 'INK ROLLER CODING MACHINE', title: 'Ink Roller Coding Machine', description: 'Contact ink roller equipment for bags, labels and common packaging surfaces.', featured: true },
  { slug: 'inkjet-printers', label: 'INKJET PRINTER', title: 'Inkjet Printer', description: 'Industrial printers for dates, batches, lots, barcodes and variable information.', featured: true },
  { slug: 'consumables', label: 'CONSUMABLES', title: 'Consumables', description: 'Machine parts and matching supplies organized by the machine they fit.' },
  { slug: 'ribbon-consumables', label: 'RIBBON CODING MACHINE', title: 'Ribbon Coding Machine', description: 'Parts and ribbon supplies for ribbon coding machines.', parent: 'consumables' },
  { slug: 'ribbon-machine-parts', label: 'MACHINE PART', title: 'Machine part', description: 'Type characters and replacement parts for ribbon coding machines.', parent: 'ribbon-consumables' },
  { slug: 'ribbon-supplies', label: 'RIBBON', title: 'Ribbon', description: 'Hot-stamping ribbon supplies for ribbon coding machines.', parent: 'ribbon-consumables' },
  { slug: 'ink-roller-consumables', label: 'INK ROLLER CODING MACHINE', title: 'Ink Roller Coding Machine', description: 'Parts and ink roller supplies for ink roller coding machines.', parent: 'consumables' },
  { slug: 'ink-roller-machine-parts', label: 'MACHINE PART', title: 'Machine part', description: 'Replacement parts for ink roller coding machines.', parent: 'ink-roller-consumables' },
  { slug: 'ink-roller-supplies', label: 'INK ROLLER', title: 'Ink roller', description: 'Replacement ink rollers for ink roller coding machines.', parent: 'ink-roller-consumables' },
  { slug: 'inkjet-consumables', label: 'INKJET PRINTER', title: 'Inkjet Printer', description: 'Parts and cartridge supplies for inkjet printers.', parent: 'consumables' },
  { slug: 'inkjet-machine-parts', label: 'MACHINE PART', title: 'Machine part', description: 'Replacement parts for inkjet printers.', parent: 'inkjet-consumables' },
  { slug: 'cartridges', label: 'CARTRIDGE', title: 'Cartridge', description: 'Ink cartridges and related supplies for inkjet printers.', parent: 'inkjet-consumables' },
];

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const getChildren = (slug: string) => categories.filter((category) => category.parent === slug);
