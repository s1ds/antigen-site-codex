import { createClient } from "@sanity/client";

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-16";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "replace-me";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
  token: process.env.SANITY_API_READ_TOKEN,
});
