import { client } from "./client";
import { fallbackContent } from "@/lib/fallbackContent";

const pageFields = `{
  eyebrow,
  title,
  body,
  blocks[]{title, body}
}`;

async function fetchSanity(query, params = {}) {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return null;
  }

  try {
    return await client.fetch(query, params, { next: { revalidate: 60 } });
  } catch {
    return null;
  }
}

export const getHomePage = () => fetchSanity(`*[_type == "homePage"][0]${pageFields}`);
export const getWhyPage = () => fetchSanity(`*[_type == "whyPage"][0]${pageFields}`);
export const getWhatPage = () => fetchSanity(`*[_type == "whatPage"][0]${pageFields}`);
export const getWhoPage = () => fetchSanity(`*[_type == "whoPage"][0]${pageFields}`);
export const getHowPage = () => fetchSanity(`*[_type == "howPage"][0]${pageFields}`);
export const getContactPage = () => fetchSanity(`*[_type == "contactPage"][0]{eyebrow,title,body,emails}`);

export async function getPosts() {
  const posts = await fetchSanity(`*[_type == "post"] | order(publishedAt desc){
    title,
    "slug": slug.current,
    category,
    excerpt,
    body
  }`);

  return posts?.length ? posts : fallbackContent.posts;
}

export async function getPost(slug) {
  const post = await fetchSanity(`*[_type == "post" && slug.current == $slug][0]{
    title,
    "slug": slug.current,
    category,
    excerpt,
    body
  }`, { slug });

  return post || fallbackContent.posts.find((item) => item.slug === slug) || null;
}
