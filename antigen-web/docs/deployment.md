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
