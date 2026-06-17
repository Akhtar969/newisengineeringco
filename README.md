# I.S. Engineering Co. — Website
**isengineeringco.in** | M.S. Flanges Manufacturer & Supplier, Mumbai — Since 1999

---

## File Structure

```
isengineering/
├── index.html                    ← Homepage (Hero, Products, E Table, FAQ, Testimonials)
├── about.html                    ← About Us, Mission, Timeline, Values, Process, Trust
├── products.html                 ← Full product catalogue with filter (links to all detail pages)
├── gallery.html                  ← Photo gallery + industry videos, tabs, FAQ
├── contact.html                  ← Contact form, addresses, Google Map, FAQ
│
├── ms-flanges.html                ← Product Detail: M.S. Flanges (general)
├── e-table-flanges.html           ← Product Detail: E Table Flanges (IS:1538) — flagship product
├── blind-flanges.html             ← Product Detail: Blind Flanges
├── welding-neck-flanges.html      ← Product Detail: Welding Neck Flanges
├── socket-weld-flanges.html       ← Product Detail: Socket Weld Flanges
├── flat-flanges.html              ← Product Detail: Flat / Slip-On Flanges
├── male-female-flanges.html       ← Product Detail: Male Female Flanges
├── forged-flanges.html            ← Product Detail: Forged Flanges
├── ms-square-pipes.html           ← Product Detail: M.S. Square Pipes (IS:4923 SHS)
├── ms-round-pipes.html            ← Product Detail: M.S. ERW Round Pipes (IS:1239/IS:3589)
├── elbow-fittings.html            ← Product Detail: Elbow Fittings (45°/90°)
├── reducer-fittings.html          ← Product Detail: Reducer Fittings (Concentric/Eccentric)
│
├── robots.txt                    ← SEO robots file (points to sitemap.xml)
├── sitemap.xml                   ← XML sitemap for Google (all 17 pages + image sitemap)
├── llms.txt                      ← LLM discovery file for ChatGPT, Claude, Gemini, Perplexity
├── llms-full.txt                 ← Full structured content dump for AI citation/grounding
│
├── css/
│   └── style.css                 ← Complete stylesheet (all pages)
├── js/
│   └── script.js                 ← All JavaScript (carousel, FAQ, filter, product tabs, etc.)
└── assets/
    └── images/                   ← Product & factory images (see naming guide below)
```

**Total: 17 HTML pages + 4 SEO/AI files**

---

## Page Overview

| Page | Purpose | Key Sections |
|---|---|---|
| `index.html` | Homepage | Hero carousel, stats, company intro, why us, products grid, E Table spotlight, industries, testimonials, FAQ (15), CTA |
| `about.html` | About Us | Company story, mission/vision, 25-year timeline, manufacturing process, core values, trust signals, FAQ (6) |
| `products.html` | Product catalogue | Filterable grid of all 12 products, links to each detail page, product FAQ |
| `gallery.html` | Visual proof | Tabbed photo gallery (Flanges/E Table/Pipes/Fittings), embedded industry videos, FAQ (6) |
| `contact.html` | Lead capture | Enquiry form, phone/email/address cards, Google Map, business hours, GST details, FAQ (6) |
| `ms-flanges.html` | Product detail | Overview, full spec comparison table, 6 applications, 8 FAQs |
| `e-table-flanges.html` | Product detail (flagship) | Overview, full IS:1538 dimension table, 9 applications, comparison table, 10 FAQs |
| `blind-flanges.html` | Product detail | Overview, dimension table, 6 applications, 6 FAQs |
| `welding-neck-flanges.html` | Product detail | Overview, pressure-temp table, 6 applications, 5 FAQs |
| `socket-weld-flanges.html` | Product detail | Overview, dimension table, 6 applications, 5 FAQs |
| `flat-flanges.html` | Product detail | Overview, dimension table, 6 applications, 5 FAQs |
| `male-female-flanges.html` | Product detail | Overview, dimension table, 4 applications, 4 FAQs |
| `forged-flanges.html` | Product detail | Overview, comparison table, 5 applications, 5 FAQs |
| `ms-square-pipes.html` | Product detail | Overview, weight chart, 6 applications, 5 FAQs |
| `ms-round-pipes.html` | Product detail | Overview, OD/wall chart, 6 applications, 5 FAQs |
| `elbow-fittings.html` | Product detail | Overview, dimension table, 6 applications, 5 FAQs |
| `reducer-fittings.html` | Product detail | Overview, dimension table, 5 applications, 5 FAQs |

---

## SEO / GEO / AEO Files

| File | Purpose |
|---|---|
| `robots.txt` | Crawl directives for search engines, points to `sitemap.xml` |
| `sitemap.xml` | XML sitemap with all 17 pages + image sitemap entries for Google Images |
| `llms.txt` | Short discovery file for AI crawlers (ChatGPT, Claude, Gemini, Perplexity) — company facts, product list, key citation points |
| `llms-full.txt` | Full structured content (specs, FAQs, comparisons) for deep AI grounding and citation accuracy |

Every HTML page also includes inline:
- JSON-LD Schema: `LocalBusiness`, `Product`, `FAQPage`, `BreadcrumbList`, `SpeakableSpecification`
- Open Graph + Twitter Card meta tags
- `geo.region` / `geo.placename` meta tags
- Canonical URLs

---

## Navigation Structure

**Header (all pages):** Home · About · **Products ▾** (hover/tap dropdown) · Gallery · Contact · Get Quote button

Products dropdown is grouped into 3 sections:
- **M.S. Flanges** → ms-flanges, e-table-flanges, blind-flanges, welding-neck-flanges, socket-weld-flanges, flat-flanges, male-female-flanges, forged-flanges
- **M.S. Pipes** → ms-square-pipes, ms-round-pipes
- **Pipe Fittings** → elbow-fittings, reducer-fittings, → "View All Products" link

**Footer (all pages):** Same Products list repeated as direct links for crawlability + internal linking.

---

## Deployment Instructions

### 1. Add Real Images
Place your product/factory photos in `assets/images/` using the filenames already referenced in the HTML (or update the `src=` paths):

**Hero/Factory:**
- `hero-flanges.jpg`, `hero-etable.jpg`, `hero-pipes.jpg`, `hero-factory.jpg`, `hero-fittings.jpg`
- `alll-flanges.jpg` (company intro + E Table thumbnail)

**Product Images (referenced across products.html, gallery.html, and each product detail page):**
- `ms-flanges.jpg`, `E-Table-Flange.jpg`, `blind-pipe-flange.jpg`, `welding-neck-flanges.jpg`
- `socket-weld-flange.jpg`, `flat_flanges.png`, `flat-slip-flange.jpg`, `male-female-flange-1.jpg`, `forged-flanges.jpg`
- `Ms-Square-Pipe.jpg`, `MS-Round-Pipes.jpg`, `mild-steel-rectangle-pipe.jpg`
- `ms-elbow.webp`, `ms-pipe-reducer.webp`, `Stainless-Steel-Pipe-Tee-Fittings.jpg`, `End-caps.webp`
- `Opening Flange.jpg`, `Ring Spacer Flange.jpg`, `Spade Flange.jpg`
- `logo.png`

**Recommended:** Rename files with descriptive, keyword-rich names before upload (e.g. `e-table-flange-is1538-manufacturer-mumbai.jpg`) and compress to WebP for faster load times.

### 2. Upload to Hosting
Upload all files maintaining the **flat root structure** above to your web host (cPanel File Manager or FTP):
- Upload to `public_html/` for root domain
- Ensure `index.html` is the default document
- Verify `llms.txt` and `llms-full.txt` are accessible at the root (e.g. `https://isengineeringco.in/llms.txt`)

### 3. Update Google Maps Embed
In `contact.html`, replace the Google Maps iframe `src` with the correct embed URL for your factory address:
1. Go to Google Maps → search "Darukhana, Mumbai 400010"
2. Click Share → Embed a map → Copy HTML
3. Replace the `<iframe src="...">` in contact.html

### 4. Configure Contact Form Backend
The contact form currently shows a success message (demo mode). To send real emails, integrate with:
- **Formspree** (free): Replace `<form id="contact-form">` with `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
- **EmailJS**: SDK is already linked in `contact.html` `<head>` — connect your EmailJS account ID in `script.js`
- **PHP Mailer**: Add `action="mail.php"` and create a server-side `mail.php` handler

### 5. SEO Final Steps
- Update `<lastmod>` dates in `sitemap.xml` when you publish changes
- Submit sitemap to Google Search Console: `https://search.google.com/search-console`
- Create/claim your **Google Business Profile** for local SEO (single biggest local ranking lever)
- List on IndiaMART, TradeIndia, JustDial for additional backlinks and local visibility
- Run the live site through **PageSpeed Insights** and compress images to WebP

### 6. WhatsApp Number
All WhatsApp links use `+918355815350` with pre-filled, page-specific enquiry messages.
If this number changes, search and replace `918355815350` across all HTML files.

---

## Features Included

| Feature | Status |
|---|---|
| 17-page responsive website (5 core + 12 product detail) | ✅ |
| Mobile-friendly hamburger menu with Products accordion | ✅ |
| Desktop Products dropdown (3-section mega menu) | ✅ |
| Hero image carousel (5 slides) | ✅ |
| Sticky header with scroll effect | ✅ |
| Product filter (category + search) | ✅ |
| Product detail tabs (Overview / Specs / Applications / FAQ) | ✅ |
| FAQ accordion (every page) | ✅ |
| Gallery with category tabs + embedded videos | ✅ |
| Contact form with validation | ✅ |
| WhatsApp floating button (page-specific pre-filled messages) | ✅ |
| Call Now floating button | ✅ |
| Back-to-top button | ✅ |
| Counter animation (stats bar) | ✅ |
| Fade-in scroll animations | ✅ |
| Full IS:1538 E Table Flange spec table | ✅ |
| Dimensional spec tables for all 12 products | ✅ |
| Comparison tables (flange types) | ✅ |
| Google Map embed (contact page) | ✅ |
| JSON-LD Schema (LocalBusiness, Product, FAQPage, Breadcrumb, Speakable) | ✅ |
| Open Graph + Twitter Card meta | ✅ |
| Canonical URLs | ✅ |
| geo.region / geo.placename meta tags | ✅ |
| XML Sitemap (17 pages + images) | ✅ |
| robots.txt | ✅ |
| llms.txt + llms-full.txt (AI/LLM discovery) | ✅ |
| Semantic HTML (header, main, section, article, footer) | ✅ |
| SEO-optimised headings H1–H4 | ✅ |
| Title tags (20–60 chars) + meta descriptions (100–160 chars) — all pages | ✅ |
| GSTIN displayed throughout | ✅ |
| Breadcrumb navigation (all pages) | ✅ |
| Testimonials section | ✅ |
| Industries served section | ✅ |
| Related Products cross-linking (product detail pages) | ✅ |
| CTA banners (every page) | ✅ |

---

## Colours
- Primary Green: `#5B8E1D`
- Dark Grey: `#3E3E3E`
- Background: `#FFFFFF`

## Contact Details Embedded
- Phone 1: +91 83558 15350
- Phone 2: +91 91373 32945
- Email: info.isengineering.co@gmail.com
- Factory: Gala No 10, Plot 255, Darukhana, Mumbai – 400010
- Office: Jasmin Apt A-Wing 304, Mumbra, Thane – 400612
- GSTIN: 27AMZPK5174G1ZE

---
*Website built for I.S. Engineering Co. — isengineeringco.in*
