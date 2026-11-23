# Coding Machine Store

Static storefront for `codingmachinestore.com`, built around 54 ready-to-list products from Zhejiang Feihuang, Ruian — 47 coding machines (ribbon, ink-roller and inkjet) plus 7 consumable lines:

- DY-8B Manual Hot Ribbon Coding Machine — `$47.28 / unit`
- HP-241B Electric Hot Ribbon Coding Machine — `$113.05 / unit`
- HP-241 Ribbon Printing Machine — Hot Ribbon Coder — `$164.79 / unit`
- HP-241C Pneumatic Hot Ribbon Coding Machine — `$215.62 / unit`
- HP-241Q Pneumatic Hot Ribbon Coding Machine — `$251.76 / unit`
- HP-501 Pneumatic Hot Ribbon Coding Machine — `$193.00 / unit`
- HP-280 Hot Ink Roll Coding Machine — `$232.90 / unit`
- LS-1100 Ink Wheel Coding Machine — `$194.05 / unit`
- MY-380F Automatic Solid Ink Roll Coding Machine — `$267.32 / unit`
- A3 Handheld Thermal Inkjet Printer — `$193.00 / unit`
- A5 Handheld Thermal Inkjet Printer — `$210.00 / unit`
- A9 Handheld Thermal Inkjet Printer — `$255.00 / unit`
- P500 Two-Head Handheld Thermal Inkjet Printer — `$337.00 / unit`
- A5C Side-Held Thermal Inkjet Printer — `$221.00 / unit`
- T5 Online Thermal Inkjet Printer — `$220.00 / unit`
- T6 Online Thermal Inkjet Printer — `$230.00 / unit`
- T9 Online Thermal Inkjet Printer — `$243.00 / unit`
- T10-1 Online Thermal Inkjet Printer — `$255.00 / unit`
- T10-2 Two-Head Online Thermal Inkjet Printer — `$425.00 / unit`
- M70 Mini Handheld Thermal Inkjet Printer — `$180.00 / unit`
- K90 Desktop Thermal Inkjet Printer — `$250.00 / unit`
- K80 Conveyor Thermal Inkjet Printer — `$290.00 / unit`
- Copper Type Characters — `$0.30 / unit`
- Copper Type Character Box — `$25.00 / unit`
- TIJ Ink Cartridge 12.7 mm — 42 ml — `$30.00 / unit`
- TIJ Ink Cartridge 25.4 mm — 42 ml — `$50.00 / unit`
- SCF-900 Hot Stamping Ribbon SCF-900 — `$0.80 / unit`
- Solid Ink Roll 36 × 32 mm — `$0.50 / unit`
- T/R Type Characters for Ink Roller Coders — `$0.30 / unit`
- T10-Plus Online Thermal Inkjet Printer — `$250.00 / unit`
- T10 Plus-2 Two-Head Online Thermal Inkjet Printer — `$430.00 / unit`
- F-11 Feeding Inkjet Printer — `$605.00 / unit`
- MY-300 II Steel Wheel Carton Printer — `$507.00 / unit`
- FH-M3S Touchscreen Handheld Inkjet Printer — `quote on request`
- FH-500A Carton Printing Machine — `quote on request`
- T-S Handheld TIJ Inkjet Printer — `quote on request`
- T-Z Handheld TIJ Inkjet Printer — `$187.00 / unit`
- T-H Handheld TIJ Inkjet Printer — `quote on request`
- T-L Handheld TIJ Inkjet Printer — `quote on request`
- T-4 Handheld TIJ Inkjet Printer — `$880.00 / unit`
- T-X Handheld TIJ Inkjet Printer — `$295.00 / unit`
- T-Y Handheld TIJ Inkjet Printer — `quote on request`
- T-D Handheld TIJ Inkjet Printer — `quote on request`
- TW-mini Online Inkjet Printer — `$235.00 / unit`
- P-7 Online Inkjet Printer — `$323.00 / unit`
- T-W Online Inkjet Printer — `$260.00 / unit`
- T-M Online Inkjet Printer — `quote on request`
- TW-PRO Online Inkjet Printer — `quote on request`
- XY Axis Inkjet Printer — `$414.00 / unit`
- 6-Head Egg Inkjet Printer — `$1720.00 / unit`
- Static Desktop Inkjet Printer — `$380.00 / unit`
- Paging All-in-One Inkjet Printer — `$545.00 / unit`
- Rotary Inkjet Printer — `quote on request`
- T-3 Conveyor All-in-One Inkjet Printer — `$410.00 / unit`

Prices are in USD and exclude shipping. Inkjet printer prices include ink cartridges — one per print head ($55 per head). TIJ cartridges (12.7 mm from $30, 25.4 mm from $50), hot stamping ribbon SCF-900 (from $0.80/roll), solid ink rolls (from $0.50/piece), copper type characters ($0.30/piece) and T/R type characters ($0.30/piece) are listed under Consumables. Quote-only machines (FH-M3S, FH-500A, T-S, T-H, T-L, T-Y, T-D, T-M, TW-PRO, Rotary) have no reliable price or spec source yet — price and specs are confirmed with the factory per order, never guessed.

## Run locally

This version uses Astro with React islands for the cart and product gallery. Install dependencies and start the development server:

```powershell
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Included flows

- Responsive homepage with factory-direct positioning, a composite hero photo of real listed machines, and a single horizontal-scrolling product row.
- Independent Astro product pages at `/products/<slug>/`, with specifications, thumbnails and supplied detail-image galleries (5–6 images per machine).
- Category structure for inkjet printers, coding machines, ribbon coders, ink-wheel coders, ribbons, type characters and copper heads.
- React cart island with local-storage persistence and product image lightbox with arrows and keyboard controls.
- Quote entry connected to Formspree endpoint `https://formspree.io/f/xppalleq`, redirecting to the on-site thank-you page.
- Shipping is explicitly quoted after the customer provides a delivery address; product prices are in USD and exclude shipping.
- SEO blog at `/blog/` with buyer guides linked to product pages, plus `sitemap.xml` and `robots.txt`.

Product assets are copied into `public/assets/products/` from the supplied folders. The old AI-generated hero (`public/assets/generated/hero-coding-machine.png`) is no longer used.

## Cloudflare Workers deployment

This repository is prepared for Cloudflare Workers Static Assets deployment:

- Production branch: `main`
- Build command: `npm install && npm run build`
- Deploy command: `npx wrangler deploy`
- Static assets directory: `dist/` (configured in `wrangler.jsonc`)
- Custom domain: configure `codingmachinestore.com` under Workers & Pages → Workers → Custom domains

Cloudflare Workers will automatically redeploy the site after each push to the connected GitHub repository.
