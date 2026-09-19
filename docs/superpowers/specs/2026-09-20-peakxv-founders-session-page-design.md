# Peak XV Founder Session — Standalone Page Design

## Goal

Rebuild the ANTIGEN Founder Session — currently a React 19 + Vite + Tailwind +
Express app in `D:\Claude\peakxv-founders` — as a single static page on the
ANTIGEN site at `site/Sandbox/peakxv-founders.html`.

The instrument is a two-hour, 28-question strategic diagnostic completed by a
founding team in one room. Respondents are Peak XV portfolio companies. It is
not a form and not a chatbot. It is a facilitator, and every decision below
follows from that.

## Source of truth

`D:\Claude\peakxv-founders\ANTIGEN_Brief_Founder_Session.md` is canonical.

It was validated against both `CLAUDE.md` files during design and is internally
consistent:

- 28 questions across 9 sections.
- Section timings total exactly 120 minutes
  (12 + 12 + 18 + 12 + 15 + 20 + 10 + 15 + 6).
- `draft` mode on Q04, Q06, Q07, Q08 — exactly the four named in `CLAUDE.md`.
- `silent` mode on Q03, Q16, Q28 — exactly the three named.
- `probe` mode on the remaining 21.

`src/data/antigenBrief.ts` in the source repo holds an earlier 21-question
version and is superseded. It is not used.

## Scope of this piece of work

In scope:

- The page, its two JSON data files, and the complete client.
- The AI client implementing the endpoint contract, behind a configurable
  `AI_ENDPOINT` that is unset on first ship.
- Writing `antigen-brief.json` back to the `peakxv-founders` repo so its
  `PORT_PLAN.md` phases have the file they assume exists.

Out of scope, deliberately, and handled as separate work:

- The Cloudflare Worker itself.
- Linking the page from `sandbox.html`.

## Placement and page archetype

```
site/Sandbox/peakxv-founders.html
site/Sandbox/peakxv-founders-data/antigen-brief.json
site/Sandbox/peakxv-founders-data/peakxv-companies.json
```

Publishes to `1antigen.com/Sandbox/peakxv-founders.html`. The data directory
follows the existing `india-comparison-commerce-assets/` precedent.

Both JSON files are fetched at runtime rather than inlined. This satisfies
`PORT_PLAN.md` Phase 1, and it keeps the HTML diffable in a pull request —
which matters, because the PR is the only review gate between this work and a
live site.

The page follows the **standalone report archetype** described in `AGENTS.md`:

- `<antigen-header>` with `<template shadowrootmode="open">` linking
  `../shared/site-header.css`, copied verbatim from
  `Sandbox/into10_buyer_decision_journey_antigen.html`.
- The accompanying `<style data-antigen-header-layout>` block that pads the
  body by 58px.
- Page-scoped `<style>` on top.
- Site footer attribution.

`site/shared/site-header.css` is **not modified**. It is shared infrastructure
and 33 pages depend on it.

## Tokens

The two `CLAUDE.md` files specify different palettes. `AGENTS.md` settles it:
"Where it disagrees with the shipped pages, the pages win." Site tokens are
used for all page chrome, so the page looks like it belongs on 1antigen.com.

```
--paper:#F2F0EB   --ink:#292929   --red:#E33737   --muted:#7C7870
--disp:'Bebas Neue'   --body:'Barlow'   --mono:'Courier New'
```

One page-scoped addition:

```
--ai:#FFC000
```

That yellow is not decoration. It is the DRAFT state marker from the source
`CLAUDE.md`, reserved exclusively for AI-drafted panels, and the site has no
equivalent token.

All AI output is set in `--mono` against `--body` for the founders' own
writing. This satisfies "AI output must never look like the founders' own
writing" using the site's existing token rather than importing IBM Plex Mono.

Preserved, as `AGENTS.md` requires:

- the `@media (prefers-reduced-motion: reduce)` block
- the `:focus-visible` outline rule

## Data shape

### `antigen-brief.json`

```
{
  "meta":     { "title", "totalMinutes": 120, "questionCount": 28 },
  "sections": [ { "code", "title", "question", "minutes", "description",
                  "questions": [ ... ] } ],
  "response": [ { "element", "source", "fromQuestions": [ ... ] } ],
  "logs":     { "disagreement": { columns }, "openQuestions": { columns } }
}
```

Each question carries:

```
{ "id", "number", "title", "prompt", "weakAnswerTell",
  "input": { "type", ...type-specific fields },
  "ai":    { "mode", "brief", "rubric", "crossRefs": [ ... ] } }
```

Nothing about the instrument is hardcoded in the renderer. If the instrument
changes, the JSON changes.

### Input types

The canonical document requires five input types. The enum in the superseded
`antigenBrief.ts` covers only some of them.

| Type | Questions | Shape |
|---|---|---|
| `textarea` | 20 | Free text |
| `binary+text` | Q03, Q09, Q19 | Yes/No **and** a written answer; the prose is the real answer |
| `table` | Q07 (5 rows x 3 cols), Q27 (3 x 3) | Competitors; owner/date/decision |
| `single+other` | Q14 | 8 contradictions, single-select, plus an "Other" field |
| `fields` | Q17, Q24 | Q17: sentence + attempt 2 + attempt 3. Q24: if / then / because |

Q14 is a radio group, not checkboxes. The question reads "Tick one. One." and
its stated point is that ticking three means you have not chosen. A checkbox
would let the interface defeat the instrument.

### `peakxv-companies.json`

Converted from `src/data/peakxvCompanies.ts`. 254 records of
`{ id, name, description, stage, firstPartnered, sectors }`. Powers company
lookup, facts prefill, and the Q07 peer set.

## Startup assertion

On load, before rendering, assert:

- `sections.length === 9`
- total question count `=== 28`
- section minutes sum `=== 120`
- `draft` questions are exactly Q04, Q06, Q07, Q08
- `silent` questions are exactly Q03, Q16, Q28

On failure, render a visible error and stop. Fail loudly, as
`PORT_PLAN.md` Phase 1 requires — a silently wrong instrument is worse than a
page that does not load.

## Screens

Seven views, switched in one file. No router.

1. **Gate** — access code entry. Protects the AI endpoint, not the page
   content. See Security below.
2. **Company** — type-ahead over the 254 records. On select, show the record
   and ask "Is this still accurate?" with an edit affordance; these
   descriptions are undated and some partnerships go back to 2007. Manual
   entry is allowed, and everything drafted afterwards is then labelled
   UNVERIFIED.
3. **Before the room** — the facts block. Venture, category and primary
   customer prefill from the record as DRAFT. Founders present, the problem
   that prompted the session, and the scribe are user-entered.
4. **Session** — one question per screen, never a scrolling wall of 28.
   Section marker, question number, section clock, prompt, the weak-answer
   tell always visible beneath it, input sized to `input.type`.
5. **Section close** — the "Where we didn't agree" box. Always shown; skipping
   requires an explicit "we agreed" action.
6. **Response** — the assembled one-pager. Nine rows, each traceable to its
   source questions, editable before export.
7. **Export** — Markdown, PDF, JSON.

### Stage field

`peakxv-companies.json` records carry `stage: "Series A"` — an *investment*
stage. The brief's Stage field is Pre-launch / Launched / Scaling / Stalled —
an *operating* stage. They are different axes.

Venture, category and primary customer prefill. **Stage is left empty for the
founders to choose.** Prefilling it would put a value into a field that has no
such option, which is the behaviour `App.tsx` has today.

### Initial state

All fields empty on load. The source `App.tsx` hardcodes Care.Fi,
"Jane Doe (CEO), John Smith (CTO)" and a written problem statement as
defaults, so a founder currently opens the tool inside somebody else's brief.
That does not carry over.

### Timer

A visible section clock, not per-question. On overrun it turns red and nothing
else happens — no lockout, no modal, no warning dialog. The page's only job is
to make the overrun visible.

### Completion counting

Completion counts **accepted** answers only. An untouched AI draft does not
count. A 90% brief of unedited drafts is worse than a 40% brief in the
founders' own words, and the meter must not lie about which one they have.

## The three AI modes

Every question carries `ai.mode`. The client enforces it, and the endpoint
must enforce it independently.

- **`draft`** — Q04, Q06, Q07, Q08 only. Produces research the founders must
  correct or reject. Lands in a visually distinct DRAFT state using `--ai`.
  Does not count toward completion until accepted. Per-item Accept / Rewrite /
  Reject. Every drafted claim carries FROM RECORD / INFERRED / UNVERIFIED, and
  the label is rendered, not merely requested.
- **`probe`** — the 21. Never writes the answer, not even as a suggestion or a
  starter. After submission it returns exactly one challenge, one sentence.
  A strong answer gets the single word `Logged.` The founder may Answer again
  or Stand by it; "Stand by it" is a legitimate ending and is recorded.
- **`silent`** — Q03, Q16, Q28. No AI, before or after. The affordance is
  **absent**, not disabled.

### Cross-references

Both land on `probe` questions, so the payload shape must carry prior answers
from the start rather than being retrofitted:

- **Q17** — compare attempt three against the Q08 dead-language list and
  report the overlap.
- **Q19** — name which competitor from the Q07 table could make the same
  claim.

## AI endpoint contract

The page calls a single configurable `AI_ENDPOINT`. It ships **unset**, and
every AI affordance renders visibly inert until it is configured. The Worker
that serves these routes is separate work.

```
POST /gate        { code }                       -> { token } | 401
POST /ai-probe    { questionId, answer, priors } -> { verdict } | { challenge }
POST /ai-draft    { questionId, company, priors }-> { items: [ { claim, label } ] }
POST /analyze-url { url }                        -> { facts }
```

Requirements on whatever serves these:

- Holds the API key. The page never sees it.
- CORS restricted to `https://1antigen.com`.
- Rejects `/ai-draft` for any question whose mode is not `draft`, and
  `/ai-probe` for any `silent` question. Returns 403, not a polite refusal.
  Client-side enforcement alone is not enforcement.
- Per-code rate limit on AI calls.
- `analyze-url` is scoped strictly to the facts block. It must never write
  into a question.
- Logs no prompt or completion content.

### Model selection

Decided during design, with costs verified against live pricing on
2026-09-20 for a full session of 64 calls at ~1,200 in / 60 out:

| Mode | Model | Temp | Notes |
|---|---|---|---|
| `probe` | `gemini-3.1-flash-lite` | 0.4 | `maxOutputTokens: 60`, `responseSchema` forcing `Logged.` or one sentence |
| `draft` | `gemini-3.8-flash` | 0.7 | 4 questions only, so the stronger model costs about a cent |
| `analyze-url` | `gemini-3.1-flash-lite` | 0.4 | Facts block only |

Approximately **$0.033 per session, ~30 sessions per dollar**.

Both model IDs live in a single environment variable each. `PORT_PLAN.md`
Phase 0 was burned by a hardcoded invented model ID; one constant, one place.

**Free tiers were considered and rejected.** Google's pricing page states
plainly that free-tier content *is* used to improve their products and
paid-tier content is not; OpenRouter's `:free` endpoints strike the same
bargain, and are additionally capped at 20 requests/minute and 50–1,000
requests/day account-wide — below what a single 28-question session needs.
Routing a portfolio company's non-consensus beliefs and competitive
positioning through an endpoint that trains on them is the data-handling
problem `PORT_PLAN.md` warns about, triggered by the cheapest line item in the
build.

Notes for anyone re-reading `PORT_PLAN.md`: Gemini 1.5 is fully shut down and
returns 404. `gemini-3.8-flash`, which Phase 0 calls "generated invention", is
now a real and current model.

## Security and privacy

The page is a static file at a guessable public URL. Client-side JavaScript
cannot hide its source, and nothing here pretends otherwise.

- **The gate protects the endpoint, not the page.** The instrument itself is
  not secret — it is a document you would hand a founder. The API key is.
- The page ships with `<meta name="robots" content="noindex,nofollow">`.
  Gated does not mean unindexed.
- It is **not** linked from `sandbox.html`. Reachable by direct URL only.
- Answers live in `localStorage` and in the founders' exported JSON. Nothing
  is persisted server-side.
- Answers do transit the endpoint on probe and draft calls. Paid-tier models
  are used specifically so that content is not trained on. This is the
  data-handling position to state to Peak XV, and it is stated here so it is
  written down before a session rather than after.

## Exports

- **Markdown** — mirrors `ANTIGEN_Brief_Founder_Session.md` with answers
  filled in, followed by The ANTIGEN Response, the disagreement log and the
  open questions.
- **PDF** — print stylesheet plus `window.print()`. Answers render as static
  text before printing so nothing clips.
- **JSON** — for the scribe to carry out of the room, and to re-import.

Footer on every export:
`anti**gen** — Composable. Distributed. Insurgent. · 1antigen.com`

Google Drive backup is dropped. The source `driveBackup.ts` falls back to a
literal `'client-id'` and silently degrades to a local download; a public
OAuth client needs a verified consent screen. JSON export does the same job.

## Conventions

- British spelling throughout, in code comments and all user-facing copy.
- No secrets in the page, ever.
- No chat interface. No "generate my whole brief" button. No scoring or
  readiness percentage for the venture. No praise, streaks, celebration states
  or completion confetti. No suggestions on Q03, Q16 or Q28 under any
  circumstance, including on direct request.
- Square corners, 1px rules, hard shadows. No pills, no gradients, no blurred
  card shadows.

## Verification

- The startup assertion passes: 9 sections, 28 questions, 120 minutes, and the
  draft/silent sets match exactly.
- Every question renders with the correct input type and its weak-answer tell
  visible.
- Q03, Q16 and Q28 render no AI affordance of any kind.
- Q14 permits exactly one selection.
- The section clock turns red on overrun and does nothing else.
- Completion does not advance on an unaccepted draft.
- Stage is empty after a company is selected; venture, category and customer
  are prefilled and labelled DRAFT.
- A fresh load shows no Care.Fi and no Jane Doe.
- With `AI_ENDPOINT` unset, every AI affordance renders visibly inert and no
  network call is attempted.
- Markdown export round-trips: re-importing the JSON into a fresh session
  returns every answer.
- Nav and footer are identical to the other Sandbox pages, and
  `site/shared/site-header.css` is unmodified.
- The page is absent from `sandbox.html`.
- Renders correctly at mobile width with no horizontal scroll.
