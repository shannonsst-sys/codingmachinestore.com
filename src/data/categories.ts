export type Category = {
  slug: string;
  label: string;
  title: string;
  description: string;
  parent?: string;
  featured?: boolean;
};

export const categories: Category[] = [
  { slug: 'ribbon-coding-machines', label: 'RIBBON CODING MACHINE', title: 'Ribbon Coding Machines', description: 'Manual and electric hot ribbon coders for flexible packaging and foil materials.', featured: true },
  { slug: 'ribbon-machine-parts', label: 'MACHINE PART', title: 'Machine part', description: 'Type characters and replacement parts for ribbon coding machines.', parent: 'ribbon-coding-machines' },
  { slug: 'ribbon-consumables', label: 'RIBBON', title: 'Ribbon', description: 'Hot-stamping ribbon supplies for ribbon coding machines.', parent: 'ribbon-coding-machines' },
  { slug: 'ink-wheel-coders', label: 'INK ROLLER CODING MACHINE', title: 'Ink Roller Coding Machines', description: 'Contact ink roller equipment for bags, labels and common packaging surfaces.', featured: true },
  { slug: 'ink-roller-machine-parts', label: 'MACHINE PART', title: 'Machine part', description: 'Replacement parts for ink roller coding machines.', parent: 'ink-wheel-coders' },
  { slug: 'ink-roller-consumables', label: 'INK ROLLER', title: 'Ink roller', description: 'Replacement ink rollers for ink roller coding machines.', parent: 'ink-wheel-coders' },
  { slug: 'inkjet-printers', label: 'INKJET PRINTER', title: 'Inkjet Printers', description: 'Industrial printers for dates, batches, lots, barcodes and variable information.', featured: true },
  { slug: 'cartridge-machine-parts', label: 'MACHINE PART', title: 'Machine part', description: 'Replacement parts for inkjet printers.', parent: 'inkjet-printers' },
  { slug: 'cartridges', label: 'CARTRIDGE', title: 'Cartridge', description: 'Ink cartridges and related supplies for inkjet printers.', parent: 'inkjet-printers' },
];

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const getChildren = (slug: string) => categories.filter((category) => category.parent === slug);
