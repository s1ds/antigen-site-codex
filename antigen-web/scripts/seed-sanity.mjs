import { createClient } from "@sanity/client";
import { fallbackContent } from "../src/lib/fallbackContent.js";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_WRITE_TOKEN;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-16";

if (!projectId || !token) {
  throw new Error("Set NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN before seeding.");
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

const pageDocs = [
  ["homePage", fallbackContent.home],
  ["whyPage", fallbackContent.why],
  ["whatPage", fallbackContent.what],
  ["whoPage", fallbackContent.who],
  ["howPage", fallbackContent.how],
  ["contactPage", fallbackContent.contact],
];

for (const [type, content] of pageDocs) {
  await client.createOrReplace({ _id: type, _type: type, ...content });
}

for (const post of fallbackContent.posts) {
  await client.createOrReplace({
    _id: `post-${post.slug}`,
    _type: "post",
    ...post,
    slug: { _type: "slug", current: post.slug },
    body: [{ _type: "block", children: [{ _type: "span", text: post.body }] }],
    publishedAt: new Date().toISOString(),
  });
}

console.log("Seeded ANTIGEN content.");
