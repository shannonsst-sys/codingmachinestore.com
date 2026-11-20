# Coding Machine Store

Static storefront for `codingmachinestore.com`, built around twenty-two ready-to-list coding machines from Zhejiang Feihuang, Ruian:

- DY-8B Manual Hot Ribbon Coding Machine — `$47.28 / unit`
- HP-241B Electric Hot Ribbon Coding Machine — `$113.05 / unit`
- HP-241 Ribbon Printing Machine — `$164.79 / unit`
- HP-241C Pneumatic Hot Ribbon Coding Machine — `$215.62 / unit`
- HP-241Q Pneumatic Hot Ribbon Coding Machine — `$251.76 / unit`
- HP-501 Pneumatic Hot Ribbon Coding Machine — `$193.00 / unit`
- HP-280 Hot Ink Roll Coding Machine — `$232.90 / unit`
- LS-1100 Ink Wheel Coding Machine — `$194.05 / unit`
- MY-380F Automatic Solid Ink Roll Coding Machine — `$267.32 / unit`
- A3 Handheld Thermal Inkjet Printer — `$118.00 / unit`
- A5 Handheld Thermal Inkjet Printer — `$135.00 / unit`
- A9 Handheld Thermal Inkjet Printer — `$180.00 / unit`
- P500 Two-Head Handheld Thermal Inkjet Printer — `$207.00 / unit`
- A5C Side-Held Thermal Inkjet Printer — `$146.00 / unit`
- T5 Online Thermal Inkjet Printer — `$145.00 / unit`
- T6 Online Thermal Inkjet Printer — `$155.00 / unit`
- T9 Online Thermal Inkjet Printer — `$168.00 / unit`
- T10-1 Online Thermal Inkjet Printer — `$180.00 / unit`
- T10-2 Two-Head Online Thermal Inkjet Printer — `$295.00 / unit`
- M70 Mini Handheld Thermal Inkjet Printer — `$105.00 / unit`
- K90 Desktop Thermal Inkjet Printer — `$175.00 / unit`
- K80 Conveyor Thermal Inkjet Printer — `$215.00 / unit`

Prices are in USD and exclude shipping. Inkjet printer prices exclude the ink cartridge. Copper type characters and character boxes are listed under Consumables.

## Run locally

This version uses Astro with React islands for the cart and product gallery. Install dependencies and start the development server:

```powershell
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Included flows

- Responsive homepage with factory-direct positioning and generated hero image.
- Independent Astro product pages at `/products/dy-8/`, `/products/hp-241b/`, `/products/hp-241/`, `/products/hp-241c/`, `/products/hp-241q/`, `/products/hp-501/`, `/products/hp-280/`, `/products/ls-1100/` and `/products/my-380f/`, with specifications, thumbnails and supplied detail-image galleries.
- Category structure for inkjet printers, coding machines, ribbon coders, ink-wheel coders, ribbons, type characters and copper heads.
- Product cards and structured product data in `src/data/products.ts`.
- React cart island with local-storage persistence and product image lightbox with arrows and keyboard controls.
- Quote entry connected to Formspree endpoint `https://formspree.io/f/xppalleq`.
- Shipping is explicitly quoted after the customer provides a delivery address; product prices are in USD and exclude shipping.

The AI-generated hero visual is saved at `public/assets/generated/hero-coding-machine.png`. Product assets are copied into `public/assets/products/` from the supplied folders.

## Cloudflare Workers deployment

This repository is prepared for Cloudflare Workers Static Assets deployment:

- Production branch: `main`
- Build command: `npm install && npm run build`
- Deploy command: `npx wrangler deploy`
- Static assets directory: `dist/` (configured in `wrangler.jsonc`)
- Custom domain: configure `codingmachinestore.com` under Workers & Pages → Workers → Custom domains

Cloudflare Workers will automatically redeploy the site after each push to the connected GitHub repository.
