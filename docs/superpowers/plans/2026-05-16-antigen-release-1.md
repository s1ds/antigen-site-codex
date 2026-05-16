# ANTIGEN Release 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first deployable multi-page ANTIGEN website with structured Sanity editing for every major page and POV/blog publishing.

**Architecture:** Create a new Next.js app in this workspace, embed Sanity Studio at `/studio`, define page/post schemas, seed the current draft content, and render each route from Sanity with fallback seed data. Keep page layouts and ANTIGEN styling in code while letting the user edit text, cards, CTAs, images, and posts in Sanity.

**Tech Stack:** Next.js, React, Sanity, Tailwind CSS, Framer Motion, GitHub, Hostinger VPS/Coolify.

---

## File Structure

Create a new app in `D:\CODEX\ANTIGEN SITE\antigen-web`.

Core files:

- `antigen-web/package.json`: scripts and dependencies.
- `antigen-web/next.config.mjs`: Next.js config.
- `antigen-web/.env.local.example`: required Sanity env variables.
- `antigen-web/src/app/layout.jsx`: global shell and metadata.
- `antigen-web/src/app/page.jsx`: home route.
- `antigen-web/src/app/why/page.jsx`: Why route.
- `antigen-web/src/app/what/page.jsx`: What route.
- `antigen-web/src/app/who/page.jsx`: Who route.
- `antigen-web/src/app/how/page.jsx`: How route.
- `antigen-web/src/app/pov/page.jsx`: POV index.
- `antigen-web/src/app/pov/[slug]/page.jsx`: individual blog/essay post.
- `antigen-web/src/app/contact/page.jsx`: Contact route.
- `antigen-web/src/app/studio/[[...tool]]/page.jsx`: embedded Sanity Studio.
- `antigen-web/src/app/globals.css`: Tailwind entry plus ANTIGEN global styling.
- `antigen-web/src/components/site/SiteHeader.jsx`: navigation.
- `antigen-web/src/components/site/SiteFooter.jsx`: footer.
- `antigen-web/src/components/sections/*.jsx`: focused visual sections.
- `antigen-web/src/components/ui/Button.jsx`: sharp ANTIGEN button.
- `antigen-web/src/lib/sanity/client.js`: Sanity client.
- `antigen-web/src/lib/sanity/queries.js`: GROQ queries.
- `antigen-web/src/lib/sanity/image.js`: image URL helper.
- `antigen-web/src/lib/fallbackContent.js`: release-1 fallback content from current drafts.
- `antigen-web/src/sanity/schemaTypes/*.js`: Sanity schemas.
- `antigen-web/src/sanity/structure.js`: Studio desk structure.
- `antigen-web/sanity.config.js`: Sanity Studio config.
- `antigen-web/sanity.cli.js`: Sanity CLI config.
- `antigen-web/scripts/seed-sanity.mjs`: seed initial content.
- `antigen-web/public/logos/*`: selected ANTIGEN logo assets copied from `Assets/Logos`.

## Task 1: Scaffold App

**Files:**
- Create: `antigen-web/package.json`
- Create: `antigen-web/next.config.mjs`
- Create: `antigen-web/jsconfig.json`
- Create: `antigen-web/.gitignore`
- Create: `antigen-web/.env.local.example`
- Create: `antigen-web/src/app/layout.jsx`
- Create: `antigen-web/src/app/page.jsx`
- Create: `antigen-web/src/app/globals.css`

- [ ] **Step 1: Create the Next app shell**

Run:

```powershell
npx create-next-app@latest antigen-web --js --tailwind --eslint --app --src-dir --import-alias "@/*"
```

Expected:

```text
Success! Created antigen-web
```

- [ ] **Step 2: Install project dependencies**

Run:

```powershell
npm install next-sanity sanity @sanity/client @sanity/image-url @portabletext/react framer-motion lucide-react
```

Expected: dependencies are added to `antigen-web/package.json`.

- [ ] **Step 3: Add environment template**

Create `antigen-web/.env.local.example`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-16
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=
```

- [ ] **Step 4: Add starter home page**

Replace `antigen-web/src/app/page.jsx` with:

```jsx
export default function HomePage() {
  return (
    <main>
      <section className="min-h-screen bg-antigen-red text-white px-page py-32 flex items-end">
        <div className="max-w-6xl">
          <h1 className="font-display text-[clamp(5rem,15vw,16rem)] leading-[0.76] uppercase tracking-tight">
            Welcome<br />
            To The<br />
            <span className="text-antigen-yellow">Insurgence.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-xl font-semibold leading-tight">
            A post-algorithm organism built to tackle stagnation and sameness through purpose-built configurations of minds and machines.
          </p>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 5: Add initial global styles**

Replace `antigen-web/src/app/globals.css` with:

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --antigen-red: #e31d28;
  --antigen-magenta: #e3195b;
  --antigen-black: #111111;
  --antigen-white: #ffffff;
  --antigen-paper: #f8f7f6;
  --antigen-smoke: #e8e8e8;
  --antigen-grey: #9fa2a4;
  --antigen-yellow: #ffc000;
  --page-pad: clamp(1.5rem, 5vw, 4.5rem);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--antigen-white);
  color: var(--antigen-black);
  font-family: Montserrat, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}

::selection {
  background: var(--antigen-yellow);
  color: var(--antigen-black);
}

.font-display {
  font-family: "Bebas Neue", Impact, "Arial Narrow", sans-serif;
}

.px-page {
  padding-left: var(--page-pad);
  padding-right: var(--page-pad);
}

.bg-antigen-red {
  background: linear-gradient(135deg, #e31d28 0%, #e3195b 72%, #f0448e 100%);
}

.text-antigen-yellow {
  color: var(--antigen-yellow);
}
```

- [ ] **Step 6: Verify scaffold**

Run:

```powershell
npm run lint
npm run build
```

Expected: both commands complete successfully.

## Task 2: Configure Sanity Studio

**Files:**
- Create: `antigen-web/sanity.config.js`
- Create: `antigen-web/sanity.cli.js`
- Create: `antigen-web/src/app/studio/[[...tool]]/page.jsx`
- Create: `antigen-web/src/sanity/schemaTypes/index.js`
- Create: `antigen-web/src/sanity/structure.js`

- [ ] **Step 1: Add Sanity config**

Create `antigen-web/sanity.config.js`:

```js
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemaTypes";
import { structure } from "./src/sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "replace-me";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "antigen",
  title: "ANTIGEN",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
});
```

- [ ] **Step 2: Add Sanity CLI config**

Create `antigen-web/sanity.cli.js`:

```js
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "replace-me";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default {
  api: {
    projectId,
    dataset,
  },
};
```

- [ ] **Step 3: Add Studio route**

Create `antigen-web/src/app/studio/[[...tool]]/page.jsx`:

```jsx
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
```

- [ ] **Step 4: Add temporary schema index**

Create `antigen-web/src/sanity/schemaTypes/index.js`:

```js
export const schemaTypes = [];
```

- [ ] **Step 5: Add Studio structure**

Create `antigen-web/src/sanity/structure.js`:

```js
export const structure = (S) =>
  S.list()
    .title("ANTIGEN")
    .items([
      S.documentTypeListItem("post").title("POV Posts"),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => item.getId() !== "post"),
    ]);
```

- [ ] **Step 6: Verify Studio compiles**

Run:

```powershell
npm run build
```

Expected: build succeeds. Studio will require real Sanity project values before production use.

## Task 3: Define Sanity Schemas

**Files:**
- Create: `antigen-web/src/sanity/schemaTypes/objects.js`
- Create: `antigen-web/src/sanity/schemaTypes/pages.js`
- Create: `antigen-web/src/sanity/schemaTypes/post.js`
- Create: `antigen-web/src/sanity/schemaTypes/siteSettings.js`
- Modify: `antigen-web/src/sanity/schemaTypes/index.js`
- Modify: `antigen-web/src/sanity/structure.js`

- [ ] **Step 1: Add reusable object schemas**

Create `antigen-web/src/sanity/schemaTypes/objects.js`:

```js
import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", title: "SEO Title", type: "string" }),
    defineField({ name: "description", title: "SEO Description", type: "text", rows: 3 }),
  ],
});

export const cta = defineType({
  name: "cta",
  title: "CTA",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Label", type: "string" }),
    defineField({ name: "href", title: "Link", type: "string" }),
  ],
});

export const statCard = defineType({
  name: "statCard",
  title: "Stat Card",
  type: "object",
  fields: [
    defineField({ name: "kicker", title: "Kicker", type: "string" }),
    defineField({ name: "stat", title: "Stat", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
  ],
});

export const contentCard = defineType({
  name: "contentCard",
  title: "Content Card",
  type: "object",
  fields: [
    defineField({ name: "kicker", title: "Kicker", type: "string" }),
    defineField({ name: "title", title: "Title", type: "string" }),
    defineField({ name: "body", title: "Body", type: "text", rows: 4 }),
  ],
});

export const richText = defineType({
  name: "richText",
  title: "Rich Text",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
      },
    },
    { type: "image", options: { hotspot: true } },
  ],
});
```

- [ ] **Step 2: Add page schemas**

Create `antigen-web/src/sanity/schemaTypes/pages.js` with singleton page documents:

```js
import { defineField, defineType } from "sanity";

const baseFields = [
  defineField({ name: "title", title: "Internal Title", type: "string", validation: (Rule) => Rule.required() }),
  defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
  defineField({ name: "headline", title: "Headline", type: "text", rows: 3 }),
  defineField({ name: "intro", title: "Intro Copy", type: "text", rows: 5 }),
  defineField({ name: "cta", title: "CTA", type: "cta" }),
  defineField({ name: "seo", title: "SEO", type: "seo" }),
];

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    ...baseFields,
    defineField({ name: "navTeasers", title: "Navigation Teasers", type: "array", of: [{ type: "contentCard" }] }),
  ],
});

export const whyPage = defineType({
  name: "whyPage",
  title: "Why Page",
  type: "document",
  fields: [
    ...baseFields,
    defineField({ name: "forceCards", title: "Force Cards", type: "array", of: [{ type: "statCard" }] }),
    defineField({ name: "thesisLabel", title: "Thesis Label", type: "string" }),
    defineField({ name: "thesisBody", title: "Thesis Body", type: "text", rows: 8 }),
    defineField({ name: "closingStatement", title: "Closing Statement", type: "string" }),
  ],
});

export const whatPage = defineType({
  name: "whatPage",
  title: "What Page",
  type: "document",
  fields: [
    ...baseFields,
    defineField({ name: "comparisonRows", title: "Model Comparison Rows", type: "array", of: [{ type: "contentCard" }] }),
    defineField({ name: "cellModel", title: "Cell Model Entries", type: "array", of: [{ type: "contentCard" }] }),
    defineField({ name: "infrastructure", title: "Infrastructure Blocks", type: "array", of: [{ type: "contentCard" }] }),
    defineField({ name: "closingLine", title: "Closing Line", type: "string" }),
  ],
});

export const whoPage = defineType({
  name: "whoPage",
  title: "Who Page",
  type: "document",
  fields: [
    ...baseFields,
    defineField({ name: "humanRoles", title: "Human Role Cards", type: "array", of: [{ type: "contentCard" }] }),
    defineField({ name: "aiEngines", title: "AI Engine Cards", type: "array", of: [{ type: "contentCard" }] }),
    defineField({ name: "pedigree", title: "Pedigree Names", type: "array", of: [{ type: "string" }] }),
  ],
});

export const howPage = defineType({
  name: "howPage",
  title: "How Page",
  type: "document",
  fields: [
    ...baseFields,
    defineField({ name: "ecosystems", title: "Ecosystem Cards", type: "array", of: [{ type: "contentCard" }] }),
    defineField({ name: "velocityTiers", title: "Velocity Tiers", type: "array", of: [{ type: "contentCard" }] }),
  ],
});

export const povIndexPage = defineType({
  name: "povIndexPage",
  title: "POV Index Page",
  type: "document",
  fields: [
    ...baseFields,
    defineField({ name: "quote", title: "Quote Strip", type: "string" }),
  ],
});

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    ...baseFields,
    defineField({ name: "statusItems", title: "Status Items", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "channels", title: "Contact Channels", type: "array", of: [{ type: "contentCard" }] }),
  ],
});
```

- [ ] **Step 3: Add post schema**

Create `antigen-web/src/sanity/schemaTypes/post.js`:

```js
import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "POV Post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 3 }),
    defineField({ name: "coverImage", title: "Cover Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "publishedAt", title: "Published Date", type: "datetime" }),
    defineField({ name: "author", title: "Author", type: "string" }),
    defineField({ name: "body", title: "Body", type: "richText" }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
```

- [ ] **Step 4: Add site settings schema**

Create `antigen-web/src/sanity/schemaTypes/siteSettings.js`:

```js
import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site Title", type: "string" }),
    defineField({ name: "defaultSeo", title: "Default SEO", type: "seo" }),
    defineField({ name: "briefEmail", title: "Brief Email", type: "string" }),
    defineField({ name: "talentEmail", title: "Talent Email", type: "string" }),
    defineField({ name: "partnerEmail", title: "Partner Email", type: "string" }),
  ],
});
```

- [ ] **Step 5: Export schemas**

Replace `antigen-web/src/sanity/schemaTypes/index.js` with:

```js
import { contentCard, cta, richText, seo, statCard } from "./objects";
import { contactPage, homePage, howPage, povIndexPage, whatPage, whoPage, whyPage } from "./pages";
import { post } from "./post";
import { siteSettings } from "./siteSettings";

export const schemaTypes = [
  seo,
  cta,
  statCard,
  contentCard,
  richText,
  siteSettings,
  homePage,
  whyPage,
  whatPage,
  whoPage,
  howPage,
  povIndexPage,
  contactPage,
  post,
];
```

- [ ] **Step 6: Update Studio structure for singleton pages**

Replace `antigen-web/src/sanity/structure.js` with:

```js
const singleton = (S, type, title) =>
  S.listItem()
    .title(title)
    .id(type)
    .child(S.document().schemaType(type).documentId(type).title(title));

export const structure = (S) =>
  S.list()
    .title("ANTIGEN")
    .items([
      singleton(S, "siteSettings", "Site Settings"),
      S.divider(),
      singleton(S, "homePage", "Home Page"),
      singleton(S, "whyPage", "Why Page"),
      singleton(S, "whatPage", "What Page"),
      singleton(S, "whoPage", "Who Page"),
      singleton(S, "howPage", "How Page"),
      singleton(S, "povIndexPage", "POV Index Page"),
      singleton(S, "contactPage", "Contact Page"),
      S.divider(),
      S.documentTypeListItem("post").title("POV Posts"),
    ]);
```

- [ ] **Step 7: Verify schemas**

Run:

```powershell
npm run build
```

Expected: build succeeds with schemas included.

## Task 4: Add Sanity Client, Queries, and Fallback Content

**Files:**
- Create: `antigen-web/src/lib/sanity/client.js`
- Create: `antigen-web/src/lib/sanity/queries.js`
- Create: `antigen-web/src/lib/sanity/image.js`
- Create: `antigen-web/src/lib/fallbackContent.js`

- [ ] **Step 1: Add Sanity client**

Create `antigen-web/src/lib/sanity/client.js`:

```js
import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-16",
  useCdn: true,
});

export async function fetchSanity(query, params = {}, fallback = null) {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return fallback;
  }

  try {
    const data = await sanityClient.fetch(query, params);
    return data || fallback;
  } catch {
    return fallback;
  }
}
```

- [ ] **Step 2: Add GROQ queries**

Create `antigen-web/src/lib/sanity/queries.js`:

```js
export const pageQuery = (type) => `*[_type == "${type}"][0]`;

export const settingsQuery = `*[_type == "siteSettings"][0]`;

export const postsQuery = `*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  author,
  coverImage
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  author,
  coverImage,
  body,
  seo
}`;
```

- [ ] **Step 3: Add image helper**

Create `antigen-web/src/lib/sanity/image.js`:

```js
import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "./client";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return source ? builder.image(source) : null;
}
```

- [ ] **Step 4: Add fallback content**

Create `antigen-web/src/lib/fallbackContent.js`:

```js
export const fallback = {
  settings: {
    title: "ANTIGEN",
    briefEmail: "sid@antigen.in",
    talentEmail: "talent@antigen.in",
    partnerEmail: "partners@antigen.in",
  },
  homePage: {
    sectionLabel: "Welcome to the Insurgence",
    headline: "Welcome\nTo The\nInsurgence.",
    intro:
      "We are a post-algorithm organism, built to tackle stagnation and sameness by bringing together a purpose-built configuration of minds and machines. We are looking for hard problems.",
    cta: { label: "Bring us a hard problem", href: "/contact" },
  },
  whyPage: {
    sectionLabel: "The Disruption",
    headline: "Forces of disruption have shifted growth to uncomfortable places.",
    intro:
      "We live in an Age of Average. Post-algorithm convergence engines are money-balling everything to homogeneity. The tools got faster. The ideas got slower. The industry kept billing.",
    forceCards: [
      { kicker: "Force 01 / Sameness", stat: "79%", title: "Sameness", body: "79% of brands exist without any meaningful difference versus their category." },
      { kicker: "Force 02 / Stagnation", stat: "29%", title: "Stagnation", body: "Only 29% of consumers find current media and advertising innovative." },
      { kicker: "Force 03 / Suppression", stat: "4%", title: "Suppression", body: "Only 4% of agencies tie strategy fees to business results." },
    ],
    thesisLabel: "Our Existence Is A Reaction.",
    thesisBody:
      "Organisations are organisms. The first-principles question is not how do we fix the agency? It is: if the agency did not exist, what would you build instead?",
    closingStatement: "Not an agency.",
  },
  whatPage: {
    sectionLabel: "Not an agency. Not a consultancy.",
    headline: "A First-Principles Intelligence Collective.",
    intro:
      "ANTIGEN replaces the agency factory model with a network model: orchestrating high-velocity insight at near-zero fixed cost.",
    comparisonRows: [
      { kicker: "Model", title: "Legacy: Convergent", body: "ANTIGEN: Divergent" },
      { kicker: "Talent", title: "Legacy: In-house upskill and hire", body: "ANTIGEN: Bespoke recombinant assembly" },
      { kicker: "Focus", title: "Legacy: Campaign oriented", body: "ANTIGEN: Outcome oriented" },
    ],
    cellModel: [
      { kicker: "Partners", title: "The Stewards", body: "Senior context holders accountable for outcomes." },
      { kicker: "Experts", title: "The Deep Nodes", body: "Specialist practitioners plugged in per engagement." },
      { kicker: "Associates", title: "Apprentice-Explorers", body: "Early-career talent supported by AI-amplified senior performance." },
    ],
    infrastructure: [
      { kicker: "01", title: "Zero-Legacy Value Model", body: "Built for value alignment, not value extraction." },
      { kicker: "02", title: "RAG-Based AI Synthesis Layer", body: "Institutional memory from day one." },
      { kicker: "03", title: "Service Velocity Architecture", body: "Two deployment tiers for fast and embedded work." },
    ],
    closingLine: "Where traditional agencies sell effort, ANTIGEN sells outcomes.",
  },
  whoPage: {
    sectionLabel: "The Stack",
    headline: "The Human\nx AI Stack.",
    intro: "ANTIGEN runs on two inputs multiplied together.",
    humanRoles: [
      { kicker: "Partners", title: "Senior Context Holders", body: "They manage relationships, carry reputational risk, and are accountable for outcomes." },
      { kicker: "Experts", title: "Highly Specialised Practitioners", body: "MarTech, performance, narrative, product marketing, commercial." },
      { kicker: "Associates", title: "Apprentice-Explorers", body: "Early-career talent learning through real problems." },
    ],
    aiEngines: [
      { kicker: "Permanent Dissent", title: "The Provocateur", body: "Challenges assumptions and prevents groupthink." },
      { kicker: "Institutional Memory", title: "The Synthesizer", body: "RAG-based knowledge graphs preserve collective wisdom." },
      { kicker: "Structured Creativity", title: "The Scaffolding", body: "Interfaces that guide more divergent output." },
    ],
    pedigree: ["P&G", "Coca-Cola", "WPP", "DoubleVerify", "Global Holding Companies"],
  },
  howPage: {
    sectionLabel: "Deployment Protocols",
    headline: "Deployment Protocols Across Ecosystems.",
    intro: "Every engagement begins the same way: we find the uncomfortable place where your growth is actually hiding and we go there.",
    ecosystems: [
      { kicker: "01", title: "Agencies", body: "Pitch strategy, capability building, thought leadership." },
      { kicker: "02", title: "Brands", body: "Transformation programs, agency review, performance marketing architecture." },
      { kicker: "03", title: "AdTech / MarTech", body: "GTM strategy, PMF advisory, holding company partnerships." },
      { kicker: "04", title: "Startups", body: "Positioning, growth architecture, fractional CMO." },
      { kicker: "05", title: "Cross-Sector", body: "Fractional CSO, advisory retainers, transformation programs." },
    ],
    velocityTiers: [
      { kicker: "Tier 1", title: "Immediate", body: "Days to weeks for high-velocity strategic challenges." },
      { kicker: "Tier 2", title: "Mid-Long Term", body: "Weeks to months for deeper integration and embedded transformation." },
    ],
  },
  povIndexPage: {
    sectionLabel: "ANTIGEN Perspectives",
    headline: "ANTIGEN\nPerspectives.",
    intro: "We do not hold positions quietly. Every growth problem has a structural diagnosis underneath it.",
    quote: "Infinite capability, finite courage.",
  },
  contactPage: {
    sectionLabel: "Contact",
    headline: "ANTIGEN unlocks growth from uncomfortable places.",
    intro:
      "If you have a hard problem, a brand that has gone average, a pitch you keep losing, or a growth engine that has stalled, we want to hear about it.",
    statusItems: ["Tier 1 available now", "Accepting new briefs", "Response within 24 hours", "Network open"],
    channels: [
      { kicker: "Brief Us", title: "sid@antigen.in", body: "Hard problems. Stalled growth. Pitch challenges." },
      { kicker: "Join the Network", title: "talent@antigen.in", body: "Strategists, creatives, specialist practitioners." },
      { kicker: "Partner With Us", title: "partners@antigen.in", body: "Agencies, platforms, ecosystem collaborators." },
    ],
  },
  posts: [
    {
      title: "The ANTIGENERIC Thesis",
      slug: "the-antigeneric-thesis",
      excerpt: "Why algorithmic sameness is the defining strategic crisis of this decade, and the antidote.",
      category: "Thesis",
      publishedAt: "2026-05-16",
      author: "ANTIGEN",
    },
  ],
};
```

- [ ] **Step 5: Verify data layer compiles**

Run:

```powershell
npm run build
```

Expected: build succeeds.

## Task 5: Build Shared Layout and Components

**Files:**
- Create: `antigen-web/src/components/site/SiteHeader.jsx`
- Create: `antigen-web/src/components/site/SiteFooter.jsx`
- Create: `antigen-web/src/components/ui/Button.jsx`
- Create: `antigen-web/src/components/sections/PageHero.jsx`
- Create: `antigen-web/src/components/sections/CardGrid.jsx`
- Modify: `antigen-web/src/app/layout.jsx`
- Modify: `antigen-web/src/app/globals.css`

- [ ] **Step 1: Add sharp button**

Create `antigen-web/src/components/ui/Button.jsx`:

```jsx
import Link from "next/link";

export function Button({ href, children, variant = "yellow" }) {
  const className =
    variant === "dark"
      ? "inline-flex min-h-12 items-center border-2 border-current px-5 text-xs font-black uppercase tracking-[0.1em] hover:bg-black hover:text-white"
      : "inline-flex min-h-12 items-center bg-[#ffc000] px-5 text-xs font-black uppercase tracking-[0.1em] text-black hover:bg-white";

  return (
    <Link className={className} href={href || "/"}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 2: Add header**

Create `antigen-web/src/components/site/SiteHeader.jsx`:

```jsx
import Link from "next/link";

const links = [
  ["Why", "/why"],
  ["What", "/what"],
  ["Who", "/who"],
  ["How", "/how"],
  ["POV", "/pov"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-black/90 px-page py-4 text-white backdrop-blur">
      <Link href="/" className="font-display text-3xl uppercase tracking-wide">
        ANTIGEN
      </Link>
      <nav className="hidden gap-7 md:flex">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="text-[0.68rem] font-extrabold uppercase tracking-[0.1em] text-white/55 hover:text-[#ffc000]">
            {label}
          </Link>
        ))}
      </nav>
      <Link href="/contact" className="text-[0.68rem] font-black uppercase tracking-[0.1em] text-[#ffc000]">
        Brief Us
      </Link>
    </header>
  );
}
```

- [ ] **Step 3: Add footer**

Create `antigen-web/src/components/site/SiteFooter.jsx`:

```jsx
export function SiteFooter() {
  return (
    <footer className="bg-black px-page py-10 text-white">
      <div className="flex flex-col gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-4xl uppercase text-white/20">ANTIGEN</p>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/35">
          A First-Principles Intelligence Collective
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Add reusable hero**

Create `antigen-web/src/components/sections/PageHero.jsx`:

```jsx
export function PageHero({ label, headline, intro, tone = "light" }) {
  const dark = tone === "dark";

  return (
    <section className={dark ? "bg-black px-page pb-20 pt-32 text-white" : "bg-[#f8f7f6] px-page pb-20 pt-32 text-black"}>
      <div className="mb-12 flex items-center justify-between border-b border-current/15 pb-4">
        <p className={dark ? "text-xs font-extrabold uppercase tracking-[0.12em] text-[#ffc000]" : "text-xs font-extrabold uppercase tracking-[0.12em] text-[#e31d28]"}>
          {label}
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <h1 className="font-display text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.82] tracking-tight whitespace-pre-line">
          {headline}
        </h1>
        {intro ? <p className="max-w-2xl text-lg font-medium leading-relaxed text-current/70">{intro}</p> : null}
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Add reusable card grid**

Create `antigen-web/src/components/sections/CardGrid.jsx`:

```jsx
export function CardGrid({ items = [], columns = "three", dark = false }) {
  const gridClass = columns === "two" ? "md:grid-cols-2" : "md:grid-cols-3";

  return (
    <div className={`grid gap-5 ${gridClass}`}>
      {items.map((item, index) => (
        <article key={`${item.title}-${index}`} className={dark ? "border border-white/10 bg-white/5 p-6 text-white" : "border border-black/10 bg-white p-6 text-black"}>
          {item.kicker ? <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.1em] text-[#e31d28]">{item.kicker}</p> : null}
          {item.stat ? <p className="font-display text-8xl leading-none">{item.stat}</p> : null}
          <h2 className="mb-3 font-display text-5xl uppercase leading-none text-[#e31d28]">{item.title}</h2>
          <p className="text-sm font-semibold leading-relaxed text-current/65">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
```

- [ ] **Step 6: Wire global layout**

Replace `antigen-web/src/app/layout.jsx` with:

```jsx
import "./globals.css";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export const metadata = {
  title: "ANTIGEN",
  description: "A First-Principles Intelligence Collective.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
```

- [ ] **Step 7: Verify shared components**

Run:

```powershell
npm run lint
npm run build
```

Expected: both pass.

## Task 6: Build Page Routes From Sanity Data

**Files:**
- Modify: `antigen-web/src/app/page.jsx`
- Create: `antigen-web/src/app/why/page.jsx`
- Create: `antigen-web/src/app/what/page.jsx`
- Create: `antigen-web/src/app/who/page.jsx`
- Create: `antigen-web/src/app/how/page.jsx`
- Create: `antigen-web/src/app/contact/page.jsx`

- [ ] **Step 1: Implement home route**

Replace `antigen-web/src/app/page.jsx` with:

```jsx
import { Button } from "@/components/ui/Button";
import { fetchSanity } from "@/lib/sanity/client";
import { pageQuery } from "@/lib/sanity/queries";
import { fallback } from "@/lib/fallbackContent";

export default async function HomePage() {
  const page = await fetchSanity(pageQuery("homePage"), {}, fallback.homePage);

  return (
    <main>
      <section className="min-h-screen bg-antigen-red px-page pb-24 pt-32 text-white">
        <div className="flex min-h-[70vh] items-end">
          <div className="max-w-6xl">
            <p className="mb-6 text-xs font-extrabold uppercase tracking-[0.14em] text-white/55">{page.sectionLabel}</p>
            <h1 className="font-display text-[clamp(5rem,15vw,16rem)] uppercase leading-[0.76] tracking-tight whitespace-pre-line">
              {page.headline}
            </h1>
            <div className="mt-10 grid gap-8 border-t border-white/20 pt-8 lg:grid-cols-[1.2fr_0.8fr]">
              <p className="max-w-3xl text-xl font-semibold leading-tight">{page.intro}</p>
              <div className="lg:text-right">
                <Button href={page.cta?.href}>{page.cta?.label || "Bring us a hard problem"}</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Implement Why route**

Create `antigen-web/src/app/why/page.jsx`:

```jsx
import { CardGrid } from "@/components/sections/CardGrid";
import { PageHero } from "@/components/sections/PageHero";
import { fetchSanity } from "@/lib/sanity/client";
import { pageQuery } from "@/lib/sanity/queries";
import { fallback } from "@/lib/fallbackContent";

export default async function WhyPage() {
  const page = await fetchSanity(pageQuery("whyPage"), {}, fallback.whyPage);

  return (
    <main className="bg-[#f8f7f6]">
      <PageHero label={page.sectionLabel} headline={page.headline} intro={page.intro} />
      <section className="px-page pb-24">
        <CardGrid items={page.forceCards} />
      </section>
      <section className="grid gap-10 bg-black px-page py-20 text-white lg:grid-cols-[0.8fr_1.2fr]">
        <h2 className="font-display text-[clamp(3rem,7vw,7.5rem)] uppercase leading-[0.8]">{page.thesisLabel}</h2>
        <p className="text-lg font-medium leading-relaxed text-white/70">{page.thesisBody}</p>
      </section>
      <section className="bg-antigen-red px-page py-20">
        <p className="font-display text-[clamp(5rem,16vw,17rem)] uppercase leading-[0.72] tracking-tight text-black">{page.closingStatement}</p>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Implement What route**

Create `antigen-web/src/app/what/page.jsx`:

```jsx
import { CardGrid } from "@/components/sections/CardGrid";
import { PageHero } from "@/components/sections/PageHero";
import { fetchSanity } from "@/lib/sanity/client";
import { pageQuery } from "@/lib/sanity/queries";
import { fallback } from "@/lib/fallbackContent";

export default async function WhatPage() {
  const page = await fetchSanity(pageQuery("whatPage"), {}, fallback.whatPage);

  return (
    <main>
      <PageHero label={page.sectionLabel} headline={page.headline} intro={page.intro} />
      <section className="px-page pb-20">
        <CardGrid items={page.comparisonRows} columns="three" />
      </section>
      <section className="bg-black px-page py-20 text-white">
        <h2 className="mb-10 font-display text-7xl uppercase text-[#ffc000]">The Cell Model</h2>
        <CardGrid items={page.cellModel} columns="three" dark />
      </section>
      <section className="bg-[#f8f7f6] px-page py-20">
        <h2 className="mb-10 font-display text-7xl uppercase">The Infrastructure</h2>
        <CardGrid items={page.infrastructure} columns="two" />
        <p className="mt-12 bg-[#e31d28] p-6 text-2xl font-black text-white">{page.closingLine}</p>
      </section>
    </main>
  );
}
```

- [ ] **Step 4: Implement Who route**

Create `antigen-web/src/app/who/page.jsx`:

```jsx
import { CardGrid } from "@/components/sections/CardGrid";
import { PageHero } from "@/components/sections/PageHero";
import { fetchSanity } from "@/lib/sanity/client";
import { pageQuery } from "@/lib/sanity/queries";
import { fallback } from "@/lib/fallbackContent";

export default async function WhoPage() {
  const page = await fetchSanity(pageQuery("whoPage"), {}, fallback.whoPage);

  return (
    <main className="bg-antigen-red text-white">
      <PageHero label={page.sectionLabel} headline={page.headline} intro={page.intro} tone="dark" />
      <section className="grid gap-8 px-page pb-20 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#ffc000]">Sovereign Humans</h2>
          <CardGrid items={page.humanRoles} columns="one" dark />
        </div>
        <div>
          <h2 className="mb-6 text-xs font-extrabold uppercase tracking-[0.12em] text-[#ffc000]">Divergent Intelligence Engines</h2>
          <CardGrid items={page.aiEngines} columns="one" dark />
        </div>
      </section>
      <section className="bg-black/40 px-page py-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-white/35">Pedigree from</p>
        <div className="mt-4 flex flex-wrap gap-5">
          {(page.pedigree || []).map((name) => (
            <span key={name} className="font-display text-4xl uppercase text-white/35">{name}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 5: Implement How route**

Create `antigen-web/src/app/how/page.jsx`:

```jsx
import { CardGrid } from "@/components/sections/CardGrid";
import { PageHero } from "@/components/sections/PageHero";
import { fetchSanity } from "@/lib/sanity/client";
import { pageQuery } from "@/lib/sanity/queries";
import { fallback } from "@/lib/fallbackContent";

export default async function HowPage() {
  const page = await fetchSanity(pageQuery("howPage"), {}, fallback.howPage);

  return (
    <main>
      <PageHero label={page.sectionLabel} headline={page.headline} intro={page.intro} />
      <section className="px-page pb-20">
        <CardGrid items={page.ecosystems} columns="three" />
      </section>
      <section className="bg-black px-page py-20 text-white">
        <h2 className="mb-10 font-display text-7xl uppercase">Service <span className="text-[#ffc000]">Velocity</span> Architecture</h2>
        <CardGrid items={page.velocityTiers} columns="two" dark />
      </section>
    </main>
  );
}
```

- [ ] **Step 6: Implement Contact route**

Create `antigen-web/src/app/contact/page.jsx`:

```jsx
import { CardGrid } from "@/components/sections/CardGrid";
import { PageHero } from "@/components/sections/PageHero";
import { fetchSanity } from "@/lib/sanity/client";
import { pageQuery } from "@/lib/sanity/queries";
import { fallback } from "@/lib/fallbackContent";

export default async function ContactPage() {
  const page = await fetchSanity(pageQuery("contactPage"), {}, fallback.contactPage);

  return (
    <main className="bg-black text-white">
      <PageHero label={page.sectionLabel} headline={page.headline} intro={page.intro} tone="dark" />
      <section className="px-page pb-20">
        <div className="mb-10 flex flex-wrap gap-4">
          {(page.statusItems || []).map((item) => (
            <span key={item} className="border border-white/10 px-4 py-3 text-xs font-extrabold uppercase tracking-[0.1em] text-white/45">{item}</span>
          ))}
        </div>
        <CardGrid items={page.channels} columns="three" dark />
      </section>
    </main>
  );
}
```

- [ ] **Step 7: Verify routes**

Run:

```powershell
npm run build
```

Expected: all routes build successfully using fallback content.

## Task 7: Build POV Blog

**Files:**
- Create: `antigen-web/src/app/pov/page.jsx`
- Create: `antigen-web/src/app/pov/[slug]/page.jsx`
- Create: `antigen-web/src/components/sections/PostCard.jsx`

- [ ] **Step 1: Add post card**

Create `antigen-web/src/components/sections/PostCard.jsx`:

```jsx
import Link from "next/link";

export function PostCard({ post }) {
  return (
    <Link href={`/pov/${post.slug}`} className="block border border-black/10 bg-white p-6 text-black transition hover:-translate-y-1 hover:border-[#e31d28]">
      <p className="mb-4 font-display text-7xl leading-none text-black/10">{post.category || "POV"}</p>
      <h2 className="mb-3 text-2xl font-black leading-tight tracking-tight">{post.title}</h2>
      <p className="mb-5 text-sm font-medium leading-relaxed text-black/60">{post.excerpt}</p>
      <span className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#e31d28]">Read perspective</span>
    </Link>
  );
}
```

- [ ] **Step 2: Add POV index**

Create `antigen-web/src/app/pov/page.jsx`:

```jsx
import { PageHero } from "@/components/sections/PageHero";
import { PostCard } from "@/components/sections/PostCard";
import { fallback } from "@/lib/fallbackContent";
import { fetchSanity } from "@/lib/sanity/client";
import { pageQuery, postsQuery } from "@/lib/sanity/queries";

export default async function PovPage() {
  const page = await fetchSanity(pageQuery("povIndexPage"), {}, fallback.povIndexPage);
  const posts = await fetchSanity(postsQuery, {}, fallback.posts);

  return (
    <main className="bg-[#f8f7f6]">
      <PageHero label={page.sectionLabel} headline={page.headline} intro={page.intro} />
      <section className="grid gap-5 px-page pb-20 md:grid-cols-2">
        {(posts || []).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
      <section className="bg-black px-page py-16 text-white">
        <p className="font-display text-[clamp(3rem,8vw,8rem)] uppercase leading-[0.85]">{page.quote}</p>
      </section>
    </main>
  );
}
```

- [ ] **Step 3: Add post page**

Create `antigen-web/src/app/pov/[slug]/page.jsx`:

```jsx
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { fallback } from "@/lib/fallbackContent";
import { fetchSanity } from "@/lib/sanity/client";
import { postBySlugQuery } from "@/lib/sanity/queries";

export default async function PostPage({ params }) {
  const fallbackPost = fallback.posts.find((post) => post.slug === params.slug);
  const post = await fetchSanity(postBySlugQuery, { slug: params.slug }, fallbackPost);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-[#f8f7f6] px-page pb-24 pt-36">
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.12em] text-[#e31d28]">{post.category || "POV"}</p>
        <h1 className="font-display text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.82] tracking-tight">{post.title}</h1>
        {post.excerpt ? <p className="mt-8 text-xl font-semibold leading-relaxed text-black/65">{post.excerpt}</p> : null}
        <div className="mt-12 border-t border-black/10 pt-10 text-lg font-medium leading-relaxed">
          {post.body ? <PortableText value={post.body} /> : <p>This essay will be published here.</p>}
        </div>
      </article>
    </main>
  );
}
```

- [ ] **Step 4: Verify POV**

Run:

```powershell
npm run build
```

Expected: `/pov` and `/pov/the-antigeneric-thesis` build successfully.

## Task 8: Seed Sanity Content

**Files:**
- Create: `antigen-web/scripts/seed-sanity.mjs`
- Modify: `antigen-web/package.json`

- [ ] **Step 1: Add seed script**

Create `antigen-web/scripts/seed-sanity.mjs`:

```js
import { createClient } from "@sanity/client";
import { fallback } from "../src/lib/fallbackContent.js";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-16",
  useCdn: false,
});

const singletonMap = {
  siteSettings: fallback.settings,
  homePage: fallback.homePage,
  whyPage: fallback.whyPage,
  whatPage: fallback.whatPage,
  whoPage: fallback.whoPage,
  howPage: fallback.howPage,
  povIndexPage: fallback.povIndexPage,
  contactPage: fallback.contactPage,
};

for (const [type, value] of Object.entries(singletonMap)) {
  await client.createOrReplace({
    _id: type,
    _type: type,
    title: value.title || type,
    ...value,
  });
  console.log(`Seeded ${type}`);
}

for (const post of fallback.posts) {
  await client.createOrReplace({
    _id: `post.${post.slug}`,
    _type: "post",
    ...post,
    slug: { _type: "slug", current: post.slug },
  });
  console.log(`Seeded post ${post.slug}`);
}
```

- [ ] **Step 2: Add seed script command**

Update `antigen-web/package.json` scripts to include:

```json
"seed:sanity": "node scripts/seed-sanity.mjs"
```

- [ ] **Step 3: Verify script syntax**

Run:

```powershell
node --check scripts/seed-sanity.mjs
```

Expected: no syntax errors.

## Task 9: Copy Logo Assets and Add Deployment Notes

**Files:**
- Create: `antigen-web/public/logos/`
- Create: `antigen-web/docs/deployment.md`
- Modify: `antigen-web/README.md`

- [ ] **Step 1: Copy logo assets**

Run:

```powershell
New-Item -ItemType Directory -Force -Path "public\logos"
Copy-Item "..\Assets\Logos\antigen-logo-white.png" "public\logos\antigen-logo-white.png"
Copy-Item "..\Assets\Logos\antigen-logo-black.png" "public\logos\antigen-logo-black.png"
Copy-Item "..\Assets\Logos\Logo whtonblk circular.png" "public\logos\logo-white-on-black-circular.png"
Copy-Item "..\Assets\Logos\Logo blkonwht circular.png" "public\logos\logo-black-on-white-circular.png"
```

Expected: selected logo files exist in `antigen-web/public/logos`.

- [ ] **Step 2: Add deployment notes**

Create `antigen-web/docs/deployment.md`:

```md
# ANTIGEN Deployment Notes

Target domain: `1antigen.com`

Hosting:

- Hostinger VPS
- Coolify
- Next.js app deployed from GitHub
- Sanity Studio embedded at `/studio`

Coolify environment variables:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_READ_TOKEN`
- `SANITY_API_WRITE_TOKEN`

Initial deployment flow:

1. Push the repo to GitHub.
2. Create a new Coolify application from the GitHub repo.
3. Set the build command to `npm run build`.
4. Set the start command to `npm run start`.
5. Add the Sanity environment variables.
6. Point `1antigen.com` DNS to the Hostinger VPS.
7. Configure SSL in Coolify.
8. Open `https://1antigen.com/studio` and sign in to edit content.
```

- [ ] **Step 3: Update README**

Replace `antigen-web/README.md` with:

```md
# ANTIGEN Website

Modern multi-page ANTIGEN site built with Next.js and Sanity.

## Local Development

```powershell
npm install
npm run dev
```

Open:

- Site: `http://localhost:3000`
- Studio: `http://localhost:3000/studio`

## Content Editing

All major pages are structured Sanity documents. The page layouts remain in code so the visual identity stays consistent.

## Deployment

See `docs/deployment.md`.
```

- [ ] **Step 4: Verify docs/assets**

Run:

```powershell
Get-ChildItem public\logos
npm run build
```

Expected: logo files are listed and build succeeds.

## Task 10: Browser QA and Release 1 Handoff

**Files:**
- No required code files unless QA finds issues.

- [ ] **Step 1: Start local server**

Run:

```powershell
npm run dev
```

Expected: local dev server starts at `http://localhost:3000`.

- [ ] **Step 2: Check primary routes**

Open these routes in the browser:

```text
http://localhost:3000/
http://localhost:3000/why
http://localhost:3000/what
http://localhost:3000/who
http://localhost:3000/how
http://localhost:3000/pov
http://localhost:3000/pov/the-antigeneric-thesis
http://localhost:3000/contact
http://localhost:3000/studio
```

Expected:

- Pages load without errors.
- Navigation links work.
- Text does not overlap on desktop or mobile.
- POV index links to a post page.
- Studio route renders.

- [ ] **Step 3: Check mobile viewport**

Use a mobile viewport around 390px wide.

Expected:

- Header remains usable.
- Hero type does not make the page horizontally scroll.
- Card grids collapse.
- Contact channels remain readable.

- [ ] **Step 4: Final verification**

Run:

```powershell
npm run lint
npm run build
```

Expected: both pass.

---

## Self-Review

Spec coverage:

- Multi-page site: covered by Tasks 6 and 7.
- Sanity Studio at `/studio`: covered by Task 2.
- Structured editing for all major pages: covered by Task 3.
- POV/blog: covered by Tasks 3 and 7.
- Existing draft content as source: covered by Task 4 fallback content.
- Hostinger VPS/Coolify deployment: covered by Task 9.
- Simple live release before richer asset phase: covered by this plan scope.

Known intentional deferrals:

- Slide-derived animated assets are Release 2.
- Advanced page-builder style CMS blocks are Release 2 if needed.
- Production Sanity project creation and token generation require user account access and are documented through environment variables.
