import { ContentBlocks } from "@/components/sections/ContentBlocks";
import { PageHero } from "@/components/sections/PageHero";
import { fallbackContent } from "@/lib/fallbackContent";
import { getHowPage } from "@/lib/sanity/queries";

export default async function HowPage() {
  const page = (await getHowPage()) || fallbackContent.how;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title} body={page.body} tone="light" />
      <ContentBlocks blocks={page.blocks || fallbackContent.how.blocks} />
    </main>
  );
}
