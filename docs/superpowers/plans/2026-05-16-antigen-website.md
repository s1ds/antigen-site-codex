# ANTIGEN Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a launch-ready multi-page Next.js + Sanity website for ANTIGEN with structured editing for every major page and a blog-driven POV section.

**Architecture:** Create a new Next.js app in `site/` so the current folder remains a source-material archive. Use Sanity Studio embedded at `/studio`, define page-specific schemas, seed the initial content from the existing draft/copy files, and render each route from Sanity with code-locked ANTIGEN components.

**Tech Stack:** Next.js, React, JavaScript, Tailwind CSS, Sanity, next-sanity, Framer Motion, GitHub/Coolify deployment target.

---

## File Structure

Create a new app under `D:\CODEX\ANTIGEN SITE\site`.

- `site/package.json`: project scripts and dependencies.
- `site/next.config.mjs`: Next.js configuration for Sanity image domains.
- `site/jsconfig.json`: path aliases.
- `site/postcss.config.mjs`: Tailwind/PostCSS wiring.
- `site/tailwind.config.js`: ANTIGEN tokens and content paths.
- `site/.env.example`: documented Sanity environment variables.
- `site/src/app/layout.jsx`: root app shell and metadata.
- `site/src/app/globals.css`: global Tailwind imports and ANTIGEN base styles.
- `site/src/app/page.jsx`: home route.
- `site/src/app/why/page.jsx`: Why route.
- `site/src/app/what/page.jsx`: What route.
- `site/src/app/who/page.jsx`: Who route.
- `site/src/app/how/page.jsx`: How route.
- `site/src/app/pov/page.jsx`: POV index route.
- `site/src/app/pov/[slug]/page.jsx`: blog post route.
- `site/src/app/contact/page.jsx`: Contact route.
- `site/src/app/studio/[[...tool]]/page.jsx`: embedded Sanity Studio route.
- `site/src/components/SiteHeader.jsx`: shared navigation.
- `site/src/components/SiteFooter.jsx`: shared footer.
- `site/src/components/PageFrame.jsx`: shared page wrapper and section chrome.
- `site/src/components/PortableTextRenderer.jsx`: Sanity rich-text rendering.
- `site/src/components/ui/ButtonLink.jsx`: sharp ANTIGEN CTA component.
- `site/src/components/sections/ForceCards.jsx`: Why force-card section.
- `site/src/components/sections/ComparisonTable.jsx`: What comparison section.
- `site/src/components/sections/CellModel.jsx`: What cell model section.
- `site/src/components/sections/HumanAiStack.jsx`: Who stack section.
- `site/src/components/sections/EcosystemGrid.jsx`: How ecosystem section.
- `site/src/components/sections/VelocityTiers.jsx`: How tier section.
- `site/src/components/sections/PostCard.jsx`: POV card component.
- `site/src/lib/sanity/client.js`: Sanity client.
- `site/src/lib/sanity/image.js`: Sanity image URL helper.
- `site/src/lib/sanity/queries.js`: GROQ queries.
- `site/src/sanity/schemaTypes/*.js`: Sanity schemas.
- `site/src/sanity/structure.js`: Studio desk structure.
- `site/src/sanity/env.js`: Sanity config values.
- `site/src/sanity/sanity.config.js`: Studio config.
- `site/src/sanity/seed/initialContent.mjs`: seed content from current ANTIGEN copy.
- `site/public/logos/*`: copied logo assets.

## Task 1: Scaffold Project

**Files:**
- Create: `site/package.json`
- Create: `site/next.config.mjs`
- Create: `site/jsconfig.json`
- Create: `site/postcss.config.mjs`
- Create: `site/tailwind.config.js`
- Create: `site/.env.example`

- [ ] **Step 1: Create the app folder**

Run:

```powershell
New-Item -ItemType Directory -Force -Path site
```

Expected: `site` exists under the project root.

- [ ] **Step 2: Create `package.json`**

Create `site/package.json` with:

```json
{
  "name": "antigen-site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "sanity:seed": "node src/sanity/seed/initialContent.mjs"
  },
  "dependencies": {
    "@portabletext/react": "^3.2.1",
    "@sanity/image-url": "^1.1.0",
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.468.0",
    "next": "^15.0.0",
    "next-sanity": "^9.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "sanity": "^3.70.0",
    "styled-components": "^6.1.13"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.20",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17"
  }
}
```

- [ ] **Step 3: Add Next config**

Create `site/next.config.mjs` with:

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io'
      }
    ]
  }
};

export default nextConfig;
```

- [ ] **Step 4: Add path aliases**

Create `site/jsconfig.json` with:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

- [ ] **Step 5: Add PostCSS config**

Create `site/postcss.config.mjs` with:

```js
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};

export default config;
```

- [ ] **Step 6: Add Tailwind config**

Create `site/tailwind.config.js` with:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/sanity/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        antigen: {
          red: '#e31d28',
          magenta: '#e3195b',
          crimson: '#b11226',
          black: '#111111',
          paper: '#f8f7f6',
          smoke: '#e8e8e8',
          grey: '#9fa2a4',
          yellow: '#ffc000',
          blue: '#08a7d8'
        }
      },
      fontFamily: {
        display: ['Bebas Neue', 'Impact', 'Arial Narrow', 'sans-serif'],
        sans: ['Montserrat', 'Arial', 'sans-serif']
      },
      boxShadow: {
        hard: '10px 10px 0 rgba(17,17,17,.92)'
      }
    }
  },
  plugins: []
};
```

- [ ] **Step 7: Add environment example**

Create `site/.env.example` with:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-16
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=
NEXT_PUBLIC_SITE_URL=https://1antigen.com
```

- [ ] **Step 8: Install dependencies**

Run:

```powershell
cd site
npm install
```

Expected: dependencies install and `site/package-lock.json` is created.

- [ ] **Step 9: Commit scaffold**

If git has been initialized, run:

```powershell
git add site/package.json site/package-lock.json site/next.config.mjs site/jsconfig.json site/postcss.config.mjs site/tailwind.config.js site/.env.example
git commit -m "chore: scaffold antigen next app"
```

Expected: scaffold commit is created. If git is not initialized yet, record this as pending until Task 13.

## Task 2: Add App Shell and Global Styling

**Files:**
- Create: `site/src/app/layout.jsx`
- Create: `site/src/app/globals.css`
- Create: `site/src/components/SiteHeader.jsx`
- Create: `site/src/components/SiteFooter.jsx`
- Create: `site/src/components/PageFrame.jsx`
- Create: `site/src/components/ui/ButtonLink.jsx`
- Copy: `Assets/Logos/*` to `site/public/logos/*`

- [ ] **Step 1: Create directories**

Run:

```powershell
New-Item -ItemType Directory -Force -Path site/src/app, site/src/components/ui, site/public/logos
Copy-Item -Path 'Assets/Logos/*' -Destination 'site/public/logos/' -Force
```

Expected: directories exist and logo files are copied.

- [ ] **Step 2: Create global CSS**

Create `site/src/app/globals.css` with:

```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-red: #e31d28;
  --color-magenta: #e3195b;
  --color-black: #111111;
  --color-white: #ffffff;
  --color-paper: #f8f7f6;
  --color-smoke: #e8e8e8;
  --color-grey: #9fa2a4;
  --color-yellow: #ffc000;
  --gradient-insurgence: linear-gradient(135deg, #e31d28 0%, #e3195b 72%, #f0448e 100%);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--color-white);
  color: var(--color-black);
  font-family: 'Montserrat', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-rendering: geometricPrecision;
}

::selection {
  background: var(--color-yellow);
  color: var(--color-black);
}

a {
  color: inherit;
}

.manifesto-bg {
  background: var(--gradient-insurgence);
}

.display-type {
  font-family: 'Bebas Neue', Impact, 'Arial Narrow', sans-serif;
  letter-spacing: -0.02em;
  line-height: 0.82;
  text-transform: uppercase;
}

.page-pad {
  padding-left: clamp(1.5rem, 5vw, 4.5rem);
  padding-right: clamp(1.5rem, 5vw, 4.5rem);
}

.section-pad {
  padding-top: clamp(5rem, 8vw, 8rem);
  padding-bottom: clamp(5rem, 8vw, 8rem);
}

.antigen-grid {
  background-image:
    linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

- [ ] **Step 3: Create `ButtonLink`**

Create `site/src/components/ui/ButtonLink.jsx` with:

```jsx
import Link from 'next/link';

export function ButtonLink({ href, children, tone = 'yellow' }) {
  const className = tone === 'dark'
    ? 'inline-flex min-h-12 items-center border-2 border-antigen-black px-5 py-3 text-xs font-black uppercase tracking-[.12em] text-antigen-black transition hover:bg-antigen-black hover:text-white'
    : 'inline-flex min-h-12 items-center bg-antigen-yellow px-5 py-3 text-xs font-black uppercase tracking-[.12em] text-antigen-black transition hover:bg-white';

  if (href?.startsWith('mailto:') || href?.startsWith('http')) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href || '/'}>
      {children}
    </Link>
  );
}
```

- [ ] **Step 4: Create header**

Create `site/src/components/SiteHeader.jsx` with:

```jsx
import Link from 'next/link';
import { ButtonLink } from '@/components/ui/ButtonLink';

const navItems = [
  { label: 'Why', href: '/why' },
  { label: 'What', href: '/what' },
  { label: 'Who', href: '/who' },
  { label: 'How', href: '/how' },
  { label: 'POV', href: '/pov' }
];

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-antigen-black/88 px-[clamp(1.5rem,5vw,4.5rem)] py-4 text-white backdrop-blur">
      <nav className="flex items-center justify-between gap-6">
        <Link href="/" className="display-type text-3xl text-white no-underline">
          ANTIGEN
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-white/55 no-underline transition hover:text-antigen-yellow"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden sm:block">
          <ButtonLink href="/contact">Bring us a hard problem</ButtonLink>
        </div>
      </nav>
    </header>
  );
}
```

- [ ] **Step 5: Create footer**

Create `site/src/components/SiteFooter.jsx` with:

```jsx
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="bg-antigen-black px-[clamp(1.5rem,5vw,4.5rem)] py-10 text-white">
      <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="display-type text-5xl text-white/20">ANTIGEN</p>
          <p className="mt-2 max-w-xl text-xs font-bold uppercase tracking-[.12em] text-white/35">
            A First-Principles Intelligence Collective
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs font-extrabold uppercase tracking-[.12em] text-white/45">
          <Link href="/why">Why</Link>
          <Link href="/what">What</Link>
          <Link href="/who">Who</Link>
          <Link href="/how">How</Link>
          <Link href="/pov">POV</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 6: Create page frame**

Create `site/src/components/PageFrame.jsx` with:

```jsx
export function SectionHeader({ label, meta, dark = false }) {
  return (
    <div className={`mb-12 flex items-center justify-between border-b pb-4 ${dark ? 'border-white/15' : 'border-black/15'}`}>
      <span className={`flex items-center gap-3 text-[.68rem] font-extrabold uppercase tracking-[.12em] ${dark ? 'text-antigen-yellow' : 'text-antigen-red'}`}>
        <span className={`h-px w-8 ${dark ? 'bg-antigen-yellow' : 'bg-antigen-red'}`} />
        {label}
      </span>
      {meta ? (
        <span className={`hidden text-[.68rem] font-extrabold uppercase tracking-[.12em] sm:block ${dark ? 'text-white/30' : 'text-antigen-grey'}`}>
          {meta}
        </span>
      ) : null}
    </div>
  );
}

export function PageFrame({ children, className = '' }) {
  return <main className={className}>{children}</main>;
}
```

- [ ] **Step 7: Create root layout**

Create `site/src/app/layout.jsx` with:

```jsx
import './globals.css';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://1antigen.com'),
  title: {
    default: 'ANTIGEN',
    template: '%s | ANTIGEN'
  },
  description: 'A post-algorithm organism built to solve hard growth problems with purpose-built configurations of minds and machines.'
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

- [ ] **Step 8: Run build check**

Run:

```powershell
cd site
npm run build
```

Expected: build fails only because page routes do not exist yet. If it fails due to syntax in created files, fix the syntax before moving on.

## Task 3: Configure Sanity

**Files:**
- Create: `site/src/sanity/env.js`
- Create: `site/src/sanity/sanity.config.js`
- Create: `site/src/sanity/structure.js`
- Create: `site/src/app/studio/[[...tool]]/page.jsx`
- Create: `site/src/lib/sanity/client.js`
- Create: `site/src/lib/sanity/image.js`

- [ ] **Step 1: Create Sanity directories**

Run:

```powershell
New-Item -ItemType Directory -Force -Path site/src/sanity, site/src/app/studio/[[...tool]], site/src/lib/sanity
```

Expected: directories exist.

- [ ] **Step 2: Create Sanity env helper**

Create `site/src/sanity/env.js` with:

```js
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-05-16';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
```

- [ ] **Step 3: Create Sanity client**

Create `site/src/lib/sanity/client.js` with:

```js
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '@/sanity/env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: 'published'
});
```

- [ ] **Step 4: Create image helper**

Create `site/src/lib/sanity/image.js` with:

```js
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/lib/sanity/client';

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
```

- [ ] **Step 5: Create Studio structure**

Create `site/src/sanity/structure.js` with:

```js
const singletonTypes = [
  'siteSettings',
  'homePage',
  'whyPage',
  'whatPage',
  'whoPage',
  'howPage',
  'povIndexPage',
  'contactPage'
];

export const structure = (S) =>
  S.list()
    .title('ANTIGEN Content')
    .items([
      S.listItem().title('Site Settings').id('siteSettings').child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem().title('Home').id('homePage').child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem().title('Why').id('whyPage').child(S.document().schemaType('whyPage').documentId('whyPage')),
      S.listItem().title('What').id('whatPage').child(S.document().schemaType('whatPage').documentId('whatPage')),
      S.listItem().title('Who').id('whoPage').child(S.document().schemaType('whoPage').documentId('whoPage')),
      S.listItem().title('How').id('howPage').child(S.document().schemaType('howPage').documentId('howPage')),
      S.listItem().title('POV Index').id('povIndexPage').child(S.document().schemaType('povIndexPage').documentId('povIndexPage')),
      S.listItem().title('Contact').id('contactPage').child(S.document().schemaType('contactPage').documentId('contactPage')),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => !singletonTypes.includes(item.getId()))
    ]);
```

- [ ] **Step 6: Create Studio config placeholder**

Create `site/src/sanity/sanity.config.js` with:

```js
'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { dataset, projectId } from '@/sanity/env';
import { structure } from '@/sanity/structure';
import { schemaTypes } from '@/sanity/schemaTypes';

export default defineConfig({
  name: 'antigen',
  title: 'ANTIGEN',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes
  }
});
```

- [ ] **Step 7: Create Studio route**

Create `site/src/app/studio/[[...tool]]/page.jsx` with:

```jsx
'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity/sanity.config';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
```

## Task 4: Define Sanity Schemas

**Files:**
- Create: `site/src/sanity/schemaTypes/index.js`
- Create: `site/src/sanity/schemaTypes/objects.js`
- Create: `site/src/sanity/schemaTypes/siteSettings.js`
- Create: `site/src/sanity/schemaTypes/homePage.js`
- Create: `site/src/sanity/schemaTypes/whyPage.js`
- Create: `site/src/sanity/schemaTypes/whatPage.js`
- Create: `site/src/sanity/schemaTypes/whoPage.js`
- Create: `site/src/sanity/schemaTypes/howPage.js`
- Create: `site/src/sanity/schemaTypes/povIndexPage.js`
- Create: `site/src/sanity/schemaTypes/contactPage.js`
- Create: `site/src/sanity/schemaTypes/post.js`

- [ ] **Step 1: Create schema directory**

Run:

```powershell
New-Item -ItemType Directory -Force -Path site/src/sanity/schemaTypes
```

- [ ] **Step 2: Add reusable object schemas**

Create `site/src/sanity/schemaTypes/objects.js` with:

```js
export const seoFields = [
  { name: 'seoTitle', title: 'SEO Title', type: 'string' },
  { name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3 }
];

export const link = {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    { name: 'label', title: 'Label', type: 'string' },
    { name: 'href', title: 'URL or path', type: 'string' }
  ]
};

export const statCard = {
  name: 'statCard',
  title: 'Stat Card',
  type: 'object',
  fields: [
    { name: 'kicker', title: 'Kicker', type: 'string' },
    { name: 'stat', title: 'Stat', type: 'string' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'body', title: 'Body', type: 'text', rows: 4 }
  ]
};

export const simpleCard = {
  name: 'simpleCard',
  title: 'Simple Card',
  type: 'object',
  fields: [
    { name: 'kicker', title: 'Kicker', type: 'string' },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'body', title: 'Body', type: 'text', rows: 4 }
  ]
};

export const richBody = {
  name: 'richBody',
  title: 'Rich Body',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading', value: 'h2' },
        { title: 'Subheading', value: 'h3' },
        { title: 'Quote', value: 'blockquote' }
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' }
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [{ name: 'href', type: 'url', title: 'URL' }]
          }
        ]
      }
    },
    { type: 'image', options: { hotspot: true } }
  ]
};
```

- [ ] **Step 3: Add site settings schema**

Create `site/src/sanity/schemaTypes/siteSettings.js` with:

```js
import { link, seoFields } from './objects';

export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    { name: 'title', title: 'Site Title', type: 'string' },
    { name: 'description', title: 'Default Description', type: 'text', rows: 3 },
    { name: 'briefEmail', title: 'Brief Email', type: 'string' },
    { name: 'talentEmail', title: 'Talent Email', type: 'string' },
    { name: 'partnersEmail', title: 'Partners Email', type: 'string' },
    { name: 'navigation', title: 'Navigation', type: 'array', of: [link] },
    ...seoFields
  ]
};
```

- [ ] **Step 4: Add page schemas**

Create each page schema with the listed fields:

`site/src/sanity/schemaTypes/homePage.js`

```js
import { link, seoFields } from './objects';

export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    { name: 'heroKicker', title: 'Hero Kicker', type: 'string' },
    { name: 'headlineLines', title: 'Headline Lines', type: 'array', of: [{ type: 'string' }] },
    { name: 'supportingCopy', title: 'Supporting Copy', type: 'text', rows: 4 },
    { name: 'cta', title: 'CTA', type: 'link' },
    { name: 'navTeasers', title: 'Navigation Teasers', type: 'array', of: [link] },
    { name: 'heroMedia', title: 'Hero Media', type: 'image', options: { hotspot: true } },
    ...seoFields
  ]
};
```

`site/src/sanity/schemaTypes/whyPage.js`

```js
import { seoFields, statCard } from './objects';

export const whyPage = {
  name: 'whyPage',
  title: 'Why Page',
  type: 'document',
  fields: [
    { name: 'sectionLabel', title: 'Section Label', type: 'string' },
    { name: 'sectionMeta', title: 'Section Meta', type: 'string' },
    { name: 'headline', title: 'Headline', type: 'text', rows: 2 },
    { name: 'intro', title: 'Intro Paragraphs', type: 'array', of: [{ type: 'text' }] },
    { name: 'forceCards', title: 'Force Cards', type: 'array', of: [statCard] },
    { name: 'thesisLabel', title: 'Thesis Label', type: 'string' },
    { name: 'thesisBody', title: 'Thesis Body', type: 'array', of: [{ type: 'text' }] },
    { name: 'wordWall', title: 'Word Wall Statement', type: 'string' },
    ...seoFields
  ]
};
```

`site/src/sanity/schemaTypes/whatPage.js`

```js
import { seoFields, simpleCard } from './objects';

export const whatPage = {
  name: 'whatPage',
  title: 'What Page',
  type: 'document',
  fields: [
    { name: 'sectionLabel', title: 'Section Label', type: 'string' },
    { name: 'sectionMeta', title: 'Section Meta', type: 'string' },
    { name: 'headlineLines', title: 'Headline Lines', type: 'array', of: [{ type: 'string' }] },
    { name: 'intro', title: 'Intro Paragraphs', type: 'array', of: [{ type: 'text' }] },
    { name: 'comparisonRows', title: 'Comparison Rows', type: 'array', of: [{ type: 'object', fields: [
      { name: 'attribute', title: 'Attribute', type: 'string' },
      { name: 'legacy', title: 'Legacy', type: 'string' },
      { name: 'antigen', title: 'ANTIGEN', type: 'string' }
    ] }] },
    { name: 'cellModel', title: 'Cell Model', type: 'array', of: [simpleCard] },
    { name: 'infrastructure', title: 'Infrastructure', type: 'array', of: [simpleCard] },
    { name: 'closingLine', title: 'Closing Line', type: 'text', rows: 2 },
    ...seoFields
  ]
};
```

`site/src/sanity/schemaTypes/whoPage.js`

```js
import { seoFields, simpleCard } from './objects';

export const whoPage = {
  name: 'whoPage',
  title: 'Who Page',
  type: 'document',
  fields: [
    { name: 'sectionLabel', title: 'Section Label', type: 'string' },
    { name: 'sectionMeta', title: 'Section Meta', type: 'string' },
    { name: 'headlineLines', title: 'Headline Lines', type: 'array', of: [{ type: 'string' }] },
    { name: 'humanHeader', title: 'Human Column Header', type: 'string' },
    { name: 'humanCards', title: 'Human Cards', type: 'array', of: [simpleCard] },
    { name: 'engineHeader', title: 'Engine Column Header', type: 'string' },
    { name: 'engineCards', title: 'Engine Cards', type: 'array', of: [simpleCard] },
    { name: 'equation', title: 'Equation Text', type: 'string' },
    { name: 'pedigree', title: 'Pedigree Names', type: 'array', of: [{ type: 'string' }] },
    ...seoFields
  ]
};
```

`site/src/sanity/schemaTypes/howPage.js`

```js
import { link, seoFields, simpleCard } from './objects';

export const howPage = {
  name: 'howPage',
  title: 'How Page',
  type: 'document',
  fields: [
    { name: 'sectionLabel', title: 'Section Label', type: 'string' },
    { name: 'sectionMeta', title: 'Section Meta', type: 'string' },
    { name: 'headline', title: 'Headline', type: 'text', rows: 2 },
    { name: 'intro', title: 'Intro', type: 'text', rows: 4 },
    { name: 'ecosystems', title: 'Ecosystem Cards', type: 'array', of: [simpleCard] },
    { name: 'tiers', title: 'Velocity Tiers', type: 'array', of: [simpleCard] },
    { name: 'cta', title: 'CTA', type: 'link' },
    ...seoFields
  ]
};
```

`site/src/sanity/schemaTypes/povIndexPage.js`

```js
import { seoFields } from './objects';

export const povIndexPage = {
  name: 'povIndexPage',
  title: 'POV Index Page',
  type: 'document',
  fields: [
    { name: 'sectionLabel', title: 'Section Label', type: 'string' },
    { name: 'sectionMeta', title: 'Section Meta', type: 'string' },
    { name: 'headline', title: 'Headline', type: 'text', rows: 2 },
    { name: 'intro', title: 'Intro', type: 'text', rows: 4 },
    { name: 'thesisLabel', title: 'Thesis Label', type: 'string' },
    { name: 'thesisBody', title: 'Thesis Body', type: 'text', rows: 4 },
    { name: 'quote', title: 'Quote', type: 'string' },
    ...seoFields
  ]
};
```

`site/src/sanity/schemaTypes/contactPage.js`

```js
import { link, seoFields, simpleCard } from './objects';

export const contactPage = {
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    { name: 'sectionLabel', title: 'Section Label', type: 'string' },
    { name: 'sectionMeta', title: 'Section Meta', type: 'string' },
    { name: 'headline', title: 'Headline', type: 'text', rows: 4 },
    { name: 'body', title: 'Body Paragraphs', type: 'array', of: [{ type: 'text' }] },
    { name: 'statusItems', title: 'Status Items', type: 'array', of: [{ type: 'string' }] },
    { name: 'channels', title: 'Contact Channels', type: 'array', of: [simpleCard] },
    { name: 'cta', title: 'CTA', type: 'link' },
    ...seoFields
  ]
};
```

- [ ] **Step 5: Add post schema**

Create `site/src/sanity/schemaTypes/post.js` with:

```js
import { richBody, seoFields } from './objects';

export const post = {
  name: 'post',
  title: 'POV Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'body', title: 'Body', type: 'richBody' },
    ...seoFields
  ]
};
```

- [ ] **Step 6: Export all schemas**

Create `site/src/sanity/schemaTypes/index.js` with:

```js
import { contactPage } from './contactPage';
import { homePage } from './homePage';
import { howPage } from './howPage';
import { link, richBody, simpleCard, statCard } from './objects';
import { post } from './post';
import { povIndexPage } from './povIndexPage';
import { siteSettings } from './siteSettings';
import { whatPage } from './whatPage';
import { whoPage } from './whoPage';
import { whyPage } from './whyPage';

export const schemaTypes = [
  link,
  statCard,
  simpleCard,
  richBody,
  siteSettings,
  homePage,
  whyPage,
  whatPage,
  whoPage,
  howPage,
  povIndexPage,
  contactPage,
  post
];
```

## Task 5: Add Queries and Fallback Content

**Files:**
- Create: `site/src/lib/sanity/queries.js`
- Create: `site/src/lib/fallbackContent.js`

- [ ] **Step 1: Create GROQ queries**

Create `site/src/lib/sanity/queries.js` with:

```js
export const homePageQuery = `*[_type == "homePage"][0]`;
export const whyPageQuery = `*[_type == "whyPage"][0]`;
export const whatPageQuery = `*[_type == "whatPage"][0]`;
export const whoPageQuery = `*[_type == "whoPage"][0]`;
export const howPageQuery = `*[_type == "howPage"][0]`;
export const povIndexPageQuery = `*[_type == "povIndexPage"][0]`;
export const contactPageQuery = `*[_type == "contactPage"][0]`;

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
  seoTitle,
  seoDescription
}`;
```

- [ ] **Step 2: Create fallback content**

Create `site/src/lib/fallbackContent.js` with:

```js
export const fallbackHome = {
  heroKicker: 'FILE REF: 001-A · STATUS: ACTIVE · 1ANTIGEN.COM',
  headlineLines: ['Welcome', 'to the', 'Insurgence.'],
  supportingCopy: 'A post-algorithm organism built to tackle stagnation and sameness through purpose-built configurations of minds and machines. We are looking for hard problems.',
  cta: { label: 'Talk to us if you have one', href: '/contact' },
  navTeasers: [
    { label: 'The Disruption', href: '/why' },
    { label: 'The Model', href: '/what' },
    { label: 'The Stack', href: '/who' },
    { label: 'How We Deploy', href: '/how' },
    { label: 'POV', href: '/pov' }
  ]
};

export const fallbackWhy = {
  sectionLabel: 'The Disruption',
  sectionMeta: 'Why ANTIGEN exists',
  headline: 'Forces of disruption have shifted growth to uncomfortable places.',
  intro: [
    'We live in an Age of Average. Post-algorithm convergence engines are money-balling everything to homogeneity. The tools got faster. The ideas got slower. The industry kept billing.',
    'Three forces have permanently shifted growth to uncomfortable places, and none of them reward the legacy model that most agencies still run.'
  ],
  forceCards: [
    { kicker: 'Force 01 / Sameness', stat: '79%', title: 'Sameness', body: 'Most brands exist without meaningful difference versus their category. The same compression is happening to marketing.' },
    { kicker: 'Force 02 / Stagnation', stat: '29%', title: 'Stagnation', body: 'Only a minority of consumers find current media and advertising innovative. Speed without direction is camouflage.' },
    { kicker: 'Force 03 / Suppression', stat: '4%', title: 'Suppression', body: 'Very few agencies tie strategy fees to business results. The structural model rewards slow work and scope creep.' }
  ],
  thesisLabel: 'Our Existence Is A Reaction.',
  thesisBody: [
    'Organisations are organisms: systems that act, react, grow, shrink, thrive, or diminish based on their ability to respond to threats.',
    'The answer is not a better agency. It is a distributed intelligence network built to solve problems rather than sustain a billing model.'
  ],
  wordWall: 'Not an agency.'
};

export const fallbackWhat = {
  sectionLabel: 'Not an agency. Not a consultancy.',
  sectionMeta: 'The Model',
  headlineLines: ['A First-Principles', 'Intelligence', 'Collective.'],
  intro: [
    'ANTIGEN is built as a distributed network of insurgent minds, augmented with AI provocation engines.',
    'Cells form. Cells solve. Cells dissolve. Clients pay for the output, not the months.'
  ],
  comparisonRows: [
    { attribute: 'Model', legacy: 'Convergent', antigen: 'Divergent' },
    { attribute: 'Talent', legacy: 'In-house upskill and hire', antigen: 'Bespoke recombinant assembly' },
    { attribute: 'Focus', legacy: 'Campaign oriented', antigen: 'Outcome oriented' },
    { attribute: 'Optimised for', legacy: 'Business as usual', antigen: 'Pure signal' }
  ],
  cellModel: [
    { kicker: 'P', title: 'Partners', body: 'Senior context holders accountable for outcomes.' },
    { kicker: 'E', title: 'Experts', body: 'Specialist practitioners plugged in per engagement.' },
    { kicker: 'A', title: 'Associates', body: 'Apprentice-explorers supported by AI-amplified senior performance.' }
  ],
  infrastructure: [
    { kicker: '01', title: 'Zero-Legacy Value Model', body: 'Built for value alignment, not value extraction.' },
    { kicker: '02', title: 'RAG-Based AI Synthesis Layer', body: 'The institutional brain that provokes, challenges, synthesises, and remembers.' },
    { kicker: '03', title: 'Service Velocity Architecture', body: 'Two deployment tiers for immediate challenges and deeper integration.' }
  ],
  closingLine: 'Where traditional agencies sell effort, ANTIGEN sells outcomes.'
};

export const fallbackWho = {
  sectionLabel: 'The Stack',
  sectionMeta: 'Sovereign Humans × Divergent Engines',
  headlineLines: ['The Human', '× AI Stack.'],
  humanHeader: 'Sovereign Humans — Curiosity, Curation, Connectivity',
  humanCards: [
    { kicker: 'Partners · The Stewards', title: 'Senior Context Holders', body: 'Manage relationships, carry reputational risk, and are accountable for outcomes.' },
    { kicker: 'Experts · The Deep Nodes', title: 'Highly Specialised Practitioners', body: 'MarTech, performance, narrative, product marketing, commercial.' },
    { kicker: 'Associates · Apprentice-Explorers', title: 'Early-Career Talent', body: 'Learn through exposure to real, consequential problems.' }
  ],
  engineHeader: 'Divergent Intelligence Engines — Institutional Memory and Counterfactual Synthesis',
  engineCards: [
    { kicker: 'Permanent Dissent', title: 'The Provocateur', body: 'Challenges assumptions and prevents groupthink.' },
    { kicker: 'Institutional Memory', title: 'The Synthesizer', body: 'RAG-based knowledge graphs carry collective wisdom from day one.' },
    { kicker: 'Structured Creativity', title: 'The Scaffolding', body: 'Interfaces that guide the process toward more divergent output.' }
  ],
  equation: 'Sovereign Humans × Divergent Engines = The Human × AI Stack.',
  pedigree: ['P&G', 'Coca-Cola', 'WPP', 'DoubleVerify', 'Global Holding Companies']
};

export const fallbackHow = {
  sectionLabel: 'Deployment Protocols',
  sectionMeta: 'How we engage',
  headline: 'Deployment protocols across ecosystems.',
  intro: 'ANTIGEN deploys across five ecosystems, each with a purpose-built engagement model. Every engagement begins by finding the uncomfortable place where growth is hiding.',
  ecosystems: [
    { kicker: 'Agencies', title: 'Pitch Strategy & Thought Leadership', body: 'We sharpen your offering and harden your competitive position.' },
    { kicker: 'Brands', title: 'Transformation & Agency Review', body: 'We sit on your side of the table.' },
    { kicker: 'AdTech / MarTech', title: 'GTM & PMF Advisory', body: 'We translate technology into commercial traction.' },
    { kicker: 'Startups', title: 'Positioning & Growth Architecture', body: 'We build the strategic foundation before you scale.' },
    { kicker: 'Cross-Sector', title: 'Fractional CSO & Advisory Retainers', body: 'For organisations that need a permanent provocation engine.' }
  ],
  tiers: [
    { kicker: 'Tier 1', title: 'Immediate', body: 'Days to weeks. Project-based strategic challenges.' },
    { kicker: 'Tier 2', title: 'Mid-Long Term', body: 'Weeks to months. Embedded transformation and ongoing leadership.' }
  ],
  cta: { label: 'Bring us a hard problem', href: '/contact' }
};

export const fallbackPov = {
  sectionLabel: 'Perspectives',
  sectionMeta: 'Published POVs and essays',
  headline: 'ANTIGEN Perspectives.',
  intro: "We don't hold positions quietly. Every growth problem has a structural diagnosis underneath it. We publish ours.",
  thesisLabel: "We don't hold positions quietly.",
  thesisBody: 'The ANTIGENERIC Thesis is the core provocation: why algorithmic sameness is the defining strategic crisis of this decade.',
  quote: 'Infinite capability, finite courage.'
};

export const fallbackContact = {
  sectionLabel: 'Contact',
  sectionMeta: 'Status: Active',
  headline: 'ANTIGEN unlocks growth from uncomfortable places.',
  body: [
    'We are ready to deliver today. If you have a hard problem, we want to hear about it.',
    'If you are a strategist, a creative, or a specialist practitioner who is done brokering inspiration for employment, we want to talk.'
  ],
  statusItems: ['Tier 1 — Available Now', 'Accepting New Briefs', 'Response within 24 hrs', 'Network — Open'],
  channels: [
    { kicker: 'Brief Us', title: 'sid@antigen.in', body: 'Hard problems. Stalled growth. Pitch challenges.' },
    { kicker: 'Join the Network', title: 'talent@antigen.in', body: 'Strategists, creatives, specialist practitioners.' },
    { kicker: 'Partner With Us', title: 'partners@antigen.in', body: 'Agencies, platforms, ecosystem collaborators.' }
  ],
  cta: { label: 'Bring us a hard problem', href: 'mailto:sid@antigen.in' }
};
```

## Task 6: Build Shared Page Components

**Files:**
- Create: `site/src/components/PortableTextRenderer.jsx`
- Create: `site/src/components/sections/ForceCards.jsx`
- Create: `site/src/components/sections/ComparisonTable.jsx`
- Create: `site/src/components/sections/CellModel.jsx`
- Create: `site/src/components/sections/HumanAiStack.jsx`
- Create: `site/src/components/sections/EcosystemGrid.jsx`
- Create: `site/src/components/sections/VelocityTiers.jsx`
- Create: `site/src/components/sections/PostCard.jsx`

- [ ] **Step 1: Create section directory**

Run:

```powershell
New-Item -ItemType Directory -Force -Path site/src/components/sections
```

- [ ] **Step 2: Add Portable Text renderer**

Create `site/src/components/PortableTextRenderer.jsx` with:

```jsx
import { PortableText } from '@portabletext/react';

const components = {
  block: {
    h2: ({ children }) => <h2 className="display-type mt-12 text-6xl text-antigen-red">{children}</h2>,
    h3: ({ children }) => <h3 className="mt-8 text-xl font-black uppercase tracking-tight">{children}</h3>,
    normal: ({ children }) => <p className="my-5 text-lg font-medium leading-8 text-black/75">{children}</p>,
    blockquote: ({ children }) => <blockquote className="my-8 border-l-4 border-antigen-red pl-5 text-2xl font-black uppercase leading-tight">{children}</blockquote>
  }
};

export function PortableTextRenderer({ value }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
```

- [ ] **Step 3: Add `ForceCards`**

Create `site/src/components/sections/ForceCards.jsx` with:

```jsx
export function ForceCards({ cards = [] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {cards.map((card) => (
        <article key={card.title} className="border-t-[6px] border-antigen-red bg-white p-6">
          <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-antigen-red">{card.kicker}</p>
          <p className="display-type mt-4 text-8xl text-antigen-black">{card.stat}</p>
          <h3 className="display-type mt-3 text-6xl text-antigen-red">{card.title}</h3>
          <p className="mt-4 text-sm font-semibold leading-6 text-black/60">{card.body}</p>
        </article>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Add `ComparisonTable`**

Create `site/src/components/sections/ComparisonTable.jsx` with:

```jsx
export function ComparisonTable({ rows = [] }) {
  return (
    <div className="overflow-hidden border border-black/15">
      <div className="grid grid-cols-3 bg-antigen-black text-[.68rem] font-extrabold uppercase tracking-[.12em] text-white/40">
        <div className="p-4">Attribute</div>
        <div className="p-4">Legacy OpCos</div>
        <div className="p-4 text-antigen-yellow">ANTIGEN</div>
      </div>
      {rows.map((row) => (
        <div key={row.attribute} className="grid grid-cols-1 border-t border-black/15 md:grid-cols-3">
          <div className="bg-white p-4 text-xs font-extrabold uppercase tracking-[.1em] text-black/45">{row.attribute}</div>
          <div className="bg-antigen-smoke p-4 text-sm font-bold">{row.legacy}</div>
          <div className="bg-antigen-black p-4 text-sm font-bold text-antigen-yellow">{row.antigen}</div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 5: Add `CellModel`**

Create `site/src/components/sections/CellModel.jsx` with:

```jsx
export function CellModel({ items = [] }) {
  return (
    <div className="grid gap-6 bg-antigen-paper p-8 lg:grid-cols-[.8fr_1.4fr]">
      <div>
        <p className="display-type text-7xl">The <span className="text-antigen-red">Cell</span><br />Model</p>
        <p className="mt-4 text-xs font-extrabold uppercase tracking-[.12em] text-black/45">Pure signal. No overhead. No legacy.</p>
      </div>
      <div className="grid gap-4">
        {items.map((item) => (
          <article key={item.title} className="border-l-4 border-antigen-red bg-white p-5">
            <p className="text-xs font-extrabold uppercase tracking-[.12em] text-antigen-red">{item.kicker}</p>
            <h3 className="mt-2 text-sm font-black uppercase tracking-[.08em]">{item.title}</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-black/60">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 6: Add `HumanAiStack`**

Create `site/src/components/sections/HumanAiStack.jsx` with:

```jsx
export function HumanAiStack({ humanHeader, humanCards = [], engineHeader, engineCards = [], equation }) {
  const renderCards = (cards, dark = false) => cards.map((card) => (
    <article key={card.title} className={`${dark ? 'bg-black/25' : 'bg-white/10'} border border-white/15 p-5`}>
      <p className="text-xs font-extrabold uppercase tracking-[.12em] text-antigen-yellow">{card.kicker}</p>
      <h3 className="mt-2 text-sm font-black uppercase tracking-[.08em] text-white">{card.title}</h3>
      <p className="mt-3 text-sm font-medium leading-6 text-white/65">{card.body}</p>
    </article>
  ));

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="mb-5 border-b border-white/15 pb-3 text-xs font-extrabold uppercase tracking-[.12em] text-antigen-yellow">{humanHeader}</p>
          <div className="grid gap-4">{renderCards(humanCards)}</div>
        </div>
        <div>
          <p className="mb-5 border-b border-white/15 pb-3 text-xs font-extrabold uppercase tracking-[.12em] text-antigen-yellow">{engineHeader}</p>
          <div className="grid gap-4">{renderCards(engineCards, true)}</div>
        </div>
      </div>
      <div className="mt-10 border border-white/15 bg-black/30 p-8 text-center">
        <p className="display-type text-5xl text-antigen-yellow">{equation}</p>
      </div>
    </>
  );
}
```

- [ ] **Step 7: Add ecosystem and tiers**

Create `site/src/components/sections/EcosystemGrid.jsx` with:

```jsx
export function EcosystemGrid({ items = [] }) {
  return (
    <div className="grid border border-black/15 md:grid-cols-2 xl:grid-cols-5">
      {items.map((item, index) => (
        <article key={item.title} className="border-b border-r border-black/15 p-5 transition hover:bg-antigen-black hover:text-white xl:border-b-0">
          <div className="mb-5 h-1 bg-antigen-red" />
          <p className="display-type text-6xl text-antigen-smoke">{String(index + 1).padStart(2, '0')}</p>
          <p className="mt-2 text-xs font-extrabold uppercase tracking-[.12em] text-antigen-red">{item.kicker}</p>
          <h3 className="mt-3 text-sm font-black uppercase tracking-[.08em]">{item.title}</h3>
          <p className="mt-3 text-sm font-medium leading-6 text-current/65">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
```

Create `site/src/components/sections/VelocityTiers.jsx` with:

```jsx
export function VelocityTiers({ tiers = [] }) {
  return (
    <div className="grid gap-6 bg-antigen-black p-8 text-white lg:grid-cols-[.8fr_1.4fr]">
      <div>
        <p className="display-type text-6xl">Service<br /><span className="text-antigen-yellow">Velocity</span><br />Architecture</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {tiers.map((tier, index) => (
          <article key={tier.title} className="border border-white/15 bg-white/5 p-5">
            <span className={`inline-block px-3 py-1 text-[.68rem] font-black uppercase tracking-[.12em] ${index === 0 ? 'bg-antigen-red text-white' : 'bg-antigen-yellow text-black'}`}>
              {tier.kicker}
            </span>
            <h3 className="display-type mt-4 text-4xl text-white">{tier.title}</h3>
            <p className="mt-3 text-sm font-medium leading-6 text-white/60">{tier.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 8: Add post card**

Create `site/src/components/sections/PostCard.jsx` with:

```jsx
import Link from 'next/link';

export function PostCard({ post, index }) {
  return (
    <Link href={`/pov/${post.slug}`} className="block border border-black/15 bg-white p-6 text-black no-underline transition hover:-translate-y-1 hover:border-antigen-red hover:shadow-xl">
      <p className="display-type text-7xl text-antigen-smoke">{String(index + 1).padStart(2, '0')}</p>
      <p className="mt-3 text-[.68rem] font-extrabold uppercase tracking-[.12em] text-antigen-red">{post.category || 'Perspective'}</p>
      <h3 className="mt-3 text-xl font-black uppercase leading-tight tracking-tight">{post.title}</h3>
      <p className="mt-3 text-sm font-medium leading-6 text-black/60">{post.excerpt}</p>
      <span className="mt-6 inline-block text-xs font-black uppercase tracking-[.12em] text-antigen-red">Read perspective</span>
    </Link>
  );
}
```

## Task 7: Implement Routes

**Files:**
- Create: all route files listed in File Structure.

- [ ] **Step 1: Create home route**

Create `site/src/app/page.jsx` with:

```jsx
import Link from 'next/link';
import { client } from '@/lib/sanity/client';
import { homePageQuery } from '@/lib/sanity/queries';
import { fallbackHome } from '@/lib/fallbackContent';
import { ButtonLink } from '@/components/ui/ButtonLink';

export default async function HomePage() {
  const data = (await client.fetch(homePageQuery)) || fallbackHome;

  return (
    <main className="manifesto-bg antigen-grid min-h-screen px-[clamp(1.5rem,5vw,4.5rem)] pb-20 pt-36 text-white">
      <section className="flex min-h-[calc(100vh-9rem)] flex-col justify-end">
        <p className="mb-6 text-[.68rem] font-extrabold uppercase tracking-[.14em] text-white/55">{data.heroKicker}</p>
        <h1 className="display-type max-w-6xl text-[clamp(5rem,15vw,16rem)]">
          {(data.headlineLines || []).map((line, index) => (
            <span key={line} className={`block ${index === 2 ? 'text-antigen-yellow' : index === 0 ? 'text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,.45)]' : ''}`}>
              {line}
            </span>
          ))}
        </h1>
        <div className="mt-10 grid gap-8 border-t border-white/20 pt-8 lg:grid-cols-[1.2fr_.8fr]">
          <p className="max-w-3xl text-2xl font-semibold leading-tight tracking-tight">{data.supportingCopy}</p>
          <div className="flex flex-col items-start gap-5 lg:items-end">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {(data.navTeasers || []).map((item) => (
                <Link key={item.href} href={item.href} className="border border-white/20 px-3 py-2 text-[.68rem] font-extrabold uppercase tracking-[.12em] text-white/50 no-underline hover:border-antigen-yellow hover:text-antigen-yellow">
                  {item.label}
                </Link>
              ))}
            </div>
            <ButtonLink href={data.cta?.href || '/contact'}>{data.cta?.label || 'Bring us a hard problem'}</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
```

- [ ] **Step 2: Create Why route**

Create `site/src/app/why/page.jsx` with:

```jsx
import { PageFrame, SectionHeader } from '@/components/PageFrame';
import { ForceCards } from '@/components/sections/ForceCards';
import { client } from '@/lib/sanity/client';
import { whyPageQuery } from '@/lib/sanity/queries';
import { fallbackWhy } from '@/lib/fallbackContent';

export default async function WhyPage() {
  const data = (await client.fetch(whyPageQuery)) || fallbackWhy;

  return (
    <PageFrame className="bg-antigen-paper">
      <section className="page-pad section-pad pt-36">
        <SectionHeader label={data.sectionLabel} meta={data.sectionMeta} />
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <h1 className="display-type text-[clamp(4rem,9vw,9rem)]">{data.headline}</h1>
          <div className="space-y-5 text-lg font-medium leading-8">
            {(data.intro || []).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="mt-20">
          <ForceCards cards={data.forceCards} />
        </div>
      </section>
      <section className="page-pad section-pad bg-antigen-black text-white">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <h2 className="display-type text-7xl text-white">{data.thesisLabel}</h2>
          <div className="space-y-5 text-lg font-medium leading-8 text-white/70">
            {(data.thesisBody || []).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>
      <section className="manifesto-bg page-pad section-pad">
        <p className="display-type text-[clamp(5rem,16vw,17rem)] text-antigen-black">{data.wordWall}</p>
      </section>
    </PageFrame>
  );
}
```

- [ ] **Step 3: Create What route**

Create `site/src/app/what/page.jsx` with:

```jsx
import { PageFrame, SectionHeader } from '@/components/PageFrame';
import { CellModel } from '@/components/sections/CellModel';
import { ComparisonTable } from '@/components/sections/ComparisonTable';
import { client } from '@/lib/sanity/client';
import { whatPageQuery } from '@/lib/sanity/queries';
import { fallbackWhat } from '@/lib/fallbackContent';

export default async function WhatPage() {
  const data = (await client.fetch(whatPageQuery)) || fallbackWhat;

  return (
    <PageFrame className="bg-white">
      <section className="page-pad section-pad pt-36">
        <SectionHeader label={data.sectionLabel} meta={data.sectionMeta} />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <h1 className="display-type text-[clamp(4rem,9vw,9rem)]">
            {(data.headlineLines || []).map((line, index) => (
              <span key={line} className={`block ${index === 2 ? 'text-antigen-red' : ''}`}>{line}</span>
            ))}
          </h1>
          <div className="space-y-5 text-lg font-medium leading-8">
            {(data.intro || []).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <div className="mt-20">
          <ComparisonTable rows={data.comparisonRows} />
        </div>
        <div className="mt-20">
          <CellModel items={data.cellModel} />
        </div>
        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {(data.infrastructure || []).map((item) => (
            <article key={item.title} className="border border-black/15 p-6">
              <p className="display-type text-5xl text-antigen-red">{item.kicker}</p>
              <h2 className="mt-3 text-sm font-black uppercase tracking-[.08em]">{item.title}</h2>
              <p className="mt-3 text-sm font-medium leading-6 text-black/60">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-antigen-red px-[clamp(1.5rem,5vw,4.5rem)] py-12 text-white">
        <p className="text-3xl font-black uppercase leading-tight tracking-tight">{data.closingLine}</p>
      </section>
    </PageFrame>
  );
}
```

- [ ] **Step 4: Create Who route**

Create `site/src/app/who/page.jsx` with:

```jsx
import { PageFrame, SectionHeader } from '@/components/PageFrame';
import { HumanAiStack } from '@/components/sections/HumanAiStack';
import { client } from '@/lib/sanity/client';
import { whoPageQuery } from '@/lib/sanity/queries';
import { fallbackWho } from '@/lib/fallbackContent';

export default async function WhoPage() {
  const data = (await client.fetch(whoPageQuery)) || fallbackWho;

  return (
    <PageFrame className="manifesto-bg antigen-grid text-white">
      <section className="page-pad section-pad pt-36">
        <SectionHeader label={data.sectionLabel} meta={data.sectionMeta} dark />
        <h1 className="display-type mb-16 text-[clamp(4rem,9vw,9rem)]">
          {(data.headlineLines || []).map((line, index) => (
            <span key={line} className={`block ${index === 0 ? 'text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,.35)]' : ''}`}>{line}</span>
          ))}
        </h1>
        <HumanAiStack {...data} />
      </section>
      <section className="bg-black/40 px-[clamp(1.5rem,5vw,4.5rem)] py-8">
        <div className="flex flex-wrap items-center gap-5">
          <span className="text-xs font-extrabold uppercase tracking-[.12em] text-white/35">Pedigree from</span>
          {(data.pedigree || []).map((name) => <span key={name} className="display-type text-3xl text-white/30">{name}</span>)}
        </div>
      </section>
    </PageFrame>
  );
}
```

- [ ] **Step 5: Create How route**

Create `site/src/app/how/page.jsx` with:

```jsx
import { PageFrame, SectionHeader } from '@/components/PageFrame';
import { EcosystemGrid } from '@/components/sections/EcosystemGrid';
import { VelocityTiers } from '@/components/sections/VelocityTiers';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { client } from '@/lib/sanity/client';
import { howPageQuery } from '@/lib/sanity/queries';
import { fallbackHow } from '@/lib/fallbackContent';

export default async function HowPage() {
  const data = (await client.fetch(howPageQuery)) || fallbackHow;

  return (
    <PageFrame className="bg-white">
      <section className="page-pad section-pad pt-36">
        <SectionHeader label={data.sectionLabel} meta={data.sectionMeta} />
        <h1 className="display-type max-w-5xl text-[clamp(4rem,9vw,9rem)]">{data.headline}</h1>
        <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-black/65">{data.intro}</p>
        <div className="mt-16">
          <EcosystemGrid items={data.ecosystems} />
        </div>
        <div className="mt-20">
          <VelocityTiers tiers={data.tiers} />
        </div>
      </section>
      <section className="flex flex-wrap items-center justify-between gap-6 bg-antigen-black px-[clamp(1.5rem,5vw,4.5rem)] py-8 text-white">
        <p className="display-type text-5xl text-white/20">Hard problems. Fast. // ANTIGEN.</p>
        <ButtonLink href={data.cta?.href || '/contact'}>{data.cta?.label || 'Bring us a hard problem'}</ButtonLink>
      </section>
    </PageFrame>
  );
}
```

- [ ] **Step 6: Create POV routes**

Create `site/src/app/pov/page.jsx` with:

```jsx
import { PageFrame, SectionHeader } from '@/components/PageFrame';
import { PostCard } from '@/components/sections/PostCard';
import { client } from '@/lib/sanity/client';
import { povIndexPageQuery, postsQuery } from '@/lib/sanity/queries';
import { fallbackPov } from '@/lib/fallbackContent';

export default async function PovPage() {
  const [page, posts] = await Promise.all([
    client.fetch(povIndexPageQuery),
    client.fetch(postsQuery)
  ]);
  const data = page || fallbackPov;
  const visiblePosts = posts?.length ? posts : [];

  return (
    <PageFrame className="bg-antigen-paper">
      <section className="page-pad section-pad pt-36">
        <SectionHeader label={data.sectionLabel} meta={data.sectionMeta} />
        <div className="grid gap-10 lg:grid-cols-[1fr_.9fr]">
          <h1 className="display-type text-[clamp(4rem,9vw,9rem)] text-antigen-red">{data.headline}</h1>
          <p className="text-lg font-medium leading-8 text-black/65">{data.intro}</p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {visiblePosts.map((post, index) => <PostCard key={post.slug} post={post} index={index} />)}
          {!visiblePosts.length ? <p className="text-lg font-bold">No POV posts published yet. Add posts in Sanity Studio.</p> : null}
        </div>
      </section>
      <section className="page-pad section-pad bg-antigen-black text-white">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <p className="display-type text-6xl">{data.thesisLabel}</p>
          <div>
            <p className="text-lg font-medium leading-8 text-white/65">{data.thesisBody}</p>
            <p className="display-type mt-12 text-7xl text-antigen-yellow">{data.quote}</p>
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
```

Create `site/src/app/pov/[slug]/page.jsx` with:

```jsx
import { notFound } from 'next/navigation';
import { PortableTextRenderer } from '@/components/PortableTextRenderer';
import { client } from '@/lib/sanity/client';
import { postBySlugQuery } from '@/lib/sanity/queries';

export default async function PostPage({ params }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug });
  if (!post) notFound();

  return (
    <main className="bg-antigen-paper">
      <article className="mx-auto max-w-5xl px-[clamp(1.5rem,5vw,4.5rem)] pb-24 pt-36">
        <p className="text-[.68rem] font-extrabold uppercase tracking-[.12em] text-antigen-red">{post.category || 'Perspective'}</p>
        <h1 className="display-type mt-5 text-[clamp(4rem,10vw,10rem)]">{post.title}</h1>
        {post.excerpt ? <p className="mt-8 max-w-3xl text-2xl font-semibold leading-tight text-black/65">{post.excerpt}</p> : null}
        <div className="mt-12 border-t border-black/15 pt-8">
          <PortableTextRenderer value={post.body} />
        </div>
      </article>
    </main>
  );
}
```

- [ ] **Step 7: Create Contact route**

Create `site/src/app/contact/page.jsx` with:

```jsx
import { PageFrame, SectionHeader } from '@/components/PageFrame';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { client } from '@/lib/sanity/client';
import { contactPageQuery } from '@/lib/sanity/queries';
import { fallbackContact } from '@/lib/fallbackContent';

export default async function ContactPage() {
  const data = (await client.fetch(contactPageQuery)) || fallbackContact;

  return (
    <PageFrame className="bg-antigen-black text-white">
      <section className="page-pad section-pad antigen-grid min-h-screen pt-36">
        <SectionHeader label={data.sectionLabel} meta={data.sectionMeta} dark />
        <h1 className="display-type max-w-5xl text-[clamp(4rem,9vw,9rem)]">
          {data.headline}
        </h1>
        <div className="mt-10 flex flex-wrap gap-4 border border-white/10 bg-white/5 p-5">
          {(data.statusItems || []).map((item) => (
            <span key={item} className="text-xs font-extrabold uppercase tracking-[.12em] text-white/45">{item}</span>
          ))}
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div className="space-y-5 text-lg font-medium leading-8 text-white/70">
            {(data.body || []).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <p className="text-xs font-extrabold uppercase tracking-[.12em] text-antigen-yellow">Composable. Distributed. Insurgent.</p>
          </div>
          <div className="grid gap-4">
            {(data.channels || []).map((channel) => (
              <a key={channel.title} href={`mailto:${channel.title}`} className="grid gap-3 border border-white/15 p-5 text-white no-underline transition hover:border-antigen-yellow hover:bg-antigen-yellow/10 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[.12em] text-antigen-yellow">{channel.kicker}</p>
                  <p className="mt-1 text-lg font-black">{channel.title}</p>
                  <p className="mt-1 text-sm font-medium text-white/40">{channel.body}</p>
                </div>
                <span className="text-2xl text-white/30">↗</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <ButtonLink href={data.cta?.href || 'mailto:sid@antigen.in'}>{data.cta?.label || 'Bring us a hard problem'}</ButtonLink>
        </div>
      </section>
    </PageFrame>
  );
}
```

## Task 8: Add Sanity Seed Script

**Files:**
- Create: `site/src/sanity/seed/initialContent.mjs`

- [ ] **Step 1: Create seed directory**

Run:

```powershell
New-Item -ItemType Directory -Force -Path site/src/sanity/seed
```

- [ ] **Step 2: Create seed script**

Create `site/src/sanity/seed/initialContent.mjs` with:

```js
import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !token) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-05-16',
  useCdn: false
});

const docs = [
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'ANTIGEN',
    description: 'A post-algorithm organism built to solve hard growth problems.',
    briefEmail: 'sid@antigen.in',
    talentEmail: 'talent@antigen.in',
    partnersEmail: 'partners@antigen.in',
    navigation: [
      { _key: 'why', label: 'Why', href: '/why' },
      { _key: 'what', label: 'What', href: '/what' },
      { _key: 'who', label: 'Who', href: '/who' },
      { _key: 'how', label: 'How', href: '/how' },
      { _key: 'pov', label: 'POV', href: '/pov' }
    ]
  },
  {
    _id: 'povIndexPage',
    _type: 'povIndexPage',
    sectionLabel: 'Perspectives',
    sectionMeta: 'Published POVs and essays',
    headline: 'ANTIGEN Perspectives.',
    intro: "We don't hold positions quietly. Every growth problem has a structural diagnosis underneath it. We publish ours.",
    thesisLabel: "We don't hold positions quietly.",
    thesisBody: 'The ANTIGENERIC Thesis is the core provocation: why algorithmic sameness is the defining strategic crisis of this decade.',
    quote: 'Infinite capability, finite courage.'
  }
];

for (const doc of docs) {
  await client.createOrReplace(doc);
  console.log(`Seeded ${doc._id}`);
}
```

- [ ] **Step 3: Run seed only after Sanity credentials exist**

Run:

```powershell
cd site
npm run sanity:seed
```

Expected: script prints seeded document IDs. If credentials are not configured yet, skip this step and use fallback content until the Sanity project is created.

## Task 9: Verification

**Files:**
- Modify as needed after verification.

- [ ] **Step 1: Run build**

Run:

```powershell
cd site
npm run build
```

Expected: Next.js production build completes.

- [ ] **Step 2: Run local dev server**

Run:

```powershell
cd site
npm run dev
```

Expected: app starts at `http://localhost:3000`.

- [ ] **Step 3: Browser QA**

Open:

```text
http://localhost:3000
```

Check these routes:

- `/`
- `/why`
- `/what`
- `/who`
- `/how`
- `/pov`
- `/contact`
- `/studio`

Expected:

- Pages render without runtime errors.
- No broken mojibake text appears in the visible UI.
- Layout is responsive at desktop and mobile widths.
- Header navigation reaches all pages.
- `/studio` loads the Sanity Studio login/config shell when Sanity project values are present.

- [ ] **Step 4: Fix visible layout issues**

If desktop or mobile screenshots show clipped headings, overlapping text, or awkward mobile wrapping, edit the relevant component CSS/classes and rerun:

```powershell
cd site
npm run build
```

Expected: build still passes and visual issues are resolved.

## Task 10: Deployment Documentation

**Files:**
- Create: `site/README.md`
- Create: `site/.env.example` if not already present.

- [ ] **Step 1: Create README**

Create `site/README.md` with:

```md
# ANTIGEN Site

Next.js + Sanity website for ANTIGEN.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env.local
```

3. Add Sanity values:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-16
SANITY_API_READ_TOKEN=
SANITY_API_WRITE_TOKEN=
NEXT_PUBLIC_SITE_URL=https://1antigen.com
```

4. Run locally:

```bash
npm run dev
```

## Routes

- `/`
- `/why`
- `/what`
- `/who`
- `/how`
- `/pov`
- `/pov/[slug]`
- `/contact`
- `/studio`

## Deployment

Deploy through Coolify on Hostinger VPS.

Build command:

```bash
npm run build
```

Start command:

```bash
npm run start
```

Set the same environment variables in Coolify. Point `1antigen.com` DNS to the Hostinger VPS and enable SSL in Coolify.
```

## Task 11: Initialize Git

**Files:**
- Create: `.gitignore`

- [ ] **Step 1: Create gitignore**

Create `.gitignore` at the project root with:

```gitignore
.superpowers/
node_modules/
.next/
out/
.env
.env.local
.env.*.local
site/node_modules/
site/.next/
site/.env
site/.env.local
```

- [ ] **Step 2: Initialize repo**

Run:

```powershell
git init
git add .
git commit -m "chore: initialize antigen website project"
```

Expected: initial commit is created.

## Task 12: Coolify Handoff

**Files:**
- No local file changes unless README needs updates.

- [ ] **Step 1: Create GitHub repo**

Create a private or public GitHub repo named `antigen-site`.

- [ ] **Step 2: Push local repo**

Run:

```powershell
git remote add origin <github-repo-url>
git branch -M main
git push -u origin main
```

Expected: project appears on GitHub.

- [ ] **Step 3: Connect Coolify**

In Coolify on Hostinger VPS:

- Add a new application.
- Choose the GitHub repo.
- Set base directory to `site`.
- Set build command to `npm run build`.
- Set start command to `npm run start`.
- Add Sanity environment variables from `.env.example`.
- Add domain `1antigen.com`.
- Enable SSL.

Expected: Coolify deploys the Next.js app and `https://1antigen.com` loads the site.

## Self-Review

Spec coverage:

- Multi-page site: covered in Task 7.
- Structured editing for all major pages: covered in Tasks 3 and 4.
- Blog/POV support: covered in Tasks 4 and 7.
- Sanity Studio at `/studio`: covered in Task 3.
- Hostinger VPS/Coolify deployment: covered in Tasks 10 and 12.
- Draft visual system and content: covered in Tasks 2, 5, 6, and 7.
- Current folder not being an app/git repo: covered in Tasks 1 and 11.

No placeholder language remains intentionally. The seed script only seeds a minimal initial subset because routes have fallback content; complete Sanity population can be added after credentials exist.
