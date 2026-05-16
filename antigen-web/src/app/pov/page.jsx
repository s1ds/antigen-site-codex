import { PageHero } from "@/components/sections/PageHero";
import { PostCard } from "@/components/sections/PostCard";
import { getPosts } from "@/lib/sanity/queries";

export default async function PovPage() {
  const posts = await getPosts();

  return (
    <main>
      <PageHero eyebrow="ANTIGEN Perspectives" title="We do not hold positions quietly." body="Every growth problem has a structural diagnosis underneath it. We publish ours." />
      <section className="section-pad bg-[var(--antigen-paper)]">
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
