# ANTIGEN Website Build Spec

Date: 2026-05-16

## Goal

Build a modern, editable ANTIGEN website that can launch quickly at `1antigen.com` while leaving room for a richer, more animated version later.

The current folder contains the source material: brand guides, copy, logo assets, and static HTML draft pages. The one-page draft at `Draft Pages/antigen.html` is the visual and content backbone, but the final site must not be a one-page static site.

## Release Strategy

### Release 1: Simple Live Site

Create a polished multi-page Next.js site using the existing ANTIGEN visual system and draft content.

Routes:

- `/`
- `/why`
- `/what`
- `/who`
- `/how`
- `/pov`
- `/pov/[slug]`
- `/contact`
- `/studio`

The site should be ready to deploy to Hostinger VPS through Coolify and point to the final public domain `1antigen.com`.

### Release 2: Developed Site

After the simple site is live, add richer animation, slide-derived imagery, advanced media treatments, and more flexible editorial modules.

## Technology Stack

- Framework: Next.js with React
- CMS: Sanity
- CMS location: embedded Studio at `/studio`
- Styling: Tailwind CSS plus custom ANTIGEN design tokens
- Motion: Framer Motion
- Hosting target: Hostinger VPS running Coolify
- Source control and deployment trigger: GitHub repo connected to Coolify

Sanity is chosen because it is less operationally painful than a self-hosted CMS, supports a clean editor experience, handles images well, and works well with Next.js. Payload CMS is not chosen for this project because it would require more database, migration, storage, backup, and server maintenance.

## Editing Model

All major pages should be editable in Sanity to some extent, but the site should not become a freeform WYSIWYG builder.

Editable in Sanity:

- Page titles
- Hero headlines
- Intro and body copy
- Section labels
- Cards, lists, and stat blocks
- CTA text and links
- Images and media slots
- SEO title and description
- POV/blog posts
- Contact details

Locked in code:

- Layout system
- Typography rules
- Brand colors
- Navigation behavior
- Component styling
- Animation patterns
- Responsive structure

This protects the ANTIGEN design language while allowing ongoing content updates.

## Sanity Content Types

Create these Sanity document types:

- `homePage`
- `whyPage`
- `whatPage`
- `whoPage`
- `howPage`
- `povIndexPage`
- `contactPage`
- `post`
- `siteSettings`

`siteSettings` should hold shared data such as navigation labels, logo choice, default SEO, social links if added later, and contact email addresses.

## Page Content Shape

### Home

Editable fields:

- Hero headline
- Hero supporting copy
- CTA text and link
- Navigation teaser labels
- Optional hero media slot

### Why

Editable fields:

- Section label
- Main headline
- Intro paragraphs
- Three force cards: title, stat, caption, body
- Thesis label
- Thesis body copy
- Closing word-wall statement

### What

Editable fields:

- Section label
- Main headline
- Intro copy
- Model comparison rows
- Positioning matrix content
- Cell model entries
- Infrastructure blocks
- Closing line

### Who

Editable fields:

- Section label
- Main headline
- Human role cards
- AI engine cards
- Equation labels
- Pedigree strip

### How

Editable fields:

- Section label
- Main headline
- Intro copy
- Ecosystem cards
- Service velocity tiers
- CTA

### POV

Editable fields:

- Page headline
- Intro copy
- Featured posts
- Quote or thesis strip

Blog post fields:

- Title
- Slug
- Excerpt
- Cover image
- Category
- Published date
- Author
- Rich body content
- SEO metadata

### Contact

Editable fields:

- Headline
- Body copy
- Status labels
- Contact channels
- Closing CTA

## Visual Direction

Use the existing ANTIGEN V3 system:

- Red/magenta manifesto fields
- White evidence pages
- Black intervention moments
- Yellow signal accents
- Large uppercase condensed typography
- Editorial grids
- Hard rectangular components
- Minimal rounded corners
- High-contrast copy and data treatments

The site should feel like a strategic insurgency, not a generic consultancy or SaaS page.

## Asset Plan

Release 1 should use the current logo assets and CSS-native treatments from the draft pages.

Release 2 should repurpose slide materials into web-ready assets:

- Cropped images
- Optimized PNG/WebP assets
- SVG diagrams where appropriate
- Short motion clips or Lottie-style assets if useful
- Section-specific media treatments

## Deployment Plan

Target deployment:

- GitHub repo contains the Next.js project.
- Coolify on Hostinger VPS pulls from GitHub.
- Coolify manages build, environment variables, SSL, and deployment.
- DNS for `1antigen.com` points to the Hostinger VPS.
- Sanity Studio is available at `https://1antigen.com/studio`.

Environment variables will include Sanity project ID, dataset, API version, and any read tokens needed for draft preview.

## Success Criteria

Release 1 is successful when:

- The site is multi-page, not one-page.
- All major pages have structured editable content in Sanity.
- POV supports real blog posts.
- The design clearly follows the existing ANTIGEN draft and brand guides.
- The site builds successfully.
- The site can be deployed through Coolify to the Hostinger VPS.
- The editor can log in at `/studio` and update content without touching code.

## Open Operational Note

This folder is not currently a git repository and does not contain a package.json. The implementation phase should create a new Next.js project structure in this workspace or in a clean subfolder, then initialize source control when the user approves.
