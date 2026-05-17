import { WhatMatrix } from "@/components/sections/WhatMatrix";

const stackInputs = [
  {
    title: "Sovereign Humans",
    body: "Curiosity. Curation. Connectivity.",
    detail:
      "High-judgement operators bring moral courage, taste, framing, and lived commercial pattern recognition.",
  },
  {
    title: "Provocation Algorithms",
    body: "Institutional memory. Counterfactual synthesis.",
    detail:
      "AI sense-amplification preserves context, detects patterns, challenges assumptions, and multiplies strategic options.",
  },
];

const advantages = [
  ["High fixed costs", "Zero fixed costs"],
  ["High employee churn", "Sovereign talent portability"],
  ["Artificial scarcity", "Infinite cognitive scale"],
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
            hours to cover fixed overhead - with a network model that orchestrates
            high-velocity insight at near-zero fixed cost.
          </p>
          <p>
            The machine provides memory and pattern detection. The human provides
            moral courage, taste, and framing.
          </p>
        </div>
      </div>

      <div className="mt-24 border-y border-black py-14 md:py-20">
        <p className="kicker text-[var(--antigen-red)]">ANTIGEN is</p>
        <h2 className="mt-4 max-w-6xl font-display text-[clamp(4rem,8vw,9rem)] uppercase leading-[0.82] text-black">
          Insurgent minds meet
          <br />
          <span className="text-[var(--antigen-red)]">provocation algorithms.</span>
        </h2>
        <p className="mt-8 max-w-5xl text-xl font-black leading-tight md:text-3xl">
          An interdependent joint cognitive system that binds sovereign humans
          with divergent engines.
        </p>

        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-[1fr_auto_1fr]">
          <article className="border border-black/15 bg-[var(--antigen-paper)] p-6 shadow-[8px_8px_0_var(--antigen-smoke)]">
            <p className="font-display text-6xl leading-none text-[var(--antigen-red)]">
              01
            </p>
            <h3 className="mt-5 text-2xl font-black uppercase">{stackInputs[0].title}</h3>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.08em] text-neutral-500">
              {stackInputs[0].body}
            </p>
            <p className="mt-5 text-sm font-semibold leading-relaxed text-neutral-600">
              {stackInputs[0].detail}
            </p>
          </article>
          <div className="flex items-center justify-center border border-black bg-black px-6 py-5 text-center font-display text-7xl leading-none text-[var(--antigen-yellow)]">
            x
          </div>
          <article className="border border-black/15 bg-[var(--antigen-paper)] p-6 shadow-[8px_8px_0_var(--antigen-smoke)]">
            <p className="font-display text-6xl leading-none text-[var(--antigen-red)]">
              02
            </p>
            <h3 className="mt-5 text-2xl font-black uppercase">{stackInputs[1].title}</h3>
            <p className="mt-2 text-sm font-black uppercase tracking-[0.08em] text-neutral-500">
              {stackInputs[1].body}
            </p>
            <p className="mt-5 text-sm font-semibold leading-relaxed text-neutral-600">
              {stackInputs[1].detail}
            </p>
          </article>
        </div>

        <div className="mx-auto mt-10 max-w-xl border-2 border-black bg-white p-5 text-center shadow-[8px_8px_0_var(--antigen-yellow)]">
          <p className="text-2xl font-black uppercase">The Human x AI Stack</p>
        </div>
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
          <WhatMatrix />
        </div>
      </div>

      <div className="mt-24 overflow-hidden bg-black text-white">
        <div className="grid gap-10 p-8 md:grid-cols-[4fr_7fr] md:p-14">
          <div>
            <p className="kicker text-[var(--antigen-yellow)]">Insurgent advantage</p>
            <h2 className="mt-4 font-display text-[clamp(4rem,8vw,9rem)] uppercase leading-[0.82]">
              For asymmetric
              <br />
              <span className="text-[var(--antigen-yellow)]">growth</span>
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-2xl font-black leading-tight md:text-4xl">
              The mechanism gains strength from volatility while legacy systems
              fracture.
            </p>
            <div className="mt-10 grid gap-4">
              {advantages.map(([legacy, antigen]) => (
                <div
                  key={legacy}
                  className="grid gap-3 border border-white/15 bg-white/[0.04] p-4 md:grid-cols-[1fr_1fr]"
                >
                  <p className="text-sm font-black uppercase tracking-[0.08em] text-white/40">
                    {legacy}
                  </p>
                  <p className="flex items-start gap-3 text-lg font-black text-[var(--antigen-yellow)]">
                    <span className="mt-1 inline-block h-3 w-3 shrink-0 border-b-2 border-r-2 border-[var(--antigen-yellow)] rotate-45" />
                    {antigen}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="bg-[var(--antigen-red)] p-6 text-2xl font-black leading-tight text-white md:px-14 md:text-4xl">
          Where traditional firms sell effort, ANTIGEN compounds intelligence.
        </p>
      </div>
    </section>
  );
}
