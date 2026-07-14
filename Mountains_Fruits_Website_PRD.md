# Product Requirements Document (PRD)
## Mountains Fruits — Business Website

**Version:** 1.0
**Date:** July 13, 2026
**Prepared for:** Roshan, Mountains Fruits
**Prepared by:** Claude (Anthropic)

---

## 1. Overview

Mountains Fruits is a Bangalore-based business selling organic powder products — **Mudavattu Kilangu Powder** and **Mangosteen Powder** — through third-party platforms (Amazon, Flipkart, Swiggy Instamart). This PRD defines the requirements for a business website that establishes an online brand presence, builds customer trust, and directs traffic to existing sales channels.

## 2. Problem Statement

Mountains Fruits currently sells only through third-party marketplaces, which limits brand visibility and customer trust-building. A dedicated website will:
- Give the business a professional, independent online identity
- Educate customers about the products, their origin, and benefits
- Centralize links to all sales platforms in one place
- Build credibility through testimonials and organic certification messaging

## 3. Goals & Success Metrics

| Goal | Success Metric |
|---|---|
| Establish brand credibility | Professional, polished website live and accessible |
| Drive traffic to sales platforms | Clear, trackable click-throughs to Amazon/Flipkart/Swiggy Instamart |
| Build customer trust | Testimonials section live with genuine reviews |
| Support future growth | Site architecture allows adding direct ordering later without a full rebuild |

## 4. Target Audience

- **Health-conscious consumers** seeking organic, natural nutrition products
- **Traditional/Ayurvedic product buyers** familiar with ingredients like mudavattu kilangu
- Both segments may browse via mobile or desktop, primarily researching before purchasing on a marketplace they trust

## 5. Scope

### In Scope (Phase 1)
- Responsive marketing website (mobile, tablet, desktop)
- Home page with brand introduction and hero messaging
- Product showcase page(s) for both powders
- "Why choose us" / benefits section (organic certification, mountain sourcing, quality)
- Where to Buy section with outbound links to Amazon, Flipkart, and Swiggy Instamart
- Customer reviews/testimonials section
- Contact section (email, phone, Bangalore location)
- Earth-tone branded visual design (current 3D-style design as the visual direction)

### Out of Scope (Phase 1 — Future Consideration)
- Direct online ordering / cart / checkout on the website
- Payment gateway integration
- User accounts / login
- Blog or articles section
- FAQ page
- Multi-language support

*Note: Direct ordering is explicitly planned as a Phase 2 feature once order volume justifies the investment.*

## 5a. Visual Style Direction (Reference: consciousfood.com)

Roshan shared consciousfood.com as a style reference. Rather than copying their exact assets/CSS (which is their proprietary brand), the site will adopt the same *category of style* — a clean, trustworthy organic-grocery e-commerce aesthetic — reinterpreted in Mountains Fruits' own earth-tone identity:

- **Layout pattern:** Hero banner → trust badges row (organic, sourced locally, etc.) → product showcase → mission/story section → testimonials with names → certifications row → "Available At" platform logos → detailed footer
- **Typography:** Clean, bold sans-serif headings; generous white space; readable body text
- **Trust signals:** Certifications, testimonials with real customer names, retailer/platform logos displayed prominently
- **Color treatment:** Earth tones (browns, greens, creams) as the base palette — Mountains Fruits' own identity, not Conscious Food's green/white scheme

## 5b. Theme Toggle (New Requirement)

- A small icon (sun/moon) placed in the top navigation bar
- Lets visitors switch between **Light theme** (current earth-tone palette) and **Dark theme** (deep brown/charcoal background with warm accent tones, keeping the organic feel)
- Toggle state should persist during the browsing session
- Applies site-wide across all sections (header, product cards, testimonials, footer)

## 5c. Product Carousel (Homepage)

- Continuous auto-scrolling marquee-style carousel on the homepage (products move without stopping, no manual click needed)
- Displays both products (Mudavattu Kilangu Powder, Mangosteen Powder), repeated in a loop to fill the scrolling strip
- Should pause or slow slightly on hover for readability, then resume
- Styled consistently with the earth-tone (or dark theme, if toggled) branding

## 6. Functional Requirements

| # | Requirement | Priority |
|---|---|---|
| 1 | Homepage with hero banner, tagline, and brand intro | Must-have |
| 2 | Product pages/sections for Mudavattu Kilangu Powder and Mangosteen Powder with descriptions | Must-have |
| 3 | Organic certification badge/messaging | Must-have |
| 4 | Outbound links to Amazon, Flipkart, and Swiggy Instamart listings | Must-have |
| 5 | Testimonials/reviews section (static content, manually updated) | Must-have |
| 6 | Contact section with email, phone, and Bangalore location | Must-have |
| 7 | Fully responsive design across devices (tested separately on mobile, not assumed) | Must-have |
| 8 | Earth-tone color palette, organic/natural visual identity | Must-have |
| 9 | FAQ section (common questions on product usage, ordering, delivery via platforms) | Should-have |
| 10 | Dark/Light theme toggle icon in top navigation | Must-have |
| 11 | Continuous auto-scrolling product marquee/carousel on homepage | Must-have |
| 12 | Certifications section (organic certification badges) | Should-have |
| 12 | Fast load time, no unnecessary heavy assets | Should-have |
| 13 | Basic SEO tags (title, meta description) for discoverability | Should-have |

## 8a. Development Process (informed by build best practices)

1. **Build the basic version first** — core pages and content live before polish
2. **Dedicated enhancement pass** — once basic version works, do a focused pass on UI/UX, hero section, and visual polish
3. **Test responsiveness as its own step** — explicitly check mobile after desktop looks right; don't assume responsive design "just works"
4. **Add trust signals late-stage** — testimonials and FAQ added once core structure is stable, since they boost credibility right before launch
5. **Final walkthrough before go-live** — click through every section (products, links, contact, testimonials, FAQ) on both desktop and mobile before considering it done

## 7. Technical Requirements

- **Hosting:** GitHub Pages (static site) — free, suitable for a marketing site with no backend
- **Domain:** Not yet acquired; can be connected to GitHub Pages later via custom domain settings
- **Tech stack:** Static HTML/CSS (no backend/database needed for Phase 1)
- **Contact info:** Placeholder email/phone in current build to be replaced with real details before launch

## 8. Assumptions & Constraints

- Owner has no coding experience; all technical implementation and updates will be handled with AI/developer assistance
- No budget currently allocated for hosting/domain (GitHub Pages chosen to keep costs at zero for now)
- Testimonials will need to be sourced from existing marketplace reviews or direct customer feedback
- Real contact details (email, phone) are still pending and must be finalized before go-live

## 9. Open Questions

1. Do you have real customer testimonials/reviews already (e.g., copied from Amazon/Flipkart), or should we draft placeholder ones to replace later?
2. Do you want direct links to your exact product listing pages on each platform, or just to your storefront/brand page?
3. Any preference on a domain name once you're ready to buy one (e.g., mountainsfruits.com, mountainsfruits.in)?
4. Should the logo be text-based (styled business name) for now, or do you want a custom logo designed?

## 10. Milestones (Suggested)

| Milestone | Status |
|---|---|
| Initial website design (earth tone, 3D style) | ✅ Complete |
| Content finalization (real contact info, testimonials) | ⏳ Pending |
| GitHub Pages deployment | ⏳ Pending |
| Domain connection (when acquired) | 🔲 Future |
| Phase 2: Direct ordering evaluation | 🔲 Future (triggered by order volume growth) |

---

*This PRD is a living document and can be updated as requirements evolve.*
