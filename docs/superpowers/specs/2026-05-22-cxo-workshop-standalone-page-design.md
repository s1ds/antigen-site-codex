# CXO Workshop Standalone Page Design

## Goal

Add the supplied India CXO Workshop Series page to the ANTIGEN site at the direct route `/CXOworkshop` without linking it from the public navigation.

## Route Behavior

- `/CXOworkshop` is a normal Next.js app route in `antigen-web`.
- The route uses the existing ANTIGEN site shell so the fixed `1antigen.com` header remains visible.
- The route is not added to `SiteHeader`, the footer navigation, or any other public page index.

## Page Content

- The supplied `antigen_cxo_series.html` is the source for the workshop page body, styling, footer, anchor targets, and interactive workshop/diagnostic behavior.
- The attached HTML page's own top header area is omitted so it does not compete with the existing site header.
- The imported content receives enough top spacing to sit below the fixed ANTIGEN header.
- Existing workshop footer content remains part of the page.

## Implementation Shape

- Store the source workshop markup and page-specific styles in focused route files under `src/app/CXOworkshop`.
- Recreate the source page interactions in client-side route code where needed so tabs, filters, or diagnostic actions still work after the HTML is brought into React.
- Keep page-specific CSS scoped to the route to avoid changing the existing ANTIGEN pages.

## Verification

- Build the Next.js app successfully.
- Open `/CXOworkshop` directly and confirm the ANTIGEN header remains visible.
- Confirm the source page header is absent, the workshop content and footer render, and anchor/interactivity behavior still works.
