const humans = [
  ["Partners / The Stewards", "Senior Context Holders", "Manage relationships, carry reputational risk, and are accountable for outcomes. P&G, Coca-Cola, WPP, DoubleVerify and global holding company pedigree. They do not brief - they deliver."],
  ["Experts / The Deep Nodes", "Highly Specialised Practitioners", "MarTech, performance, narrative, product marketing, commercial. Plugged in per engagement. No generalists. They own their IP and define the terms of their engagement."],
  ["Associates / Apprentice-Explorers", "Early-Career Talent", "Learn through exposure to real, consequential problems. AI-supported senior performance means they operate above their level from day one."],
];

const engines = [
  ["The Provocateur", "Divergent Thinking / Permanent Dissent", "Acts as a permanent dissenter, challenging assumptions and preventing groupthink. The contrarian voice in every room.", "!?"],
  ["The Synthesizer", "RAG-Based / Institutional Memory", "Knowledge graphs carry institutional memory from day one. Collective wisdom is never lost. Knowledge compounds instead of departing with every strategist.", "<>"],
  ["The Scaffolding", "Structured Creativity / Divergent Output", "Structured creativity interfaces guide the creative process toward significantly more divergent output. Structure as a provocation engine.", "[]"],
];

export function WhoStack() {
  return (
    <section className="bg-antigen-red px-page pb-20 pt-36 text-white md:pt-40">
      <h1 className="font-display text-[clamp(4.5rem,10vw,11rem)] uppercase leading-[0.8]">
        <span className="block text-white/40 [-webkit-text-stroke:1.5px_rgba(255,255,255,0.35)]">The Human</span>
        <span className="block">x AI Stack.</span>
      </h1>

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="border-b border-white/20 pb-3 text-xs font-black uppercase tracking-[0.12em] text-[var(--antigen-yellow)]">
            Sovereign Humans - Curiosity, Curation, Connectivity
          </h2>
          <div className="mt-6 space-y-4">
            {humans.map(([tag, title, body]) => (
              <article key={tag} className="border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition hover:bg-white/15">
                <p className="text-xs font-black uppercase tracking-[0.1em] text-[var(--antigen-yellow)]">{tag}</p>
                <h3 className="mt-2 text-sm font-black uppercase tracking-wide">{title}</h3>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-white/70">{body}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="border-b border-white/20 pb-3 text-xs font-black uppercase tracking-[0.12em] text-[var(--antigen-yellow)]">
            Divergent Intelligence Engines - Memory and Counterfactual Synthesis
          </h2>
          <div className="mt-6 space-y-4">
            {engines.map(([name, sub, body, icon]) => (
              <article key={name} className="grid grid-cols-[1fr_auto] gap-5 border border-white/15 bg-black/25 p-5 transition hover:border-[rgba(255,192,0,0.45)] hover:bg-black/35">
                <div>
                  <h3 className="font-display text-[clamp(2rem,3vw,3rem)] uppercase leading-none">{name}</h3>
                  <p className="mt-2 text-xs font-black uppercase tracking-[0.1em] text-[var(--antigen-yellow)]">{sub}</p>
                  <p className="mt-3 text-sm font-semibold leading-relaxed text-white/70">{body}</p>
                </div>
                <p className="font-display text-6xl leading-none text-white/15">{icon}</p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-6 border border-white/15 bg-black/35 p-8 text-center">
        <p className="font-display text-[clamp(2rem,4vw,4rem)] uppercase leading-none">Sovereign Humans</p>
        <p className="font-display text-6xl text-[var(--antigen-yellow)]">x</p>
        <p className="font-display text-[clamp(2rem,4vw,4rem)] uppercase leading-none">Divergent Engines</p>
        <p className="font-display text-6xl text-[var(--antigen-yellow)]">=</p>
        <p className="font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-none text-[var(--antigen-yellow)]">The Human x AI Stack</p>
      </div>
    </section>
  );
}
