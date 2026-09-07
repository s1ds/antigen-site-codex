# Nav services dropdown + Sandbox section — design

Date: 2026-09-07

## Problem

The site's header nav (`site/*.html`) has a "Services" link that only ever
points at `#sectors`, an anchor on the homepage listing four service doors
(Agencies, Brands, Adtech & Martech, Startups). From a service subpage, or
from `booking.html`, "Services" bounces the visitor back to the homepage
before they can jump to a *different* sector — there is no direct nav path
between service pages.

The site also has no way to surface the Sandbox deliverables
(`site/Sandbox/`, `site/Brands/`) to visitors. They exist and are deployed,
but nothing links to them. `site/index.html`'s `#treatment` section already
describes an "AI Node" as part of the delivery model — that's the natural
place to tease a few of these as proof, with a path to a full page.

Separately, `site/*.html` currently has **no mobile nav at all**: `.navlinks`
is `display:none` below 820px width, with no replacement. Adding a Services
dropdown and a new Sandbox item makes this gap worse (two more destinations
become mobile-unreachable), so this work also adds a minimal mobile menu.

## Scope

Touches all seven static pages under `site/`:
`index.html`, `agency-services.html`, `brands-services.html`,
`adtech-services.html`, `startup-services.html`, `booking.html`, and a new
`sandbox.html`.

Each page currently carries its own copy of the same `<nav>` markup (no
shared include/templating exists in this flat static site) — every page
needs the same edit applied by hand, kept byte-identical apart from each
page's own `aria-current="page"` placement.

Out of scope: curating additional Sandbox content beyond the items listed
below, real thumbnail images for sandbox cards, any build tooling or
templating system to de-duplicate the nav markup (noted as a future
improvement, not part of this change).

## Approach: zero-JavaScript, native `<details>`/`<summary>`

Both the desktop Services dropdown and the mobile hamburger menu are built
with `<details>`/`<summary>` — native, click-to-open, keyboard-accessible,
closes on outside click in modern browsers, no script to write or keep in
sync across seven files. Styling (caret rotation, hamburger→X swap) is done
entirely through CSS `[open]` attribute selectors.

## 1. Desktop Services dropdown

Replace, in every page's `.navlinks` block:

```html
<a href="index.html#sectors">Services</a>
```
(or `<a href="#selector" aria-current="page">Services</a>` on a service page)

with:

```html
<details class="navdrop">
  <summary>Services</summary>
  <div class="navdrop-menu">
    <a href="agency-services.html">Agencies</a>
    <a href="brands-services.html">Brands</a>
    <a href="adtech-services.html">Adtech &amp; Martech</a>
    <a href="startup-services.html">Startups</a>
  </div>
</details>
```

On each service page itself, that page's own link inside `.navdrop-menu`
additionally gets `aria-current="page"` (same convention already used
elsewhere in the nav).

CSS (added once per page, inside the existing `<style>` block, same as every
other page-local style today):

```css
.navdrop{position:relative}
.navdrop summary{list-style:none;cursor:pointer;font-size:12.5px;font-weight:600;
  letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.navdrop summary::-webkit-details-marker{display:none}
.navdrop summary:hover{color:var(--red)}
.navdrop summary::after{content:"▾";margin-left:5px;font-size:10px;display:inline-block;
  transition:transform .15s ease}
.navdrop[open] summary::after{transform:rotate(180deg)}
.navdrop-menu{position:absolute;top:100%;left:0;margin-top:14px;background:var(--paper);
  border:1px solid var(--line);min-width:180px;padding:6px 0;
  box-shadow:0 8px 24px rgba(41,41,41,.12)}
.navdrop-menu a{display:block;padding:10px 16px;font-size:12.5px;font-weight:600;
  letter-spacing:.08em;text-transform:uppercase;color:var(--muted);text-decoration:none}
.navdrop-menu a:hover,.navdrop-menu a[aria-current="page"]{color:var(--red)}
```

`.navdrop` sits inline inside the existing `.navlinks` flex row, so no
layout change is needed there.

## 2. Sandbox nav item

Add `<a href="sandbox.html">Sandbox</a>` immediately after the `Treatment`
link and before the Services dropdown, in every page's `.navlinks` block
(desktop) and in the flattened mobile list (below). On `sandbox.html` itself
this link gets `aria-current="page"`.

## 3. Mobile menu

Below 820px, `.navlinks` stays hidden (unchanged). A new hamburger toggle
appears in the `.navrow`, alongside the existing "Book a call" button:

```html
<details class="navmobile">
  <summary aria-label="Menu"><span class="hbg"></span></summary>
  <div class="navmobile-panel">
    <a href="index.html#symptoms">Symptoms</a>
    <a href="index.html#wound">The wound</a>
    <a href="index.html#diagnosis">Diagnosis</a>
    <a href="index.html#treatment">Treatment</a>
    <a href="sandbox.html">Sandbox</a>
    <a href="agency-services.html">Agencies</a>
    <a href="brands-services.html">Brands</a>
    <a href="adtech-services.html">Adtech &amp; Martech</a>
    <a href="startup-services.html">Startups</a>
    <a href="index.html#proof">Proof</a>
  </div>
</details>
```

Notes:
- The mobile panel flattens Services into its four links directly (no
  nested dropdown-in-drawer) — it's already an accordion-style vertical
  list, so nesting would add a tap with no benefit.
- `navmobile` is hidden above 820px (desktop uses `.navlinks` +
  `.navdrop` instead); `.navlinks` and `Book a call` stay as they are,
  `navmobile` becomes visible only below 820px, positioned where
  `.navlinks` used to render.
- Hamburger icon: `.hbg` is a CSS-drawn three-line icon (`::before`/
  `::after` plus its own middle bar) that morphs into an X via `[open]`
  transforms — no icon font or SVG asset needed.
- `href="index.html#…"` anchors are used verbatim only when the mobile
  panel markup lives on a non-home page; on `index.html` itself the
  existing convention of bare `#symptoms` etc. is kept (matching how the
  desktop nav already differs between home and subpages).

CSS:

```css
.navmobile{display:none}
@media(max-width:820px){
  .navmobile{display:block;position:relative}
  .navmobile summary{list-style:none;cursor:pointer;width:34px;height:34px;
    display:flex;align-items:center;justify-content:center}
  .navmobile summary::-webkit-details-marker{display:none}
  .hbg,.hbg::before,.hbg::after{content:"";display:block;width:22px;height:2px;
    background:var(--ink);transition:transform .15s ease,opacity .15s ease}
  .hbg{position:relative}
  .hbg::before{position:absolute;top:-7px}
  .hbg::after{position:absolute;top:7px}
  .navmobile[open] .hbg{background:transparent}
  .navmobile[open] .hbg::before{transform:rotate(45deg);top:0}
  .navmobile[open] .hbg::after{transform:rotate(-45deg);top:0}
  .navmobile-panel{position:absolute;top:100%;right:0;margin-top:14px;background:var(--paper);
    border:1px solid var(--line);min-width:220px;padding:8px 0;
    box-shadow:0 8px 24px rgba(41,41,41,.12);display:flex;flex-direction:column}
  .navmobile-panel a{padding:12px 20px;font-size:13px;font-weight:600;letter-spacing:.08em;
    text-transform:uppercase;color:var(--muted);text-decoration:none}
  .navmobile-panel a:hover,.navmobile-panel a[aria-current="page"]{color:var(--red)}
}
```

## 4. New page: `sandbox.html`

Same document shell as the other pages (same `<style>` design-system block,
same nav/footer conventions, `Sandbox` gets `aria-current="page"` in nav).

Two sections, "Demo" and "Play", each a card grid (reuse existing card/grid
patterns from the service pages' style block rather than inventing new
classes). Each card: a title, one handwritten sentence of description (not
just the filename), and an "Open →" link.

**Demo** (curated outputs — system maps, strategy artifacts):
| Title | Link |
|---|---|
| Brand growth map | `Sandbox/antigen-brand-growth-map-v4.html` |
| Media agency system map | `Sandbox/antigen-media-agency-system-map-v3.html` |
| Coca-Cola Gen Z map | `Brands/antigen-cocacola-genZ-map-v2.html` |
| Insurgent flashcards — Coke | `Brands/antigen-insurgent-flashcards-coke.html` |

**Play** (looser, exploratory):
| Title | Link |
|---|---|
| AI vendor dashboard | `Sandbox/ai_vendor_dashboard.html` |
| Bland Buster | `Sandbox/antigen_bland_buster_ANTIGEN.html` |
| Strategy in the post-algorithm world | `Sandbox/strategy_in_the_post_algorithm_world.html` |

All seven links open in the same tab (consistent with how every other
in-site link on this site behaves — no new `target="_blank"` pattern
introduced).

## 5. Homepage Treatment showcase

Inside `site/index.html`'s existing `#treatment` section, after the
`.cellfacts` block, add a small teaser:

```html
<div class="sandboxteaser">
  <p class="src">A few of the tools the AI Node actually runs:</p>
  <div class="sandboxteaser-row">
    <a href="Sandbox/antigen-brand-growth-map-v4.html">Brand growth map →</a>
    <a href="Sandbox/antigen-media-agency-system-map-v3.html">Media agency system map →</a>
    <a href="Brands/antigen-cocacola-genZ-map-v2.html">Coca-Cola Gen Z map →</a>
  </div>
  <a class="btn ghost small" href="sandbox.html">See the full Sandbox</a>
</div>
```

These three are the same three "Demo" items also listed on `sandbox.html` —
duplication is intentional (teaser + full listing), not an inconsistency to
resolve later. Styling reuses existing `.src` (small mono caption) and
`.btn.ghost` conventions already defined in `index.html`'s style block;
`.sandboxteaser-row` is a simple flex row with wrapping.

## Verification plan

No build step exists for this static site, so verification is manual:
- Open each of the 7 pages locally/on the branch deploy and click through:
  Services dropdown opens on click, closes on outside click, each of the 4
  links lands on the right page with `aria-current` styled correctly.
- Resize to a mobile width (or use browser device emulation) and confirm
  the hamburger menu opens, lists all 10 destinations, and each link works.
- Confirm `sandbox.html` renders with both sections and all 7 external
  links return 200 (they already exist and are deployed under `site/`).
- Confirm the homepage teaser's 3 links work and visually sit inside
  `#treatment` without breaking the existing `.cellrow`/`.cellfacts` layout.
- Cross-browser note: `<details>`/`<summary>` styling (marker hiding,
  `[open]` transitions) is supported in all current evergreen browsers;
  no fallback is planned for older browsers per this site's existing lack
  of any polyfill/fallback strategy elsewhere.
