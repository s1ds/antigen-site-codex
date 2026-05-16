import { ContentBlocks } from "@/components/sections/ContentBlocks";
import { PageHero } from "@/components/sections/PageHero";
import { fallbackContent } from "@/lib/fallbackContent";
import { getWhatPage } from "@/lib/sanity/queries";

export default async function WhatPage() {
  const page = (await getWhatPage()) || fallbackContent.what;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title} body={page.body} tone="light" />
      <ContentBlocks blocks={page.blocks || fallbackContent.what.blocks} />
    </main>
  );
}
