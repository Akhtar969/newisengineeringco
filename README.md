# I.S. Engineering Co. — Website
**isengineeringco.in** | MS Flanges & E Table Flanges Manufacturer & Supplier, Mumbai — Since 1999

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
├── ms-flanges.html                ← Product Detail: MS Flanges (general — all types)
├── e-table-flanges.html           ← Product Detail: E Table Flanges (IS:1538) — FLAGSHIP product
├── blind-flanges.html             ← Product Detail: Blind Flanges (BLRF)
├── welding-neck-flanges.html      ← Product Detail: Welding Neck Flanges (WNRF)
├── socket-weld-flanges.html       ← Product Detail: Socket Weld Flanges (SW)
├── flat-flanges.html              ← Product Detail: Flat / Slip-On Flanges (SORF)
├── male-female-flanges.html       ← Product Detail: Male Female Flanges (M&F)
├── forged-flanges.html            ← Product Detail: Forged Flanges
├── ms-square-pipes.html           ← Product Detail: MS Square Pipes (IS:4923 SHS)
├── ms-round-pipes.html            ← Product Detail: MS ERW Round Pipes (IS:1239/IS:3589)
├── elbow-fittings.html            ← Product Detail: Elbow Fittings (45°/90°)
├── reducer-fittings.html          ← Product Detail: Reducer Fittings (Concentric/Eccentric)
│
├── robots.txt                    ← SEO robots file — allows all crawlers including AI bots
├── sitemap.xml                   ← XML sitemap for Google (all 17 pages + image sitemap)
├── llms.txt                      ← LLM discovery file for ChatGPT, Claude, Gemini, Perplexity
├── llms-full.txt                 ← Full structured content for AI citation and grounding
│
├── css/
│   └── style.css                 ← Complete stylesheet (all pages)
├── js/
│   └── script.js                 ← All JavaScript (carousel, FAQ, filter, product tabs, etc.)
└── assets/
    └── images/                   ← Product & factory images
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
| `robots.txt` | Crawl directives for all search engines AND AI bots (GPTBot, ClaudeBot, Google-Extended, PerplexityBot) |
| `sitemap.xml` | XML sitemap with all 17 pages + image sitemap entries — lastmod updated to 2026-06-25 |
| `llms.txt` | Short discovery file for AI crawlers — company facts, product list, key citation points, city targeting |
| `llms-full.txt` | Full structured content (specs, FAQs, dimensions, comparisons, city-wise supply) for AI grounding |

Every HTML page also includes inline:
- JSON-LD Schema: `LocalBusiness`, `Product`, `FAQPage`, `BreadcrumbList`, `SpeakableSpecification`
- Open Graph + Twitter Card meta tags
- `geo.region` / `geo.placename` meta tags
- Canonical URLs

---

## Navigation Structure

**Header (all pages):** Home · About · **Products ▾** (hover/tap dropdown) · Gallery · Contact · Get Quote button

Products dropdown grouped into 3 sections:
- **MS Flanges** → ms-flanges, e-table-flanges, blind-flanges, welding-neck-flanges, socket-weld-flanges, flat-flanges, male-female-flanges, forged-flanges
- **MS Pipes** → ms-square-pipes, ms-round-pipes
- **Pipe Fittings** → elbow-fittings, reducer-fittings, → "View All Products" link

**Footer (all pages):** Same Products list repeated as direct links for crawlability + internal linking.

---

## Deployment Instructions

### 1. Add Real Images
Place product/factory photos in `assets/images/` using filenames already referenced in the HTML:

**Hero/Factory:**
- `hero-flanges.jpg`, `hero-etable.jpg`, `hero-pipes.jpg`, `hero-factory.jpg`, `hero-fittings.jpg`
- `alll-flanges.jpg`

**Product Images:**
- `ms-flanges.jpg`, `E-Table-Flange.jpg`, `blind-pipe-flange.jpg`, `welding-neck-flanges.jpg`
- `socket-weld-flange.jpg`, `flat_flanges.png`, `male-female-flange-1.jpg`, `forged-flanges.jpg`
- `Ms-Square-Pipe.jpg`, `MS-Round-Pipes.jpg`, `mild-steel-rectangle-pipe.jpg`
- `ms-elbow.webp`, `ms-pipe-reducer.webp`
- `logo.png`

**Recommended:** Compress all images to WebP and use keyword-rich filenames (e.g. `e-table-flange-is1538-manufacturer-mumbai.webp`) for image SEO.

### 2. Upload to Hosting
Upload all files maintaining the **flat root structure** to your web host (cPanel File Manager or FTP):
- Upload to `public_html/` for root domain
- Ensure `index.html` is the default document
- Verify `llms.txt`, `llms-full.txt`, `robots.txt` and `sitemap.xml` are accessible at root

### 3. Submit to Google Search Console
After uploading:
- Go to https://search.google.com/search-console
- Add property → `https://isengineeringco.in`
- Submit sitemap: `https://isengineeringco.in/sitemap.xml`
- Request indexing for all important pages

### 4. Update Google Maps Embed
In `contact.html`, replace the Google Maps iframe `src` with correct embed URL:
1. Google Maps → search your factory address → Share → Embed a map → Copy HTML
2. Replace the `<iframe src="...">` in contact.html

### 5. Configure Contact Form
The form runs in demo mode. To send real emails, integrate with:
- **Formspree** (free): `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
- **EmailJS**: SDK already linked in contact.html — connect your EmailJS account in `script.js`
- **PHP Mailer**: Add `action="mail.php"` and create a server-side handler

### 6. Google Business Profile
Create/claim your **Google Business Profile** at business.google.com — single biggest local SEO lever.
Add: business name, address, phone, photos, products, and ask customers for Google reviews.

### 7. Directory Listings (Backlinks)
List on:
- IndiaMART: https://www.indiamart.com
- TradeIndia: https://www.tradeindia.com
- JustDial: https://www.justdial.com
- ExportersIndia: https://www.exportersindia.com
These create high-authority backlinks and additional lead sources.

### 8. WhatsApp Number
All WhatsApp links use `+918355815350`. If number changes, search and replace `918355815350` across all HTML files.

### 9. Update lastmod in sitemap.xml
When you publish page updates, update the `<lastmod>` dates in `sitemap.xml` to today's date and resubmit to Google Search Console.

---

## SEO Keywords Targeted

### Primary (Homepage + ms-flanges.html)
- MS Flanges Manufacturer in Mumbai
- MS Flanges Manufacturer Mumbai
- Best MS Flanges Manufacturer Mumbai

### Flagship (e-table-flanges.html)
- E Table Flanges Manufacturer in Mumbai
- IS 1538 Table E Flanges Mumbai
- E Table Flanges IS:1538 Manufacturer
- MCGM Approved E Table Flanges Mumbai
- MIDC E Table Flanges Mumbai

### Product-Specific
- Blind Flanges Manufacturer in Mumbai (BLRF)
- Welding Neck Flanges Manufacturer in Mumbai (WNRF)
- Socket Weld Flanges Manufacturer in Mumbai
- Flat Slip On Flanges Manufacturer in Mumbai (SORF)
- Forged Flanges Manufacturer in Mumbai
- MS Square Pipes Manufacturer in Mumbai IS:4923
- MS ERW Round Pipes Manufacturer in Mumbai IS:1239
- Elbow Fittings Manufacturer in Mumbai 45 90 Degree
- Reducer Fittings Manufacturer in Mumbai

### Location
- MS Flanges Manufacturer Darukhana Mumbai
- Flanges Manufacturer Navi Mumbai / Pune / PAN India

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
| robots.txt (with AI bot permissions) | ✅ |
| llms.txt + llms-full.txt (AI/LLM discovery) | ✅ |
| Semantic HTML (header, main, section, article, footer) | ✅ |
| SEO-optimised headings H1–H4 | ✅ |
| Title tags + meta descriptions — all pages | ✅ |
| Meta keywords — all pages | ✅ |
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

## Contact Details
- Phone 1: +91 83558 15350
- Phone 2: +91 91373 32945
- Email: info.isengineering.co@gmail.com
- Factory: Gala No 10, Plot 255, Darukhana, Mumbai – 400010
- Office: Jasmin Apt A-Wing 304, Mumbra, Thane – 400612
- GSTIN: 27AMZPK5174G1ZE

---
*Website built for I.S. Engineering Co. — isengineeringco.in | Updated June 2026*
