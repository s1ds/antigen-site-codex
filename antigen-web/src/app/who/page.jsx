import { ContentBlocks } from "@/components/sections/ContentBlocks";
import { PageHero } from "@/components/sections/PageHero";
import { fallbackContent } from "@/lib/fallbackContent";
import { getWhoPage } from "@/lib/sanity/queries";

export default async function WhoPage() {
  const page = (await getWhoPage()) || fallbackContent.who;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title} body={page.body} />
      <ContentBlocks blocks={page.blocks || fallbackContent.who.blocks} />
    </main>
  );
}
