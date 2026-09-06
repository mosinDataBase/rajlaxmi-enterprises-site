# RAJLAXMI ENTERPRISES website demo

Static, responsive, multi-page website proposal built from the supplied business brief.

## Preview
Run `python3 -m http.server 8080` inside this folder, then open `http://localhost:8080/`.

## Required edits before launch
1. Replace bracketed placeholders in `assets/js/config.js` with owner-confirmed values.
2. Confirm the postal code and opening hours.
3. Phone configuration: `phones.primary` is currently set to the verified number `9680245282`. `phones.secondary` and `phones.alternate` remain editable placeholders. Add a WhatsApp number only after confirming that it is WhatsApp-enabled. The site displays only configured phone numbers; Call buttons use the first configured number in Primary → Secondary → Alternate order.
4. Replace the `.example` canonical domain in the HTML files, `robots.txt`, and `sitemap.xml` with the final production domain.
5. Replace original SVG demo illustrations with owner-approved store/product photography if desired.
6. Add only verified review quotations; do not invent testimonials.
7. Review brand promotion before launch; no authorized dealership relationship is implied.
8. Connect a secure backend if a server-side form is desired. The included static form validates client-side and can hand off to WhatsApp once a verified number is configured.

## Structure
- `index.html` — homepage
- `products.html` — category-based products page
- `about.html` — factual about page
- `gallery.html` — accessible lightbox gallery
- `faqs.html` — FAQ accordion
- `contact.html` — contact/location + enquiry form
- `assets/js/config.js` — central editable business configuration
- `assets/css/styles.css` — shared responsive styling
- `assets/img/` — original demo logo and illustrations
- `robots.txt`, `sitemap.xml` — SEO basics
