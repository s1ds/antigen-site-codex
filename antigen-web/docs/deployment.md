# ANTIGEN Deployment Notes

Target domain: `1antigen.com`

Hosting:

- Hostinger VPS
- Coolify
- Next.js app deployed from GitHub
- Self-contained local content

Coolify environment variables:

- No CMS credentials are required for the public site.

Initial deployment flow:

1. Push the repo to GitHub.
2. Create a new Coolify application from the GitHub repo.
3. Set the build command to `npm run build`.
4. Set the start command to `npm run start`.
5. Confirm any host-level environment variables needed by deployment.
6. Point `1antigen.com` DNS to the Hostinger VPS.
7. Configure SSL in Coolify.
8. Open `https://1antigen.com` and verify the public site.
