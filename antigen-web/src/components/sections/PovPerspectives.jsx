import Link from "next/link";
import { BackHomeLink } from "@/components/site/BackHomeLink";

const povs = [
  [
    "01",
    "The Automated Media Paradox",
    "Doing things better vs doing better things.",
    "AdTech has turned sophisticated technological leaps into optimisation machinery for problems that may not matter. Breakthrough innovation becomes noise when it solves the wrong brief.",
    "https://link.sidht.com/adtech",
  ],
  [
    "02",
    "Our Digital Lobotomy",
    "Low-entropy lives, outsourced judgment, and the split between cognitive outsourcing and human context.",
    "The post-algorithm world is not just changing output. It is training people to produce smoother, more predictable thought unless they clutch onto lived, imperfect human judgment.",
    "https://link.sidht.com/lobotomy",
  ],
  [
    "03",
    "The Post-Algorithm World",
    "What happens when algorithms stop being novel and become the invisible infrastructure of daily life.",
    "Algorithms are no longer a thing we notice. They are the water. Post-algorithm does not mean after algorithms; it means after the novelty has disappeared.",
    "https://link.sidht.com/postalgo",
  ],
  [
    "04",
    "The Cartographers of Chaos",
    "Strategy and the strategist in the age of average.",
    "The strategist is endangered at the exact moment businesses need strategy most. Tactics without strategy is expensive noise, especially when AI makes that noise cheaper to produce.",
    "https://link.sidht.com/strat",
  ],
];

export function PovPerspectives() {
  return (
    <>
      <section className="bg-[var(--antigen-paper)] px-page pb-20 pt-36 md:pt-40">
        <BackHomeLink className="mb-10" />
        <div className="grid gap-10 md:grid-cols-[6fr_5fr] md:items-end">
          <h1 className="font-display text-[clamp(4.5rem,9vw,10rem)] uppercase leading-[0.82]">
            ANTIGEN
            <br />
            <span className="text-[var(--antigen-red)]">Perspectives.</span>
          </h1>
          <p className="text-lg font-semibold leading-relaxed text-neutral-600">
            We do not hold positions quietly. <strong className="text-black">Every growth problem has a structural diagnosis underneath it.</strong> We publish ours - openly, specifically, and without the language of comfortable consulting.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {povs.map(([num, kicker, title, desc, href]) => (
            <Link key={num} href={href} target="_blank" className="group relative overflow-hidden border border-black/15 bg-white p-7 transition hover:-translate-y-1 hover:border-[var(--antigen-red)] hover:shadow-[0_20px_50px_rgba(17,17,17,0.1)]">
              <span className="absolute inset-x-0 top-0 h-0 bg-[var(--antigen-red)] transition group-hover:h-1" />
              <p className="font-display text-7xl leading-none text-[var(--antigen-smoke)] transition group-hover:text-[rgba(227,29,40,0.12)]">{num}</p>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.1em] text-[var(--antigen-red)]">{kicker}</p>
              <h2 className="mt-3 text-2xl font-black leading-tight">{title}</h2>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-neutral-600">{desc}</p>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.1em] text-[var(--antigen-red)]">Read at sidht.com</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="grid gap-8 bg-black px-page py-16 text-white md:grid-cols-[5fr_6fr] md:items-center">
        <h2 className="font-display text-[clamp(3rem,6vw,6rem)] uppercase leading-[0.84]">
          We do not
          <br />
          hold
          <br />
          <span className="text-[var(--antigen-red)]">positions</span>
          <br />
          quietly.
        </h2>
        <div>
          <p className="text-lg font-semibold leading-relaxed text-white/65">
            The ANTIGENERIC Thesis is the core provocation: why algorithmic
            sameness is the defining strategic crisis of this decade, and what
            the antidote looks like from first principles.
          </p>
          <Link href="https://sidht.com" target="_blank" className="mt-8 inline-block bg-[var(--antigen-yellow)] px-7 py-4 text-xs font-black uppercase tracking-[0.12em] text-black hover:bg-white">
            Read the full thesis
          </Link>
        </div>
      </section>
      <section className="border-t-4 border-[var(--antigen-red)] bg-white px-page py-16">
        <BackHomeLink />
      </section>
    </>
  );
}
