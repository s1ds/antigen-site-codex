import Link from "next/link";

export function PostCard({ post }) {
  return (
    <Link href={`/pov/${post.slug}`} className="block border-2 border-black bg-white p-6 transition hover:bg-black hover:text-white">
      <p className="kicker text-[var(--antigen-red)]">{post.category || "POV"}</p>
      <h2 className="mt-4 font-display text-5xl uppercase leading-none">{post.title}</h2>
      <p className="mt-4 text-sm font-bold leading-relaxed">{post.excerpt}</p>
    </Link>
  );
}
