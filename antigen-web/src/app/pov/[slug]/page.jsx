import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { getPost, getPosts } from "@/lib/sanity/queries";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function PovPostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageHero eyebrow={post.category || "POV"} title={post.title} body={post.excerpt} tone="light" />
      <article className="section-pad mx-auto max-w-4xl bg-white text-lg font-semibold leading-relaxed">
        {Array.isArray(post.body) ? <PortableText value={post.body} /> : <p>{post.body}</p>}
      </article>
    </main>
  );
}
