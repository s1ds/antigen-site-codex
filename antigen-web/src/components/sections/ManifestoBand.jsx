export function ManifestoBand({ title, body }) {
  return (
    <section className="section-pad bg-black text-white">
      <div className="grid gap-8 md:grid-cols-[0.85fr_1fr] md:items-end">
        <h2 className="display-lg text-[var(--antigen-yellow)]">{title}</h2>
        <p className="text-xl font-bold leading-tight md:text-3xl">{body}</p>
      </div>
    </section>
  );
}
