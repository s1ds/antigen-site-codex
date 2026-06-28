import { Hero } from "@/components/sections/Hero";
import { fallbackContent } from "@/lib/fallbackContent";

export default function HomePage() {
  const content = fallbackContent.home;

  return (
    <main>
      <Hero eyebrow={content.eyebrow} title={content.title} body={content.body} />
    </main>
  );
}
