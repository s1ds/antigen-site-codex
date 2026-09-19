# Claude Code — ANTIGEN site

Read `AGENTS.md` first. It holds the shared facts about deployment and
page conventions, and they apply here in full.

This file adds the rules specific to Claude Code. They are not Codex's
rules and should not be applied to work happening in
`D:\CODEX\Antigen-site2`.

## Working copy

Work only in `D:\Claude\antigen-site`. Never read from or write to
Codex's folder — pull from `origin` instead.

## Branch and ship

- Start every piece of work on a `claude/<feature>` branch, cut from a
  freshly pulled `main`.
- Never commit or push to `main`. A push to `main` is live in about ten
  seconds with nothing in between.
- Ship through a pull request. The PR is the only review gate that
  exists, so the diff is what protects the live site.
- Pull `main` again before starting each new branch. Codex and the
  GitHub web UI both move it.

## New pages

Put them in `site/`. Anywhere else and they will not publish.

Copy structure from the nearest existing page rather than writing markup
from scratch, so the tokens, nav, and footer stay consistent.

Preview deployments are not configured in Coolify, so a PR shows changed
code, not a rendered page. For anything visual, expect to describe what
changed, or ask for previews to be enabled.
