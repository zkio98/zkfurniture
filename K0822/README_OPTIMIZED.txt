Furniture Website - Optimized Code Set

What was cleaned up:
1. Removed large duplicated CSS blocks from products.html and detail.html; shared styling is now in css/style.css.
2. Centralized mobile category open/close behavior in js/main.js instead of inline products.html code.
3. Products/detail pages now consume js/text.js and js/images.js for shared UI copy and logo configuration.
4. Reused helper logic for image/text assignment on the homepage.
5. Kept existing features and page flow: search, category filtering, recently viewed, return state, product detail gallery/lightbox/zoom/drag, WhatsApp, responsive layout.
6. Product/image data structures were kept as data files; no image files were modified.

Important:
- This cleanup does not attempt to fix missing/broken image assets.
- The current text values were preserved from the supplied baseline, including existing wording.
