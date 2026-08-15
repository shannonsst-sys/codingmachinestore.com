export type Category = { slug: string; label: string; title: string; description: string; featured?: boolean };

export const categories: Category[] = [
  { slug: 'inkjet-printers', label: '喷码机', title: 'Inkjet printers & online coding systems', description: 'The main product line: industrial inkjet printers for date, batch, lot, barcode and variable information marking.', featured: true },
  { slug: 'continuous-inkjet-printers', label: '连续式喷码机', title: 'Continuous inkjet printers', description: 'Fast, non-contact coding systems for production lines and irregular products.' },
  { slug: 'handheld-inkjet-printers', label: '手持喷码机', title: 'Handheld inkjet printers', description: 'Flexible portable printers for cartons, bags, boards and small-batch production.' },
  { slug: 'coding-machines', label: '打码机', title: 'Coding machines', description: 'Practical coding equipment for packaging dates, batches, prices and product information.', featured: true },
  { slug: 'ribbon-coding-machines', label: '色带打码机', title: 'Hot ribbon coding machines', description: 'Manual and electric hot ribbon coders for flexible packaging and foil materials.' },
  { slug: 'ink-wheel-coders', label: '墨轮打码机', title: 'Ink wheel coders', description: 'Contact coding equipment for bags, labels and common packaging surfaces.' },
  { slug: 'coding-ribbons-consumables', label: '色带及耗材', title: 'Coding ribbons & consumables', description: 'Ribbons, ink and compatible consumables organized around the machines they fit.' },
  { slug: 'type-characters-copper-heads', label: '字粒和铜头', title: 'Type characters & copper heads', description: 'Common replacement characters and coding heads for related ribbon coding machines.' },
];

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
