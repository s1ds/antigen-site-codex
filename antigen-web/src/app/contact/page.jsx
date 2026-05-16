import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import { fallbackContent } from "@/lib/fallbackContent";
import { getContactPage } from "@/lib/sanity/queries";

export default async function ContactPage() {
  const page = (await getContactPage()) || fallbackContent.contact;

  return (
    <main>
      <PageHero eyebrow={page.eyebrow} title={page.title} body={page.body} />
      <section className="section-pad bg-white">
        <div className="grid gap-4 md:grid-cols-3">
          {(page.emails || fallbackContent.contact.emails).map((email) => (
            <a key={email} href={`mailto:${email}`} className="border-2 border-black p-6 font-black transition hover:bg-black hover:text-white">
              {email}
            </a>
          ))}
        </div>
        <div className="mt-10">
          <Button href="mailto:sid@antigen.in">Brief us</Button>
        </div>
      </section>
    </main>
  );
}
