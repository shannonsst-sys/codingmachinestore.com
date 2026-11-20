# Coding Machine Store

Static storefront for `codingmachinestore.com`, built around eight ready-to-list coding machines from Zhejiang Feihuang, Ruian:

- DY-8B Manual Hot Ribbon Coding Machine — `$47.28 / unit`
- HP-241B Electric Hot Ribbon Coding Machine — `$113.05 / unit`
- HP-241 Ribbon Printing Machine — `$164.79 / unit`
- HP-241C Pneumatic Hot Ribbon Coding Machine — `$215.62 / unit`
- HP-241Q Pneumatic Hot Ribbon Coding Machine — `$251.76 / unit`
- HP-501 Pneumatic Hot Ribbon Coding Machine — `$193.00 / unit`
- HP-280 Hot Ink Roll Coding Machine — `$232.90 / unit`
- LS-1100 Ink Wheel Coding Machine — `$194.05 / unit`

Prices are in USD and exclude shipping. Copper type characters and character boxes are listed under Consumables.

## Run locally

This version uses Astro with React islands for the cart and product gallery. Install dependencies and start the development server:

```powershell
npm install
npm run dev
```

Then open `http://localhost:4321`.

## Included flows

- Responsive homepage with factory-direct positioning and generated hero image.
- Independent Astro product pages at `/products/dy-8/`, `/products/hp-241b/`, `/products/hp-241/`, `/products/hp-241c/`, `/products/hp-241q/`, `/products/hp-501/`, `/products/hp-280/` and `/products/ls-1100/`, with specifications, thumbnails and supplied detail-image galleries.
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
