const comparisons = [
  ["Model", "Convergent", "Divergent"],
  ["Operating mode", "Constant. Familiar.", "Uncomfortable places"],
  ["Talent model", "In-house upskill and hire", "Bespoke recombinant assembly"],
  ["Focus", "Campaign oriented", "Outcome oriented"],
  ["Optimised for", "Business as usual", "Pure signal"],
  ["Value model", "4% tie fees to results", "Alignment, not extraction"],
];

const cells = [
  {
    mark: "P",
    title: "Partners - The Stewards",
    body: "Senior context holders who manage relationships, carry reputational risk, and are accountable for outcomes. P&G, Coca-Cola, WPP, DoubleVerify pedigree. They do not brief - they deliver.",
  },
  {
    mark: "E",
    title: "Experts - The Deep Nodes",
    body: "Highly specialised practitioners deployed per engagement. MarTech, performance, narrative, product marketing, commercial. No generalists. They own their IP.",
  },
  {
    mark: "A",
    title: "Associates - Apprentice-Explorers",
    body: "Early-career talent who learn through exposure to real, consequential problems, supported by AI-amplified senior performance.",
  },
];

const infrastructure = [
  {
    number: "01",
    title: "Zero-Legacy Value Model",
    body: "Built for value alignment, not value extraction. Divergent where legacy opcos are convergent. Recombinant where they are familiar. Bespoke where they upskill and hire.",
  },
  {
    number: "02",
    title: "RAG-Based AI Synthesis Layer",
    body: "The institutional brain that provokes questions, challenges assumptions, synthesises artefacts, and manages logistics. Institutional memory from day one.",
  },
  {
    number: "03",
    title: "Service Velocity Architecture",
    body: "Two deployment tiers: intensive days-to-weeks strategic challenges, and deeper weeks-to-months transformation programs.",
  },
  {
    number: "04",
    title: "Zero Fixed-Cost Architecture",
    body: "Zero real estate. Zero idle staff. Zero billable hour logic. Pure capability, activated on demand.",
  },
];

export function WhatModel() {
  return (
    <section className="bg-white px-page pb-24 pt-36 md:pt-40">
      <div className="grid gap-10 md:grid-cols-[7fr_4fr] md:gap-20">
        <div>
          <h1 className="font-display text-[clamp(4.2rem,9vw,10rem)] uppercase leading-[0.8] text-black">
            Not an agency.
            <br />
            <span className="text-transparent [-webkit-text-stroke:2px_var(--antigen-black)]">
              Not a consultancy.
            </span>
            <br />
            <span className="text-[var(--antigen-red)]">An intelligence collective.</span>
          </h1>
          <p className="mt-8 max-w-3xl text-2xl font-black leading-tight">
            ANTIGEN is a first-principles intelligence collective built as a
            distributed network of insurgent minds, augmented by AI provocation
            engines.
          </p>
        </div>
        <div className="space-y-5 text-base font-semibold leading-relaxed md:text-lg">
          <p>
            Zero legacy, zero bloat, zero inertia - systems created to solve
            today&apos;s unfamiliar growth problems.
          </p>
          <p>
            ANTIGEN replaces the agency&apos;s factory model - aggregating billable
            hours to cover fixed overhead - with a network model: orchestrating
            high-velocity insight at near-zero fixed cost.
          </p>
          <p>
            There are no employees, silos, or divisions.{" "}
            <strong>Cells form. Cells solve. Cells dissolve.</strong> Clients
            pay for the output, not the months.
          </p>
        </div>
      </div>

      <div className="mt-24 border border-black/15">
        <div className="grid grid-cols-[0.8fr_1fr_1fr] bg-black text-[0.7rem] font-black uppercase tracking-[0.1em] text-white">
          <div className="border-r border-white/15 p-4 text-white/45">Attribute</div>
          <div className="border-r border-white/15 bg-neutral-200 p-4 text-black/55">Legacy OpCos</div>
          <div className="p-4 text-[var(--antigen-yellow)]">The ANTIGEN Insurgence</div>
        </div>
        {comparisons.map(([attribute, legacy, antigen]) => (
          <div key={attribute} className="grid grid-cols-1 border-t border-black/15 md:grid-cols-[0.8fr_1fr_1fr]">
            <div className="bg-white p-4 text-xs font-black uppercase tracking-[0.08em] text-neutral-500 md:border-r md:border-black/15">
              {attribute}
            </div>
            <div className="bg-[var(--antigen-smoke)] p-4 text-sm font-bold md:border-r md:border-black/15">
              {legacy}
            </div>
            <div className="bg-black p-4 text-sm font-black text-[var(--antigen-yellow)]">
              {antigen}
            </div>
          </div>
        ))}
        <p className="bg-[var(--antigen-red)] p-5 text-xl font-black leading-tight text-white">
          Where traditional agencies sell <span className="text-[var(--antigen-yellow)]">effort</span>, ANTIGEN sells{" "}
          <span className="text-[var(--antigen-yellow)]">outcomes</span>. Where they sell hours, ANTIGEN sells intelligence.
        </p>
      </div>

      <div className="mt-24 bg-black px-page py-16 text-white md:py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.25fr]">
          <div>
            <h2 className="font-display text-[clamp(3.5rem,6vw,6rem)] uppercase leading-[0.82]">
              The space
              <br />
              <span className="text-[var(--antigen-yellow)]">ANTIGEN</span>
              <br />
              plays in
            </h2>
            <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-white/60">
              Positioning against the gravitational pull toward the average. The
              alpha is always in the uncomfortable territory.
            </p>
          </div>
          <div className="grid gap-1 md:grid-cols-2">
            {["Consulting Firms", "ANTIGEN", "Legacy OpCos", "In-House Upskill"].map((item) => (
              <div
                key={item}
                className={`min-h-44 border border-white/15 p-5 ${
                  item === "ANTIGEN" ? "bg-[var(--antigen-yellow)] text-black" : "bg-white/[0.04]"
                }`}
              >
                <p className="text-[0.62rem] font-black uppercase tracking-[0.1em] opacity-50">
                  {item === "ANTIGEN" ? "Q4 / Unfamiliar problem" : "Strategic quadrant"}
                </p>
                <p className="mt-10 font-display text-4xl uppercase leading-none">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-24 grid gap-10 bg-[var(--antigen-paper)] p-8 md:grid-cols-[4fr_7fr] md:p-14">
        <div>
          <h2 className="font-display text-[clamp(4rem,7vw,7rem)] uppercase leading-[0.8]">
            The <span className="text-[var(--antigen-red)]">cell</span>
            <br />
            model
          </h2>
          <p className="mt-4 text-sm font-black uppercase tracking-[0.1em] text-neutral-500">
            Pure signal. No overhead. No legacy.
          </p>
        </div>
        <div className="space-y-4">
          {cells.map((cell) => (
            <article key={cell.mark} className="grid gap-4 border-t-2 border-black pt-5 md:grid-cols-[4rem_1fr]">
              <div className="font-display text-6xl leading-none text-[var(--antigen-red)]">{cell.mark}</div>
              <div>
                <h3 className="text-lg font-black uppercase">{cell.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-neutral-600">{cell.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <h2 className="font-display text-[clamp(4rem,8vw,9rem)] uppercase leading-[0.82] text-black">
          The <span className="text-[var(--antigen-red)]">infrastructure</span>
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {infrastructure.map((item) => (
            <article key={item.number} className="border-t-[5px] border-[var(--antigen-red)] bg-[var(--antigen-paper)] p-6">
              <p className="font-display text-5xl leading-none text-[var(--antigen-red)]">{item.number}</p>
              <h3 className="mt-5 text-xl font-black uppercase">{item.title}</h3>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-neutral-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-24 grid gap-8 bg-[var(--antigen-red)] p-8 text-white md:grid-cols-[4fr_7fr] md:p-14">
        <h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.8]">
          A zero-
          <br />
          <span className="text-[var(--antigen-yellow)]">legacy</span>
          <br />
          model
        </h2>
        <div className="space-y-5 text-base font-semibold leading-relaxed md:text-lg">
          <p>
            Most attempts to fix agencies focus on surface-level change: flatter
            hierarchies, better culture, flexible work, AI tools bolted on top.
            These reforms fail because they do not address the underlying
            structural problem.
          </p>
          <p className="text-2xl font-black leading-tight">
            ANTIGEN is not a reform. It is a reconstruction from first principles.
          </p>
        </div>
      </div>
    </section>
  );
}
