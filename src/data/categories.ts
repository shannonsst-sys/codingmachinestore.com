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
  { slug: 'ribbon-standalone', label: 'STANDALONE USE', title: 'Standalone Ribbon Coding Machines', description: 'Ribbon coders designed to operate independently at a packing or work station.', parent: 'ribbon-coding-machines' },
  { slug: 'ribbon-packaging-line', label: 'PACKAGING LINE', title: 'Ribbon Coding Machines for Packaging Lines', description: 'Ribbon coding equipment for integration with packaging machines and production lines.', parent: 'ribbon-coding-machines' },
  { slug: 'ink-wheel-coders', label: 'INK ROLLER CODING MACHINE', title: 'Ink Roller Coding Machine', description: 'Contact ink roller equipment for bags, labels and common packaging surfaces.', featured: true },
  { slug: 'ink-roller-standalone', label: 'STANDALONE USE', title: 'Standalone Ink Roller Coding Machines', description: 'Ink roller coders designed for independent operation and flexible workstations.', parent: 'ink-wheel-coders' },
  { slug: 'ink-roller-packaging-line', label: 'PACKAGING LINE', title: 'Ink Roller Coding Machines for Packaging Lines', description: 'Ink roller coding equipment for packaging machines and continuous production lines.', parent: 'ink-wheel-coders' },
  { slug: 'inkjet-printers', label: 'INKJET PRINTER', title: 'Inkjet Printer', description: 'Industrial printers for dates, batches, lots, barcodes and variable information.', featured: true },
  { slug: 'inkjet-standalone', label: 'STANDALONE USE', title: 'Standalone Inkjet Printers', description: 'Portable or independently operated inkjet printers for flexible coding tasks.', parent: 'inkjet-printers' },
  { slug: 'inkjet-packaging-line', label: 'PACKAGING LINE', title: 'Inkjet Printers for Packaging Lines', description: 'Inkjet printers for integration with packaging machines and automated production lines.', parent: 'inkjet-printers' },
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
