# Coding Machine Store

Static storefront for `codingmachinestore.com`, built around the first two ready-to-list products:

- DY-8 Hand-Operated Hot Ribbon Coding Machine — `$40.00 / unit`
- HP-241B Electric Hot Ribbon Coding Machine — `$160.00 / unit`

## Run locally

From this folder, serve the site with any static web server. For example, with the bundled Python runtime:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Included flows

- Responsive homepage with factory-direct positioning and generated hero image.
- Independent product pages at `products/dy-8.html` and `products/hp-241b.html`, with full specifications, thumbnails and the supplied detail-image galleries.
- English category navigation prepared for hot ribbon machines, ribbons/consumables, type characters/copper heads, and inkjet/online systems.
- Product cards and detail modal using the supplied product images and DOCX specifications.
- Local-storage cart with quantity controls and product subtotal calculation.
- Quote form connected to Formspree endpoint `https://formspree.io/f/xppalleq`.
- Floating WhatsApp and back-to-top actions, plus cart icons in the main/product headers.
- Shipping is explicitly quoted after the customer provides a delivery address; product prices are in USD and exclude shipping.

The AI-generated hero visual is saved at `public/assets/generated/hero-coding-machine.png`. Product assets are copied into `public/assets/products/` from the supplied folders.

## GitHub Pages + Cloudflare

The repository includes:

- `CNAME` for `codingmachinestore.com`.
- `.github/workflows/pages.yml` to publish the static site with GitHub Pages after each push to `main`.

After the repository is pushed to GitHub, enable **Settings → Pages → GitHub Actions**, then enter `codingmachinestore.com` as the custom domain. In Cloudflare DNS, point the apex domain to GitHub Pages with the four GitHub A records, and point `www` to the repository's `*.github.io` address. Keep the records DNS-only while GitHub issues the HTTPS certificate; Cloudflare proxying can be enabled after HTTPS is active.
