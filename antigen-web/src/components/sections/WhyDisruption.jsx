const forces = [
  {
    kicker: "Force 01 / Sameness",
    stat: "79",
    title: "Sameness",
    label: "Brands with no meaningful difference",
    body: "In 1970, 35% of top 100 songs had a key change. By 2021: 0.5%. The same compression is happening to every brand in every category. Optimisation engines making the same recommendations to the same briefs.",
  },
  {
    kicker: "Force 02 / Stagnation",
    stat: "29",
    title: "Stagnation",
    label: "Consumers who find advertising innovative",
    body: "The agency model was built for information scarcity, talent concentration, and high coordination costs. All three constraints have collapsed. The model hasn't.",
  },
  {
    kicker: "Force 03 / Suppression",
    stat: "4",
    title: "Suppression",
    label: "Agencies tying fees to business results",
    body: "64% of marketers report brief quality in decline. Fear of blandness ranks higher than AI as CMOs' #1 threat - at 47%. The structural model rewards slow work and scope creep.",
  },
];

export function WhyDisruption() {
  return (
    <section className="relative overflow-hidden bg-[var(--antigen-paper)] px-page pb-24 pt-36 md:pt-40">
      <div className="mb-24 grid gap-10 md:grid-cols-[5fr_6fr] md:gap-20">
        <h1 className="font-display text-[clamp(4.4rem,8.4vw,9rem)] uppercase leading-[0.82] text-black">
          Forces of disruption have shifted growth to{" "}
          <span className="text-[var(--antigen-red)]">uncomfortable places.</span>
        </h1>
        <div className="max-w-4xl space-y-5 text-base font-semibold leading-relaxed text-black md:text-lg">
          <p>
            We live in an Age of Average. Post-algorithm convergence engines are
            money-balling everything to homogeneity. The tools got faster. The
            ideas got slower. The industry kept billing.
          </p>
          <p>
            Three forces have permanently shifted growth to uncomfortable places
            - and none of them reward the legacy model that most agencies still run.
          </p>
          <p className="font-black text-[var(--antigen-red)]">
            Speed without direction. 2026 tools plugging into 2006 systems. That
            is not innovation. That is camouflage.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {forces.map((force) => (
          <article
            key={force.title}
            className="relative overflow-hidden border-t-[5px] border-[var(--antigen-red)] bg-white p-6 transition duration-300 after:absolute after:bottom-0 after:right-0 after:h-14 after:w-14 after:bg-[var(--antigen-smoke)] after:[clip-path:polygon(100%_0,100%_100%,0_100%)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(227,29,40,0.12)]"
          >
            <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.1em] text-[var(--antigen-red)]">
              {force.kicker}
            </p>
            <p className="flex items-start font-display text-[clamp(5rem,8.5vw,8rem)] uppercase leading-[0.78] text-black">
              <span>{force.stat}</span>
              <span className="ml-1 mt-2 text-[0.38em] leading-none">%</span>
            </p>
            <h2 className="mt-2 font-display text-[clamp(3.5rem,5vw,5rem)] uppercase leading-[0.82] text-[var(--antigen-red)]">
              {force.title}
            </h2>
            <div className="my-4">
              <div className="mb-1 flex justify-between gap-3 text-[0.62rem] font-black uppercase tracking-[0.08em] text-neutral-500">
                <span>{force.label}</span>
                <span>{force.stat}%</span>
              </div>
              <div className="relative h-1 overflow-hidden bg-[var(--antigen-smoke)]">
                <div
                  className="absolute inset-y-0 left-0 bg-[var(--antigen-red)]"
                  style={{ width: `${force.stat}%` }}
                />
              </div>
            </div>
            <p className="relative z-10 max-w-[38ch] text-sm font-bold leading-relaxed text-neutral-600">
              {force.body}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-24 grid gap-10 bg-black px-page py-16 text-white md:grid-cols-[4fr_7fr] md:items-center md:py-20">
        <h2 className="font-display text-[clamp(4rem,7vw,7.5rem)] uppercase leading-[0.8]">
          Our
          <br />
          existence
          <br />
          is a
          <br />
          <span className="text-[var(--antigen-red)]">reaction.</span>
        </h2>
        <div className="space-y-5 text-base font-semibold leading-relaxed text-white/75 md:text-lg">
          <p>
            Organisations are organisms. Systems of interconnected and
            interdependent parts that act, react, grow, shrink, thrive, diminish -
            based entirely on their ability to respond to threats.
          </p>
          <p>
            The first-principles question is not <em className="text-[var(--antigen-yellow)]">how do we fix the agency?</em>{" "}
            It is: if the agency didn&apos;t exist, what would you build instead?
          </p>
          <p>
            <strong className="text-white">The answer is not a better agency.</strong>{" "}
            It is a distributed intelligence network - fluid, sovereign,
            AI-augmented, and built to solve problems rather than sustain a
            billing model.
          </p>
          <p>
            Antigen introduces external agents of change into stagnant systems to
            provoke, stimulate, and generate breakthrough growth. That is what
            ANTIGEN is.
          </p>
        </div>
      </div>
    </section>
  );
}
