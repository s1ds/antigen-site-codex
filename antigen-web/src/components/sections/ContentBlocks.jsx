export function ContentBlocks({ blocks }) {
  return (
    <section className="section-pad bg-white">
      <div className="grid gap-6">
        {blocks.map((block) => (
          <article key={block.title} className="grid gap-5 border-t-2 border-black pt-6 md:grid-cols-[0.4fr_1fr]">
            <h2 className="font-display text-5xl uppercase leading-none text-[var(--antigen-red)]">
              {block.title}
            </h2>
            <div className="space-y-4 text-base font-semibold leading-relaxed md:text-lg">
              {block.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
