# ANTIGEN SEO Review Pack

Date: 2026-05-22

Status: Review draft. This document is the approval surface before SEO changes are made to the website.

## Goal

Prepare ANTIGEN for search discovery and social sharing without flattening its brand voice or turning the site into generic SEO copy.

The SEO pack should:

- make the public ANTIGEN pages legible to search engines and share previews
- connect ANTIGEN to branded founder searches for `Siddhartha Singh Antigen` and `Sid Singh Antigen`
- give POV articles a clean path to indexation and future editorial growth
- keep the implementation reviewable before any website SEO changes are pushed

## Current Site Reality

The current Next.js site has public routes for:

- `/`
- `/why`
- `/what`
- `/who`
- `/how`
- `/pov`
- `/pov/[slug]`
- `/contact`

The root layout currently exposes only a basic global title and description. The app does not yet expose a sitemap, robots policy, page-specific canonical strategy, social preview metadata, or structured data.

The current public-facing copy positions ANTIGEN as a post-algorithm intelligence collective built to tackle sameness, stagnation, and hard growth problems. The SEO plan should preserve that positioning while making the practical search intent clearer.

## Positioning Strategy

### Primary Discovery Jobs

1. Make ANTIGEN discoverable for its own brand name and the clear founder-linked searches:
   - `ANTIGEN`
   - `ANTIGEN Sid Singh`
   - `Sid Singh Antigen`
   - `Siddhartha Singh Antigen`
2. Give search engines strong page-level context for ANTIGEN's work:
   - strategy collective
   - brand and growth strategy
   - business problem solving
   - marketing and agency transformation
   - human and AI intelligence for strategy
3. Make POV the editorial surface for richer long-tail discovery over time.

### Founder Name Handling

The site should not repeat `Sid Singh` and `Siddhartha Singh` in every page title or paragraph.

Recommended handling:

- make the homepage and site identity layer carry the strongest founder linkage
- add one natural visible founder reference somewhere public if the business wants that relationship stated on-site
- use structured data only when the visible site and approved organization facts support it
- align external profiles and references after the site copy is approved

The reason is simple: founder-name searches are crowded and ambiguous. ANTIGEN needs a clear, credible entity relationship rather than keyword repetition.

## Page Roles

| Route | Search role | Index recommendation |
| --- | --- | --- |
| `/` | Brand and organization identity | Index |
| `/why` | Problem thesis and category tension | Index |
| `/what` | Model and offer explanation | Index |
| `/who` | Human and AI operating model | Index |
| `/how` | Engagement ecosystems and service fit | Index |
| `/pov` | Editorial hub | Index |
| `/pov/[slug]` | Article discovery and thought leadership | Index when the article is approved for public search |
| `/contact` | Conversion and branded contact intent | Index |
| `/planview` and similar private/client artifacts | Utility or client artifact | Exclude from sitemap and keep out of search unless explicitly approved |

## Page-By-Page SEO Assets

The recommended titles are concise enough to read cleanly in search while keeping the ANTIGEN brand attached to each page.

### Home

- Route: `/`
- Canonical: `https://1antigen.com/`
- Primary theme: ANTIGEN organization identity
- Supporting themes: Sid Singh, Siddhartha Singh, strategy collective, human and AI intelligence, hard growth problems
- SEO title: `ANTIGEN | Strategy Collective by Sid Singh`
- Meta description: `ANTIGEN is a post-algorithm strategy collective founded by Sid Singh to solve hard growth, brand, and transformation problems with human and AI intelligence.`
- Open Graph title: `ANTIGEN | Welcome to the Insurgence`
- Open Graph description: `A post-algorithm strategy collective built for hard growth, brand, and transformation problems.`
- Review note: Approve the visible and metadata-level founder wording before implementation. If `founded by` is too strong or too personal for the homepage, use `ANTIGEN | Strategy Collective` and put founder linkage elsewhere.

### Why

- Route: `/why`
- Canonical: `https://1antigen.com/why`
- Primary theme: why ANTIGEN exists
- Supporting themes: age of average, algorithmic sameness, strategy differentiation, brand stagnation
- SEO title: `Why ANTIGEN | Strategy Against Sameness`
- Meta description: `Why ANTIGEN exists: to challenge sameness, stagnation, and convergent thinking in brands, marketing, and growth strategy.`
- Open Graph title: `Why ANTIGEN Exists`
- Open Graph description: `The age of average is a strategic problem. ANTIGEN is built to challenge sameness and stagnation.`

### What

- Route: `/what`
- Canonical: `https://1antigen.com/what`
- Primary theme: ANTIGEN model
- Supporting themes: strategy collective, intelligence collective, alternatives to agency and consultancy models
- SEO title: `What ANTIGEN Is | Intelligence Collective`
- Meta description: `ANTIGEN is an intelligence collective that brings together senior minds, specialists, and AI systems for bespoke strategy and growth work.`
- Open Graph title: `What ANTIGEN Is`
- Open Graph description: `Not an agency factory. Not a traditional consultancy. A purpose-built intelligence collective.`

### Who

- Route: `/who`
- Canonical: `https://1antigen.com/who`
- Primary theme: ANTIGEN team and operating stack
- Supporting themes: experts, partners, AI engines, human and AI collaboration
- SEO title: `Who Powers ANTIGEN | Humans and AI`
- Meta description: `Meet the ANTIGEN operating stack: partners, experts, associates, and AI engines assembled around the problem to be solved.`
- Open Graph title: `Who Powers ANTIGEN`
- Open Graph description: `Sovereign humans and divergent intelligence engines combined for high-signal strategy work.`

### How

- Route: `/how`
- Canonical: `https://1antigen.com/how`
- Primary theme: ANTIGEN engagement model
- Supporting themes: agencies, brands, AdTech, MarTech, startups, transformation programs
- SEO title: `How ANTIGEN Works | Strategy Engagements`
- Meta description: `See how ANTIGEN works with agencies, brands, AdTech and MarTech teams, startups, and cross-sector leaders on high-stakes growth problems.`
- Open Graph title: `How ANTIGEN Works`
- Open Graph description: `Bespoke engagement models for the ecosystems where growth problems become hard problems.`

### POV

- Route: `/pov`
- Canonical: `https://1antigen.com/pov`
- Primary theme: ANTIGEN thought leadership
- Supporting themes: strategy POV, culture, AI, brand differentiation, growth thinking
- SEO title: `ANTIGEN POV | Strategy, Culture, and Growth`
- Meta description: `Read ANTIGEN POVs on strategy, culture, growth, AI, and the forces making brands and businesses converge toward average.`
- Open Graph title: `ANTIGEN POV`
- Open Graph description: `Ideas on strategy, culture, growth, AI, and the fight against average.`

### POV Article Template

- Route pattern: `/pov/[slug]`
- Canonical pattern: `https://1antigen.com/pov/[slug]`
- Primary theme: article topic
- SEO title template: `[Article Title] | ANTIGEN POV`
- Meta description template: use the approved article excerpt when it accurately summarizes the article
- Open Graph title template: `[Article Title]`
- Open Graph description template: use the approved article excerpt
- Index recommendation: index only articles that are complete, approved, and intended as public thought leadership

### Contact

- Route: `/contact`
- Canonical: `https://1antigen.com/contact`
- Primary theme: contact ANTIGEN
- Supporting themes: brief ANTIGEN, work with ANTIGEN, partner with ANTIGEN, join ANTIGEN
- SEO title: `Contact ANTIGEN | Brief, Join, or Partner`
- Meta description: `Contact ANTIGEN to brief a hard problem, explore a partnership, or join the network behind its strategy and intelligence work.`
- Open Graph title: `Contact ANTIGEN`
- Open Graph description: `Brief a hard problem, explore a partnership, or join the ANTIGEN network.`

## Keyword And Topic Map

### Branded

- ANTIGEN
- ANTIGEN strategy
- ANTIGEN Sid Singh
- Sid Singh Antigen
- Siddhartha Singh Antigen

### Business Discovery Themes

- strategy collective
- intelligence collective
- brand growth strategy
- growth strategy partner
- business transformation strategy
- marketing transformation strategy
- agency transformation strategy
- AI and human strategy
- hard business problems

### Editorial Themes For POV

- age of average
- algorithmic sameness
- brand differentiation
- strategy after AI
- culture and convergence
- marketing operating models
- growth architecture

These themes are directional. They should guide titles, summaries, internal links, and future POV content rather than be pasted into pages as keyword lists.

## Technical SEO Pack

### Metadata

Implementation should use the Next.js App Router metadata model already available in the project:

- a root metadata base for `https://1antigen.com`
- unique page metadata for each public static route
- dynamic metadata for approved POV posts
- canonical alternates for public pages
- default Open Graph and Twitter metadata

### Sitemap

The sitemap should include:

- `/`
- `/why`
- `/what`
- `/who`
- `/how`
- `/pov`
- `/contact`
- approved public POV posts

The sitemap should exclude:

- preview, draft, admin, or editor URLs
- client or utility artifacts unless explicitly approved for public search

### Robots

Recommended policy:

- allow crawling of the public site
- reference the sitemap
- keep search exclusion decisions page-specific where `noindex` is required

Review note: `robots.txt` and `noindex` solve different problems. The implementation should not depend on a robots disallow rule alone when the goal is to keep an accessible page out of search.

### Structured Data

Recommended first implementation:

- `Organization` for ANTIGEN on the site identity layer
- `WebSite` for the public website
- `Article` for approved POV posts when title, excerpt, publication date, author, and image fields are reliable

Founder linkage options:

1. Organization only, with founder names in approved page copy and metadata.
2. Organization plus a founder relationship when ANTIGEN approves public founder facts and a stable public founder reference.
3. Organization plus a separate public founder/about surface later if founder discoverability becomes a major acquisition path.

Recommendation: start with option 2 only if the final website copy will visibly state that Sid Singh is the founder. Otherwise start with option 1 and avoid structured data that outruns the page itself.

### Social Preview Images

Minimum recommended assets:

- default ANTIGEN Open Graph image
- default square or adaptable brand image for platforms that crop aggressively

Recommended default image direction:

- use ANTIGEN logo and the strongest first-viewport brand territory
- keep copy minimal
- prefer a clean brand claim such as `ANTIGEN` plus `Post-Algorithm Strategy Collective`
- do not place a long manifesto sentence in the image

POV articles can inherit the default image until articles have distinct approved cover images.

### Favicons And Identity Assets

Use the existing ANTIGEN logo assets as the starting point for:

- favicon review
- social preview review
- Organization logo reference

Before implementation, confirm which mark is the approved external identity asset for search and share surfaces.

## Editing Recommendation

The long-term editing model should allow approved SEO fields without turning SEO into an uncontrolled page-builder layer.

Recommended editable fields later:

- site default SEO title and description
- default social image
- per-page SEO title override
- per-page meta description override
- per-post SEO title, excerpt/meta description, social image, publication date, and author

Recommended locked behavior:

- canonical URL construction
- sitemap inclusion rules
- structured data templates and validation rules

## Approval Checklist

Approve or revise these before implementation:

1. Home title direction:
   - recommended: `ANTIGEN | Strategy Collective by Sid Singh`
   - quieter alternative: `ANTIGEN | Post-Algorithm Strategy Collective`
2. Home description wording:
   - recommended version states that ANTIGEN is founded by Sid Singh
3. Visible founder reference:
   - should the website itself visibly say `Sid Singh` and/or `Siddhartha Singh`?
4. Founder identity variant:
   - should the site present `Sid Singh` as the primary public name and `Siddhartha Singh` as the formal variant?
5. Public index list:
   - approve the public pages and approved POV posts only
6. Private/client artifact handling:
   - confirm that utility/client pages stay out of search by default
7. Social identity asset:
   - confirm the logo or mark to use for share images and structured-data logo references
8. External consistency:
   - after site approval, align relevant public profile bios or links with ANTIGEN where appropriate

## Implementation Checklist After Approval

After this pack is approved, implementation should:

1. add root metadata identity for the production domain
2. add reviewed metadata to each public page
3. add dynamic POV post metadata
4. add canonical URLs
5. add Open Graph and Twitter metadata
6. add a sitemap containing approved public routes and articles
7. add robots behavior
8. add initial structured data that matches approved public facts
9. add approved Open Graph image assets
10. verify rendered metadata, sitemap, robots output, and structured-data output before any push

## References For Implementation

The technical plan should follow current official guidance from:

- Google Search Central on title links, snippets/meta descriptions, robots controls, sitemaps, and structured data
- Next.js App Router metadata, sitemap, robots, and Open Graph conventions

The review standard is stricter than the implementation standard: no technical SEO change should be pushed before the user approves this asset pack and the founder-name decisions above.
