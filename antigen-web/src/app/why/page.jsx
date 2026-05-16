import { ForceCards } from "@/components/sections/ForceCards";
import { ManifestoBand } from "@/components/sections/ManifestoBand";
import { PageHero } from "@/components/sections/PageHero";
import { fallbackContent } from "@/lib/fallbackContent";
import { getWhyPage } from "@/lib/sanity/queries";

export default async function WhyPage() {
  const page = (await getWhyPage()) || fallbackContent.why;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title} body={page.body} />
      <ForceCards items={fallbackContent.why.forces} />
      <ManifestoBand title="That is what ANTIGEN is." body="External agents of change introduced into stagnant systems to provoke, stimulate, and generate breakthrough growth." />
    </main>
  );
}
