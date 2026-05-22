# CXO Workshop Standalone Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add the supplied CXO workshop page at `/CXOworkshop` while keeping the existing ANTIGEN header and leaving the route unlinked.

**Architecture:** Implement the workshop as a focused Next.js route under `src/app/CXOworkshop` so it inherits the existing root layout. Port the supplied HTML body, route-specific styles, and required browser interactions into route-local files while omitting the attached page header and preserving the content footer.

**Tech Stack:** Next.js App Router, React, route-scoped CSS, browser verification.

---

## File Structure

- `antigen-web/src/app/CXOworkshop/page.jsx`: route metadata and workshop page composition.
- `antigen-web/src/app/CXOworkshop/CxoWorkshopPage.jsx`: client-side workshop markup and interactive behavior ported from the supplied HTML.
- `antigen-web/src/app/CXOworkshop/cxo-workshop.css`: route-specific workshop styles derived from the supplied HTML.

### Task 1: Add the CXO Workshop Route

**Files:**
- Create: `antigen-web/src/app/CXOworkshop/page.jsx`
- Create: `antigen-web/src/app/CXOworkshop/CxoWorkshopPage.jsx`
- Create: `antigen-web/src/app/CXOworkshop/cxo-workshop.css`

- [ ] **Step 1: Identify the supplied HTML sections to port**

Read `C:\Users\s1ds\Downloads\antigen_cxo_series.html` and separate its head styles, body markup, interactive script logic, footer, and any source header block that must be omitted.

- [ ] **Step 2: Add the route entry**

Create `page.jsx` with metadata for the workshop page, import `cxo-workshop.css`, and render the route-local workshop component so the existing root layout supplies the ANTIGEN header.

- [ ] **Step 3: Port the supplied content**

Create `CxoWorkshopPage.jsx` with the supplied workshop sections and footer, omit the attached HTML page header, preserve anchor ids such as `workshops` and `diagnostic`, and add top spacing below the fixed site header.

- [ ] **Step 4: Port the required interactions**

Move the browser behavior from the supplied script into React client logic in `CxoWorkshopPage.jsx` so workshop controls and diagnostic interactions still respond after the HTML is inside the app route.

- [ ] **Step 5: Port route-specific styling**

Move the supplied page CSS into `cxo-workshop.css`, keep selectors scoped under a route wrapper where practical, and avoid modifying global ANTIGEN styling unless the route cannot render correctly without it.

### Task 2: Verify the Standalone Page

**Files:**
- Verify: `antigen-web/src/app/CXOworkshop/page.jsx`
- Verify: `antigen-web/src/app/CXOworkshop/CxoWorkshopPage.jsx`
- Verify: `antigen-web/src/app/CXOworkshop/cxo-workshop.css`

- [ ] **Step 1: Build the app**

Run:

```powershell
npm run build
```

Expected: the Next.js build completes successfully and includes `/CXOworkshop`.

- [ ] **Step 2: Open the direct route**

Start or reuse the local ANTIGEN preview and open `/CXOworkshop` in a browser.

Expected: the normal ANTIGEN header is visible and the route loads without being linked from navigation.

- [ ] **Step 3: Check the workshop page**

Confirm the supplied page header is absent, the hero/workshop/footer content renders, anchor buttons scroll to their targets, and the interactive controls respond.
