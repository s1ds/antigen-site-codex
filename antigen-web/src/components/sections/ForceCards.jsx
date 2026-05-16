export function ForceCards({ items }) {
  return (
    <section className="section-pad bg-[var(--antigen-paper)]">
      <p className="kicker mb-8 text-[var(--antigen-red)]">Three forces</p>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <article key={item.title} className="border-2 border-black bg-white p-6">
            <p className="font-display text-5xl uppercase leading-none text-[var(--antigen-red)]">
              {item.title}
            </p>
            <p className="mt-5 text-sm font-bold leading-relaxed">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
