import { BackHomeLink } from "@/components/site/BackHomeLink";

export function PageHero({ eyebrow, title, body, tone = "red" }) {
  const classes =
    tone === "light"
      ? "bg-[var(--antigen-paper)] text-black"
      : "bg-antigen-red text-white";

  return (
    <section className={`${classes} px-page pb-16 pt-40 md:pt-44`}>
      <BackHomeLink tone={tone === "light" ? "light" : "red"} className="mb-10" />
      <p className="kicker mb-6 text-[var(--antigen-yellow)]">{eyebrow}</p>
      <h1 className="display-lg max-w-6xl">{title}</h1>
      {body ? <p className="mt-8 max-w-4xl text-xl font-bold leading-tight">{body}</p> : null}
    </section>
  );
}
