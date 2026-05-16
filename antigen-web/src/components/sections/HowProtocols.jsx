import Link from "next/link";

const ecosystems = [
  ["01", "Agencies", "Pitch Strategy & Thought Leadership", "Capability building, pitch strategy, thought leadership. We sharpen your offering and harden your competitive position.", "From the outside in"],
  ["02", "Brands", "Transformation & Agency Review", "Transformation programs, agency review, performance marketing architecture. We sit on your side of the table.", "Client-side only"],
  ["03", "AdTech / MarTech", "GTM & PMF Advisory", "GTM strategy, PMF advisory, holding company partnerships. We translate technology into commercial traction.", "Tech to revenue"],
  ["04", "Startups", "Positioning & Growth Architecture", "Positioning, growth architecture, fractional CMO. We build the strategic foundation before you scale.", "Before the scale"],
  ["05", "Cross-Sector", "Fractional CSO & Advisory Retainers", "For organisations that need a permanent provocation engine, not a periodic consultant. We exist inside the problem.", "Permanently embedded"],
];

export function HowProtocols() {
  return (
    <section className="bg-white px-page pb-0 pt-36 text-black md:pt-40">
      <h1 className="max-w-5xl font-display text-[clamp(4.5rem,9vw,10rem)] uppercase leading-[0.82]">
        Deployment
        <br />
        protocols
        <br />
        <span className="text-[var(--antigen-red)]">across ecosystems.</span>
      </h1>
      <p className="mt-10 max-w-3xl text-lg font-semibold leading-relaxed text-neutral-600">
        ANTIGEN deploys across five ecosystems, each with a purpose-built
        engagement model. Every engagement begins the same way: we find the
        <strong className="text-black"> uncomfortable place where your growth is actually hiding</strong> - and we go there.
      </p>

      <div className="mt-16 grid border border-black/15 md:grid-cols-2 lg:grid-cols-5">
        {ecosystems.map(([num, kicker, title, body, detail]) => (
          <article key={num} className="group border-b border-black/15 p-5 transition hover:bg-black hover:text-white md:border-r lg:border-b-0">
            <div className="mb-6 h-1 bg-[var(--antigen-red)] transition group-hover:bg-[var(--antigen-yellow)]" />
            <p className="font-display text-6xl leading-none text-[var(--antigen-smoke)] transition group-hover:text-white/10">{num}</p>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.1em] text-[var(--antigen-red)] transition group-hover:text-white">{kicker}</p>
            <h2 className="mt-3 text-sm font-black uppercase tracking-wide">{title}</h2>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-neutral-600 transition group-hover:text-white/70">{body}</p>
            <p className="mt-4 text-xs font-black uppercase tracking-[0.08em] text-[var(--antigen-yellow)] opacity-0 transition group-hover:opacity-100">{detail} -</p>
          </article>
        ))}
      </div>

      <div className="-mx-page mt-24 grid gap-10 bg-black px-page py-16 text-white md:grid-cols-[4fr_7fr] md:items-center md:py-20">
        <div>
          <h2 className="font-display text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.82]">
            Service
            <br />
            <span className="text-[var(--antigen-yellow)]">velocity</span>
            <br />
            architecture
          </h2>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.1em] text-white/35">Two deployment tiers</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <Tier badge="Tier 1" title="Immediate" time="Days to weeks / Project-based" yellow={false} items={["POVs and strategic positions", "Pitch war rooms", "Workshops and diagnostics", "Go-to-market strategy"]} />
          <Tier badge="Tier 2" title="Mid-long term" time="Weeks to months / Embedded" yellow items={["Structural capability building", "Embedded transformation", "Fractional CMO / CSO", "Advisory retainers"]} />
        </div>
      </div>

      <div className="-mx-page flex flex-wrap items-center justify-between gap-6 border-t border-white/10 bg-black px-page py-8">
        <p className="font-display text-[clamp(2rem,4vw,4rem)] uppercase text-white/15">Hard problems. Fast. // ANTIGEN.</p>
        <Link href="/contact" className="bg-[var(--antigen-yellow)] px-8 py-4 text-xs font-black uppercase tracking-[0.12em] text-black hover:bg-white">
          Bring us a hard problem
        </Link>
      </div>
    </section>
  );
}

function Tier({ badge, title, time, items, yellow }) {
  return (
    <article className="border border-white/15 bg-white/[0.06] p-6 transition hover:border-[rgba(255,192,0,0.35)] hover:bg-white/[0.09]">
      <span className={`${yellow ? "bg-[var(--antigen-yellow)] text-black" : "bg-[var(--antigen-red)] text-white"} inline-block px-3 py-1 text-xs font-black uppercase tracking-[0.1em]`}>
        {badge}
      </span>
      <h3 className="mt-4 font-display text-4xl uppercase leading-none">{title}</h3>
      <p className="mt-2 text-xs font-black uppercase tracking-[0.08em] text-white/40">{time}</p>
      <div className="mt-5 space-y-2">
        {items.map((item) => (
          <p key={item} className="text-xs font-black uppercase tracking-[0.07em] text-white/45">
            <span className={yellow ? "text-[var(--antigen-yellow)]" : "text-[var(--antigen-red)]"}>- </span>
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}
