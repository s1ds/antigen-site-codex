# ANTIGEN V3 Design System

This design system translates the visual language of the attached ANTIGEN credentials presentation into a reusable web and document design language. It is built for insurgent strategy content: sharp, confrontational, editorial, high-contrast, and deliberately anti-corporate. The system should feel like a strategic manifesto colliding with a cultural protest poster.

## 1. Core Brand Idea

ANTIGEN is not presented as a conventional consultancy. The visual system frames it as a reaction against sameness, stagnation, suppression, legacy agency models, and algorithmic convergence. The deck repeatedly uses language such as “post algorithm organism,” “stagnation and sameness,” “purpose-built configuration of minds and machines,” “hard problems,” and “insurgence.” This system should preserve that character across websites, decks, landing pages, social posts, one-pagers, diagnostic tools, and workshop material.

The brand should never feel polished in the generic SaaS sense. It should feel precise but dangerous; structured but rebellious; analytical but visceral. The tension is the point.

## 2. Design Principles

### 2.1 Insurgency over polish

The system should prefer high-impact declarations, crop-heavy imagery, hard edges, compression, overlays, and asymmetry. Avoid rounded, soft, overly friendly design unless using it as a deliberate contrast.

### 2.2 White space as confrontation

White space is not emptiness. In the presentation, white-background analytical slides use large areas of negative space to make a single argument feel more forceful. White layouts should feel forensic and editorial, not decorative.

### 2.3 Red as operating system

The dominant visual field is a volatile red-to-magenta environment. Red is not merely an accent; it is the brand atmosphere. Use it for covers, section dividers, manifesto moments, and emotional intensification.

### 2.4 Typography carries violence

The design system is typographic first. Headlines should be tall, condensed, uppercase, and declarative. Secondary text should be controlled, narrow, and editorial. The system relies on oversized words, stacked lines, text obstruction, and ghosted outline type.

### 2.5 Evidence must look interrogated

When data, charts, or citations appear, they should not look like corporate dashboards. They should look like evidence pinned to a wall: cropped, annotated, isolated, or paired with a brutal headline.

### 2.6 Machines and minds

The system should support the duality of human insurgency and machine intelligence. Use human faces, distortions, scans, grids, wireframes, arrows, charts, and system diagrams. Keep this balance visible.

## 3. Visual Territories

### 3.1 Red Manifesto Territory

Used for covers, section dividers, bold claims, recruitment pages, and emotional narrative moments. This territory uses red/magenta gradients, full-bleed imagery, huge uppercase text, and aggressive cropping.

Typical use cases: homepage hero, manifesto page, deck opener, event poster, keynote title slide, recruitment callout.

### 3.2 White Evidence Territory

Used for strategic argument, diagnostics, data, comparison frameworks, and workshop material. This territory uses white or near-white backgrounds, red typographic accents, disciplined grids, and inserted evidence blocks.

Typical use cases: insight pages, problem maps, research summaries, diagnostics, service pages, strategic frameworks, one-pagers.

### 3.3 Black Intervention Territory

Used sparingly for hard conclusions, “legacy model” takedowns, counter-positioning, or high-drama end cards. Black should mostly appear as type or image shadow rather than as the default background.

Typical use cases: problem statements, quote cards, campaign posters, “what we reject” pages.

### 3.4 Yellow Growth Agent Territory

Used for “agents of growth,” solution areas, capability unlocks, and future-facing propositions. Yellow should feel like a torn signal, not a cheerful accent.

Typical use cases: product modules, method diagrams, solution maps, toolkits, capability cards.

## 4. Color System

The palette is derived from the presentation’s dominant rendered colors: red, magenta, white, black, off-white, muted greys, cyan-blue, and yellow.

### 4.1 Primary Tokens

| Token | Hex | Use |
|---|---:|---|
| `--color-red` | `#E31D28` | Primary brand field, urgent headlines, section bars |
| `--color-magenta` | `#E3195B` | Gradient partner to red, image overlays, emotional intensity |
| `--color-crimson` | `#B11226` | Dark red shadows, overlays, deep image treatment |
| `--color-black` | `#111111` | Primary text, brutalist headline overlays |
| `--color-white` | `#FFFFFF` | Clean evidence fields, reversed text |
| `--color-paper` | `#F8F7F6` | Editorial off-white background |
| `--color-smoke` | `#E8E8E8` | Rules, pale panels, evidence containers |
| `--color-grey` | `#9FA2A4` | Metadata, inactive navigation, captions |
| `--color-blue` | `#08A7D8` | Rare contrast accent, strategic emphasis |
| `--color-yellow` | `#FFC000` | Agents of growth, signal shards, solution emphasis |

### 4.2 Gradient Tokens

Use the red/magenta gradient as a brand field, not as a decorative flourish.

`--gradient-insurgence: linear-gradient(135deg, #E31D28 0%, #E3195B 72%, #F0448E 100%);`

`--gradient-red-dark: linear-gradient(135deg, #E31D28 0%, #B11226 100%);`

### 4.3 Color Proportions

For red manifesto layouts, use 70 percent red/magenta, 20 percent white, 10 percent black or image shadow. For white evidence layouts, use 70 percent white/off-white, 15 percent red, 10 percent black, 5 percent blue/yellow/grey. For product and solution layouts, use 50 percent white, 25 percent black, 15 percent yellow, 10 percent red.

### 4.4 Accessibility Rules

White text on red or magenta is preferred for large headlines only. For body text, use black on white or white on black. Avoid magenta body copy on white unless the text is large and bold. Blue should be used as a high-signal contrast accent and not as a default link color.

## 5. Typography System

The PowerPoint theme uses Montserrat and Montserrat SemiBold. The visual effect in the slides also suggests a condensed, poster-like headline style. For web implementation, use Montserrat for core typography and optionally pair it with a condensed display family such as Bebas Neue, Anton, Oswald, or Archivo Black when a closer poster effect is needed.

### 5.1 Font Stack

Primary UI and body: `Montserrat, Inter, Arial, sans-serif`

Condensed display option: `Bebas Neue, Oswald, Impact, Arial Narrow, sans-serif`

Monospace utility: `IBM Plex Mono, ui-monospace, SFMono-Regular, Menlo, monospace`

### 5.2 Type Roles

#### Hero Display

Use for the largest manifesto claims. Uppercase, extremely tight leading, negative tracking when possible, often stacked over 3 to 5 lines.

Recommended CSS: `font-family: var(--font-display); font-size: clamp(4.5rem, 13vw, 13rem); line-height: .78; letter-spacing: -.045em; text-transform: uppercase; font-weight: 900;`

#### Section Display

Use for section openers and page titles. Uppercase, condensed, heavy.

Recommended CSS: `font-size: clamp(3rem, 8vw, 8rem); line-height: .85; letter-spacing: -.035em;`

#### Editorial Headline

Use for white evidence pages. Still forceful, but more readable.

Recommended CSS: `font-size: clamp(2rem, 5vw, 5rem); line-height: .95; letter-spacing: -.03em;`

#### Body Copy

Use for explanation, diagnostics, and product copy. Keep short and severe. Avoid long soft paragraphs on red backgrounds.

Recommended CSS: `font-size: clamp(1rem, 1.2vw, 1.15rem); line-height: 1.5; font-weight: 500;`

#### Caption / Metadata

Use for navigation, evidence labels, chart captions, slide section markers.

Recommended CSS: `font-size: .72rem; line-height: 1.2; text-transform: uppercase; letter-spacing: .08em; font-weight: 700;`

### 5.3 Typographic Behaviours

Headlines may be cropped at the canvas edge. Text may overlap imagery. Ghost text may sit behind solid text. Outline text may be used to create a glitch or echo effect. Navigation labels should be small, uppercase, and aligned along the top edge of the composition. Use semicolons and terse phrases in labels, for example: `CONTENT; DESIGN; NARRATIVES`.

## 6. Layout System

### 6.1 Canvas

The deck uses a 16:9 presentation canvas. Web equivalents should use full-viewport hero sections, wide editorial spreads, and strong horizontal composition.

Default web page max width: `1440px`.

Default content grid: 12 columns.

Default desktop page padding: `clamp(24px, 5vw, 72px)`.

Default mobile page padding: `24px`.

### 6.2 Grid Modes

#### Manifesto Grid

A loose asymmetrical grid for covers and dividers. Allows text to bleed to edges, image crops to dominate, and nav to remain small at the top.

#### Evidence Grid

A disciplined two-column or three-column grid. Left side typically contains the claim; right side contains evidence, chart, image, or citation.

#### Triptych Grid

Used for three forces: sameness, stagnation, suppression. Each column contains a title, visual evidence, and a pointed diagnosis.

#### Collision Grid

Used for systems or product slides where forces collide with agents of growth. Use opposing shapes, arrows, torn panels, and hard diagonals.

## 7. Component System

### 7.1 Hero Manifesto

A full-bleed red/magenta section with oversized stacked headline, optional image overlay, small top navigation, and one brutal subline.

Content pattern: `WE BATTLE / STAGNATION / WITH / INSURGENCE`.

Rules: keep headline uppercase; allow one word to sit behind or inside the image; place secondary text in white or black; avoid paragraph-heavy content.

### 7.2 Section Ribbon

A small horizontal navigation line placed at the top. It will include the navigation buttons. Current section appears in yellow, white, or black depending on background.

### 7.3 Evidence Block

A white or off-white panel containing a chart, statistic, screenshot, or proof point. Use red headline labels and small captions. Evidence blocks can float, overlap, or sit in a right column.

### 7.4 Force Card

A card for each problem force: `SAMENESS`, `STAGNATION`, `SUPPRESSION`. Each card includes category labels, a large title, one sharp explanatory sentence, and optional proof.

### 7.5 Manifesto Statement

A large headline statement with one short paragraph. Use when explaining the philosophy. The statement should be declarative rather than descriptive.

### 7.6 Torn Signal

An angular yellow shape used to represent “agents of growth” or a solution thrust. It should feel cut out, jagged, or taped into the composition. Use with black text.

### 7.7 Word Wall

A dense background field of terms with a massive overprinted statement. The deck uses this to critique legacy solution merchants. Use this component to show industry language being crushed by a sharper claim.

### 7.8 Legacy Model Panel

A white spread with a red headline on the left and a diagram or system trap on the right. Used for explaining broken operating models.

### 7.9 CTA Strip

A compact closing block: `Talk to us if you have a hard problem or want to help solve one.` Use a red or black background and a minimal button.

## 8. Imagery System

The presentation uses image treatment as ideological signal. Images are not lifestyle decoration. They should represent insurgency, dissent, anonymity, ritual, pressure, systems, masks, machines, charts, and unnatural transformation.

### 8.1 Image Selection

Use images with strong silhouettes, unusual faces, masks, ritualistic or theatrical gestures, distorted figures, diagrams, charts, industrial textures, protest energy, and post-human tension.

Avoid generic office scenes, smiling teams, handshake photography, stock innovation imagery, soft gradients, glassmorphism dashboards, and cliché AI robot images.

### 8.2 Image Treatment

Images can be red-washed, cropped aggressively, placed behind type, obscured by type, or set against stark white evidence fields. Use multiply, luminosity, hard-light, or overlay effects when supported. Images should either dominate the slide or behave like evidence; avoid decorative thumbnails.

### 8.3 Cropping

Crop faces at forehead, mouth, or eye line to create tension. Allow important text to partially cover the subject. Use central composition for ritualistic posters, left-heavy composition for argument pages, and right-heavy composition for evidence pages.

## 9. Iconography and Diagrams

Use simple, sharp, technical marks. Favour arrows, brackets, labels, grids, outlined boxes, torn edges, and diagnostic diagrams over illustrative icons.

Diagrams should look like working models rather than polished infographics. They may include visible axes, labels, scratch-like arrows, jagged dividers, and annotated zones.

## 10. Motion Principles

Motion should feel like interruption, not decoration.

Recommended behaviours: fast text reveals, hard cuts, glitch fades, image flashes, chart build-ins, type obstruction, red-to-white inversion, and nav state changes.

Avoid slow bouncy transitions, soft parallax, playful microinteractions, or generic SaaS animation.

## 11. Voice and Copy Rules

The visual system requires matching language. Copy should be declarative, compressed, and adversarial. Say what the enemy is. Name the trap. Declare the counter-model.

Good pattern: `The legacy model solves post-algorithm problems with a pre-internet factory.`

Good pattern: `Speed without direction. 2026 tools plugging into 2006 systems.`

Good pattern: `Infinite capability, finite courage.`

Avoid: “We help brands unlock innovative business transformation through collaborative strategy solutions.”

### 11.1 Preferred Word Bank

Insurgence, stagnation, sameness, suppression, convergence, organism, reaction, hard problems, post-algorithm, legacy model, minds and machines, first principles, agents of growth, unfamiliar pathways, uncomfortable places, dissent, rebellion, purpose-built, signal, evidence, trap, rupture, capability, courage.

### 11.2 Sentence Structure

Use short claims followed by explanatory precision. Pair a conceptual phrase with a practical consequence. Use contrasts: `infinite capability, finite courage`; `speed without direction`; `automation without imagination`; `capability without courage`.

## 12. Application Rules

### 12.1 Website

Use a red manifesto homepage hero, followed by white evidence sections. The site should alternate emotional voltage and analytical clarity. Every page should contain at least one oversized typographic moment.

### 12.2 Presentation Decks

Maintain 16:9 format. Use a mix of full-bleed red section breaks and white analytical pages. Avoid placing too much body copy on red slides. Use page labels and section nav consistently.

### 12.3 Social Posts

Use square or 4:5 crops with one claim per post. Use red as the primary field, white uppercase headline, and one short caption. For carousel posts, alternate red manifesto cards and white evidence cards.

### 12.4 Documents and PDFs

Use white evidence territory as the base. Reserve red pages for chapter openings, dividers, and thesis statements. Use large pull quotes and side labels.

## 13. Do and Do Not

Do use oversized uppercase type. Do use red as atmosphere. Do use tension, contradiction, evidence, and argument. Do allow controlled mess. Do place charts and proof inside a sharper narrative.

Do not use soft corporate gradients, pastel palettes, generic AI imagery, smiling team photography, rounded SaaS cards everywhere, or decorative icons without argumentative function. Do not dilute the system with beige consulting language.

## 14. Implementation Checklist

Before publishing any ANTIGEN asset, check the following: does it make a claim; does it identify an enemy or trap; does the typography have enough force; does the red/white balance create contrast; does the evidence feel interrogated; does the design look purpose-built rather than templated; does the asset feel like an insurgent growth system rather than a conventional agency credential.
