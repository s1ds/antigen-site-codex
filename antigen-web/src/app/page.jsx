import { getHomePage } from "@/lib/sanity/queries";
import { Hero } from "@/components/sections/Hero";
import { fallbackContent } from "@/lib/fallbackContent";

export default async function HomePage() {
  const page = await getHomePage();
  const content = page || fallbackContent.home;

  return (
    <main>
      <Hero eyebrow={content.eyebrow} title={content.title} body={content.body} />
    </main>
  );
}
