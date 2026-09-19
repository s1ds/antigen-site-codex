# ANTIGEN site

Static HTML. No build step, no framework, no package manager.

These are shared facts about how this repo deploys and how its pages are
built. They apply to anyone working here, human or agent.

## Deployment — read before pushing

- Coolify watches `main` only, and serves `site/` as the web root.
- A push to `main` is live in roughly 10 seconds. There is no CI check,
  no staging, and no gate.
- Build configuration lives in the Coolify UI, not in this repo. There is
  no Dockerfile, nixpacks config, or workflow file to edit.
- `site/careers.html` publishes to `1antigen.com/careers.html`. Anything
  outside `site/` is never published.

## Two working copies

This repo is cloned twice on this machine:

| Folder | Used by |
| --- | --- |
| `D:\CODEX\Antigen-site2` | Codex |
| `D:\Claude\antigen-site` | Claude Code |

Each tool works only in its own folder. They share one remote, so work
moves between them through `origin` — never by reaching across folders.

Pages are also uploaded directly through the GitHub web UI, so `main` can
move without either folder knowing. Pull before starting work.

## Two kinds of page

There are 48 pages under `site/`, in two distinct archetypes. Match the
one you are working in.

**Main site pages** — the 7 at the top level of `site/` (`index.html`,
`booking.html`, the four `*-services.html`, `sandbox.html`). Each is
fully self-contained: one inline `<style>` block, no external stylesheet.

**Standalone report pages** — everything in `Brands/`, `CXOworkshop/`,
`planview/`, `Sandbox/`. These link the shared nav with
`<link rel="stylesheet" href="../shared/site-header.css">` and then add
their own inline `<style>` blocks on top. 33 of the 41 do this; a few
older `Sandbox/` pages predate the convention.

### site/shared/site-header.css is live

It is the canonical navigation for standalone reports, 63 lines, and
**33 pages depend on it**. A change there ships to all of them at once.
Treat it as shared infrastructure, not a scratch file.

The root `styles.css` is genuinely unused — the only match is a comment.

Start a new page by copying the `:root` block, nav, and footer from the
closest existing page of the same archetype.

### Tokens

Defined in `:root` on every page:

```
--paper:#F2F0EB   --ink:#292929    --red:#E33737   --muted:#7C7870
--disp:'Bebas Neue'   --body:'Barlow'   --mono:'Courier New'
```

Fonts load from Google Fonts with preconnect. Headings are uppercase
Bebas Neue sized with `clamp()`. Shared classes: `.wrap` `.inv` `.redsec`
`.kicker` `.lede` `.mark`.

### Preserve when editing

- the `@media (prefers-reduced-motion: reduce)` block
- the `:focus-visible` outline rule

## Reference material

All of the following is guidance, not canon. Where it disagrees with the
shipped pages, the pages win.

- `style-guide.md`, `design.md` — brand direction from the credentials
  deck. Brand-level intent. It describes a red/magenta manifesto palette;
  the built site uses warm paper `#F2F0EB` with a single red `#E33737`.
  The two have diverged.
- `ANTIGEN_website_copy.md` — copy guidance. Not approved or final text.
- `docs/superpowers/specs/` — design specs from earlier feature work.
