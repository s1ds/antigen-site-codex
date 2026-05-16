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

Create `antigen-web/.env.local` from `.env.local.example`, then add the Sanity project ID, dataset, and tokens. Initial content can be seeded with:

```powershell
npm run seed:sanity
```

## Deployment

See `docs/deployment.md`.
