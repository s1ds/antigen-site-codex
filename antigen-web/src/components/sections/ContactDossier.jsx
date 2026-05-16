const channels = [
  ["B", "Brief Us", "sid@1antigen.com", "Hard problems. Stalled growth. Pitch challenges."],
  ["J", "Join the Network", "Partner@1antigen.com", "Strategists, creatives, specialist practitioners."],
];

export function ContactDossier() {
  return (
    <section className="relative overflow-hidden bg-black px-page pb-20 pt-36 text-white md:pt-40">
      <div className="absolute inset-y-0 left-0 w-1 bg-antigen-red" />
      <h1 className="font-display text-[clamp(4.5rem,9vw,10rem)] uppercase leading-[0.82]">
        ANTIGEN
        <br />
        <span className="text-[var(--antigen-red)]">unlocks</span>
        <br />
        growth from
        <br />
        <span className="text-[var(--antigen-yellow)]">uncomfortable</span>
        <br />
        places.
      </h1>

      <div className="mt-10 flex flex-wrap gap-4 border border-white/10 bg-white/[0.03] p-5">
        {["Tier 1 - Available Now", "Accepting New Briefs", "Response within 24 hrs", "Network - Open"].map((item, index) => (
          <p key={item} className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.1em] text-white/45">
            <span className={`h-1.5 w-1.5 rounded-full ${index < 2 ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.7)]" : "bg-white/25"}`} />
            {item}
          </p>
        ))}
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-[5fr_6fr]">
        <div className="space-y-5 text-lg font-semibold leading-relaxed text-white/70">
          <p>We are ready to deliver today. If you have a hard problem - a brand that has gone average, a pitch you keep losing, a growth engine that has stalled - we want to hear about it.</p>
          <p>If you are a strategist, a creative, or a specialist practitioner who is done brokering inspiration for employment, we want to talk.</p>
          <p className="text-xs font-black uppercase tracking-[0.12em] text-[var(--antigen-yellow)]">Composable. Distributed. Insurgent.</p>
        </div>
        <div className="space-y-4">
          {channels.map(([icon, label, email, desc]) => (
            <a key={email} href={`mailto:${email}`} className="grid grid-cols-[3rem_1fr_auto] items-center gap-5 border border-white/10 p-5 transition hover:translate-x-1 hover:border-[var(--antigen-yellow)] hover:bg-[rgba(255,192,0,0.07)]">
              <span className="flex h-12 w-12 items-center justify-center bg-[var(--antigen-red)] font-display text-2xl">{icon}</span>
              <span>
                <span className="block text-xs font-black uppercase tracking-[0.1em] text-[var(--antigen-yellow)]">{label}</span>
                <span className="mt-1 block text-sm font-semibold text-white/80">{email}</span>
                <span className="mt-1 block text-xs font-semibold text-white/35">{desc}</span>
              </span>
              <span className="text-white/25">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-14 grid border border-white/10 md:grid-cols-3">
        {[
          ["Com", "posable"],
          ["Dis", "tributed"],
          ["In", "surgent"],
        ].map(([prefix, suffix]) => (
          <div key={prefix} className="border-b border-white/10 p-6 md:border-b-0 md:border-r">
            <p className="text-xs font-black uppercase tracking-[0.1em] text-white/25">Posture</p>
            <p className="mt-3 font-display text-[clamp(3rem,5vw,5rem)] uppercase leading-none">
              {prefix}<span className="text-[var(--antigen-red)]">{suffix}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
