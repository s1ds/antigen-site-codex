import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { BackHomeLink } from "@/components/site/BackHomeLink";
import { fallbackContent } from "@/lib/fallbackContent";

export async function generateStaticParams() {
  return fallbackContent.posts.map((post) => ({ slug: post.slug }));
}

export default async function PovPostPage({ params }) {
  const { slug } = await params;
  const post = fallbackContent.posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <PageHero eyebrow={post.category || "POV"} title={post.title} body={post.excerpt} tone="light" />
      <article className="section-pad mx-auto max-w-4xl bg-white text-lg font-semibold leading-relaxed">
        <p>{post.body}</p>
        <BackHomeLink className="mt-12" />
      </article>
    </main>
  );
}
